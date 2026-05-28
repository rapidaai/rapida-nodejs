import {
  handleBidiStreamingCall,
  Metadata,
  Server,
  ServerCredentials,
  ServerDuplexStream,
  ServerInterceptingCall,
  ServerInterceptingCallInterface,
  ServerInterceptor,
  ServerListenerBuilder,
  ServerMethodDefinition,
  UntypedServiceImplementation,
  status,
} from "@grpc/grpc-js";
import * as fs from "fs";

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

/**
 * Token authentication configuration for incoming AgentKit streams.
 */
export interface AuthConfigOptions {
  /** Enables or disables auth enforcement. Defaults to false. */
  enabled?: boolean;
  /** Static token expected in incoming gRPC metadata. */
  token?: string;
  /** Metadata key used for token lookup. Defaults to "authorization". */
  headerKey?: string;
  /**
   * Custom token validator. Takes precedence over static token comparison.
   *
   * Return true to allow the stream, false to reject it with UNAUTHENTICATED.
   */
  validator?: (token: string | undefined, metadata: Metadata) => boolean;
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
 * Runtime token-auth configuration for the AgentKit gRPC server.
 */
export class AuthConfig {
  /** Whether token auth is enforced. */
  enabled: boolean;
  /** Static token value used when no validator is supplied. */
  token?: string;
  /** Metadata key used to read the incoming token. */
  headerKey: string;
  /** Optional custom validator for token and metadata. */
  validator?: (token: string | undefined, metadata: Metadata) => boolean;

  constructor({
    enabled = false,
    token,
    headerKey = "authorization",
    validator,
  }: AuthConfigOptions = {}) {
    this.enabled = enabled;
    this.token = token;
    this.headerKey = headerKey;
    this.validator = validator;
  }
}

/**
 * gRPC server interceptor that enforces AgentKit token authentication.
 *
 * Valid streams continue to the agent handler. Invalid streams are rejected
 * with `UNAUTHENTICATED` before user messages are delivered to the agent.
 */
export class AuthorizationInterceptor {
  constructor(private readonly authConfig: AuthConfig) {}

  /**
   * Interceptor function passed to `@grpc/grpc-js` Server options.
   */
  intercept: ServerInterceptor = (
    methodDescriptor: ServerMethodDefinition<unknown, unknown>,
    call: ServerInterceptingCallInterface
  ): ServerInterceptingCall => {
    const listener = new ServerListenerBuilder()
      .withOnReceiveMetadata((metadata, next) => {
        if (this.isAuthorized(metadata)) {
          next(metadata);
          return;
        }

        call.sendStatus({
          code: status.UNAUTHENTICATED,
          details: "Invalid authorization token",
          metadata: new Metadata(),
        });
      })
      .build();

    return new ServerInterceptingCall(call, {
      start: (next) => next(listener),
    });
  };

  private isAuthorized(metadata: Metadata): boolean {
    if (!this.authConfig.enabled) {
      return true;
    }

    const token = this.getMetadataValue(metadata, this.authConfig.headerKey);
    if (this.authConfig.validator) {
      return this.authConfig.validator(token, metadata);
    }

    return token === this.authConfig.token;
  }

  private getMetadataValue(
    metadata: Metadata,
    key: string
  ): string | undefined {
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
    const message = request.getMessage();
    if (request.hasMessage() && message?.hasText()) {
      return message.getText();
    }
    return undefined;
  }

  /**
   * Returns the user message ID from any message request.
   */
  getMessageId(request: TalkInput): string | undefined {
    if (request.hasMessage()) {
      return request.getMessage()?.getId();
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
    return request.hasMessage();
  }

  /**
   * Checks whether a request contains a text user message.
   */
  isTextMessage(request: TalkInput): boolean {
    return request.hasMessage() && Boolean(request.getMessage()?.hasText());
  }

  /**
   * Checks whether a request contains an audio user message.
   */
  isAudioMessage(request: TalkInput): boolean {
    return request.hasMessage() && Boolean(request.getMessage()?.hasAudio());
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
  /** Optional token auth configuration. */
  authConfig?: AuthConfigOptions;
}

/**
 * Hosts an AgentKit `Talk` bidirectional gRPC service.
 *
 * This class manages server setup, service registration, optional TLS,
 * optional token auth, and lifecycle state. Agent business logic belongs in
 * the supplied `AgentKitAgent` or compatible service implementation.
 */
export class AgentKitServer {
  /** Registered AgentKit service implementation. */
  readonly agent: AgentKitServiceImplementation;
  /** Host/IP the server binds to. */
  readonly host: string;
  /** Port the server binds to. */
  readonly port: number;
  private readonly sslConfig?: SSLConfig;
  private readonly authConfig?: AuthConfig;
  private server?: Server;

  constructor({
    agent,
    host = "0.0.0.0",
    port = 50051,
    sslConfig,
    authConfig,
  }: AgentKitServerOptions) {
    this.agent = agent;
    this.host = host;
    this.port = port;
    this.sslConfig = sslConfig ? new SSLConfig(sslConfig) : undefined;
    this.authConfig = authConfig ? new AuthConfig(authConfig) : undefined;
  }

  /**
   * Binds and starts the gRPC server.
   */
  async start(): Promise<void> {
    const interceptors: ServerInterceptor[] = [];
    if (this.authConfig?.enabled) {
      interceptors.push(new AuthorizationInterceptor(this.authConfig).intercept);
    }

    this.server = new Server({ interceptors });
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
          reject(error);
          return;
        }
        this.server!.start();
        resolve();
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
    if (!this.server) {
      return;
    }

    const server = this.server;
    await new Promise<void>((resolve, reject) => {
      server.tryShutdown((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
    this.server = undefined;
  }

  /**
   * True after `start()` succeeds and before `stop()` completes.
   */
  get isRunning(): boolean {
    return this.server !== undefined;
  }

  /**
   * Host and port in `host:port` form.
   */
  get address(): string {
    return `${this.host}:${this.port}`;
  }
}
