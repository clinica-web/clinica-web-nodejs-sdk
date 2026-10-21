// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineNotification(transport: Transport) {
  /**
   * Send notification
   * Required scope - `gambit:notification`
   * POST /api/online/v1/notification
   * Operation ID: SendNotification
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function sendNotificationResponse(
    args: { body: Models.APISMSCommand },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/notification",
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
   * Get notification status
   * Required scope - `gambit:notification`
   * GET /api/online/v1/notification/{id}/status
   * Operation ID: GetNotificationStatus
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNotificationStatusResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/notification/{id}/status",
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
    sendNotificationResponse,
    /**
     * Send notification
     * Required scope - `gambit:notification`
     * POST /api/online/v1/notification
     * Operation ID: SendNotification
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async sendNotification(
      args: { body: Models.APISMSCommand },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await sendNotificationResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNotificationStatusResponse,
    /**
     * Get notification status
     * Required scope - `gambit:notification`
     * GET /api/online/v1/notification/{id}/status
     * Operation ID: GetNotificationStatus
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNotificationStatus(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.NotificationStatusInfo> {
      return transport.read<Models.NotificationStatusInfo>(
        await getNotificationStatusResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
