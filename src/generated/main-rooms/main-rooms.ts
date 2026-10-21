// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainRooms(transport: Transport) {
  /**
   * Searching rooms
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/rooms
   * Operation ID: SearchRooms
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchRoomsResponse(
    args: {
      /**
       * by short name
       */ shortName?: string;
      /**
       * by clinic identifier
       */ clinicId?: number;
      /**
       * by external clinic identifier
       */ externalClinicId?: string;
      /**
       * by group identifier
       */ groupId?: number;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/rooms",
        parameters: [
          {
            name: "shortName",
            field: "shortName",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "clinicId",
            field: "clinicId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "externalClinicId",
            field: "externalClinicId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "groupId",
            field: "groupId",
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
   * Create new room
   * Required scope - `gambit:erp:rooms`
   * POST /api/erp/v1/rooms
   * Operation ID: CreateRoom
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createRoomResponse(
    args: {
      /**
       * rooms data
       */ body: Models.ERPRoomEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/rooms",
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
   * returns room information by id
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/rooms/{roomId}
   * Operation ID: GetRoomById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getRoomByIdResponse(
    args: {
      /**
       * room identifier
       */ roomId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/rooms/{roomId}",
        parameters: [
          {
            name: "roomId",
            field: "roomId",
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
   * Delete room by id
   * Required scope - `gambit:erp:rooms`
   * DELETE /api/erp/v1/rooms/{roomId}
   * Operation ID: DeleteRoom
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteRoomResponse(
    args: {
      /**
       * room identifier
       */ roomId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/rooms/{roomId}",
        parameters: [
          {
            name: "roomId",
            field: "roomId",
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
   * Update room information
   * Required scope - `gambit:erp:rooms`
   *
   * Method does not support patching, so when field is not provided - it will overwrite existing data
   * PUT /api/erp/v1/rooms/{roomId}
   * Operation ID: UpdateRoom
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateRoomResponse(
    args: {
      /**
       * identifier of the room to update
       */ roomId: number;
      /**
       * rooms data
       */ body: Models.ERPRoomEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/rooms/{roomId}",
        parameters: [
          {
            name: "roomId",
            field: "roomId",
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
    searchRoomsResponse,
    /**
     * Searching rooms
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/rooms
     * Operation ID: SearchRooms
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchRooms(
      args: {
        /**
         * by short name
         */ shortName?: string;
        /**
         * by clinic identifier
         */ clinicId?: number;
        /**
         * by external clinic identifier
         */ externalClinicId?: string;
        /**
         * by group identifier
         */ groupId?: number;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPRoom>> {
      return transport.read<Array<Models.ERPRoom>>(
        await searchRoomsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createRoomResponse,
    /**
     * Create new room
     * Required scope - `gambit:erp:rooms`
     * POST /api/erp/v1/rooms
     * Operation ID: CreateRoom
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createRoom(
      args: {
        /**
         * rooms data
         */ body: Models.ERPRoomEditable;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPRoom> {
      return transport.read<Models.ERPRoom>(
        await createRoomResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getRoomByIdResponse,
    /**
     * returns room information by id
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/rooms/{roomId}
     * Operation ID: GetRoomById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getRoomById(
      args: {
        /**
         * room identifier
         */ roomId: number;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPRoom> {
      return transport.read<Models.ERPRoom>(
        await getRoomByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteRoomResponse,
    /**
     * Delete room by id
     * Required scope - `gambit:erp:rooms`
     * DELETE /api/erp/v1/rooms/{roomId}
     * Operation ID: DeleteRoom
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteRoom(
      args: {
        /**
         * room identifier
         */ roomId: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await deleteRoomResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    updateRoomResponse,
    /**
     * Update room information
     * Required scope - `gambit:erp:rooms`
     *
     * Method does not support patching, so when field is not provided - it will overwrite existing data
     * PUT /api/erp/v1/rooms/{roomId}
     * Operation ID: UpdateRoom
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateRoom(
      args: {
        /**
         * identifier of the room to update
         */ roomId: number;
        /**
         * rooms data
         */ body: Models.ERPRoomEditable;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await updateRoomResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
  };
}
