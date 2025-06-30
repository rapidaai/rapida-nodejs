// GENERATED CODE -- DO NOT EDIT!

// package: assistant_api
// file: assistant-api.proto

import * as assistant_api_pb from "./assistant-api_pb";
import * as common_pb from "./common_pb";
import * as grpc from "grpc";

interface IAssistantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAssistant: grpc.MethodDefinition<assistant_api_pb.GetAssistantRequest, assistant_api_pb.GetAssistantResponse>;
  getAllAssistant: grpc.MethodDefinition<assistant_api_pb.GetAllAssistantRequest, assistant_api_pb.GetAllAssistantResponse>;
  getAllAssistantProviderModel: grpc.MethodDefinition<assistant_api_pb.GetAllAssistantProviderModelRequest, assistant_api_pb.GetAllAssistantProviderModelResponse>;
  createAssistant: grpc.MethodDefinition<assistant_api_pb.CreateAssistantRequest, assistant_api_pb.CreateAssistantResponse>;
  createAssistantProviderModel: grpc.MethodDefinition<assistant_api_pb.CreateAssistantProviderModelRequest, assistant_api_pb.CreateAssistantProviderModelResponse>;
  createAssistantKnowledgeConfiguration: grpc.MethodDefinition<assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest, assistant_api_pb.GetAssistantResponse>;
  createAssistantTag: grpc.MethodDefinition<assistant_api_pb.CreateAssistantTagRequest, assistant_api_pb.GetAssistantResponse>;
  updateAssistantVersion: grpc.MethodDefinition<assistant_api_pb.UpdateAssistantVersionRequest, assistant_api_pb.UpdateAssistantVersionResponse>;
  updateAssistantDetail: grpc.MethodDefinition<assistant_api_pb.UpdateAssistantDetailRequest, assistant_api_pb.GetAssistantResponse>;
  getAllAssistantMessage: grpc.MethodDefinition<assistant_api_pb.GetAllAssistantMessageRequest, assistant_api_pb.GetAllAssistantMessageResponse>;
  getAllAssistantConversation: grpc.MethodDefinition<common_pb.GetAllAssistantConversationRequest, common_pb.GetAllAssistantConversationResponse>;
  getAllConversationMessage: grpc.MethodDefinition<common_pb.GetAllConversationMessageRequest, common_pb.GetAllConversationMessageResponse>;
  createAssistantToolConfiguration: grpc.MethodDefinition<assistant_api_pb.CreateAssistantToolConfigurationRequest, assistant_api_pb.GetAssistantResponse>;
  getAllAssistantTool: grpc.MethodDefinition<assistant_api_pb.GetAllAssistantToolRequest, assistant_api_pb.GetAllAssistantToolResponse>;
}

export const AssistantServiceService: IAssistantServiceService;

export interface IAssistantServiceServer extends grpc.UntypedServiceImplementation {
  getAssistant: grpc.handleUnaryCall<assistant_api_pb.GetAssistantRequest, assistant_api_pb.GetAssistantResponse>;
  getAllAssistant: grpc.handleUnaryCall<assistant_api_pb.GetAllAssistantRequest, assistant_api_pb.GetAllAssistantResponse>;
  getAllAssistantProviderModel: grpc.handleUnaryCall<assistant_api_pb.GetAllAssistantProviderModelRequest, assistant_api_pb.GetAllAssistantProviderModelResponse>;
  createAssistant: grpc.handleUnaryCall<assistant_api_pb.CreateAssistantRequest, assistant_api_pb.CreateAssistantResponse>;
  createAssistantProviderModel: grpc.handleUnaryCall<assistant_api_pb.CreateAssistantProviderModelRequest, assistant_api_pb.CreateAssistantProviderModelResponse>;
  createAssistantKnowledgeConfiguration: grpc.handleUnaryCall<assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest, assistant_api_pb.GetAssistantResponse>;
  createAssistantTag: grpc.handleUnaryCall<assistant_api_pb.CreateAssistantTagRequest, assistant_api_pb.GetAssistantResponse>;
  updateAssistantVersion: grpc.handleUnaryCall<assistant_api_pb.UpdateAssistantVersionRequest, assistant_api_pb.UpdateAssistantVersionResponse>;
  updateAssistantDetail: grpc.handleUnaryCall<assistant_api_pb.UpdateAssistantDetailRequest, assistant_api_pb.GetAssistantResponse>;
  getAllAssistantMessage: grpc.handleUnaryCall<assistant_api_pb.GetAllAssistantMessageRequest, assistant_api_pb.GetAllAssistantMessageResponse>;
  getAllAssistantConversation: grpc.handleUnaryCall<common_pb.GetAllAssistantConversationRequest, common_pb.GetAllAssistantConversationResponse>;
  getAllConversationMessage: grpc.handleUnaryCall<common_pb.GetAllConversationMessageRequest, common_pb.GetAllConversationMessageResponse>;
  createAssistantToolConfiguration: grpc.handleUnaryCall<assistant_api_pb.CreateAssistantToolConfigurationRequest, assistant_api_pb.GetAssistantResponse>;
  getAllAssistantTool: grpc.handleUnaryCall<assistant_api_pb.GetAllAssistantToolRequest, assistant_api_pb.GetAllAssistantToolResponse>;
}

export class AssistantServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAssistant(argument: assistant_api_pb.GetAssistantRequest, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  getAssistant(argument: assistant_api_pb.GetAssistantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  getAssistant(argument: assistant_api_pb.GetAssistantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  getAllAssistant(argument: assistant_api_pb.GetAllAssistantRequest, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantResponse>): grpc.ClientUnaryCall;
  getAllAssistant(argument: assistant_api_pb.GetAllAssistantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantResponse>): grpc.ClientUnaryCall;
  getAllAssistant(argument: assistant_api_pb.GetAllAssistantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantResponse>): grpc.ClientUnaryCall;
  getAllAssistantProviderModel(argument: assistant_api_pb.GetAllAssistantProviderModelRequest, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantProviderModelResponse>): grpc.ClientUnaryCall;
  getAllAssistantProviderModel(argument: assistant_api_pb.GetAllAssistantProviderModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantProviderModelResponse>): grpc.ClientUnaryCall;
  getAllAssistantProviderModel(argument: assistant_api_pb.GetAllAssistantProviderModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantProviderModelResponse>): grpc.ClientUnaryCall;
  createAssistant(argument: assistant_api_pb.CreateAssistantRequest, callback: grpc.requestCallback<assistant_api_pb.CreateAssistantResponse>): grpc.ClientUnaryCall;
  createAssistant(argument: assistant_api_pb.CreateAssistantRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.CreateAssistantResponse>): grpc.ClientUnaryCall;
  createAssistant(argument: assistant_api_pb.CreateAssistantRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.CreateAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantProviderModel(argument: assistant_api_pb.CreateAssistantProviderModelRequest, callback: grpc.requestCallback<assistant_api_pb.CreateAssistantProviderModelResponse>): grpc.ClientUnaryCall;
  createAssistantProviderModel(argument: assistant_api_pb.CreateAssistantProviderModelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.CreateAssistantProviderModelResponse>): grpc.ClientUnaryCall;
  createAssistantProviderModel(argument: assistant_api_pb.CreateAssistantProviderModelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.CreateAssistantProviderModelResponse>): grpc.ClientUnaryCall;
  createAssistantKnowledgeConfiguration(argument: assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantKnowledgeConfiguration(argument: assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantKnowledgeConfiguration(argument: assistant_api_pb.CreateAssistantKnowledgeConfigurationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantTag(argument: assistant_api_pb.CreateAssistantTagRequest, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantTag(argument: assistant_api_pb.CreateAssistantTagRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantTag(argument: assistant_api_pb.CreateAssistantTagRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  updateAssistantVersion(argument: assistant_api_pb.UpdateAssistantVersionRequest, callback: grpc.requestCallback<assistant_api_pb.UpdateAssistantVersionResponse>): grpc.ClientUnaryCall;
  updateAssistantVersion(argument: assistant_api_pb.UpdateAssistantVersionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.UpdateAssistantVersionResponse>): grpc.ClientUnaryCall;
  updateAssistantVersion(argument: assistant_api_pb.UpdateAssistantVersionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.UpdateAssistantVersionResponse>): grpc.ClientUnaryCall;
  updateAssistantDetail(argument: assistant_api_pb.UpdateAssistantDetailRequest, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  updateAssistantDetail(argument: assistant_api_pb.UpdateAssistantDetailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  updateAssistantDetail(argument: assistant_api_pb.UpdateAssistantDetailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  getAllAssistantMessage(argument: assistant_api_pb.GetAllAssistantMessageRequest, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantMessageResponse>): grpc.ClientUnaryCall;
  getAllAssistantMessage(argument: assistant_api_pb.GetAllAssistantMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantMessageResponse>): grpc.ClientUnaryCall;
  getAllAssistantMessage(argument: assistant_api_pb.GetAllAssistantMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantMessageResponse>): grpc.ClientUnaryCall;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  createAssistantToolConfiguration(argument: assistant_api_pb.CreateAssistantToolConfigurationRequest, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantToolConfiguration(argument: assistant_api_pb.CreateAssistantToolConfigurationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  createAssistantToolConfiguration(argument: assistant_api_pb.CreateAssistantToolConfigurationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAssistantResponse>): grpc.ClientUnaryCall;
  getAllAssistantTool(argument: assistant_api_pb.GetAllAssistantToolRequest, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantToolResponse>): grpc.ClientUnaryCall;
  getAllAssistantTool(argument: assistant_api_pb.GetAllAssistantToolRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantToolResponse>): grpc.ClientUnaryCall;
  getAllAssistantTool(argument: assistant_api_pb.GetAllAssistantToolRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllAssistantToolResponse>): grpc.ClientUnaryCall;
}

interface IToolServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllTool: grpc.MethodDefinition<assistant_api_pb.GetAllToolRequest, assistant_api_pb.GetAllToolResponse>;
  getTool: grpc.MethodDefinition<assistant_api_pb.GetToolRequest, assistant_api_pb.GetToolResponse>;
}

export const ToolServiceService: IToolServiceService;

export interface IToolServiceServer extends grpc.UntypedServiceImplementation {
  getAllTool: grpc.handleUnaryCall<assistant_api_pb.GetAllToolRequest, assistant_api_pb.GetAllToolResponse>;
  getTool: grpc.handleUnaryCall<assistant_api_pb.GetToolRequest, assistant_api_pb.GetToolResponse>;
}

export class ToolServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllTool(argument: assistant_api_pb.GetAllToolRequest, callback: grpc.requestCallback<assistant_api_pb.GetAllToolResponse>): grpc.ClientUnaryCall;
  getAllTool(argument: assistant_api_pb.GetAllToolRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllToolResponse>): grpc.ClientUnaryCall;
  getAllTool(argument: assistant_api_pb.GetAllToolRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetAllToolResponse>): grpc.ClientUnaryCall;
  getTool(argument: assistant_api_pb.GetToolRequest, callback: grpc.requestCallback<assistant_api_pb.GetToolResponse>): grpc.ClientUnaryCall;
  getTool(argument: assistant_api_pb.GetToolRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetToolResponse>): grpc.ClientUnaryCall;
  getTool(argument: assistant_api_pb.GetToolRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<assistant_api_pb.GetToolResponse>): grpc.ClientUnaryCall;
}
