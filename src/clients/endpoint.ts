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
 *  This module provides functions for interacting with the Endpoint API. It includes
 *  methods for endpoint management, including creation, retrieval, and configuration.
 */

import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import {
  GetAllEndpointRequest,
  GetAllEndpointResponse,
  CreateEndpointRequest,
  GetAllEndpointProviderModelRequest,
  UpdateEndpointVersionRequest,
  UpdateEndpointVersionResponse,
  GetEndpointRequest,
  GetEndpointResponse,
  CreateEndpointTagRequest,
  EndpointRetryConfiguration,
  EndpointCacheConfiguration,
  CreateEndpointCacheConfigurationRequest,
  CreateEndpointCacheConfigurationResponse,
  CreateEndpointResponse,
  EndpointProviderModelAttribute,
  EndpointAttribute,
  CreateEndpointProviderModelRequest,
  CreateEndpointRetryConfigurationResponse,
  CreateEndpointProviderModelResponse,
  GetAllEndpointProviderModelResponse,
  CreateEndpointRetryConfigurationRequest,
  UpdateEndpointDetailRequest,
  GetAllEndpointLogRequest,
  GetAllEndpointLogResponse,
  GetEndpointLogResponse,
  GetEndpointLogRequest,
} from "@/rapida/clients/protos/endpoint-api_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";

/**
 * Retrieve all endpoints based on pagination and filtering criteria.
 *
 * @param page - The page number for pagination.
 * @param pageSize - The number of results per page.
 * @param criteria - List of filtering criteria.
 * @param config.auth - Authentication headers for the request.
 * @param cb - Callback function to handle the response.
 * @returns UnaryResponse - The gRPC response object.
 */
export function GetAllEndpoint(
  config: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[]
): Promise<GetAllEndpointResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllEndpointRequest();
    const paginate = new Paginate();
    criteria.forEach(({ key, value, logic }) => {
      const ctr = new Criteria();
      ctr.setKey(key);
      ctr.setValue(value);
      ctr.setLogic(logic);
      req.addCriterias(ctr);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    req.setPaginate(paginate);
    config.endpointClient.getAllEndpoint(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetAllEndpointResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function UpdateEndpointVersion(
  config: ConnectionConfig,
  endpointId: string,
  endpointProviderModelId: string
): Promise<UpdateEndpointVersionResponse> {
  return new Promise((resolve, reject) => {
    const req = new UpdateEndpointVersionRequest();
    req.setEndpointid(endpointId);
    req.setEndpointprovidermodelid(endpointProviderModelId);
    config.endpointClient.updateEndpointVersion(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: UpdateEndpointVersionResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function GetAllEndpointProviderModel(
  config: ConnectionConfig,
  endpointId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllEndpointProviderModelResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllEndpointProviderModelRequest();
    req.setEndpointid(endpointId);
    const paginate = new Paginate();
    criteria.forEach(({ key, value }) => {
      const ctr = new Criteria();
      ctr.setKey(key);
      ctr.setValue(value);
      req.addCriterias(ctr);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    req.setPaginate(paginate);
    config.endpointClient.getAllEndpointProviderModel(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetAllEndpointProviderModelResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function GetEndpoint(
  config: ConnectionConfig,
  endpointId: string,
  endpointProviderModelId: string | null
): Promise<GetEndpointResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetEndpointRequest();
    req.setId(endpointId);
    if (endpointProviderModelId) {
      req.setEndpointprovidermodelid(endpointProviderModelId);
    }
    config.endpointClient.getEndpoint(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetEndpointResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function CreateEndpointProviderModel(
  config: ConnectionConfig,
  endpointId: string,
  endpointProviderModel: EndpointProviderModelAttribute
): Promise<CreateEndpointProviderModelResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateEndpointProviderModelRequest();
    req.setEndpointid(endpointId);
    req.setEndpointprovidermodelattribute(endpointProviderModel);
    config.endpointClient.createEndpointProviderModel(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: CreateEndpointProviderModelResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function CreateEndpoint(
  config: ConnectionConfig,
  endpointProviderModel: EndpointProviderModelAttribute,
  endpointAttributes: EndpointAttribute,
  tags: string[],
  retryConfig?: EndpointRetryConfiguration,
  cacheConfig?: EndpointCacheConfiguration
): Promise<CreateEndpointResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateEndpointRequest();
    req.setEndpointattribute(endpointAttributes);
    req.setEndpointprovidermodelattribute(endpointProviderModel);
    if (cacheConfig) req.setCacheconfiguration(cacheConfig);
    if (retryConfig) req.setRetryconfiguration(retryConfig);
    req.setTagsList(tags);
    config.endpointClient.createEndpoint(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: CreateEndpointResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function CreateEndpointTag(
  config: ConnectionConfig,
  endpointId: string,
  tags: string[]
): Promise<GetEndpointResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateEndpointTagRequest();
    req.setTagsList(tags);
    req.setEndpointid(endpointId);
    config.endpointClient.createEndpointTag(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetEndpointResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function UpdateEndpointDetail(
  config: ConnectionConfig,
  endpointId: string,
  name: string,
  description: string
): Promise<GetEndpointResponse> {
  return new Promise((resolve, reject) => {
    const req = new UpdateEndpointDetailRequest();
    req.setName(name);
    req.setDescription(description);
    req.setEndpointid(endpointId);
    config.endpointClient.updateEndpointDetail(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetEndpointResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function CreateEndpointRetryConfiguration(
  config: ConnectionConfig,
  endpointId: string,
  retryType: string,
  maxAttempts: string,
  delaySeconds: string,
  exponentialBackoff: boolean,
  retryables: string[]
): Promise<CreateEndpointRetryConfigurationResponse> {
  return new Promise((resolve, reject) => {
    const request = new CreateEndpointRetryConfigurationRequest();
    const data = new EndpointRetryConfiguration();
    data.setRetryablesList(retryables);
    data.setExponentialbackoff(exponentialBackoff);
    data.setDelayseconds(delaySeconds);
    data.setMaxattempts(maxAttempts);
    data.setRetrytype(retryType);
    request.setEndpointid(endpointId);
    request.setData(data);
    config.endpointClient.createEndpointRetryConfiguration(
      request,
      WithAuthContext(config.auth),
      (
        err: ServiceError,
        response: CreateEndpointRetryConfigurationResponse
      ) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function CreateEndpointCacheConfiguration(
  config: ConnectionConfig,
  endpointId: string,
  cacheType: string,
  expiryInterval: string,
  matchThreshold: number
): Promise<CreateEndpointCacheConfigurationResponse> {
  return new Promise((resolve, reject) => {
    const request = new CreateEndpointCacheConfigurationRequest();
    const data = new EndpointCacheConfiguration();
    data.setMatchthreshold(matchThreshold);
    data.setExpiryinterval(expiryInterval);
    data.setCachetype(cacheType);
    request.setEndpointid(endpointId);
    request.setData(data);
    config.endpointClient.createEndpointCacheConfiguration(
      request,
      WithAuthContext(config.auth),
      (
        err: ServiceError,
        response: CreateEndpointCacheConfigurationResponse
      ) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function GetAllEndpointLog(
  config: ConnectionConfig,
  endpointId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[]
): Promise<GetAllEndpointLogResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllEndpointLogRequest();
    req.setEndpointid(endpointId);
    const paginate = new Paginate();
    criteria.forEach(({ key, value, logic }) => {
      const ctr = new Criteria();
      ctr.setKey(key);
      ctr.setValue(value);
      ctr.setLogic(logic);
      req.addCriterias(ctr);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    req.setPaginate(paginate);
    config.endpointClient.getAllEndpointLog(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetAllEndpointLogResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

export function GetEndpointLog(
  config: ConnectionConfig,
  endpointId: string,
  logId: string
): Promise<GetEndpointLogResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetEndpointLogRequest();
    req.setEndpointid(endpointId);
    req.setId(logId);
    config.endpointClient.getEndpointLog(
      req,
      WithAuthContext(config.auth),
      (err: ServiceError, response: GetEndpointLogResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
