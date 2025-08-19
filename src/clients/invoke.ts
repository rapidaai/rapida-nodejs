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
 *  This module provides functions for interacting with the Deployment API.
 *  It includes methods for invoking requests with specified parameters.
 */

import {
  ClientAuthInfo,
  UserAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import {
  EndpointDefinition,
  InvokeRequest,
  InvokeResponse,
} from "@/rapida/clients/protos/invoker-api_pb";
import p from "google-protobuf/google/protobuf/any_pb";
import { StringToAny } from "@/rapida/utils/rapida_value";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import grpc, { ServiceError } from "@grpc/grpc-js";

/**
 * Invoke an endpoint with specified parameters.
 *
 * @param connectionCfg - The connection configuration.
 * @param endpointId - The ID of the endpoint to invoke.
 * @param endpointProviderModelId - The provider model ID of the endpoint.
 * @param parameters - A map of parameters to pass to the endpoint.
 * @param metadata - Optional metadata to include in the request.
 * @returns Promise<InvokeResponse> - A promise that resolves with the InvokeResponse.
 */
export function Invoke(
  config: ConnectionConfig,
  endpointId: string,
  parameters: Map<string, p.Any>,
  version?: string,
  metadata?: Map<string, string>
): Promise<InvokeResponse> {
  return new Promise((resolve, reject) => {
    const req = new InvokeRequest();
    const endpoint = new EndpointDefinition();
    endpoint.setEndpointid(endpointId);
    if (version) {
      endpoint.setVersion(version);
    } else {
      endpoint.setVersion("latest");
    }

    req.setEndpoint(endpoint);

    // Set the parameters for the request
    parameters.forEach((value, key) => {
      req.getArgsMap().set(key, value);
    });

    // Set the optional metadata for the request
    if (metadata) {
      metadata.forEach((value, key) => {
        req.getMetadataMap().set(key, StringToAny(value));
      });
    }

    return config.deploymentClient.invoke(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: InvokeResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
