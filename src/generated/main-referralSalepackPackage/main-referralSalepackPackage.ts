// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainReferralSalepackPackage(transport: Transport) {
  /**
   * GetReferral
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/referral-salepack-package/{id}
   * Operation ID: GetReferral
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferralResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/referral-salepack-package/{id}",
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
    getReferralResponse,
    /**
     * GetReferral
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/referral-salepack-package/{id}
     * Operation ID: GetReferral
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferral(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPReferralSalepackPackage> {
      return transport.read<Models.ERPReferralSalepackPackage>(
        await getReferralResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
