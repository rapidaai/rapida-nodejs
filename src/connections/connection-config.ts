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
import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_pb_service";
import { ASSISTANT_API, LOCAL_ASSISTANT_API } from "@/rapida/configs";
import { ClientAuthInfo, getClientInfo, UserAuthInfo } from "@/rapida/clients";
import { AssistantServiceClient } from "@/rapida/clients/protos/assistant-api_pb_service";
import { DEBUGGER_SOURCE, NODESDK_SOURCE } from "@/rapida/utils/rapida_source";
import {
  HEADER_API_KEY,
  HEADER_AUTH_ID,
  HEADER_PROJECT_ID,
  HEADER_SOURCE_KEY,
} from "@/rapida/utils/rapida_header";

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
        [HEADER_SOURCE_KEY]: DEBUGGER_SOURCE,
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
        [HEADER_SOURCE_KEY]: NODESDK_SOURCE,
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
    endpoint?: string,
    debug?: boolean
  ) {
    this.auth = auth;
    this.auth.Client = getClientInfo(this.auth.Client);
    this.conversationClient = new TalkServiceClient(
      endpoint ? endpoint : ASSISTANT_API,
      {
        debug: debug ? debug : false,
      }
    );

    this.assistantClient = new AssistantServiceClient(
      endpoint ? endpoint : ASSISTANT_API,
      {
        debug: debug ? debug : false,
      }
    );
  }

  /**
   * Only for testing
   * @returns
   */
  withLocal(): this {
    return this.withCustomEndpoint(LOCAL_ASSISTANT_API);
  }

  /**
   * On premise deployment options
   * @param endpoint
   * @returns
   */
  withCustomEndpoint(endpoint: string, debug?: boolean): this {
    this.conversationClient = new TalkServiceClient(endpoint, {
      debug: debug ? debug : false,
    });

    this.assistantClient = new AssistantServiceClient(endpoint, {
      debug: debug ? debug : false,
    });
    return this;
  }
}
