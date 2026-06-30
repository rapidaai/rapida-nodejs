// GENERATED CODE -- DO NOT EDIT!

// package: observability_api
// file: observability-api.proto

import * as observability_api_pb from "./observability-api_pb";
import * as grpc from "grpc";

interface IObservabilityServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllTelemetry: grpc.MethodDefinition<observability_api_pb.GetAllTelemetryRequest, observability_api_pb.GetAllTelemetryResponse>;
}

export const ObservabilityServiceService: IObservabilityServiceService;

export interface IObservabilityServiceServer extends grpc.UntypedServiceImplementation {
  getAllTelemetry: grpc.handleUnaryCall<observability_api_pb.GetAllTelemetryRequest, observability_api_pb.GetAllTelemetryResponse>;
}

export class ObservabilityServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllTelemetry(argument: observability_api_pb.GetAllTelemetryRequest, callback: grpc.requestCallback<observability_api_pb.GetAllTelemetryResponse>): grpc.ClientUnaryCall;
  getAllTelemetry(argument: observability_api_pb.GetAllTelemetryRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<observability_api_pb.GetAllTelemetryResponse>): grpc.ClientUnaryCall;
  getAllTelemetry(argument: observability_api_pb.GetAllTelemetryRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<observability_api_pb.GetAllTelemetryResponse>): grpc.ClientUnaryCall;
}
