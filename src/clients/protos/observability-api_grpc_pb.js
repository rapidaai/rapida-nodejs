// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var observability$api_pb = require('./observability-api_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_observability_api_GetAllTelemetryRequest(arg) {
  if (!(arg instanceof observability$api_pb.GetAllTelemetryRequest)) {
    throw new Error('Expected argument of type observability_api.GetAllTelemetryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_observability_api_GetAllTelemetryRequest(buffer_arg) {
  return observability$api_pb.GetAllTelemetryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_observability_api_GetAllTelemetryResponse(arg) {
  if (!(arg instanceof observability$api_pb.GetAllTelemetryResponse)) {
    throw new Error('Expected argument of type observability_api.GetAllTelemetryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_observability_api_GetAllTelemetryResponse(buffer_arg) {
  return observability$api_pb.GetAllTelemetryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ObservabilityServiceService = exports.ObservabilityServiceService = {
  getAllTelemetry: {
    path: '/observability_api.ObservabilityService/GetAllTelemetry',
    requestStream: false,
    responseStream: false,
    requestType: observability$api_pb.GetAllTelemetryRequest,
    responseType: observability$api_pb.GetAllTelemetryResponse,
    requestSerialize: serialize_observability_api_GetAllTelemetryRequest,
    requestDeserialize: deserialize_observability_api_GetAllTelemetryRequest,
    responseSerialize: serialize_observability_api_GetAllTelemetryResponse,
    responseDeserialize: deserialize_observability_api_GetAllTelemetryResponse,
  },
};

exports.ObservabilityServiceClient = grpc.makeGenericClientConstructor(ObservabilityServiceService, 'ObservabilityService');
