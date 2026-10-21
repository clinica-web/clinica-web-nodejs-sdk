// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainAnalyzerDevices(transport: Transport) {
  /**
   * GetAnalyzerDevices
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/analyzer-devices
   * Operation ID: GetAnalyzerDevices
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAnalyzerDevicesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/analyzer-devices",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getAnalyzerDevicesResponse,
    /**
     * GetAnalyzerDevices
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/analyzer-devices
     * Operation ID: GetAnalyzerDevices
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAnalyzerDevices(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getAnalyzerDevicesResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
