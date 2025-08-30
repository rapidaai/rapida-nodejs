// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var marketplace$api_pb = require('./marketplace-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var common_pb = require('./common_pb.js');

function serialize_marketplace_api_GetAllDeploymentRequest(arg) {
  if (!(arg instanceof marketplace$api_pb.GetAllDeploymentRequest)) {
    throw new Error('Expected argument of type marketplace_api.GetAllDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_marketplace_api_GetAllDeploymentRequest(buffer_arg) {
  return marketplace$api_pb.GetAllDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_marketplace_api_GetAllDeploymentResponse(arg) {
  if (!(arg instanceof marketplace$api_pb.GetAllDeploymentResponse)) {
    throw new Error('Expected argument of type marketplace_api.GetAllDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_marketplace_api_GetAllDeploymentResponse(buffer_arg) {
  return marketplace$api_pb.GetAllDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MarketplaceServiceService = exports.MarketplaceServiceService = {
  getAllDeployment: {
    path: '/marketplace_api.MarketplaceService/GetAllDeployment',
    requestStream: false,
    responseStream: false,
    requestType: marketplace$api_pb.GetAllDeploymentRequest,
    responseType: marketplace$api_pb.GetAllDeploymentResponse,
    requestSerialize: serialize_marketplace_api_GetAllDeploymentRequest,
    requestDeserialize: deserialize_marketplace_api_GetAllDeploymentRequest,
    responseSerialize: serialize_marketplace_api_GetAllDeploymentResponse,
    responseDeserialize: deserialize_marketplace_api_GetAllDeploymentResponse,
  },
};

exports.MarketplaceServiceClient = grpc.makeGenericClientConstructor(MarketplaceServiceService, 'MarketplaceService');
