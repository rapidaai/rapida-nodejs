// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var provider$api_pb = require('./provider-api_pb.js');
var common_pb = require('./common_pb.js');

function serialize_provider_api_GetAllModelProviderRequest(arg) {
  if (!(arg instanceof provider$api_pb.GetAllModelProviderRequest)) {
    throw new Error('Expected argument of type provider_api.GetAllModelProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetAllModelProviderRequest(buffer_arg) {
  return provider$api_pb.GetAllModelProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provider_api_GetAllModelProviderResponse(arg) {
  if (!(arg instanceof provider$api_pb.GetAllModelProviderResponse)) {
    throw new Error('Expected argument of type provider_api.GetAllModelProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetAllModelProviderResponse(buffer_arg) {
  return provider$api_pb.GetAllModelProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provider_api_GetAllModelRequest(arg) {
  if (!(arg instanceof provider$api_pb.GetAllModelRequest)) {
    throw new Error('Expected argument of type provider_api.GetAllModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetAllModelRequest(buffer_arg) {
  return provider$api_pb.GetAllModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provider_api_GetAllModelResponse(arg) {
  if (!(arg instanceof provider$api_pb.GetAllModelResponse)) {
    throw new Error('Expected argument of type provider_api.GetAllModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetAllModelResponse(buffer_arg) {
  return provider$api_pb.GetAllModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provider_api_GetAllToolProviderRequest(arg) {
  if (!(arg instanceof provider$api_pb.GetAllToolProviderRequest)) {
    throw new Error('Expected argument of type provider_api.GetAllToolProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetAllToolProviderRequest(buffer_arg) {
  return provider$api_pb.GetAllToolProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provider_api_GetAllToolProviderResponse(arg) {
  if (!(arg instanceof provider$api_pb.GetAllToolProviderResponse)) {
    throw new Error('Expected argument of type provider_api.GetAllToolProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetAllToolProviderResponse(buffer_arg) {
  return provider$api_pb.GetAllToolProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provider_api_GetModelRequest(arg) {
  if (!(arg instanceof provider$api_pb.GetModelRequest)) {
    throw new Error('Expected argument of type provider_api.GetModelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetModelRequest(buffer_arg) {
  return provider$api_pb.GetModelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_provider_api_GetModelResponse(arg) {
  if (!(arg instanceof provider$api_pb.GetModelResponse)) {
    throw new Error('Expected argument of type provider_api.GetModelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_provider_api_GetModelResponse(buffer_arg) {
  return provider$api_pb.GetModelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProviderServiceService = exports.ProviderServiceService = {
  getAllToolProvider: {
    path: '/provider_api.ProviderService/GetAllToolProvider',
    requestStream: false,
    responseStream: false,
    requestType: provider$api_pb.GetAllToolProviderRequest,
    responseType: provider$api_pb.GetAllToolProviderResponse,
    requestSerialize: serialize_provider_api_GetAllToolProviderRequest,
    requestDeserialize: deserialize_provider_api_GetAllToolProviderRequest,
    responseSerialize: serialize_provider_api_GetAllToolProviderResponse,
    responseDeserialize: deserialize_provider_api_GetAllToolProviderResponse,
  },
  getAllModelProvider: {
    path: '/provider_api.ProviderService/GetAllModelProvider',
    requestStream: false,
    responseStream: false,
    requestType: provider$api_pb.GetAllModelProviderRequest,
    responseType: provider$api_pb.GetAllModelProviderResponse,
    requestSerialize: serialize_provider_api_GetAllModelProviderRequest,
    requestDeserialize: deserialize_provider_api_GetAllModelProviderRequest,
    responseSerialize: serialize_provider_api_GetAllModelProviderResponse,
    responseDeserialize: deserialize_provider_api_GetAllModelProviderResponse,
  },
  getModel: {
    path: '/provider_api.ProviderService/GetModel',
    requestStream: false,
    responseStream: false,
    requestType: provider$api_pb.GetModelRequest,
    responseType: provider$api_pb.GetModelResponse,
    requestSerialize: serialize_provider_api_GetModelRequest,
    requestDeserialize: deserialize_provider_api_GetModelRequest,
    responseSerialize: serialize_provider_api_GetModelResponse,
    responseDeserialize: deserialize_provider_api_GetModelResponse,
  },
  getAllModel: {
    path: '/provider_api.ProviderService/GetAllModel',
    requestStream: false,
    responseStream: false,
    requestType: provider$api_pb.GetAllModelRequest,
    responseType: provider$api_pb.GetAllModelResponse,
    requestSerialize: serialize_provider_api_GetAllModelRequest,
    requestDeserialize: deserialize_provider_api_GetAllModelRequest,
    responseSerialize: serialize_provider_api_GetAllModelResponse,
    responseDeserialize: deserialize_provider_api_GetAllModelResponse,
  },
};

exports.ProviderServiceClient = grpc.makeGenericClientConstructor(ProviderServiceService, 'ProviderService');
