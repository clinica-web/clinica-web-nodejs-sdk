// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainRoleCategories(transport: Transport) {
  /**
   * GetRoleCategories
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/role-categories
   * Operation ID: GetRoleCategories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getRoleCategoriesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/role-categories",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getRoleCategoriesResponse,
    /**
     * GetRoleCategories
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/role-categories
     * Operation ID: GetRoleCategories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getRoleCategories(
      options?: RequestOptions,
    ): Promise<Array<Models.RoleCategoryDto>> {
      return transport.read<Array<Models.RoleCategoryDto>>(
        await getRoleCategoriesResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
