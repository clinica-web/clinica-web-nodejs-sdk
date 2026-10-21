// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainNomenclatureAccessGroups(transport: Transport) {
  /**
   * GetNomenclatureAccessGroups
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-access-groups
   * Operation ID: GetNomenclatureAccessGroups
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureAccessGroupsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-access-groups",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateNomenclatureAccessGroup
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/nomenclature-access-groups
   * Operation ID: CreateNomenclatureAccessGroup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createNomenclatureAccessGroupResponse(
    args: { body: Models.ERPNomenclatureAccessGroupEditable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/nomenclature-access-groups",
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
   * GetNomenclatureAccessGroupById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-access-groups/{id}
   * Operation ID: GetNomenclatureAccessGroupById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureAccessGroupByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-access-groups/{id}",
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
   * UpdateNomenclatureAccessGroup
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/nomenclature-access-groups/{id}
   * Operation ID: UpdateNomenclatureAccessGroup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateNomenclatureAccessGroupResponse(
    args: { id: number; body: Models.ERPNomenclatureAccessGroupEditable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/nomenclature-access-groups/{id}",
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
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * DeleteNomenclatureAccessGroup
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/nomenclature-access-groups/{id}
   * Operation ID: DeleteNomenclatureAccessGroup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteNomenclatureAccessGroupResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/nomenclature-access-groups/{id}",
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
   * GetNomenclatureAccessGroupsByUserId
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-access-groups/users/{id}
   * Operation ID: GetNomenclatureAccessGroupsByUserId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureAccessGroupsByUserIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-access-groups/users/{id}",
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
   * GetNomenclatureAccessGroupUsers
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-access-groups/{id}/users
   * Operation ID: GetNomenclatureAccessGroupUsers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureAccessGroupUsersResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-access-groups/{id}/users",
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
   * AddNomenclatureAccessGroupUser
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/nomenclature-access-groups/{id}/users/{userId}
   * Operation ID: AddNomenclatureAccessGroupUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addNomenclatureAccessGroupUserResponse(
    args: { id: number; userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/nomenclature-access-groups/{id}/users/{userId}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "userId",
            field: "userId",
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
   * RemoveNomenclatureAccessGroupUser
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/nomenclature-access-groups/{id}/users/{userId}
   * Operation ID: RemoveNomenclatureAccessGroupUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeNomenclatureAccessGroupUserResponse(
    args: { id: number; userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/nomenclature-access-groups/{id}/users/{userId}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "userId",
            field: "userId",
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
   * GetNomenclatureAccessGroupNomenclatures
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-access-groups/{id}/nomenclatures
   * Operation ID: GetNomenclatureAccessGroupNomenclatures
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureAccessGroupNomenclaturesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-access-groups/{id}/nomenclatures",
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
   * AddNomenclatureAccessGroupNomenclature
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/nomenclature-access-groups/{id}/nomenclatures/{nomenclatureId}
   * Operation ID: AddNomenclatureAccessGroupNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addNomenclatureAccessGroupNomenclatureResponse(
    args: { id: number; nomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/nomenclature-access-groups/{id}/nomenclatures/{nomenclatureId}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
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
   * RemoveNomenclatureAccessGroupNomenclature
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/nomenclature-access-groups/{id}/nomenclatures/{nomenclatureId}
   * Operation ID: RemoveNomenclatureAccessGroupNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeNomenclatureAccessGroupNomenclatureResponse(
    args: { id: number; nomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/nomenclature-access-groups/{id}/nomenclatures/{nomenclatureId}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
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
    getNomenclatureAccessGroupsResponse,
    /**
     * GetNomenclatureAccessGroups
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-access-groups
     * Operation ID: GetNomenclatureAccessGroups
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureAccessGroups(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomenclatureAccessGroup>> {
      return transport.read<Array<Models.ERPNomenclatureAccessGroup>>(
        await getNomenclatureAccessGroupsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createNomenclatureAccessGroupResponse,
    /**
     * CreateNomenclatureAccessGroup
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/nomenclature-access-groups
     * Operation ID: CreateNomenclatureAccessGroup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createNomenclatureAccessGroup(
      args: { body: Models.ERPNomenclatureAccessGroupEditable },
      options?: RequestOptions,
    ): Promise<Models.ERPNomenclatureAccessGroup> {
      return transport.read<Models.ERPNomenclatureAccessGroup>(
        await createNomenclatureAccessGroupResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclatureAccessGroupByIdResponse,
    /**
     * GetNomenclatureAccessGroupById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-access-groups/{id}
     * Operation ID: GetNomenclatureAccessGroupById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureAccessGroupById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPNomenclatureAccessGroup> {
      return transport.read<Models.ERPNomenclatureAccessGroup>(
        await getNomenclatureAccessGroupByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateNomenclatureAccessGroupResponse,
    /**
     * UpdateNomenclatureAccessGroup
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/nomenclature-access-groups/{id}
     * Operation ID: UpdateNomenclatureAccessGroup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateNomenclatureAccessGroup(
      args: { id: number; body: Models.ERPNomenclatureAccessGroupEditable },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateNomenclatureAccessGroupResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteNomenclatureAccessGroupResponse,
    /**
     * DeleteNomenclatureAccessGroup
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/nomenclature-access-groups/{id}
     * Operation ID: DeleteNomenclatureAccessGroup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteNomenclatureAccessGroup(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteNomenclatureAccessGroupResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getNomenclatureAccessGroupsByUserIdResponse,
    /**
     * GetNomenclatureAccessGroupsByUserId
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-access-groups/users/{id}
     * Operation ID: GetNomenclatureAccessGroupsByUserId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureAccessGroupsByUserId(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<number>> {
      return transport.read<Array<number>>(
        await getNomenclatureAccessGroupsByUserIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclatureAccessGroupUsersResponse,
    /**
     * GetNomenclatureAccessGroupUsers
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-access-groups/{id}/users
     * Operation ID: GetNomenclatureAccessGroupUsers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureAccessGroupUsers(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomenclatureAccessGroupMember>> {
      return transport.read<Array<Models.ERPNomenclatureAccessGroupMember>>(
        await getNomenclatureAccessGroupUsersResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addNomenclatureAccessGroupUserResponse,
    /**
     * AddNomenclatureAccessGroupUser
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/nomenclature-access-groups/{id}/users/{userId}
     * Operation ID: AddNomenclatureAccessGroupUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addNomenclatureAccessGroupUser(
      args: { id: number; userId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addNomenclatureAccessGroupUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    removeNomenclatureAccessGroupUserResponse,
    /**
     * RemoveNomenclatureAccessGroupUser
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/nomenclature-access-groups/{id}/users/{userId}
     * Operation ID: RemoveNomenclatureAccessGroupUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeNomenclatureAccessGroupUser(
      args: { id: number; userId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeNomenclatureAccessGroupUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getNomenclatureAccessGroupNomenclaturesResponse,
    /**
     * GetNomenclatureAccessGroupNomenclatures
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-access-groups/{id}/nomenclatures
     * Operation ID: GetNomenclatureAccessGroupNomenclatures
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureAccessGroupNomenclatures(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomenclatureAccessGroupMember>> {
      return transport.read<Array<Models.ERPNomenclatureAccessGroupMember>>(
        await getNomenclatureAccessGroupNomenclaturesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addNomenclatureAccessGroupNomenclatureResponse,
    /**
     * AddNomenclatureAccessGroupNomenclature
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/nomenclature-access-groups/{id}/nomenclatures/{nomenclatureId}
     * Operation ID: AddNomenclatureAccessGroupNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addNomenclatureAccessGroupNomenclature(
      args: { id: number; nomenclatureId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addNomenclatureAccessGroupNomenclatureResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    removeNomenclatureAccessGroupNomenclatureResponse,
    /**
     * RemoveNomenclatureAccessGroupNomenclature
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/nomenclature-access-groups/{id}/nomenclatures/{nomenclatureId}
     * Operation ID: RemoveNomenclatureAccessGroupNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeNomenclatureAccessGroupNomenclature(
      args: { id: number; nomenclatureId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeNomenclatureAccessGroupNomenclatureResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
