// GENERATED CODE -- DO NOT EDIT!

// package: marketplace_api
// file: marketplace-api.proto

import * as marketplace_api_pb from "./marketplace-api_pb";
import * as grpc from "grpc";

interface IMarketplaceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllDeployment: grpc.MethodDefinition<marketplace_api_pb.GetAllDeploymentRequest, marketplace_api_pb.GetAllDeploymentResponse>;
}

export const MarketplaceServiceService: IMarketplaceServiceService;

export interface IMarketplaceServiceServer extends grpc.UntypedServiceImplementation {
  getAllDeployment: grpc.handleUnaryCall<marketplace_api_pb.GetAllDeploymentRequest, marketplace_api_pb.GetAllDeploymentResponse>;
}

export class MarketplaceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllDeployment(argument: marketplace_api_pb.GetAllDeploymentRequest, callback: grpc.requestCallback<marketplace_api_pb.GetAllDeploymentResponse>): grpc.ClientUnaryCall;
  getAllDeployment(argument: marketplace_api_pb.GetAllDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<marketplace_api_pb.GetAllDeploymentResponse>): grpc.ClientUnaryCall;
  getAllDeployment(argument: marketplace_api_pb.GetAllDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<marketplace_api_pb.GetAllDeploymentResponse>): grpc.ClientUnaryCall;
}
