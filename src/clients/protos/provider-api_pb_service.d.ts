// package: provider_api
// file: provider-api.proto

import * as provider_api_pb from "./provider-api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProviderServiceGetAllToolProvider = {
  readonly methodName: string;
  readonly service: typeof ProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provider_api_pb.GetAllToolProviderRequest;
  readonly responseType: typeof provider_api_pb.GetAllToolProviderResponse;
};

type ProviderServiceGetAllModelProvider = {
  readonly methodName: string;
  readonly service: typeof ProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provider_api_pb.GetAllModelProviderRequest;
  readonly responseType: typeof provider_api_pb.GetAllModelProviderResponse;
};

type ProviderServiceGetModel = {
  readonly methodName: string;
  readonly service: typeof ProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provider_api_pb.GetModelRequest;
  readonly responseType: typeof provider_api_pb.GetModelResponse;
};

type ProviderServiceGetAllModel = {
  readonly methodName: string;
  readonly service: typeof ProviderService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof provider_api_pb.GetAllModelRequest;
  readonly responseType: typeof provider_api_pb.GetAllModelResponse;
};

export class ProviderService {
  static readonly serviceName: string;
  static readonly GetAllToolProvider: ProviderServiceGetAllToolProvider;
  static readonly GetAllModelProvider: ProviderServiceGetAllModelProvider;
  static readonly GetModel: ProviderServiceGetModel;
  static readonly GetAllModel: ProviderServiceGetAllModel;
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

export class ProviderServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllToolProvider(
    requestMessage: provider_api_pb.GetAllToolProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetAllToolProviderResponse|null) => void
  ): UnaryResponse;
  getAllToolProvider(
    requestMessage: provider_api_pb.GetAllToolProviderRequest,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetAllToolProviderResponse|null) => void
  ): UnaryResponse;
  getAllModelProvider(
    requestMessage: provider_api_pb.GetAllModelProviderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetAllModelProviderResponse|null) => void
  ): UnaryResponse;
  getAllModelProvider(
    requestMessage: provider_api_pb.GetAllModelProviderRequest,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetAllModelProviderResponse|null) => void
  ): UnaryResponse;
  getModel(
    requestMessage: provider_api_pb.GetModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetModelResponse|null) => void
  ): UnaryResponse;
  getModel(
    requestMessage: provider_api_pb.GetModelRequest,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetModelResponse|null) => void
  ): UnaryResponse;
  getAllModel(
    requestMessage: provider_api_pb.GetAllModelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetAllModelResponse|null) => void
  ): UnaryResponse;
  getAllModel(
    requestMessage: provider_api_pb.GetAllModelRequest,
    callback: (error: ServiceError|null, responseMessage: provider_api_pb.GetAllModelResponse|null) => void
  ): UnaryResponse;
}

