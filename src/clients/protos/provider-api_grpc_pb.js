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
};

exports.ProviderServiceClient = grpc.makeGenericClientConstructor(ProviderServiceService, 'ProviderService');
