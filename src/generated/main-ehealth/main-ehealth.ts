// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainEhealth(transport: Transport) {
  /**
   * GetDeclarations
   * Required scope - `gambit:erp:ehealth`
   * GET /api/erp/v1/ehealth/declarations
   * Operation ID: GetDeclarations
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDeclarationsResponse(
    args: { skip?: number; take?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/ehealth/declarations",
        parameters: [
          {
            name: "skip",
            field: "skip",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "take",
            field: "take",
            in: "query",
            required: false,
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
   * GetServiceRequests
   * Required scope - `gambit:erp:ehealth`
   * GET /api/erp/v1/ehealth/service_requests
   * Operation ID: GetServiceRequests
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getServiceRequestsResponse(
    args: { skip?: number; take?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/ehealth/service_requests",
        parameters: [
          {
            name: "skip",
            field: "skip",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "take",
            field: "take",
            in: "query",
            required: false,
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
   * GetCompositions
   * Required scope - `gambit:erp:ehealth`
   * GET /api/erp/v1/ehealth/compositions
   * Operation ID: GetCompositions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCompositionsResponse(
    args: { skip?: number; take?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/ehealth/compositions",
        parameters: [
          {
            name: "skip",
            field: "skip",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "take",
            field: "take",
            in: "query",
            required: false,
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
   * GetMedicationRequests
   * Required scope - `gambit:erp:ehealth`
   * GET /api/erp/v1/ehealth/medication_requests
   * Operation ID: GetMedicationRequests
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMedicationRequestsResponse(
    args: { skip?: number; take?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/ehealth/medication_requests",
        parameters: [
          {
            name: "skip",
            field: "skip",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "take",
            field: "take",
            in: "query",
            required: false,
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
  return {
    getDeclarationsResponse,
    /**
     * GetDeclarations
     * Required scope - `gambit:erp:ehealth`
     * GET /api/erp/v1/ehealth/declarations
     * Operation ID: GetDeclarations
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDeclarations(
      args: { skip?: number; take?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPEhealthDeclaration>> {
      return transport.read<Array<Models.ERPEhealthDeclaration>>(
        await getDeclarationsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getServiceRequestsResponse,
    /**
     * GetServiceRequests
     * Required scope - `gambit:erp:ehealth`
     * GET /api/erp/v1/ehealth/service_requests
     * Operation ID: GetServiceRequests
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getServiceRequests(
      args: { skip?: number; take?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPEhealthServiceRequest>> {
      return transport.read<Array<Models.ERPEhealthServiceRequest>>(
        await getServiceRequestsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getCompositionsResponse,
    /**
     * GetCompositions
     * Required scope - `gambit:erp:ehealth`
     * GET /api/erp/v1/ehealth/compositions
     * Operation ID: GetCompositions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCompositions(
      args: { skip?: number; take?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPEhealthComposition>> {
      return transport.read<Array<Models.ERPEhealthComposition>>(
        await getCompositionsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getMedicationRequestsResponse,
    /**
     * GetMedicationRequests
     * Required scope - `gambit:erp:ehealth`
     * GET /api/erp/v1/ehealth/medication_requests
     * Operation ID: GetMedicationRequests
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMedicationRequests(
      args: { skip?: number; take?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPEhealthMedicationRequest>> {
      return transport.read<Array<Models.ERPEhealthMedicationRequest>>(
        await getMedicationRequestsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
