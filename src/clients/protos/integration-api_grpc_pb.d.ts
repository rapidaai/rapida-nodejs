// GENERATED CODE -- DO NOT EDIT!

// package: integration_api
// file: integration-api.proto

import * as integration_api_pb from "./integration-api_pb";
import * as grpc from "grpc";

interface IUnifiedProviderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.StreamChatRequest, integration_api_pb.StreamChatResponse>;
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.MethodDefinition<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const UnifiedProviderServiceService: IUnifiedProviderServiceService;

export interface IUnifiedProviderServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleBidiStreamingCall<integration_api_pb.StreamChatRequest, integration_api_pb.StreamChatResponse>;
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.handleUnaryCall<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class UnifiedProviderServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.StreamChatRequest, integration_api_pb.StreamChatResponse>;
  streamChat(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.StreamChatRequest, integration_api_pb.StreamChatResponse>;
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}
