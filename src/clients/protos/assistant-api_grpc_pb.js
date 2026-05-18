// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var assistant$api_pb = require('./assistant-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');
var assistant$deployment_pb = require('./assistant-deployment_pb.js');
var assistant$tool_pb = require('./assistant-tool_pb.js');
var assistant$analysis_pb = require('./assistant-analysis_pb.js');
var assistant$webhook_pb = require('./assistant-webhook_pb.js');
var assistant$knowledge_pb = require('./assistant-knowledge_pb.js');
var assistant$provider_pb = require('./assistant-provider_pb.js');

function serialize_GetAllAssistantConversationRequest(arg) {
  if (!(arg instanceof common_pb.GetAllAssistantConversationRequest)) {
    throw new Error('Expected argument of type GetAllAssistantConversationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllAssistantConversationRequest(buffer_arg) {
  return common_pb.GetAllAssistantConversationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllAssistantConversationResponse(arg) {
  if (!(arg instanceof common_pb.GetAllAssistantConversationResponse)) {
    throw new Error('Expected argument of type GetAllAssistantConversationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllAssistantConversationResponse(buffer_arg) {
  return common_pb.GetAllAssistantConversationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllConversationMessageRequest(arg) {
  if (!(arg instanceof common_pb.GetAllConversationMessageRequest)) {
    throw new Error('Expected argument of type GetAllConversationMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllConversationMessageRequest(buffer_arg) {
  return common_pb.GetAllConversationMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllConversationMessageResponse(arg) {
  if (!(arg instanceof common_pb.GetAllConversationMessageResponse)) {
    throw new Error('Expected argument of type GetAllConversationMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetAllConversationMessageResponse(buffer_arg) {
  return common_pb.GetAllConversationMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantAnalysisRequest(arg) {
  if (!(arg instanceof assistant$analysis_pb.CreateAssistantAnalysisRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantAnalysisRequest(buffer_arg) {
  return assistant$analysis_pb.CreateAssistantAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantAuthenticationRequest(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantAuthenticationRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantAuthenticationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantAuthenticationRequest(buffer_arg) {
  return assistant$api_pb.CreateAssistantAuthenticationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantKnowledgeRequest(arg) {
  if (!(arg instanceof assistant$knowledge_pb.CreateAssistantKnowledgeRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantKnowledgeRequest(buffer_arg) {
  return assistant$knowledge_pb.CreateAssistantKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantProviderRequest(arg) {
  if (!(arg instanceof assistant$provider_pb.CreateAssistantProviderRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantProviderRequest(buffer_arg) {
  return assistant$provider_pb.CreateAssistantProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantRequest(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantRequest(buffer_arg) {
  return assistant$api_pb.CreateAssistantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantTagRequest(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantTagRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantTagRequest(buffer_arg) {
  return assistant$api_pb.CreateAssistantTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantTelemetryProviderRequest(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantTelemetryProviderRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantTelemetryProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantTelemetryProviderRequest(buffer_arg) {
  return assistant$api_pb.CreateAssistantTelemetryProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantToolRequest(arg) {
  if (!(arg instanceof assistant$tool_pb.CreateAssistantToolRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantToolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantToolRequest(buffer_arg) {
  return assistant$tool_pb.CreateAssistantToolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantWebhookRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.CreateAssistantWebhookRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantWebhookRequest(buffer_arg) {
  return assistant$webhook_pb.CreateAssistantWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_DeleteAssistantAnalysisRequest(arg) {
  if (!(arg instanceof assistant$analysis_pb.DeleteAssistantAnalysisRequest)) {
    throw new Error('Expected argument of type assistant_api.DeleteAssistantAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_DeleteAssistantAnalysisRequest(buffer_arg) {
  return assistant$analysis_pb.DeleteAssistantAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_DeleteAssistantKnowledgeRequest(arg) {
  if (!(arg instanceof assistant$knowledge_pb.DeleteAssistantKnowledgeRequest)) {
    throw new Error('Expected argument of type assistant_api.DeleteAssistantKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_DeleteAssistantKnowledgeRequest(buffer_arg) {
  return assistant$knowledge_pb.DeleteAssistantKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_DeleteAssistantRequest(arg) {
  if (!(arg instanceof assistant$api_pb.DeleteAssistantRequest)) {
    throw new Error('Expected argument of type assistant_api.DeleteAssistantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_DeleteAssistantRequest(buffer_arg) {
  return assistant$api_pb.DeleteAssistantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_DeleteAssistantTelemetryProviderRequest(arg) {
  if (!(arg instanceof assistant$api_pb.DeleteAssistantTelemetryProviderRequest)) {
    throw new Error('Expected argument of type assistant_api.DeleteAssistantTelemetryProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_DeleteAssistantTelemetryProviderRequest(buffer_arg) {
  return assistant$api_pb.DeleteAssistantTelemetryProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_DeleteAssistantToolRequest(arg) {
  if (!(arg instanceof assistant$tool_pb.DeleteAssistantToolRequest)) {
    throw new Error('Expected argument of type assistant_api.DeleteAssistantToolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_DeleteAssistantToolRequest(buffer_arg) {
  return assistant$tool_pb.DeleteAssistantToolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_DeleteAssistantWebhookRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.DeleteAssistantWebhookRequest)) {
    throw new Error('Expected argument of type assistant_api.DeleteAssistantWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_DeleteAssistantWebhookRequest(buffer_arg) {
  return assistant$webhook_pb.DeleteAssistantWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_DisableAssistantAuthenticationRequest(arg) {
  if (!(arg instanceof assistant$api_pb.DisableAssistantAuthenticationRequest)) {
    throw new Error('Expected argument of type assistant_api.DisableAssistantAuthenticationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_DisableAssistantAuthenticationRequest(buffer_arg) {
  return assistant$api_pb.DisableAssistantAuthenticationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantAnalysisRequest(arg) {
  if (!(arg instanceof assistant$analysis_pb.GetAllAssistantAnalysisRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantAnalysisRequest(buffer_arg) {
  return assistant$analysis_pb.GetAllAssistantAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantAnalysisResponse(arg) {
  if (!(arg instanceof assistant$analysis_pb.GetAllAssistantAnalysisResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantAnalysisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantAnalysisResponse(buffer_arg) {
  return assistant$analysis_pb.GetAllAssistantAnalysisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantHTTPLogRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAllAssistantHTTPLogRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantHTTPLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantHTTPLogRequest(buffer_arg) {
  return assistant$webhook_pb.GetAllAssistantHTTPLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantHTTPLogResponse(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAllAssistantHTTPLogResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantHTTPLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantHTTPLogResponse(buffer_arg) {
  return assistant$webhook_pb.GetAllAssistantHTTPLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantKnowledgeRequest(arg) {
  if (!(arg instanceof assistant$knowledge_pb.GetAllAssistantKnowledgeRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantKnowledgeRequest(buffer_arg) {
  return assistant$knowledge_pb.GetAllAssistantKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantKnowledgeResponse(arg) {
  if (!(arg instanceof assistant$knowledge_pb.GetAllAssistantKnowledgeResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantKnowledgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantKnowledgeResponse(buffer_arg) {
  return assistant$knowledge_pb.GetAllAssistantKnowledgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantMessageRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantMessageRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantMessageRequest(buffer_arg) {
  return assistant$api_pb.GetAllAssistantMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantMessageResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantMessageResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantMessageResponse(buffer_arg) {
  return assistant$api_pb.GetAllAssistantMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantProviderRequest(arg) {
  if (!(arg instanceof assistant$provider_pb.GetAllAssistantProviderRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantProviderRequest(buffer_arg) {
  return assistant$provider_pb.GetAllAssistantProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantProviderResponse(arg) {
  if (!(arg instanceof assistant$provider_pb.GetAllAssistantProviderResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantProviderResponse(buffer_arg) {
  return assistant$provider_pb.GetAllAssistantProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantRequest(buffer_arg) {
  return assistant$api_pb.GetAllAssistantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantResponse(buffer_arg) {
  return assistant$api_pb.GetAllAssistantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantTelemetryProviderRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantTelemetryProviderRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantTelemetryProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantTelemetryProviderRequest(buffer_arg) {
  return assistant$api_pb.GetAllAssistantTelemetryProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantTelemetryProviderResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantTelemetryProviderResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantTelemetryProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantTelemetryProviderResponse(buffer_arg) {
  return assistant$api_pb.GetAllAssistantTelemetryProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantTelemetryRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantTelemetryRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantTelemetryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantTelemetryRequest(buffer_arg) {
  return assistant$api_pb.GetAllAssistantTelemetryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantTelemetryResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantTelemetryResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantTelemetryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantTelemetryResponse(buffer_arg) {
  return assistant$api_pb.GetAllAssistantTelemetryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantToolLogRequest(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAllAssistantToolLogRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantToolLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantToolLogRequest(buffer_arg) {
  return assistant$tool_pb.GetAllAssistantToolLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantToolLogResponse(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAllAssistantToolLogResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantToolLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantToolLogResponse(buffer_arg) {
  return assistant$tool_pb.GetAllAssistantToolLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantToolRequest(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAllAssistantToolRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantToolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantToolRequest(buffer_arg) {
  return assistant$tool_pb.GetAllAssistantToolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantToolResponse(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAllAssistantToolResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantToolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantToolResponse(buffer_arg) {
  return assistant$tool_pb.GetAllAssistantToolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantWebhookRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAllAssistantWebhookRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantWebhookRequest(buffer_arg) {
  return assistant$webhook_pb.GetAllAssistantWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantWebhookResponse(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAllAssistantWebhookResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantWebhookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantWebhookResponse(buffer_arg) {
  return assistant$webhook_pb.GetAllAssistantWebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllMessageRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllMessageRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllMessageRequest(buffer_arg) {
  return assistant$api_pb.GetAllMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllMessageResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllMessageResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllMessageResponse(buffer_arg) {
  return assistant$api_pb.GetAllMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantAnalysisRequest(arg) {
  if (!(arg instanceof assistant$analysis_pb.GetAssistantAnalysisRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantAnalysisRequest(buffer_arg) {
  return assistant$analysis_pb.GetAssistantAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantAnalysisResponse(arg) {
  if (!(arg instanceof assistant$analysis_pb.GetAssistantAnalysisResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantAnalysisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantAnalysisResponse(buffer_arg) {
  return assistant$analysis_pb.GetAssistantAnalysisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantAuthenticationRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantAuthenticationRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantAuthenticationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantAuthenticationRequest(buffer_arg) {
  return assistant$api_pb.GetAssistantAuthenticationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantAuthenticationResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantAuthenticationResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantAuthenticationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantAuthenticationResponse(buffer_arg) {
  return assistant$api_pb.GetAssistantAuthenticationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantConversationRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantConversationRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantConversationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantConversationRequest(buffer_arg) {
  return assistant$api_pb.GetAssistantConversationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantConversationResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantConversationResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantConversationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantConversationResponse(buffer_arg) {
  return assistant$api_pb.GetAssistantConversationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantHTTPLogRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAssistantHTTPLogRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantHTTPLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantHTTPLogRequest(buffer_arg) {
  return assistant$webhook_pb.GetAssistantHTTPLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantHTTPLogResponse(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAssistantHTTPLogResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantHTTPLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantHTTPLogResponse(buffer_arg) {
  return assistant$webhook_pb.GetAssistantHTTPLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantKnowledgeRequest(arg) {
  if (!(arg instanceof assistant$knowledge_pb.GetAssistantKnowledgeRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantKnowledgeRequest(buffer_arg) {
  return assistant$knowledge_pb.GetAssistantKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantKnowledgeResponse(arg) {
  if (!(arg instanceof assistant$knowledge_pb.GetAssistantKnowledgeResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantKnowledgeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantKnowledgeResponse(buffer_arg) {
  return assistant$knowledge_pb.GetAssistantKnowledgeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantProviderResponse(arg) {
  if (!(arg instanceof assistant$provider_pb.GetAssistantProviderResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantProviderResponse(buffer_arg) {
  return assistant$provider_pb.GetAssistantProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantRequest(buffer_arg) {
  return assistant$api_pb.GetAssistantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantResponse(buffer_arg) {
  return assistant$api_pb.GetAssistantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantTelemetryProviderRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantTelemetryProviderRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantTelemetryProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantTelemetryProviderRequest(buffer_arg) {
  return assistant$api_pb.GetAssistantTelemetryProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantTelemetryProviderResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantTelemetryProviderResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantTelemetryProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantTelemetryProviderResponse(buffer_arg) {
  return assistant$api_pb.GetAssistantTelemetryProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantToolLogRequest(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAssistantToolLogRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantToolLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantToolLogRequest(buffer_arg) {
  return assistant$tool_pb.GetAssistantToolLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantToolLogResponse(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAssistantToolLogResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantToolLogResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantToolLogResponse(buffer_arg) {
  return assistant$tool_pb.GetAssistantToolLogResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantToolRequest(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAssistantToolRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantToolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantToolRequest(buffer_arg) {
  return assistant$tool_pb.GetAssistantToolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantToolResponse(arg) {
  if (!(arg instanceof assistant$tool_pb.GetAssistantToolResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantToolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantToolResponse(buffer_arg) {
  return assistant$tool_pb.GetAssistantToolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantWebhookRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAssistantWebhookRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantWebhookRequest(buffer_arg) {
  return assistant$webhook_pb.GetAssistantWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantWebhookResponse(arg) {
  if (!(arg instanceof assistant$webhook_pb.GetAssistantWebhookResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantWebhookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantWebhookResponse(buffer_arg) {
  return assistant$webhook_pb.GetAssistantWebhookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_RetryAssistantHTTPLogRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.RetryAssistantHTTPLogRequest)) {
    throw new Error('Expected argument of type assistant_api.RetryAssistantHTTPLogRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_RetryAssistantHTTPLogRequest(buffer_arg) {
  return assistant$webhook_pb.RetryAssistantHTTPLogRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantAnalysisRequest(arg) {
  if (!(arg instanceof assistant$analysis_pb.UpdateAssistantAnalysisRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantAnalysisRequest(buffer_arg) {
  return assistant$analysis_pb.UpdateAssistantAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantDetailRequest(arg) {
  if (!(arg instanceof assistant$api_pb.UpdateAssistantDetailRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantDetailRequest(buffer_arg) {
  return assistant$api_pb.UpdateAssistantDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantKnowledgeRequest(arg) {
  if (!(arg instanceof assistant$knowledge_pb.UpdateAssistantKnowledgeRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantKnowledgeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantKnowledgeRequest(buffer_arg) {
  return assistant$knowledge_pb.UpdateAssistantKnowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantTelemetryProviderRequest(arg) {
  if (!(arg instanceof assistant$api_pb.UpdateAssistantTelemetryProviderRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantTelemetryProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantTelemetryProviderRequest(buffer_arg) {
  return assistant$api_pb.UpdateAssistantTelemetryProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantToolRequest(arg) {
  if (!(arg instanceof assistant$tool_pb.UpdateAssistantToolRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantToolRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantToolRequest(buffer_arg) {
  return assistant$tool_pb.UpdateAssistantToolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantVersionRequest(arg) {
  if (!(arg instanceof assistant$provider_pb.UpdateAssistantVersionRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantVersionRequest(buffer_arg) {
  return assistant$provider_pb.UpdateAssistantVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantWebhookRequest(arg) {
  if (!(arg instanceof assistant$webhook_pb.UpdateAssistantWebhookRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantWebhookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantWebhookRequest(buffer_arg) {
  return assistant$webhook_pb.UpdateAssistantWebhookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AssistantServiceService = exports.AssistantServiceService = {
  getAssistant: {
    path: '/assistant_api.AssistantService/GetAssistant',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAssistantRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_GetAssistantRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
  },
  getAllAssistant: {
    path: '/assistant_api.AssistantService/GetAllAssistant',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllAssistantRequest,
    responseType: assistant$api_pb.GetAllAssistantResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantResponse,
  },
  createAssistant: {
    path: '/assistant_api.AssistantService/CreateAssistant',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
  },
  deleteAssistant: {
    path: '/assistant_api.AssistantService/DeleteAssistant',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.DeleteAssistantRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_DeleteAssistantRequest,
    requestDeserialize: deserialize_assistant_api_DeleteAssistantRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
  },
  getAllAssistantProvider: {
    path: '/assistant_api.AssistantService/GetAllAssistantProvider',
    requestStream: false,
    responseStream: false,
    requestType: assistant$provider_pb.GetAllAssistantProviderRequest,
    responseType: assistant$provider_pb.GetAllAssistantProviderResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantProviderRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantProviderRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantProviderResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantProviderResponse,
  },
  createAssistantProvider: {
    path: '/assistant_api.AssistantService/CreateAssistantProvider',
    requestStream: false,
    responseStream: false,
    requestType: assistant$provider_pb.CreateAssistantProviderRequest,
    responseType: assistant$provider_pb.GetAssistantProviderResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantProviderRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantProviderRequest,
    responseSerialize: serialize_assistant_api_GetAssistantProviderResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantProviderResponse,
  },
  createAssistantTag: {
    path: '/assistant_api.AssistantService/CreateAssistantTag',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantTagRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantTagRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantTagRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
  },
  updateAssistantVersion: {
    path: '/assistant_api.AssistantService/UpdateAssistantVersion',
    requestStream: false,
    responseStream: false,
    requestType: assistant$provider_pb.UpdateAssistantVersionRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantVersionRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantVersionRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
  },
  updateAssistantDetail: {
    path: '/assistant_api.AssistantService/UpdateAssistantDetail',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.UpdateAssistantDetailRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantDetailRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantDetailRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
  },
  getAllAssistantMessage: {
    path: '/assistant_api.AssistantService/GetAllAssistantMessage',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllAssistantMessageRequest,
    responseType: assistant$api_pb.GetAllAssistantMessageResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantMessageRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantMessageRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantMessageResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantMessageResponse,
  },
  getAllConversationMessage: {
    path: '/assistant_api.AssistantService/GetAllConversationMessage',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GetAllConversationMessageRequest,
    responseType: common_pb.GetAllConversationMessageResponse,
    requestSerialize: serialize_GetAllConversationMessageRequest,
    requestDeserialize: deserialize_GetAllConversationMessageRequest,
    responseSerialize: serialize_GetAllConversationMessageResponse,
    responseDeserialize: deserialize_GetAllConversationMessageResponse,
  },
  getAllMessage: {
    path: '/assistant_api.AssistantService/GetAllMessage',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllMessageRequest,
    responseType: assistant$api_pb.GetAllMessageResponse,
    requestSerialize: serialize_assistant_api_GetAllMessageRequest,
    requestDeserialize: deserialize_assistant_api_GetAllMessageRequest,
    responseSerialize: serialize_assistant_api_GetAllMessageResponse,
    responseDeserialize: deserialize_assistant_api_GetAllMessageResponse,
  },
  getAllAssistantTelemetry: {
    path: '/assistant_api.AssistantService/GetAllAssistantTelemetry',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllAssistantTelemetryRequest,
    responseType: assistant$api_pb.GetAllAssistantTelemetryResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantTelemetryRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantTelemetryRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantTelemetryResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantTelemetryResponse,
  },
  getAssistantTelemetryProvider: {
    path: '/assistant_api.AssistantService/GetAssistantTelemetryProvider',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAssistantTelemetryProviderRequest,
    responseType: assistant$api_pb.GetAssistantTelemetryProviderResponse,
    requestSerialize: serialize_assistant_api_GetAssistantTelemetryProviderRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantTelemetryProviderRequest,
    responseSerialize: serialize_assistant_api_GetAssistantTelemetryProviderResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantTelemetryProviderResponse,
  },
  getAllAssistantTelemetryProvider: {
    path: '/assistant_api.AssistantService/GetAllAssistantTelemetryProvider',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllAssistantTelemetryProviderRequest,
    responseType: assistant$api_pb.GetAllAssistantTelemetryProviderResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantTelemetryProviderRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantTelemetryProviderRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantTelemetryProviderResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantTelemetryProviderResponse,
  },
  createAssistantTelemetryProvider: {
    path: '/assistant_api.AssistantService/CreateAssistantTelemetryProvider',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantTelemetryProviderRequest,
    responseType: assistant$api_pb.GetAssistantTelemetryProviderResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantTelemetryProviderRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantTelemetryProviderRequest,
    responseSerialize: serialize_assistant_api_GetAssistantTelemetryProviderResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantTelemetryProviderResponse,
  },
  updateAssistantTelemetryProvider: {
    path: '/assistant_api.AssistantService/UpdateAssistantTelemetryProvider',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.UpdateAssistantTelemetryProviderRequest,
    responseType: assistant$api_pb.GetAssistantTelemetryProviderResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantTelemetryProviderRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantTelemetryProviderRequest,
    responseSerialize: serialize_assistant_api_GetAssistantTelemetryProviderResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantTelemetryProviderResponse,
  },
  deleteAssistantTelemetryProvider: {
    path: '/assistant_api.AssistantService/DeleteAssistantTelemetryProvider',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.DeleteAssistantTelemetryProviderRequest,
    responseType: assistant$api_pb.GetAssistantTelemetryProviderResponse,
    requestSerialize: serialize_assistant_api_DeleteAssistantTelemetryProviderRequest,
    requestDeserialize: deserialize_assistant_api_DeleteAssistantTelemetryProviderRequest,
    responseSerialize: serialize_assistant_api_GetAssistantTelemetryProviderResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantTelemetryProviderResponse,
  },
  createAssistantAuthentication: {
    path: '/assistant_api.AssistantService/CreateAssistantAuthentication',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantAuthenticationRequest,
    responseType: assistant$api_pb.GetAssistantAuthenticationResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantAuthenticationRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantAuthenticationRequest,
    responseSerialize: serialize_assistant_api_GetAssistantAuthenticationResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantAuthenticationResponse,
  },
  getAssistantAuthentication: {
    path: '/assistant_api.AssistantService/GetAssistantAuthentication',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAssistantAuthenticationRequest,
    responseType: assistant$api_pb.GetAssistantAuthenticationResponse,
    requestSerialize: serialize_assistant_api_GetAssistantAuthenticationRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantAuthenticationRequest,
    responseSerialize: serialize_assistant_api_GetAssistantAuthenticationResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantAuthenticationResponse,
  },
  disableAssistantAuthentication: {
    path: '/assistant_api.AssistantService/DisableAssistantAuthentication',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.DisableAssistantAuthenticationRequest,
    responseType: assistant$api_pb.GetAssistantAuthenticationResponse,
    requestSerialize: serialize_assistant_api_DisableAssistantAuthenticationRequest,
    requestDeserialize: deserialize_assistant_api_DisableAssistantAuthenticationRequest,
    responseSerialize: serialize_assistant_api_GetAssistantAuthenticationResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantAuthenticationResponse,
  },
  getAllAssistantConversation: {
    path: '/assistant_api.AssistantService/GetAllAssistantConversation',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GetAllAssistantConversationRequest,
    responseType: common_pb.GetAllAssistantConversationResponse,
    requestSerialize: serialize_GetAllAssistantConversationRequest,
    requestDeserialize: deserialize_GetAllAssistantConversationRequest,
    responseSerialize: serialize_GetAllAssistantConversationResponse,
    responseDeserialize: deserialize_GetAllAssistantConversationResponse,
  },
  getAssistantConversation: {
    path: '/assistant_api.AssistantService/GetAssistantConversation',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAssistantConversationRequest,
    responseType: assistant$api_pb.GetAssistantConversationResponse,
    requestSerialize: serialize_assistant_api_GetAssistantConversationRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantConversationRequest,
    responseSerialize: serialize_assistant_api_GetAssistantConversationResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantConversationResponse,
  },
  //   http log
getAssistantHTTPLog: {
    path: '/assistant_api.AssistantService/GetAssistantHTTPLog',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.GetAssistantHTTPLogRequest,
    responseType: assistant$webhook_pb.GetAssistantHTTPLogResponse,
    requestSerialize: serialize_assistant_api_GetAssistantHTTPLogRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantHTTPLogRequest,
    responseSerialize: serialize_assistant_api_GetAssistantHTTPLogResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantHTTPLogResponse,
  },
  getAllAssistantHTTPLog: {
    path: '/assistant_api.AssistantService/GetAllAssistantHTTPLog',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.GetAllAssistantHTTPLogRequest,
    responseType: assistant$webhook_pb.GetAllAssistantHTTPLogResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantHTTPLogRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantHTTPLogRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantHTTPLogResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantHTTPLogResponse,
  },
  retryAssistantHTTPLog: {
    path: '/assistant_api.AssistantService/RetryAssistantHTTPLog',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.RetryAssistantHTTPLogRequest,
    responseType: assistant$webhook_pb.GetAssistantHTTPLogResponse,
    requestSerialize: serialize_assistant_api_RetryAssistantHTTPLogRequest,
    requestDeserialize: deserialize_assistant_api_RetryAssistantHTTPLogRequest,
    responseSerialize: serialize_assistant_api_GetAssistantHTTPLogResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantHTTPLogResponse,
  },
  getAllAssistantWebhook: {
    path: '/assistant_api.AssistantService/GetAllAssistantWebhook',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.GetAllAssistantWebhookRequest,
    responseType: assistant$webhook_pb.GetAllAssistantWebhookResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantWebhookRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantWebhookRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantWebhookResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantWebhookResponse,
  },
  getAssistantWebhook: {
    path: '/assistant_api.AssistantService/GetAssistantWebhook',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.GetAssistantWebhookRequest,
    responseType: assistant$webhook_pb.GetAssistantWebhookResponse,
    requestSerialize: serialize_assistant_api_GetAssistantWebhookRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantWebhookRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWebhookResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWebhookResponse,
  },
  createAssistantWebhook: {
    path: '/assistant_api.AssistantService/CreateAssistantWebhook',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.CreateAssistantWebhookRequest,
    responseType: assistant$webhook_pb.GetAssistantWebhookResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantWebhookRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantWebhookRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWebhookResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWebhookResponse,
  },
  updateAssistantWebhook: {
    path: '/assistant_api.AssistantService/UpdateAssistantWebhook',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.UpdateAssistantWebhookRequest,
    responseType: assistant$webhook_pb.GetAssistantWebhookResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantWebhookRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantWebhookRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWebhookResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWebhookResponse,
  },
  deleteAssistantWebhook: {
    path: '/assistant_api.AssistantService/DeleteAssistantWebhook',
    requestStream: false,
    responseStream: false,
    requestType: assistant$webhook_pb.DeleteAssistantWebhookRequest,
    responseType: assistant$webhook_pb.GetAssistantWebhookResponse,
    requestSerialize: serialize_assistant_api_DeleteAssistantWebhookRequest,
    requestDeserialize: deserialize_assistant_api_DeleteAssistantWebhookRequest,
    responseSerialize: serialize_assistant_api_GetAssistantWebhookResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantWebhookResponse,
  },
  // tool log
getAssistantToolLog: {
    path: '/assistant_api.AssistantService/GetAssistantToolLog',
    requestStream: false,
    responseStream: false,
    requestType: assistant$tool_pb.GetAssistantToolLogRequest,
    responseType: assistant$tool_pb.GetAssistantToolLogResponse,
    requestSerialize: serialize_assistant_api_GetAssistantToolLogRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantToolLogRequest,
    responseSerialize: serialize_assistant_api_GetAssistantToolLogResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantToolLogResponse,
  },
  getAllAssistantToolLog: {
    path: '/assistant_api.AssistantService/GetAllAssistantToolLog',
    requestStream: false,
    responseStream: false,
    requestType: assistant$tool_pb.GetAllAssistantToolLogRequest,
    responseType: assistant$tool_pb.GetAllAssistantToolLogResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantToolLogRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantToolLogRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantToolLogResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantToolLogResponse,
  },
  //   analysis
getAssistantAnalysis: {
    path: '/assistant_api.AssistantService/GetAssistantAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: assistant$analysis_pb.GetAssistantAnalysisRequest,
    responseType: assistant$analysis_pb.GetAssistantAnalysisResponse,
    requestSerialize: serialize_assistant_api_GetAssistantAnalysisRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantAnalysisRequest,
    responseSerialize: serialize_assistant_api_GetAssistantAnalysisResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantAnalysisResponse,
  },
  updateAssistantAnalysis: {
    path: '/assistant_api.AssistantService/UpdateAssistantAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: assistant$analysis_pb.UpdateAssistantAnalysisRequest,
    responseType: assistant$analysis_pb.GetAssistantAnalysisResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantAnalysisRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantAnalysisRequest,
    responseSerialize: serialize_assistant_api_GetAssistantAnalysisResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantAnalysisResponse,
  },
  createAssistantAnalysis: {
    path: '/assistant_api.AssistantService/CreateAssistantAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: assistant$analysis_pb.CreateAssistantAnalysisRequest,
    responseType: assistant$analysis_pb.GetAssistantAnalysisResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantAnalysisRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantAnalysisRequest,
    responseSerialize: serialize_assistant_api_GetAssistantAnalysisResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantAnalysisResponse,
  },
  deleteAssistantAnalysis: {
    path: '/assistant_api.AssistantService/DeleteAssistantAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: assistant$analysis_pb.DeleteAssistantAnalysisRequest,
    responseType: assistant$analysis_pb.GetAssistantAnalysisResponse,
    requestSerialize: serialize_assistant_api_DeleteAssistantAnalysisRequest,
    requestDeserialize: deserialize_assistant_api_DeleteAssistantAnalysisRequest,
    responseSerialize: serialize_assistant_api_GetAssistantAnalysisResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantAnalysisResponse,
  },
  getAllAssistantAnalysis: {
    path: '/assistant_api.AssistantService/GetAllAssistantAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: assistant$analysis_pb.GetAllAssistantAnalysisRequest,
    responseType: assistant$analysis_pb.GetAllAssistantAnalysisResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantAnalysisRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantAnalysisRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantAnalysisResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantAnalysisResponse,
  },
  // assistant tool
createAssistantTool: {
    path: '/assistant_api.AssistantService/CreateAssistantTool',
    requestStream: false,
    responseStream: false,
    requestType: assistant$tool_pb.CreateAssistantToolRequest,
    responseType: assistant$tool_pb.GetAssistantToolResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantToolRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantToolRequest,
    responseSerialize: serialize_assistant_api_GetAssistantToolResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantToolResponse,
  },
  getAssistantTool: {
    path: '/assistant_api.AssistantService/GetAssistantTool',
    requestStream: false,
    responseStream: false,
    requestType: assistant$tool_pb.GetAssistantToolRequest,
    responseType: assistant$tool_pb.GetAssistantToolResponse,
    requestSerialize: serialize_assistant_api_GetAssistantToolRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantToolRequest,
    responseSerialize: serialize_assistant_api_GetAssistantToolResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantToolResponse,
  },
  getAllAssistantTool: {
    path: '/assistant_api.AssistantService/GetAllAssistantTool',
    requestStream: false,
    responseStream: false,
    requestType: assistant$tool_pb.GetAllAssistantToolRequest,
    responseType: assistant$tool_pb.GetAllAssistantToolResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantToolRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantToolRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantToolResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantToolResponse,
  },
  deleteAssistantTool: {
    path: '/assistant_api.AssistantService/DeleteAssistantTool',
    requestStream: false,
    responseStream: false,
    requestType: assistant$tool_pb.DeleteAssistantToolRequest,
    responseType: assistant$tool_pb.GetAssistantToolResponse,
    requestSerialize: serialize_assistant_api_DeleteAssistantToolRequest,
    requestDeserialize: deserialize_assistant_api_DeleteAssistantToolRequest,
    responseSerialize: serialize_assistant_api_GetAssistantToolResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantToolResponse,
  },
  updateAssistantTool: {
    path: '/assistant_api.AssistantService/UpdateAssistantTool',
    requestStream: false,
    responseStream: false,
    requestType: assistant$tool_pb.UpdateAssistantToolRequest,
    responseType: assistant$tool_pb.GetAssistantToolResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantToolRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantToolRequest,
    responseSerialize: serialize_assistant_api_GetAssistantToolResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantToolResponse,
  },
  //   //   next gen
createAssistantKnowledge: {
    path: '/assistant_api.AssistantService/CreateAssistantKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: assistant$knowledge_pb.CreateAssistantKnowledgeRequest,
    responseType: assistant$knowledge_pb.GetAssistantKnowledgeResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantKnowledgeRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantKnowledgeRequest,
    responseSerialize: serialize_assistant_api_GetAssistantKnowledgeResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantKnowledgeResponse,
  },
  getAssistantKnowledge: {
    path: '/assistant_api.AssistantService/GetAssistantKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: assistant$knowledge_pb.GetAssistantKnowledgeRequest,
    responseType: assistant$knowledge_pb.GetAssistantKnowledgeResponse,
    requestSerialize: serialize_assistant_api_GetAssistantKnowledgeRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantKnowledgeRequest,
    responseSerialize: serialize_assistant_api_GetAssistantKnowledgeResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantKnowledgeResponse,
  },
  getAllAssistantKnowledge: {
    path: '/assistant_api.AssistantService/GetAllAssistantKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: assistant$knowledge_pb.GetAllAssistantKnowledgeRequest,
    responseType: assistant$knowledge_pb.GetAllAssistantKnowledgeResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantKnowledgeRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantKnowledgeRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantKnowledgeResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantKnowledgeResponse,
  },
  deleteAssistantKnowledge: {
    path: '/assistant_api.AssistantService/DeleteAssistantKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: assistant$knowledge_pb.DeleteAssistantKnowledgeRequest,
    responseType: assistant$knowledge_pb.GetAssistantKnowledgeResponse,
    requestSerialize: serialize_assistant_api_DeleteAssistantKnowledgeRequest,
    requestDeserialize: deserialize_assistant_api_DeleteAssistantKnowledgeRequest,
    responseSerialize: serialize_assistant_api_GetAssistantKnowledgeResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantKnowledgeResponse,
  },
  updateAssistantKnowledge: {
    path: '/assistant_api.AssistantService/UpdateAssistantKnowledge',
    requestStream: false,
    responseStream: false,
    requestType: assistant$knowledge_pb.UpdateAssistantKnowledgeRequest,
    responseType: assistant$knowledge_pb.GetAssistantKnowledgeResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantKnowledgeRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantKnowledgeRequest,
    responseSerialize: serialize_assistant_api_GetAssistantKnowledgeResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantKnowledgeResponse,
  },
};

exports.AssistantServiceClient = grpc.makeGenericClientConstructor(AssistantServiceService, 'AssistantService');
