# Rapida Node.js SDK

The official Node.js SDK for the Rapida Voice AI platform. This SDK provides comprehensive API clients for building voice-enabled applications with Rapida's microservices.

## Installation

```bash
npm install @rapidaai/nodejs
# or
yarn add @rapidaai/nodejs
# or
pnpm add @rapidaai/nodejs
```

## Quick Start

```typescript
import { 
  ConnectionConfig, 
  GetAssistant, 
  GetAssistantRequest 
} from '@rapidaai/nodejs';

// Create a connection to Rapida services
const config = new ConnectionConfig({
  assistantHost: 'localhost:9007',
  integrationHost: 'localhost:9004',
  endpointHost: 'localhost:9005',
  documentHost: 'localhost:9010',
});

// Use the assistant service
const request = new GetAssistantRequest();
request.setId('your-assistant-id');

const response = await GetAssistant(config, request);
console.log(response);
```

## Available Clients

The SDK provides clients for the following Rapida services:

### Core Services

- **Assistant API** - Manage assistants, conversations, and voice deployments
- **Integration API** - LLM provider integrations (OpenAI, Anthropic, Gemini, etc.)
- **Endpoint API** - Endpoint management and invocation
- **Knowledge API** - Knowledge base and document management
- **Deployment API** - Assistant deployment configuration
- **Document API** - Document processing and indexing

### Auth & Account Services

- **Web API** - Authentication, users, organizations, projects, vaults
- **Auth Client** - User authentication flows (OAuth, email/password)
- **Connect Client** - OAuth provider connections

### Utility Services

- **Talk Client** - Telephony and real-time communication
- **WebRTC Client** - WebRTC signaling and media
- **Notification Client** - Notification management
- **Invocation Client** - Custom endpoint invocation

## AgentKit

AgentKit lets you host a custom voice AI agent behind the `AgentKit.Talk` bidirectional gRPC stream. The SDK handles the gRPC server, optional middleware, optional TLS, and response/request helper methods. Your agent owns the LLM integration, tool execution, and conversation logic.

### AgentKit V2

AgentKit v2 creates one `Agent` instance per conversation. Application code does not need to manage concurrent streams manually; each instance gets its own `contextId`, assistant metadata, and `state`.

```typescript
import {
  Agent,
  AgentKitHealthServingStatus,
  AgentKitServer,
} from '@rapidaai/nodejs';

class SupportAgent extends Agent {
  async onUser(user) {
    this.state.history ??= [];
    this.state.history.push({
      role: 'user',
      content: user.text,
    });

    await this.reply(`You said: ${user.text}`);
  }

  async onClose() {
    console.log('conversation closed', this.contextId);
  }
}

const server = new AgentKitServer({
  agent: Agent.runner(SupportAgent),
  port: 50051,
});

await server.start();
```

AgentKit servers register the standard `grpc.health.v1.Health/Check` service
on the same gRPC port by default. This works with Kubernetes gRPC probes:

```yaml
readinessProbe:
  grpc:
    port: 50051
  initialDelaySeconds: 5
  periodSeconds: 10

livenessProbe:
  grpc:
    port: 50051
  initialDelaySeconds: 10
  periodSeconds: 20
```

The health service is registered on the same server and bypasses application
middleware automatically, so cluster probes do not need AgentKit credentials.
Disable the health service only if you register your own:

```typescript
const server = new AgentKitServer({
  agent: Agent.runner(SupportAgent),
  port: 50051,
  healthCheck: false,
});
```

When the process is alive but should be removed from service endpoints, mark it
not serving:

```typescript
server.setHealthStatus(AgentKitHealthServingStatus.NOT_SERVING);
```

Kubernetes `httpGet` probes cannot share the AgentKit gRPC port in `grpc-js`.
Use the gRPC probe above for same-port health checks. If your platform requires
HTTP probes, provide `httpHealthCheck` to expose a separate HTTP endpoint:

```typescript
const server = new AgentKitServer({
  agent: Agent.runner(SupportAgent),
  port: 50051,
  httpHealthCheck: {
    port: 8080,
    path: '/healthz',
  },
});
```

```yaml
ports:
  - name: grpc
    containerPort: 50051
  - name: health
    containerPort: 8080

readinessProbe:
  httpGet:
    path: /healthz
    port: health

livenessProbe:
  httpGet:
    path: /healthz
    port: health
```

For multiple agents on the same server, route by assistant ID and version from the initialization packet:

```typescript
class SalesAgent extends Agent {
  async onUser(user) {
    await this.reply(`Sales received: ${user.text}`);
  }
}

const server = new AgentKitServer({
  agent: Agent.runner({
    default: SupportAgent,
    agents: [
      {
        assistantId: 'asst_support',
        version: 'v1',
        agent: SupportAgent,
      },
      {
        assistantId: 'asst_sales',
        version: 'v2',
        agent: SalesAgent,
      },
    ],
  }),
  port: 50051,
});
```

Use `createAgent` when the agent constructor needs dependencies:

```typescript
class ModelBackedSupportAgent extends Agent {
  constructor(conversation, private readonly deps) {
    super(conversation);
  }
}

const server = new AgentKitServer({
  agent: Agent.runner({
    createAgent: (conversation, initialization) =>
      new ModelBackedSupportAgent(conversation, {
        assistantId: initialization.assistantId,
        model,
      }),
  }),
  port: 50051,
});
```

`Agent` lifecycle methods are optional:

- `onInitialization(initialization)`
- `onConfiguration(configuration)`
- `onUser(user)`
- `onAssistant(assistant)`
- `onInterruption(interruption)`
- `onToolCall(toolCall)`
- `onToolCallResult(result)`
- `onClose()`
- `onError(error)`

Convenience methods available on every `Agent` instance:

- `reply(message)`
- `sendAssistant(message)`
- `sendUser(message)`
- `toolCall(payload)`
- `toolResult(payload)`
- `interrupt(id?)`
- `transfer(args?, options?)`
- `endConversation(args?, options?)`
- `error(payload)`
- `observability(record)`
- `log(payload)`
- `event(payload)`
- `metric(payload)`
- `close()`

AgentKit v2 emits automatic observability records for conversation lifecycle
events, user-message handling duration, and errors. Disable it when needed:

```typescript
const server = new AgentKitServer({
  agent: Agent.runner({
    default: SupportAgent,
    instrumentation: false,
  }),
  port: 50051,
});
```

The AgentKit server enriches observability records with platform correlation
fields such as project ID, organization ID, scope, scope attributes, and
conversation context.

Agents can also push explicit logs, events, and metrics:

```typescript
class SupportAgent extends Agent {
  async onUser(user) {
    await this.log({
      level: 'info',
      message: 'Handling user message',
      attributes: {
        messageId: user.id,
      },
    });

    await this.event({
      event: 'support.user_message.received',
      attributes: {
        messageId: user.id,
      },
    });

    await this.metric({
      name: 'support.user_text_length',
      value: user.text?.length || 0,
      description: 'Length of the incoming user text',
    });

    await this.reply('Done');
  }
}
```

### Basic AgentKit Server

```typescript
import {
  AgentKitAgent,
  AgentKitServer,
  TalkInput,
  TalkOutput,
} from '@rapidaai/nodejs';
import type { ServerDuplexStream } from '@grpc/grpc-js';

class MyAgent extends AgentKitAgent {
  talk(call: ServerDuplexStream<TalkInput, TalkOutput>): void {
    call.on('data', (request: TalkInput) => {
      if (this.isInitializationRequest(request)) {
        call.write(this.initializationResponse(request.getInitialization()!));
        return;
      }

      if (this.isConfigurationRequest(request)) {
        call.write(this.configurationResponse(request.getConfiguration()));
        return;
      }

      if (this.isTextMessage(request)) {
        const messageId = this.getMessageId(request)!;
        const text = this.getUserText(request);

        call.write(this.assistantResponse(messageId, `Received: ${text}`, false));
        call.write(this.assistantResponse(messageId, 'Done', true));
      }
    });

    call.on('end', () => call.end());
  }
}

const server = new AgentKitServer({
  agent: new MyAgent(),
  port: 50051,
});

await server.start();
console.log(`AgentKit server listening on ${server.address}`);
```

### Conversation Flow

The expected stream flow is:

1. Rapida sends `ConversationInitialization`.
2. The agent responds with `initializationResponse(request.getInitialization()!)`.
3. Rapida may send `ConversationConfiguration`.
4. The agent responds with `configurationResponse()`, which is a `code=200` acknowledgement without a data payload.
5. Rapida sends `ConversationUserMessage`.
6. The agent writes assistant responses, tool calls, tool results, transfer actions, terminate actions, or errors.

### Response Helpers

`AgentKitAgent` provides helpers for building `TalkOutput` messages:

- `response(...)`: Builds a generic `TalkOutput`.
- `initializationResponse(initialization)`: Acknowledges initialization.
- `configurationResponse(configuration?)`: Acknowledges configuration.
- `assistantResponse(messageId, content, completed?)`: Sends assistant text.
- `errorResponse(code, message)`: Sends an error response.
- `toolCall(messageId, toolId, name, args?)`: Emits a tool call.
- `toolCallResult(messageId, toolId, name, result, success?)`: Emits a tool result.
- `transferCall(messageId, args?)`: Emits a transfer conversation action.
- `terminateCall(messageId, args?)`: Emits an end conversation action.

### Request Helpers

`AgentKitAgent` also provides helpers for inspecting `TalkInput` messages:

- `isInitializationRequest(request)`
- `isConfigurationRequest(request)`
- `isMessageRequest(request)`
- `isTextMessage(request)`
- `isAudioMessage(request)`
- `getUserText(request)`
- `getMessageId(request)`
- `getConversationId(request)`
- `getAssistantId(request)`

### Middleware and TLS

Use `middleware` when incoming AgentKit calls need validation, logging,
allowlisting, or request-scoped setup before they reach your agent. Middleware
receives gRPC metadata, normalized metadata string lookup, method path, and
peer details. SDK-owned health checks bypass middleware automatically.

```typescript
import {
  AgentKitServer,
  Middleware,
  type AgentKitMiddlewareContext,
} from '@rapidaai/nodejs';

class AuthMiddleware extends Middleware {
  constructor(private readonly token?: string) {
    super();
  }

  handle({ metadataValue, reject }: AgentKitMiddlewareContext): void {
    if (!this.token) {
      return;
    }
    if (metadataValue('authorization') !== this.token) {
      reject('Invalid AgentKit token');
    }
  }
}

const server = new AgentKitServer({
  agent: new MyAgent(),
  port: 50051,
  middleware: [new AuthMiddleware(process.env.AGENTKIT_TOKEN)],
});

await server.start();
```

Return `false` for default rejection, or call `reject()` for custom gRPC status
details. Middleware can also be a function and runs in array order:

```typescript
const server = new AgentKitServer({
  agent: new MyAgent(),
  middleware: [
    ({ method, peer }) => {
      console.log('AgentKit request', { method, peer });
    },
    ({ metadataValue, reject }) => {
      if (metadataValue('x-agent-token') !== process.env.AGENTKIT_TOKEN) {
        reject('Invalid AgentKit token');
      }
    },
  ],
});
```

For TLS:

```typescript
const server = new AgentKitServer({
  agent: new MyAgent(),
  sslConfig: {
    certPath: 'server.crt',
    keyPath: 'server.key',
    caCertPath: 'ca.crt', // optional, enables client certificate validation
  },
});

await server.start();
```

To stop the server:

```typescript
await server.stop();
console.log(server.isRunning); // false
```

## API Reference

### Connection Configuration

```typescript
const config = new ConnectionConfig({
  // Service endpoints
  assistantHost: 'localhost:9007',
  integrationHost: 'localhost:9004',
  endpointHost: 'localhost:9005',
  documentHost: 'localhost:9010',
  webHost: 'localhost:9001',
  
  // Authentication
  auth: {
    principal: 'user-or-service',
    apiKey: 'your-api-key', // optional
    token: 'jwt-token', // optional
  }
});
```

### Example: Create an Assistant

```typescript
import {
  CreateAssistantRequest,
  CreateAssistant,
  ConnectionConfig,
} from '@rapidaai/nodejs';

const config = new ConnectionConfig({
  assistantHost: 'localhost:9007',
});

const request = new CreateAssistantRequest();
request.setName('My Voice Assistant');
request.setDescription('A great voice assistant');
request.setLanguage('en');

const response = await CreateAssistant(config, request);
console.log('Assistant created:', response.getId());
```

### Example: Retrieve Knowledge Base

```typescript
import {
  GetAllKnowledgeRequest,
  GetAllKnowledge,
  ConnectionConfig,
} from '@rapidaai/nodejs';

const config = new ConnectionConfig({
  documentHost: 'localhost:9010',
});

const request = new GetAllKnowledgeRequest();
const response = await GetAllKnowledge(config, request);
console.log('Knowledge bases:', response.getKnowledgesList());
```

## Build Output

The SDK publishes a Node-compatible CommonJS bundle with TypeScript definitions:

- **Runtime** - `dist/index.js` - Works with `require()` and Node ESM `import`
- **Types** - `dist/index.d.ts` - TypeScript type definitions

Package exports point both `import` and `require` consumers to the supported
runtime entry.

## Development

### Building from Source

```bash
npm install
npm run build
```

### Running Tests

```bash
npm test
npm run test:watch
npm run test:coverage
```

### Cleaning Build Output

```bash
npm run clean
```

## Architecture

The SDK is structured around gRPC services with the following key components:

- **Connection Config** - Manages service client connections
- **Proto Clients** - Auto-generated gRPC service clients
- **Client Functions** - High-level async functions wrapping gRPC calls
- **Types** - TypeScript interfaces and proto message types

All inter-service communication uses gRPC with multiplexed HTTP/2, gRPC-Web, and HTTP support on single ports per service.

## Contributing

Contributions are welcome! Please ensure all changes pass the build and tests:

```bash
npm run build
npm test
npm run test:coverage
```

## License

MIT

## Support

For issues, feature requests, or questions:
- GitHub Issues: [rapida-nodejs](https://github.com/rapidaai/rapida-nodejs/issues)
- Rapida Docs: https://docs.rapida.ai/
