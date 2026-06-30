import { EventEmitter } from "events";

import {
  Agent,
  AgentAssistantMessage,
  AgentConfiguration,
  AgentConversation,
  AgentInitialization,
  AgentRunner,
  AgentToolCall,
  AgentToolCallResult,
  AgentUserMessage,
} from "../../agentkit/v2";
import { AssistantDefinition } from "../../clients/protos/common_pb";
import { ObservabilityRecordKind } from "../../clients/protos/observability-api_pb";
import { TalkInput, TalkOutput } from "../../clients/protos/agentkit_pb";
import {
  ConversationAssistantMessage,
  ConversationConfiguration,
  ConversationInitialization,
  ConversationInterruption,
  ConversationToolCall,
  ConversationToolCallResult,
  ConversationUserMessage,
  StreamMode,
  ToolCallAction,
} from "../../clients/protos/talk-api_pb";

class FakeAgentKitCall extends EventEmitter {
  write = jest.fn(
    (_packet: TalkOutput, callback?: (error?: Error | null) => void) => {
      callback?.();
      return true;
    }
  );
  end = jest.fn();
}

function makeInitialization(
  contextId = "ctx-1",
  assistantId = "assistant-1",
  version = "v1"
) {
  const assistant = new AssistantDefinition();
  assistant.setAssistantid(assistantId);
  assistant.setVersion(version);

  const initialization = new ConversationInitialization();
  initialization.setAssistantconversationid(contextId);
  initialization.setAssistant(assistant);
  return initialization;
}

function inputWithInitialization(
  contextId = "ctx-1",
  assistantId = "assistant-1",
  version = "v1"
) {
  const input = new TalkInput();
  input.setInitialization(makeInitialization(contextId, assistantId, version));
  return input;
}

function inputWithConfiguration() {
  const configuration = new ConversationConfiguration();
  configuration.setStreammode(StreamMode.STREAM_MODE_TEXT);

  const input = new TalkInput();
  input.setConfiguration(configuration);
  return input;
}

function inputWithUser(id = "msg-1", text = "hello") {
  const user = new ConversationUserMessage();
  user.setId(id);
  user.setText(text);
  user.setCompleted(true);

  const input = new TalkInput();
  input.setUser(user);
  return input;
}

function inputWithAssistant(id = "assistant-1", text = "reply") {
  const assistant = new ConversationAssistantMessage();
  assistant.setId(id);
  assistant.setText(text);
  assistant.setCompleted(true);

  const input = new TalkInput();
  input.setAssistant(assistant);
  return input;
}

function inputWithToolCall(id = "msg-1", toolId = "tool-1") {
  const toolCall = new ConversationToolCall();
  toolCall.setId(id);
  toolCall.setToolid(toolId);
  toolCall.setName("search");
  toolCall.setAction(ToolCallAction.TOOL_CALL_ACTION_UNSPECIFIED);
  toolCall.getArgsMap().set("query", "rapida");

  const input = new TalkInput();
  input.setToolcall(toolCall);
  return input;
}

function inputWithToolResult(id = "msg-1", toolId = "tool-1") {
  const toolResult = new ConversationToolCallResult();
  toolResult.setId(id);
  toolResult.setToolid(toolId);
  toolResult.setName("search");
  toolResult.getResultMap().set("result", "done");

  const input = new TalkInput();
  input.setToolcallresult(toolResult);
  return input;
}

function flushStream() {
  return new Promise((resolve) => setImmediate(resolve));
}

describe("AgentRunner", () => {
  let runner: AgentRunner;

  beforeEach(() => {
    runner = Agent.runner(Agent);
  });

  it("reads granular inbound packets", () => {
    const initialization = runner.initialization(
      inputWithInitialization("ctx-9", "assistant-9", "v2")
    );
    const configuration = runner.configuration(inputWithConfiguration());
    const user = runner.user(inputWithUser("m-1", "hello world"));
    const assistant = runner.assistant(inputWithAssistant("a-1", "assistant"));

    const interruptionMessage = new ConversationInterruption();
    interruptionMessage.setId("i-1");
    interruptionMessage.setType(
      ConversationInterruption.InterruptionType.INTERRUPTION_TYPE_WORD
    );
    const interruptionInput = new TalkInput();
    interruptionInput.setInterruption(interruptionMessage);

    expect(initialization).toMatchObject({
      type: "initialization",
      contextId: "ctx-9",
      assistantId: "assistant-9",
      assistantVersion: "v2",
    });
    expect(configuration).toMatchObject({
      type: "configuration",
      streamMode: StreamMode.STREAM_MODE_TEXT,
    });
    expect(user).toMatchObject({
      type: "user",
      id: "m-1",
      text: "hello world",
      completed: true,
    });
    expect(assistant).toMatchObject({
      type: "assistant",
      id: "a-1",
      text: "assistant",
    });
    expect(runner.interruption(interruptionInput)).toMatchObject({
      type: "interruption",
      id: "i-1",
      interruptionType:
        ConversationInterruption.InterruptionType.INTERRUPTION_TYPE_WORD,
    });
  });

  it("reads tool call and tool result packets", () => {
    expect(runner.toolCall(inputWithToolCall())).toMatchObject({
      type: "tool_call",
      id: "msg-1",
      toolId: "tool-1",
      name: "search",
      args: { query: "rapida" },
    });
    expect(runner.toolCallResult(inputWithToolResult())).toMatchObject({
      type: "tool_call_result",
      id: "msg-1",
      toolId: "tool-1",
      name: "search",
      result: { result: "done" },
    });
  });

  it("builds assistant, user, tool and error output packets", () => {
    const assistant = runner.assistantMessage("hello");
    const user = runner.userMessage({ id: "u-1", text: "from assistant" });
    const tool = runner.toolCallMessage({
      id: "m-1",
      toolId: "tool-1",
      name: "search",
      args: { query: "rapida", limit: 5 },
    });
    const result = runner.toolCallResultMessage({
      id: "m-1",
      toolId: "tool-1",
      name: "search",
      result: "done",
      success: false,
    });
    const error = runner.errorMessage({ code: 500, message: "failed" });

    expect(assistant.getDataCase()).toBe(TalkOutput.DataCase.ASSISTANT);
    expect(assistant.getAssistant()?.getText()).toBe("hello");
    expect(assistant.getAssistant()?.getCompleted()).toBe(true);

    expect(user.getDataCase()).toBe(TalkOutput.DataCase.USER);
    expect(user.getUser()?.getId()).toBe("u-1");
    expect(user.getUser()?.getText()).toBe("from assistant");

    expect(tool.getDataCase()).toBe(TalkOutput.DataCase.TOOLCALL);
    expect(tool.getToolcall()?.getArgsMap().get("limit")).toBe("5");

    expect(result.getDataCase()).toBe(TalkOutput.DataCase.TOOLCALLRESULT);
    expect(result.getToolcallresult()?.getResultMap().get("success")).toBe(
      "false"
    );

    expect(error.getDataCase()).toBe(TalkOutput.DataCase.ERROR);
    expect(error.getSuccess()).toBe(false);
    expect(error.getError()?.getErrormessage()).toBe("failed");
  });

  it("builds observability log, event and metric output packets", () => {
    const log = runner.observabilityMessage(
      runner.logRecord({
        level: "warn",
        message: "tool is slow",
        attributes: { toolId: "tool-1" },
      })
    );
    const event = runner.observabilityMessage(
      runner.eventRecord({
        event: "custom.event",
        component: "example-agent",
      })
    );
    const metric = runner.observabilityMessage(
      runner.metricRecord({
        name: "custom.latency_ms",
        value: 42,
        description: "custom latency",
      })
    );

    expect(log.getDataCase()).toBe(TalkOutput.DataCase.OBSERVABILITY);
    expect(log.getObservability()?.getLog()?.getKind()).toBe(
      ObservabilityRecordKind.OBSERVABILITY_RECORD_KIND_LOG
    );
    expect(log.getObservability()?.getLog()?.getLevel()).toBe("warn");
    expect(log.getObservability()?.getLog()?.getMessage()).toBe("tool is slow");
    expect(log.getObservability()?.getLog()?.getAttributesMap().get("toolId")).toBe(
      "tool-1"
    );

    expect(event.getObservability()?.getEvent()?.getKind()).toBe(
      ObservabilityRecordKind.OBSERVABILITY_RECORD_KIND_EVENT
    );
    expect(event.getObservability()?.getEvent()?.getEvent()).toBe("custom.event");
    expect(event.getObservability()?.getEvent()?.getComponent()).toBe(
      "example-agent"
    );

    expect(metric.getObservability()?.getMetric()?.getKind()).toBe(
      ObservabilityRecordKind.OBSERVABILITY_RECORD_KIND_METRIC
    );
    expect(metric.getObservability()?.getMetric()?.getName()).toBe(
      "custom.latency_ms"
    );
    expect(metric.getObservability()?.getMetric()?.getValue()).toBe("42");
  });

  it("creates one Agent instance per talk stream", async () => {
    const seen: Array<{ contextId: string; text: string; count: number }> = [];

    class EchoAgent extends Agent {
      async onUser(user: AgentUserMessage) {
        this.state.count = Number(this.state.count || 0) + 1;
        seen.push({
          contextId: this.contextId,
          text: user.text || "",
          count: Number(this.state.count),
        });
        await this.reply(`reply:${user.text}`);
      }
    }

    const talk = Agent.runner(EchoAgent).talk;
    const first = new FakeAgentKitCall();
    const second = new FakeAgentKitCall();

    talk(first as any);
    talk(second as any);

    first.emit("data", inputWithInitialization("ctx-a"));
    second.emit("data", inputWithInitialization("ctx-b"));
    first.emit("data", inputWithConfiguration());
    first.emit("data", inputWithUser("m-a", "alpha"));
    second.emit("data", inputWithUser("m-b", "beta"));
    await flushStream();

    expect(seen).toEqual(
      expect.arrayContaining([
        { contextId: "ctx-a", text: "alpha", count: 1 },
        { contextId: "ctx-b", text: "beta", count: 1 },
      ])
    );

    const firstReply = first.write.mock.calls
      .map(([packet]) => packet as TalkOutput)
      .find((packet) => packet.getDataCase() === TalkOutput.DataCase.ASSISTANT);
    const secondReply = second.write.mock.calls
      .map(([packet]) => packet as TalkOutput)
      .find((packet) => packet.getDataCase() === TalkOutput.DataCase.ASSISTANT);
    expect(firstReply).toBeDefined();
    expect(secondReply).toBeDefined();
    expect(firstReply!.getAssistant()?.getId()).toBe("m-a");
    expect(firstReply!.getAssistant()?.getText()).toBe("reply:alpha");
    expect(secondReply!.getAssistant()?.getId()).toBe("m-b");
    expect(secondReply!.getAssistant()?.getText()).toBe("reply:beta");
  });

  it("lets agents push logs, events and metrics with conversation context", async () => {
    class TelemetryAgent extends Agent {
      async onUser(user: AgentUserMessage) {
        await this.log({
          level: "info",
          message: "handling user",
          attributes: { messageId: user.id },
        });
        await this.event({
          event: "example.user_handled",
          attributes: { messageId: user.id },
        });
        await this.metric({
          name: "example.user_text_length",
          value: user.text?.length || 0,
        });
      }
    }

    const talk = Agent.runner({
      default: TelemetryAgent,
      instrumentation: false,
    }).talk;
    const call = new FakeAgentKitCall();

    talk(call as any);
    call.emit("data", inputWithInitialization("ctx-telemetry", "asst-t", "v3"));
    call.emit("data", inputWithUser("m-1", "hello"));
    await flushStream();

    const observabilityPackets = call.write.mock.calls
      .map(([packet]) => packet as TalkOutput)
      .filter((packet) => packet.getDataCase() === TalkOutput.DataCase.OBSERVABILITY);

    expect(observabilityPackets).toHaveLength(3);
    expect(
      observabilityPackets[0].getObservability()?.getLog()?.getContextMap().get(
        "contextId"
      )
    ).toBe("ctx-telemetry");
    expect(
      observabilityPackets[1].getObservability()?.getEvent()?.getEvent()
    ).toBe("example.user_handled");
    expect(
      observabilityPackets[2].getObservability()?.getMetric()?.getName()
    ).toBe("example.user_text_length");
  });

  it("automatically instruments conversation lifecycle", async () => {
    class InstrumentedAgent extends Agent {
      async onUser(user: AgentUserMessage) {
        await this.reply(`ok:${user.text}`);
      }
    }

    const talk = Agent.runner({
      default: InstrumentedAgent,
      instrumentation: {
        scope: "agentkit.test",
        component: "test-agent",
        attributes: { sdk: "nodejs" },
      },
    }).talk;
    const call = new FakeAgentKitCall();

    talk(call as any);
    call.emit("data", inputWithInitialization("ctx-auto", "asst-auto", "v1"));
    call.emit("data", inputWithConfiguration());
    call.emit("data", inputWithUser("m-1", "hello"));
    call.emit("end");
    await flushStream();

    const observabilityPackets = call.write.mock.calls
      .map(([packet]) => packet as TalkOutput)
      .filter((packet) => packet.getDataCase() === TalkOutput.DataCase.OBSERVABILITY);
    const eventNames = observabilityPackets
      .map((packet) => packet.getObservability()?.getEvent()?.getEvent())
      .filter(Boolean);
    const metricNames = observabilityPackets
      .map((packet) => packet.getObservability()?.getMetric()?.getName())
      .filter(Boolean);

    expect(eventNames).toEqual(
      expect.arrayContaining([
        "agentkit.conversation.initialized",
        "agentkit.configuration.received",
        "agentkit.user.received",
        "agentkit.conversation.closed",
      ])
    );
    expect(metricNames).toEqual(
      expect.arrayContaining([
        "agentkit.lifecycle.initialization.duration_ms",
        "agentkit.user.handler.duration_ms",
      ])
    );
    expect(
      observabilityPackets[0]
        .getObservability()
        ?.getEvent()
        ?.getContextMap()
        .get("assistantId")
    ).toBe("asst-auto");
  });

  it("routes conversations by assistant ID and version", async () => {
    const events: string[] = [];

    class SupportAgent extends Agent {
      async onUser(user: AgentUserMessage) {
        events.push(`support:${this.assistantVersion}:${user.text}`);
        await this.reply("support");
      }
    }

    class SalesAgent extends Agent {
      async onUser(user: AgentUserMessage) {
        events.push(`sales:${this.assistantVersion}:${user.text}`);
        await this.reply("sales");
      }
    }

    const talk = Agent.runner({
      default: SupportAgent,
      agents: [
        {
          assistantId: "asst_support",
          version: "v1",
          agent: SupportAgent,
        },
        {
          assistantId: "asst_sales",
          version: "v2",
          agent: SalesAgent,
        },
      ],
    }).talk;

    const support = new FakeAgentKitCall();
    const sales = new FakeAgentKitCall();
    talk(support as any);
    talk(sales as any);

    support.emit("data", inputWithInitialization("ctx-support", "asst_support", "v1"));
    sales.emit("data", inputWithInitialization("ctx-sales", "asst_sales", "v2"));
    support.emit("data", inputWithUser("m-1", "hello"));
    sales.emit("data", inputWithUser("m-2", "buy"));
    await flushStream();

    expect(events).toEqual(
      expect.arrayContaining(["support:v1:hello", "sales:v2:buy"])
    );
  });

  it("supports custom agent factories", async () => {
    const created: string[] = [];

    class FactoryAgent extends Agent {
      constructor(
        conversation: AgentConversation,
        private readonly prefix: string
      ) {
        super(conversation);
      }

      async onUser(user: AgentUserMessage) {
        await this.reply(`${this.prefix}:${user.text}`);
      }
    }

    const talk = Agent.runner({
      createAgent: (conversation, initialization) => {
        created.push(`${initialization.assistantId}:${initialization.assistantVersion}`);
        return new FactoryAgent(conversation, "factory");
      },
    }).talk;
    const call = new FakeAgentKitCall();

    talk(call as any);
    call.emit("data", inputWithInitialization("ctx-factory", "asst-factory", "v7"));
    call.emit("data", inputWithUser("m-1", "hello"));
    await flushStream();

    const reply = call.write.mock.calls
      .map(([packet]) => packet as TalkOutput)
      .find((packet) => packet.getDataCase() === TalkOutput.DataCase.ASSISTANT);
    expect(created).toEqual(["asst-factory:v7"]);
    expect(reply?.getAssistant()?.getText()).toBe("factory:hello");
  });

  it("routes all lifecycle packets to the per-conversation Agent", async () => {
    const events: string[] = [];

    class LifecycleAgent extends Agent {
      async onInitialization(initialization: AgentInitialization) {
        events.push(`init:${initialization.contextId}`);
      }

      async onConfiguration(configuration: AgentConfiguration) {
        events.push(`config:${configuration.streamMode}`);
      }

      async onUser(user: AgentUserMessage) {
        events.push(`user:${user.text}`);
      }

      async onAssistant(assistant: AgentAssistantMessage) {
        events.push(`assistant:${assistant.text}`);
      }

      async onToolCall(toolCall: AgentToolCall) {
        events.push(`tool:${toolCall.name}:${toolCall.args.query}`);
      }

      async onToolCallResult(result: AgentToolCallResult) {
        events.push(`result:${result.result.result}`);
      }

      async onClose() {
        events.push(`close:${this.contextId}`);
      }
    }

    const talk = Agent.runner(LifecycleAgent).talk;
    const call = new FakeAgentKitCall();

    talk(call as any);
    call.emit("data", inputWithInitialization("ctx-callback"));
    call.emit("data", inputWithConfiguration());
    call.emit("data", inputWithUser("m-1", "hello"));
    call.emit("data", inputWithAssistant("a-1", "assistant"));
    call.emit("data", inputWithToolCall("m-1", "tool-1"));
    call.emit("data", inputWithToolResult("m-1", "tool-1"));
    call.emit("end");
    await flushStream();

    expect(events).toEqual([
      "init:ctx-callback",
      `config:${StreamMode.STREAM_MODE_TEXT}`,
      "user:hello",
      "assistant:assistant",
      "tool:search:rapida",
      "result:done",
      "close:ctx-callback",
    ]);
    expect(call.end).toHaveBeenCalledTimes(1);
  });
});
