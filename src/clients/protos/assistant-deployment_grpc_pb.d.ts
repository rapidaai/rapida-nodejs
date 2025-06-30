// GENERATED CODE -- DO NOT EDIT!

// package: assistant_api
// file: assistant-deployment.proto

import * as assistant_deployment_pb from "./assistant-deployment_pb";
import * as grpc from "grpc";

interface IAssistantDeploymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantApiDeploymentRequest, assistant_deployment_pb.AssistantApiDeploymentResponse>;
  getAssistantApiDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantApiDeploymentResponse>;
  createAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantWebpluginDeploymentRequest, assistant_deployment_pb.AssistantWebpluginDeploymentResponse>;
  getAssistantWebpluginDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantWebpluginDeploymentResponse>;
  createAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantDebuggerDeploymentRequest, assistant_deployment_pb.AssistantDebuggerDeploymentResponse>;
  getAssistantDebuggerDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantDebuggerDeploymentResponse>;
  createAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantWhatsappDeploymentRequest, assistant_deployment_pb.AssistantWhatsappDeploymentResponse>;
  getAssistantWhatsappDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantWhatsappDeploymentResponse>;
  createAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.CreateAssistantPhoneDeploymentRequest, assistant_deployment_pb.AssistantPhoneDeploymentResponse>;
  getAssistantPhoneDeployment: grpc.MethodDefinition<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantPhoneDeploymentResponse>;
}

export const AssistantDeploymentServiceService: IAssistantDeploymentServiceService;

export interface IAssistantDeploymentServiceServer extends grpc.UntypedServiceImplementation {
  createAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantApiDeploymentRequest, assistant_deployment_pb.AssistantApiDeploymentResponse>;
  getAssistantApiDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantApiDeploymentResponse>;
  createAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantWebpluginDeploymentRequest, assistant_deployment_pb.AssistantWebpluginDeploymentResponse>;
  getAssistantWebpluginDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantWebpluginDeploymentResponse>;
  createAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantDebuggerDeploymentRequest, assistant_deployment_pb.AssistantDebuggerDeploymentResponse>;
  getAssistantDebuggerDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantDebuggerDeploymentResponse>;
  createAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantWhatsappDeploymentRequest, assistant_deployment_pb.AssistantWhatsappDeploymentResponse>;
  getAssistantWhatsappDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantWhatsappDeploymentResponse>;
  createAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.CreateAssistantPhoneDeploymentRequest, assistant_deployment_pb.AssistantPhoneDeploymentResponse>;
  getAssistantPhoneDeployment: grpc.handleUnaryCall<assistant_deployment_pb.GetAssistantDeploymentRequest, assistant_deployment_pb.AssistantPhoneDeploymentResponse>;
}

export class AssistantDeploymentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantApiDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantApiDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantApiDeployment(argument: assistant_deployment_pb.CreateAssistantApiDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantApiDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantApiDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantWebpluginDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantWebpluginDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWebpluginDeployment(argument: assistant_deployment_pb.CreateAssistantWebpluginDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWebpluginDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWebpluginDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDebuggerDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDebuggerDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantDebuggerDeployment(argument: assistant_deployment_pb.CreateAssistantDebuggerDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantDebuggerDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantDebuggerDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantWhatsappDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantWhatsappDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantWhatsappDeployment(argument: assistant_deployment_pb.CreateAssistantWhatsappDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantWhatsappDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantWhatsappDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantPhoneDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantPhoneDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  createAssistantPhoneDeployment(argument: assistant_deployment_pb.CreateAssistantPhoneDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, callback: grpc.requestCallback<assistant_deployment_pb.AssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
  getAssistantPhoneDeployment(argument: assistant_deployment_pb.GetAssistantDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_deployment_pb.AssistantPhoneDeploymentResponse>): grpc.ClientUnaryCall;
}
