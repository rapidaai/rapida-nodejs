// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var workflow$api_pb = require('./workflow-api_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_workflow_api_CreateWorkflowRequest(arg) {
  if (!(arg instanceof workflow$api_pb.CreateWorkflowRequest)) {
    throw new Error('Expected argument of type workflow_api.CreateWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_CreateWorkflowRequest(buffer_arg) {
  return workflow$api_pb.CreateWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_CreateWorkflowTagRequest(arg) {
  if (!(arg instanceof workflow$api_pb.CreateWorkflowTagRequest)) {
    throw new Error('Expected argument of type workflow_api.CreateWorkflowTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_CreateWorkflowTagRequest(buffer_arg) {
  return workflow$api_pb.CreateWorkflowTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_GetAllWorkflowRequest(arg) {
  if (!(arg instanceof workflow$api_pb.GetAllWorkflowRequest)) {
    throw new Error('Expected argument of type workflow_api.GetAllWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_GetAllWorkflowRequest(buffer_arg) {
  return workflow$api_pb.GetAllWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_GetAllWorkflowResponse(arg) {
  if (!(arg instanceof workflow$api_pb.GetAllWorkflowResponse)) {
    throw new Error('Expected argument of type workflow_api.GetAllWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_GetAllWorkflowResponse(buffer_arg) {
  return workflow$api_pb.GetAllWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_GetWorkflowRequest(arg) {
  if (!(arg instanceof workflow$api_pb.GetWorkflowRequest)) {
    throw new Error('Expected argument of type workflow_api.GetWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_GetWorkflowRequest(buffer_arg) {
  return workflow$api_pb.GetWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_GetWorkflowResponse(arg) {
  if (!(arg instanceof workflow$api_pb.GetWorkflowResponse)) {
    throw new Error('Expected argument of type workflow_api.GetWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_GetWorkflowResponse(buffer_arg) {
  return workflow$api_pb.GetWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_GetWorkflowRunOutputRequest(arg) {
  if (!(arg instanceof workflow$api_pb.GetWorkflowRunOutputRequest)) {
    throw new Error('Expected argument of type workflow_api.GetWorkflowRunOutputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_GetWorkflowRunOutputRequest(buffer_arg) {
  return workflow$api_pb.GetWorkflowRunOutputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_GetWorkflowRunOutputResponse(arg) {
  if (!(arg instanceof workflow$api_pb.GetWorkflowRunOutputResponse)) {
    throw new Error('Expected argument of type workflow_api.GetWorkflowRunOutputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_GetWorkflowRunOutputResponse(buffer_arg) {
  return workflow$api_pb.GetWorkflowRunOutputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_PublishWorkflowVersionRequest(arg) {
  if (!(arg instanceof workflow$api_pb.PublishWorkflowVersionRequest)) {
    throw new Error('Expected argument of type workflow_api.PublishWorkflowVersionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_PublishWorkflowVersionRequest(buffer_arg) {
  return workflow$api_pb.PublishWorkflowVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_RunWorkflowRequest(arg) {
  if (!(arg instanceof workflow$api_pb.RunWorkflowRequest)) {
    throw new Error('Expected argument of type workflow_api.RunWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_RunWorkflowRequest(buffer_arg) {
  return workflow$api_pb.RunWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_RunWorkflowResponse(arg) {
  if (!(arg instanceof workflow$api_pb.RunWorkflowResponse)) {
    throw new Error('Expected argument of type workflow_api.RunWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_RunWorkflowResponse(buffer_arg) {
  return workflow$api_pb.RunWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_workflow_api_UpdateWorkflowDetailRequest(arg) {
  if (!(arg instanceof workflow$api_pb.UpdateWorkflowDetailRequest)) {
    throw new Error('Expected argument of type workflow_api.UpdateWorkflowDetailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_workflow_api_UpdateWorkflowDetailRequest(buffer_arg) {
  return workflow$api_pb.UpdateWorkflowDetailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var WorkflowServiceService = exports.WorkflowServiceService = {
  getWorkflow: {
    path: '/workflow_api.WorkflowService/GetWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.GetWorkflowRequest,
    responseType: workflow$api_pb.GetWorkflowResponse,
    requestSerialize: serialize_workflow_api_GetWorkflowRequest,
    requestDeserialize: deserialize_workflow_api_GetWorkflowRequest,
    responseSerialize: serialize_workflow_api_GetWorkflowResponse,
    responseDeserialize: deserialize_workflow_api_GetWorkflowResponse,
  },
  getAllWorkflow: {
    path: '/workflow_api.WorkflowService/GetAllWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.GetAllWorkflowRequest,
    responseType: workflow$api_pb.GetAllWorkflowResponse,
    requestSerialize: serialize_workflow_api_GetAllWorkflowRequest,
    requestDeserialize: deserialize_workflow_api_GetAllWorkflowRequest,
    responseSerialize: serialize_workflow_api_GetAllWorkflowResponse,
    responseDeserialize: deserialize_workflow_api_GetAllWorkflowResponse,
  },
  createWorkflow: {
    path: '/workflow_api.WorkflowService/CreateWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.CreateWorkflowRequest,
    responseType: workflow$api_pb.GetWorkflowResponse,
    requestSerialize: serialize_workflow_api_CreateWorkflowRequest,
    requestDeserialize: deserialize_workflow_api_CreateWorkflowRequest,
    responseSerialize: serialize_workflow_api_GetWorkflowResponse,
    responseDeserialize: deserialize_workflow_api_GetWorkflowResponse,
  },
  createWorkflowTag: {
    path: '/workflow_api.WorkflowService/CreateWorkflowTag',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.CreateWorkflowTagRequest,
    responseType: workflow$api_pb.GetWorkflowResponse,
    requestSerialize: serialize_workflow_api_CreateWorkflowTagRequest,
    requestDeserialize: deserialize_workflow_api_CreateWorkflowTagRequest,
    responseSerialize: serialize_workflow_api_GetWorkflowResponse,
    responseDeserialize: deserialize_workflow_api_GetWorkflowResponse,
  },
  publishWorkflowVersion: {
    path: '/workflow_api.WorkflowService/PublishWorkflowVersion',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.PublishWorkflowVersionRequest,
    responseType: workflow$api_pb.GetWorkflowResponse,
    requestSerialize: serialize_workflow_api_PublishWorkflowVersionRequest,
    requestDeserialize: deserialize_workflow_api_PublishWorkflowVersionRequest,
    responseSerialize: serialize_workflow_api_GetWorkflowResponse,
    responseDeserialize: deserialize_workflow_api_GetWorkflowResponse,
  },
  updateWorkflowDetail: {
    path: '/workflow_api.WorkflowService/UpdateWorkflowDetail',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.UpdateWorkflowDetailRequest,
    responseType: workflow$api_pb.GetWorkflowResponse,
    requestSerialize: serialize_workflow_api_UpdateWorkflowDetailRequest,
    requestDeserialize: deserialize_workflow_api_UpdateWorkflowDetailRequest,
    responseSerialize: serialize_workflow_api_GetWorkflowResponse,
    responseDeserialize: deserialize_workflow_api_GetWorkflowResponse,
  },
};

exports.WorkflowServiceClient = grpc.makeGenericClientConstructor(WorkflowServiceService, 'WorkflowService');
var ExecutorServiceService = exports.ExecutorServiceService = {
  runWorkflow: {
    path: '/workflow_api.ExecutorService/RunWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.RunWorkflowRequest,
    responseType: workflow$api_pb.RunWorkflowResponse,
    requestSerialize: serialize_workflow_api_RunWorkflowRequest,
    requestDeserialize: deserialize_workflow_api_RunWorkflowRequest,
    responseSerialize: serialize_workflow_api_RunWorkflowResponse,
    responseDeserialize: deserialize_workflow_api_RunWorkflowResponse,
  },
  getWorkflowRunOutput: {
    path: '/workflow_api.ExecutorService/GetWorkflowRunOutput',
    requestStream: false,
    responseStream: false,
    requestType: workflow$api_pb.GetWorkflowRunOutputRequest,
    responseType: workflow$api_pb.GetWorkflowRunOutputResponse,
    requestSerialize: serialize_workflow_api_GetWorkflowRunOutputRequest,
    requestDeserialize: deserialize_workflow_api_GetWorkflowRunOutputRequest,
    responseSerialize: serialize_workflow_api_GetWorkflowRunOutputResponse,
    responseDeserialize: deserialize_workflow_api_GetWorkflowRunOutputResponse,
  },
};

exports.ExecutorServiceClient = grpc.makeGenericClientConstructor(ExecutorServiceService, 'ExecutorService');
