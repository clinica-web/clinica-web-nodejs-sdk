// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainUsersPositions(transport: Transport) {
  /**
   * GetUserPositionUsers
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/usersPositions/{id}/users
   * Operation ID: GetUserPositionUsers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserPositionUsersResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/usersPositions/{id}/users",
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
   * AssignPositionToUser
   * Required scope - `gambit:erp:users`
   * PATCH /api/erp/v1/usersPositions/{id}/users/{userId}
   * Operation ID: AssignPositionToUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function assignPositionToUserResponse(
    args: { id: number; userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/usersPositions/{id}/users/{userId}",
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
   * UnassignPositionFromUser
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/usersPositions/{id}/users/{userId}
   * Operation ID: UnassignPositionFromUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function unassignPositionFromUserResponse(
    args: { id: number; userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/usersPositions/{id}/users/{userId}",
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
   * GetUserPositionsLookup
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/usersPositions/lookup
   * Operation ID: GetUserPositionsLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserPositionsLookupResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/usersPositions/lookup",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetUserPositions
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/usersPositions
   * Operation ID: GetUserPositions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserPositionsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/usersPositions",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateUserPosition
   * Required scope - `gambit:erp:users`
   * POST /api/erp/v1/usersPositions
   * Operation ID: CreateUserPosition
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createUserPositionResponse(
    args: { body: Models.ERPEditableUserPosition },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/usersPositions",
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
   * GetUserPosition
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/usersPositions/{id}
   * Operation ID: GetUserPosition
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserPositionResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/usersPositions/{id}",
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
   * DeleteUserPosition
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/usersPositions/{id}
   * Operation ID: DeleteUserPosition
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteUserPositionResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/usersPositions/{id}",
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
   * UpdateUserPosition
   * Required scope - `gambit:erp:users`
   * PUT /api/erp/v1/usersPositions/{id}
   * Operation ID: UpdateUserPosition
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateUserPositionResponse(
    args: { id: number; body: Models.ERPEditableUserPosition },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/usersPositions/{id}",
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
  return {
    getUserPositionUsersResponse,
    /**
     * GetUserPositionUsers
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/usersPositions/{id}/users
     * Operation ID: GetUserPositionUsers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserPositionUsers(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.UserBaseDto>> {
      return transport.read<Array<Models.UserBaseDto>>(
        await getUserPositionUsersResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    assignPositionToUserResponse,
    /**
     * AssignPositionToUser
     * Required scope - `gambit:erp:users`
     * PATCH /api/erp/v1/usersPositions/{id}/users/{userId}
     * Operation ID: AssignPositionToUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async assignPositionToUser(
      args: { id: number; userId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await assignPositionToUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    unassignPositionFromUserResponse,
    /**
     * UnassignPositionFromUser
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/usersPositions/{id}/users/{userId}
     * Operation ID: UnassignPositionFromUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async unassignPositionFromUser(
      args: { id: number; userId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await unassignPositionFromUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getUserPositionsLookupResponse,
    /**
     * GetUserPositionsLookup
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/usersPositions/lookup
     * Operation ID: GetUserPositionsLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserPositionsLookup(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getUserPositionsLookupResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getUserPositionsResponse,
    /**
     * GetUserPositions
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/usersPositions
     * Operation ID: GetUserPositions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserPositions(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUserPosition>> {
      return transport.read<Array<Models.ERPUserPosition>>(
        await getUserPositionsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createUserPositionResponse,
    /**
     * CreateUserPosition
     * Required scope - `gambit:erp:users`
     * POST /api/erp/v1/usersPositions
     * Operation ID: CreateUserPosition
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createUserPosition(
      args: { body: Models.ERPEditableUserPosition },
      options?: RequestOptions,
    ): Promise<Models.ERPUserPosition> {
      return transport.read<Models.ERPUserPosition>(
        await createUserPositionResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getUserPositionResponse,
    /**
     * GetUserPosition
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/usersPositions/{id}
     * Operation ID: GetUserPosition
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserPosition(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPUserPosition> {
      return transport.read<Models.ERPUserPosition>(
        await getUserPositionResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteUserPositionResponse,
    /**
     * DeleteUserPosition
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/usersPositions/{id}
     * Operation ID: DeleteUserPosition
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteUserPosition(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteUserPositionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateUserPositionResponse,
    /**
     * UpdateUserPosition
     * Required scope - `gambit:erp:users`
     * PUT /api/erp/v1/usersPositions/{id}
     * Operation ID: UpdateUserPosition
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateUserPosition(
      args: { id: number; body: Models.ERPEditableUserPosition },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateUserPositionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
