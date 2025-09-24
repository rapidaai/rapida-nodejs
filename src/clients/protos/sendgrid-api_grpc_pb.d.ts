// GENERATED CODE -- DO NOT EDIT!

// package: integration_api
// file: sendgrid-api.proto

import * as sendgrid_api_pb from "./sendgrid-api_pb";
import * as grpc from "grpc";

interface ISendgridServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  welcomeEmail: grpc.MethodDefinition<sendgrid_api_pb.WelcomeEmailRequest, sendgrid_api_pb.WelcomeEmailResponse>;
  resetPasswordEmail: grpc.MethodDefinition<sendgrid_api_pb.ResetPasswordEmailRequest, sendgrid_api_pb.ResetPasswordEmailResponse>;
  inviteMemberEmail: grpc.MethodDefinition<sendgrid_api_pb.InviteMemeberEmailRequest, sendgrid_api_pb.InviteMemeberEmailResponse>;
}

export const SendgridServiceService: ISendgridServiceService;

export interface ISendgridServiceServer extends grpc.UntypedServiceImplementation {
  welcomeEmail: grpc.handleUnaryCall<sendgrid_api_pb.WelcomeEmailRequest, sendgrid_api_pb.WelcomeEmailResponse>;
  resetPasswordEmail: grpc.handleUnaryCall<sendgrid_api_pb.ResetPasswordEmailRequest, sendgrid_api_pb.ResetPasswordEmailResponse>;
  inviteMemberEmail: grpc.handleUnaryCall<sendgrid_api_pb.InviteMemeberEmailRequest, sendgrid_api_pb.InviteMemeberEmailResponse>;
}

export class SendgridServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  welcomeEmail(argument: sendgrid_api_pb.WelcomeEmailRequest, callback: grpc.requestCallback<sendgrid_api_pb.WelcomeEmailResponse>): grpc.ClientUnaryCall;
  welcomeEmail(argument: sendgrid_api_pb.WelcomeEmailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<sendgrid_api_pb.WelcomeEmailResponse>): grpc.ClientUnaryCall;
  welcomeEmail(argument: sendgrid_api_pb.WelcomeEmailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<sendgrid_api_pb.WelcomeEmailResponse>): grpc.ClientUnaryCall;
  resetPasswordEmail(argument: sendgrid_api_pb.ResetPasswordEmailRequest, callback: grpc.requestCallback<sendgrid_api_pb.ResetPasswordEmailResponse>): grpc.ClientUnaryCall;
  resetPasswordEmail(argument: sendgrid_api_pb.ResetPasswordEmailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<sendgrid_api_pb.ResetPasswordEmailResponse>): grpc.ClientUnaryCall;
  resetPasswordEmail(argument: sendgrid_api_pb.ResetPasswordEmailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<sendgrid_api_pb.ResetPasswordEmailResponse>): grpc.ClientUnaryCall;
  inviteMemberEmail(argument: sendgrid_api_pb.InviteMemeberEmailRequest, callback: grpc.requestCallback<sendgrid_api_pb.InviteMemeberEmailResponse>): grpc.ClientUnaryCall;
  inviteMemberEmail(argument: sendgrid_api_pb.InviteMemeberEmailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<sendgrid_api_pb.InviteMemeberEmailResponse>): grpc.ClientUnaryCall;
  inviteMemberEmail(argument: sendgrid_api_pb.InviteMemeberEmailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<sendgrid_api_pb.InviteMemeberEmailResponse>): grpc.ClientUnaryCall;
}
