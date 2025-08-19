/*
 *  Copyright (c) 2024. Rapida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Author: Prashant <prashant@rapida.ai>
 *
 */
import {
  ASSISTANT_API,
  ENDPOINT_API,
  LOCAL_ASSISTANT_API,
  LOCAL_ENDPOINT_API,
  LOCAL_WEB_API,
  WEB_API,
} from "@/rapida/configs";
import { ClientAuthInfo, getClientInfo, UserAuthInfo } from "@/rapida/clients";
import { RapidaSource } from "@/rapida/utils/rapida_source";
import {
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_SOURCE_KEY,
} from "@/rapida/utils/rapida_header";
import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_grpc_pb";
import { AssistantServiceClient } from "@/rapida/clients/protos/assistant-api_grpc_pb";
import { DeploymentClient } from "@/rapida/clients/protos/invoker-api_grpc_pb";
import { credentials } from "@grpc/grpc-js";
import {
  AuthenticationServiceClient,
  OrganizationServiceClient,
  ProjectServiceClient,
} from "@/rapida/clients/protos/web-api_grpc_pb";
import { KnowledgeServiceClient } from "@/rapida/clients/protos/knowledge-api_grpc_pb";
import { MarketplaceServiceClient } from "@/rapida/clients/protos/marketplace-api_grpc_pb";
import { DocumentServiceClient } from "@/rapida/clients/protos/document-api_grpc_pb";
import { VaultServiceClient } from "@/rapida/clients/protos/vault-api_grpc_pb";
import { EndpointServiceClient } from "@/rapida/clients/protos/endpoint-api_grpc_pb";
import { AuditLoggingServiceClient } from "@/rapida/clients/protos/audit-logging-api_grpc_pb";
import { AssistantDeploymentServiceClient } from "@/rapida/clients/protos/assistant-deployment_grpc_pb";
import { ConnectServiceClient } from "@/rapida/clients/protos/connect-api_grpc_pb";
import { ProviderServiceClient } from "@/rapida/clients/protos/provider-api_grpc_pb";

/**
 * Represents a connection to the TalkService, providing both a conversation client
 * and a streaming client for real-time communication.
 */
// export class ConnectionConfig {
//   /**
//    * gRPC client for handling standard conversation requests.
//    */
//   conversationClient: TalkServiceClient;

//   /**
//    * gRPC client for assistant apis
//    */
//   assistantClient: AssistantServiceClient;

//   /**
//    * deployment client to invoke endpoint
//    */
//   endpointClient: DeploymentClient;

//   /**
//    * Authentication information for the client, supporting both client and user authentication.
//    */
//   auth: ClientAuthInfo | UserAuthInfo;

//   /**
//    * an utils for debugger credentials
//    * @param param0
//    * @returns
//    */
//   static WithDebugger({
//     authorization,
//     userId,
//     projectId,
//   }: {
//     authorization: string;
//     userId: string;
//     projectId: string;
//   }): UserAuthInfo {
//     return {
//       authorization,
//       [HEADER_AUTH_ID]: userId,
//       [HEADER_PROJECT_ID]: projectId,
//       Client: {
//         [HEADER_SOURCE_KEY]: RapidaSource.DEBUGGER,
//       },
//     };
//   }

//   /**
//    *
//    * @param param0
//    * @returns
//    */
//   static WithSDK({
//     apiKey,
//     userId,
//   }: {
//     apiKey: string;
//     userId: string;
//   }): ClientAuthInfo {
//     return {
//       [HEADER_API_KEY]: apiKey,
//       [HEADER_AUTH_ID]: userId,
//       Client: {
//         [HEADER_SOURCE_KEY]: RapidaSource.NODE_SDK,
//       },
//     };
//   }

//   /**
//    * Creates a new Connection instance, initializing the conversation and streaming clients.
//    *
//    * @param auth - Authentication information for the connection.
//    * @param endpoint - (Optional) Custom API endpoint for connecting to the TalkService.
//    *                   If not provided, it defaults to `ASSISTANT_API`.
//    */
//   constructor(
//     auth: ClientAuthInfo | UserAuthInfo,
//     assistantEndpoint?: string,
//     deploymentEndpoint?: string,
//     debug?: boolean
//   ) {
//     this.auth = auth;
//     this.auth.Client = getClientInfo(this.auth.Client);
//     this.conversationClient = new TalkServiceClient(
//       assistantEndpoint ? assistantEndpoint : ASSISTANT_API,
//       debug ? credentials.createInsecure() : credentials.createSsl()
//     );

//     this.assistantClient = new AssistantServiceClient(
//       assistantEndpoint ? assistantEndpoint : ASSISTANT_API,
//       debug ? credentials.createInsecure() : credentials.createSsl()
//     );

//     this.endpointClient = new DeploymentClient(
//       deploymentEndpoint ? deploymentEndpoint : ENDPOINT_API,
//       debug ? credentials.createInsecure() : credentials.createSsl()
//     );
//   }

//   /**
//    * Only for testing
//    * @returns
//    */
//   withLocal(): this {
//     return this.withCustomEndpoint(
//       LOCAL_ASSISTANT_API,
//       LOCAL_ENDPOINT_API,
//       true
//     );
//   }

//   /**
//    * On premise deployment options
//    * @param endpoint
//    * @returns
//    */
//   withCustomEndpoint(
//     assistantEndpoint: string,
//     deploymentEndpoint: string,
//     debug?: boolean
//   ): this {
//     console.log(
//       `Debug: Initializing TalkServiceClient with endpoint: ${assistantEndpoint}`
//     );
//     this.conversationClient = new TalkServiceClient(
//       assistantEndpoint,
//       debug ? credentials.createInsecure() : credentials.createSsl()
//     );
//     console.log(
//       `Debug: TalkServiceClient initialized: ${this.conversationClient}`
//     );

//     console.log(
//       `Debug: Initializing AssistantServiceClient with endpoint: ${assistantEndpoint}`
//     );
//     this.assistantClient = new AssistantServiceClient(
//       assistantEndpoint,
//       debug ? credentials.createInsecure() : credentials.createSsl()
//     );
//     console.log(
//       `Debug: AssistantServiceClient initialized: ${this.assistantClient}`
//     );

//     console.log(
//       `Debug: Initializing DeploymentClient with endpoint: ${deploymentEndpoint}`
//     );
//     this.endpointClient = new DeploymentClient(
//       deploymentEndpoint,
//       debug ? credentials.createInsecure() : credentials.createSsl()
//     );
//     console.log(`Debug: DeploymentClient initialized: ${this.endpointClient}`);

//     console.log("Debug: All clients initialized");
//     return this;
//   }
// }

export class ConnectionConfig {
  /**
   * an utils for debugger credentials
   * @param param0
   * @returns
   */
  static WithDebugger({
    authorization,
    userId,
    projectId,
  }: {
    authorization: string;
    userId: string;
    projectId: string;
  }): UserAuthInfo {
    return {
      authorization,
      [HEADER_AUTH_ID]: userId,
      [HEADER_PROJECT_ID]: projectId,
      Client: {
        [HEADER_SOURCE_KEY]: RapidaSource.DEBUGGER,
      },
    };
  }

  static WithPersonalToken({
    authorization,
    userId,
    projectId,
  }: {
    authorization: string;
    userId: string;
    projectId: string;
  }): UserAuthInfo {
    return {
      authorization,
      [HEADER_AUTH_ID]: userId,
      [HEADER_PROJECT_ID]: projectId,
      Client: {
        [HEADER_SOURCE_KEY]: RapidaSource.SDK,
      },
    };
  }

  /**
   *
   * @param param0
   * @returns
   */
  static WithWebpluginClient({
    apiKey,
    userId,
  }: {
    apiKey: string;
    userId?: string;
  }): ClientAuthInfo {
    return {
      [HEADER_API_KEY]: apiKey,
      [HEADER_AUTH_ID]: userId,
      Client: {
        [HEADER_SOURCE_KEY]: RapidaSource.WEB_PLUGIN,
      },
    };
  }
  /**
   *
   * @param param0
   * @returns
   */
  static WithSDK({
    apiKey,
    userId,
  }: {
    apiKey: string;
    userId?: string;
  }): ClientAuthInfo {
    return {
      [HEADER_API_KEY]: apiKey,
      [HEADER_AUTH_ID]: userId,
      Client: {
        [HEADER_SOURCE_KEY]: RapidaSource.SDK,
      },
    };
  }

  _endpoint: {
    assistant: string;
    web: string;
    endpoint: string;
  };

  _debug: boolean;

  private _auth: ClientAuthInfo | UserAuthInfo;

  getClientOptions() {
    return { debug: this._debug };
  }

  constructor(
    auth: ClientAuthInfo | UserAuthInfo,
    endpoint: {
      assistant?: string;
      web?: string;
      endpoint?: string;
    } = {
      assistant: ASSISTANT_API,
      web: WEB_API,
      endpoint: ENDPOINT_API,
    },
    debug: boolean = false
  ) {
    this._endpoint = {
      assistant: endpoint.assistant || ASSISTANT_API,
      web: endpoint.web || WEB_API,
      endpoint: endpoint.endpoint || ENDPOINT_API,
    };
    this._auth = auth;
    this._debug = debug;
  }

  get conversationClient(): TalkServiceClient {
    return new TalkServiceClient(this._endpoint.web, this.getClientOptions());
  }

  get assistantClient(): AssistantServiceClient {
    return new AssistantServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get projectClient(): ProjectServiceClient {
    return new ProjectServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get knowledgeClient(): KnowledgeServiceClient {
    return new KnowledgeServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get deploymentClient(): DeploymentClient {
    return new DeploymentClient(this._endpoint.web, this.getClientOptions());
  }

  get marketplaceClient(): MarketplaceServiceClient {
    return new MarketplaceServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get documentClient(): DocumentServiceClient {
    return new DocumentServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get vaultClient(): VaultServiceClient {
    return new VaultServiceClient(this._endpoint.web, this.getClientOptions());
  }

  get endpointClient(): EndpointServiceClient {
    return new EndpointServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get auditLoggingClient(): AuditLoggingServiceClient {
    return new AuditLoggingServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get assistantDeploymentClient(): AssistantDeploymentServiceClient {
    return new AssistantDeploymentServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get organizationClient(): OrganizationServiceClient {
    return new OrganizationServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get connectClient(): ConnectServiceClient {
    return new ConnectServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get providerClient(): ProviderServiceClient {
    return new ProviderServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  get authenticationClient(): AuthenticationServiceClient {
    return new AuthenticationServiceClient(
      this._endpoint.web,
      this.getClientOptions()
    );
  }

  withLocal(): this {
    return this.withCustomEndpoint({
      assistant: LOCAL_ASSISTANT_API,
      web: LOCAL_WEB_API,
      endpoint: LOCAL_ENDPOINT_API,
    });
  }

  get auth(): ClientAuthInfo | UserAuthInfo {
    return this._auth;
  }

  withCustomEndpoint(
    endpoint: {
      assistant?: string;
      web?: string;
      endpoint?: string;
    } = {
      assistant: ASSISTANT_API,
      web: WEB_API,
      endpoint: ENDPOINT_API,
    },
    debug?: boolean
  ): this {
    this._endpoint = {
      assistant: endpoint.assistant || ASSISTANT_API,
      web: endpoint.web || WEB_API,
      endpoint: endpoint.endpoint || ENDPOINT_API,
    };
    if (debug !== undefined) this._debug = debug;
    return this;
  }
}
