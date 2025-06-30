// GENERATED CODE -- DO NOT EDIT!

// package: provider_api
// file: provider-api.proto

import * as provider_api_pb from "./provider-api_pb";
import * as grpc from "grpc";

interface IProviderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllToolProvider: grpc.MethodDefinition<provider_api_pb.GetAllToolProviderRequest, provider_api_pb.GetAllToolProviderResponse>;
  getAllModelProvider: grpc.MethodDefinition<provider_api_pb.GetAllModelProviderRequest, provider_api_pb.GetAllModelProviderResponse>;
  getModel: grpc.MethodDefinition<provider_api_pb.GetModelRequest, provider_api_pb.GetModelResponse>;
  getAllModel: grpc.MethodDefinition<provider_api_pb.GetAllModelRequest, provider_api_pb.GetAllModelResponse>;
}

export const ProviderServiceService: IProviderServiceService;

export interface IProviderServiceServer extends grpc.UntypedServiceImplementation {
  getAllToolProvider: grpc.handleUnaryCall<provider_api_pb.GetAllToolProviderRequest, provider_api_pb.GetAllToolProviderResponse>;
  getAllModelProvider: grpc.handleUnaryCall<provider_api_pb.GetAllModelProviderRequest, provider_api_pb.GetAllModelProviderResponse>;
  getModel: grpc.handleUnaryCall<provider_api_pb.GetModelRequest, provider_api_pb.GetModelResponse>;
  getAllModel: grpc.handleUnaryCall<provider_api_pb.GetAllModelRequest, provider_api_pb.GetAllModelResponse>;
}

export class ProviderServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllToolProvider(argument: provider_api_pb.GetAllToolProviderRequest, callback: grpc.requestCallback<provider_api_pb.GetAllToolProviderResponse>): grpc.ClientUnaryCall;
  getAllToolProvider(argument: provider_api_pb.GetAllToolProviderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetAllToolProviderResponse>): grpc.ClientUnaryCall;
  getAllToolProvider(argument: provider_api_pb.GetAllToolProviderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetAllToolProviderResponse>): grpc.ClientUnaryCall;
  getAllModelProvider(argument: provider_api_pb.GetAllModelProviderRequest, callback: grpc.requestCallback<provider_api_pb.GetAllModelProviderResponse>): grpc.ClientUnaryCall;
  getAllModelProvider(argument: provider_api_pb.GetAllModelProviderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetAllModelProviderResponse>): grpc.ClientUnaryCall;
  getAllModelProvider(argument: provider_api_pb.GetAllModelProviderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetAllModelProviderResponse>): grpc.ClientUnaryCall;
  getModel(argument: provider_api_pb.GetModelRequest, callback: grpc.requestCallback<provider_api_pb.GetModelResponse>): grpc.ClientUnaryCall;
  getModel(argument: provider_api_pb.GetModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetModelResponse>): grpc.ClientUnaryCall;
  getModel(argument: provider_api_pb.GetModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetModelResponse>): grpc.ClientUnaryCall;
  getAllModel(argument: provider_api_pb.GetAllModelRequest, callback: grpc.requestCallback<provider_api_pb.GetAllModelResponse>): grpc.ClientUnaryCall;
  getAllModel(argument: provider_api_pb.GetAllModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetAllModelResponse>): grpc.ClientUnaryCall;
  getAllModel(argument: provider_api_pb.GetAllModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<provider_api_pb.GetAllModelResponse>): grpc.ClientUnaryCall;
}
