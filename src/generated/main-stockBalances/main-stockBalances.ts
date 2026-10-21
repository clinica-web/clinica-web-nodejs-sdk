// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainStockBalances(transport: Transport) {
  /**
   * GetStockBalances
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/stock-balances
   * Operation ID: GetStockBalances
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStockBalancesResponse(
    args: { storageId: number; nomenclatureId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/stock-balances",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
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
   * GetStockBalancesReport
   * Required scope - `gambit:erp:material:read`
   * POST /api/erp/v1/stock-balances/report
   * Operation ID: GetStockBalancesReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStockBalancesReportResponse(
    args: { body: Models.ERPStockBalanceReportQuery },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/stock-balances/report",
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
   * GetStockBalancesSlimReport
   * Required scope - `gambit:erp:material:read`
   * POST /api/erp/v1/stock-balances/slim-report
   * Operation ID: GetStockBalancesSlimReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStockBalancesSlimReportResponse(
    args: { body: Models.ERPStockBalanceReportQuery },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/stock-balances/slim-report",
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
   * GetStockBalancesForConsumption
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/stock-balances/for-consumption
   * Operation ID: GetStockBalancesForConsumption
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStockBalancesForConsumptionResponse(
    args: {
      storageId: number;
      documentDate: string;
      groupId?: number;
      isLotSelect?: boolean;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/stock-balances/for-consumption",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "documentDate",
            field: "documentDate",
            in: "query",
            required: true,
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
          {
            name: "isLotSelect",
            field: "isLotSelect",
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
   * GetStockBalancesForSale
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/stock-balances/for-sale
   * Operation ID: GetStockBalancesForSale
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStockBalancesForSaleResponse(
    args: {
      storageId: number;
      documentDate: string;
      priceId: number;
      groupId?: number;
      isLotSelect?: boolean;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/stock-balances/for-sale",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "documentDate",
            field: "documentDate",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "priceId",
            field: "priceId",
            in: "query",
            required: true,
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
          {
            name: "isLotSelect",
            field: "isLotSelect",
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
   * GetStockBalancesForAdjustment
   * Required scope - `gambit:erp:material:read`
   * POST /api/erp/v1/stock-balances/for-adjustment
   * Operation ID: GetStockBalancesForAdjustment
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStockBalancesForAdjustmentResponse(
    args: { body: Array<number> },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/stock-balances/for-adjustment",
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
   * GetStockBalanceById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/stock-balances/{id}
   * Operation ID: GetStockBalanceById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getStockBalanceByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/stock-balances/{id}",
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
    getStockBalancesResponse,
    /**
     * GetStockBalances
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/stock-balances
     * Operation ID: GetStockBalances
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStockBalances(
      args: { storageId: number; nomenclatureId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStockBalance>> {
      return transport.read<Array<Models.ERPStockBalance>>(
        await getStockBalancesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStockBalancesReportResponse,
    /**
     * GetStockBalancesReport
     * Required scope - `gambit:erp:material:read`
     * POST /api/erp/v1/stock-balances/report
     * Operation ID: GetStockBalancesReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStockBalancesReport(
      args: { body: Models.ERPStockBalanceReportQuery },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStockBalanceReport>> {
      return transport.read<Array<Models.ERPStockBalanceReport>>(
        await getStockBalancesReportResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStockBalancesSlimReportResponse,
    /**
     * GetStockBalancesSlimReport
     * Required scope - `gambit:erp:material:read`
     * POST /api/erp/v1/stock-balances/slim-report
     * Operation ID: GetStockBalancesSlimReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStockBalancesSlimReport(
      args: { body: Models.ERPStockBalanceReportQuery },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStockBalanceReport>> {
      return transport.read<Array<Models.ERPStockBalanceReport>>(
        await getStockBalancesSlimReportResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStockBalancesForConsumptionResponse,
    /**
     * GetStockBalancesForConsumption
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/stock-balances/for-consumption
     * Operation ID: GetStockBalancesForConsumption
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStockBalancesForConsumption(
      args: {
        storageId: number;
        documentDate: string;
        groupId?: number;
        isLotSelect?: boolean;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStockBalance>> {
      return transport.read<Array<Models.ERPStockBalance>>(
        await getStockBalancesForConsumptionResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStockBalancesForSaleResponse,
    /**
     * GetStockBalancesForSale
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/stock-balances/for-sale
     * Operation ID: GetStockBalancesForSale
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStockBalancesForSale(
      args: {
        storageId: number;
        documentDate: string;
        priceId: number;
        groupId?: number;
        isLotSelect?: boolean;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStockBalance>> {
      return transport.read<Array<Models.ERPStockBalance>>(
        await getStockBalancesForSaleResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStockBalancesForAdjustmentResponse,
    /**
     * GetStockBalancesForAdjustment
     * Required scope - `gambit:erp:material:read`
     * POST /api/erp/v1/stock-balances/for-adjustment
     * Operation ID: GetStockBalancesForAdjustment
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStockBalancesForAdjustment(
      args: { body: Array<number> },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPStockBalanceReport>> {
      return transport.read<Array<Models.ERPStockBalanceReport>>(
        await getStockBalancesForAdjustmentResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getStockBalanceByIdResponse,
    /**
     * GetStockBalanceById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/stock-balances/{id}
     * Operation ID: GetStockBalanceById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getStockBalanceById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPStockBalance> {
      return transport.read<Models.ERPStockBalance>(
        await getStockBalanceByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
