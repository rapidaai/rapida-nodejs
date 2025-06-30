// GENERATED CODE -- DO NOT EDIT!

// package: workflow_api
// file: workflow-api.proto

import * as workflow_api_pb from "./workflow-api_pb";
import * as grpc from "grpc";

interface IWorkflowServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getWorkflow: grpc.MethodDefinition<workflow_api_pb.GetWorkflowRequest, workflow_api_pb.GetWorkflowResponse>;
  getAllWorkflow: grpc.MethodDefinition<workflow_api_pb.GetAllWorkflowRequest, workflow_api_pb.GetAllWorkflowResponse>;
  createWorkflow: grpc.MethodDefinition<workflow_api_pb.CreateWorkflowRequest, workflow_api_pb.GetWorkflowResponse>;
  createWorkflowTag: grpc.MethodDefinition<workflow_api_pb.CreateWorkflowTagRequest, workflow_api_pb.GetWorkflowResponse>;
  publishWorkflowVersion: grpc.MethodDefinition<workflow_api_pb.PublishWorkflowVersionRequest, workflow_api_pb.GetWorkflowResponse>;
  updateWorkflowDetail: grpc.MethodDefinition<workflow_api_pb.UpdateWorkflowDetailRequest, workflow_api_pb.GetWorkflowResponse>;
}

export const WorkflowServiceService: IWorkflowServiceService;

export interface IWorkflowServiceServer extends grpc.UntypedServiceImplementation {
  getWorkflow: grpc.handleUnaryCall<workflow_api_pb.GetWorkflowRequest, workflow_api_pb.GetWorkflowResponse>;
  getAllWorkflow: grpc.handleUnaryCall<workflow_api_pb.GetAllWorkflowRequest, workflow_api_pb.GetAllWorkflowResponse>;
  createWorkflow: grpc.handleUnaryCall<workflow_api_pb.CreateWorkflowRequest, workflow_api_pb.GetWorkflowResponse>;
  createWorkflowTag: grpc.handleUnaryCall<workflow_api_pb.CreateWorkflowTagRequest, workflow_api_pb.GetWorkflowResponse>;
  publishWorkflowVersion: grpc.handleUnaryCall<workflow_api_pb.PublishWorkflowVersionRequest, workflow_api_pb.GetWorkflowResponse>;
  updateWorkflowDetail: grpc.handleUnaryCall<workflow_api_pb.UpdateWorkflowDetailRequest, workflow_api_pb.GetWorkflowResponse>;
}

export class WorkflowServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getWorkflow(argument: workflow_api_pb.GetWorkflowRequest, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  getWorkflow(argument: workflow_api_pb.GetWorkflowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  getWorkflow(argument: workflow_api_pb.GetWorkflowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  getAllWorkflow(argument: workflow_api_pb.GetAllWorkflowRequest, callback: grpc.requestCallback<workflow_api_pb.GetAllWorkflowResponse>): grpc.ClientUnaryCall;
  getAllWorkflow(argument: workflow_api_pb.GetAllWorkflowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetAllWorkflowResponse>): grpc.ClientUnaryCall;
  getAllWorkflow(argument: workflow_api_pb.GetAllWorkflowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetAllWorkflowResponse>): grpc.ClientUnaryCall;
  createWorkflow(argument: workflow_api_pb.CreateWorkflowRequest, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  createWorkflow(argument: workflow_api_pb.CreateWorkflowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  createWorkflow(argument: workflow_api_pb.CreateWorkflowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  createWorkflowTag(argument: workflow_api_pb.CreateWorkflowTagRequest, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  createWorkflowTag(argument: workflow_api_pb.CreateWorkflowTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  createWorkflowTag(argument: workflow_api_pb.CreateWorkflowTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  publishWorkflowVersion(argument: workflow_api_pb.PublishWorkflowVersionRequest, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  publishWorkflowVersion(argument: workflow_api_pb.PublishWorkflowVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  publishWorkflowVersion(argument: workflow_api_pb.PublishWorkflowVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  updateWorkflowDetail(argument: workflow_api_pb.UpdateWorkflowDetailRequest, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  updateWorkflowDetail(argument: workflow_api_pb.UpdateWorkflowDetailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
  updateWorkflowDetail(argument: workflow_api_pb.UpdateWorkflowDetailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowResponse>): grpc.ClientUnaryCall;
}

interface IExecutorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  runWorkflow: grpc.MethodDefinition<workflow_api_pb.RunWorkflowRequest, workflow_api_pb.RunWorkflowResponse>;
  getWorkflowRunOutput: grpc.MethodDefinition<workflow_api_pb.GetWorkflowRunOutputRequest, workflow_api_pb.GetWorkflowRunOutputResponse>;
}

export const ExecutorServiceService: IExecutorServiceService;

export interface IExecutorServiceServer extends grpc.UntypedServiceImplementation {
  runWorkflow: grpc.handleUnaryCall<workflow_api_pb.RunWorkflowRequest, workflow_api_pb.RunWorkflowResponse>;
  getWorkflowRunOutput: grpc.handleUnaryCall<workflow_api_pb.GetWorkflowRunOutputRequest, workflow_api_pb.GetWorkflowRunOutputResponse>;
}

export class ExecutorServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  runWorkflow(argument: workflow_api_pb.RunWorkflowRequest, callback: grpc.requestCallback<workflow_api_pb.RunWorkflowResponse>): grpc.ClientUnaryCall;
  runWorkflow(argument: workflow_api_pb.RunWorkflowRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.RunWorkflowResponse>): grpc.ClientUnaryCall;
  runWorkflow(argument: workflow_api_pb.RunWorkflowRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.RunWorkflowResponse>): grpc.ClientUnaryCall;
  getWorkflowRunOutput(argument: workflow_api_pb.GetWorkflowRunOutputRequest, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowRunOutputResponse>): grpc.ClientUnaryCall;
  getWorkflowRunOutput(argument: workflow_api_pb.GetWorkflowRunOutputRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowRunOutputResponse>): grpc.ClientUnaryCall;
  getWorkflowRunOutput(argument: workflow_api_pb.GetWorkflowRunOutputRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<workflow_api_pb.GetWorkflowRunOutputResponse>): grpc.ClientUnaryCall;
}
