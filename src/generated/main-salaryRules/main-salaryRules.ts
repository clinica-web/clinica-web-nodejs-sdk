// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainSalaryRules(transport: Transport) {
  /**
   * GetSalaryRules
   * Required scope - `gambit:erp:salary-rules`
   * GET /api/erp/v1/salary-rules
   * Operation ID: GetSalaryRules
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalaryRulesResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salary-rules",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateSalaryRule
   * Required scope - `gambit:erp:salary-rules`
   * POST /api/erp/v1/salary-rules
   * Operation ID: CreateSalaryRule
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createSalaryRuleResponse(
    args: { body: Models.ERPEditableSalaryRule },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/salary-rules",
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
   * GetMatchingSalaryRules
   * Required scope - `gambit:erp:salary-rules`
   * POST /api/erp/v1/salary-rules/matchingRules
   * Operation ID: GetMatchingSalaryRules
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMatchingSalaryRulesResponse(
    args: { body: Models.GetMatchingRulesRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/salary-rules/matchingRules",
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
   * GetSalaryRuleById
   * Required scope - `gambit:erp:salary-rules`
   * GET /api/erp/v1/salary-rules/{id}
   * Operation ID: GetSalaryRuleById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalaryRuleByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salary-rules/{id}",
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
   * RemoveSalaryRule
   * Required scope - `gambit:erp:salary-rules`
   * DELETE /api/erp/v1/salary-rules/{id}
   * Operation ID: RemoveSalaryRule
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeSalaryRuleResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/salary-rules/{id}",
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
   * UpdateSalaryRule
   * Required scope - `gambit:erp:salary-rules`
   * PUT /api/erp/v1/salary-rules/{id}
   * Operation ID: UpdateSalaryRule
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateSalaryRuleResponse(
    args: { id: number; body: Models.ERPEditableSalaryRule },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/salary-rules/{id}",
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
   * SetSalaryRuleEffectiveTo
   * Required scope - `gambit:erp:salary-rules`
   * PATCH /api/erp/v1/salary-rules/{id}/setEffectiveTo
   * Operation ID: SetSalaryRuleEffectiveTo
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function setSalaryRuleEffectiveToResponse(
    args: { id: number; body: Models.DateTimeOffsetOneValueUpdateDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/salary-rules/{id}/setEffectiveTo",
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
   * DeactivateSalaryRule
   * Required scope - `gambit:erp:salary-rules`
   * PATCH /api/erp/v1/salary-rules/{id}/deactivate
   * Operation ID: DeactivateSalaryRule
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deactivateSalaryRuleResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/salary-rules/{id}/deactivate",
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
    getSalaryRulesResponse,
    /**
     * GetSalaryRules
     * Required scope - `gambit:erp:salary-rules`
     * GET /api/erp/v1/salary-rules
     * Operation ID: GetSalaryRules
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalaryRules(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSalaryRule>> {
      return transport.read<Array<Models.ERPSalaryRule>>(
        await getSalaryRulesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createSalaryRuleResponse,
    /**
     * CreateSalaryRule
     * Required scope - `gambit:erp:salary-rules`
     * POST /api/erp/v1/salary-rules
     * Operation ID: CreateSalaryRule
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createSalaryRule(
      args: { body: Models.ERPEditableSalaryRule },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createSalaryRuleResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getMatchingSalaryRulesResponse,
    /**
     * GetMatchingSalaryRules
     * Required scope - `gambit:erp:salary-rules`
     * POST /api/erp/v1/salary-rules/matchingRules
     * Operation ID: GetMatchingSalaryRules
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMatchingSalaryRules(
      args: { body: Models.GetMatchingRulesRequest },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSalaryRule>> {
      return transport.read<Array<Models.ERPSalaryRule>>(
        await getMatchingSalaryRulesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalaryRuleByIdResponse,
    /**
     * GetSalaryRuleById
     * Required scope - `gambit:erp:salary-rules`
     * GET /api/erp/v1/salary-rules/{id}
     * Operation ID: GetSalaryRuleById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalaryRuleById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPSalaryRule> {
      return transport.read<Models.ERPSalaryRule>(
        await getSalaryRuleByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    removeSalaryRuleResponse,
    /**
     * RemoveSalaryRule
     * Required scope - `gambit:erp:salary-rules`
     * DELETE /api/erp/v1/salary-rules/{id}
     * Operation ID: RemoveSalaryRule
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeSalaryRule(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeSalaryRuleResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateSalaryRuleResponse,
    /**
     * UpdateSalaryRule
     * Required scope - `gambit:erp:salary-rules`
     * PUT /api/erp/v1/salary-rules/{id}
     * Operation ID: UpdateSalaryRule
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateSalaryRule(
      args: { id: number; body: Models.ERPEditableSalaryRule },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateSalaryRuleResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    setSalaryRuleEffectiveToResponse,
    /**
     * SetSalaryRuleEffectiveTo
     * Required scope - `gambit:erp:salary-rules`
     * PATCH /api/erp/v1/salary-rules/{id}/setEffectiveTo
     * Operation ID: SetSalaryRuleEffectiveTo
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async setSalaryRuleEffectiveTo(
      args: { id: number; body: Models.DateTimeOffsetOneValueUpdateDto },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await setSalaryRuleEffectiveToResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deactivateSalaryRuleResponse,
    /**
     * DeactivateSalaryRule
     * Required scope - `gambit:erp:salary-rules`
     * PATCH /api/erp/v1/salary-rules/{id}/deactivate
     * Operation ID: DeactivateSalaryRule
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deactivateSalaryRule(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deactivateSalaryRuleResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
