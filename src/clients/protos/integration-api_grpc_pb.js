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

function serialize_integration_api_GenerateRequest(arg) {
  if (!(arg instanceof integration$api_pb.GenerateRequest)) {
    throw new Error('Expected argument of type integration_api.GenerateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateRequest(buffer_arg) {
  return integration$api_pb.GenerateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GenerateResponse(arg) {
  if (!(arg instanceof integration$api_pb.GenerateResponse)) {
    throw new Error('Expected argument of type integration_api.GenerateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateResponse(buffer_arg) {
  return integration$api_pb.GenerateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GenerateSpeechToTextRequest(arg) {
  if (!(arg instanceof integration$api_pb.GenerateSpeechToTextRequest)) {
    throw new Error('Expected argument of type integration_api.GenerateSpeechToTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateSpeechToTextRequest(buffer_arg) {
  return integration$api_pb.GenerateSpeechToTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GenerateSpeechToTextResponse(arg) {
  if (!(arg instanceof integration$api_pb.GenerateSpeechToTextResponse)) {
    throw new Error('Expected argument of type integration_api.GenerateSpeechToTextResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateSpeechToTextResponse(buffer_arg) {
  return integration$api_pb.GenerateSpeechToTextResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GenerateTextToImageRequest(arg) {
  if (!(arg instanceof integration$api_pb.GenerateTextToImageRequest)) {
    throw new Error('Expected argument of type integration_api.GenerateTextToImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateTextToImageRequest(buffer_arg) {
  return integration$api_pb.GenerateTextToImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GenerateTextToImageResponse(arg) {
  if (!(arg instanceof integration$api_pb.GenerateTextToImageResponse)) {
    throw new Error('Expected argument of type integration_api.GenerateTextToImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateTextToImageResponse(buffer_arg) {
  return integration$api_pb.GenerateTextToImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GenerateTextToSpeechRequest(arg) {
  if (!(arg instanceof integration$api_pb.GenerateTextToSpeechRequest)) {
    throw new Error('Expected argument of type integration_api.GenerateTextToSpeechRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateTextToSpeechRequest(buffer_arg) {
  return integration$api_pb.GenerateTextToSpeechRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GenerateTextToSpeechResponse(arg) {
  if (!(arg instanceof integration$api_pb.GenerateTextToSpeechResponse)) {
    throw new Error('Expected argument of type integration_api.GenerateTextToSpeechResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GenerateTextToSpeechResponse(buffer_arg) {
  return integration$api_pb.GenerateTextToSpeechResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetModerationRequest(arg) {
  if (!(arg instanceof integration$api_pb.GetModerationRequest)) {
    throw new Error('Expected argument of type integration_api.GetModerationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetModerationRequest(buffer_arg) {
  return integration$api_pb.GetModerationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_GetModerationResponse(arg) {
  if (!(arg instanceof integration$api_pb.GetModerationResponse)) {
    throw new Error('Expected argument of type integration_api.GetModerationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_GetModerationResponse(buffer_arg) {
  return integration$api_pb.GetModerationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var BedrockServiceService = exports.BedrockServiceService = {
  embedding: {
    path: '/integration_api.BedrockService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.BedrockService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.BedrockService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  verifyCredential: {
    path: '/integration_api.BedrockService/VerifyCredential',
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

exports.BedrockServiceClient = grpc.makeGenericClientConstructor(BedrockServiceService, 'BedrockService');
var OpenAiServiceService = exports.OpenAiServiceService = {
  embedding: {
    path: '/integration_api.OpenAiService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.OpenAiService/Chat',
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
    path: '/integration_api.OpenAiService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.OpenAiService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  generateTextToImage: {
    path: '/integration_api.OpenAiService/GenerateTextToImage',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToImageRequest,
    responseType: integration$api_pb.GenerateTextToImageResponse,
    requestSerialize: serialize_integration_api_GenerateTextToImageRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToImageRequest,
    responseSerialize: serialize_integration_api_GenerateTextToImageResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToImageResponse,
  },
  generateTextToSpeech: {
    path: '/integration_api.OpenAiService/GenerateTextToSpeech',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToSpeechRequest,
    responseType: integration$api_pb.GenerateTextToSpeechResponse,
    requestSerialize: serialize_integration_api_GenerateTextToSpeechRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToSpeechRequest,
    responseSerialize: serialize_integration_api_GenerateTextToSpeechResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToSpeechResponse,
  },
  verifyCredential: {
    path: '/integration_api.OpenAiService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
  generateSpeechToText: {
    path: '/integration_api.OpenAiService/GenerateSpeechToText',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateSpeechToTextRequest,
    responseType: integration$api_pb.GenerateSpeechToTextResponse,
    requestSerialize: serialize_integration_api_GenerateSpeechToTextRequest,
    requestDeserialize: deserialize_integration_api_GenerateSpeechToTextRequest,
    responseSerialize: serialize_integration_api_GenerateSpeechToTextResponse,
    responseDeserialize: deserialize_integration_api_GenerateSpeechToTextResponse,
  },
  getModeration: {
    path: '/integration_api.OpenAiService/GetModeration',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GetModerationRequest,
    responseType: integration$api_pb.GetModerationResponse,
    requestSerialize: serialize_integration_api_GetModerationRequest,
    requestDeserialize: deserialize_integration_api_GetModerationRequest,
    responseSerialize: serialize_integration_api_GetModerationResponse,
    responseDeserialize: deserialize_integration_api_GetModerationResponse,
  },
};

exports.OpenAiServiceClient = grpc.makeGenericClientConstructor(OpenAiServiceService, 'OpenAiService');
var AzureServiceService = exports.AzureServiceService = {
  embedding: {
    path: '/integration_api.AzureService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.AzureService/Chat',
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
    path: '/integration_api.AzureService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.AzureService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  generateTextToImage: {
    path: '/integration_api.AzureService/GenerateTextToImage',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToImageRequest,
    responseType: integration$api_pb.GenerateTextToImageResponse,
    requestSerialize: serialize_integration_api_GenerateTextToImageRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToImageRequest,
    responseSerialize: serialize_integration_api_GenerateTextToImageResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToImageResponse,
  },
  generateTextToSpeech: {
    path: '/integration_api.AzureService/GenerateTextToSpeech',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToSpeechRequest,
    responseType: integration$api_pb.GenerateTextToSpeechResponse,
    requestSerialize: serialize_integration_api_GenerateTextToSpeechRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToSpeechRequest,
    responseSerialize: serialize_integration_api_GenerateTextToSpeechResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToSpeechResponse,
  },
  verifyCredential: {
    path: '/integration_api.AzureService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
  generateSpeechToText: {
    path: '/integration_api.AzureService/GenerateSpeechToText',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateSpeechToTextRequest,
    responseType: integration$api_pb.GenerateSpeechToTextResponse,
    requestSerialize: serialize_integration_api_GenerateSpeechToTextRequest,
    requestDeserialize: deserialize_integration_api_GenerateSpeechToTextRequest,
    responseSerialize: serialize_integration_api_GenerateSpeechToTextResponse,
    responseDeserialize: deserialize_integration_api_GenerateSpeechToTextResponse,
  },
  getModeration: {
    path: '/integration_api.AzureService/GetModeration',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GetModerationRequest,
    responseType: integration$api_pb.GetModerationResponse,
    requestSerialize: serialize_integration_api_GetModerationRequest,
    requestDeserialize: deserialize_integration_api_GetModerationRequest,
    responseSerialize: serialize_integration_api_GetModerationResponse,
    responseDeserialize: deserialize_integration_api_GetModerationResponse,
  },
};

exports.AzureServiceClient = grpc.makeGenericClientConstructor(AzureServiceService, 'AzureService');
var GoogleServiceService = exports.GoogleServiceService = {
  embedding: {
    path: '/integration_api.GoogleService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.GoogleService/Chat',
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
    path: '/integration_api.GoogleService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.GoogleService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  verifyCredential: {
    path: '/integration_api.GoogleService/VerifyCredential',
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

exports.GoogleServiceClient = grpc.makeGenericClientConstructor(GoogleServiceService, 'GoogleService');
var ReplicateServiceService = exports.ReplicateServiceService = {
  chat: {
    path: '/integration_api.ReplicateService/Chat',
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
    path: '/integration_api.ReplicateService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.ReplicateService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  verifyCredential: {
    path: '/integration_api.ReplicateService/VerifyCredential',
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

exports.ReplicateServiceClient = grpc.makeGenericClientConstructor(ReplicateServiceService, 'ReplicateService');
var AnthropicServiceService = exports.AnthropicServiceService = {
  chat: {
    path: '/integration_api.AnthropicService/Chat',
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
    path: '/integration_api.AnthropicService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.AnthropicService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  verifyCredential: {
    path: '/integration_api.AnthropicService/VerifyCredential',
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

exports.AnthropicServiceClient = grpc.makeGenericClientConstructor(AnthropicServiceService, 'AnthropicService');
var CohereServiceService = exports.CohereServiceService = {
  embedding: {
    path: '/integration_api.CohereService/Embedding',
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
    path: '/integration_api.CohereService/Reranking',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.RerankingRequest,
    responseType: integration$api_pb.RerankingResponse,
    requestSerialize: serialize_integration_api_RerankingRequest,
    requestDeserialize: deserialize_integration_api_RerankingRequest,
    responseSerialize: serialize_integration_api_RerankingResponse,
    responseDeserialize: deserialize_integration_api_RerankingResponse,
  },
  chat: {
    path: '/integration_api.CohereService/Chat',
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
    path: '/integration_api.CohereService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.CohereService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  verifyCredential: {
    path: '/integration_api.CohereService/VerifyCredential',
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

exports.CohereServiceClient = grpc.makeGenericClientConstructor(CohereServiceService, 'CohereService');
var HuggingfaceServiceService = exports.HuggingfaceServiceService = {
  chat: {
    path: '/integration_api.HuggingfaceService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.HuggingfaceService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  verifyCredential: {
    path: '/integration_api.HuggingfaceService/VerifyCredential',
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

exports.HuggingfaceServiceClient = grpc.makeGenericClientConstructor(HuggingfaceServiceService, 'HuggingfaceService');
var MistralServiceService = exports.MistralServiceService = {
  chat: {
    path: '/integration_api.MistralService/Chat',
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
    path: '/integration_api.MistralService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.MistralService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  verifyCredential: {
    path: '/integration_api.MistralService/VerifyCredential',
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

exports.MistralServiceClient = grpc.makeGenericClientConstructor(MistralServiceService, 'MistralService');
var StabilityAiServiceService = exports.StabilityAiServiceService = {
  generateTextToImage: {
    path: '/integration_api.StabilityAiService/GenerateTextToImage',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToImageRequest,
    responseType: integration$api_pb.GenerateTextToImageResponse,
    requestSerialize: serialize_integration_api_GenerateTextToImageRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToImageRequest,
    responseSerialize: serialize_integration_api_GenerateTextToImageResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToImageResponse,
  },
  verifyCredential: {
    path: '/integration_api.StabilityAiService/VerifyCredential',
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

exports.StabilityAiServiceClient = grpc.makeGenericClientConstructor(StabilityAiServiceService, 'StabilityAiService');
var TogetherAiServiceService = exports.TogetherAiServiceService = {
  generateTextToImage: {
    path: '/integration_api.TogetherAiService/GenerateTextToImage',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToImageRequest,
    responseType: integration$api_pb.GenerateTextToImageResponse,
    requestSerialize: serialize_integration_api_GenerateTextToImageRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToImageRequest,
    responseSerialize: serialize_integration_api_GenerateTextToImageResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToImageResponse,
  },
  generate: {
    path: '/integration_api.TogetherAiService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  chat: {
    path: '/integration_api.TogetherAiService/Chat',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  verifyCredential: {
    path: '/integration_api.TogetherAiService/VerifyCredential',
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

exports.TogetherAiServiceClient = grpc.makeGenericClientConstructor(TogetherAiServiceService, 'TogetherAiService');
var DeepInfraServiceService = exports.DeepInfraServiceService = {
  generateTextToImage: {
    path: '/integration_api.DeepInfraService/GenerateTextToImage',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToImageRequest,
    responseType: integration$api_pb.GenerateTextToImageResponse,
    requestSerialize: serialize_integration_api_GenerateTextToImageRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToImageRequest,
    responseSerialize: serialize_integration_api_GenerateTextToImageResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToImageResponse,
  },
  verifyCredential: {
    path: '/integration_api.DeepInfraService/VerifyCredential',
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

exports.DeepInfraServiceClient = grpc.makeGenericClientConstructor(DeepInfraServiceService, 'DeepInfraService');
var VoyageAiServiceService = exports.VoyageAiServiceService = {
  embedding: {
    path: '/integration_api.VoyageAiService/Embedding',
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
    path: '/integration_api.VoyageAiService/Reranking',
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
    path: '/integration_api.VoyageAiService/VerifyCredential',
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

exports.VoyageAiServiceClient = grpc.makeGenericClientConstructor(VoyageAiServiceService, 'VoyageAiService');
var DeepgramServiceService = exports.DeepgramServiceService = {
  generateSpeechToText: {
    path: '/integration_api.DeepgramService/GenerateSpeechToText',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateSpeechToTextRequest,
    responseType: integration$api_pb.GenerateSpeechToTextResponse,
    requestSerialize: serialize_integration_api_GenerateSpeechToTextRequest,
    requestDeserialize: deserialize_integration_api_GenerateSpeechToTextRequest,
    responseSerialize: serialize_integration_api_GenerateSpeechToTextResponse,
    responseDeserialize: deserialize_integration_api_GenerateSpeechToTextResponse,
  },
  generateTextToSpeech: {
    path: '/integration_api.DeepgramService/GenerateTextToSpeech',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToSpeechRequest,
    responseType: integration$api_pb.GenerateTextToSpeechResponse,
    requestSerialize: serialize_integration_api_GenerateTextToSpeechRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToSpeechRequest,
    responseSerialize: serialize_integration_api_GenerateTextToSpeechResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToSpeechResponse,
  },
  verifyCredential: {
    path: '/integration_api.DeepgramService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
  liveSpeechToText: {
    path: '/integration_api.DeepgramService/LiveSpeechToText',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.GenerateSpeechToTextRequest,
    responseType: integration$api_pb.GenerateSpeechToTextResponse,
    requestSerialize: serialize_integration_api_GenerateSpeechToTextRequest,
    requestDeserialize: deserialize_integration_api_GenerateSpeechToTextRequest,
    responseSerialize: serialize_integration_api_GenerateSpeechToTextResponse,
    responseDeserialize: deserialize_integration_api_GenerateSpeechToTextResponse,
  },
};

exports.DeepgramServiceClient = grpc.makeGenericClientConstructor(DeepgramServiceService, 'DeepgramService');
var RapidaServiceService = exports.RapidaServiceService = {
  embedding: {
    path: '/integration_api.RapidaService/Embedding',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.EmbeddingRequest,
    responseType: integration$api_pb.EmbeddingResponse,
    requestSerialize: serialize_integration_api_EmbeddingRequest,
    requestDeserialize: deserialize_integration_api_EmbeddingRequest,
    responseSerialize: serialize_integration_api_EmbeddingResponse,
    responseDeserialize: deserialize_integration_api_EmbeddingResponse,
  },
  chat: {
    path: '/integration_api.RapidaService/Chat',
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
    path: '/integration_api.RapidaService/StreamChat',
    requestStream: false,
    responseStream: true,
    requestType: integration$api_pb.ChatRequest,
    responseType: integration$api_pb.ChatResponse,
    requestSerialize: serialize_integration_api_ChatRequest,
    requestDeserialize: deserialize_integration_api_ChatRequest,
    responseSerialize: serialize_integration_api_ChatResponse,
    responseDeserialize: deserialize_integration_api_ChatResponse,
  },
  generate: {
    path: '/integration_api.RapidaService/Generate',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateRequest,
    responseType: integration$api_pb.GenerateResponse,
    requestSerialize: serialize_integration_api_GenerateRequest,
    requestDeserialize: deserialize_integration_api_GenerateRequest,
    responseSerialize: serialize_integration_api_GenerateResponse,
    responseDeserialize: deserialize_integration_api_GenerateResponse,
  },
  generateTextToImage: {
    path: '/integration_api.RapidaService/GenerateTextToImage',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToImageRequest,
    responseType: integration$api_pb.GenerateTextToImageResponse,
    requestSerialize: serialize_integration_api_GenerateTextToImageRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToImageRequest,
    responseSerialize: serialize_integration_api_GenerateTextToImageResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToImageResponse,
  },
  generateTextToSpeech: {
    path: '/integration_api.RapidaService/GenerateTextToSpeech',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GenerateTextToSpeechRequest,
    responseType: integration$api_pb.GenerateTextToSpeechResponse,
    requestSerialize: serialize_integration_api_GenerateTextToSpeechRequest,
    requestDeserialize: deserialize_integration_api_GenerateTextToSpeechRequest,
    responseSerialize: serialize_integration_api_GenerateTextToSpeechResponse,
    responseDeserialize: deserialize_integration_api_GenerateTextToSpeechResponse,
  },
  verifyCredential: {
    path: '/integration_api.RapidaService/VerifyCredential',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.VerifyCredentialRequest,
    responseType: integration$api_pb.VerifyCredentialResponse,
    requestSerialize: serialize_integration_api_VerifyCredentialRequest,
    requestDeserialize: deserialize_integration_api_VerifyCredentialRequest,
    responseSerialize: serialize_integration_api_VerifyCredentialResponse,
    responseDeserialize: deserialize_integration_api_VerifyCredentialResponse,
  },
  getModeration: {
    path: '/integration_api.RapidaService/GetModeration',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.GetModerationRequest,
    responseType: integration$api_pb.GetModerationResponse,
    requestSerialize: serialize_integration_api_GetModerationRequest,
    requestDeserialize: deserialize_integration_api_GetModerationRequest,
    responseSerialize: serialize_integration_api_GetModerationResponse,
    responseDeserialize: deserialize_integration_api_GetModerationResponse,
  },
  reranking: {
    path: '/integration_api.RapidaService/Reranking',
    requestStream: false,
    responseStream: false,
    requestType: integration$api_pb.RerankingRequest,
    responseType: integration$api_pb.RerankingResponse,
    requestSerialize: serialize_integration_api_RerankingRequest,
    requestDeserialize: deserialize_integration_api_RerankingRequest,
    responseSerialize: serialize_integration_api_RerankingResponse,
    responseDeserialize: deserialize_integration_api_RerankingResponse,
  },
  liveSpeechToText: {
    path: '/integration_api.RapidaService/LiveSpeechToText',
    requestStream: true,
    responseStream: true,
    requestType: integration$api_pb.GenerateSpeechToTextRequest,
    responseType: integration$api_pb.GenerateSpeechToTextResponse,
    requestSerialize: serialize_integration_api_GenerateSpeechToTextRequest,
    requestDeserialize: deserialize_integration_api_GenerateSpeechToTextRequest,
    responseSerialize: serialize_integration_api_GenerateSpeechToTextResponse,
    responseDeserialize: deserialize_integration_api_GenerateSpeechToTextResponse,
  },
};

exports.RapidaServiceClient = grpc.makeGenericClientConstructor(RapidaServiceService, 'RapidaService');
