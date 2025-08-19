// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var talk$api_pb = require('./talk-api_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

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

function serialize_talk_api_AssistantMessagingRequest(arg) {
  if (!(arg instanceof talk$api_pb.AssistantMessagingRequest)) {
    throw new Error('Expected argument of type talk_api.AssistantMessagingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_AssistantMessagingRequest(buffer_arg) {
  return talk$api_pb.AssistantMessagingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_AssistantMessagingResponse(arg) {
  if (!(arg instanceof talk$api_pb.AssistantMessagingResponse)) {
    throw new Error('Expected argument of type talk_api.AssistantMessagingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_AssistantMessagingResponse(buffer_arg) {
  return talk$api_pb.AssistantMessagingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreateBulkPhoneCallRequest(arg) {
  if (!(arg instanceof talk$api_pb.CreateBulkPhoneCallRequest)) {
    throw new Error('Expected argument of type talk_api.CreateBulkPhoneCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreateBulkPhoneCallRequest(buffer_arg) {
  return talk$api_pb.CreateBulkPhoneCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreateBulkPhoneCallResponse(arg) {
  if (!(arg instanceof talk$api_pb.CreateBulkPhoneCallResponse)) {
    throw new Error('Expected argument of type talk_api.CreateBulkPhoneCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreateBulkPhoneCallResponse(buffer_arg) {
  return talk$api_pb.CreateBulkPhoneCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreateConversationMetricRequest(arg) {
  if (!(arg instanceof talk$api_pb.CreateConversationMetricRequest)) {
    throw new Error('Expected argument of type talk_api.CreateConversationMetricRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreateConversationMetricRequest(buffer_arg) {
  return talk$api_pb.CreateConversationMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreateConversationMetricResponse(arg) {
  if (!(arg instanceof talk$api_pb.CreateConversationMetricResponse)) {
    throw new Error('Expected argument of type talk_api.CreateConversationMetricResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreateConversationMetricResponse(buffer_arg) {
  return talk$api_pb.CreateConversationMetricResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreateMessageMetricRequest(arg) {
  if (!(arg instanceof talk$api_pb.CreateMessageMetricRequest)) {
    throw new Error('Expected argument of type talk_api.CreateMessageMetricRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreateMessageMetricRequest(buffer_arg) {
  return talk$api_pb.CreateMessageMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreateMessageMetricResponse(arg) {
  if (!(arg instanceof talk$api_pb.CreateMessageMetricResponse)) {
    throw new Error('Expected argument of type talk_api.CreateMessageMetricResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreateMessageMetricResponse(buffer_arg) {
  return talk$api_pb.CreateMessageMetricResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreatePhoneCallRequest(arg) {
  if (!(arg instanceof talk$api_pb.CreatePhoneCallRequest)) {
    throw new Error('Expected argument of type talk_api.CreatePhoneCallRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreatePhoneCallRequest(buffer_arg) {
  return talk$api_pb.CreatePhoneCallRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_talk_api_CreatePhoneCallResponse(arg) {
  if (!(arg instanceof talk$api_pb.CreatePhoneCallResponse)) {
    throw new Error('Expected argument of type talk_api.CreatePhoneCallResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_talk_api_CreatePhoneCallResponse(buffer_arg) {
  return talk$api_pb.CreatePhoneCallResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TalkServiceService = exports.TalkServiceService = {
  assistantMessaging: {
    path: '/talk_api.TalkService/AssistantMessaging',
    requestStream: false,
    responseStream: true,
    requestType: talk$api_pb.AssistantMessagingRequest,
    responseType: talk$api_pb.AssistantMessagingResponse,
    requestSerialize: serialize_talk_api_AssistantMessagingRequest,
    requestDeserialize: deserialize_talk_api_AssistantMessagingRequest,
    responseSerialize: serialize_talk_api_AssistantMessagingResponse,
    responseDeserialize: deserialize_talk_api_AssistantMessagingResponse,
  },
  assistantTalk: {
    path: '/talk_api.TalkService/AssistantTalk',
    requestStream: true,
    responseStream: true,
    requestType: talk$api_pb.AssistantMessagingRequest,
    responseType: talk$api_pb.AssistantMessagingResponse,
    requestSerialize: serialize_talk_api_AssistantMessagingRequest,
    requestDeserialize: deserialize_talk_api_AssistantMessagingRequest,
    responseSerialize: serialize_talk_api_AssistantMessagingResponse,
    responseDeserialize: deserialize_talk_api_AssistantMessagingResponse,
  },
  getAllAssistantConversation: {
    path: '/talk_api.TalkService/GetAllAssistantConversation',
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
    path: '/talk_api.TalkService/GetAllConversationMessage',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GetAllConversationMessageRequest,
    responseType: common_pb.GetAllConversationMessageResponse,
    requestSerialize: serialize_GetAllConversationMessageRequest,
    requestDeserialize: deserialize_GetAllConversationMessageRequest,
    responseSerialize: serialize_GetAllConversationMessageResponse,
    responseDeserialize: deserialize_GetAllConversationMessageResponse,
  },
  createMessageMetric: {
    path: '/talk_api.TalkService/CreateMessageMetric',
    requestStream: false,
    responseStream: false,
    requestType: talk$api_pb.CreateMessageMetricRequest,
    responseType: talk$api_pb.CreateMessageMetricResponse,
    requestSerialize: serialize_talk_api_CreateMessageMetricRequest,
    requestDeserialize: deserialize_talk_api_CreateMessageMetricRequest,
    responseSerialize: serialize_talk_api_CreateMessageMetricResponse,
    responseDeserialize: deserialize_talk_api_CreateMessageMetricResponse,
  },
  createConversationMetric: {
    path: '/talk_api.TalkService/CreateConversationMetric',
    requestStream: false,
    responseStream: false,
    requestType: talk$api_pb.CreateConversationMetricRequest,
    responseType: talk$api_pb.CreateConversationMetricResponse,
    requestSerialize: serialize_talk_api_CreateConversationMetricRequest,
    requestDeserialize: deserialize_talk_api_CreateConversationMetricRequest,
    responseSerialize: serialize_talk_api_CreateConversationMetricResponse,
    responseDeserialize: deserialize_talk_api_CreateConversationMetricResponse,
  },
  //
createPhoneCall: {
    path: '/talk_api.TalkService/CreatePhoneCall',
    requestStream: false,
    responseStream: false,
    requestType: talk$api_pb.CreatePhoneCallRequest,
    responseType: talk$api_pb.CreatePhoneCallResponse,
    requestSerialize: serialize_talk_api_CreatePhoneCallRequest,
    requestDeserialize: deserialize_talk_api_CreatePhoneCallRequest,
    responseSerialize: serialize_talk_api_CreatePhoneCallResponse,
    responseDeserialize: deserialize_talk_api_CreatePhoneCallResponse,
  },
  createBulkPhoneCall: {
    path: '/talk_api.TalkService/CreateBulkPhoneCall',
    requestStream: false,
    responseStream: false,
    requestType: talk$api_pb.CreateBulkPhoneCallRequest,
    responseType: talk$api_pb.CreateBulkPhoneCallResponse,
    requestSerialize: serialize_talk_api_CreateBulkPhoneCallRequest,
    requestDeserialize: deserialize_talk_api_CreateBulkPhoneCallRequest,
    responseSerialize: serialize_talk_api_CreateBulkPhoneCallResponse,
    responseDeserialize: deserialize_talk_api_CreateBulkPhoneCallResponse,
  },
};

exports.TalkServiceClient = grpc.makeGenericClientConstructor(TalkServiceService, 'TalkService');
