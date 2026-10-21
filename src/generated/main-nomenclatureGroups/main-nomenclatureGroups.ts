// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainNomenclatureGroups(transport: Transport) {
  /**
   * GetNomenclatureGroups
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-groups
   * Operation ID: GetNomenclatureGroups
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureGroupsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-groups",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateNomenclatureGroup
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/nomenclature-groups
   * Operation ID: CreateNomenclatureGroup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createNomenclatureGroupResponse(
    args: { body: Models.ERPNomenclatureGroups },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/nomenclature-groups",
        parameters: [],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetNomenclatureGroupById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-groups/{nomenclatureGroupId}
   * Operation ID: GetNomenclatureGroupById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureGroupByIdResponse(
    args: { nomenclatureGroupId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-groups/{nomenclatureGroupId}",
        parameters: [
          {
            name: "nomenclatureGroupId",
            field: "nomenclatureGroupId",
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
   * UpdateNomenclatureGroup
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/nomenclature-groups/{nomenclatureGroupId}
   * Operation ID: UpdateNomenclatureGroup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateNomenclatureGroupResponse(
    args: { nomenclatureGroupId: number; body: Models.ERPNomenclatureGroups },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/nomenclature-groups/{nomenclatureGroupId}",
        parameters: [
          {
            name: "nomenclatureGroupId",
            field: "nomenclatureGroupId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * DeleteNomenclatureGroup
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/nomenclature-groups/{nomenclatureGroupId}
   * Operation ID: DeleteNomenclatureGroup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteNomenclatureGroupResponse(
    args: { nomenclatureGroupId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/nomenclature-groups/{nomenclatureGroupId}",
        parameters: [
          {
            name: "nomenclatureGroupId",
            field: "nomenclatureGroupId",
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
  return {
    getNomenclatureGroupsResponse,
    /**
     * GetNomenclatureGroups
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-groups
     * Operation ID: GetNomenclatureGroups
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureGroups(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomenclatureGroups>> {
      return transport.read<Array<Models.ERPNomenclatureGroups>>(
        await getNomenclatureGroupsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createNomenclatureGroupResponse,
    /**
     * CreateNomenclatureGroup
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/nomenclature-groups
     * Operation ID: CreateNomenclatureGroup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createNomenclatureGroup(
      args: { body: Models.ERPNomenclatureGroups },
      options?: RequestOptions,
    ): Promise<Models.ERPNomenclatureGroups> {
      return transport.read<Models.ERPNomenclatureGroups>(
        await createNomenclatureGroupResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclatureGroupByIdResponse,
    /**
     * GetNomenclatureGroupById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-groups/{nomenclatureGroupId}
     * Operation ID: GetNomenclatureGroupById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureGroupById(
      args: { nomenclatureGroupId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPNomenclatureGroups> {
      return transport.read<Models.ERPNomenclatureGroups>(
        await getNomenclatureGroupByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateNomenclatureGroupResponse,
    /**
     * UpdateNomenclatureGroup
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/nomenclature-groups/{nomenclatureGroupId}
     * Operation ID: UpdateNomenclatureGroup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateNomenclatureGroup(
      args: { nomenclatureGroupId: number; body: Models.ERPNomenclatureGroups },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateNomenclatureGroupResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteNomenclatureGroupResponse,
    /**
     * DeleteNomenclatureGroup
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/nomenclature-groups/{nomenclatureGroupId}
     * Operation ID: DeleteNomenclatureGroup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteNomenclatureGroup(
      args: { nomenclatureGroupId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteNomenclatureGroupResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
