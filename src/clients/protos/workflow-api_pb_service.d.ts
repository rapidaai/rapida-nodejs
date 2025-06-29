// package: workflow_api
// file: workflow-api.proto

import * as workflow_api_pb from "./workflow-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WorkflowServiceGetWorkflow = {
  readonly methodName: string;
  readonly service: typeof WorkflowService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.GetWorkflowRequest;
  readonly responseType: typeof workflow_api_pb.GetWorkflowResponse;
};

type WorkflowServiceGetAllWorkflow = {
  readonly methodName: string;
  readonly service: typeof WorkflowService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.GetAllWorkflowRequest;
  readonly responseType: typeof workflow_api_pb.GetAllWorkflowResponse;
};

type WorkflowServiceCreateWorkflow = {
  readonly methodName: string;
  readonly service: typeof WorkflowService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.CreateWorkflowRequest;
  readonly responseType: typeof workflow_api_pb.GetWorkflowResponse;
};

type WorkflowServiceCreateWorkflowTag = {
  readonly methodName: string;
  readonly service: typeof WorkflowService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.CreateWorkflowTagRequest;
  readonly responseType: typeof workflow_api_pb.GetWorkflowResponse;
};

type WorkflowServicePublishWorkflowVersion = {
  readonly methodName: string;
  readonly service: typeof WorkflowService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.PublishWorkflowVersionRequest;
  readonly responseType: typeof workflow_api_pb.GetWorkflowResponse;
};

type WorkflowServiceUpdateWorkflowDetail = {
  readonly methodName: string;
  readonly service: typeof WorkflowService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.UpdateWorkflowDetailRequest;
  readonly responseType: typeof workflow_api_pb.GetWorkflowResponse;
};

export class WorkflowService {
  static readonly serviceName: string;
  static readonly GetWorkflow: WorkflowServiceGetWorkflow;
  static readonly GetAllWorkflow: WorkflowServiceGetAllWorkflow;
  static readonly CreateWorkflow: WorkflowServiceCreateWorkflow;
  static readonly CreateWorkflowTag: WorkflowServiceCreateWorkflowTag;
  static readonly PublishWorkflowVersion: WorkflowServicePublishWorkflowVersion;
  static readonly UpdateWorkflowDetail: WorkflowServiceUpdateWorkflowDetail;
}

type ExecutorServiceRunWorkflow = {
  readonly methodName: string;
  readonly service: typeof ExecutorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.RunWorkflowRequest;
  readonly responseType: typeof workflow_api_pb.RunWorkflowResponse;
};

type ExecutorServiceGetWorkflowRunOutput = {
  readonly methodName: string;
  readonly service: typeof ExecutorService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof workflow_api_pb.GetWorkflowRunOutputRequest;
  readonly responseType: typeof workflow_api_pb.GetWorkflowRunOutputResponse;
};

export class ExecutorService {
  static readonly serviceName: string;
  static readonly RunWorkflow: ExecutorServiceRunWorkflow;
  static readonly GetWorkflowRunOutput: ExecutorServiceGetWorkflowRunOutput;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WorkflowServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getWorkflow(
    requestMessage: workflow_api_pb.GetWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  getWorkflow(
    requestMessage: workflow_api_pb.GetWorkflowRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  getAllWorkflow(
    requestMessage: workflow_api_pb.GetAllWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetAllWorkflowResponse|null) => void
  ): UnaryResponse;
  getAllWorkflow(
    requestMessage: workflow_api_pb.GetAllWorkflowRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetAllWorkflowResponse|null) => void
  ): UnaryResponse;
  createWorkflow(
    requestMessage: workflow_api_pb.CreateWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  createWorkflow(
    requestMessage: workflow_api_pb.CreateWorkflowRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  createWorkflowTag(
    requestMessage: workflow_api_pb.CreateWorkflowTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  createWorkflowTag(
    requestMessage: workflow_api_pb.CreateWorkflowTagRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  publishWorkflowVersion(
    requestMessage: workflow_api_pb.PublishWorkflowVersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  publishWorkflowVersion(
    requestMessage: workflow_api_pb.PublishWorkflowVersionRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  updateWorkflowDetail(
    requestMessage: workflow_api_pb.UpdateWorkflowDetailRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
  updateWorkflowDetail(
    requestMessage: workflow_api_pb.UpdateWorkflowDetailRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowResponse|null) => void
  ): UnaryResponse;
}

export class ExecutorServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  runWorkflow(
    requestMessage: workflow_api_pb.RunWorkflowRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.RunWorkflowResponse|null) => void
  ): UnaryResponse;
  runWorkflow(
    requestMessage: workflow_api_pb.RunWorkflowRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.RunWorkflowResponse|null) => void
  ): UnaryResponse;
  getWorkflowRunOutput(
    requestMessage: workflow_api_pb.GetWorkflowRunOutputRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowRunOutputResponse|null) => void
  ): UnaryResponse;
  getWorkflowRunOutput(
    requestMessage: workflow_api_pb.GetWorkflowRunOutputRequest,
    callback: (error: ServiceError|null, responseMessage: workflow_api_pb.GetWorkflowRunOutputResponse|null) => void
  ): UnaryResponse;
}

