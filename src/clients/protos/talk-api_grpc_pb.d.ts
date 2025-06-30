// GENERATED CODE -- DO NOT EDIT!

// package: talk_api
// file: talk-api.proto

import * as talk_api_pb from "./talk-api_pb";
import * as common_pb from "./common_pb";
import * as grpc from "grpc";

interface ITalkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  assistantMessaging: grpc.MethodDefinition<talk_api_pb.AssistantMessagingRequest, talk_api_pb.AssistantMessagingResponse>;
  assistantTalk: grpc.MethodDefinition<talk_api_pb.AssistantMessagingRequest, talk_api_pb.AssistantMessagingResponse>;
  getAllAssistantConversation: grpc.MethodDefinition<common_pb.GetAllAssistantConversationRequest, common_pb.GetAllAssistantConversationResponse>;
  getAllConversationMessage: grpc.MethodDefinition<common_pb.GetAllConversationMessageRequest, common_pb.GetAllConversationMessageResponse>;
  createMessageMetric: grpc.MethodDefinition<talk_api_pb.CreateMessageMetricRequest, talk_api_pb.CreateMessageMetricResponse>;
  createConversationMetric: grpc.MethodDefinition<talk_api_pb.CreateConversationMetricRequest, talk_api_pb.CreateConversationMetricResponse>;
  initiateAssistantTalk: grpc.MethodDefinition<talk_api_pb.InitiateAssistantTalkRequest, talk_api_pb.InitiateAssistantTalkResponse>;
  initiateBulkAssistantTalk: grpc.MethodDefinition<talk_api_pb.InitiateBulkAssistantTalkRequest, talk_api_pb.InitiateBulkAssistantTalkResponse>;
}

export const TalkServiceService: ITalkServiceService;

export interface ITalkServiceServer extends grpc.UntypedServiceImplementation {
  assistantMessaging: grpc.handleServerStreamingCall<talk_api_pb.AssistantMessagingRequest, talk_api_pb.AssistantMessagingResponse>;
  assistantTalk: grpc.handleBidiStreamingCall<talk_api_pb.AssistantMessagingRequest, talk_api_pb.AssistantMessagingResponse>;
  getAllAssistantConversation: grpc.handleUnaryCall<common_pb.GetAllAssistantConversationRequest, common_pb.GetAllAssistantConversationResponse>;
  getAllConversationMessage: grpc.handleUnaryCall<common_pb.GetAllConversationMessageRequest, common_pb.GetAllConversationMessageResponse>;
  createMessageMetric: grpc.handleUnaryCall<talk_api_pb.CreateMessageMetricRequest, talk_api_pb.CreateMessageMetricResponse>;
  createConversationMetric: grpc.handleUnaryCall<talk_api_pb.CreateConversationMetricRequest, talk_api_pb.CreateConversationMetricResponse>;
  initiateAssistantTalk: grpc.handleUnaryCall<talk_api_pb.InitiateAssistantTalkRequest, talk_api_pb.InitiateAssistantTalkResponse>;
  initiateBulkAssistantTalk: grpc.handleUnaryCall<talk_api_pb.InitiateBulkAssistantTalkRequest, talk_api_pb.InitiateBulkAssistantTalkResponse>;
}

export class TalkServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  assistantMessaging(argument: talk_api_pb.AssistantMessagingRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<talk_api_pb.AssistantMessagingResponse>;
  assistantMessaging(argument: talk_api_pb.AssistantMessagingRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<talk_api_pb.AssistantMessagingResponse>;
  assistantTalk(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<talk_api_pb.AssistantMessagingRequest, talk_api_pb.AssistantMessagingResponse>;
  assistantTalk(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<talk_api_pb.AssistantMessagingRequest, talk_api_pb.AssistantMessagingResponse>;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllAssistantConversation(argument: common_pb.GetAllAssistantConversationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllAssistantConversationResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  getAllConversationMessage(argument: common_pb.GetAllConversationMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_pb.GetAllConversationMessageResponse>): grpc.ClientUnaryCall;
  createMessageMetric(argument: talk_api_pb.CreateMessageMetricRequest, callback: grpc.requestCallback<talk_api_pb.CreateMessageMetricResponse>): grpc.ClientUnaryCall;
  createMessageMetric(argument: talk_api_pb.CreateMessageMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateMessageMetricResponse>): grpc.ClientUnaryCall;
  createMessageMetric(argument: talk_api_pb.CreateMessageMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateMessageMetricResponse>): grpc.ClientUnaryCall;
  createConversationMetric(argument: talk_api_pb.CreateConversationMetricRequest, callback: grpc.requestCallback<talk_api_pb.CreateConversationMetricResponse>): grpc.ClientUnaryCall;
  createConversationMetric(argument: talk_api_pb.CreateConversationMetricRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateConversationMetricResponse>): grpc.ClientUnaryCall;
  createConversationMetric(argument: talk_api_pb.CreateConversationMetricRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.CreateConversationMetricResponse>): grpc.ClientUnaryCall;
  initiateAssistantTalk(argument: talk_api_pb.InitiateAssistantTalkRequest, callback: grpc.requestCallback<talk_api_pb.InitiateAssistantTalkResponse>): grpc.ClientUnaryCall;
  initiateAssistantTalk(argument: talk_api_pb.InitiateAssistantTalkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.InitiateAssistantTalkResponse>): grpc.ClientUnaryCall;
  initiateAssistantTalk(argument: talk_api_pb.InitiateAssistantTalkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.InitiateAssistantTalkResponse>): grpc.ClientUnaryCall;
  initiateBulkAssistantTalk(argument: talk_api_pb.InitiateBulkAssistantTalkRequest, callback: grpc.requestCallback<talk_api_pb.InitiateBulkAssistantTalkResponse>): grpc.ClientUnaryCall;
  initiateBulkAssistantTalk(argument: talk_api_pb.InitiateBulkAssistantTalkRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.InitiateBulkAssistantTalkResponse>): grpc.ClientUnaryCall;
  initiateBulkAssistantTalk(argument: talk_api_pb.InitiateBulkAssistantTalkRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<talk_api_pb.InitiateBulkAssistantTalkResponse>): grpc.ClientUnaryCall;
}
