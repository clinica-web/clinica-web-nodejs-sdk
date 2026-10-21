// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainStorages(transport: Transport) {
  /**
   * GetStorages
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/storages
   * Operation ID: GetStorages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStoragesResponse(
    args: { clinicId?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/storages",
        parameters: [
          {
            name: "clinicId",
            field: "clinicId",
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
   * CreateStorage
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/storages
   * Operation ID: CreateStorage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createStorageResponse(
    args: { body: Models.ERPStorageEditable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/storages",
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
   * GetStoragesByUserId
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/storages/by-user/{userId}
   * Operation ID: GetStoragesByUserId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStoragesByUserIdResponse(
    args: { userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/storages/by-user/{userId}",
        parameters: [
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
   * GetStorageById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/storages/{id}
   * Operation ID: GetStorageById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStorageByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/storages/{id}",
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
   * UpdateStorage
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/storages/{id}
   * Operation ID: UpdateStorage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateStorageResponse(
    args: { id: number; body: Models.ERPStorageEditable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/storages/{id}",
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
   * DeleteStorage
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/storages/{id}
   * Operation ID: DeleteStorage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteStorageResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/storages/{id}",
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
   * GetStorageUsers
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/storages/{storageId}/users
   * Operation ID: GetStorageUsers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStorageUsersResponse(
    args: { storageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/storages/{storageId}/users",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
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
   * AddStorageUser
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/storages/{storageId}/users/{userId}
   * Operation ID: AddStorageUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addStorageUserResponse(
    args: { storageId: number; userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/storages/{storageId}/users/{userId}",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
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
   * RemoveStorageUser
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/storages/{storageId}/users/{userId}
   * Operation ID: RemoveStorageUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeStorageUserResponse(
    args: { storageId: number; userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/storages/{storageId}/users/{userId}",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
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
  return {
    getStoragesResponse,
    /**
     * GetStorages
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/storages
     * Operation ID: GetStorages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStorages(
      args: { clinicId?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStorage>> {
      return transport.read<Array<Models.ERPStorage>>(
        await getStoragesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createStorageResponse,
    /**
     * CreateStorage
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/storages
     * Operation ID: CreateStorage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createStorage(
      args: { body: Models.ERPStorageEditable },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createStorageResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStoragesByUserIdResponse,
    /**
     * GetStoragesByUserId
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/storages/by-user/{userId}
     * Operation ID: GetStoragesByUserId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStoragesByUserId(
      args: { userId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStorage>> {
      return transport.read<Array<Models.ERPStorage>>(
        await getStoragesByUserIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStorageByIdResponse,
    /**
     * GetStorageById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/storages/{id}
     * Operation ID: GetStorageById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStorageById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPStorage> {
      return transport.read<Models.ERPStorage>(
        await getStorageByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateStorageResponse,
    /**
     * UpdateStorage
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/storages/{id}
     * Operation ID: UpdateStorage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateStorage(
      args: { id: number; body: Models.ERPStorageEditable },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateStorageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteStorageResponse,
    /**
     * DeleteStorage
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/storages/{id}
     * Operation ID: DeleteStorage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteStorage(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteStorageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getStorageUsersResponse,
    /**
     * GetStorageUsers
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/storages/{storageId}/users
     * Operation ID: GetStorageUsers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStorageUsers(
      args: { storageId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUserStorage>> {
      return transport.read<Array<Models.ERPUserStorage>>(
        await getStorageUsersResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addStorageUserResponse,
    /**
     * AddStorageUser
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/storages/{storageId}/users/{userId}
     * Operation ID: AddStorageUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addStorageUser(
      args: { storageId: number; userId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addStorageUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    removeStorageUserResponse,
    /**
     * RemoveStorageUser
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/storages/{storageId}/users/{userId}
     * Operation ID: RemoveStorageUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeStorageUser(
      args: { storageId: number; userId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeStorageUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
