// GENERATED CODE -- DO NOT EDIT!

// package: billing_api
// file: billing-api.proto

import * as billing_api_pb from "./billing-api_pb";
import * as grpc from "grpc";

interface IBillingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAllPlans: grpc.MethodDefinition<billing_api_pb.GetAllPlansRequest, billing_api_pb.GetAllPlansResponse>;
  getSubscription: grpc.MethodDefinition<billing_api_pb.GetSubscriptionRequest, billing_api_pb.GetSubscriptionResponse>;
  updateSubscription: grpc.MethodDefinition<billing_api_pb.UpdateSubscriptionRequest, billing_api_pb.UpdateSubscriptionResponse>;
}

export const BillingServiceService: IBillingServiceService;

export interface IBillingServiceServer extends grpc.UntypedServiceImplementation {
  getAllPlans: grpc.handleUnaryCall<billing_api_pb.GetAllPlansRequest, billing_api_pb.GetAllPlansResponse>;
  getSubscription: grpc.handleUnaryCall<billing_api_pb.GetSubscriptionRequest, billing_api_pb.GetSubscriptionResponse>;
  updateSubscription: grpc.handleUnaryCall<billing_api_pb.UpdateSubscriptionRequest, billing_api_pb.UpdateSubscriptionResponse>;
}

export class BillingServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAllPlans(argument: billing_api_pb.GetAllPlansRequest, callback: grpc.requestCallback<billing_api_pb.GetAllPlansResponse>): grpc.ClientUnaryCall;
  getAllPlans(argument: billing_api_pb.GetAllPlansRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<billing_api_pb.GetAllPlansResponse>): grpc.ClientUnaryCall;
  getAllPlans(argument: billing_api_pb.GetAllPlansRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<billing_api_pb.GetAllPlansResponse>): grpc.ClientUnaryCall;
  getSubscription(argument: billing_api_pb.GetSubscriptionRequest, callback: grpc.requestCallback<billing_api_pb.GetSubscriptionResponse>): grpc.ClientUnaryCall;
  getSubscription(argument: billing_api_pb.GetSubscriptionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<billing_api_pb.GetSubscriptionResponse>): grpc.ClientUnaryCall;
  getSubscription(argument: billing_api_pb.GetSubscriptionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<billing_api_pb.GetSubscriptionResponse>): grpc.ClientUnaryCall;
  updateSubscription(argument: billing_api_pb.UpdateSubscriptionRequest, callback: grpc.requestCallback<billing_api_pb.UpdateSubscriptionResponse>): grpc.ClientUnaryCall;
  updateSubscription(argument: billing_api_pb.UpdateSubscriptionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<billing_api_pb.UpdateSubscriptionResponse>): grpc.ClientUnaryCall;
  updateSubscription(argument: billing_api_pb.UpdateSubscriptionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<billing_api_pb.UpdateSubscriptionResponse>): grpc.ClientUnaryCall;
}
