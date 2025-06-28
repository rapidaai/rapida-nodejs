// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var assistant$api_pb = require('./assistant-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');
var assistant$deployment_pb = require('./assistant-deployment_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

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

function serialize_assistant_api_CreateAssistantKnowledgeConfigurationRequest(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantKnowledgeConfigurationRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantKnowledgeConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantKnowledgeConfigurationRequest(buffer_arg) {
  return assistant$api_pb.CreateAssistantKnowledgeConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantProviderModelRequest(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantProviderModelRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantProviderModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantProviderModelRequest(buffer_arg) {
  return assistant$api_pb.CreateAssistantProviderModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantProviderModelResponse(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantProviderModelResponse)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantProviderModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantProviderModelResponse(buffer_arg) {
  return assistant$api_pb.CreateAssistantProviderModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_assistant_api_CreateAssistantResponse(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantResponse)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantResponse(buffer_arg) {
  return assistant$api_pb.CreateAssistantResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_assistant_api_CreateAssistantToolConfigurationRequest(arg) {
  if (!(arg instanceof assistant$api_pb.CreateAssistantToolConfigurationRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantToolConfigurationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantToolConfigurationRequest(buffer_arg) {
  return assistant$api_pb.CreateAssistantToolConfigurationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantEmbeddedSkillRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantEmbeddedSkillRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantEmbeddedSkillRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantEmbeddedSkillRequest(buffer_arg) {
  return assistant$api_pb.GetAllAssistantEmbeddedSkillRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantEmbeddedSkillResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantEmbeddedSkillResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantEmbeddedSkillResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantEmbeddedSkillResponse(buffer_arg) {
  return assistant$api_pb.GetAllAssistantEmbeddedSkillResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_assistant_api_GetAllAssistantProviderModelRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantProviderModelRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantProviderModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantProviderModelRequest(buffer_arg) {
  return assistant$api_pb.GetAllAssistantProviderModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantProviderModelResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantProviderModelResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantProviderModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantProviderModelResponse(buffer_arg) {
  return assistant$api_pb.GetAllAssistantProviderModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_assistant_api_GetAllAssistantSkillRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantSkillRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantSkillRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantSkillRequest(buffer_arg) {
  return assistant$api_pb.GetAllAssistantSkillRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAllAssistantSkillResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAllAssistantSkillResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAllAssistantSkillResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAllAssistantSkillResponse(buffer_arg) {
  return assistant$api_pb.GetAllAssistantSkillResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_assistant_api_GetAssistantSkillRequest(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantSkillRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantSkillRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantSkillRequest(buffer_arg) {
  return assistant$api_pb.GetAssistantSkillRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantSkillResponse(arg) {
  if (!(arg instanceof assistant$api_pb.GetAssistantSkillResponse)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantSkillResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantSkillResponse(buffer_arg) {
  return assistant$api_pb.GetAssistantSkillResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_assistant_api_UpdateAssistantVersionRequest(arg) {
  if (!(arg instanceof assistant$api_pb.UpdateAssistantVersionRequest)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantVersionRequest(buffer_arg) {
  return assistant$api_pb.UpdateAssistantVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_UpdateAssistantVersionResponse(arg) {
  if (!(arg instanceof assistant$api_pb.UpdateAssistantVersionResponse)) {
    throw new Error('Expected argument of type assistant_api.UpdateAssistantVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_UpdateAssistantVersionResponse(buffer_arg) {
  return assistant$api_pb.UpdateAssistantVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  getAllAssistantProviderModel: {
    path: '/assistant_api.AssistantService/GetAllAssistantProviderModel',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllAssistantProviderModelRequest,
    responseType: assistant$api_pb.GetAllAssistantProviderModelResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantProviderModelRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantProviderModelRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantProviderModelResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantProviderModelResponse,
  },
  createAssistant: {
    path: '/assistant_api.AssistantService/CreateAssistant',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantRequest,
    responseType: assistant$api_pb.CreateAssistantResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantRequest,
    responseSerialize: serialize_assistant_api_CreateAssistantResponse,
    responseDeserialize: deserialize_assistant_api_CreateAssistantResponse,
  },
  createAssistantProviderModel: {
    path: '/assistant_api.AssistantService/CreateAssistantProviderModel',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantProviderModelRequest,
    responseType: assistant$api_pb.CreateAssistantProviderModelResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantProviderModelRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantProviderModelRequest,
    responseSerialize: serialize_assistant_api_CreateAssistantProviderModelResponse,
    responseDeserialize: deserialize_assistant_api_CreateAssistantProviderModelResponse,
  },
  //   next gen
createAssistantKnowledgeConfiguration: {
    path: '/assistant_api.AssistantService/CreateAssistantKnowledgeConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantKnowledgeConfigurationRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantKnowledgeConfigurationRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantKnowledgeConfigurationRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
  },
  createAssistantToolConfiguration: {
    path: '/assistant_api.AssistantService/CreateAssistantToolConfiguration',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.CreateAssistantToolConfigurationRequest,
    responseType: assistant$api_pb.GetAssistantResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantToolConfigurationRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantToolConfigurationRequest,
    responseSerialize: serialize_assistant_api_GetAssistantResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantResponse,
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
    requestType: assistant$api_pb.UpdateAssistantVersionRequest,
    responseType: assistant$api_pb.UpdateAssistantVersionResponse,
    requestSerialize: serialize_assistant_api_UpdateAssistantVersionRequest,
    requestDeserialize: deserialize_assistant_api_UpdateAssistantVersionRequest,
    responseSerialize: serialize_assistant_api_UpdateAssistantVersionResponse,
    responseDeserialize: deserialize_assistant_api_UpdateAssistantVersionResponse,
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
  getAssistantSkill: {
    path: '/assistant_api.AssistantService/GetAssistantSkill',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAssistantSkillRequest,
    responseType: assistant$api_pb.GetAssistantSkillResponse,
    requestSerialize: serialize_assistant_api_GetAssistantSkillRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantSkillRequest,
    responseSerialize: serialize_assistant_api_GetAssistantSkillResponse,
    responseDeserialize: deserialize_assistant_api_GetAssistantSkillResponse,
  },
  getAllAssistantSkill: {
    path: '/assistant_api.AssistantService/GetAllAssistantSkill',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllAssistantSkillRequest,
    responseType: assistant$api_pb.GetAllAssistantSkillResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantSkillRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantSkillRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantSkillResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantSkillResponse,
  },
  getAllAssistantEmbeddedSkill: {
    path: '/assistant_api.AssistantService/GetAllAssistantEmbeddedSkill',
    requestStream: false,
    responseStream: false,
    requestType: assistant$api_pb.GetAllAssistantEmbeddedSkillRequest,
    responseType: assistant$api_pb.GetAllAssistantEmbeddedSkillResponse,
    requestSerialize: serialize_assistant_api_GetAllAssistantEmbeddedSkillRequest,
    requestDeserialize: deserialize_assistant_api_GetAllAssistantEmbeddedSkillRequest,
    responseSerialize: serialize_assistant_api_GetAllAssistantEmbeddedSkillResponse,
    responseDeserialize: deserialize_assistant_api_GetAllAssistantEmbeddedSkillResponse,
  },
};

exports.AssistantServiceClient = grpc.makeGenericClientConstructor(AssistantServiceService, 'AssistantService');
