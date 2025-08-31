import { WithAuthContext } from "@/rapida/clients";
import {
  CreateBulkPhoneCallRequest,
  CreateBulkPhoneCallResponse,
  CreatePhoneCallRequest,
  CreatePhoneCallResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreatePhoneCall(
  clientCfg: ConnectionConfig,
  request: CreatePhoneCallRequest
): Promise<CreatePhoneCallResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.conversationClient.createPhoneCall(
      request,
      WithAuthContext(clientCfg.auth),
      (err: ServiceError | null, response: CreatePhoneCallResponse) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreateBulkPhoneCall(
  clientCfg: ConnectionConfig,
  request: CreateBulkPhoneCallRequest
): Promise<CreateBulkPhoneCallResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.conversationClient.createBulkPhoneCall(
      request,
      WithAuthContext(clientCfg.auth),
      (err: ServiceError, response: CreateBulkPhoneCallResponse) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
