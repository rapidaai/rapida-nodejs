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

/**
 * Represents a connection to the TalkService, providing both a conversation client
 * and a streaming client for real-time communication.
 */
export class ConnectionConfig {
  /**
   * gRPC client for handling standard conversation requests.
   */
  conversationClient: TalkServiceClient;

  /**
   * gRPC client for assistant apis
   */
  assistantClient: AssistantServiceClient;

  /**
   * deployment client to invoke endpoint
   */
  endpointClient: DeploymentClient;

  /**
   * Authentication information for the client, supporting both client and user authentication.
   */
  auth: ClientAuthInfo | UserAuthInfo;

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
    userId: string;
  }): ClientAuthInfo {
    return {
      [HEADER_API_KEY]: apiKey,
      [HEADER_AUTH_ID]: userId,
      Client: {
        [HEADER_SOURCE_KEY]: RapidaSource.NODE_SDK,
      },
    };
  }

  /**
   * Creates a new Connection instance, initializing the conversation and streaming clients.
   *
   * @param auth - Authentication information for the connection.
   * @param endpoint - (Optional) Custom API endpoint for connecting to the TalkService.
   *                   If not provided, it defaults to `ASSISTANT_API`.
   */
  constructor(
    auth: ClientAuthInfo | UserAuthInfo,
    assistantEndpoint?: string,
    deploymentEndpoint?: string,
    debug?: boolean
  ) {
    this.auth = auth;
    this.auth.Client = getClientInfo(this.auth.Client);
    this.conversationClient = new TalkServiceClient(
      assistantEndpoint ? assistantEndpoint : ASSISTANT_API,
      debug ? credentials.createInsecure() : credentials.createSsl()
    );

    this.assistantClient = new AssistantServiceClient(
      assistantEndpoint ? assistantEndpoint : ASSISTANT_API,
      debug ? credentials.createInsecure() : credentials.createSsl()
    );

    this.endpointClient = new DeploymentClient(
      deploymentEndpoint ? deploymentEndpoint : ENDPOINT_API,
      debug ? credentials.createInsecure() : credentials.createSsl()
    );
  }

  /**
   * Only for testing
   * @returns
   */
  withLocal(): this {
    return this.withCustomEndpoint(
      LOCAL_ASSISTANT_API,
      LOCAL_ENDPOINT_API,
      true
    );
  }

  /**
   * On premise deployment options
   * @param endpoint
   * @returns
   */
  withCustomEndpoint(
    assistantEndpoint: string,
    deploymentEndpoint: string,
    debug?: boolean
  ): this {
    console.log(
      `Debug: Initializing TalkServiceClient with endpoint: ${assistantEndpoint}`
    );
    this.conversationClient = new TalkServiceClient(
      assistantEndpoint,
      debug ? credentials.createInsecure() : credentials.createSsl()
    );
    console.log(
      `Debug: TalkServiceClient initialized: ${this.conversationClient}`
    );

    console.log(
      `Debug: Initializing AssistantServiceClient with endpoint: ${assistantEndpoint}`
    );
    this.assistantClient = new AssistantServiceClient(
      assistantEndpoint,
      debug ? credentials.createInsecure() : credentials.createSsl()
    );
    console.log(
      `Debug: AssistantServiceClient initialized: ${this.assistantClient}`
    );

    console.log(
      `Debug: Initializing DeploymentClient with endpoint: ${deploymentEndpoint}`
    );
    this.endpointClient = new DeploymentClient(
      deploymentEndpoint,
      debug ? credentials.createInsecure() : credentials.createSsl()
    );
    console.log(`Debug: DeploymentClient initialized: ${this.endpointClient}`);

    console.log("Debug: All clients initialized");
    return this;
  }
}
