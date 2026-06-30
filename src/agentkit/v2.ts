import {
  handleBidiStreamingCall,
  ServerDuplexStream,
  status,
} from "@grpc/grpc-js";
import { randomUUID } from "crypto";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

import { Error as ProtoError } from "@/rapida/clients/protos/common_pb";
import { TalkInput, TalkOutput } from "@/rapida/clients/protos/agentkit_pb";
import {
  ObservabilityEventRecord,
  ObservabilityLogRecord,
  ObservabilityMetricRecord,
  ObservabilityRecord,
  ObservabilityRecordKind,
  ObservabilityRecordKindMap,
} from "@/rapida/clients/protos/observability-api_pb";
import {
  ConversationAssistantMessage,
  ConversationConfiguration,
  ConversationInitialization,
  ConversationInterruption,
  ConversationToolCall,
  ConversationToolCallResult,
  ConversationUserMessage,
  ToolCallAction,
  ToolCallActionMap,
} from "@/rapida/clients/protos/talk-api_pb";

const { AgentKitService } = require("../clients/protos/agentkit_grpc_pb") as {
  AgentKitService: unknown;
};

/**
 * Raw gRPC bidirectional stream used by the AgentKit `Talk` RPC.
 *
 * Most application code should not use this directly. It is exposed so
 * advanced integrations and tests can still work with the underlying stream.
 */
export type AgentKitCall = ServerDuplexStream<TalkInput, TalkOutput>;

/**
 * gRPC-compatible handler function for `AgentKit.Talk`.
 *
 * `AgentRunner` implements this handler and is what `AgentKitServer` registers.
 */
export type AgentKitTalkHandler = handleBidiStreamingCall<TalkInput, TalkOutput>;

/**
 * Value map accepted by AgentKit tool helpers.
 *
 * The wire protocol currently stores tool args/results as `map<string,string>`,
 * so helper methods stringify every value before writing a packet.
 */
export type AgentStringMap = Record<string, unknown>;

/** Generated proto enum type for interruption packets. */
export type AgentInterruptionType =
  ConversationInterruption.InterruptionTypeMap[keyof ConversationInterruption.InterruptionTypeMap];

/** Generated proto enum type for tool-call action packets. */
export type AgentToolCallAction = ToolCallActionMap[keyof ToolCallActionMap];

/** Generated proto enum type for observability records. */
export type AgentObservabilityRecordKind =
  ObservabilityRecordKindMap[keyof ObservabilityRecordKindMap];

/**
 * Parsed initialization packet.
 *
 * This is the first packet Rapida sends for a conversation. The runner uses
 * `assistantId` and `assistantVersion` to choose which per-conversation
 * `Agent` class should handle the stream.
 */
export interface AgentInitialization {
  /** Stable discriminant for event-style handling. */
  type: "initialization";
  /** Rapida assistant conversation ID. This becomes `Agent.contextId`. */
  contextId: string;
  /** Assistant ID from the initialization assistant definition. */
  assistantId?: string;
  /** Assistant version from the initialization assistant definition. */
  assistantVersion?: string;
  /** Original generated proto message for advanced users. */
  raw: ConversationInitialization;
}

/** Parsed conversation configuration packet. */
export interface AgentConfiguration {
  type: "configuration";
  /** Numeric generated `StreamMode` value. */
  streamMode: number;
  /** Original generated proto message for advanced users. */
  raw: ConversationConfiguration;
}

/** Parsed user message sent by Rapida to the custom AgentKit server. */
export interface AgentUserMessage {
  type: "user";
  /** User-message ID. Replies default to this ID while handling the message. */
  id: string;
  /** Text payload when the user message contains text. */
  text?: string;
  /** Audio payload when the user message contains audio. */
  audio?: Uint8Array;
  /** True when this is the final chunk for the user turn. */
  completed: boolean;
  /** Original generated proto message for advanced users. */
  raw: ConversationUserMessage;
}

/** Parsed assistant message injected by Rapida into the AgentKit server. */
export interface AgentAssistantMessage {
  type: "assistant";
  id: string;
  text?: string;
  audio?: Uint8Array;
  completed: boolean;
  /** Original generated proto message for advanced users. */
  raw: ConversationAssistantMessage;
}

/** Parsed interruption packet, typically pushed when Rapida interrupts flow. */
export interface AgentInterruption {
  type: "interruption";
  id: string;
  interruptionType: AgentInterruptionType;
  /** Original generated proto message for advanced users. */
  raw: ConversationInterruption;
}

/**
 * Parsed tool-call packet.
 *
 * Tool calls can represent normal tools or special channel actions such as
 * transfer/end conversation through the `action` field.
 */
export interface AgentToolCall {
  type: "tool_call";
  /** Message ID this tool call belongs to. */
  id: string;
  /** Stable tool-call ID used to pair a call with its result. */
  toolId: string;
  /** Tool name. Special actions may leave this empty. */
  name: string;
  /** Generated `ToolCallAction` enum value. */
  action: AgentToolCallAction;
  /** Stringified tool args from the proto map. */
  args: Record<string, string>;
  /** Original generated proto message for advanced users. */
  raw: ConversationToolCall;
}

/** Parsed tool-call result packet. */
export interface AgentToolCallResult {
  type: "tool_call_result";
  id: string;
  toolId: string;
  name: string;
  action: AgentToolCallAction;
  /** Stringified result map from the proto packet. */
  result: Record<string, string>;
  /** Original generated proto message for advanced users. */
  raw: ConversationToolCallResult;
}

/**
 * Payload accepted by message builders.
 *
 * Passing a string is the common case and creates a completed text message.
 * Passing an object gives control over ID, text/audio, and completion status.
 */
export type AgentMessagePayload =
  | string
  | {
      id?: string;
      text?: string;
      audio?: Uint8Array | string;
      completed?: boolean;
    };

/** Payload for emitting a tool call from the AgentKit server to Rapida. */
export interface AgentToolCallPayload {
  /** Message ID this tool call belongs to. Defaults to empty string. */
  id?: string;
  /** Stable tool-call ID. Rapida uses this to pair result/log events. */
  toolId?: string;
  /** Tool name. Leave empty only for special action packets. */
  name?: string;
  /** Optional special action, such as transfer or end conversation. */
  action?: AgentToolCallAction;
  /** Values are stringified into the proto `args` map. */
  args?: AgentStringMap | null;
}

/** Payload for emitting a tool-call result from AgentKit server to Rapida. */
export interface AgentToolCallResultPayload {
  id?: string;
  toolId?: string;
  name?: string;
  action?: AgentToolCallAction;
  /** Object values become map entries; primitives are stored under `result`. */
  result?: unknown;
  /** When false, `success=false` is added to the result map if not present. */
  success?: boolean;
}

/** Payload for emitting an AgentKit error packet. */
export interface AgentErrorPayload {
  /** Numeric status code written to `TalkOutput.code`. Defaults to 500. */
  code?: number;
  /** Technical error message written to the proto error payload. */
  message: string;
  /** Optional user-facing message for downstream display or logging. */
  humanMessage?: string;
}

/**
 * Shared fields accepted by log/event/metric helpers.
 *
 * `context` is intended for correlation fields such as conversation ID, while
 * `attributes` carries record-specific dimensions.
 */
export interface AgentObservabilityPayload {
  id?: string;
  projectId?: string;
  organizationId?: string;
  scope?: string;
  scopeAttributes?: AgentStringMap | null;
  attributes?: AgentStringMap | null;
  context?: AgentStringMap | null;
  occurredAt?: Date;
}

/** Payload for `Agent.log(...)` and `AgentConversation.log(...)`. */
export interface AgentLogPayload extends AgentObservabilityPayload {
  level?: string;
  message: string;
}

/** Payload for `Agent.event(...)` and `AgentConversation.event(...)`. */
export interface AgentEventPayload extends AgentObservabilityPayload {
  event: string;
  component?: string;
}

/** Payload for `Agent.metric(...)` and `AgentConversation.metric(...)`. */
export interface AgentMetricPayload extends AgentObservabilityPayload {
  name: string;
  value: string | number | boolean;
  description?: string;
}

/**
 * Controls automatic SDK instrumentation.
 *
 * Set `instrumentation: false` in `Agent.runner(...)` options to disable SDK
 * lifecycle telemetry while keeping explicit `log/event/metric` helpers.
 */
export interface AgentInstrumentationOptions {
  enabled?: boolean;
  projectId?: string;
  organizationId?: string;
  scope?: string;
  component?: string;
  attributes?: AgentStringMap | null;
  context?: AgentStringMap | null;
}

/**
 * Constructor type for per-conversation agents.
 *
 * A new instance is created for every incoming AgentKit conversation stream.
 */
export type AgentClass<T extends Agent = Agent> = new (
  conversation: AgentConversation
) => T;

/** Factory used when an agent needs app dependencies or custom routing logic. */
export type AgentFactory<T extends Agent = Agent> = (
  conversation: AgentConversation,
  initialization: AgentInitialization
) => T;

/**
 * Declarative route from assistant metadata to an `Agent` class.
 *
 * If `version` is omitted, the route matches any version for the assistant ID
 * unless a more specific assistant ID + version route exists.
 */
export interface AgentRoute<T extends Agent = Agent> {
  assistantId: string;
  version?: string;
  agent: AgentClass<T>;
}

/**
 * Options for `Agent.runner(...)`.
 *
 * Resolution order:
 * 1. `createAgent`, when provided.
 * 2. Exact assistant ID + version route.
 * 3. Assistant ID route without version.
 * 4. `default` agent class.
 */
export interface AgentRunnerOptions<T extends Agent = Agent> {
  /** Fallback agent when no route matches or initialization is missing. */
  default?: AgentClass<T>;
  /** Declarative assistant/version routes. */
  agents?: AgentRoute<T>[];
  /** Full-control factory for dependency injection or custom routing. */
  createAgent?: AgentFactory<T>;
  /** Automatic lifecycle instrumentation. Defaults to enabled. */
  instrumentation?: boolean | AgentInstrumentationOptions;
}

/** Input accepted by `Agent.runner(...)`. */
export type AgentRunnerInput<T extends Agent = Agent> =
  | AgentClass<T>
  | AgentRunnerOptions<T>;

type AgentObservabilityProtoBase = {
  setProjectid(value: string): void;
  setOrganizationid(value: string): void;
  setScope(value: string): void;
  getScopeattributesMap(): { set(key: string, value: string): unknown };
  getAttributesMap(): { set(key: string, value: string): unknown };
  getContextMap(): { set(key: string, value: string): unknown };
  setOccurredat(value?: Timestamp): void;
};

/**
 * Per-conversation transport object. Most application code should use the
 * convenience methods inherited from `Agent`; this object remains available
 * when direct stream actions are needed.
 */
export class AgentConversation {
  /** Rapida assistant conversation ID. Empty until initialization is received. */
  contextId = "";
  /** Assistant ID selected for this conversation. */
  assistantId?: string;
  /** Assistant version selected for this conversation. */
  assistantVersion?: string;
  /** Parsed initialization packet for this conversation. */
  initialization?: AgentInitialization;
  /** Latest parsed configuration packet for this conversation. */
  configuration?: AgentConfiguration;
  /** Per-conversation mutable app state. Never shared across conversations. */
  readonly state: Record<string, unknown> = {};
  private activeMessageId = "";
  private closed = false;

  constructor(
    private readonly call: AgentKitCall,
    private readonly runner: AgentRunner
  ) {}

  /**
   * Writes a raw `TalkOutput` packet to the stream.
   *
   * Prefer the higher-level helpers (`reply`, `callTool`, `error`, etc.) unless
   * you are building a packet manually.
   */
  send(packet: TalkOutput): Promise<void> {
    return new Promise((resolve, reject) => {
      this.call.write(packet, (error?: Error | null) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }

  /**
   * Sends an assistant reply.
   *
   * While inside `Agent.onUser`, string replies automatically reuse the active
   * user message ID. This keeps response packets correlated with the user turn.
   */
  reply(message: AgentMessagePayload): Promise<void> {
    return this.send(
      this.runner.assistantMessage(
        typeof message === "string"
          ? { id: this.activeMessageId, text: message, completed: true }
          : { ...message, id: message.id || this.activeMessageId }
      )
    );
  }

  /** Sends an assistant message without applying any additional semantics. */
  sendAssistant(message: AgentMessagePayload): Promise<void> {
    return this.send(this.runner.assistantMessage(message));
  }

  /**
   * Sends a user message packet to Rapida.
   *
   * This is primarily for advanced server-to-client injection flows.
   */
  sendUser(message: AgentMessagePayload): Promise<void> {
    return this.send(this.runner.userMessage(message));
  }

  /** Emits a tool call packet to Rapida. */
  callTool(payload: AgentToolCallPayload): Promise<void> {
    return this.send(this.runner.toolCallMessage(payload));
  }

  /** Emits a tool-call result packet to Rapida. */
  sendToolResult(payload: AgentToolCallResultPayload): Promise<void> {
    return this.send(this.runner.toolCallResultMessage(payload));
  }

  /**
   * Sends an interruption packet.
   *
   * If no ID is provided while handling a user message, the active user message
   * ID is used.
   */
  interrupt(id = this.activeMessageId): Promise<void> {
    return this.send(this.runner.interruptionMessage({ id }));
  }

  /** Requests conversation transfer through the tool-call action channel. */
  transfer(args?: AgentStringMap | null): Promise<void> {
    return this.callTool({
      id: this.activeMessageId,
      action: ToolCallAction.TOOL_CALL_ACTION_TRANSFER_CONVERSATION,
      args,
    });
  }

  /** Requests conversation termination through the tool-call action channel. */
  endConversation(args?: AgentStringMap | null): Promise<void> {
    return this.callTool({
      id: this.activeMessageId,
      action: ToolCallAction.TOOL_CALL_ACTION_END_CONVERSATION,
      args,
    });
  }

  /** Emits a non-stream-level AgentKit error packet. */
  error(payload: AgentErrorPayload): Promise<void> {
    return this.send(this.runner.errorMessage(payload));
  }

  /** Emits an observability record to Rapida. */
  observability(record: ObservabilityRecord): Promise<void> {
    return this.send(this.runner.observabilityMessage(record));
  }

  /** Emits an observability log record to Rapida. */
  log(payload: AgentLogPayload): Promise<void> {
    return this.observability(this.runner.logRecord(payload, this));
  }

  /** Emits an observability event record to Rapida. */
  event(payload: AgentEventPayload): Promise<void> {
    return this.observability(this.runner.eventRecord(payload, this));
  }

  /** Emits an observability metric record to Rapida. */
  metric(payload: AgentMetricPayload): Promise<void> {
    return this.observability(this.runner.metricRecord(payload, this));
  }

  /**
   * Closes this side of the gRPC stream.
   *
   * This method is idempotent so lifecycle paths can safely call it from both
   * normal close and error cleanup.
   */
  close(): void {
    if (this.closed) {
      return;
    }
    this.closed = true;
    this.call.end();
  }

  /** Stores initialization metadata once the first packet arrives. */
  setInitialization(initialization: AgentInitialization): void {
    this.initialization = initialization;
    this.contextId = initialization.contextId;
    this.assistantId = initialization.assistantId;
    this.assistantVersion = initialization.assistantVersion;
  }

  /** Stores the latest stream configuration. */
  setConfiguration(configuration: AgentConfiguration): void {
    this.configuration = configuration;
  }

  /**
   * Tracks the user message currently being handled.
   *
   * This powers `reply("text")` correlation without forcing developers to copy
   * message IDs through their agent code.
   */
  setActiveUser(user?: AgentUserMessage): void {
    this.activeMessageId = user?.id || "";
  }
}

/**
 * One `Agent` instance is created for each AgentKit conversation stream.
 * Subclass this and override the packet lifecycle methods you need.
 */
export class Agent {
  /**
   * A fresh `Agent` is constructed for each conversation stream.
   *
   * Store per-conversation state on `this.state`; avoid module-level state
   * unless it is intentionally shared across all conversations.
   */
  constructor(readonly conversation: AgentConversation) {}

  /**
   * Adapts one `Agent` class into the service implementation expected by
   * `AgentKitServer`.
   */
  static runner<T extends Agent>(agent: AgentClass<T>): AgentRunner<T>;
  /**
   * Adapts a routed/factory configuration into the service implementation
   * expected by `AgentKitServer`.
   */
  static runner<T extends Agent>(options: AgentRunnerOptions<T>): AgentRunner<T>;
  static runner<T extends Agent>(
    input: AgentRunnerInput<T>
  ): AgentRunner<T> {
    return new AgentRunner(input);
  }

  /** Rapida assistant conversation ID. */
  get contextId(): string {
    return this.conversation.contextId;
  }

  /** Assistant ID used to route this conversation. */
  get assistantId(): string | undefined {
    return this.conversation.assistantId;
  }

  /** Assistant version used to route this conversation. */
  get assistantVersion(): string | undefined {
    return this.conversation.assistantVersion;
  }

  /** Per-conversation mutable app state. */
  get state(): Record<string, unknown> {
    return this.conversation.state;
  }

  /** Sends an assistant reply. */
  reply(message: AgentMessagePayload): Promise<void> {
    return this.conversation.reply(message);
  }

  /** Sends an assistant packet. */
  sendAssistant(message: AgentMessagePayload): Promise<void> {
    return this.conversation.sendAssistant(message);
  }

  /** Sends a user packet, usually for advanced injection flows. */
  sendUser(message: AgentMessagePayload): Promise<void> {
    return this.conversation.sendUser(message);
  }

  /** Emits a tool call to Rapida. */
  callTool(payload: AgentToolCallPayload): Promise<void> {
    return this.conversation.callTool(payload);
  }

  /** Emits a tool-call result to Rapida. */
  sendToolResult(payload: AgentToolCallResultPayload): Promise<void> {
    return this.conversation.sendToolResult(payload);
  }

  /** Sends an interruption packet. */
  interrupt(id?: string): Promise<void> {
    return this.conversation.interrupt(id);
  }

  /** Requests conversation transfer. */
  transfer(args?: AgentStringMap | null): Promise<void> {
    return this.conversation.transfer(args);
  }

  /** Requests conversation termination. */
  endConversation(args?: AgentStringMap | null): Promise<void> {
    return this.conversation.endConversation(args);
  }

  /** Emits an AgentKit error packet. */
  error(payload: AgentErrorPayload): Promise<void> {
    return this.conversation.error(payload);
  }

  /** Emits an observability record. */
  observability(record: ObservabilityRecord): Promise<void> {
    return this.conversation.observability(record);
  }

  /** Emits an observability log record. */
  log(payload: AgentLogPayload): Promise<void> {
    return this.conversation.log(payload);
  }

  /** Emits an observability event record. */
  event(payload: AgentEventPayload): Promise<void> {
    return this.conversation.event(payload);
  }

  /** Emits an observability metric record. */
  metric(payload: AgentMetricPayload): Promise<void> {
    return this.conversation.metric(payload);
  }

  /** Closes this conversation stream. */
  close(): void {
    this.conversation.close();
  }

  /** Called after initialization is acknowledged and the Agent is created. */
  async onInitialization(_initialization: AgentInitialization): Promise<void> {}

  /** Called after a configuration packet is acknowledged. */
  async onConfiguration(_configuration: AgentConfiguration): Promise<void> {}

  /** Called for user message packets. Most agents only need this method. */
  async onUser(_user: AgentUserMessage): Promise<void> {}

  /** Called when Rapida injects an assistant message into the agent. */
  async onAssistant(_assistant: AgentAssistantMessage): Promise<void> {}

  /** Called when Rapida sends an interruption event. */
  async onInterruption(_interruption: AgentInterruption): Promise<void> {}

  /** Called when Rapida sends a tool-call event to the agent. */
  async onToolCall(_toolCall: AgentToolCall): Promise<void> {}

  /** Called when Rapida sends a tool-call result event to the agent. */
  async onToolCallResult(
    _toolCallResult: AgentToolCallResult
  ): Promise<void> {}

  /** Called after the input stream ends and queued packet handling completes. */
  async onClose(): Promise<void> {}

  /**
   * Called when packet handling throws or the stream emits an error.
   *
   * The default implementation sends a non-success AgentKit error packet.
   */
  async onError(error: unknown): Promise<void> {
    await this.error({
      code: status.INTERNAL,
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

/**
 * Adapts per-conversation `Agent` classes into the gRPC service implementation
 * expected by `AgentKitServer`.
 */
export class AgentRunner<T extends Agent = Agent> {
  /** Generated gRPC service definition, useful for direct server registration. */
  static readonly service = AgentKitService;
  /** Instance-level service definition for consumers that prefer object access. */
  readonly service = AgentKitService;
  private readonly options: AgentRunnerOptions<T>;
  private readonly instrumentation: Required<
    Pick<AgentInstrumentationOptions, "enabled" | "scope" | "component">
  > &
    Omit<AgentInstrumentationOptions, "enabled" | "scope" | "component">;

  /**
   * Creates a runner from a single agent class or a routing configuration.
   *
   * `Agent.runner(...)` is the preferred public constructor because it reads
   * better at call sites used with `AgentKitServer`.
   */
  constructor(input: AgentRunnerInput<T>) {
    this.options =
      typeof input === "function" ? { default: input } : { ...input };
    this.instrumentation = this.normalizeInstrumentation(
      typeof input === "function" ? undefined : input.instrumentation
    );
  }

  /**
   * gRPC `Talk` handler registered by `AgentKitServer`.
   *
   * Each invocation represents one conversation stream. The runner creates one
   * `AgentConversation`, then one routed `Agent` instance after initialization.
   */
  talk: AgentKitTalkHandler = (call: AgentKitCall) => {
    const conversation = new AgentConversation(call, this);
    let agent: T | undefined;
    let processing = Promise.resolve();

    call.on("data", (input: TalkInput) => {
      // Preserve input order even when user lifecycle methods are async.
      // gRPC can deliver packets quickly; this queue ensures a later packet does
      // not overtake initialization, configuration, or an in-flight user turn.
      processing = processing
        .then(async () => {
          agent = await this.handleInput(conversation, agent, input);
        })
        .catch(async (error) => {
          await this.handleError(conversation, agent, error);
        });
    });

    call.on("end", () => {
      void processing
        .then(async () => {
          if (agent) {
            await agent.onClose();
            await this.instrumentEvent(conversation, "agentkit.conversation.closed");
          }
        })
        .finally(() => conversation.close());
    });

    call.on("error", (error) => {
      conversation.setActiveUser(undefined);
      void this.handleError(conversation, agent, error);
    });
  };

  /** Parses an initialization packet, or returns null for other packets. */
  initialization(input: TalkInput): AgentInitialization | null {
    const initialization = input.getInitialization();
    if (!input.hasInitialization() || !initialization) {
      return null;
    }

    const assistant = initialization.getAssistant();
    return {
      type: "initialization",
      contextId: initialization.getAssistantconversationid(),
      assistantId: assistant?.getAssistantid(),
      assistantVersion: assistant?.getVersion(),
      raw: initialization,
    };
  }

  /** Parses a configuration packet, or returns null for other packets. */
  configuration(input: TalkInput): AgentConfiguration | null {
    const configuration = input.getConfiguration();
    if (!input.hasConfiguration() || !configuration) {
      return null;
    }

    return {
      type: "configuration",
      streamMode: configuration.getStreammode(),
      raw: configuration,
    };
  }

  /** Parses a user message packet, or returns null for other packets. */
  user(input: TalkInput): AgentUserMessage | null {
    const user = input.getUser();
    if (!input.hasUser() || !user) {
      return null;
    }

    return {
      type: "user",
      id: user.getId(),
      text: user.hasText() ? user.getText() : undefined,
      audio: user.hasAudio() ? user.getAudio_asU8() : undefined,
      completed: user.getCompleted(),
      raw: user,
    };
  }

  /** Parses an assistant injection packet, or returns null for other packets. */
  assistant(input: TalkInput): AgentAssistantMessage | null {
    const assistant = input.getAssistant();
    if (!input.hasAssistant() || !assistant) {
      return null;
    }

    return {
      type: "assistant",
      id: assistant.getId(),
      text: assistant.hasText() ? assistant.getText() : undefined,
      audio: assistant.hasAudio() ? assistant.getAudio_asU8() : undefined,
      completed: assistant.getCompleted(),
      raw: assistant,
    };
  }

  /** Parses an interruption packet, or returns null for other packets. */
  interruption(input: TalkInput): AgentInterruption | null {
    const interruption = input.getInterruption();
    if (!input.hasInterruption() || !interruption) {
      return null;
    }

    return {
      type: "interruption",
      id: interruption.getId(),
      interruptionType: interruption.getType(),
      raw: interruption,
    };
  }

  /** Parses a tool-call packet, or returns null for other packets. */
  toolCall(input: TalkInput): AgentToolCall | null {
    const toolCall = input.getToolcall();
    if (!input.hasToolcall() || !toolCall) {
      return null;
    }

    return {
      type: "tool_call",
      id: toolCall.getId(),
      toolId: toolCall.getToolid(),
      name: toolCall.getName(),
      action: toolCall.getAction(),
      args: this.readStringMap(toolCall.getArgsMap()),
      raw: toolCall,
    };
  }

  /** Parses a tool-call result packet, or returns null for other packets. */
  toolCallResult(input: TalkInput): AgentToolCallResult | null {
    const toolCallResult = input.getToolcallresult();
    if (!input.hasToolcallresult() || !toolCallResult) {
      return null;
    }

    return {
      type: "tool_call_result",
      id: toolCallResult.getId(),
      toolId: toolCallResult.getToolid(),
      name: toolCallResult.getName(),
      action: toolCallResult.getAction(),
      result: this.readStringMap(toolCallResult.getResultMap()),
      raw: toolCallResult,
    };
  }

  /** Builds the initialization acknowledgement packet. */
  initializationMessage(initialization: ConversationInitialization): TalkOutput {
    return this.response({ initialization });
  }

  /** Builds the configuration acknowledgement packet. */
  configurationMessage(): TalkOutput {
    return this.response();
  }

  /** Builds an assistant message output packet. */
  assistantMessage(message: AgentMessagePayload): TalkOutput {
    const payload = this.normalizeMessagePayload(message);
    const assistant = new ConversationAssistantMessage();
    assistant.setId(payload.id || "");
    assistant.setCompleted(payload.completed ?? true);
    if (payload.audio !== undefined) {
      assistant.setAudio(payload.audio);
    } else {
      assistant.setText(payload.text || "");
    }
    return this.response({ assistant });
  }

  /** Builds a user message output packet. */
  userMessage(message: AgentMessagePayload): TalkOutput {
    const payload = this.normalizeMessagePayload(message);
    const user = new ConversationUserMessage();
    user.setId(payload.id || "");
    user.setCompleted(payload.completed ?? true);
    if (payload.audio !== undefined) {
      user.setAudio(payload.audio);
    } else {
      user.setText(payload.text || "");
    }
    return this.response({ user });
  }

  /** Builds an interruption output packet. */
  interruptionMessage({
    id = "",
    type = ConversationInterruption.InterruptionType
      .INTERRUPTION_TYPE_UNSPECIFIED,
  }: {
    id?: string;
    type?: AgentInterruptionType;
  } = {}): TalkOutput {
    const interruption = new ConversationInterruption();
    interruption.setId(id);
    interruption.setType(type);
    return this.response({ interruption });
  }

  /** Builds a tool-call output packet. */
  toolCallMessage(payload: AgentToolCallPayload): TalkOutput {
    const toolCall = new ConversationToolCall();
    toolCall.setId(payload.id || "");
    toolCall.setToolid(payload.toolId || "");
    toolCall.setName(payload.name || "");
    if (payload.action !== undefined) {
      toolCall.setAction(payload.action);
    }
    this.setMapValues(toolCall.getArgsMap(), this.stringifyMap(payload.args));
    return this.response({ toolCall });
  }

  /** Builds a tool-call result output packet. */
  toolCallResultMessage(payload: AgentToolCallResultPayload): TalkOutput {
    const toolCallResult = new ConversationToolCallResult();
    toolCallResult.setId(payload.id || "");
    toolCallResult.setToolid(payload.toolId || "");
    toolCallResult.setName(payload.name || "");
    if (payload.action !== undefined) {
      toolCallResult.setAction(payload.action);
    }
    this.setMapValues(
      toolCallResult.getResultMap(),
      this.stringifyResult(payload.result, payload.success ?? true)
    );
    return this.response({ toolCallResult });
  }

  /** Builds a non-success AgentKit error output packet. */
  errorMessage({
    code = 500,
    message,
    humanMessage,
  }: AgentErrorPayload): TalkOutput {
    const error = new ProtoError();
    error.setErrorcode(String(code));
    error.setErrormessage(message);
    if (humanMessage) {
      error.setHumanmessage(humanMessage);
    }
    return this.response({ code, success: false, error });
  }

  /** Builds an observability output packet. */
  observabilityMessage(record: ObservabilityRecord): TalkOutput {
    return this.response({ observability: record });
  }

  /** Builds an observability log record. */
  logRecord(
    payload: AgentLogPayload,
    conversation?: AgentConversation
  ): ObservabilityRecord {
    const log = new ObservabilityLogRecord();
    log.setId(payload.id || this.newTelemetryId());
    log.setKind(ObservabilityRecordKind.OBSERVABILITY_RECORD_KIND_LOG);
    log.setLevel(payload.level || "info");
    log.setMessage(payload.message);
    this.applyObservabilityBase(log, payload, conversation);

    const record = new ObservabilityRecord();
    record.setLog(log);
    return record;
  }

  /** Builds an observability event record. */
  eventRecord(
    payload: AgentEventPayload,
    conversation?: AgentConversation
  ): ObservabilityRecord {
    const event = new ObservabilityEventRecord();
    event.setId(payload.id || this.newTelemetryId());
    event.setKind(ObservabilityRecordKind.OBSERVABILITY_RECORD_KIND_EVENT);
    event.setEvent(payload.event);
    event.setComponent(payload.component || this.instrumentation.component);
    this.applyObservabilityBase(event, payload, conversation);

    const record = new ObservabilityRecord();
    record.setEvent(event);
    return record;
  }

  /** Builds an observability metric record. */
  metricRecord(
    payload: AgentMetricPayload,
    conversation?: AgentConversation
  ): ObservabilityRecord {
    const metric = new ObservabilityMetricRecord();
    metric.setId(payload.id || this.newTelemetryId());
    metric.setKind(ObservabilityRecordKind.OBSERVABILITY_RECORD_KIND_METRIC);
    metric.setName(payload.name);
    metric.setValue(String(payload.value));
    metric.setDescription(payload.description || "");
    this.applyObservabilityBase(metric, payload, conversation);

    const record = new ObservabilityRecord();
    record.setMetric(metric);
    return record;
  }

  /**
   * Builds a raw `TalkOutput` envelope.
   *
   * This is the lowest-level output builder. Public helpers above keep packet
   * construction consistent and should be preferred by application code.
   */
  response({
    code = 200,
    success = true,
    initialization,
    interruption,
    user,
    assistant,
    toolCall,
    toolCallResult,
    error,
    observability,
  }: {
    code?: number;
    success?: boolean;
    initialization?: ConversationInitialization;
    interruption?: ConversationInterruption;
    user?: ConversationUserMessage;
    assistant?: ConversationAssistantMessage;
    toolCall?: ConversationToolCall;
    toolCallResult?: ConversationToolCallResult;
    error?: ProtoError;
    observability?: ObservabilityRecord;
  } = {}): TalkOutput {
    const output = new TalkOutput();
    output.setCode(code);
    output.setSuccess(success);
    if (initialization) output.setInitialization(initialization);
    if (interruption) output.setInterruption(interruption);
    if (user) output.setUser(user);
    if (assistant) output.setAssistant(assistant);
    if (toolCall) output.setToolcall(toolCall);
    if (toolCallResult) output.setToolcallresult(toolCallResult);
    if (error) output.setError(error);
    if (observability) output.setObservability(observability);
    return output;
  }

  /**
   * Routes one inbound packet to the active per-conversation Agent.
   *
   * Initialization is special: it creates the agent instance and acknowledges
   * readiness before calling the app-level lifecycle hook.
   */
  private async handleInput(
    conversation: AgentConversation,
    agent: T | undefined,
    input: TalkInput
  ): Promise<T | undefined> {
    const initialization = this.initialization(input);
    if (initialization) {
      conversation.setInitialization(initialization);
      const activeAgent = agent || this.createAgent(conversation, initialization);
      await conversation.send(this.initializationMessage(initialization.raw));
      await this.instrumentEvent(conversation, "agentkit.conversation.initialized");
      const startedAt = Date.now();
      await activeAgent.onInitialization(initialization);
      await this.instrumentMetric(conversation, {
        name: "agentkit.lifecycle.initialization.duration_ms",
        value: Date.now() - startedAt,
      });
      return activeAgent;
    }

    const activeAgent = this.requireAgent(agent, conversation);

    const configuration = this.configuration(input);
    if (configuration) {
      conversation.setConfiguration(configuration);
      await conversation.send(this.configurationMessage());
      await this.instrumentEvent(conversation, "agentkit.configuration.received", {
        streamMode: configuration.streamMode,
      });
      await activeAgent.onConfiguration(configuration);
      return activeAgent;
    }

    const user = this.user(input);
    if (user) {
      await this.instrumentEvent(conversation, "agentkit.user.received", {
        messageId: user.id,
        messageType: user.text !== undefined ? "text" : user.audio ? "audio" : "empty",
        completed: user.completed,
      });
      conversation.setActiveUser(user);
      const startedAt = Date.now();
      try {
        await activeAgent.onUser(user);
      } finally {
        conversation.setActiveUser(undefined);
      }
      await this.instrumentMetric(conversation, {
        name: "agentkit.user.handler.duration_ms",
        value: Date.now() - startedAt,
        attributes: {
          messageId: user.id,
        },
      });
      return activeAgent;
    }

    const assistant = this.assistant(input);
    if (assistant) {
      await this.instrumentEvent(conversation, "agentkit.assistant.received", {
        messageId: assistant.id,
        messageType:
          assistant.text !== undefined ? "text" : assistant.audio ? "audio" : "empty",
        completed: assistant.completed,
      });
      await activeAgent.onAssistant(assistant);
      return activeAgent;
    }

    const interruption = this.interruption(input);
    if (interruption) {
      await this.instrumentEvent(conversation, "agentkit.interruption.received", {
        interruptionId: interruption.id,
        interruptionType: interruption.interruptionType,
      });
      await activeAgent.onInterruption(interruption);
      return activeAgent;
    }

    const toolCall = this.toolCall(input);
    if (toolCall) {
      await this.instrumentEvent(conversation, "agentkit.tool_call.received", {
        messageId: toolCall.id,
        toolId: toolCall.toolId,
        name: toolCall.name,
        action: toolCall.action,
      });
      await activeAgent.onToolCall(toolCall);
      return activeAgent;
    }

    const toolCallResult = this.toolCallResult(input);
    if (toolCallResult) {
      await this.instrumentEvent(conversation, "agentkit.tool_call_result.received", {
        messageId: toolCallResult.id,
        toolId: toolCallResult.toolId,
        name: toolCallResult.name,
        action: toolCallResult.action,
      });
      await activeAgent.onToolCallResult(toolCallResult);
      return activeAgent;
    }

    return activeAgent;
  }

  /** Creates the per-conversation Agent after initialization metadata arrives. */
  private createAgent(
    conversation: AgentConversation,
    initialization: AgentInitialization
  ): T {
    if (this.options.createAgent) {
      return this.options.createAgent(conversation, initialization);
    }

    const AgentClass = this.resolveAgentClass(initialization);
    if (!AgentClass) {
      throw new Error(
        `No Agent route found for assistantId=${initialization.assistantId || ""} version=${initialization.assistantVersion || ""}`
      );
    }

    return new AgentClass(conversation);
  }

  /**
   * Resolves a route using assistant ID and version.
   *
   * Specific versioned routes win over assistant-only routes. The default class
   * is used only when no route matches.
   */
  private resolveAgentClass(
    initialization: AgentInitialization
  ): AgentClass<T> | undefined {
    const routes = this.options.agents || [];
    const exact = routes.find(
      (route) =>
        route.assistantId === initialization.assistantId &&
        route.version === initialization.assistantVersion
    );
    if (exact) {
      return exact.agent;
    }

    const assistantOnly = routes.find(
      (route) =>
        route.assistantId === initialization.assistantId &&
        route.version === undefined
    );
    return assistantOnly?.agent || this.options.default;
  }

  /**
   * Returns the active agent, or creates the default agent for rare streams
   * that send a non-initialization packet first.
   */
  private requireAgent(
    agent: T | undefined,
    conversation: AgentConversation
  ): T {
    if (agent) {
      return agent;
    }

    if (this.options.default) {
      return new this.options.default(conversation);
    }

    throw new Error("AgentKit initialization must be received before events");
  }

  /**
   * Centralizes error dispatch so app-level `onError` can decide how to report
   * or recover from failures.
   */
  private async handleError(
    conversation: AgentConversation,
    agent: T | undefined,
    error: unknown
  ): Promise<void> {
    try {
      await this.instrumentLog(conversation, {
        level: "error",
        message: error instanceof Error ? error.message : String(error),
      });
      if (agent) {
        await agent.onError(error);
        return;
      }

      await conversation.error({
        code: status.INTERNAL,
        message: error instanceof Error ? error.message : String(error),
      });
    } catch {
      conversation.close();
    }
  }

  private async instrumentEvent(
    conversation: AgentConversation,
    event: string,
    attributes?: AgentStringMap | null
  ): Promise<void> {
    if (!this.instrumentation.enabled) {
      return;
    }

    await this.safeObservability(
      conversation,
      this.eventRecord(
        {
          event,
          attributes,
        },
        conversation
      )
    );
  }

  private async instrumentMetric(
    conversation: AgentConversation,
    payload: AgentMetricPayload
  ): Promise<void> {
    if (!this.instrumentation.enabled) {
      return;
    }

    await this.safeObservability(
      conversation,
      this.metricRecord(payload, conversation)
    );
  }

  private async instrumentLog(
    conversation: AgentConversation,
    payload: AgentLogPayload
  ): Promise<void> {
    if (!this.instrumentation.enabled) {
      return;
    }

    await this.safeObservability(conversation, this.logRecord(payload, conversation));
  }

  private async safeObservability(
    conversation: AgentConversation,
    record: ObservabilityRecord
  ): Promise<void> {
    try {
      await conversation.observability(record);
    } catch {
      // Instrumentation should never become the reason a conversation fails.
    }
  }

  private normalizeInstrumentation(
    instrumentation?: boolean | AgentInstrumentationOptions
  ): Required<Pick<AgentInstrumentationOptions, "enabled" | "scope" | "component">> &
    Omit<AgentInstrumentationOptions, "enabled" | "scope" | "component"> {
    if (instrumentation === false) {
      return {
        enabled: false,
        scope: "agentkit.nodejs",
        component: "agentkit-sdk",
      };
    }

    if (instrumentation === true || instrumentation === undefined) {
      return {
        enabled: true,
        scope: "agentkit.nodejs",
        component: "agentkit-sdk",
      };
    }

    return {
      ...instrumentation,
      enabled: instrumentation.enabled ?? true,
      scope: instrumentation.scope || "agentkit.nodejs",
      component: instrumentation.component || "agentkit-sdk",
    };
  }

  private applyObservabilityBase(
    record: AgentObservabilityProtoBase,
    payload: AgentObservabilityPayload,
    conversation?: AgentConversation
  ): void {
    record.setProjectid(
      payload.projectId || this.instrumentation.projectId || ""
    );
    record.setOrganizationid(
      payload.organizationId || this.instrumentation.organizationId || ""
    );
    record.setScope(payload.scope || this.instrumentation.scope);
    record.setOccurredat(this.timestampFromDate(payload.occurredAt || new Date()));

    this.setMapValues(
      record.getScopeattributesMap(),
      this.stringifyMap(payload.scopeAttributes)
    );
    this.setMapValues(
      record.getAttributesMap(),
      this.stringifyMap({
        ...(this.instrumentation.attributes || {}),
        ...(payload.attributes || {}),
      })
    );
    this.setMapValues(
      record.getContextMap(),
      this.stringifyMap({
        ...(this.instrumentation.context || {}),
        ...this.conversationContext(conversation),
        ...(payload.context || {}),
      })
    );
  }

  private conversationContext(
    conversation?: AgentConversation
  ): Record<string, string> {
    if (!conversation) {
      return {};
    }

    return {
      contextId: conversation.contextId,
      assistantId: conversation.assistantId || "",
      assistantVersion: conversation.assistantVersion || "",
    };
  }

  private timestampFromDate(date: Date): Timestamp {
    const timestamp = new Timestamp();
    timestamp.setSeconds(Math.floor(date.getTime() / 1000));
    timestamp.setNanos(date.getMilliseconds() * 1000000);
    return timestamp;
  }

  private newTelemetryId(): string {
    return `agentkit-${randomUUID()}`;
  }

  /** Normalizes string shorthand into a text message payload. */
  private normalizeMessagePayload(message: AgentMessagePayload): {
    id?: string;
    text?: string;
    audio?: Uint8Array | string;
    completed?: boolean;
  } {
    if (typeof message === "string") {
      return { text: message, completed: true };
    }
    return message;
  }

  /** Stringifies a JS object into a proto-compatible string map. */
  private stringifyMap(values?: AgentStringMap | null): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [key, value] of Object.entries(values || {})) {
      result[String(key)] = String(value);
    }
    return result;
  }

  /** Converts arbitrary result values into the proto result map shape. */
  private stringifyResult(
    result: unknown,
    success: boolean
  ): Record<string, string> {
    const resultMap: Record<string, string> = {};
    if (result !== null && result !== undefined) {
      if (typeof result === "object" && !Array.isArray(result)) {
        Object.assign(resultMap, this.stringifyMap(result as AgentStringMap));
      } else {
        resultMap.result = String(result);
      }
    }
    if (!success && resultMap.success === undefined) {
      resultMap.success = "false";
    }
    return resultMap;
  }

  /** Reads a generated protobuf map into a plain JS object. */
  private readStringMap(map: {
    forEach(callback: (value: string, key: string) => void): void;
  }): Record<string, string> {
    const result: Record<string, string> = {};
    map.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  /** Writes plain JS object entries into a generated protobuf map. */
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
 * Backward-compatible v2 export name.
 *
 * New code should generally prefer `Agent.runner(...)`, but `V2Agent` remains
 * as an explicit runner class for users who already adopted the earlier v2 API.
 */
export class V2Agent<T extends Agent = Agent> extends AgentRunner<T> {}
