// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainAnalysisCodes(transport: Transport) {
  /**
   * AssignAnalysisCode
   * Required scope - `gambit:erp:analysis-codes:write`
   * POST /api/erp/v1/analysis-codes/assign
   * Operation ID: AssignAnalysisCode
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function assignAnalysisCodeResponse(
    args: { body: Models.AssignExternalAnalysisCodeRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/analysis-codes/assign",
        parameters: [],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    assignAnalysisCodeResponse,
    /**
     * AssignAnalysisCode
     * Required scope - `gambit:erp:analysis-codes:write`
     * POST /api/erp/v1/analysis-codes/assign
     * Operation ID: AssignAnalysisCode
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async assignAnalysisCode(
      args: { body: Models.AssignExternalAnalysisCodeRequest },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await assignAnalysisCodeResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
