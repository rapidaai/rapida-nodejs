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
import { handleSingleResponse, WithAuthContext } from "@/rapida/clients";
import {
  Assistant,
  GetAssistantRequest,
} from "@/rapida/clients/protos/assistant-api_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
/**
 * Retrieve details of a specific assistant.
 *
 * @param assistantId - The ID of the assistant to retrieve.
 * @param assistantProviderModelId - Optional ID of the assistant provider model.
 * @param cb - Callback function to handle the response.
 * @param authHeader - Authentication headers for the request.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAssistant(
  connectionCfg: ConnectionConfig,
  assistantId: string,
  assistantProviderModelId: string | null
): Promise<Assistant> {
  return new Promise((resolve, reject) => {
    const req = new GetAssistantRequest();
    req.setId(assistantId);
    if (assistantProviderModelId) {
      req.setAssistantprovidermodelid(assistantProviderModelId);
    }
    return connectionCfg.assistantClient.getAssistant(
      req,
      WithAuthContext(connectionCfg.auth),
      (err, response) => {
        if (err) reject(err);
        else {
          try {
            resolve(handleSingleResponse(response!)!);
          } catch (error) {
            reject(error);
          }
        }
      }
    );
  });
}
