// package: workflow_api
// file: workflow-api.proto

var workflow_api_pb = require("./workflow-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WorkflowService = (function () {
  function WorkflowService() {}
  WorkflowService.serviceName = "workflow_api.WorkflowService";
  return WorkflowService;
}());

WorkflowService.GetWorkflow = {
  methodName: "GetWorkflow",
  service: WorkflowService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.GetWorkflowRequest,
  responseType: workflow_api_pb.GetWorkflowResponse
};

WorkflowService.GetAllWorkflow = {
  methodName: "GetAllWorkflow",
  service: WorkflowService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.GetAllWorkflowRequest,
  responseType: workflow_api_pb.GetAllWorkflowResponse
};

WorkflowService.CreateWorkflow = {
  methodName: "CreateWorkflow",
  service: WorkflowService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.CreateWorkflowRequest,
  responseType: workflow_api_pb.GetWorkflowResponse
};

WorkflowService.CreateWorkflowTag = {
  methodName: "CreateWorkflowTag",
  service: WorkflowService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.CreateWorkflowTagRequest,
  responseType: workflow_api_pb.GetWorkflowResponse
};

WorkflowService.PublishWorkflowVersion = {
  methodName: "PublishWorkflowVersion",
  service: WorkflowService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.PublishWorkflowVersionRequest,
  responseType: workflow_api_pb.GetWorkflowResponse
};

WorkflowService.UpdateWorkflowDetail = {
  methodName: "UpdateWorkflowDetail",
  service: WorkflowService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.UpdateWorkflowDetailRequest,
  responseType: workflow_api_pb.GetWorkflowResponse
};

exports.WorkflowService = WorkflowService;

function WorkflowServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WorkflowServiceClient.prototype.getWorkflow = function getWorkflow(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowService.GetWorkflow, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WorkflowServiceClient.prototype.getAllWorkflow = function getAllWorkflow(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowService.GetAllWorkflow, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WorkflowServiceClient.prototype.createWorkflow = function createWorkflow(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowService.CreateWorkflow, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WorkflowServiceClient.prototype.createWorkflowTag = function createWorkflowTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowService.CreateWorkflowTag, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WorkflowServiceClient.prototype.publishWorkflowVersion = function publishWorkflowVersion(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowService.PublishWorkflowVersion, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WorkflowServiceClient.prototype.updateWorkflowDetail = function updateWorkflowDetail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WorkflowService.UpdateWorkflowDetail, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.WorkflowServiceClient = WorkflowServiceClient;

var ExecutorService = (function () {
  function ExecutorService() {}
  ExecutorService.serviceName = "workflow_api.ExecutorService";
  return ExecutorService;
}());

ExecutorService.RunWorkflow = {
  methodName: "RunWorkflow",
  service: ExecutorService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.RunWorkflowRequest,
  responseType: workflow_api_pb.RunWorkflowResponse
};

ExecutorService.GetWorkflowRunOutput = {
  methodName: "GetWorkflowRunOutput",
  service: ExecutorService,
  requestStream: false,
  responseStream: false,
  requestType: workflow_api_pb.GetWorkflowRunOutputRequest,
  responseType: workflow_api_pb.GetWorkflowRunOutputResponse
};

exports.ExecutorService = ExecutorService;

function ExecutorServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ExecutorServiceClient.prototype.runWorkflow = function runWorkflow(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExecutorService.RunWorkflow, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ExecutorServiceClient.prototype.getWorkflowRunOutput = function getWorkflowRunOutput(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ExecutorService.GetWorkflowRunOutput, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ExecutorServiceClient = ExecutorServiceClient;

