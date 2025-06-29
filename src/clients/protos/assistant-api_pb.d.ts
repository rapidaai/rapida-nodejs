// package: assistant_api
// file: assistant-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as assistant_deployment_pb from "./assistant-deployment_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AssistantTool extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getToolid(): string;
  setToolid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): google_protobuf_struct_pb.Struct | undefined;
  setOptions(value?: google_protobuf_struct_pb.Struct): void;

  hasTool(): boolean;
  clearTool(): void;
  getTool(): Tool | undefined;
  setTool(value?: Tool): void;

  getCode(): string;
  setCode(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantTool.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantTool): AssistantTool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantTool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantTool;
  static deserializeBinaryFromReader(message: AssistantTool, reader: jspb.BinaryReader): AssistantTool;
}

export namespace AssistantTool {
  export type AsObject = {
    id: string,
    assistantid: string,
    toolid: string,
    name: string,
    projectid: string,
    organizationid: string,
    options?: google_protobuf_struct_pb.Struct.AsObject,
    tool?: Tool.AsObject,
    code: string,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Assistant extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  clearAssistanttoolsList(): void;
  getAssistanttoolsList(): Array<AssistantTool>;
  setAssistanttoolsList(value: Array<AssistantTool>): void;
  addAssistanttools(value?: AssistantTool, index?: number): AssistantTool;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getAssistantprovidermodelid(): string;
  setAssistantprovidermodelid(value: string): void;

  hasAssistantprovidermodel(): boolean;
  clearAssistantprovidermodel(): void;
  getAssistantprovidermodel(): AssistantProviderModel | undefined;
  setAssistantprovidermodel(value?: AssistantProviderModel): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasAssistanttag(): boolean;
  clearAssistanttag(): void;
  getAssistanttag(): common_pb.Tag | undefined;
  setAssistanttag(value?: common_pb.Tag): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): common_pb.Organization | undefined;
  setOrganization(value?: common_pb.Organization): void;

  clearAssistantknowledgeconfigurationsList(): void;
  getAssistantknowledgeconfigurationsList(): Array<AssistantKnowledgeConfiguration>;
  setAssistantknowledgeconfigurationsList(value: Array<AssistantKnowledgeConfiguration>): void;
  addAssistantknowledgeconfigurations(value?: AssistantKnowledgeConfiguration, index?: number): AssistantKnowledgeConfiguration;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): common_pb.User | undefined;
  setCreateduser(value?: common_pb.User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): common_pb.User | undefined;
  setUpdateduser(value?: common_pb.User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAppappearance(): boolean;
  clearAppappearance(): void;
  getAppappearance(): google_protobuf_struct_pb.Struct | undefined;
  setAppappearance(value?: google_protobuf_struct_pb.Struct): void;

  hasWebappearance(): boolean;
  clearWebappearance(): void;
  getWebappearance(): google_protobuf_struct_pb.Struct | undefined;
  setWebappearance(value?: google_protobuf_struct_pb.Struct): void;

  hasDebuggerdeployment(): boolean;
  clearDebuggerdeployment(): void;
  getDebuggerdeployment(): assistant_deployment_pb.AssistantDebuggerDeployment | undefined;
  setDebuggerdeployment(value?: assistant_deployment_pb.AssistantDebuggerDeployment): void;

  hasPhonedeployment(): boolean;
  clearPhonedeployment(): void;
  getPhonedeployment(): assistant_deployment_pb.AssistantPhoneDeployment | undefined;
  setPhonedeployment(value?: assistant_deployment_pb.AssistantPhoneDeployment): void;

  hasWhatsappdeployment(): boolean;
  clearWhatsappdeployment(): void;
  getWhatsappdeployment(): assistant_deployment_pb.AssistantWhatsappDeployment | undefined;
  setWhatsappdeployment(value?: assistant_deployment_pb.AssistantWhatsappDeployment): void;

  hasWebplugindeployment(): boolean;
  clearWebplugindeployment(): void;
  getWebplugindeployment(): assistant_deployment_pb.AssistantWebpluginDeployment | undefined;
  setWebplugindeployment(value?: assistant_deployment_pb.AssistantWebpluginDeployment): void;

  hasApideployment(): boolean;
  clearApideployment(): void;
  getApideployment(): assistant_deployment_pb.AssistantApiDeployment | undefined;
  setApideployment(value?: assistant_deployment_pb.AssistantApiDeployment): void;

  clearAssistantconversationsList(): void;
  getAssistantconversationsList(): Array<common_pb.AssistantConversation>;
  setAssistantconversationsList(value: Array<common_pb.AssistantConversation>): void;
  addAssistantconversations(value?: common_pb.AssistantConversation, index?: number): common_pb.AssistantConversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Assistant.AsObject;
  static toObject(includeInstance: boolean, msg: Assistant): Assistant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Assistant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Assistant;
  static deserializeBinaryFromReader(message: Assistant, reader: jspb.BinaryReader): Assistant;
}

export namespace Assistant {
  export type AsObject = {
    id: string,
    status: string,
    visibility: string,
    source: string,
    sourceidentifier: string,
    assistanttoolsList: Array<AssistantTool.AsObject>,
    projectid: string,
    organizationid: string,
    assistantprovidermodelid: string,
    assistantprovidermodel?: AssistantProviderModel.AsObject,
    name: string,
    description: string,
    assistanttag?: common_pb.Tag.AsObject,
    language: string,
    organization?: common_pb.Organization.AsObject,
    assistantknowledgeconfigurationsList: Array<AssistantKnowledgeConfiguration.AsObject>,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    appappearance?: google_protobuf_struct_pb.Struct.AsObject,
    webappearance?: google_protobuf_struct_pb.Struct.AsObject,
    debuggerdeployment?: assistant_deployment_pb.AssistantDebuggerDeployment.AsObject,
    phonedeployment?: assistant_deployment_pb.AssistantPhoneDeployment.AsObject,
    whatsappdeployment?: assistant_deployment_pb.AssistantWhatsappDeployment.AsObject,
    webplugindeployment?: assistant_deployment_pb.AssistantWebpluginDeployment.AsObject,
    apideployment?: assistant_deployment_pb.AssistantApiDeployment.AsObject,
    assistantconversationsList: Array<common_pb.AssistantConversation.AsObject>,
  }
}

export class AssistantProviderModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): common_pb.AgentPromptTemplate | undefined;
  setTemplate(value?: common_pb.AgentPromptTemplate): void;

  getDescription(): string;
  setDescription(value: string): void;

  getProviderid(): string;
  setProviderid(value: string): void;

  getModelmodetype(): string;
  setModelmodetype(value: string): void;

  getProvidermodelid(): string;
  setProvidermodelid(value: string): void;

  hasProvidermodel(): boolean;
  clearProvidermodel(): void;
  getProvidermodel(): common_pb.ProviderModel | undefined;
  setProvidermodel(value?: common_pb.ProviderModel): void;

  clearAssistantprovidermodelparametersList(): void;
  getAssistantprovidermodelparametersList(): Array<common_pb.ProviderModelParameter>;
  setAssistantprovidermodelparametersList(value: Array<common_pb.ProviderModelParameter>): void;
  addAssistantprovidermodelparameters(value?: common_pb.ProviderModelParameter, index?: number): common_pb.ProviderModelParameter;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): common_pb.User | undefined;
  setCreateduser(value?: common_pb.User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): common_pb.User | undefined;
  setUpdateduser(value?: common_pb.User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantProviderModel.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderModel): AssistantProviderModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderModel;
  static deserializeBinaryFromReader(message: AssistantProviderModel, reader: jspb.BinaryReader): AssistantProviderModel;
}

export namespace AssistantProviderModel {
  export type AsObject = {
    id: string,
    template?: common_pb.AgentPromptTemplate.AsObject,
    description: string,
    providerid: string,
    modelmodetype: string,
    providermodelid: string,
    providermodel?: common_pb.ProviderModel.AsObject,
    assistantprovidermodelparametersList: Array<common_pb.ProviderModelParameter.AsObject>,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantKnowledgeConfiguration extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  getRerankerprovidermodelid(): string;
  setRerankerprovidermodelid(value: string): void;

  hasRerankerprovidermodel(): boolean;
  clearRerankerprovidermodel(): void;
  getRerankerprovidermodel(): common_pb.ProviderModel | undefined;
  setRerankerprovidermodel(value?: common_pb.ProviderModel): void;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  hasKnowledge(): boolean;
  clearKnowledge(): void;
  getKnowledge(): common_pb.Knowledge | undefined;
  setKnowledge(value?: common_pb.Knowledge): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantKnowledgeConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantKnowledgeConfiguration): AssistantKnowledgeConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantKnowledgeConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantKnowledgeConfiguration;
  static deserializeBinaryFromReader(message: AssistantKnowledgeConfiguration, reader: jspb.BinaryReader): AssistantKnowledgeConfiguration;
}

export namespace AssistantKnowledgeConfiguration {
  export type AsObject = {
    id: string,
    knowledgeid: string,
    rerankerenable: boolean,
    rerankerprovidermodelid: string,
    rerankerprovidermodel?: common_pb.ProviderModel.AsObject,
    topk: number,
    scorethreshold: number,
    knowledge?: common_pb.Knowledge.AsObject,
    retrievalmethod: string,
  }
}

export class AssistantProviderModelAttribute extends jspb.Message {
  getDescription(): string;
  setDescription(value: string): void;

  hasTemplate(): boolean;
  clearTemplate(): void;
  getTemplate(): common_pb.AgentPromptTemplate | undefined;
  setTemplate(value?: common_pb.AgentPromptTemplate): void;

  getProviderid(): string;
  setProviderid(value: string): void;

  getProvidermodelid(): string;
  setProvidermodelid(value: string): void;

  hasProvidermodel(): boolean;
  clearProvidermodel(): void;
  getProvidermodel(): common_pb.ProviderModel | undefined;
  setProvidermodel(value?: common_pb.ProviderModel): void;

  clearAssistantprovidermodelparametersList(): void;
  getAssistantprovidermodelparametersList(): Array<common_pb.ProviderModelParameter>;
  setAssistantprovidermodelparametersList(value: Array<common_pb.ProviderModelParameter>): void;
  addAssistantprovidermodelparameters(value?: common_pb.ProviderModelParameter, index?: number): common_pb.ProviderModelParameter;

  getModelmodetype(): string;
  setModelmodetype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantProviderModelAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantProviderModelAttribute): AssistantProviderModelAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantProviderModelAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantProviderModelAttribute;
  static deserializeBinaryFromReader(message: AssistantProviderModelAttribute, reader: jspb.BinaryReader): AssistantProviderModelAttribute;
}

export namespace AssistantProviderModelAttribute {
  export type AsObject = {
    description: string,
    template?: common_pb.AgentPromptTemplate.AsObject,
    providerid: string,
    providermodelid: string,
    providermodel?: common_pb.ProviderModel.AsObject,
    assistantprovidermodelparametersList: Array<common_pb.ProviderModelParameter.AsObject>,
    modelmodetype: string,
  }
}

export class AssistantAttribute extends jspb.Message {
  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantAttribute): AssistantAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantAttribute;
  static deserializeBinaryFromReader(message: AssistantAttribute, reader: jspb.BinaryReader): AssistantAttribute;
}

export namespace AssistantAttribute {
  export type AsObject = {
    source: string,
    sourceidentifier: string,
    name: string,
    description: string,
    visibility: string,
    language: string,
  }
}

export class AssistantKnowledgeConfigurationAttribute extends jspb.Message {
  getKnowledgeid(): string;
  setKnowledgeid(value: string): void;

  getRerankerenable(): boolean;
  setRerankerenable(value: boolean): void;

  getRerankerprovidermodelid(): string;
  setRerankerprovidermodelid(value: string): void;

  getTopk(): number;
  setTopk(value: number): void;

  getScorethreshold(): number;
  setScorethreshold(value: number): void;

  getRetrievalmethod(): string;
  setRetrievalmethod(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantKnowledgeConfigurationAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantKnowledgeConfigurationAttribute): AssistantKnowledgeConfigurationAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantKnowledgeConfigurationAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantKnowledgeConfigurationAttribute;
  static deserializeBinaryFromReader(message: AssistantKnowledgeConfigurationAttribute, reader: jspb.BinaryReader): AssistantKnowledgeConfigurationAttribute;
}

export namespace AssistantKnowledgeConfigurationAttribute {
  export type AsObject = {
    knowledgeid: string,
    rerankerenable: boolean,
    rerankerprovidermodelid: string,
    topk: number,
    scorethreshold: number,
    retrievalmethod: string,
    active: boolean,
  }
}

export class AssistantToolConfigurationAttribute extends jspb.Message {
  getToolid(): string;
  setToolid(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  hasOptions(): boolean;
  clearOptions(): void;
  getOptions(): google_protobuf_struct_pb.Struct | undefined;
  setOptions(value?: google_protobuf_struct_pb.Struct): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantToolConfigurationAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantToolConfigurationAttribute): AssistantToolConfigurationAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantToolConfigurationAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantToolConfigurationAttribute;
  static deserializeBinaryFromReader(message: AssistantToolConfigurationAttribute, reader: jspb.BinaryReader): AssistantToolConfigurationAttribute;
}

export namespace AssistantToolConfigurationAttribute {
  export type AsObject = {
    toolid: string,
    code: string,
    options?: google_protobuf_struct_pb.Struct.AsObject,
    status: string,
  }
}

export class CreateAssistantRequest extends jspb.Message {
  hasAssistantprovidermodelattribute(): boolean;
  clearAssistantprovidermodelattribute(): void;
  getAssistantprovidermodelattribute(): AssistantProviderModelAttribute | undefined;
  setAssistantprovidermodelattribute(value?: AssistantProviderModelAttribute): void;

  hasAssistantattribute(): boolean;
  clearAssistantattribute(): void;
  getAssistantattribute(): AssistantAttribute | undefined;
  setAssistantattribute(value?: AssistantAttribute): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearAssistantknowledgeconfigurationattributesList(): void;
  getAssistantknowledgeconfigurationattributesList(): Array<AssistantKnowledgeConfigurationAttribute>;
  setAssistantknowledgeconfigurationattributesList(value: Array<AssistantKnowledgeConfigurationAttribute>): void;
  addAssistantknowledgeconfigurationattributes(value?: AssistantKnowledgeConfigurationAttribute, index?: number): AssistantKnowledgeConfigurationAttribute;

  clearAssistanttoolconfigurationattributeList(): void;
  getAssistanttoolconfigurationattributeList(): Array<AssistantToolConfigurationAttribute>;
  setAssistanttoolconfigurationattributeList(value: Array<AssistantToolConfigurationAttribute>): void;
  addAssistanttoolconfigurationattribute(value?: AssistantToolConfigurationAttribute, index?: number): AssistantToolConfigurationAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantRequest): CreateAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantRequest;
  static deserializeBinaryFromReader(message: CreateAssistantRequest, reader: jspb.BinaryReader): CreateAssistantRequest;
}

export namespace CreateAssistantRequest {
  export type AsObject = {
    assistantprovidermodelattribute?: AssistantProviderModelAttribute.AsObject,
    assistantattribute?: AssistantAttribute.AsObject,
    tagsList: Array<string>,
    assistantknowledgeconfigurationattributesList: Array<AssistantKnowledgeConfigurationAttribute.AsObject>,
    assistanttoolconfigurationattributeList: Array<AssistantToolConfigurationAttribute.AsObject>,
  }
}

export class CreateAssistantProviderModelRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasAssistantprovidermodelattribute(): boolean;
  clearAssistantprovidermodelattribute(): void;
  getAssistantprovidermodelattribute(): AssistantProviderModelAttribute | undefined;
  setAssistantprovidermodelattribute(value?: AssistantProviderModelAttribute): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantProviderModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantProviderModelRequest): CreateAssistantProviderModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantProviderModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderModelRequest;
  static deserializeBinaryFromReader(message: CreateAssistantProviderModelRequest, reader: jspb.BinaryReader): CreateAssistantProviderModelRequest;
}

export namespace CreateAssistantProviderModelRequest {
  export type AsObject = {
    assistantid: string,
    assistantprovidermodelattribute?: AssistantProviderModelAttribute.AsObject,
  }
}

export class CreateAssistantProviderModelResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): AssistantProviderModel | undefined;
  setData(value?: AssistantProviderModel): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantProviderModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantProviderModelResponse): CreateAssistantProviderModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantProviderModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantProviderModelResponse;
  static deserializeBinaryFromReader(message: CreateAssistantProviderModelResponse, reader: jspb.BinaryReader): CreateAssistantProviderModelResponse;
}

export namespace CreateAssistantProviderModelResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: AssistantProviderModel.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateAssistantResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Assistant | undefined;
  setData(value?: Assistant): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantResponse): CreateAssistantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantResponse;
  static deserializeBinaryFromReader(message: CreateAssistantResponse, reader: jspb.BinaryReader): CreateAssistantResponse;
}

export namespace CreateAssistantResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Assistant.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class CreateAssistantKnowledgeConfigurationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  clearAssistantknowledgeconfigurationattributesList(): void;
  getAssistantknowledgeconfigurationattributesList(): Array<AssistantKnowledgeConfigurationAttribute>;
  setAssistantknowledgeconfigurationattributesList(value: Array<AssistantKnowledgeConfigurationAttribute>): void;
  addAssistantknowledgeconfigurationattributes(value?: AssistantKnowledgeConfigurationAttribute, index?: number): AssistantKnowledgeConfigurationAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantKnowledgeConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantKnowledgeConfigurationRequest): CreateAssistantKnowledgeConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantKnowledgeConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantKnowledgeConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateAssistantKnowledgeConfigurationRequest, reader: jspb.BinaryReader): CreateAssistantKnowledgeConfigurationRequest;
}

export namespace CreateAssistantKnowledgeConfigurationRequest {
  export type AsObject = {
    assistantid: string,
    assistantknowledgeconfigurationattributesList: Array<AssistantKnowledgeConfigurationAttribute.AsObject>,
  }
}

export class CreateAssistantToolConfigurationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  clearAssistanttoolconfigurationattributeList(): void;
  getAssistanttoolconfigurationattributeList(): Array<AssistantToolConfigurationAttribute>;
  setAssistanttoolconfigurationattributeList(value: Array<AssistantToolConfigurationAttribute>): void;
  addAssistanttoolconfigurationattribute(value?: AssistantToolConfigurationAttribute, index?: number): AssistantToolConfigurationAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantToolConfigurationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantToolConfigurationRequest): CreateAssistantToolConfigurationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantToolConfigurationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantToolConfigurationRequest;
  static deserializeBinaryFromReader(message: CreateAssistantToolConfigurationRequest, reader: jspb.BinaryReader): CreateAssistantToolConfigurationRequest;
}

export namespace CreateAssistantToolConfigurationRequest {
  export type AsObject = {
    assistantid: string,
    assistanttoolconfigurationattributeList: Array<AssistantToolConfigurationAttribute.AsObject>,
  }
}

export class CreateAssistantTagRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssistantTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssistantTagRequest): CreateAssistantTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssistantTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssistantTagRequest;
  static deserializeBinaryFromReader(message: CreateAssistantTagRequest, reader: jspb.BinaryReader): CreateAssistantTagRequest;
}

export namespace CreateAssistantTagRequest {
  export type AsObject = {
    assistantid: string,
    tagsList: Array<string>,
  }
}

export class GetAssistantRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasAssistantprovidermodelid(): boolean;
  clearAssistantprovidermodelid(): void;
  getAssistantprovidermodelid(): string;
  setAssistantprovidermodelid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantRequest): GetAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantRequest;
  static deserializeBinaryFromReader(message: GetAssistantRequest, reader: jspb.BinaryReader): GetAssistantRequest;
}

export namespace GetAssistantRequest {
  export type AsObject = {
    id: string,
    assistantprovidermodelid: string,
  }
}

export class GetAssistantResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Assistant | undefined;
  setData(value?: Assistant): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAssistantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAssistantResponse): GetAssistantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAssistantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAssistantResponse;
  static deserializeBinaryFromReader(message: GetAssistantResponse, reader: jspb.BinaryReader): GetAssistantResponse;
}

export namespace GetAssistantResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Assistant.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllAssistantRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantRequest): GetAllAssistantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantRequest, reader: jspb.BinaryReader): GetAllAssistantRequest;
}

export namespace GetAllAssistantRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Assistant>;
  setDataList(value: Array<Assistant>): void;
  addData(value?: Assistant, index?: number): Assistant;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantResponse): GetAllAssistantResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantResponse, reader: jspb.BinaryReader): GetAllAssistantResponse;
}

export namespace GetAllAssistantResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Assistant.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllAssistantProviderModelRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantProviderModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantProviderModelRequest): GetAllAssistantProviderModelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantProviderModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantProviderModelRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantProviderModelRequest, reader: jspb.BinaryReader): GetAllAssistantProviderModelRequest;
}

export namespace GetAllAssistantProviderModelRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    assistantid: string,
  }
}

export class GetAllAssistantProviderModelResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantProviderModel>;
  setDataList(value: Array<AssistantProviderModel>): void;
  addData(value?: AssistantProviderModel, index?: number): AssistantProviderModel;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantProviderModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantProviderModelResponse): GetAllAssistantProviderModelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantProviderModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantProviderModelResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantProviderModelResponse, reader: jspb.BinaryReader): GetAllAssistantProviderModelResponse;
}

export namespace GetAllAssistantProviderModelResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantProviderModel.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllAssistantMessageRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): common_pb.Ordering | undefined;
  setOrder(value?: common_pb.Ordering): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantMessageRequest): GetAllAssistantMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantMessageRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantMessageRequest, reader: jspb.BinaryReader): GetAllAssistantMessageRequest;
}

export namespace GetAllAssistantMessageRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    assistantid: string,
    order?: common_pb.Ordering.AsObject,
  }
}

export class GetAllAssistantMessageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.AssistantConversationMessage>;
  setDataList(value: Array<common_pb.AssistantConversationMessage>): void;
  addData(value?: common_pb.AssistantConversationMessage, index?: number): common_pb.AssistantConversationMessage;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantMessageResponse): GetAllAssistantMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantMessageResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantMessageResponse, reader: jspb.BinaryReader): GetAllAssistantMessageResponse;
}

export namespace GetAllAssistantMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.AssistantConversationMessage.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class UpdateAssistantVersionRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantprovidermodelid(): string;
  setAssistantprovidermodelid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantVersionRequest): UpdateAssistantVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantVersionRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantVersionRequest, reader: jspb.BinaryReader): UpdateAssistantVersionRequest;
}

export namespace UpdateAssistantVersionRequest {
  export type AsObject = {
    assistantid: string,
    assistantprovidermodelid: string,
  }
}

export class UpdateAssistantVersionResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Assistant | undefined;
  setData(value?: Assistant): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantVersionResponse): UpdateAssistantVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantVersionResponse;
  static deserializeBinaryFromReader(message: UpdateAssistantVersionResponse, reader: jspb.BinaryReader): UpdateAssistantVersionResponse;
}

export namespace UpdateAssistantVersionResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Assistant.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class UpdateAssistantDetailRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAssistantDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAssistantDetailRequest): UpdateAssistantDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAssistantDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAssistantDetailRequest;
  static deserializeBinaryFromReader(message: UpdateAssistantDetailRequest, reader: jspb.BinaryReader): UpdateAssistantDetailRequest;
}

export namespace UpdateAssistantDetailRequest {
  export type AsObject = {
    assistantid: string,
    name: string,
    description: string,
  }
}

export class GetAllAssistantUserConversationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  getSource(): common_pb.SourceMap[keyof common_pb.SourceMap];
  setSource(value: common_pb.SourceMap[keyof common_pb.SourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantUserConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantUserConversationRequest): GetAllAssistantUserConversationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantUserConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantUserConversationRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantUserConversationRequest, reader: jspb.BinaryReader): GetAllAssistantUserConversationRequest;
}

export namespace GetAllAssistantUserConversationRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
    source: common_pb.SourceMap[keyof common_pb.SourceMap],
  }
}

export class GetAllAssistantUserConversationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<common_pb.AssistantConversation>;
  setDataList(value: Array<common_pb.AssistantConversation>): void;
  addData(value?: common_pb.AssistantConversation, index?: number): common_pb.AssistantConversation;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantUserConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantUserConversationResponse): GetAllAssistantUserConversationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantUserConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantUserConversationResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantUserConversationResponse, reader: jspb.BinaryReader): GetAllAssistantUserConversationResponse;
}

export namespace GetAllAssistantUserConversationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<common_pb.AssistantConversation.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class GetAllAssistantToolRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolRequest): GetAllAssistantToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantToolRequest, reader: jspb.BinaryReader): GetAllAssistantToolRequest;
}

export namespace GetAllAssistantToolRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllAssistantToolResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantTool>;
  setDataList(value: Array<AssistantTool>): void;
  addData(value?: AssistantTool, index?: number): AssistantTool;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantToolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantToolResponse): GetAllAssistantToolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantToolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantToolResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantToolResponse, reader: jspb.BinaryReader): GetAllAssistantToolResponse;
}

export namespace GetAllAssistantToolResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantTool.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class Tool extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasSetupoptions(): boolean;
  clearSetupoptions(): void;
  getSetupoptions(): google_protobuf_struct_pb.Struct | undefined;
  setSetupoptions(value?: google_protobuf_struct_pb.Struct): void;

  hasIntializeoptions(): boolean;
  clearIntializeoptions(): void;
  getIntializeoptions(): google_protobuf_struct_pb.Struct | undefined;
  setIntializeoptions(value?: google_protobuf_struct_pb.Struct): void;

  getIcon(): string;
  setIcon(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tool.AsObject;
  static toObject(includeInstance: boolean, msg: Tool): Tool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tool;
  static deserializeBinaryFromReader(message: Tool, reader: jspb.BinaryReader): Tool;
}

export namespace Tool {
  export type AsObject = {
    id: string,
    code: string,
    name: string,
    description: string,
    setupoptions?: google_protobuf_struct_pb.Struct.AsObject,
    intializeoptions?: google_protobuf_struct_pb.Struct.AsObject,
    icon: string,
    visibility: string,
  }
}

export class GetToolRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetToolRequest): GetToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetToolRequest;
  static deserializeBinaryFromReader(message: GetToolRequest, reader: jspb.BinaryReader): GetToolRequest;
}

export namespace GetToolRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetToolResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Tool | undefined;
  setData(value?: Tool): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetToolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetToolResponse): GetToolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetToolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetToolResponse;
  static deserializeBinaryFromReader(message: GetToolResponse, reader: jspb.BinaryReader): GetToolResponse;
}

export namespace GetToolResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Tool.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllToolRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllToolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllToolRequest): GetAllToolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllToolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllToolRequest;
  static deserializeBinaryFromReader(message: GetAllToolRequest, reader: jspb.BinaryReader): GetAllToolRequest;
}

export namespace GetAllToolRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllToolResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Tool>;
  setDataList(value: Array<Tool>): void;
  addData(value?: Tool, index?: number): Tool;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllToolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllToolResponse): GetAllToolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllToolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllToolResponse;
  static deserializeBinaryFromReader(message: GetAllToolResponse, reader: jspb.BinaryReader): GetAllToolResponse;
}

export namespace GetAllToolResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Tool.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

