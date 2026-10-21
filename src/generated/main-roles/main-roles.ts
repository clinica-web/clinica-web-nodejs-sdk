// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainRoles(transport: Transport) {
  /**
   * GetRoles
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/roles
   * Operation ID: GetRoles
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getRolesResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/roles",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getRolesResponse,
    /**
     * GetRoles
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/roles
     * Operation ID: GetRoles
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getRoles(options?: RequestOptions): Promise<Array<Models.RolesDto>> {
      return transport.read<Array<Models.RolesDto>>(
        await getRolesResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
