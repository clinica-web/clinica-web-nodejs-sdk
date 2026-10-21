// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainMonitoringIndicators(transport: Transport) {
  /**
   * GetMonitoringIndicators
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/monitoring-indicators
   * Operation ID: GetMonitoringIndicators
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMonitoringIndicatorsResponse(
    args: { q?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/monitoring-indicators",
        parameters: [
          {
            name: "q",
            field: "q",
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
   * CreateMonitoringIndicator
   * Required scope - `gambit:static_data`
   * POST /api/erp/v1/monitoring-indicators
   * Operation ID: CreateMonitoringIndicator
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createMonitoringIndicatorResponse(
    args: { body: Models.EditableERPMonitoringIndicator },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/monitoring-indicators",
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
   * GetMonitoringIndicator
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/monitoring-indicators/{id}
   * Operation ID: GetMonitoringIndicator
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMonitoringIndicatorResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/monitoring-indicators/{id}",
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
   * UpdateMonitoringIndicator
   * Required scope - `gambit:static_data`
   * PUT /api/erp/v1/monitoring-indicators/{id}
   * Operation ID: UpdateMonitoringIndicator
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateMonitoringIndicatorResponse(
    args: { id: number; body: Models.EditableERPMonitoringIndicator },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/monitoring-indicators/{id}",
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
   * DeleteMonitoringIndicator
   * Required scope - `gambit:static_data`
   * DELETE /api/erp/v1/monitoring-indicators/{id}
   * Operation ID: DeleteMonitoringIndicator
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteMonitoringIndicatorResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/monitoring-indicators/{id}",
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
    getMonitoringIndicatorsResponse,
    /**
     * GetMonitoringIndicators
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/monitoring-indicators
     * Operation ID: GetMonitoringIndicators
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMonitoringIndicators(
      args: { q?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPMonitoringIndicator>> {
      return transport.read<Array<Models.ERPMonitoringIndicator>>(
        await getMonitoringIndicatorsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createMonitoringIndicatorResponse,
    /**
     * CreateMonitoringIndicator
     * Required scope - `gambit:static_data`
     * POST /api/erp/v1/monitoring-indicators
     * Operation ID: CreateMonitoringIndicator
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createMonitoringIndicator(
      args: { body: Models.EditableERPMonitoringIndicator },
      options?: RequestOptions,
    ): Promise<Models.ERPMonitoringIndicator> {
      return transport.read<Models.ERPMonitoringIndicator>(
        await createMonitoringIndicatorResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getMonitoringIndicatorResponse,
    /**
     * GetMonitoringIndicator
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/monitoring-indicators/{id}
     * Operation ID: GetMonitoringIndicator
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMonitoringIndicator(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPMonitoringIndicator> {
      return transport.read<Models.ERPMonitoringIndicator>(
        await getMonitoringIndicatorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateMonitoringIndicatorResponse,
    /**
     * UpdateMonitoringIndicator
     * Required scope - `gambit:static_data`
     * PUT /api/erp/v1/monitoring-indicators/{id}
     * Operation ID: UpdateMonitoringIndicator
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateMonitoringIndicator(
      args: { id: number; body: Models.EditableERPMonitoringIndicator },
      options?: RequestOptions,
    ): Promise<Models.ERPMonitoringIndicator> {
      return transport.read<Models.ERPMonitoringIndicator>(
        await updateMonitoringIndicatorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteMonitoringIndicatorResponse,
    /**
     * DeleteMonitoringIndicator
     * Required scope - `gambit:static_data`
     * DELETE /api/erp/v1/monitoring-indicators/{id}
     * Operation ID: DeleteMonitoringIndicator
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteMonitoringIndicator(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<undefined> {
      return transport.read<undefined>(
        await deleteMonitoringIndicatorResponse(args, options),
        { "204": { kind: "empty" } },
      );
    },
  };
}
