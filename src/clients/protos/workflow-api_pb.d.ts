// package: workflow_api
// file: workflow-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class Workflow extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearEdgesList(): void;
  getEdgesList(): Array<Edge>;
  setEdgesList(value: Array<Edge>): void;
  addEdges(value?: Edge, index?: number): Edge;

  clearFlownodesList(): void;
  getFlownodesList(): Array<FlowNode>;
  setFlownodesList(value: Array<FlowNode>): void;
  addFlownodes(value?: FlowNode, index?: number): FlowNode;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  hasWorkflowtag(): boolean;
  clearWorkflowtag(): void;
  getWorkflowtag(): common_pb.Tag | undefined;
  setWorkflowtag(value?: common_pb.Tag): void;

  getWorkflowversionid(): string;
  setWorkflowversionid(value: string): void;

  hasWorkflowversion(): boolean;
  clearWorkflowversion(): void;
  getWorkflowversion(): WorkflowVersion | undefined;
  setWorkflowversion(value?: WorkflowVersion): void;

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
  toObject(includeInstance?: boolean): Workflow.AsObject;
  static toObject(includeInstance: boolean, msg: Workflow): Workflow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Workflow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workflow;
  static deserializeBinaryFromReader(message: Workflow, reader: jspb.BinaryReader): Workflow;
}

export namespace Workflow {
  export type AsObject = {
    id: string,
    edgesList: Array<Edge.AsObject>,
    flownodesList: Array<FlowNode.AsObject>,
    name: string,
    description: string,
    source: string,
    sourceidentifier: string,
    visibility: string,
    workflowtag?: common_pb.Tag.AsObject,
    workflowversionid: string,
    workflowversion?: WorkflowVersion.AsObject,
    status: string,
    createdby: string,
    createduser?: common_pb.User.AsObject,
    updatedby: string,
    updateduser?: common_pb.User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class WorkflowVersion extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getWorkflowjson(): string;
  setWorkflowjson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowVersion.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowVersion): WorkflowVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowVersion;
  static deserializeBinaryFromReader(message: WorkflowVersion, reader: jspb.BinaryReader): WorkflowVersion;
}

export namespace WorkflowVersion {
  export type AsObject = {
    id: string,
    workflowjson: string,
  }
}

export class Edge extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIn(): string;
  setIn(value: string): void;

  getOut(): string;
  setOut(value: string): void;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): string;
  setCondition(value: string): void;

  hasConditionaltaskid(): boolean;
  clearConditionaltaskid(): void;
  getConditionaltaskid(): number;
  setConditionaltaskid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Edge.AsObject;
  static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Edge;
  static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
  export type AsObject = {
    id: string,
    pb_in: string,
    out: string,
    condition: string,
    conditionaltaskid: number,
  }
}

export class FlowNode extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  clearNodeinputsList(): void;
  getNodeinputsList(): Array<NodeInputs>;
  setNodeinputsList(value: Array<NodeInputs>): void;
  addNodeinputs(value?: NodeInputs, index?: number): NodeInputs;

  hasInputtask(): boolean;
  clearInputtask(): void;
  getInputtask(): InputTask | undefined;
  setInputtask(value?: InputTask): void;

  hasEndpointtask(): boolean;
  clearEndpointtask(): void;
  getEndpointtask(): EndpointTask | undefined;
  setEndpointtask(value?: EndpointTask): void;

  hasOutputtask(): boolean;
  clearOutputtask(): void;
  getOutputtask(): OutputTask | undefined;
  setOutputtask(value?: OutputTask): void;

  hasConditionaltask(): boolean;
  clearConditionaltask(): void;
  getConditionaltask(): ConditionalTask | undefined;
  setConditionaltask(value?: ConditionalTask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlowNode.AsObject;
  static toObject(includeInstance: boolean, msg: FlowNode): FlowNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlowNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlowNode;
  static deserializeBinaryFromReader(message: FlowNode, reader: jspb.BinaryReader): FlowNode;
}

export namespace FlowNode {
  export type AsObject = {
    id: string,
    type: string,
    nodeinputsList: Array<NodeInputs.AsObject>,
    inputtask?: InputTask.AsObject,
    endpointtask?: EndpointTask.AsObject,
    outputtask?: OutputTask.AsObject,
    conditionaltask?: ConditionalTask.AsObject,
  }
}

export class NodeInputs extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFlownodeid(): string;
  setFlownodeid(value: string): void;

  getInputid(): string;
  setInputid(value: string): void;

  hasVariable(): boolean;
  clearVariable(): void;
  getVariable(): WorkflowVariable | undefined;
  setVariable(value?: WorkflowVariable): void;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): string;
  setIdentifier(value: string): void;

  getInputtype(): string;
  setInputtype(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeInputs.AsObject;
  static toObject(includeInstance: boolean, msg: NodeInputs): NodeInputs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeInputs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeInputs;
  static deserializeBinaryFromReader(message: NodeInputs, reader: jspb.BinaryReader): NodeInputs;
}

export namespace NodeInputs {
  export type AsObject = {
    id: string,
    flownodeid: string,
    inputid: string,
    variable?: WorkflowVariable.AsObject,
    identifier: string,
    inputtype: string,
    name: string,
  }
}

export class WorkflowVariable extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getVariabletype(): string;
  setVariabletype(value: string): void;

  getValuetype(): string;
  setValuetype(value: string): void;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): string;
  setIdentifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowVariable.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowVariable): WorkflowVariable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowVariable;
  static deserializeBinaryFromReader(message: WorkflowVariable, reader: jspb.BinaryReader): WorkflowVariable;
}

export namespace WorkflowVariable {
  export type AsObject = {
    id: string,
    variabletype: string,
    valuetype: string,
    defaultvalue: string,
    name: string,
    identifier: string,
  }
}

export class RunWorkflowRequest extends jspb.Message {
  getWorkflowid(): string;
  setWorkflowid(value: string): void;

  clearVariablesList(): void;
  getVariablesList(): Array<WorkflowVariable>;
  setVariablesList(value: Array<WorkflowVariable>): void;
  addVariables(value?: WorkflowVariable, index?: number): WorkflowVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunWorkflowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunWorkflowRequest): RunWorkflowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunWorkflowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunWorkflowRequest;
  static deserializeBinaryFromReader(message: RunWorkflowRequest, reader: jspb.BinaryReader): RunWorkflowRequest;
}

export namespace RunWorkflowRequest {
  export type AsObject = {
    workflowid: string,
    variablesList: Array<WorkflowVariable.AsObject>,
  }
}

export class GetWorkflowRequest extends jspb.Message {
  getWorkflowid(): string;
  setWorkflowid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowRequest): GetWorkflowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkflowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowRequest;
  static deserializeBinaryFromReader(message: GetWorkflowRequest, reader: jspb.BinaryReader): GetWorkflowRequest;
}

export namespace GetWorkflowRequest {
  export type AsObject = {
    workflowid: string,
  }
}

export class EndpointTask extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEndpointid(): string;
  setEndpointid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointTask.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointTask): EndpointTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointTask;
  static deserializeBinaryFromReader(message: EndpointTask, reader: jspb.BinaryReader): EndpointTask;
}

export namespace EndpointTask {
  export type AsObject = {
    id: string,
    endpointid: string,
  }
}

export class OutputTask extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearOutputsList(): void;
  getOutputsList(): Array<Outputs>;
  setOutputsList(value: Array<Outputs>): void;
  addOutputs(value?: Outputs, index?: number): Outputs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputTask.AsObject;
  static toObject(includeInstance: boolean, msg: OutputTask): OutputTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputTask;
  static deserializeBinaryFromReader(message: OutputTask, reader: jspb.BinaryReader): OutputTask;
}

export namespace OutputTask {
  export type AsObject = {
    id: string,
    outputsList: Array<Outputs.AsObject>,
  }
}

export class ConditionalTask extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearConditionsList(): void;
  getConditionsList(): Array<Condition>;
  setConditionsList(value: Array<Condition>): void;
  addConditions(value?: Condition, index?: number): Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalTask.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalTask): ConditionalTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalTask;
  static deserializeBinaryFromReader(message: ConditionalTask, reader: jspb.BinaryReader): ConditionalTask;
}

export namespace ConditionalTask {
  export type AsObject = {
    id: string,
    conditionsList: Array<Condition.AsObject>,
  }
}

export class Condition extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getConditionaltaskid(): string;
  setConditionaltaskid(value: string): void;

  getType(): string;
  setType(value: string): void;

  getPrecedence(): number;
  setPrecedence(value: number): void;

  clearRulegroupsList(): void;
  getRulegroupsList(): Array<RuleGroup>;
  setRulegroupsList(value: Array<RuleGroup>): void;
  addRulegroups(value?: RuleGroup, index?: number): RuleGroup;

  clearRulegroupedgesList(): void;
  getRulegroupedgesList(): Array<Edge>;
  setRulegroupedgesList(value: Array<Edge>): void;
  addRulegroupedges(value?: Edge, index?: number): Edge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    id: string,
    conditionaltaskid: string,
    type: string,
    precedence: number,
    rulegroupsList: Array<RuleGroup.AsObject>,
    rulegroupedgesList: Array<Edge.AsObject>,
  }
}

export class RuleGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getConditionid(): string;
  setConditionid(value: string): void;

  getPrecedence(): number;
  setPrecedence(value: number): void;

  hasConnectingoperator(): boolean;
  clearConnectingoperator(): void;
  getConnectingoperator(): string;
  setConnectingoperator(value: string): void;

  clearRulesList(): void;
  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): void;
  addRules(value?: Rule, index?: number): Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleGroup.AsObject;
  static toObject(includeInstance: boolean, msg: RuleGroup): RuleGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuleGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleGroup;
  static deserializeBinaryFromReader(message: RuleGroup, reader: jspb.BinaryReader): RuleGroup;
}

export namespace RuleGroup {
  export type AsObject = {
    id: string,
    conditionid: string,
    precedence: number,
    connectingoperator: string,
    rulesList: Array<Rule.AsObject>,
  }
}

export class Rule extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRulegroupid(): string;
  setRulegroupid(value: string): void;

  getOperatorname(): string;
  setOperatorname(value: string): void;

  getPrecedence(): number;
  setPrecedence(value: number): void;

  hasConnectingoperator(): boolean;
  clearConnectingoperator(): void;
  getConnectingoperator(): string;
  setConnectingoperator(value: string): void;

  clearRulevariablesList(): void;
  getRulevariablesList(): Array<RuleVariable>;
  setRulevariablesList(value: Array<RuleVariable>): void;
  addRulevariables(value?: RuleVariable, index?: number): RuleVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
}

export namespace Rule {
  export type AsObject = {
    id: string,
    rulegroupid: string,
    operatorname: string,
    precedence: number,
    connectingoperator: string,
    rulevariablesList: Array<RuleVariable.AsObject>,
  }
}

export class RuleVariable extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPosition(): string;
  setPosition(value: string): void;

  getVariabletype(): string;
  setVariabletype(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleVariable.AsObject;
  static toObject(includeInstance: boolean, msg: RuleVariable): RuleVariable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuleVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleVariable;
  static deserializeBinaryFromReader(message: RuleVariable, reader: jspb.BinaryReader): RuleVariable;
}

export namespace RuleVariable {
  export type AsObject = {
    id: string,
    position: string,
    variabletype: string,
    value: string,
  }
}

export class Outputs extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOutputtaskid(): string;
  setOutputtaskid(value: string): void;

  getOutputid(): string;
  setOutputid(value: string): void;

  getOutputtype(): string;
  setOutputtype(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Outputs.AsObject;
  static toObject(includeInstance: boolean, msg: Outputs): Outputs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Outputs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Outputs;
  static deserializeBinaryFromReader(message: Outputs, reader: jspb.BinaryReader): Outputs;
}

export namespace Outputs {
  export type AsObject = {
    id: string,
    outputtaskid: string,
    outputid: string,
    outputtype: string,
  }
}

export class InputTask extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputTask.AsObject;
  static toObject(includeInstance: boolean, msg: InputTask): InputTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InputTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputTask;
  static deserializeBinaryFromReader(message: InputTask, reader: jspb.BinaryReader): InputTask;
}

export namespace InputTask {
  export type AsObject = {
    id: string,
  }
}

export class RunWorkflowResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getWorkflowid(): string;
  setWorkflowid(value: string): void;

  getWorkflowrunid(): string;
  setWorkflowrunid(value: string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunWorkflowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunWorkflowResponse): RunWorkflowResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunWorkflowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunWorkflowResponse;
  static deserializeBinaryFromReader(message: RunWorkflowResponse, reader: jspb.BinaryReader): RunWorkflowResponse;
}

export namespace RunWorkflowResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    workflowid: string,
    workflowrunid: string,
    error?: common_pb.Error.AsObject,
  }
}

export class GetWorkflowResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Workflow | undefined;
  setData(value?: Workflow): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowResponse): GetWorkflowResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkflowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowResponse;
  static deserializeBinaryFromReader(message: GetWorkflowResponse, reader: jspb.BinaryReader): GetWorkflowResponse;
}

export namespace GetWorkflowResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: Workflow.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class GetAllWorkflowRequest extends jspb.Message {
  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): common_pb.Paginate | undefined;
  setPaginate(value?: common_pb.Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<common_pb.Criteria>;
  setCriteriasList(value: Array<common_pb.Criteria>): void;
  addCriterias(value?: common_pb.Criteria, index?: number): common_pb.Criteria;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllWorkflowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllWorkflowRequest): GetAllWorkflowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllWorkflowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllWorkflowRequest;
  static deserializeBinaryFromReader(message: GetAllWorkflowRequest, reader: jspb.BinaryReader): GetAllWorkflowRequest;
}

export namespace GetAllWorkflowRequest {
  export type AsObject = {
    paginate?: common_pb.Paginate.AsObject,
    criteriasList: Array<common_pb.Criteria.AsObject>,
  }
}

export class GetAllWorkflowResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<Workflow>;
  setDataList(value: Array<Workflow>): void;
  addData(value?: Workflow, index?: number): Workflow;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): common_pb.Paginated | undefined;
  setPaginated(value?: common_pb.Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllWorkflowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllWorkflowResponse): GetAllWorkflowResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllWorkflowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllWorkflowResponse;
  static deserializeBinaryFromReader(message: GetAllWorkflowResponse, reader: jspb.BinaryReader): GetAllWorkflowResponse;
}

export namespace GetAllWorkflowResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<Workflow.AsObject>,
    error?: common_pb.Error.AsObject,
    paginated?: common_pb.Paginated.AsObject,
  }
}

export class WorkflowAttributes extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSourceidentifier(): string;
  setSourceidentifier(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  clearEdgesList(): void;
  getEdgesList(): Array<Edge>;
  setEdgesList(value: Array<Edge>): void;
  addEdges(value?: Edge, index?: number): Edge;

  clearFlownodesList(): void;
  getFlownodesList(): Array<FlowNode>;
  setFlownodesList(value: Array<FlowNode>): void;
  addFlownodes(value?: FlowNode, index?: number): FlowNode;

  getWorkflow(): string;
  setWorkflow(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowAttributes.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowAttributes): WorkflowAttributes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowAttributes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowAttributes;
  static deserializeBinaryFromReader(message: WorkflowAttributes, reader: jspb.BinaryReader): WorkflowAttributes;
}

export namespace WorkflowAttributes {
  export type AsObject = {
    name: string,
    description: string,
    source: string,
    sourceidentifier: string,
    visibility: string,
    tagsList: Array<string>,
    edgesList: Array<Edge.AsObject>,
    flownodesList: Array<FlowNode.AsObject>,
    workflow: string,
  }
}

export class CreateWorkflowRequest extends jspb.Message {
  hasWorkflowattributes(): boolean;
  clearWorkflowattributes(): void;
  getWorkflowattributes(): WorkflowAttributes | undefined;
  setWorkflowattributes(value?: WorkflowAttributes): void;

  clearVariablesList(): void;
  getVariablesList(): Array<WorkflowVariable>;
  setVariablesList(value: Array<WorkflowVariable>): void;
  addVariables(value?: WorkflowVariable, index?: number): WorkflowVariable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkflowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkflowRequest): CreateWorkflowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorkflowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkflowRequest;
  static deserializeBinaryFromReader(message: CreateWorkflowRequest, reader: jspb.BinaryReader): CreateWorkflowRequest;
}

export namespace CreateWorkflowRequest {
  export type AsObject = {
    workflowattributes?: WorkflowAttributes.AsObject,
    variablesList: Array<WorkflowVariable.AsObject>,
  }
}

export class GetWorkflowRunOutputRequest extends jspb.Message {
  getWorkflowid(): string;
  setWorkflowid(value: string): void;

  getWorkflowrunid(): string;
  setWorkflowrunid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowRunOutputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowRunOutputRequest): GetWorkflowRunOutputRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkflowRunOutputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowRunOutputRequest;
  static deserializeBinaryFromReader(message: GetWorkflowRunOutputRequest, reader: jspb.BinaryReader): GetWorkflowRunOutputRequest;
}

export namespace GetWorkflowRunOutputRequest {
  export type AsObject = {
    workflowid: string,
    workflowrunid: string,
  }
}

export class GetWorkflowRunOutputResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  hasData(): boolean;
  clearData(): void;
  getData(): WorkflowRunResponse | undefined;
  setData(value?: WorkflowRunResponse): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkflowRunOutputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkflowRunOutputResponse): GetWorkflowRunOutputResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWorkflowRunOutputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkflowRunOutputResponse;
  static deserializeBinaryFromReader(message: GetWorkflowRunOutputResponse, reader: jspb.BinaryReader): GetWorkflowRunOutputResponse;
}

export namespace GetWorkflowRunOutputResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    data?: WorkflowRunResponse.AsObject,
    error?: common_pb.Error.AsObject,
  }
}

export class WorkflowRunResponse extends jspb.Message {
  getWorkflowrunid(): string;
  setWorkflowrunid(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  clearOutputsList(): void;
  getOutputsList(): Array<WorkflowOutput>;
  setOutputsList(value: Array<WorkflowOutput>): void;
  addOutputs(value?: WorkflowOutput, index?: number): WorkflowOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowRunResponse): WorkflowRunResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowRunResponse;
  static deserializeBinaryFromReader(message: WorkflowRunResponse, reader: jspb.BinaryReader): WorkflowRunResponse;
}

export namespace WorkflowRunResponse {
  export type AsObject = {
    workflowrunid: string,
    status: string,
    outputsList: Array<WorkflowOutput.AsObject>,
  }
}

export class WorkflowOutput extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getWorkflowrunid(): string;
  setWorkflowrunid(value: string): void;

  getFlownodeid(): string;
  setFlownodeid(value: string): void;

  getOutput(): string;
  setOutput(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getOutputtype(): string;
  setOutputtype(value: string): void;

  hasResponsecode(): boolean;
  clearResponsecode(): void;
  getResponsecode(): number;
  setResponsecode(value: number): void;

  hasFlownode(): boolean;
  clearFlownode(): void;
  getFlownode(): FlowNode | undefined;
  setFlownode(value?: FlowNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkflowOutput.AsObject;
  static toObject(includeInstance: boolean, msg: WorkflowOutput): WorkflowOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorkflowOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkflowOutput;
  static deserializeBinaryFromReader(message: WorkflowOutput, reader: jspb.BinaryReader): WorkflowOutput;
}

export namespace WorkflowOutput {
  export type AsObject = {
    id: string,
    workflowrunid: string,
    flownodeid: string,
    output: string,
    status: string,
    outputtype: string,
    responsecode: number,
    flownode?: FlowNode.AsObject,
  }
}

export class CreateWorkflowTagRequest extends jspb.Message {
  getWorkflowid(): string;
  setWorkflowid(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkflowTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkflowTagRequest): CreateWorkflowTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateWorkflowTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkflowTagRequest;
  static deserializeBinaryFromReader(message: CreateWorkflowTagRequest, reader: jspb.BinaryReader): CreateWorkflowTagRequest;
}

export namespace CreateWorkflowTagRequest {
  export type AsObject = {
    workflowid: string,
    tagsList: Array<string>,
  }
}

export class PublishWorkflowVersionRequest extends jspb.Message {
  getWorkflowid(): string;
  setWorkflowid(value: string): void;

  getWorkflowjson(): string;
  setWorkflowjson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishWorkflowVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublishWorkflowVersionRequest): PublishWorkflowVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishWorkflowVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishWorkflowVersionRequest;
  static deserializeBinaryFromReader(message: PublishWorkflowVersionRequest, reader: jspb.BinaryReader): PublishWorkflowVersionRequest;
}

export namespace PublishWorkflowVersionRequest {
  export type AsObject = {
    workflowid: string,
    workflowjson: string,
  }
}

export class UpdateWorkflowDetailRequest extends jspb.Message {
  getWorkflowid(): string;
  setWorkflowid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkflowDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkflowDetailRequest): UpdateWorkflowDetailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateWorkflowDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkflowDetailRequest;
  static deserializeBinaryFromReader(message: UpdateWorkflowDetailRequest, reader: jspb.BinaryReader): UpdateWorkflowDetailRequest;
}

export namespace UpdateWorkflowDetailRequest {
  export type AsObject = {
    workflowid: string,
    name: string,
    description: string,
  }
}

