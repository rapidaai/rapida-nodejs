// GENERATED CODE -- DO NOT EDIT!

// package: integration_api
// file: integration-api.proto

import * as integration_api_pb from "./integration-api_pb";
import * as grpc from "grpc";

interface IBedrockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const BedrockServiceService: IBedrockServiceService;

export interface IBedrockServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class BedrockServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IOpenAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  generateTextToImage: grpc.MethodDefinition<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generateTextToSpeech: grpc.MethodDefinition<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  generateSpeechToText: grpc.MethodDefinition<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  getModeration: grpc.MethodDefinition<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export const OpenAiServiceService: IOpenAiServiceService;

export interface IOpenAiServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  generateTextToImage: grpc.handleUnaryCall<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generateTextToSpeech: grpc.handleUnaryCall<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  generateSpeechToText: grpc.handleUnaryCall<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  getModeration: grpc.handleUnaryCall<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export class OpenAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
}

interface IAzureServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  generateTextToImage: grpc.MethodDefinition<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generateTextToSpeech: grpc.MethodDefinition<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  generateSpeechToText: grpc.MethodDefinition<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  getModeration: grpc.MethodDefinition<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export const AzureServiceService: IAzureServiceService;

export interface IAzureServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  generateTextToImage: grpc.handleUnaryCall<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generateTextToSpeech: grpc.handleUnaryCall<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  generateSpeechToText: grpc.handleUnaryCall<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  getModeration: grpc.handleUnaryCall<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
}

export class AzureServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
}

interface IGoogleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const GoogleServiceService: IGoogleServiceService;

export interface IGoogleServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class GoogleServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IReplicateServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const ReplicateServiceService: IReplicateServiceService;

export interface IReplicateServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class ReplicateServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IAnthropicServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const AnthropicServiceService: IAnthropicServiceService;

export interface IAnthropicServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class AnthropicServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface ICohereServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.MethodDefinition<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const CohereServiceService: ICohereServiceService;

export interface ICohereServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.handleUnaryCall<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class CohereServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IHuggingfaceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const HuggingfaceServiceService: IHuggingfaceServiceService;

export interface IHuggingfaceServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class HuggingfaceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IMistralServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const MistralServiceService: IMistralServiceService;

export interface IMistralServiceServer extends grpc.UntypedServiceImplementation {
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class MistralServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IStabilityAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateTextToImage: grpc.MethodDefinition<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const StabilityAiServiceService: IStabilityAiServiceService;

export interface IStabilityAiServiceServer extends grpc.UntypedServiceImplementation {
  generateTextToImage: grpc.handleUnaryCall<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class StabilityAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface ITogetherAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateTextToImage: grpc.MethodDefinition<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const TogetherAiServiceService: ITogetherAiServiceService;

export interface ITogetherAiServiceServer extends grpc.UntypedServiceImplementation {
  generateTextToImage: grpc.handleUnaryCall<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class TogetherAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IDeepInfraServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateTextToImage: grpc.MethodDefinition<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const DeepInfraServiceService: IDeepInfraServiceService;

export interface IDeepInfraServiceServer extends grpc.UntypedServiceImplementation {
  generateTextToImage: grpc.handleUnaryCall<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class DeepInfraServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
}

interface IVoyageAiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.MethodDefinition<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export const VoyageAiServiceService: IVoyageAiServiceService;

export interface IVoyageAiServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  reranking: grpc.handleUnaryCall<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
}

export class VoyageAiServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
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

interface IDeepgramServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateSpeechToText: grpc.MethodDefinition<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  generateTextToSpeech: grpc.MethodDefinition<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  liveSpeechToText: grpc.MethodDefinition<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
}

export const DeepgramServiceService: IDeepgramServiceService;

export interface IDeepgramServiceServer extends grpc.UntypedServiceImplementation {
  generateSpeechToText: grpc.handleUnaryCall<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  generateTextToSpeech: grpc.handleUnaryCall<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  liveSpeechToText: grpc.handleBidiStreamingCall<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
}

export class DeepgramServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  generateSpeechToText(argument: integration_api_pb.GenerateSpeechToTextRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateSpeechToTextResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  liveSpeechToText(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  liveSpeechToText(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
}

interface IRapidaServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  embedding: grpc.MethodDefinition<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.MethodDefinition<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.MethodDefinition<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  generateTextToImage: grpc.MethodDefinition<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generateTextToSpeech: grpc.MethodDefinition<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.MethodDefinition<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  getModeration: grpc.MethodDefinition<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
  reranking: grpc.MethodDefinition<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  liveSpeechToText: grpc.MethodDefinition<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
}

export const RapidaServiceService: IRapidaServiceService;

export interface IRapidaServiceServer extends grpc.UntypedServiceImplementation {
  embedding: grpc.handleUnaryCall<integration_api_pb.EmbeddingRequest, integration_api_pb.EmbeddingResponse>;
  chat: grpc.handleUnaryCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  streamChat: grpc.handleServerStreamingCall<integration_api_pb.ChatRequest, integration_api_pb.ChatResponse>;
  generate: grpc.handleUnaryCall<integration_api_pb.GenerateRequest, integration_api_pb.GenerateResponse>;
  generateTextToImage: grpc.handleUnaryCall<integration_api_pb.GenerateTextToImageRequest, integration_api_pb.GenerateTextToImageResponse>;
  generateTextToSpeech: grpc.handleUnaryCall<integration_api_pb.GenerateTextToSpeechRequest, integration_api_pb.GenerateTextToSpeechResponse>;
  verifyCredential: grpc.handleUnaryCall<integration_api_pb.VerifyCredentialRequest, integration_api_pb.VerifyCredentialResponse>;
  getModeration: grpc.handleUnaryCall<integration_api_pb.GetModerationRequest, integration_api_pb.GetModerationResponse>;
  reranking: grpc.handleUnaryCall<integration_api_pb.RerankingRequest, integration_api_pb.RerankingResponse>;
  liveSpeechToText: grpc.handleBidiStreamingCall<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
}

export class RapidaServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  embedding(argument: integration_api_pb.EmbeddingRequest, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  embedding(argument: integration_api_pb.EmbeddingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.EmbeddingResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  chat(argument: integration_api_pb.ChatRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.ChatResponse>): grpc.ClientUnaryCall;
  streamChat(argument: integration_api_pb.ChatRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  streamChat(argument: integration_api_pb.ChatRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<integration_api_pb.ChatResponse>;
  generate(argument: integration_api_pb.GenerateRequest, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generate(argument: integration_api_pb.GenerateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToImage(argument: integration_api_pb.GenerateTextToImageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToImageResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  generateTextToSpeech(argument: integration_api_pb.GenerateTextToSpeechRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GenerateTextToSpeechResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  verifyCredential(argument: integration_api_pb.VerifyCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.VerifyCredentialResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  getModeration(argument: integration_api_pb.GetModerationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.GetModerationResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  reranking(argument: integration_api_pb.RerankingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<integration_api_pb.RerankingResponse>): grpc.ClientUnaryCall;
  liveSpeechToText(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
  liveSpeechToText(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<integration_api_pb.GenerateSpeechToTextRequest, integration_api_pb.GenerateSpeechToTextResponse>;
}
