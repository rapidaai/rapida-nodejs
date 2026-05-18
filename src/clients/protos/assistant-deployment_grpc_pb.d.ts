// GENERATED CODE -- DO NOT EDIT!

// package: assistant_api
// file: assistant-deployment.proto

import * as assistant_deployment_pb from "./assistant-deployment_pb";
import * as grpc from "grpc";

interface IAssistantDeploymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  getAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  getAllAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantApiDeploymentResponse>;
  disableAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  createAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  getAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  getAllAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantWebpluginDeploymentResponse>;
  disableAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  createAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  getAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  getAllAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantDebuggerDeploymentResponse>;
  disableAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  createAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  getAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  getAllAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantWhatsappDeploymentResponse>;
  disableAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  createAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
  getAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
  getAllAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantPhoneDeploymentResponse>;
  disableAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
}

export const AssistantDeploymentServiceService: IAssistantDeploymentServiceService;

export interface IAssistantDeploymentServiceServer extends grpc.UntypedServiceImplementation {
  createAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  getAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  getAllAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantApiDeploymentResponse>;
  disableAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantApiDeploymentResponse>;
  createAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  getAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  getAllAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantWebpluginDeploymentResponse>;
  disableAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>;
  createAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  getAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  getAllAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantDebuggerDeploymentResponse>;
  disableAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>;
  createAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  getAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  getAllAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantWhatsappDeploymentResponse>;
  disableAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>;
  createAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
  getAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
  getAllAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAllAssistantDeploymentRequest, assistant_deployment_pb.GetAllAssistantPhoneDeploymentResponse>;
  disableAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>;
}

export class AssistantDeploymentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantApiDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantApiDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantApiDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAllAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAllAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAllAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  disableAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.GetAssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
}
