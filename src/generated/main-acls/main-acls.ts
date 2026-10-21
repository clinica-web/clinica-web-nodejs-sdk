// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainAcls(transport: Transport) {
  /**
   * GetAcls
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/acls
   * Operation ID: GetAcls
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAclsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/acls",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateAcl
   * Required scope - `gambit:erp:users`
   * POST /api/erp/v1/acls
   * Operation ID: CreateAcl
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createAclResponse(
    args: { body: Models.AclEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/acls",
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
   * GetAclUsers
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/acls/{aclId}/users
   * Operation ID: GetAclUsers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAclUsersResponse(
    args: { aclId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/acls/{aclId}/users",
        parameters: [
          {
            name: "aclId",
            field: "aclId",
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
   * GetAclById
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/acls/{aclId}
   * Operation ID: GetAclById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAclByIdResponse(
    args: { aclId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/acls/{aclId}",
        parameters: [
          {
            name: "aclId",
            field: "aclId",
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
   * RemoveRoleFromAcl
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/acls/{aclId}/{roleId}
   * Operation ID: RemoveRoleFromAcl
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeRoleFromAclResponse(
    args: { aclId: number; roleId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/acls/{aclId}/{roleId}",
        parameters: [
          {
            name: "aclId",
            field: "aclId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "roleId",
            field: "roleId",
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
   * AddRoleToAcl
   * Required scope - `gambit:erp:users`
   * PATCH /api/erp/v1/acls/{aclId}/{roleId}
   * Operation ID: AddRoleToAcl
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addRoleToAclResponse(
    args: { aclId: number; roleId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/acls/{aclId}/{roleId}",
        parameters: [
          {
            name: "aclId",
            field: "aclId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "roleId",
            field: "roleId",
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
   * UpdateAcl
   * Required scope - `gambit:erp:users`
   * PUT /api/erp/v1/acls/{id}
   * Operation ID: UpdateAcl
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateAclResponse(
    args: { id: number; body: Models.AclEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/acls/{id}",
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
   * DeleteAcl
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/acls/{id}
   * Operation ID: DeleteAcl
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteAclResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/acls/{id}",
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
  return {
    getAclsResponse,
    /**
     * GetAcls
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/acls
     * Operation ID: GetAcls
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAcls(options?: RequestOptions): Promise<Array<Models.AclDto>> {
      return transport.read<Array<Models.AclDto>>(
        await getAclsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createAclResponse,
    /**
     * CreateAcl
     * Required scope - `gambit:erp:users`
     * POST /api/erp/v1/acls
     * Operation ID: CreateAcl
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createAcl(
      args: { body: Models.AclEditableDto },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createAclResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getAclUsersResponse,
    /**
     * GetAclUsers
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/acls/{aclId}/users
     * Operation ID: GetAclUsers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAclUsers(
      args: { aclId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getAclUsersResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getAclByIdResponse,
    /**
     * GetAclById
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/acls/{aclId}
     * Operation ID: GetAclById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAclById(
      args: { aclId: number },
      options?: RequestOptions,
    ): Promise<Models.AclDto> {
      return transport.read<Models.AclDto>(
        await getAclByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    removeRoleFromAclResponse,
    /**
     * RemoveRoleFromAcl
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/acls/{aclId}/{roleId}
     * Operation ID: RemoveRoleFromAcl
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeRoleFromAcl(
      args: { aclId: number; roleId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeRoleFromAclResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    addRoleToAclResponse,
    /**
     * AddRoleToAcl
     * Required scope - `gambit:erp:users`
     * PATCH /api/erp/v1/acls/{aclId}/{roleId}
     * Operation ID: AddRoleToAcl
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addRoleToAcl(
      args: { aclId: number; roleId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addRoleToAclResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateAclResponse,
    /**
     * UpdateAcl
     * Required scope - `gambit:erp:users`
     * PUT /api/erp/v1/acls/{id}
     * Operation ID: UpdateAcl
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateAcl(
      args: { id: number; body: Models.AclEditableDto },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await updateAclResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    deleteAclResponse,
    /**
     * DeleteAcl
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/acls/{id}
     * Operation ID: DeleteAcl
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteAcl(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await deleteAclResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
  };
}
