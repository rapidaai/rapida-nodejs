// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var integration$api_pb = require('./integration-api_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_integration_api_ChatRequest(arg) {
  if (!(arg instanceof integration$api_pb.ChatRequest)) {
    throw new Error('Expected argument of type integration_api.ChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_ChatRequest(buffer_arg) {
  return integration$api_pb.ChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_ChatResponse(arg) {
  if (!(arg instanceof integration$api_pb.ChatResponse)) {
    throw new Error('Expected argument of type integration_api.ChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_ChatResponse(buffer_arg) {
  return integration$api_pb.ChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_EmbeddingRequest(arg) {
  if (!(arg instanceof integration$api_pb.EmbeddingRequest)) {
    throw new Error('Expected argument of type integration_api.EmbeddingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_EmbeddingRequest(buffer_arg) {
  return integration$api_pb.EmbeddingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_EmbeddingResponse(arg) {
  if (!(arg instanceof integration$api_pb.EmbeddingResponse)) {
    throw new Error('Expected argument of type integration_api.EmbeddingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_EmbeddingResponse(buffer_arg) {
  return integration$api_pb.EmbeddingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_RerankingRequest(arg) {
  if (!(arg instanceof integration$api_pb.RerankingRequest)) {
    throw new Error('Expected argument of type integration_api.RerankingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_RerankingRequest(buffer_arg) {
  return integration$api_pb.RerankingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_RerankingResponse(arg) {
  if (!(arg instanceof integration$api_pb.RerankingResponse)) {
    throw new Error('Expected argument of type integration_api.RerankingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_RerankingResponse(buffer_arg) {
  return integration$api_pb.RerankingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_StreamChatRequest(arg) {
  if (!(arg instanceof integration$api_pb.StreamChatRequest)) {
    throw new Error('Expected argument of type integration_api.StreamChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_StreamChatRequest(buffer_arg) {
  return integration$api_pb.StreamChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_StreamChatResponse(arg) {
  if (!(arg instanceof integration$api_pb.StreamChatResponse)) {
    throw new Error('Expected argument of type integration_api.StreamChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_StreamChatResponse(buffer_arg) {
  return integration$api_pb.StreamChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_VerifyCredentialRequest(arg) {
  if (!(arg instanceof integration$api_pb.VerifyCredentialRequest)) {
    throw new Error('Expected argument of type integration_api.VerifyCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_VerifyCredentialRequest(buffer_arg) {
  return integration$api_pb.VerifyCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_VerifyCredentialResponse(arg) {
  if (!(arg instanceof integration$api_pb.VerifyCredentialResponse)) {
    throw new Error('Expected argument of type integration_api.VerifyCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_VerifyCredentialResponse(buffer_arg) {
  return integration$api_pb.VerifyCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Unified provider service — routes by providerName field in request messages.
// Adding a new provider requires NO proto changes.
var UnifiedProviderServiceService = exports.UnifiedProviderServiceService = {
  chat: {
    path: '/integration_api.UnifiedProviderService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  streamChat: {
    path: '/integration_api.UnifiedProviderService/StreamChat',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.StreamChatRequest,
    responseType: integration$api_pb.StreamChatResponse,
    requestSerialize: serialize_integration_api_StreamChatRequest,
    requestDeserialize: deserialize_integration_api_StreamChatRequest,
    responseSerialize: serialize_integration_api_StreamChatResponse,
    responseDeserialize: deserialize_integration_api_StreamChatResponse,
  },
  embedding: {
    path: '/integration_api.UnifiedProviderService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  reranking: {
    path: '/integration_api.UnifiedProviderService/Reranking',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.RerankingRequest,
    responseType: integration$api_pb.RerankingResponse,
    requestSerialize: serialize_integration_api_RerankingRequest,
    requestDeserialize: deserialize_integration_api_RerankingRequest,
    responseSerialize: serialize_integration_api_RerankingResponse,
    responseDeserialize: deserialize_integration_api_RerankingResponse,
  },
  verifyCredential: {
    path: '/integration_api.UnifiedProviderService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
};

exports.UnifiedProviderServiceClient = grpc.makeGenericClientConstructor(UnifiedProviderServiceService, 'UnifiedProviderService');
