// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainMaterialMovements(transport: Transport) {
  /**
   * GetMaterialMovements
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-movements
   * Operation ID: GetMaterialMovements
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialMovementsResponse(
    args: { storageId: number; dateFrom: string; dateTo: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-movements",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateFrom",
            field: "dateFrom",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateTo",
            field: "dateTo",
            in: "query",
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
  return {
    getMaterialMovementsResponse,
    /**
     * GetMaterialMovements
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-movements
     * Operation ID: GetMaterialMovements
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialMovements(
      args: { storageId: number; dateFrom: string; dateTo: string },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPMaterialMovement>> {
      return transport.read<Array<Models.ERPMaterialMovement>>(
        await getMaterialMovementsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
