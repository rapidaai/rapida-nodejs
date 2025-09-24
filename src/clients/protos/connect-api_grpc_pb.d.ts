// GENERATED CODE -- DO NOT EDIT!

// package: connect_api
// file: connect-api.proto

import * as connect_api_pb from "./connect-api_pb";
import * as grpc from "grpc";

interface IConnectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  knowledgeConnect: grpc.MethodDefinition<connect_api_pb.KnowledgeConnectRequest, connect_api_pb.KnowledgeConnectResponse>;
  generalConnect: grpc.MethodDefinition<connect_api_pb.GeneralConnectRequest, connect_api_pb.GeneralConnectResponse>;
  actionConnect: grpc.MethodDefinition<connect_api_pb.ActionConnectRequest, connect_api_pb.ActionConnectResponse>;
  getConnectorFiles: grpc.MethodDefinition<connect_api_pb.GetConnectorFilesRequest, connect_api_pb.GetConnectorFilesResponse>;
}

export const ConnectServiceService: IConnectServiceService;

export interface IConnectServiceServer extends grpc.UntypedServiceImplementation {
  knowledgeConnect: grpc.handleUnaryCall<connect_api_pb.KnowledgeConnectRequest, connect_api_pb.KnowledgeConnectResponse>;
  generalConnect: grpc.handleUnaryCall<connect_api_pb.GeneralConnectRequest, connect_api_pb.GeneralConnectResponse>;
  actionConnect: grpc.handleUnaryCall<connect_api_pb.ActionConnectRequest, connect_api_pb.ActionConnectResponse>;
  getConnectorFiles: grpc.handleUnaryCall<connect_api_pb.GetConnectorFilesRequest, connect_api_pb.GetConnectorFilesResponse>;
}

export class ConnectServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  knowledgeConnect(argument: connect_api_pb.KnowledgeConnectRequest, callback: grpc.requestCallback<connect_api_pb.KnowledgeConnectResponse>): grpc.ClientUnaryCall;
  knowledgeConnect(argument: connect_api_pb.KnowledgeConnectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.KnowledgeConnectResponse>): grpc.ClientUnaryCall;
  knowledgeConnect(argument: connect_api_pb.KnowledgeConnectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.KnowledgeConnectResponse>): grpc.ClientUnaryCall;
  generalConnect(argument: connect_api_pb.GeneralConnectRequest, callback: grpc.requestCallback<connect_api_pb.GeneralConnectResponse>): grpc.ClientUnaryCall;
  generalConnect(argument: connect_api_pb.GeneralConnectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GeneralConnectResponse>): grpc.ClientUnaryCall;
  generalConnect(argument: connect_api_pb.GeneralConnectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GeneralConnectResponse>): grpc.ClientUnaryCall;
  actionConnect(argument: connect_api_pb.ActionConnectRequest, callback: grpc.requestCallback<connect_api_pb.ActionConnectResponse>): grpc.ClientUnaryCall;
  actionConnect(argument: connect_api_pb.ActionConnectRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.ActionConnectResponse>): grpc.ClientUnaryCall;
  actionConnect(argument: connect_api_pb.ActionConnectRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.ActionConnectResponse>): grpc.ClientUnaryCall;
  getConnectorFiles(argument: connect_api_pb.GetConnectorFilesRequest, callback: grpc.requestCallback<connect_api_pb.GetConnectorFilesResponse>): grpc.ClientUnaryCall;
  getConnectorFiles(argument: connect_api_pb.GetConnectorFilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GetConnectorFilesResponse>): grpc.ClientUnaryCall;
  getConnectorFiles(argument: connect_api_pb.GetConnectorFilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<connect_api_pb.GetConnectorFilesResponse>): grpc.ClientUnaryCall;
}
