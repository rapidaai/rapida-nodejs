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
  InitiateAssistantTalkParameter,
  InitiateBulkAssistantTalkRequest,
  CreateConversationMetricRequest,
  CreateMessageMetricRequest,
  CreateMessageMetricResponse,
  CreateConversationMetricResponse,
  InitiateAssistantTalkResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import {
  GetAllConversationMessageRequest,
  GetAllAssistantConversationRequest,
  Metric,
  AssistantConversation,
  AssistantConversationMessage,
  GetAllAssistantConversationResponse,
  GetAllConversationMessageResponse,
  SourceMap,
} from "@/rapida/clients/protos/common_pb";
import {
  handleListResponse,
  handleSingleResponse,
  WithAuthContext,
} from "@/rapida/clients";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ClientDuplexStream } from "@grpc/grpc-js";
import grpc from "@grpc/grpc-js";
import { InitiateBulkAssistantTalkResponse } from "./protos/talk-api_pb";
import { GetProtoSource, RapidaSource } from "@/rapida/utils/rapida_source";

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param page
 * @param pageSize
 * @param criteria
 * @returns
 */
export function GetAllAssistantConversation(
  clientCfg: ConnectionConfig,
  assistantId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<Array<AssistantConversation>> {
  return new Promise((resolve, reject) => {
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
      (
        err: grpc.ServiceError,
        response: GetAllAssistantConversationResponse
      ) => {
        if (err) reject(err);
        else {
          try {
            resolve(handleListResponse(response!));
          } catch (error) {
            reject(error);
          }
        }
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantConversationId
 * @param page
 * @param pageSize
 * @param criteria
 * @returns
 */
export function GetAllAssistantConversationMessage(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<Array<AssistantConversationMessage>> {
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
    clientCfg.conversationClient.getAllConversationMessage(
      req,
      WithAuthContext(clientCfg.auth),
      (err: grpc.ServiceError, response: GetAllConversationMessageResponse) => {
        if (err) reject(err);
        else {
          try {
            resolve(handleListResponse(response!));
          } catch (error) {
            reject(error);
          }
        }
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @returns
 */
export function AssistantTalk(
  clientCfg: ConnectionConfig
): ClientDuplexStream<AssistantMessagingRequest, AssistantMessagingResponse> {
  return clientCfg.conversationClient.assistantTalk(
    WithAuthContext(clientCfg.auth)
  );
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantConversationId
 * @param messageId
 * @param metrics
 * @returns
 */
export function CreateMessageMetric(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  messageId: string,
  metrics: { name: string; value: string; description: string }[]
): Promise<Array<Metric>> {
  return new Promise((resolve, reject) => {
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
      (err: grpc.ServiceError, response: CreateMessageMetricResponse) => {
        if (err) reject(err);
        else {
          try {
            resolve(handleListResponse(response!));
          } catch (error) {
            reject(error);
          }
        }
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantConversationId
 * @param metrics
 * @returns
 */
export function CreateConversationMetric(
  clientCfg: ConnectionConfig,
  assistantId: string,
  assistantConversationId: string,
  metrics: { name: string; value: string; description: string }[]
): Promise<Array<Metric>> {
  return new Promise((resolve, reject) => {
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
      (err: grpc.ServiceError, response: CreateConversationMetricResponse) => {
        if (err) reject(err);
        else {
          try {
            resolve(handleListResponse(response!));
          } catch (error) {
            reject(error);
          }
        }
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function InitiateAssistantTalk(
  clientCfg: ConnectionConfig,
  assistant: AssistantDefinition,
  source: RapidaSource,
  params: Map<string, google_protobuf_any_pb.Any>,
  args?: Map<string, google_protobuf_any_pb.Any>,
  options?: Map<string, google_protobuf_any_pb.Any>,
  metadata?: Map<string, google_protobuf_any_pb.Any>
): Promise<InitiateAssistantTalkParameter> {
  return new Promise((resolve, reject) => {
    const request = new InitiateAssistantTalkRequest();
    request.setAssistant(assistant);
    request.setSource(GetProtoSource(source));

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
      (
        err: grpc.ServiceError | null,
        response: InitiateAssistantTalkResponse
      ) => {
        if (err) {
          console.error("Error in initiateAssistantTalk:", err);
          reject(err);
        } else if (!response) {
          reject(new Error("No response received from initiateAssistantTalk"));
        } else {
          try {
            const result = handleSingleResponse(response);
            if (result) {
              resolve(result);
            } else {
              reject(
                new Error("handleSingleResponse returned null or undefined")
              );
            }
          } catch (error) {
            console.error("Error in handleSingleResponse:", error);
            reject(error);
          }
        }
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function InitiateBulkAssistantTalk(
  clientCfg: ConnectionConfig,
  assistant: AssistantDefinition,
  params: Array<Map<string, google_protobuf_any_pb.Any>>,
  args?: Map<string, google_protobuf_any_pb.Any>,
  options?: Map<string, google_protobuf_any_pb.Any>,
  metadata?: Map<string, google_protobuf_any_pb.Any>
): Promise<Array<InitiateAssistantTalkParameter>> {
  return new Promise((resolve, reject) => {
    const request = new InitiateBulkAssistantTalkRequest();
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
      (err: grpc.ServiceError, response: InitiateBulkAssistantTalkResponse) => {
        if (err) reject(err);
        else {
          try {
            resolve(handleListResponse(response!));
          } catch (error) {
            reject(error);
          }
        }
      }
    );
  });
}
