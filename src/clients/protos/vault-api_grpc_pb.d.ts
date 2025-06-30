// GENERATED CODE -- DO NOT EDIT!

// package: vault_api
// file: vault-api.proto

import * as vault_api_pb from "./vault-api_pb";
import * as grpc from "grpc";

interface IVaultServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createProviderCredential: grpc.MethodDefinition<vault_api_pb.CreateProviderCredentialRequest, vault_api_pb.CreateProviderCredentialResponse>;
  createToolCredential: grpc.MethodDefinition<vault_api_pb.CreateToolCredentialRequest, vault_api_pb.CreateToolCredentialResponse>;
  deleteProviderCredential: grpc.MethodDefinition<vault_api_pb.DeleteProviderCredentialRequest, vault_api_pb.DeleteProviderCredentialResponse>;
  getAllOrganizationCredential: grpc.MethodDefinition<vault_api_pb.GetAllOrganizationCredentialRequest, vault_api_pb.GetAllOrganizationCredentialResponse>;
  getProviderCredential: grpc.MethodDefinition<vault_api_pb.GetProviderCredentialRequest, vault_api_pb.GetProviderCredentialResponse>;
  getOauth2VaultCredential: grpc.MethodDefinition<vault_api_pb.GetOauth2VaultCredentialRequest, vault_api_pb.GetOauth2VaultCredentialResponse>;
}

export const VaultServiceService: IVaultServiceService;

export interface IVaultServiceServer extends grpc.UntypedServiceImplementation {
  createProviderCredential: grpc.handleUnaryCall<vault_api_pb.CreateProviderCredentialRequest, vault_api_pb.CreateProviderCredentialResponse>;
  createToolCredential: grpc.handleUnaryCall<vault_api_pb.CreateToolCredentialRequest, vault_api_pb.CreateToolCredentialResponse>;
  deleteProviderCredential: grpc.handleUnaryCall<vault_api_pb.DeleteProviderCredentialRequest, vault_api_pb.DeleteProviderCredentialResponse>;
  getAllOrganizationCredential: grpc.handleUnaryCall<vault_api_pb.GetAllOrganizationCredentialRequest, vault_api_pb.GetAllOrganizationCredentialResponse>;
  getProviderCredential: grpc.handleUnaryCall<vault_api_pb.GetProviderCredentialRequest, vault_api_pb.GetProviderCredentialResponse>;
  getOauth2VaultCredential: grpc.handleUnaryCall<vault_api_pb.GetOauth2VaultCredentialRequest, vault_api_pb.GetOauth2VaultCredentialResponse>;
}

export class VaultServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createProviderCredential(argument: vault_api_pb.CreateProviderCredentialRequest, callback: grpc.requestCallback<vault_api_pb.CreateProviderCredentialResponse>): grpc.ClientUnaryCall;
  createProviderCredential(argument: vault_api_pb.CreateProviderCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.CreateProviderCredentialResponse>): grpc.ClientUnaryCall;
  createProviderCredential(argument: vault_api_pb.CreateProviderCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.CreateProviderCredentialResponse>): grpc.ClientUnaryCall;
  createToolCredential(argument: vault_api_pb.CreateToolCredentialRequest, callback: grpc.requestCallback<vault_api_pb.CreateToolCredentialResponse>): grpc.ClientUnaryCall;
  createToolCredential(argument: vault_api_pb.CreateToolCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.CreateToolCredentialResponse>): grpc.ClientUnaryCall;
  createToolCredential(argument: vault_api_pb.CreateToolCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.CreateToolCredentialResponse>): grpc.ClientUnaryCall;
  deleteProviderCredential(argument: vault_api_pb.DeleteProviderCredentialRequest, callback: grpc.requestCallback<vault_api_pb.DeleteProviderCredentialResponse>): grpc.ClientUnaryCall;
  deleteProviderCredential(argument: vault_api_pb.DeleteProviderCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.DeleteProviderCredentialResponse>): grpc.ClientUnaryCall;
  deleteProviderCredential(argument: vault_api_pb.DeleteProviderCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.DeleteProviderCredentialResponse>): grpc.ClientUnaryCall;
  getAllOrganizationCredential(argument: vault_api_pb.GetAllOrganizationCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetAllOrganizationCredentialResponse>): grpc.ClientUnaryCall;
  getAllOrganizationCredential(argument: vault_api_pb.GetAllOrganizationCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetAllOrganizationCredentialResponse>): grpc.ClientUnaryCall;
  getAllOrganizationCredential(argument: vault_api_pb.GetAllOrganizationCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetAllOrganizationCredentialResponse>): grpc.ClientUnaryCall;
  getProviderCredential(argument: vault_api_pb.GetProviderCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetProviderCredentialResponse>): grpc.ClientUnaryCall;
  getProviderCredential(argument: vault_api_pb.GetProviderCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetProviderCredentialResponse>): grpc.ClientUnaryCall;
  getProviderCredential(argument: vault_api_pb.GetProviderCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetProviderCredentialResponse>): grpc.ClientUnaryCall;
  getOauth2VaultCredential(argument: vault_api_pb.GetOauth2VaultCredentialRequest, callback: grpc.requestCallback<vault_api_pb.GetOauth2VaultCredentialResponse>): grpc.ClientUnaryCall;
  getOauth2VaultCredential(argument: vault_api_pb.GetOauth2VaultCredentialRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetOauth2VaultCredentialResponse>): grpc.ClientUnaryCall;
  getOauth2VaultCredential(argument: vault_api_pb.GetOauth2VaultCredentialRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<vault_api_pb.GetOauth2VaultCredentialResponse>): grpc.ClientUnaryCall;
}
