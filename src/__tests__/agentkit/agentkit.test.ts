import {
  Metadata,
  Server,
  ServerCredentials,
  status,
} from "@grpc/grpc-js";

import {
  AgentKitAgent,
  AgentKitServer,
  AuthConfig,
  AuthorizationInterceptor,
} from "../../agentkit";
import { AssistantDefinition } from "../../clients/protos/common_pb";
import { TalkInput, TalkOutput } from "../../clients/protos/agentkit_pb";
import {
  ConversationConfiguration,
  ConversationInitialization,
  ConversationUserMessage,
  StreamMode,
  ToolCallAction,
} from "../../clients/protos/talk-api_pb";

function makeInitialization(
  conversationId = "42",
  assistantId = "7"
): ConversationInitialization {
  const assistant = new AssistantDefinition();
  assistant.setAssistantid(assistantId);
  assistant.setVersion("v1");

  const initialization = new ConversationInitialization();
  initialization.setAssistantconversationid(conversationId);
  initialization.setAssistant(assistant);
  return initialization;
}

function talkInputInit(): TalkInput {
  const input = new TalkInput();
  input.setInitialization(makeInitialization());
  return input;
}

function talkInputConfig(): TalkInput {
  const config = new ConversationConfiguration();
  config.setStreammode(StreamMode.STREAM_MODE_TEXT);

  const input = new TalkInput();
  input.setConfiguration(config);
  return input;
}

function talkInputText(messageId = "msg-1", text = "hello"): TalkInput {
  const message = new ConversationUserMessage();
  message.setId(messageId);
  message.setText(text);
  message.setCompleted(true);

  const input = new TalkInput();
  input.setUser(message);
  return input;
}

function talkInputAudio(messageId = "msg-a"): TalkInput {
  const message = new ConversationUserMessage();
  message.setId(messageId);
  message.setAudio(new Uint8Array([0, 1, 2]));

  const input = new TalkInput();
  input.setUser(message);
  return input;
}

describe("AgentKitAgent", () => {
  let agent: AgentKitAgent;

  beforeEach(() => {
    agent = new AgentKitAgent();
  });

  it("builds a default successful TalkOutput", () => {
    const output = agent.response();

    expect(output.getCode()).toBe(200);
    expect(output.getSuccess()).toBe(true);
    expect(output.getDataCase()).toBe(TalkOutput.DataCase.DATA_NOT_SET);
  });

  it("acknowledges initialization with the initialization data field", () => {
    const initialization = makeInitialization("123", "99");
    const output = agent.initializationResponse(initialization);

    expect(output.getDataCase()).toBe(TalkOutput.DataCase.INITIALIZATION);
    expect(output.getInitialization()?.getAssistantconversationid()).toBe("123");
    expect(output.getInitialization()?.getAssistant()?.getAssistantid()).toBe("99");
  });

  it("acknowledges configuration without a data payload", () => {
    const output = agent.configurationResponse();

    expect(output.getCode()).toBe(200);
    expect(output.getSuccess()).toBe(true);
    expect(output.getDataCase()).toBe(TalkOutput.DataCase.DATA_NOT_SET);
  });

  it("builds assistant text responses", () => {
    const output = agent.assistantResponse("m-1", "hello", true);

    expect(output.getDataCase()).toBe(TalkOutput.DataCase.ASSISTANT);
    expect(output.getAssistant()?.getId()).toBe("m-1");
    expect(output.getAssistant()?.getText()).toBe("hello");
    expect(output.getAssistant()?.getCompleted()).toBe(true);
  });

  it("builds error responses", () => {
    const output = agent.errorResponse(500, "Something went wrong");

    expect(output.getDataCase()).toBe(TalkOutput.DataCase.ERROR);
    expect(output.getCode()).toBe(500);
    expect(output.getSuccess()).toBe(false);
    expect(output.getError()?.getErrorcode()).toBe("500");
    expect(output.getError()?.getErrormessage()).toBe("Something went wrong");
  });

  it("stringifies tool call args", () => {
    const output = agent.toolCall("m", "t-1", "search", {
      query: "rapida",
      limit: 5,
    });

    expect(output.getDataCase()).toBe(TalkOutput.DataCase.TOOLCALL);
    expect(output.getToolcall()?.getId()).toBe("m");
    expect(output.getToolcall()?.getToolid()).toBe("t-1");
    expect(output.getToolcall()?.getName()).toBe("search");
    expect(output.getToolcall()?.getArgsMap().get("query")).toBe("rapida");
    expect(output.getToolcall()?.getArgsMap().get("limit")).toBe("5");
  });

  it("stores non-object tool results under result", () => {
    const output = agent.toolCallResult("m", "t", "fn", "done");

    expect(output.getDataCase()).toBe(TalkOutput.DataCase.TOOLCALLRESULT);
    expect(output.getToolcallresult()?.getResultMap().get("result")).toBe("done");
  });

  it("encodes failed tool result success flag in the result map", () => {
    const output = agent.toolCallResult("m", "t", "fn", "error", false);

    expect(output.getToolcallresult()?.getResultMap().get("success")).toBe("false");
  });

  it("builds transfer and terminate channel actions", () => {
    const transfer = agent.transferCall("m", { to: "+15550001234" });
    const terminate = agent.terminateCall("m", { reason: "done" });

    expect(transfer.getToolcall()?.getAction()).toBe(
      ToolCallAction.TOOL_CALL_ACTION_TRANSFER_CONVERSATION
    );
    expect(terminate.getToolcall()?.getAction()).toBe(
      ToolCallAction.TOOL_CALL_ACTION_END_CONVERSATION
    );
  });

  it("detects request types and extracts identifiers", () => {
    expect(agent.isInitializationRequest(talkInputInit())).toBe(true);
    expect(agent.isConfigurationRequest(talkInputConfig())).toBe(true);
    expect(agent.isMessageRequest(talkInputText())).toBe(true);
    expect(agent.isTextMessage(talkInputText())).toBe(true);
    expect(agent.isAudioMessage(talkInputAudio())).toBe(true);
    expect(agent.getUserText(talkInputText("m", "hello world"))).toBe(
      "hello world"
    );
    expect(agent.getMessageId(talkInputText("m-2"))).toBe("m-2");
    expect(agent.getConversationId(talkInputInit())).toBe("42");
    expect(agent.getAssistantId(talkInputInit())).toBe("7");
  });
});

describe("AuthorizationInterceptor", () => {
  function makeCall() {
    return {
      start: jest.fn((listener) => {
        (makeCall as any).listener = listener;
      }),
      sendMetadata: jest.fn(),
      sendMessage: jest.fn(),
      sendStatus: jest.fn(),
      startRead: jest.fn(),
      getPeer: jest.fn(),
      getDeadline: jest.fn(),
      getHost: jest.fn(),
    };
  }

  it("passes through valid token metadata", () => {
    const interceptor = new AuthorizationInterceptor(
      new AuthConfig({ enabled: true, token: "tok" })
    );
    const call = makeCall();
    const intercepted = interceptor.intercept({} as any, call as any);
    const finalListener = {
      onReceiveMetadata: jest.fn(),
      onReceiveMessage: jest.fn(),
      onReceiveHalfClose: jest.fn(),
      onCancel: jest.fn(),
    };

    intercepted.start(finalListener);
    const metadata = new Metadata();
    metadata.set("authorization", "tok");
    (makeCall as any).listener.onReceiveMetadata(metadata);

    expect(finalListener.onReceiveMetadata).toHaveBeenCalledWith(metadata);
    expect(call.sendStatus).not.toHaveBeenCalled();
  });

  it("rejects invalid token metadata with UNAUTHENTICATED", () => {
    const interceptor = new AuthorizationInterceptor(
      new AuthConfig({ enabled: true, token: "tok" })
    );
    const call = makeCall();
    const intercepted = interceptor.intercept({} as any, call as any);

    intercepted.start({
      onReceiveMetadata: jest.fn(),
      onReceiveMessage: jest.fn(),
      onReceiveHalfClose: jest.fn(),
      onCancel: jest.fn(),
    });
    const metadata = new Metadata();
    metadata.set("authorization", "bad");
    (makeCall as any).listener.onReceiveMetadata(metadata);

    expect(call.sendStatus).toHaveBeenCalledWith(
      expect.objectContaining({
        code: status.UNAUTHENTICATED,
        details: "Invalid authorization token",
      })
    );
  });
});

describe("AgentKitServer", () => {
  let addServiceSpy: jest.SpyInstance;
  let bindAsyncSpy: jest.SpyInstance;
  let startSpy: jest.SpyInstance;
  let tryShutdownSpy: jest.SpyInstance;

  beforeEach(() => {
    addServiceSpy = jest
      .spyOn(Server.prototype, "addService")
      .mockImplementation(() => undefined);
    bindAsyncSpy = jest
      .spyOn(Server.prototype, "bindAsync")
      .mockImplementation((_address, _credentials, callback) => {
        callback(null, 50051);
      });
    startSpy = jest
      .spyOn(Server.prototype, "start")
      .mockImplementation(() => undefined);
    tryShutdownSpy = jest
      .spyOn(Server.prototype, "tryShutdown")
      .mockImplementation((callback) => callback());
    jest
      .spyOn(ServerCredentials, "createInsecure")
      .mockReturnValue({} as ServerCredentials);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("starts a server and marks it running", async () => {
    const server = new AgentKitServer({ agent: new AgentKitAgent(), port: 59997 });

    await server.start();

    expect(addServiceSpy).toHaveBeenCalled();
    expect(bindAsyncSpy).toHaveBeenCalledWith(
      "0.0.0.0:59997",
      expect.anything(),
      expect.any(Function)
    );
    expect(startSpy).toHaveBeenCalled();
    expect(server.isRunning).toBe(true);
  });

  it("stops a server and marks it not running", async () => {
    const server = new AgentKitServer({ agent: new AgentKitAgent() });

    await server.start();
    await server.stop();

    expect(tryShutdownSpy).toHaveBeenCalled();
    expect(server.isRunning).toBe(false);
  });

  it("keeps stop as a no-op before start", async () => {
    const server = new AgentKitServer({ agent: new AgentKitAgent() });

    await server.stop();

    expect(tryShutdownSpy).not.toHaveBeenCalled();
    expect(server.isRunning).toBe(false);
  });
});
