// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainSalepacks(transport: Transport) {
  /**
   * GetSalepackExecutors
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/salepacks/{salepackId}/executors
   * Operation ID: GetSalepackExecutors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalepackExecutorsResponse(
    args: { salepackId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepacks/{salepackId}/executors",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
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
   * AddSalepackExecutor
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/salepacks/{salepackId}/executors
   * Operation ID: AddSalepackExecutor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addSalepackExecutorResponse(
    args: { salepackId: number; body: Models.ERPEditableSalepackExecutor },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/salepacks/{salepackId}/executors",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
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
   * GetSalepackExecutor
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/salepacks/{salepackId}/executors/{id}
   * Operation ID: GetSalepackExecutor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalepackExecutorResponse(
    args: { salepackId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepacks/{salepackId}/executors/{id}",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
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
   * UpdateSalepackExecutor
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/salepacks/{salepackId}/executors/{id}
   * Operation ID: UpdateSalepackExecutor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateSalepackExecutorResponse(
    args: {
      salepackId: number;
      id: number;
      body: Models.ERPEditableSalepackExecutor;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/salepacks/{salepackId}/executors/{id}",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
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
   * RemoveSalepackExecutor
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/salepacks/{salepackId}/executors/{id}
   * Operation ID: RemoveSalepackExecutor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeSalepackExecutorResponse(
    args: { salepackId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/salepacks/{salepackId}/executors/{id}",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
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
   * GetSalepacks
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/salepack
   * Operation ID: GetSalepacks
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalepacksResponse(
    args: { from: string; to: string; clinicId?: number; packageId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepack",
        parameters: [
          {
            name: "from",
            field: "from",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "to",
            field: "to",
            in: "query",
            required: true,
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
            name: "packageId",
            field: "packageId",
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
   * GetSalepackDebtHistory
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/salepack/debtHistory
   * Operation ID: GetSalepackDebtHistory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalepackDebtHistoryResponse(
    args: { from: string; to: string; clinicId?: number; packageId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepack/debtHistory",
        parameters: [
          {
            name: "from",
            field: "from",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "to",
            field: "to",
            in: "query",
            required: true,
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
            name: "packageId",
            field: "packageId",
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
   * GetSalepack
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/salepack/{salepackId}
   * Operation ID: GetSalepack
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalepackResponse(
    args: { salepackId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepack/{salepackId}",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
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
   * GetSalesInvoiceBySalepackId
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/salepack/{salepackId}/sales-invoice
   * Operation ID: GetSalesInvoiceBySalepackId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalesInvoiceBySalepackIdResponse(
    args: { salepackId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepack/{salepackId}/sales-invoice",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
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
   * GetSalepackServiceId
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/salepack/{salepackId}/get-service-id
   * Operation ID: GetSalepackServiceId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalepackServiceIdResponse(
    args: { salepackId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepack/{salepackId}/get-service-id",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
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
   * GetReferralSalepackSelectedPackages
   *
   * GET /api/salepacks/{salepackId}/referralSalepackPackages
   * Operation ID: GetReferralSalepackSelectedPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferralSalepackSelectedPackagesResponse(
    args: { salepackId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/salepacks/{salepackId}/referralSalepackPackages",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
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
    getSalepackExecutorsResponse,
    /**
     * GetSalepackExecutors
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/salepacks/{salepackId}/executors
     * Operation ID: GetSalepackExecutors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalepackExecutors(
      args: { salepackId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSalepackExecutor>> {
      return transport.read<Array<Models.ERPSalepackExecutor>>(
        await getSalepackExecutorsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addSalepackExecutorResponse,
    /**
     * AddSalepackExecutor
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/salepacks/{salepackId}/executors
     * Operation ID: AddSalepackExecutor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addSalepackExecutor(
      args: { salepackId: number; body: Models.ERPEditableSalepackExecutor },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await addSalepackExecutorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalepackExecutorResponse,
    /**
     * GetSalepackExecutor
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/salepacks/{salepackId}/executors/{id}
     * Operation ID: GetSalepackExecutor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalepackExecutor(
      args: { salepackId: number; id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPSalepackExecutor> {
      return transport.read<Models.ERPSalepackExecutor>(
        await getSalepackExecutorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateSalepackExecutorResponse,
    /**
     * UpdateSalepackExecutor
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/salepacks/{salepackId}/executors/{id}
     * Operation ID: UpdateSalepackExecutor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateSalepackExecutor(
      args: {
        salepackId: number;
        id: number;
        body: Models.ERPEditableSalepackExecutor;
      },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await updateSalepackExecutorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    removeSalepackExecutorResponse,
    /**
     * RemoveSalepackExecutor
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/salepacks/{salepackId}/executors/{id}
     * Operation ID: RemoveSalepackExecutor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeSalepackExecutor(
      args: { salepackId: number; id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeSalepackExecutorResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getSalepacksResponse,
    /**
     * GetSalepacks
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/salepack
     * Operation ID: GetSalepacks
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalepacks(
      args: { from: string; to: string; clinicId?: number; packageId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSalePack>> {
      return transport.read<Array<Models.ERPSalePack>>(
        await getSalepacksResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalepackDebtHistoryResponse,
    /**
     * GetSalepackDebtHistory
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/salepack/debtHistory
     * Operation ID: GetSalepackDebtHistory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalepackDebtHistory(
      args: { from: string; to: string; clinicId?: number; packageId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSalePack>> {
      return transport.read<Array<Models.ERPSalePack>>(
        await getSalepackDebtHistoryResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalepackResponse,
    /**
     * GetSalepack
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/salepack/{salepackId}
     * Operation ID: GetSalepack
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalepack(
      args: { salepackId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPSalePack> {
      return transport.read<Models.ERPSalePack>(
        await getSalepackResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalesInvoiceBySalepackIdResponse,
    /**
     * GetSalesInvoiceBySalepackId
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/salepack/{salepackId}/sales-invoice
     * Operation ID: GetSalesInvoiceBySalepackId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalesInvoiceBySalepackId(
      args: { salepackId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPSalesInvoice> {
      return transport.read<Models.ERPSalesInvoice>(
        await getSalesInvoiceBySalepackIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalepackServiceIdResponse,
    /**
     * GetSalepackServiceId
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/salepack/{salepackId}/get-service-id
     * Operation ID: GetSalepackServiceId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalepackServiceId(
      args: { salepackId: number },
      options?: RequestOptions,
    ): Promise<Models.PatientServiceIdentificator> {
      return transport.read<Models.PatientServiceIdentificator>(
        await getSalepackServiceIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getReferralSalepackSelectedPackagesResponse,
    /**
     * GetReferralSalepackSelectedPackages
     *
     * GET /api/salepacks/{salepackId}/referralSalepackPackages
     * Operation ID: GetReferralSalepackSelectedPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferralSalepackSelectedPackages(
      args: { salepackId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PatientPackagesDto>> {
      return transport.read<Array<Models.PatientPackagesDto>>(
        await getReferralSalepackSelectedPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
