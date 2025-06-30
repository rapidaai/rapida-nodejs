// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sendgrid$api_pb = require('./sendgrid-api_pb.js');

function serialize_integration_api_InviteMemeberEmailRequest(arg) {
  if (!(arg instanceof sendgrid$api_pb.InviteMemeberEmailRequest)) {
    throw new Error('Expected argument of type integration_api.InviteMemeberEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_InviteMemeberEmailRequest(buffer_arg) {
  return sendgrid$api_pb.InviteMemeberEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_InviteMemeberEmailResponse(arg) {
  if (!(arg instanceof sendgrid$api_pb.InviteMemeberEmailResponse)) {
    throw new Error('Expected argument of type integration_api.InviteMemeberEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_InviteMemeberEmailResponse(buffer_arg) {
  return sendgrid$api_pb.InviteMemeberEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_ResetPasswordEmailRequest(arg) {
  if (!(arg instanceof sendgrid$api_pb.ResetPasswordEmailRequest)) {
    throw new Error('Expected argument of type integration_api.ResetPasswordEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_ResetPasswordEmailRequest(buffer_arg) {
  return sendgrid$api_pb.ResetPasswordEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_ResetPasswordEmailResponse(arg) {
  if (!(arg instanceof sendgrid$api_pb.ResetPasswordEmailResponse)) {
    throw new Error('Expected argument of type integration_api.ResetPasswordEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_ResetPasswordEmailResponse(buffer_arg) {
  return sendgrid$api_pb.ResetPasswordEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_WelcomeEmailRequest(arg) {
  if (!(arg instanceof sendgrid$api_pb.WelcomeEmailRequest)) {
    throw new Error('Expected argument of type integration_api.WelcomeEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_WelcomeEmailRequest(buffer_arg) {
  return sendgrid$api_pb.WelcomeEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_api_WelcomeEmailResponse(arg) {
  if (!(arg instanceof sendgrid$api_pb.WelcomeEmailResponse)) {
    throw new Error('Expected argument of type integration_api.WelcomeEmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_api_WelcomeEmailResponse(buffer_arg) {
  return sendgrid$api_pb.WelcomeEmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SendgridServiceService = exports.SendgridServiceService = {
  welcomeEmail: {
    path: '/integration_api.SendgridService/WelcomeEmail',
    requestStream: false,
    responseStream: false,
    requestType: sendgrid$api_pb.WelcomeEmailRequest,
    responseType: sendgrid$api_pb.WelcomeEmailResponse,
    requestSerialize: serialize_integration_api_WelcomeEmailRequest,
    requestDeserialize: deserialize_integration_api_WelcomeEmailRequest,
    responseSerialize: serialize_integration_api_WelcomeEmailResponse,
    responseDeserialize: deserialize_integration_api_WelcomeEmailResponse,
  },
  resetPasswordEmail: {
    path: '/integration_api.SendgridService/ResetPasswordEmail',
    requestStream: false,
    responseStream: false,
    requestType: sendgrid$api_pb.ResetPasswordEmailRequest,
    responseType: sendgrid$api_pb.ResetPasswordEmailResponse,
    requestSerialize: serialize_integration_api_ResetPasswordEmailRequest,
    requestDeserialize: deserialize_integration_api_ResetPasswordEmailRequest,
    responseSerialize: serialize_integration_api_ResetPasswordEmailResponse,
    responseDeserialize: deserialize_integration_api_ResetPasswordEmailResponse,
  },
  inviteMemberEmail: {
    path: '/integration_api.SendgridService/InviteMemberEmail',
    requestStream: false,
    responseStream: false,
    requestType: sendgrid$api_pb.InviteMemeberEmailRequest,
    responseType: sendgrid$api_pb.InviteMemeberEmailResponse,
    requestSerialize: serialize_integration_api_InviteMemeberEmailRequest,
    requestDeserialize: deserialize_integration_api_InviteMemeberEmailRequest,
    responseSerialize: serialize_integration_api_InviteMemeberEmailResponse,
    responseDeserialize: deserialize_integration_api_InviteMemeberEmailResponse,
  },
};

exports.SendgridServiceClient = grpc.makeGenericClientConstructor(SendgridServiceService, 'SendgridService');
