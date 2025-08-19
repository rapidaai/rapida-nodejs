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
 *  This module provides functions for managing assistants using gRPC. It includes
 *  operations for creating, updating, retrieving, and personalizing assistants,
 *  as well as handling assistant provider models and tags.
 */

import {
  Criteria,
  FieldSelector,
  GetAllAssistantConversationResponse,
  GetAllConversationMessageRequest,
  GetAllConversationMessageResponse,
  Metadata,
  Ordering,
  Paginate,
  TextChatCompletePrompt,
} from "@/rapida/clients/protos/common_pb";
import {
  GetAllAssistantRequest,
  GetAllAssistantResponse,
  CreateAssistantRequest,
  GetAllAssistantProviderModelRequest,
  UpdateAssistantVersionRequest,
  GetAssistantRequest,
  GetAssistantResponse,
  CreateAssistantTagRequest,
  CreateAssistantProviderModelRequest,
  GetAllAssistantProviderModelResponse,
  UpdateAssistantDetailRequest,
  GetAllAssistantMessageRequest,
  GetAllAssistantMessageResponse,
  GetAssistantConversationResponse,
  GetAssistantConversationRequest,
  DeleteAssistantRequest,
  GetAssistantProviderModelResponse,
  GetAllMessageRequest,
  GetAllMessageResponse,
} from "@/rapida/clients/protos/assistant-api_pb";

import {
  GetAssistantAnalysisResponse,
  GetAssistantAnalysisRequest,
  UpdateAssistantAnalysisRequest,
  CreateAssistantAnalysisRequest,
  GetAllAssistantAnalysisResponse,
  GetAllAssistantAnalysisRequest,
  DeleteAssistantAnalysisRequest,
} from "@/rapida/clients/protos/assistant-analysis_pb";

import {
  GetAssistantToolResponse,
  GetAssistantToolRequest,
  UpdateAssistantToolRequest,
  CreateAssistantToolRequest,
  GetAllAssistantToolResponse,
  GetAllAssistantToolRequest,
  DeleteAssistantToolRequest,
} from "@/rapida/clients/protos/assistant-tool_pb";

import {
  GetAssistantKnowledgeResponse,
  GetAssistantKnowledgeRequest,
  UpdateAssistantKnowledgeRequest,
  CreateAssistantKnowledgeRequest,
  GetAllAssistantKnowledgeResponse,
  GetAllAssistantKnowledgeRequest,
  DeleteAssistantKnowledgeRequest,
} from "@/rapida/clients/protos/assistant-knowledge_pb";

import {
  DeleteAssistantWebhookRequest,
  GetAssistantWebhookLogRequest,
  GetAllAssistantWebhookLogRequest,
  GetAssistantWebhookLogResponse,
  GetAssistantWebhookResponse,
  CreateAssistantWebhookRequest,
  UpdateAssistantWebhookRequest,
  GetAllAssistantWebhookLogResponse,
  GetAssistantWebhookRequest,
  GetAllAssistantWebhookRequest,
  GetAllAssistantWebhookResponse,
} from "@/rapida/clients/protos/assistant-webhook_pb";
import { ServiceError } from "@grpc/grpc-js";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { GetAllAssistantConversationRequest } from "@/rapida/clients/protos/common_pb";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";

export function GetAllAssistant(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllAssistantResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllAssistantRequest();
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

    connectionConfig.assistantClient.getAllAssistant(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAllAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function UpdateAssistantVersion(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantProviderModelId: string
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    const req = new UpdateAssistantVersionRequest();
    req.setAssistantid(assistantId);
    req.setAssistantprovidermodelid(assistantProviderModelId);

    connectionConfig.assistantClient.updateAssistantVersion(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantProviderModel(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllAssistantProviderModelResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllAssistantProviderModelRequest();
    req.setAssistantid(assistantId);

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

    connectionConfig.assistantClient.getAllAssistantProviderModel(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantProviderModelResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistant(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantProviderModelId: string | null
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAssistantRequest();
    req.setId(assistantId);
    if (assistantProviderModelId) {
      req.setAssistantprovidermodelid(assistantProviderModelId);
    }
    connectionConfig.assistantClient.getAssistant(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantProviderModel(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  template: TextChatCompletePrompt,
  modelProviderId: string,
  modelProviderName: string,
  modelProviderOptions: Array<Metadata>,
  description: string
): Promise<GetAssistantProviderModelResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantProviderModelRequest();
    req.setAssistantid(assistantId);
    req.setDescription(description);
    req.setAssistantmodeloptionsList(modelProviderOptions);
    req.setModelproviderid(modelProviderId);
    req.setTemplate(template);
    req.setModelprovidername(modelProviderName);
    connectionConfig.assistantClient.createAssistantProviderModel(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantProviderModelResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistant(
  connectionConfig: ConnectionConfig,
  name: string,
  description: string,
  tagsList: Array<string>,
  assistantProviderModel: CreateAssistantProviderModelRequest,
  tags: string[],
  assistantKnowledgeConfig?: Array<CreateAssistantKnowledgeRequest>,
  assistantToolConfig?: Array<CreateAssistantToolRequest>
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantRequest();
    req.setName(name);
    req.setDescription(description);
    req.setTagsList(tagsList);
    req.setAssistantprovidermodel(assistantProviderModel);
    if (assistantKnowledgeConfig)
      req.setAssistantknowledgesList(assistantKnowledgeConfig);
    if (assistantToolConfig) req.setAssistanttoolsList(assistantToolConfig);

    req.setTagsList(tags);
    connectionConfig.assistantClient.createAssistant(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantTag(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  tags: string[]
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantTagRequest();
    req.setTagsList(tags);
    req.setAssistantid(assistantId);

    connectionConfig.assistantClient.createAssistantTag(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function UpdateAssistantDetail(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  name: string,
  description: string
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    const req = new UpdateAssistantDetailRequest();
    req.setName(name);
    req.setDescription(description);
    req.setAssistantid(assistantId);

    connectionConfig.assistantClient.updateAssistantDetail(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantMessages(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  selectors: ("metadata" | "metric" | "stage" | "request" | "response")[]
): Promise<GetAllAssistantMessageResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllAssistantMessageRequest();
    const paginate = new Paginate();

    criteria.forEach(({ key, value, logic }) => {
      const ctr = new Criteria();
      ctr.setKey(key);
      ctr.setValue(value);
      ctr.setLogic(logic);
      req.addCriterias(ctr);
    });

    req.setAssistantid(assistantId);

    selectors.forEach((v) => {
      const selectors = new FieldSelector();
      selectors.setField(v);
      req.addSelectors(selectors);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    const order = new Ordering();
    order.setColumn("created_date");
    order.setOrder("desc");
    req.setOrder(order);
    req.setPaginate(paginate);
    connectionConfig.assistantClient.getAllAssistantMessage(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantMessageResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetMessages(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[],
  selectors: ("metadata" | "metric" | "stage" | "request" | "response")[]
): Promise<GetAllMessageResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllMessageRequest();
    const paginate = new Paginate();

    criteria.forEach(({ key, value, logic }) => {
      const ctr = new Criteria();
      ctr.setKey(key);
      ctr.setValue(value);
      ctr.setLogic(logic);
      req.addCriterias(ctr);
    });

    selectors.forEach((v) => {
      const selectors = new FieldSelector();
      selectors.setField(v);
      req.addSelectors(selectors);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    const order = new Ordering();
    order.setColumn("created_date");
    order.setOrder("desc");
    req.setOrder(order);
    req.setPaginate(paginate);
    connectionConfig.assistantClient.getAllMessage(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAllMessageResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantSession(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[]
): Promise<GetAllAssistantConversationResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllAssistantConversationRequest();
    req.setAssistantid(assistantId);
    const paginate = new Paginate();
    criteria.forEach((x) => {
      let ctr = new Criteria();
      ctr.setKey(x.key);
      ctr.setValue(x.value);
      ctr.setLogic(x.logic);
      req.addCriterias(ctr);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    req.setPaginate(paginate);
    connectionConfig.assistantClient.getAllAssistantConversation(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantConversationResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantConversationMessage(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllConversationMessageResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllConversationMessageRequest();
    req.setAssistantid(assistantId);
    req.setAssistantconversationid(assistantConversationId);
    const paginate = new Paginate();
    criteria.forEach((x) => {
      let ctr = new Criteria();
      ctr.setKey(x.key);
      ctr.setValue(x.value);
      req.addCriterias(ctr);
    });
    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    req.setPaginate(paginate);
    connectionConfig.assistantClient.getAllConversationMessage(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllConversationMessageResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllAssistantWebhookResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllAssistantWebhookRequest();
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

    req.setAssistantid(assistantId);
    return connectionConfig.assistantClient.getAllAssistantWebhook(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantWebhookResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param method
 * @param endpoint
 * @param headers
 * @param parameters
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param priority
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function CreateWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  method: string,
  endpoint: string,
  headers: { key: string; value: string }[],
  parameters: { key: string; value: string }[],
  events: string[],
  retryOnStatus: string[],
  maxRetries: number,
  timeout: number,
  priority: number,
  description?: string
): Promise<GetAssistantWebhookResponse> {
  return new Promise((resolve, reject) => {
    const req = new CreateAssistantWebhookRequest();
    req.setAssistantid(assistantId);
    req.setHttpurl(endpoint);
    req.setHttpmethod(method);
    req.setAssistanteventsList(events);
    headers.forEach((k) => {
      req.getHttpheadersMap().set(k.key, k.value);
    });
    parameters.forEach((k) => {
      req.getHttpbodyMap().set(k.key, k.value);
    });
    req.setRetrystatuscodesList(retryOnStatus);
    req.setMaxretrycount(maxRetries);
    req.setTimeoutsecond(timeout);
    req.setExecutionpriority(priority);
    if (description) req.setDescription(description);

    connectionConfig.assistantClient.createAssistantWebhook(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebhookResponse | null
      ) => {
        if (err) {
          reject(err);
        } else {
          resolve(response!);
        }
      }
    );
  });
}

/**
 *
 * @param assistantId
 * @param webhookId
 * @param method
 * @param endpoint
 * @param headers
 * @param events
 * @param retryOnStatus
 * @param maxRetries
 * @param timeout
 * @param cb
 * @param authHeader
 * @param description
 * @returns
 */
export function UpdateWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  webhookId: string,
  method: string,
  endpoint: string,
  headers: { key: string; value: string }[],
  parameters: { key: string; value: string }[],
  events: string[],
  retryOnStatus: string[],
  maxRetries: number,
  timeout: number,
  priority: number,
  description?: string
): Promise<GetAssistantWebhookResponse> {
  const req = new UpdateAssistantWebhookRequest();
  req.setId(webhookId);
  req.setAssistantid(assistantId);
  req.setHttpurl(endpoint);
  req.setHttpmethod(method);
  req.setAssistanteventsList(events);
  headers.forEach((k) => req.getHttpheadersMap().set(k.key, k.value));
  parameters.forEach((k) => req.getHttpbodyMap().set(k.key, k.value));
  req.setRetrystatuscodesList(retryOnStatus);
  req.setMaxretrycount(maxRetries);
  req.setTimeoutsecond(timeout);
  req.setExecutionpriority(priority);
  if (description) req.setDescription(description);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.updateAssistantWebhook(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebhookResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function GetAssistantWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  webhookId: string
): Promise<GetAssistantWebhookResponse> {
  const req = new GetAssistantWebhookRequest();
  req.setAssistantid(assistantId);
  req.setId(webhookId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistantWebhook(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebhookResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function DeleteAssistantWebhook(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  webhookId: string
): Promise<GetAssistantWebhookResponse> {
  const req = new DeleteAssistantWebhookRequest();
  req.setAssistantid(assistantId);
  req.setId(webhookId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.deleteAssistantWebhook(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebhookResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function GetAssistantConversation(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  conversaiontId: string
): Promise<GetAssistantConversationResponse> {
  const req = new GetAssistantConversationRequest();
  req.setAssistantid(assistantId);
  req.setConversationid(conversaiontId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistantConversation(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantConversationResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function DeleteAssistant(
  connectionConfig: ConnectionConfig,
  assistantId: string
): Promise<GetAssistantResponse> {
  const req = new DeleteAssistantRequest();
  req.setId(assistantId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.deleteAssistant(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) =>
        err ? reject(err) : resolve(response!)
    );
  });
}

export function GetAllAssistantAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllAssistantAnalysisResponse> {
  const req = new GetAllAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
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

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAllAssistantAnalysis(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantAnalysisResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function CreateAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  name: string,
  endpointid: string,
  endpointversion: string,
  executionpriority: number,
  parameters: { key: string; value: string }[],
  description?: string
): Promise<GetAssistantAnalysisResponse> {
  const req = new CreateAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
  req.setEndpointid(endpointid);
  req.setEndpointversion(endpointversion);
  req.setName(name);
  req.setExecutionpriority(executionpriority);
  parameters.forEach((k) => req.getEndpointparametersMap().set(k.key, k.value));
  if (description) req.setDescription(description);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.createAssistantAnalysis(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantAnalysisResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function UpdateAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  AnalysisId: string,
  name: string,
  endpointid: string,
  endpointversion: string,
  executionpriority: number,
  parameters: { key: string; value: string }[],
  description?: string
): Promise<GetAssistantAnalysisResponse> {
  const req = new UpdateAssistantAnalysisRequest();
  req.setId(AnalysisId);
  req.setAssistantid(assistantId);
  req.setEndpointid(endpointid);
  req.setEndpointversion(endpointversion);
  req.setName(name);
  req.setExecutionpriority(executionpriority);
  parameters.forEach((k) => req.getEndpointparametersMap().set(k.key, k.value));
  if (description) req.setDescription(description);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.updateAssistantAnalysis(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantAnalysisResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function GetAssistantAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  AnalysisId: string
): Promise<GetAssistantAnalysisResponse> {
  const req = new GetAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
  req.setId(AnalysisId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistantAnalysis(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantAnalysisResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function DeleteAssistantAnalysis(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  AnalysisId: string
): Promise<GetAssistantAnalysisResponse> {
  const req = new DeleteAssistantAnalysisRequest();
  req.setAssistantid(assistantId);
  req.setId(AnalysisId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.deleteAssistantAnalysis(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantAnalysisResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function GetAllWebhookLog(
  connectionConfig: ConnectionConfig,
  projectId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string; logic: string }[]
): Promise<GetAllAssistantWebhookLogResponse> {
  const req = new GetAllAssistantWebhookLogRequest();
  req.setProjectid(projectId);
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

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAllAssistantWebhookLog(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantWebhookLogResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function GetWebhookLog(
  connectionConfig: ConnectionConfig,
  projectId: string,
  webhookLogId: string
): Promise<GetAssistantWebhookLogResponse> {
  const req = new GetAssistantWebhookLogRequest();
  req.setProjectid(projectId);
  req.setId(webhookLogId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistantWebhookLog(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantWebhookLogResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function GetAllAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllAssistantToolResponse> {
  const req = new GetAllAssistantToolRequest();
  req.setAssistantid(assistantId);
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

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAllAssistantTool(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantToolResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function CreateAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  name: string,
  description: string,
  fields: {},
  executionMethod: string,
  executionOptions: Metadata[]
): Promise<GetAssistantToolResponse> {
  const req = new CreateAssistantToolRequest();
  req.setAssistantid(assistantId);
  req.setName(name);
  req.setDescription(description);
  req.setFields(Struct.fromJavaScript(fields));
  req.setExecutionmethod(executionMethod);
  executionOptions.forEach((x) => req.addExecutionoptions(x));

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.createAssistantTool(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) =>
        err ? reject(err) : resolve(response!)
    );
  });
}

export function UpdateAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  assistantToolId: string,
  name: string,
  description: string,
  fields: {},
  executionMethod: string,
  executionOptions: Metadata[]
): Promise<GetAssistantToolResponse> {
  const req = new UpdateAssistantToolRequest();
  req.setId(assistantToolId);
  req.setAssistantid(assistantId);
  req.setName(name);
  req.setDescription(description);
  req.setFields(Struct.fromJavaScript(fields));
  req.setExecutionmethod(executionMethod);
  executionOptions.forEach((x) => req.addExecutionoptions(x));

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.updateAssistantTool(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) =>
        err ? reject(err) : resolve(response!)
    );
  });
}

export function GetAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  ToolId: string
): Promise<GetAssistantToolResponse> {
  const req = new GetAssistantToolRequest();
  req.setAssistantid(assistantId);
  req.setId(ToolId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistantTool(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) =>
        err ? reject(err) : resolve(response!)
    );
  });
}

export function DeleteAssistantTool(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  ToolId: string
): Promise<GetAssistantToolResponse> {
  const req = new DeleteAssistantToolRequest();
  req.setAssistantid(assistantId);
  req.setId(ToolId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.deleteAssistantTool(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) =>
        err ? reject(err) : resolve(response!)
    );
  });
}

export function GetAllAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllAssistantKnowledgeResponse> {
  const req = new GetAllAssistantKnowledgeRequest();
  req.setAssistantid(assistantId);
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

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAllAssistantKnowledge(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantKnowledgeResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function CreateAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  knowledgeId: string,
  config: {
    searchMethod: "semantic" | "fullText" | "hybrid" | "invertedIndex";
    rerankingEnable: boolean;
    rerankerModelProvider?: string;
    rerankerModelProviderId?: string;
    rerankerModelOptions?: Metadata[];
    topK: number;
    scoreThreshold: number;
  }
): Promise<GetAssistantKnowledgeResponse> {
  const req = new CreateAssistantKnowledgeRequest();
  req.setKnowledgeid(knowledgeId);
  req.setAssistantid(assistantId);
  if (config.rerankingEnable) {
    req.setRerankerenable(config.rerankingEnable);
    req.setRerankermodelproviderid(config.rerankerModelProviderId!);
    req.setRerankermodelprovidername(config.rerankerModelProvider!);
    req.setAssistantknowledgererankeroptionsList(config.rerankerModelOptions!);
  }
  req.setTopk(config.topK);
  req.setScorethreshold(config.scoreThreshold);
  req.setRetrievalmethod(config.searchMethod);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.createAssistantKnowledge(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function UpdateAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  id: string,
  assistantId: string,
  knowledgeId: string,
  config: {
    searchMethod: "semantic" | "fullText" | "hybrid" | "invertedIndex";
    rerankingEnable: boolean;
    rerankerModelProvider?: string;
    rerankerModelProviderId?: string;
    rerankerModelOptions?: Metadata[];
    topK: number;
    scoreThreshold: number;
  }
): Promise<GetAssistantKnowledgeResponse> {
  const req = new UpdateAssistantKnowledgeRequest();
  req.setKnowledgeid(knowledgeId);
  req.setAssistantid(assistantId);
  req.setId(id);
  if (config.rerankingEnable) {
    req.setRerankerenable(config.rerankingEnable);
    req.setRerankermodelproviderid(config.rerankerModelProviderId!);
    req.setRerankermodelprovidername(config.rerankerModelProvider!);
    req.setAssistantknowledgererankeroptionsList(config.rerankerModelOptions!);
  }
  req.setTopk(config.topK);
  req.setScorethreshold(config.scoreThreshold);
  req.setRetrievalmethod(config.searchMethod);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.updateAssistantKnowledge(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function GetAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  ToolId: string
): Promise<GetAssistantKnowledgeResponse> {
  const req = new GetAssistantKnowledgeRequest();
  req.setAssistantid(assistantId);
  req.setId(ToolId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.getAssistantKnowledge(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}

export function DeleteAssistantKnowledge(
  connectionConfig: ConnectionConfig,
  assistantId: string,
  knowledgeId: string
): Promise<GetAssistantKnowledgeResponse> {
  const req = new DeleteAssistantKnowledgeRequest();
  req.setAssistantid(assistantId);
  req.setId(knowledgeId);

  return new Promise((resolve, reject) => {
    connectionConfig.assistantClient.deleteAssistantKnowledge(
      req,
      WithAuthContext(connectionConfig.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => (err ? reject(err) : resolve(response!))
    );
  });
}
