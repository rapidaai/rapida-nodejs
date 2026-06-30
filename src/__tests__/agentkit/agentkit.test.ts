import {
  Metadata,
  Server,
  ServerCredentials,
  status,
} from "@grpc/grpc-js";

import {
  AgentKitAgent,
  AgentKitHealthService,
  AgentKitHealthServingStatus,
  AgentKitMiddlewareContext,
  AgentKitMiddlewareInterceptor,
  AgentKitServer,
  Middleware,
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

describe("AgentKitMiddlewareInterceptor", () => {
  function flushMiddleware(): Promise<void> {
    return new Promise((resolve) => setImmediate(resolve));
  }

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

  it("runs middleware in order before the stream reaches the agent", async () => {
    const first = jest.fn();
    const second = jest.fn(({ metadataValue }) => {
      return metadataValue("authorization") === "tok";
    });
    const interceptor = new AgentKitMiddlewareInterceptor([first, second]);
    const call = makeCall();
    const intercepted = interceptor.intercept(
      { path: "/talk_api.AgentKit/Talk" } as any,
      call as any
    );
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
    await flushMiddleware();

    expect(finalListener.onReceiveMetadata).toHaveBeenCalledWith(metadata);
    expect(call.sendStatus).not.toHaveBeenCalled();
    expect(first).toHaveBeenCalledWith(
      expect.objectContaining({
        metadata,
        method: "/talk_api.AgentKit/Talk",
        metadataValue: expect.any(Function),
      })
    );
    expect(first.mock.invocationCallOrder[0]).toBeLessThan(
      second.mock.invocationCallOrder[0]
    );
  });

  it("rejects streams when middleware returns false", async () => {
    const interceptor = new AgentKitMiddlewareInterceptor([() => false]);
    const call = makeCall();
    const intercepted = interceptor.intercept(
      { path: "/talk_api.AgentKit/Talk" } as any,
      call as any
    );

    intercepted.start({
      onReceiveMetadata: jest.fn(),
      onReceiveMessage: jest.fn(),
      onReceiveHalfClose: jest.fn(),
      onCancel: jest.fn(),
    });
    const metadata = new Metadata();
    metadata.set("authorization", "bad");
    (makeCall as any).listener.onReceiveMetadata(metadata);
    await flushMiddleware();

    expect(call.sendStatus).toHaveBeenCalledWith(
      expect.objectContaining({
        code: status.UNAUTHENTICATED,
        details: "Rejected by AgentKit middleware",
      })
    );
  });

  it("supports class middleware instances", async () => {
    class AuthMiddleware extends Middleware {
      handle({ metadataValue }: AgentKitMiddlewareContext): boolean {
        return metadataValue("authorization") === "tok";
      }
    }

    const interceptor = new AgentKitMiddlewareInterceptor([
      new AuthMiddleware(),
    ]);
    const call = makeCall();
    const intercepted = interceptor.intercept(
      { path: "/talk_api.AgentKit/Talk" } as any,
      call as any
    );
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
    await flushMiddleware();

    expect(finalListener.onReceiveMetadata).toHaveBeenCalledWith(metadata);
    expect(call.sendStatus).not.toHaveBeenCalled();
  });

  it("lets middleware reject with custom status details", async () => {
    const interceptor = new AgentKitMiddlewareInterceptor([
      ({ reject }) => reject("missing tenant", status.PERMISSION_DENIED),
    ]);
    const call = makeCall();
    const intercepted = interceptor.intercept(
      { path: "/talk_api.AgentKit/Talk" } as any,
      call as any
    );

    intercepted.start({
      onReceiveMetadata: jest.fn(),
      onReceiveMessage: jest.fn(),
      onReceiveHalfClose: jest.fn(),
      onCancel: jest.fn(),
    });
    const metadata = new Metadata();
    (makeCall as any).listener.onReceiveMetadata(metadata);
    await flushMiddleware();

    expect(call.sendStatus).toHaveBeenCalledWith(
      expect.objectContaining({
        code: status.PERMISSION_DENIED,
        details: "missing tenant",
      })
    );
  });

  it("bypasses middleware for standard gRPC health checks", async () => {
    const middleware = jest.fn(() => true);
    const interceptor = new AgentKitMiddlewareInterceptor([middleware]);
    const call = makeCall();
    const intercepted = interceptor.intercept(
      { path: "/grpc.health.v1.Health/Check" } as any,
      call as any
    );
    const finalListener = {
      onReceiveMetadata: jest.fn(),
      onReceiveMessage: jest.fn(),
      onReceiveHalfClose: jest.fn(),
      onCancel: jest.fn(),
    };

    intercepted.start(finalListener);
    const metadata = new Metadata();
    (makeCall as any).listener.onReceiveMetadata(metadata);
    await flushMiddleware();

    expect(finalListener.onReceiveMetadata).toHaveBeenCalledWith(metadata);
    expect(call.sendStatus).not.toHaveBeenCalled();
    expect(middleware).not.toHaveBeenCalled();
  });

  it("reads buffer metadata values as strings", async () => {
    const middleware = jest.fn(({ metadataValue }) => {
      return metadataValue("authorization-bin") === "tok";
    });
    const interceptor = new AgentKitMiddlewareInterceptor([middleware]);
    const call = makeCall();
    const intercepted = interceptor.intercept(
      { path: "/talk_api.AgentKit/Talk" } as any,
      call as any
    );
    const finalListener = {
      onReceiveMetadata: jest.fn(),
      onReceiveMessage: jest.fn(),
      onReceiveHalfClose: jest.fn(),
      onCancel: jest.fn(),
    };

    intercepted.start(finalListener);
    const metadata = new Metadata();
    metadata.set("authorization-bin", Buffer.from("tok"));
    (makeCall as any).listener.onReceiveMetadata(metadata);
    await flushMiddleware();

    expect(finalListener.onReceiveMetadata).toHaveBeenCalledWith(metadata);
    expect(call.sendStatus).not.toHaveBeenCalled();
    expect(middleware).toHaveBeenCalledWith(
      expect.objectContaining({
        metadataValue: expect.any(Function),
      })
    );
  });
});

describe("AgentKitServer", () => {
  let addServiceSpy: jest.SpyInstance;
  let bindAsyncSpy: jest.SpyInstance;
  let startSpy: jest.SpyInstance;
  let tryShutdownSpy: jest.SpyInstance;

  function makeHTTPResponse() {
    let response: {
      writeHead: jest.Mock;
      end: jest.Mock;
    };
    response = {
      writeHead: jest.fn(() => response),
      end: jest.fn(),
    };
    return response;
  }

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

    expect(addServiceSpy).toHaveBeenCalledTimes(2);
    expect(addServiceSpy).toHaveBeenCalledWith(
      AgentKitHealthService,
      expect.objectContaining({ check: expect.any(Function) })
    );
    expect(bindAsyncSpy).toHaveBeenCalledWith(
      "0.0.0.0:59997",
      expect.anything(),
      expect.any(Function)
    );
    expect(startSpy).toHaveBeenCalled();
    expect(server.isRunning).toBe(true);
    expect(server.healthStatus).toBe(AgentKitHealthServingStatus.SERVING);
  });

  it("stops a server and marks it not running", async () => {
    const server = new AgentKitServer({ agent: new AgentKitAgent() });

    await server.start();
    await server.stop();

    expect(tryShutdownSpy).toHaveBeenCalled();
    expect(server.isRunning).toBe(false);
    expect(server.healthStatus).toBe(AgentKitHealthServingStatus.NOT_SERVING);
  });

  it("keeps stop as a no-op before start", async () => {
    const server = new AgentKitServer({ agent: new AgentKitAgent() });

    await server.stop();

    expect(tryShutdownSpy).not.toHaveBeenCalled();
    expect(server.isRunning).toBe(false);
  });

  it("registers a serving gRPC health check by default", async () => {
    const server = new AgentKitServer({ agent: new AgentKitAgent() });

    await server.start();

    const healthImplementation = addServiceSpy.mock.calls.find(
      ([service]) => service === AgentKitHealthService
    )?.[1] as { check: Function };
    const callback = jest.fn();

    healthImplementation.check({ request: { service: "" } }, callback);

    expect(callback).toHaveBeenCalledWith(null, {
      status: AgentKitHealthServingStatus.SERVING,
    });
  });

  it("lets callers override the health status", async () => {
    const server = new AgentKitServer({ agent: new AgentKitAgent() });

    await server.start();
    server.setHealthStatus(AgentKitHealthServingStatus.NOT_SERVING);

    const healthImplementation = addServiceSpy.mock.calls.find(
      ([service]) => service === AgentKitHealthService
    )?.[1] as { check: Function };
    const callback = jest.fn();

    healthImplementation.check({ request: { service: "" } }, callback);

    expect(callback).toHaveBeenCalledWith(null, {
      status: AgentKitHealthServingStatus.NOT_SERVING,
    });
  });

  it("can disable the health service", async () => {
    const server = new AgentKitServer({
      agent: new AgentKitAgent(),
      healthCheck: false,
    });

    await server.start();

    expect(addServiceSpy).toHaveBeenCalledTimes(1);
    expect(addServiceSpy).not.toHaveBeenCalledWith(
      AgentKitHealthService,
      expect.anything()
    );
  });

  it("serves HTTP health checks when enabled", () => {
    const server = new AgentKitServer({
      agent: new AgentKitAgent(),
      httpHealthCheck: {
        host: "127.0.0.1",
        port: 0,
        path: "/healthz",
      },
    });

    server.setHealthStatus(AgentKitHealthServingStatus.SERVING);
    const response = makeHTTPResponse();

    (server as any).handleHTTPHealthCheck(
      { method: "GET", url: "/healthz" },
      response
    );

    expect(server.httpHealthAddress).toBe("127.0.0.1:0");
    expect(response.writeHead).toHaveBeenCalledWith(200, {
      "content-type": "application/json",
      "content-length": Buffer.byteLength('{"status":"SERVING"}'),
    });
    expect(response.end).toHaveBeenCalledWith('{"status":"SERVING"}');
  });

  it("returns non-200 HTTP health when not serving", () => {
    const server = new AgentKitServer({
      agent: new AgentKitAgent(),
      httpHealthCheck: {
        host: "127.0.0.1",
        port: 0,
      },
    });

    server.setHealthStatus(AgentKitHealthServingStatus.NOT_SERVING);
    const response = makeHTTPResponse();

    (server as any).handleHTTPHealthCheck(
      { method: "GET", url: "/healthz" },
      response
    );

    expect(response.writeHead).toHaveBeenCalledWith(503, {
      "content-type": "application/json",
      "content-length": Buffer.byteLength('{"status":"NOT_SERVING"}'),
    });
    expect(response.end).toHaveBeenCalledWith('{"status":"NOT_SERVING"}');
  });

  it("returns 404 for unknown HTTP health paths", () => {
    const server = new AgentKitServer({
      agent: new AgentKitAgent(),
      httpHealthCheck: {
        host: "127.0.0.1",
        port: 0,
        path: "/readyz",
      },
    });
    const response = makeHTTPResponse();

    (server as any).handleHTTPHealthCheck(
      { method: "GET", url: "/healthz" },
      response
    );

    expect(response.writeHead).toHaveBeenCalledWith(404);
    expect(response.end).toHaveBeenCalledWith();
  });
});
