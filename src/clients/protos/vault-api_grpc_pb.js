// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var vault$api_pb = require('./vault-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var common_pb = require('./common_pb.js');

function serialize_vault_api_CreateProviderCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.CreateProviderCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.CreateProviderCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_CreateProviderCredentialRequest(buffer_arg) {
  return vault$api_pb.CreateProviderCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_CreateProviderCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.CreateProviderCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.CreateProviderCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_CreateProviderCredentialResponse(buffer_arg) {
  return vault$api_pb.CreateProviderCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_CreateToolCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.CreateToolCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.CreateToolCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_CreateToolCredentialRequest(buffer_arg) {
  return vault$api_pb.CreateToolCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_CreateToolCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.CreateToolCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.CreateToolCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_CreateToolCredentialResponse(buffer_arg) {
  return vault$api_pb.CreateToolCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_DeleteProviderCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.DeleteProviderCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.DeleteProviderCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_DeleteProviderCredentialRequest(buffer_arg) {
  return vault$api_pb.DeleteProviderCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_DeleteProviderCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.DeleteProviderCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.DeleteProviderCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_DeleteProviderCredentialResponse(buffer_arg) {
  return vault$api_pb.DeleteProviderCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetAllOrganizationCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.GetAllOrganizationCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.GetAllOrganizationCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetAllOrganizationCredentialRequest(buffer_arg) {
  return vault$api_pb.GetAllOrganizationCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetAllOrganizationCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.GetAllOrganizationCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.GetAllOrganizationCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetAllOrganizationCredentialResponse(buffer_arg) {
  return vault$api_pb.GetAllOrganizationCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetOauth2VaultCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.GetOauth2VaultCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.GetOauth2VaultCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetOauth2VaultCredentialRequest(buffer_arg) {
  return vault$api_pb.GetOauth2VaultCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetOauth2VaultCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.GetOauth2VaultCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.GetOauth2VaultCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetOauth2VaultCredentialResponse(buffer_arg) {
  return vault$api_pb.GetOauth2VaultCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetProviderCredentialRequest(arg) {
  if (!(arg instanceof vault$api_pb.GetProviderCredentialRequest)) {
    throw new Error('Expected argument of type vault_api.GetProviderCredentialRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetProviderCredentialRequest(buffer_arg) {
  return vault$api_pb.GetProviderCredentialRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vault_api_GetProviderCredentialResponse(arg) {
  if (!(arg instanceof vault$api_pb.GetProviderCredentialResponse)) {
    throw new Error('Expected argument of type vault_api.GetProviderCredentialResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_vault_api_GetProviderCredentialResponse(buffer_arg) {
  return vault$api_pb.GetProviderCredentialResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var VaultServiceService = exports.VaultServiceService = {
  createProviderCredential: {
    path: '/vault_api.VaultService/CreateProviderCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.CreateProviderCredentialRequest,
    responseType: vault$api_pb.CreateProviderCredentialResponse,
    requestSerialize: serialize_vault_api_CreateProviderCredentialRequest,
    requestDeserialize: deserialize_vault_api_CreateProviderCredentialRequest,
    responseSerialize: serialize_vault_api_CreateProviderCredentialResponse,
    responseDeserialize: deserialize_vault_api_CreateProviderCredentialResponse,
  },
  createToolCredential: {
    path: '/vault_api.VaultService/CreateToolCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.CreateToolCredentialRequest,
    responseType: vault$api_pb.CreateToolCredentialResponse,
    requestSerialize: serialize_vault_api_CreateToolCredentialRequest,
    requestDeserialize: deserialize_vault_api_CreateToolCredentialRequest,
    responseSerialize: serialize_vault_api_CreateToolCredentialResponse,
    responseDeserialize: deserialize_vault_api_CreateToolCredentialResponse,
  },
  deleteProviderCredential: {
    path: '/vault_api.VaultService/DeleteProviderCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.DeleteProviderCredentialRequest,
    responseType: vault$api_pb.DeleteProviderCredentialResponse,
    requestSerialize: serialize_vault_api_DeleteProviderCredentialRequest,
    requestDeserialize: deserialize_vault_api_DeleteProviderCredentialRequest,
    responseSerialize: serialize_vault_api_DeleteProviderCredentialResponse,
    responseDeserialize: deserialize_vault_api_DeleteProviderCredentialResponse,
  },
  getAllOrganizationCredential: {
    path: '/vault_api.VaultService/GetAllOrganizationCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.GetAllOrganizationCredentialRequest,
    responseType: vault$api_pb.GetAllOrganizationCredentialResponse,
    requestSerialize: serialize_vault_api_GetAllOrganizationCredentialRequest,
    requestDeserialize: deserialize_vault_api_GetAllOrganizationCredentialRequest,
    responseSerialize: serialize_vault_api_GetAllOrganizationCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetAllOrganizationCredentialResponse,
  },
  getProviderCredential: {
    path: '/vault_api.VaultService/GetProviderCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.GetProviderCredentialRequest,
    responseType: vault$api_pb.GetProviderCredentialResponse,
    requestSerialize: serialize_vault_api_GetProviderCredentialRequest,
    requestDeserialize: deserialize_vault_api_GetProviderCredentialRequest,
    responseSerialize: serialize_vault_api_GetProviderCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetProviderCredentialResponse,
  },
  getOauth2VaultCredential: {
    path: '/vault_api.VaultService/GetOauth2VaultCredential',
    requestStream: false,
    responseStream: false,
    requestType: vault$api_pb.GetOauth2VaultCredentialRequest,
    responseType: vault$api_pb.GetOauth2VaultCredentialResponse,
    requestSerialize: serialize_vault_api_GetOauth2VaultCredentialRequest,
    requestDeserialize: deserialize_vault_api_GetOauth2VaultCredentialRequest,
    responseSerialize: serialize_vault_api_GetOauth2VaultCredentialResponse,
    responseDeserialize: deserialize_vault_api_GetOauth2VaultCredentialResponse,
  },
};

exports.VaultServiceClient = grpc.makeGenericClientConstructor(VaultServiceService, 'VaultService');
