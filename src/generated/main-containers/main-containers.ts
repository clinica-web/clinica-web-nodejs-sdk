// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainContainers(transport: Transport) {
  /**
   * GetContainers
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/containers
   * Operation ID: GetContainers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getContainersResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/containers",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetContainerById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/containers/{id}
   * Operation ID: GetContainerById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getContainerByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/containers/{id}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetContainersLookup
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/containers/lookup
   * Operation ID: GetContainersLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getContainersLookupResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/containers/lookup",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getContainersResponse,
    /**
     * GetContainers
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/containers
     * Operation ID: GetContainers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getContainers(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPContainer>> {
      return transport.read<Array<Models.ERPContainer>>(
        await getContainersResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getContainerByIdResponse,
    /**
     * GetContainerById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/containers/{id}
     * Operation ID: GetContainerById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getContainerById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPContainer> {
      return transport.read<Models.ERPContainer>(
        await getContainerByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getContainersLookupResponse,
    /**
     * GetContainersLookup
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/containers/lookup
     * Operation ID: GetContainersLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getContainersLookup(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getContainersLookupResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
