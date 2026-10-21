// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineRooms(transport: Transport) {
  /**
   * Searching rooms
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/rooms
   * Operation ID: SearchBookingRooms
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchBookingRoomsResponse(
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
        path: "/api/online/v1/rooms",
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
   * returns room information by id
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/rooms/{roomId}
   * Operation ID: GetBookingRoomById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getBookingRoomByIdResponse(
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
        path: "/api/online/v1/rooms/{roomId}",
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
  return {
    searchBookingRoomsResponse,
    /**
     * Searching rooms
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/rooms
     * Operation ID: SearchBookingRooms
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchBookingRooms(
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
        await searchBookingRoomsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getBookingRoomByIdResponse,
    /**
     * returns room information by id
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/rooms/{roomId}
     * Operation ID: GetBookingRoomById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getBookingRoomById(
      args: {
        /**
         * room identifier
         */ roomId: number;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPRoom> {
      return transport.read<Models.ERPRoom>(
        await getBookingRoomByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
