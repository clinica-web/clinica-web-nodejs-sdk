// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainRefferalMessage(transport: Transport) {
  /**
   * CreateAsync external message
   *
   * POST /api/refferal-message
   * Operation ID: CreateExternalReferralMessage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createExternalReferralMessageResponse(
    args: { body?: Models.ExternalReferralMessageCommand } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/refferal-message",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    createExternalReferralMessageResponse,
    /**
     * CreateAsync external message
     *
     * POST /api/refferal-message
     * Operation ID: CreateExternalReferralMessage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createExternalReferralMessage(
      args: { body?: Models.ExternalReferralMessageCommand } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createExternalReferralMessageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
