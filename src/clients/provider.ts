import {
  GetAllModelProviderRequest,
  GetAllModelProviderResponse,
  GetAllToolProviderResponse,
  GetAllToolProviderRequest,
} from "@/rapida/clients/protos/provider-api_pb";
import { Criteria, Paginate } from "@/rapida/clients/protos/common_pb";
import {
  UserAuthInfo,
  ClientAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import { ConnectionConfig } from "@/rapida/connections/connection-config";
import { ServiceError } from "@grpc/grpc-js";
/**
 * Retrieve all providers.
 *
 * @param connectionConfig - The connection configuration.
 * @param authHeader - Authentication headers for the request (optional).
 * @returns Promise<GetAllModelProviderResponse> - The response containing all model providers.
 */
export function GetAllProvider(
  connectionConfig: ConnectionConfig
): Promise<GetAllModelProviderResponse> {
  return new Promise((resolve, reject) => {
    const request = new GetAllModelProviderRequest();
    connectionConfig.providerClient.getAllModelProvider(
      request,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError, response: GetAllModelProviderResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}

/**
 * Retrieve all tool providers with pagination and filtering.
 *
 * @param connectionConfig - The connection configuration.
 * @param page - The page number for pagination.
 * @param pageSize - The number of items per page.
 * @param criteria - List of criteria to filter the tool providers.
 * @param authHeader - Authentication headers for the request.
 * @returns Promise<GetAllToolProviderResponse> - The response containing all tool providers.
 */
export function GetAllToolProvider(
  connectionConfig: ConnectionConfig,
  page: number,
  pageSize: number,
  criteria: { key: string; value: string }[]
): Promise<GetAllToolProviderResponse> {
  return new Promise((resolve, reject) => {
    const req = new GetAllToolProviderRequest();
    const paginate = new Paginate();

    criteria.forEach((x) => {
      let ctr = new Criteria();
      ctr.setKey(x.key);
      ctr.setValue(x.value);
      req.addCriterias(ctr);
    });

    paginate.setPage(page);
    paginate.setPagesize(pageSize);
    req.setPaginate(paginate);

    connectionConfig.providerClient.getAllToolProvider(
      req,
      WithAuthContext(connectionConfig.auth),
      (err: ServiceError, response: GetAllToolProviderResponse) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
}
