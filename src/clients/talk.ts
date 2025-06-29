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
 *  This module provides functions for managing projects through the ProjectService.
 */
import {
  AssistantMessagingRequest,
  AssistantDefinition,
  AssistantMessagingResponse,
  InitiateAssistantTalkRequest,
  InitiateAssistantTalkResponse,
  InitiateAssistantTalkParameter,
  InitiateBulkAssistantTalkRequest,
} from "@/rapida/clients/protos/talk-api_pb";
import {
  GetAllConversationMessageRequest,
  GetAllConversationMessageResponse,
  GetAllAssistantConversationResponse,
  GetAllAssistantConversationRequest,
  Metric,
} from "@/rapida/clients/protos/common_pb";
import {
  ClientAuthInfo,
  UserAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import {
  ServiceError,
  BidirectionalStream,
  ResponseStream,
} from "@/rapida/clients/protos/talk-api_pb_service";
import { Criteria, Paginate, Message } from "@/rapida/clients/protos/common_pb";
import { TalkServiceClient } from "@/rapida/clients/protos/talk-api_pb_service";
import { InitiateBulkAssistantTalkResponse } from "./protos/talk-api_pb";
import {
  CreateConversationMetricResponse,
  CreateConversationMetricRequest,
} from "./protos/talk-api_pb";
import {
  CreateMessageMetricResponse,
  CreateMessageMetricRequest,
} from "./protos/talk-api_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";

/**
 *
 * @param assistantId
 * @param assistantProviderModelId
 * @param message
 * @param authHeader
 * @param cb
 */
export function AssistantMessaging(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantProviderModelId: string,
  conversation: {
    message: Message;
    assistantConversationId?: string | null;
  }
): ResponseStream<AssistantMessagingResponse> {
  const req = new AssistantMessagingRequest();
  const ad = new AssistantDefinition();
  ad.setAssistantid(assistantId);
  ad.setVersion(assistantProviderModelId);
  req.setAssistant(ad);

  if (conversation.assistantConversationId) {
    req.setAssistantconversationid(conversation.assistantConversationId);
  }
  req.setMessage(conversation.message);
  const ctx = WithAuthContext(clientCfg.auth);
  return clientCfg.conversationClient.assistantMessaging(req, ctx);
}
/**
 *
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 */
export function GetAllAssistantConversation(
  clientCfg: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: GetAllAssistantConversationResponse | null
  ) => void
) {
  const req = new GetAllAssistantConversationRequest();
  req.setAssistantid(assistantId);
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
  clientCfg.conversationClient.getAllAssistantConversation(
    req,
    WithAuthContext(clientCfg.auth),
    cb
  );
}

/**
 *
 * @param assistantId
 * @param assistantConversationId
 * @param page
 * @param pageSize
 * @param criteria
 * @param cb
 * @param authHeader
 */
export function GetAllAssistantConversationMessage(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: GetAllConversationMessageResponse | null
  ) => void
) {
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
  clientCfg.conversationClient.getAllConversationMessage(
    req,
    WithAuthContext(clientCfg.auth),
    cb
  );
}

/**
 *
 * @param authHeader
 * @returns
 */
export function AssistantTalk(
  clientCfg: ConnectionConfig
): BidirectionalStream<AssistantMessagingRequest, AssistantMessagingResponse> {
  return clientCfg.conversationClient.assistantTalk(
    WithAuthContext(clientCfg.auth)
  );
}

/**
 *
 * @param clientCfg.conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param assistantConversationMessageId
 * @param cb
 * @param authHeader
 */
export function CreateMessageMetric(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  messageId: string,
  metrics: { name: string; value: string; description: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: CreateMessageMetricResponse | null
  ) => void
) {
  const req = new CreateMessageMetricRequest();
  req.setAssistantid(assistantId);
  req.setAssistantconversationid(assistantConversationId);
  req.setMessageid(messageId);
  for (var mtr of metrics) {
    const _m = new Metric();
    _m.setName(mtr.name);
    _m.setValue(mtr.value);
    _m.setDescription(mtr.description);
    req.addMetrics(_m);
  }
  clientCfg.conversationClient.createMessageMetric(
    req,
    WithAuthContext(clientCfg.auth),
    cb
  );
}

/**
 *
 * @param clientCfg.conversationClient
 * @param assistantId
 * @param assistantConversationId
 * @param metrics
 * @param cb
 * @param authHeader
 */
export function CreateConversationMetric(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  metrics: { name: string; value: string; description: string }[],
  cb: (
    err: ServiceError | null,
    uvcr: CreateConversationMetricResponse | null
  ) => void
) {
  const req = new CreateConversationMetricRequest();
  req.setAssistantid(assistantId);
  req.setAssistantconversationid(assistantConversationId);
  for (var mtr of metrics) {
    const _m = new Metric();
    _m.setName(mtr.name);
    _m.setValue(mtr.value);
    _m.setDescription(mtr.description);
    req.addMetrics(_m);
  }
  clientCfg.conversationClient.createConversationMetric(
    req,
    WithAuthContext(clientCfg.auth),
    cb
  );
}

/**
 *
 * @param clientCfg.conversationClient
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param cb
 * @param authHeader
 * @param args
 * @param options
 * @param metadata
 */
export function InitiateAssistantTalk(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantVersion: string = "latest",
  params: Map<string, google_protobuf_any_pb.Any>,
  cb: (
    err: ServiceError | null,
    uvcr: InitiateAssistantTalkResponse | null
  ) => void,
  args?: Map<string, google_protobuf_any_pb.Any>,
  options?: Map<string, google_protobuf_any_pb.Any>,
  metadata?: Map<string, google_protobuf_any_pb.Any>
) {
  const request = new InitiateAssistantTalkRequest();
  const assistant = new AssistantDefinition();
  assistant.setAssistantid(assistantId);
  assistant.setVersion(assistantVersion);
  request.setAssistant(assistant);

  const tk = new InitiateAssistantTalkParameter();
  params.forEach((value, key) => {
    tk.getItemsMap().set(key, value);
  });
  request.setParams(tk);

  if (args) {
    args.forEach((value, key) => {
      request.getArgsMap().set(key, value);
    });
  }

  if (options) {
    options.forEach((value, key) => {
      request.getOptionsMap().set(key, value);
    });
  }

  if (metadata) {
    metadata.forEach((value, key) => {
      request.getMetadataMap().set(key, value);
    });
  }

  clientCfg.conversationClient.initiateAssistantTalk(
    request,
    WithAuthContext(clientCfg.auth),
    cb
  );
}

/**
 *
 * @param clientCfg.conversationClient
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param cb
 * @param authHeader
 * @param args
 * @param options
 * @param metadata
 */
export function InitiateBulkAssistantTalk(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantVersion: string = "latest",
  params: Array<Map<string, google_protobuf_any_pb.Any>>,
  cb: (
    err: ServiceError | null,
    uvcr: InitiateBulkAssistantTalkResponse | null
  ) => void,
  args?: Map<string, google_protobuf_any_pb.Any>,
  options?: Map<string, google_protobuf_any_pb.Any>,
  metadata?: Map<string, google_protobuf_any_pb.Any>
) {
  const request = new InitiateBulkAssistantTalkRequest();
  const assistant = new AssistantDefinition();
  assistant.setAssistantid(assistantId);
  assistant.setVersion(assistantVersion);
  request.setAssistant(assistant);

  params.map((param) => {
    const tk = new InitiateAssistantTalkParameter();
    param.forEach((v, k) => {
      tk.getItemsMap().set(k, v);
    });
    request.addParams(tk);
  });
  if (args) {
    args?.forEach((v, k) => {
      request.getArgsMap().set(k, v);
    });
  }

  if (options) {
    options?.forEach((v, k) => {
      request.getOptionsMap().set(k, v);
    });
  }
  if (metadata) {
    metadata?.forEach((v, k) => {
      request.getMetadataMap().set(k, v);
    });
  }

  clientCfg.conversationClient.initiateBulkAssistantTalk(
    request,
    WithAuthContext(clientCfg.auth),
    cb
  );
}
