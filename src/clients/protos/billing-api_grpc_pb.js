// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var billing$api_pb = require('./billing-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_billing_api_GetAllPlansRequest(arg) {
  if (!(arg instanceof billing$api_pb.GetAllPlansRequest)) {
    throw new Error('Expected argument of type billing_api.GetAllPlansRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_billing_api_GetAllPlansRequest(buffer_arg) {
  return billing$api_pb.GetAllPlansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_api_GetAllPlansResponse(arg) {
  if (!(arg instanceof billing$api_pb.GetAllPlansResponse)) {
    throw new Error('Expected argument of type billing_api.GetAllPlansResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_billing_api_GetAllPlansResponse(buffer_arg) {
  return billing$api_pb.GetAllPlansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_api_GetSubscriptionRequest(arg) {
  if (!(arg instanceof billing$api_pb.GetSubscriptionRequest)) {
    throw new Error('Expected argument of type billing_api.GetSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_billing_api_GetSubscriptionRequest(buffer_arg) {
  return billing$api_pb.GetSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_api_GetSubscriptionResponse(arg) {
  if (!(arg instanceof billing$api_pb.GetSubscriptionResponse)) {
    throw new Error('Expected argument of type billing_api.GetSubscriptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_billing_api_GetSubscriptionResponse(buffer_arg) {
  return billing$api_pb.GetSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_api_UpdateSubscriptionRequest(arg) {
  if (!(arg instanceof billing$api_pb.UpdateSubscriptionRequest)) {
    throw new Error('Expected argument of type billing_api.UpdateSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_billing_api_UpdateSubscriptionRequest(buffer_arg) {
  return billing$api_pb.UpdateSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_billing_api_UpdateSubscriptionResponse(arg) {
  if (!(arg instanceof billing$api_pb.UpdateSubscriptionResponse)) {
    throw new Error('Expected argument of type billing_api.UpdateSubscriptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_billing_api_UpdateSubscriptionResponse(buffer_arg) {
  return billing$api_pb.UpdateSubscriptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BillingServiceService = exports.BillingServiceService = {
  getAllPlans: {
    path: '/billing_api.BillingService/GetAllPlans',
    requestStream: false,
    responseStream: false,
    requestType: billing$api_pb.GetAllPlansRequest,
    responseType: billing$api_pb.GetAllPlansResponse,
    requestSerialize: serialize_billing_api_GetAllPlansRequest,
    requestDeserialize: deserialize_billing_api_GetAllPlansRequest,
    responseSerialize: serialize_billing_api_GetAllPlansResponse,
    responseDeserialize: deserialize_billing_api_GetAllPlansResponse,
  },
  getSubscription: {
    path: '/billing_api.BillingService/GetSubscription',
    requestStream: false,
    responseStream: false,
    requestType: billing$api_pb.GetSubscriptionRequest,
    responseType: billing$api_pb.GetSubscriptionResponse,
    requestSerialize: serialize_billing_api_GetSubscriptionRequest,
    requestDeserialize: deserialize_billing_api_GetSubscriptionRequest,
    responseSerialize: serialize_billing_api_GetSubscriptionResponse,
    responseDeserialize: deserialize_billing_api_GetSubscriptionResponse,
  },
  updateSubscription: {
    path: '/billing_api.BillingService/UpdateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: billing$api_pb.UpdateSubscriptionRequest,
    responseType: billing$api_pb.UpdateSubscriptionResponse,
    requestSerialize: serialize_billing_api_UpdateSubscriptionRequest,
    requestDeserialize: deserialize_billing_api_UpdateSubscriptionRequest,
    responseSerialize: serialize_billing_api_UpdateSubscriptionResponse,
    responseDeserialize: deserialize_billing_api_UpdateSubscriptionResponse,
  },
};

exports.BillingServiceClient = grpc.makeGenericClientConstructor(BillingServiceService, 'BillingService');
