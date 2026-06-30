import {
  type Deadline,
  handleBidiStreamingCall,
  handleUnaryCall,
  Metadata,
  Server,
  ServerCredentials,
  ServerDuplexStream,
  ServerInterceptingCall,
  ServerInterceptingCallInterface,
  ServerInterceptor,
  ServerListenerBuilder,
  ServerMethodDefinition,
  ServiceDefinition,
  UntypedServiceImplementation,
  status,
} from "@grpc/grpc-js";
import * as fs from "fs";
import * as http from "http";
import type { AddressInfo } from "net";

import { Error as ProtoError } from "@/rapida/clients/protos/common_pb";
import { TalkInput, TalkOutput } from "@/rapida/clients/protos/agentkit_pb";
import {
  ConversationAssistantMessage,
  ConversationConfiguration,
  ConversationInitialization,
  ConversationToolCall,
  ConversationToolCallResult,
  ToolCallAction,
} from "@/rapida/clients/protos/talk-api_pb";

const { AgentKitService } = require("../clients/protos/agentkit_grpc_pb");

const AGENTKIT_HEALTH_CHECK_PATH = "/grpc.health.v1.Health/Check";
const DEFAULT_AGENTKIT_HTTP_HEALTH_HOST = "0.0.0.0";
const DEFAULT_AGENTKIT_HTTP_HEALTH_PORT = 8080;
const DEFAULT_AGENTKIT_HTTP_HEALTH_PATH = "/healthz";

/**
 * Standard gRPC health-check status values.
 *
 * Kubernetes gRPC probes expect `SERVING` from `grpc.health.v1.Health/Check`.
 */
export enum AgentKitHealthServingStatus {
  UNKNOWN = 0,
  SERVING = 1,
  NOT_SERVING = 2,
  SERVICE_UNKNOWN = 3,
}

/** Request shape for `grpc.health.v1.Health/Check`. */
export interface AgentKitHealthCheckRequest {
  service: string;
}

/** Response shape for `grpc.health.v1.Health/Check`. */
export interface AgentKitHealthCheckResponse {
  status: AgentKitHealthServingStatus;
}

export type AgentKitHealthCheckHandler = handleUnaryCall<
  AgentKitHealthCheckRequest,
  AgentKitHealthCheckResponse
>;

/**
 * Optional HTTP health endpoint for Kubernetes HTTP probes.
 *
 * This starts a separate HTTP/1 server because the AgentKit gRPC server owns
 * the gRPC port. The endpoint returns 200 only when health status is `SERVING`.
 */
export interface AgentKitHTTPHealthCheckOptions {
  /** Host/IP to bind. Defaults to "0.0.0.0". */
  host?: string;
  /** Port to bind. Defaults to 8080. */
  port?: number;
  /** Health endpoint path. Defaults to "/healthz". */
  path?: string;
}

interface AgentKitHTTPHealthCheckConfig {
  host: string;
  port: number;
  path: string;
}

/**
 * Standard `grpc.health.v1.Health` service definition.
 *
 * It is hand-written to avoid requiring generated health-check artifacts in
 * every SDK package. The wire format matches the public gRPC health protocol.
 */
export const AgentKitHealthService = {
  check: {
    path: AGENTKIT_HEALTH_CHECK_PATH,
    requestStream: false,
    responseStream: false,
    requestSerialize: serializeHealthCheckRequest,
    requestDeserialize: deserializeHealthCheckRequest,
    responseSerialize: serializeHealthCheckResponse,
    responseDeserialize: deserializeHealthCheckResponse,
  },
} satisfies ServiceDefinition<UntypedServiceImplementation>;

/**
 * Key/value input accepted by AgentKit helper methods for tool arguments and
 * tool results. Values are serialized to strings because the current AgentKit
 * proto uses `map<string, string>` for those payloads.
 */
export type StringMap = Record<string, unknown>;

/**
 * Server-side bidirectional AgentKit stream.
 *
 * Rapida writes `TalkInput` messages to this stream. Agent implementations
 * respond by writing `TalkOutput` messages to the same stream.
 */
export type AgentKitCall = ServerDuplexStream<TalkInput, TalkOutput>;

/**
 * gRPC handler signature for the AgentKit `Talk` method.
 */
export type AgentKitTalkHandler = handleBidiStreamingCall<TalkInput, TalkOutput>;

function serializeHealthCheckRequest(
  request: AgentKitHealthCheckRequest
): Buffer {
  if (!request.service) {
    return Buffer.alloc(0);
  }

  const service = Buffer.from(request.service, "utf8");
  return Buffer.concat([
    Buffer.from([0x0a]),
    encodeHealthVarint(service.length),
    service,
  ]);
}

function deserializeHealthCheckRequest(buffer: Buffer): AgentKitHealthCheckRequest {
  let service = "";
  let offset = 0;

  while (offset < buffer.length) {
    const tag = readHealthVarint(buffer, offset);
    offset = tag.offset;
    const field = tag.value >> 3;
    const wireType = tag.value & 0x07;

    if (field === 1 && wireType === 2) {
      const length = readHealthVarint(buffer, offset);
      offset = length.offset;
      service = buffer.subarray(offset, offset + length.value).toString("utf8");
      offset += length.value;
      continue;
    }

    offset = skipHealthField(buffer, offset, wireType);
  }

  return { service };
}

function serializeHealthCheckResponse(
  response: AgentKitHealthCheckResponse
): Buffer {
  return Buffer.concat([
    Buffer.from([0x08]),
    encodeHealthVarint(response.status),
  ]);
}

function deserializeHealthCheckResponse(
  buffer: Buffer
): AgentKitHealthCheckResponse {
  let statusValue = AgentKitHealthServingStatus.UNKNOWN;
  let offset = 0;

  while (offset < buffer.length) {
    const tag = readHealthVarint(buffer, offset);
    offset = tag.offset;
    const field = tag.value >> 3;
    const wireType = tag.value & 0x07;

    if (field === 1 && wireType === 0) {
      const value = readHealthVarint(buffer, offset);
      offset = value.offset;
      statusValue = value.value as AgentKitHealthServingStatus;
      continue;
    }

    offset = skipHealthField(buffer, offset, wireType);
  }

  return { status: statusValue };
}

function encodeHealthVarint(value: number): Buffer {
  const bytes: number[] = [];
  let remaining = value >>> 0;

  do {
    let byte = remaining & 0x7f;
    remaining >>>= 7;
    if (remaining > 0) {
      byte |= 0x80;
    }
    bytes.push(byte);
  } while (remaining > 0);

  return Buffer.from(bytes);
}

function readHealthVarint(
  buffer: Buffer,
  offset: number
): { value: number; offset: number } {
  let value = 0;
  let shift = 0;

  while (offset < buffer.length) {
    const byte = buffer[offset++];
    value |= (byte & 0x7f) << shift;
    if ((byte & 0x80) === 0) {
      return { value, offset };
    }
    shift += 7;
  }

  throw new Error("Invalid gRPC health-check varint");
}

function skipHealthField(
  buffer: Buffer,
  offset: number,
  wireType: number
): number {
  switch (wireType) {
    case 0:
      return readHealthVarint(buffer, offset).offset;
    case 1:
      return offset + 8;
    case 2: {
      const length = readHealthVarint(buffer, offset);
      return length.offset + length.value;
    }
    case 5:
      return offset + 4;
    default:
      throw new Error(`Unsupported gRPC health-check wire type: ${wireType}`);
  }
}

/**
 * Minimal service shape required by `AgentKitServer`.
 *
 * Extend `AgentKitAgent` for helper methods, or provide any object with a
 * compatible `talk` handler.
 */
export interface AgentKitServiceImplementation {
  talk: AgentKitTalkHandler;
}

/**
 * TLS configuration for `AgentKitServer`.
 */
export interface SSLConfigOptions {
  /** Path to the public certificate chain file. */
  certPath: string;
  /** Path to the private key file. */
  keyPath: string;
  /** Optional CA certificate path. When present, client cert validation is enabled. */
  caCertPath?: string;
}

/** Incoming gRPC call context passed to AgentKit middleware. */
export interface AgentKitMiddlewareContext {
  /** Incoming gRPC metadata for this AgentKit stream. */
  metadata: Metadata;
  /** Full gRPC method path, for example `/talk_api.AgentKit/Talk`. */
  method: string;
  /** Remote peer reported by `@grpc/grpc-js`. */
  peer: string;
  /** Host reported by `@grpc/grpc-js`. */
  host: string;
  /** Deadline reported by `@grpc/grpc-js`. */
  deadline: Deadline;
  /** Returns the first metadata value as a string. */
  metadataValue(key: string): string | undefined;
  /**
   * Rejects the call before it reaches the agent.
   *
   * Defaults to `UNAUTHENTICATED` with a generic middleware rejection message.
   */
  reject(details?: string, code?: number, metadata?: Metadata): void;
}

export type AgentKitMiddlewareResult =
  | void
  | boolean
  | Promise<void | boolean>;

/**
 * Function middleware that runs before an incoming AgentKit gRPC call reaches
 * the registered service.
 */
export type AgentKitMiddlewareFunction = (
  context: AgentKitMiddlewareContext
) => AgentKitMiddlewareResult;

/**
 * Base class for reusable AgentKit middleware.
 *
 * Return false or call `context.reject()` to reject the call. Returning true or
 * undefined allows the next middleware to run.
 */
export abstract class Middleware {
  abstract handle(context: AgentKitMiddlewareContext): AgentKitMiddlewareResult;
}

/**
 * Middleware can be supplied as a function or as a `Middleware` instance.
 */
export type AgentKitMiddleware = AgentKitMiddlewareFunction | Middleware;

interface AgentKitMiddlewareRejection {
  code: number;
  details: string;
  metadata: Metadata;
}

/**
 * Loads server-side TLS credentials for AgentKit.
 */
export class SSLConfig {
  /** Path to the public certificate chain file. */
  certPath: string;
  /** Path to the private key file. */
  keyPath: string;
  /** Optional CA certificate path for client certificate validation. */
  caCertPath?: string;

  constructor({ certPath, keyPath, caCertPath }: SSLConfigOptions) {
    this.certPath = certPath;
    this.keyPath = keyPath;
    this.caCertPath = caCertPath;
  }

  /**
   * Reads configured certificate files and builds gRPC server credentials.
   */
  loadCredentials(): ServerCredentials {
    const privateKey = fs.readFileSync(this.keyPath);
    const certificateChain = fs.readFileSync(this.certPath);
    const rootCerts =
      this.caCertPath && fs.existsSync(this.caCertPath)
        ? fs.readFileSync(this.caCertPath)
        : null;

    return ServerCredentials.createSsl(
      rootCerts,
      [{ private_key: privateKey, cert_chain: certificateChain }],
      rootCerts !== null
    );
  }
}

/**
 * gRPC server interceptor that runs AgentKit middleware.
 *
 * Accepted calls continue to the service handler. Rejected calls are stopped
 * before user messages are delivered to the agent.
 */
export class AgentKitMiddlewareInterceptor {
  constructor(private readonly middleware: AgentKitMiddleware[]) {}

  /**
   * Interceptor function passed to `@grpc/grpc-js` Server options.
   */
  intercept: ServerInterceptor = (
    methodDescriptor: ServerMethodDefinition<unknown, unknown>,
    call: ServerInterceptingCallInterface
  ): ServerInterceptingCall => {
    const listener = new ServerListenerBuilder()
      .withOnReceiveMetadata((metadata, next) => {
        if (this.isHealthCheckMethod(methodDescriptor)) {
          next(metadata);
          return;
        }

        void this.runMiddleware(metadata, methodDescriptor, call)
          .then((rejection) => {
            if (!rejection) {
              next(metadata);
              return;
            }

            call.sendStatus(rejection);
          })
          .catch(() => {
            call.sendStatus({
              code: status.INTERNAL,
              details: "AgentKit middleware failed",
              metadata: new Metadata(),
            });
          });
      })
      .build();

    return new ServerInterceptingCall(call, {
      start: (next) => next(listener),
    });
  };

  private getMethodPath(
    methodDescriptor: ServerMethodDefinition<unknown, unknown>
  ): string {
    return (
      (methodDescriptor as ServerMethodDefinition<unknown, unknown> & {
        path?: string;
      }).path || ""
    );
  }

  private isHealthCheckMethod(
    methodDescriptor: ServerMethodDefinition<unknown, unknown>
  ): boolean {
    return this.getMethodPath(methodDescriptor) === AGENTKIT_HEALTH_CHECK_PATH;
  }

  private async runMiddleware(
    metadata: Metadata,
    methodDescriptor: ServerMethodDefinition<unknown, unknown>,
    call: ServerInterceptingCallInterface
  ): Promise<AgentKitMiddlewareRejection | undefined> {
    const method = this.getMethodPath(methodDescriptor);
    let rejection: AgentKitMiddlewareRejection | undefined;

    const context: AgentKitMiddlewareContext = {
      metadata,
      method,
      peer: call.getPeer(),
      host: call.getHost(),
      deadline: call.getDeadline(),
      metadataValue: (key: string) => this.getMetadataValue(metadata, key),
      reject: (
        details = "Rejected by AgentKit middleware",
        code = status.UNAUTHENTICATED,
        responseMetadata = new Metadata()
      ) => {
        rejection = { code, details, metadata: responseMetadata };
      },
    };

    for (const middleware of this.middleware) {
      try {
        const result = await this.runOne(middleware, context);
        if (result === false && !rejection) {
          context.reject();
        }
        if (rejection) {
          return rejection;
        }
      } catch {
        return {
          code: status.INTERNAL,
          details: "AgentKit middleware failed",
          metadata: new Metadata(),
        };
      }
    }

    return undefined;
  }

  private runOne(
    middleware: AgentKitMiddleware,
    context: AgentKitMiddlewareContext
  ): AgentKitMiddlewareResult {
    if (typeof middleware === "function") {
      return middleware(context);
    }
    return middleware.handle(context);
  }

  private getMetadataValue(metadata: Metadata, key: string): string | undefined {
    const value = metadata.get(key)[0];
    if (Buffer.isBuffer(value)) {
      return value.toString();
    }
    return value;
  }
}

/**
 * Base class for implementing a custom AgentKit voice agent.
 *
 * Subclass this and override `talk(call)` with your conversation logic.
 * The helper methods build `TalkOutput` responses and inspect incoming
 * `TalkInput` requests while preserving the AgentKit wire protocol.
 */
export class AgentKitAgent implements AgentKitServiceImplementation {
  /**
   * Handles one bidirectional AgentKit conversation stream.
   *
   * Override this in subclasses. The default implementation emits an
   * UNIMPLEMENTED error.
   */
  talk(call: AgentKitCall): void {
    call.emit("error", {
      code: status.UNIMPLEMENTED,
      details: "Method not implemented!",
    });
  }

  /**
   * Converts arbitrary object values to the string map format used by the proto.
   */
  protected stringifyMap(values?: StringMap | null): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [key, value] of Object.entries(values || {})) {
      result[String(key)] = String(value);
    }
    return result;
  }

  /**
   * Builds a generic `TalkOutput`.
   *
   * Most callers should use the more specific helpers below.
   */
  response({
    code = 200,
    success = true,
    initialization,
    assistant,
    toolCall,
    toolCallResult,
    error,
  }: {
    code?: number;
    success?: boolean;
    initialization?: ConversationInitialization;
    assistant?: ConversationAssistantMessage;
    toolCall?: ConversationToolCall;
    toolCallResult?: ConversationToolCallResult;
    error?: ProtoError;
  } = {}): TalkOutput {
    const output = new TalkOutput();
    output.setCode(code);
    output.setSuccess(success);
    if (initialization) output.setInitialization(initialization);
    if (assistant) output.setAssistant(assistant);
    if (toolCall) output.setToolcall(toolCall);
    if (toolCallResult) output.setToolcallresult(toolCallResult);
    if (error) output.setError(error);
    return output;
  }

  /**
   * Acknowledges `ConversationInitialization`.
   *
   * This should generally be the first response written for a new stream.
   */
  initializationResponse(
    initialization: ConversationInitialization
  ): TalkOutput {
    return this.response({ initialization });
  }

  /**
   * Acknowledges `ConversationConfiguration`.
   *
   * The current `TalkOutput` proto has no configuration payload, so this
   * returns a successful acknowledgement with no data oneof set.
   */
  configurationResponse(
    _configuration?: ConversationConfiguration
  ): TalkOutput {
    return this.response();
  }

  /**
   * Builds an assistant text response.
   *
   * Use `completed=false` for streaming chunks and `completed=true` for the
   * final response for a user turn.
   */
  assistantResponse(
    msgId: string,
    content: string,
    completed = false
  ): TalkOutput {
    const assistant = new ConversationAssistantMessage();
    assistant.setId(msgId);
    assistant.setCompleted(completed);
    assistant.setText(content);
    return this.response({ assistant });
  }

  /**
   * Builds a failed `TalkOutput` with an AgentKit error payload.
   */
  errorResponse(code: number, message: string): TalkOutput {
    const error = new ProtoError();
    error.setErrorcode(String(code));
    error.setErrormessage(message);
    return this.response({ code, success: false, error });
  }

  /**
   * Emits a tool call request.
   *
   * Tool arguments are stringified into the proto `args` map.
   */
  toolCall(
    msgId: string,
    toolId: string,
    name: string,
    args?: StringMap | null
  ): TalkOutput {
    const toolCall = new ConversationToolCall();
    toolCall.setId(String(msgId));
    toolCall.setToolid(String(toolId));
    toolCall.setName(String(name));
    this.setMapValues(toolCall.getArgsMap(), this.stringifyMap(args));
    return this.response({ toolCall });
  }

  /**
   * Emits a tool call result.
   *
   * Object results are stringified key by key. Non-object results are stored
   * under the `result` key. Failed results encode `success=false` in the result
   * map to match the current proto shape.
   */
  toolCallResult(
    msgId: string,
    toolId: string,
    name: string,
    result: unknown,
    success = true
  ): TalkOutput {
    const resultMap: Record<string, string> = {};
    if (result !== null && result !== undefined) {
      if (typeof result === "object" && !Array.isArray(result)) {
        Object.assign(resultMap, this.stringifyMap(result as StringMap));
      } else {
        resultMap.result = String(result);
      }
    }
    if (!success && resultMap.success === undefined) {
      resultMap.success = "false";
    }

    const toolCallResult = new ConversationToolCallResult();
    toolCallResult.setId(String(msgId));
    toolCallResult.setToolid(String(toolId));
    toolCallResult.setName(String(name));
    this.setMapValues(toolCallResult.getResultMap(), resultMap);
    return this.response({ toolCallResult });
  }

  /**
   * Emits a channel action requesting conversation transfer.
   */
  transferCall(msgId: string, args?: StringMap | null): TalkOutput {
    const toolCall = new ConversationToolCall();
    toolCall.setId(String(msgId));
    toolCall.setAction(ToolCallAction.TOOL_CALL_ACTION_TRANSFER_CONVERSATION);
    this.setMapValues(toolCall.getArgsMap(), this.stringifyMap(args));
    return this.response({ toolCall });
  }

  /**
   * Emits a channel action requesting conversation termination.
   */
  terminateCall(msgId: string, args?: StringMap | null): TalkOutput {
    const toolCall = new ConversationToolCall();
    toolCall.setId(String(msgId));
    toolCall.setAction(ToolCallAction.TOOL_CALL_ACTION_END_CONVERSATION);
    this.setMapValues(toolCall.getArgsMap(), this.stringifyMap(args));
    return this.response({ toolCall });
  }

  /**
   * Returns user text from a text `ConversationUserMessage`.
   */
  getUserText(request: TalkInput): string | undefined {
    const message = request.getUser();
    if (request.hasUser() && message?.hasText()) {
      return message.getText();
    }
    return undefined;
  }

  /**
   * Returns the user message ID from any message request.
   */
  getMessageId(request: TalkInput): string | undefined {
    if (request.getUser()) {
      return request.getUser()?.getId();
    }
    return undefined;
  }

  /**
   * Returns the assistant conversation ID from an initialization request.
   */
  getConversationId(request: TalkInput): string | undefined {
    if (request.hasInitialization()) {
      return request.getInitialization()?.getAssistantconversationid();
    }
    return undefined;
  }

  /**
   * Returns the assistant ID from an initialization request.
   */
  getAssistantId(request: TalkInput): string | undefined {
    const initialization = request.getInitialization();
    if (request.hasInitialization() && initialization?.hasAssistant()) {
      return initialization.getAssistant()?.getAssistantid();
    }
    return undefined;
  }

  /**
   * Checks whether a request contains `ConversationInitialization`.
   */
  isInitializationRequest(request: TalkInput): boolean {
    return request.hasInitialization();
  }

  /**
   * Checks whether a request contains `ConversationConfiguration`.
   */
  isConfigurationRequest(request: TalkInput): boolean {
    return request.hasConfiguration();
  }

  /**
   * Checks whether a request contains `ConversationUserMessage`.
   */
  isMessageRequest(request: TalkInput): boolean {
    return request.hasUser();
  }

  /**
   * Checks whether a request contains a text user message.
   */
  isTextMessage(request: TalkInput): boolean {
    return request.hasUser() && Boolean(request.getUser()?.hasText());
  }

  /**
   * Checks whether a request contains an audio user message.
   */
  isAudioMessage(request: TalkInput): boolean {
    return request.hasUser() && Boolean(request.getUser()?.hasAudio());
  }

  private setMapValues(
    map: { set(key: string, value: string): unknown },
    values: Record<string, string>
  ): void {
    for (const [key, value] of Object.entries(values)) {
      map.set(key, value);
    }
  }
}

/**
 * Options for creating an AgentKit gRPC server.
 */
export interface AgentKitServerOptions {
  /** Agent service implementation to register. */
  agent: AgentKitServiceImplementation;
  /** Host/IP to bind. Defaults to "0.0.0.0". */
  host?: string;
  /** Port to bind. Defaults to 50051. */
  port?: number;
  /** Optional TLS configuration. Omit for an insecure local server. */
  sslConfig?: SSLConfigOptions;
  /** Optional middleware pipeline for incoming AgentKit gRPC calls. */
  middleware?: AgentKitMiddleware[];
  /**
   * Registers the standard `grpc.health.v1.Health/Check` service.
   *
   * Enabled by default so Kubernetes gRPC probes can check this same port.
   */
  healthCheck?: boolean;
  /**
   * Optional HTTP health endpoint for Kubernetes HTTP probes.
   *
   * Provide this only when an HTTP probe must be exposed on a separate port.
   */
  httpHealthCheck?: AgentKitHTTPHealthCheckOptions;
}

/**
 * Hosts an AgentKit `Talk` bidirectional gRPC service.
 *
 * This class manages server setup, service registration, optional TLS,
 * optional middleware, and lifecycle state. Agent business logic
 * belongs in the supplied `AgentKitAgent` or compatible service implementation.
 */
export class AgentKitServer {
  /** Registered AgentKit service implementation. */
  readonly agent: AgentKitServiceImplementation;
  /** Host/IP the server binds to. */
  readonly host: string;
  /** Port the server binds to. */
  readonly port: number;
  private readonly sslConfig?: SSLConfig;
  private readonly middleware: AgentKitMiddleware[];
  private readonly healthCheck: boolean;
  private readonly httpHealthCheck?: AgentKitHTTPHealthCheckConfig;
  private healthServingStatus = AgentKitHealthServingStatus.NOT_SERVING;
  private server?: Server;
  private httpHealthServer?: http.Server;

  constructor({
    agent,
    host = "0.0.0.0",
    port = 50051,
    sslConfig,
    middleware = [],
    healthCheck = true,
    httpHealthCheck,
  }: AgentKitServerOptions) {
    this.agent = agent;
    this.host = host;
    this.port = port;
    this.sslConfig = sslConfig ? new SSLConfig(sslConfig) : undefined;
    this.middleware = middleware;
    this.healthCheck = healthCheck;
    this.httpHealthCheck = this.createHTTPHealthCheckConfig(httpHealthCheck);
  }

  /**
   * Binds and starts the gRPC server.
   */
  async start(): Promise<void> {
    const interceptors: ServerInterceptor[] = [];
    if (this.middleware.length > 0) {
      interceptors.push(
        new AgentKitMiddlewareInterceptor(this.middleware).intercept
      );
    }

    this.healthServingStatus = AgentKitHealthServingStatus.NOT_SERVING;
    this.server = new Server({ interceptors });
    if (this.healthCheck) {
      this.server.addService(
        AgentKitHealthService,
        this.createHealthService()
      );
    }
    this.server.addService(
      AgentKitService,
      this.agent as unknown as UntypedServiceImplementation
    );

    const credentials = this.sslConfig
      ? this.sslConfig.loadCredentials()
      : ServerCredentials.createInsecure();

    await new Promise<void>((resolve, reject) => {
      this.server!.bindAsync(this.address, credentials, (error) => {
        if (error) {
          this.server = undefined;
          this.healthServingStatus = AgentKitHealthServingStatus.NOT_SERVING;
          reject(error);
          return;
        }
        this.server!.start();
        this.healthServingStatus = AgentKitHealthServingStatus.SERVING;
        this.startHTTPHealthCheck()
          .then(resolve)
          .catch((httpError) => {
            this.healthServingStatus = AgentKitHealthServingStatus.NOT_SERVING;
            this.server?.tryShutdown(() => {
              this.server = undefined;
              reject(httpError);
            });
          });
      });
    });
  }

  /**
   * Gracefully stops the gRPC server.
   *
   * The `grace` parameter is accepted for parity with other SDKs. `grpc-js`
   * exposes graceful shutdown through `tryShutdown`, so the value is currently
   * not passed to the runtime.
   */
  async stop(_grace = 5): Promise<void> {
    if (!this.server && !this.httpHealthServer) {
      return;
    }

    this.healthServingStatus = AgentKitHealthServingStatus.NOT_SERVING;
    const server = this.server;
    const httpHealthServer = this.httpHealthServer;
    this.server = undefined;
    this.httpHealthServer = undefined;

    await Promise.all([
      server
        ? new Promise<void>((resolve, reject) => {
            server.tryShutdown((error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve();
            });
          })
        : Promise.resolve(),
      httpHealthServer
        ? new Promise<void>((resolve, reject) => {
            httpHealthServer.close((error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve();
            });
          })
        : Promise.resolve(),
    ]);
  }

  /**
   * True after `start()` succeeds and before `stop()` completes.
   */
  get isRunning(): boolean {
    return this.server !== undefined;
  }

  /**
   * Current response status for the gRPC health-check service.
   */
  get healthStatus(): AgentKitHealthServingStatus {
    return this.healthServingStatus;
  }

  /**
   * Bound HTTP health address, when HTTP health is enabled.
   */
  get httpHealthAddress(): string | undefined {
    if (!this.httpHealthCheck) {
      return undefined;
    }
    const address = this.httpHealthServer?.address();
    if (address && typeof address !== "string") {
      return `${this.formatHTTPHost(address)}:${address.port}`;
    }
    return `${this.httpHealthCheck.host}:${this.httpHealthCheck.port}`;
  }

  /**
   * Overrides the health-check status returned from `grpc.health.v1.Health/Check`.
   *
   * This is useful when the process is alive but the agent should temporarily
   * be removed from Kubernetes service endpoints.
   */
  setHealthStatus(status: AgentKitHealthServingStatus): void {
    this.healthServingStatus = status;
  }

  /**
   * Host and port in `host:port` form.
   */
  get address(): string {
    return `${this.host}:${this.port}`;
  }

  private createHealthService(): UntypedServiceImplementation {
    return {
      check: ((_call, callback) => {
        callback(null, { status: this.healthServingStatus });
      }) as AgentKitHealthCheckHandler,
    };
  }

  private createHTTPHealthCheckConfig(
    options?: AgentKitHTTPHealthCheckOptions
  ): AgentKitHTTPHealthCheckConfig | undefined {
    if (!options) {
      return undefined;
    }
    return {
      host: options.host || DEFAULT_AGENTKIT_HTTP_HEALTH_HOST,
      port: options.port ?? DEFAULT_AGENTKIT_HTTP_HEALTH_PORT,
      path: options.path || DEFAULT_AGENTKIT_HTTP_HEALTH_PATH,
    };
  }

  private async startHTTPHealthCheck(): Promise<void> {
    if (!this.httpHealthCheck || this.httpHealthServer) {
      return;
    }

    this.httpHealthServer = http.createServer((request, response) => {
      this.handleHTTPHealthCheck(request, response);
    });

    await new Promise<void>((resolve, reject) => {
      const server = this.httpHealthServer!;
      const onError = (error: Error) => {
        server.off("error", onError);
        this.httpHealthServer = undefined;
        reject(error);
      };

      server.once("error", onError);
      server.listen(
        this.httpHealthCheck!.port,
        this.httpHealthCheck!.host,
        () => {
          server.off("error", onError);
          resolve();
        }
      );
    });
  }

  private handleHTTPHealthCheck(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    if (!this.httpHealthCheck) {
      response.writeHead(404).end();
      return;
    }

    const path = request.url?.split("?")[0] || "/";
    if (path !== this.httpHealthCheck.path) {
      response.writeHead(404).end();
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { allow: "GET, HEAD" }).end();
      return;
    }

    const serving =
      this.healthServingStatus === AgentKitHealthServingStatus.SERVING;
    const body = JSON.stringify({
      status:
        AgentKitHealthServingStatus[this.healthServingStatus] || "UNKNOWN",
    });

    response.writeHead(serving ? 200 : 503, {
      "content-type": "application/json",
      "content-length": Buffer.byteLength(body),
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    response.end(body);
  }

  private formatHTTPHost(address: AddressInfo): string {
    return address.family === "IPv6" ? `[${address.address}]` : address.address;
  }
}
