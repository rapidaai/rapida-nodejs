// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var assistant$deployment_pb = require('./assistant-deployment_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_assistant_api_AssistantApiDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.AssistantApiDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.AssistantApiDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_AssistantApiDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.AssistantApiDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_AssistantDebuggerDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.AssistantDebuggerDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.AssistantDebuggerDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_AssistantDebuggerDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.AssistantDebuggerDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_AssistantPhoneDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.AssistantPhoneDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.AssistantPhoneDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_AssistantPhoneDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.AssistantPhoneDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_AssistantWebpluginDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.AssistantWebpluginDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.AssistantWebpluginDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_AssistantWebpluginDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.AssistantWebpluginDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_AssistantWhatsappDeploymentResponse(arg) {
  if (!(arg instanceof assistant$deployment_pb.AssistantWhatsappDeploymentResponse)) {
    throw new Error('Expected argument of type assistant_api.AssistantWhatsappDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_AssistantWhatsappDeploymentResponse(buffer_arg) {
  return assistant$deployment_pb.AssistantWhatsappDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantApiDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.CreateAssistantApiDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantApiDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantApiDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.CreateAssistantApiDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantDebuggerDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.CreateAssistantDebuggerDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantDebuggerDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantDebuggerDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.CreateAssistantDebuggerDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantPhoneDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.CreateAssistantPhoneDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantPhoneDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantPhoneDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.CreateAssistantPhoneDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantWebpluginDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.CreateAssistantWebpluginDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantWebpluginDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantWebpluginDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.CreateAssistantWebpluginDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_CreateAssistantWhatsappDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.CreateAssistantWhatsappDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.CreateAssistantWhatsappDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_CreateAssistantWhatsappDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.CreateAssistantWhatsappDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_assistant_api_GetAssistantDeploymentRequest(arg) {
  if (!(arg instanceof assistant$deployment_pb.GetAssistantDeploymentRequest)) {
    throw new Error('Expected argument of type assistant_api.GetAssistantDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_assistant_api_GetAssistantDeploymentRequest(buffer_arg) {
  return assistant$deployment_pb.GetAssistantDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AssistantDeploymentServiceService = exports.AssistantDeploymentServiceService = {
  createAssistantApiDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantApiDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantApiDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantApiDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantApiDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantApiDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantApiDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantApiDeploymentResponse,
  },
  getAssistantApiDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantApiDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantApiDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantApiDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantApiDeploymentResponse,
  },
  createAssistantWebpluginDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantWebpluginDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantWebpluginDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantWebpluginDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantWebpluginDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantWebpluginDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantWebpluginDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantWebpluginDeploymentResponse,
  },
  getAssistantWebpluginDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantWebpluginDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantWebpluginDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantWebpluginDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantWebpluginDeploymentResponse,
  },
  createAssistantDebuggerDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantDebuggerDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantDebuggerDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantDebuggerDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantDebuggerDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantDebuggerDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantDebuggerDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantDebuggerDeploymentResponse,
  },
  getAssistantDebuggerDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantDebuggerDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantDebuggerDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantDebuggerDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantDebuggerDeploymentResponse,
  },
  createAssistantWhatsappDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantWhatsappDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantWhatsappDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantWhatsappDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantWhatsappDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantWhatsappDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantWhatsappDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantWhatsappDeploymentResponse,
  },
  getAssistantWhatsappDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantWhatsappDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantWhatsappDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantWhatsappDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantWhatsappDeploymentResponse,
  },
  createAssistantPhoneDeployment: {
    path: '/assistant_api.AssistantDeploymentService/CreateAssistantPhoneDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.CreateAssistantPhoneDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantPhoneDeploymentResponse,
    requestSerialize: serialize_assistant_api_CreateAssistantPhoneDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_CreateAssistantPhoneDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantPhoneDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantPhoneDeploymentResponse,
  },
  getAssistantPhoneDeployment: {
    path: '/assistant_api.AssistantDeploymentService/GetAssistantPhoneDeployment',
    requestStream: false,
    responseStream: false,
    requestType: assistant$deployment_pb.GetAssistantDeploymentRequest,
    responseType: assistant$deployment_pb.AssistantPhoneDeploymentResponse,
    requestSerialize: serialize_assistant_api_GetAssistantDeploymentRequest,
    requestDeserialize: deserialize_assistant_api_GetAssistantDeploymentRequest,
    responseSerialize: serialize_assistant_api_AssistantPhoneDeploymentResponse,
    responseDeserialize: deserialize_assistant_api_AssistantPhoneDeploymentResponse,
  },
};

exports.AssistantDeploymentServiceClient = grpc.makeGenericClientConstructor(AssistantDeploymentServiceService, 'AssistantDeploymentService');
