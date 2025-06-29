// package: endpoint_api
// file: invoker-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as common_pb from "./common_pb";

export class InvokerError extends jspb.Message {
  getErrorcode(): string;
  setErrorcode(value: string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getHumanmessage(): string;
  setHumanmessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokerError.AsObject;
  static toObject(includeInstance: boolean, msg: InvokerError): InvokerError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokerError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokerError;
  static deserializeBinaryFromReader(message: InvokerError, reader: jspb.BinaryReader): InvokerError;
}

export namespace InvokerError {
  export type AsObject = {
    errorcode: string,
    errormessage: string,
    humanmessage: string,
  }
}

export class EndpointDefinition extends jspb.Message {
  getEndpointid(): string;
  setEndpointid(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointDefinition): EndpointDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointDefinition;
  static deserializeBinaryFromReader(message: EndpointDefinition, reader: jspb.BinaryReader): EndpointDefinition;
}

export namespace EndpointDefinition {
  export type AsObject = {
    endpointid: string,
    version: string,
  }
}

export class InvokeRequest extends jspb.Message {
  hasEndpoint(): boolean;
  clearEndpoint(): void;
  getEndpoint(): EndpointDefinition | undefined;
  setEndpoint(value?: EndpointDefinition): void;

  getArgsv1Map(): jspb.Map<string, string>;
  clearArgsv1Map(): void;
  getMetadatav1Map(): jspb.Map<string, string>;
  clearMetadatav1Map(): void;
  getOptionsv1Map(): jspb.Map<string, string>;
  clearOptionsv1Map(): void;
  getArgsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgsMap(): void;
  getMetadataMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetadataMap(): void;
  getOptionsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearOptionsMap(): void;
  getSource(): common_pb.SourceMap[keyof common_pb.SourceMap];
  setSource(value: common_pb.SourceMap[keyof common_pb.SourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeRequest): InvokeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeRequest;
  static deserializeBinaryFromReader(message: InvokeRequest, reader: jspb.BinaryReader): InvokeRequest;
}

export namespace InvokeRequest {
  export type AsObject = {
    endpoint?: EndpointDefinition.AsObject,
    argsv1Map: Array<[string, string]>,
    metadatav1Map: Array<[string, string]>,
    optionsv1Map: Array<[string, string]>,
    argsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    metadataMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    optionsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    source: common_pb.SourceMap[keyof common_pb.SourceMap],
  }
}

export class CallerResponse extends jspb.Message {
  getRequestid(): number;
  setRequestid(value: number): void;

  getResponse(): string;
  setResponse(value: string): void;

  getTimetaken(): number;
  setTimetaken(value: number): void;

  clearResponsesList(): void;
  getResponsesList(): Array<common_pb.Content>;
  setResponsesList(value: Array<common_pb.Content>): void;
  addResponses(value?: common_pb.Content, index?: number): common_pb.Content;

  hasError(): boolean;
  clearError(): void;
  getError(): InvokerError | undefined;
  setError(value?: InvokerError): void;

  clearMetricsList(): void;
  getMetricsList(): Array<common_pb.Metric>;
  setMetricsList(value: Array<common_pb.Metric>): void;
  addMetrics(value?: common_pb.Metric, index?: number): common_pb.Metric;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): google_protobuf_struct_pb.Struct | undefined;
  setMeta(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CallerResponse): CallerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallerResponse;
  static deserializeBinaryFromReader(message: CallerResponse, reader: jspb.BinaryReader): CallerResponse;
}

export namespace CallerResponse {
  export type AsObject = {
    requestid: number,
    response: string,
    timetaken: number,
    responsesList: Array<common_pb.Content.AsObject>,
    error?: InvokerError.AsObject,
    metricsList: Array<common_pb.Metric.AsObject>,
    meta?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class InvokeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): CallerResponse | undefined;
  setData(value?: CallerResponse): void;

  hasError(): boolean;
  clearError(): void;
  getError(): InvokerError | undefined;
  setError(value?: InvokerError): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvokeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InvokeResponse): InvokeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvokeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvokeResponse;
  static deserializeBinaryFromReader(message: InvokeResponse, reader: jspb.BinaryReader): InvokeResponse;
}

export namespace InvokeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: CallerResponse.AsObject,
    error?: InvokerError.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    requestid: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasError(): boolean;
  clearError(): void;
  getError(): InvokerError | undefined;
  setError(value?: InvokerError): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    error?: InvokerError.AsObject,
  }
}

export class ProbeRequest extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeRequest): ProbeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeRequest;
  static deserializeBinaryFromReader(message: ProbeRequest, reader: jspb.BinaryReader): ProbeRequest;
}

export namespace ProbeRequest {
  export type AsObject = {
    requestid: string,
  }
}

export class ProbeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Struct | undefined;
  setData(value?: google_protobuf_struct_pb.Struct): void;

  hasError(): boolean;
  clearError(): void;
  getError(): InvokerError | undefined;
  setError(value?: InvokerError): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProbeResponse): ProbeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbeResponse;
  static deserializeBinaryFromReader(message: ProbeResponse, reader: jspb.BinaryReader): ProbeResponse;
}

export namespace ProbeResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: google_protobuf_struct_pb.Struct.AsObject,
    error?: InvokerError.AsObject,
  }
}

