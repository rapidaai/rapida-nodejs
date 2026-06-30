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
  GetAssistantRequest,
  GetAssistantResponse,
  CreateAssistantTagRequest,
  UpdateAssistantDetailRequest,
  GetAllAssistantMessageRequest,
  GetAllAssistantMessageResponse,
  GetAssistantConversationResponse,
  GetAssistantConversationRequest,
  DeleteAssistantRequest,
  GetAllMessageRequest,
  GetAllMessageResponse,
} from "@/rapida/clients/protos/assistant-api_pb";

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
  UpdateAssistantVersionRequest,
} from "@/rapida/clients/protos/assistant-provider_pb";

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
  GetAssistantHTTPLogRequest,
  GetAllAssistantHTTPLogRequest,
  GetAssistantHTTPLogResponse,
  GetAllAssistantHTTPLogResponse,
} from "@/rapida/clients/protos/assistant-http-log_pb";
import { ServiceError } from "@grpc/grpc-js";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { GetAllAssistantConversationRequest } from "@/rapida/clients/protos/common_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";

export function GetAllAssistant(
  config: ConnectionConfig,
  req: GetAllAssistantRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllAssistantResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllAssistant(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAllAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function UpdateAssistantVersion(
  config: ConnectionConfig,
  req: UpdateAssistantVersionRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.updateAssistantVersion(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}


export function GetAssistant(
  config: ConnectionConfig,
  req: GetAssistantRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAssistant(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}



export function CreateAssistant(
  config: ConnectionConfig,
  req: CreateAssistantRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.createAssistant(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantTag(
  config: ConnectionConfig,
  req: CreateAssistantTagRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.createAssistantTag(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function UpdateAssistantDetail(
  config: ConnectionConfig,
  req: UpdateAssistantDetailRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.updateAssistantDetail(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantMessages(
  config: ConnectionConfig,
  req: GetAllAssistantMessageRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllAssistantMessageResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllAssistantMessage(
      req,
      WithAuthContext(auth || config.auth),
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
  config: ConnectionConfig,
  req: GetAllMessageRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllMessageResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllMessage(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAllMessageResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantConversation(
  config: ConnectionConfig,
  req: GetAllAssistantConversationRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllAssistantConversationResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllAssistantConversation(
      req,
      WithAuthContext(auth || config.auth),
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
  config: ConnectionConfig,
  req: GetAllConversationMessageRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllConversationMessageResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllConversationMessage(
      req,
      WithAuthContext(auth || config.auth),
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

export function GetAssistantConversation(
  config: ConnectionConfig,
  req: GetAssistantConversationRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantConversationResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAssistantConversation(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAssistantConversationResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function DeleteAssistant(
  config: ConnectionConfig,
  req: DeleteAssistantRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.deleteAssistant(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllHTTPLog(
  config: ConnectionConfig,
  req: GetAllAssistantHTTPLogRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllAssistantHTTPLogResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllAssistantHTTPLog(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantHTTPLogResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetHTTPLog(
  config: ConnectionConfig,
  req: GetAssistantHTTPLogRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantHTTPLogResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAssistantHTTPLog(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAssistantHTTPLogResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantTool(
  config: ConnectionConfig,
  req: GetAllAssistantToolRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllAssistantToolResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllAssistantTool(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantToolResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantTool(
  config: ConnectionConfig,
  req: CreateAssistantToolRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantToolResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.createAssistantTool(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function UpdateAssistantTool(
  config: ConnectionConfig,
  req: UpdateAssistantToolRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantToolResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.updateAssistantTool(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantTool(
  config: ConnectionConfig,
  req: GetAssistantToolRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantToolResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAssistantTool(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function DeleteAssistantTool(
  config: ConnectionConfig,
  req: DeleteAssistantToolRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantToolResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.deleteAssistantTool(
      req,
      WithAuthContext(auth || config.auth),
      (err: ServiceError | null, response: GetAssistantToolResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAllAssistantKnowledge(
  config: ConnectionConfig,
  req: GetAllAssistantKnowledgeRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAllAssistantKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAllAssistantKnowledge(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAllAssistantKnowledgeResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function CreateAssistantKnowledge(
  config: ConnectionConfig,
  req: CreateAssistantKnowledgeRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.createAssistantKnowledge(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function UpdateAssistantKnowledge(
  config: ConnectionConfig,
  req: UpdateAssistantKnowledgeRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.updateAssistantKnowledge(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function GetAssistantKnowledge(
  config: ConnectionConfig,
  req: GetAssistantKnowledgeRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.getAssistantKnowledge(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

export function DeleteAssistantKnowledge(
  config: ConnectionConfig,
  req: DeleteAssistantKnowledgeRequest,
  auth?: UserAuthInfo | ClientAuthInfo
): Promise<GetAssistantKnowledgeResponse> {
  return new Promise((resolve, reject) => {
    config.assistantClient.deleteAssistantKnowledge(
      req,
      WithAuthContext(auth || config.auth),
      (
        err: ServiceError | null,
        response: GetAssistantKnowledgeResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
