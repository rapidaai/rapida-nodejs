// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var connect$api_pb = require('./connect-api_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var common_pb = require('./common_pb.js');

function serialize_connect_api_ActionConnectRequest(arg) {
  if (!(arg instanceof connect$api_pb.ActionConnectRequest)) {
    throw new Error('Expected argument of type connect_api.ActionConnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_ActionConnectRequest(buffer_arg) {
  return connect$api_pb.ActionConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connect_api_ActionConnectResponse(arg) {
  if (!(arg instanceof connect$api_pb.ActionConnectResponse)) {
    throw new Error('Expected argument of type connect_api.ActionConnectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_ActionConnectResponse(buffer_arg) {
  return connect$api_pb.ActionConnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connect_api_GeneralConnectRequest(arg) {
  if (!(arg instanceof connect$api_pb.GeneralConnectRequest)) {
    throw new Error('Expected argument of type connect_api.GeneralConnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_GeneralConnectRequest(buffer_arg) {
  return connect$api_pb.GeneralConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connect_api_GeneralConnectResponse(arg) {
  if (!(arg instanceof connect$api_pb.GeneralConnectResponse)) {
    throw new Error('Expected argument of type connect_api.GeneralConnectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_GeneralConnectResponse(buffer_arg) {
  return connect$api_pb.GeneralConnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connect_api_GetConnectorFilesRequest(arg) {
  if (!(arg instanceof connect$api_pb.GetConnectorFilesRequest)) {
    throw new Error('Expected argument of type connect_api.GetConnectorFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_GetConnectorFilesRequest(buffer_arg) {
  return connect$api_pb.GetConnectorFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connect_api_GetConnectorFilesResponse(arg) {
  if (!(arg instanceof connect$api_pb.GetConnectorFilesResponse)) {
    throw new Error('Expected argument of type connect_api.GetConnectorFilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_GetConnectorFilesResponse(buffer_arg) {
  return connect$api_pb.GetConnectorFilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connect_api_KnowledgeConnectRequest(arg) {
  if (!(arg instanceof connect$api_pb.KnowledgeConnectRequest)) {
    throw new Error('Expected argument of type connect_api.KnowledgeConnectRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_KnowledgeConnectRequest(buffer_arg) {
  return connect$api_pb.KnowledgeConnectRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_connect_api_KnowledgeConnectResponse(arg) {
  if (!(arg instanceof connect$api_pb.KnowledgeConnectResponse)) {
    throw new Error('Expected argument of type connect_api.KnowledgeConnectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_connect_api_KnowledgeConnectResponse(buffer_arg) {
  return connect$api_pb.KnowledgeConnectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConnectServiceService = exports.ConnectServiceService = {
  knowledgeConnect: {
    path: '/connect_api.ConnectService/KnowledgeConnect',
    requestStream: false,
    responseStream: false,
    requestType: connect$api_pb.KnowledgeConnectRequest,
    responseType: connect$api_pb.KnowledgeConnectResponse,
    requestSerialize: serialize_connect_api_KnowledgeConnectRequest,
    requestDeserialize: deserialize_connect_api_KnowledgeConnectRequest,
    responseSerialize: serialize_connect_api_KnowledgeConnectResponse,
    responseDeserialize: deserialize_connect_api_KnowledgeConnectResponse,
  },
  generalConnect: {
    path: '/connect_api.ConnectService/GeneralConnect',
    requestStream: false,
    responseStream: false,
    requestType: connect$api_pb.GeneralConnectRequest,
    responseType: connect$api_pb.GeneralConnectResponse,
    requestSerialize: serialize_connect_api_GeneralConnectRequest,
    requestDeserialize: deserialize_connect_api_GeneralConnectRequest,
    responseSerialize: serialize_connect_api_GeneralConnectResponse,
    responseDeserialize: deserialize_connect_api_GeneralConnectResponse,
  },
  actionConnect: {
    path: '/connect_api.ConnectService/ActionConnect',
    requestStream: false,
    responseStream: false,
    requestType: connect$api_pb.ActionConnectRequest,
    responseType: connect$api_pb.ActionConnectResponse,
    requestSerialize: serialize_connect_api_ActionConnectRequest,
    requestDeserialize: deserialize_connect_api_ActionConnectRequest,
    responseSerialize: serialize_connect_api_ActionConnectResponse,
    responseDeserialize: deserialize_connect_api_ActionConnectResponse,
  },
  getConnectorFiles: {
    path: '/connect_api.ConnectService/GetConnectorFiles',
    requestStream: false,
    responseStream: false,
    requestType: connect$api_pb.GetConnectorFilesRequest,
    responseType: connect$api_pb.GetConnectorFilesResponse,
    requestSerialize: serialize_connect_api_GetConnectorFilesRequest,
    requestDeserialize: deserialize_connect_api_GetConnectorFilesRequest,
    responseSerialize: serialize_connect_api_GetConnectorFilesResponse,
    responseDeserialize: deserialize_connect_api_GetConnectorFilesResponse,
  },
};

exports.ConnectServiceClient = grpc.makeGenericClientConstructor(ConnectServiceService, 'ConnectService');
