// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineContracts(transport: Transport) {
  /**
   * CreateAsync Contract
   * Required scope - `gambit:patient:contract`
   * POST /api/online/v1/contracts
   * Operation ID: CreatePatientContract
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPatientContractResponse(
    args: { body?: Models.OnlinePatientContract } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/contracts",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Confirm payment
   * Required scope - `gambit:contract`
   * POST /api/online/v1/contracts/payment-confirm
   * Operation ID: ConfirmContractPayment
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function confirmContractPaymentResponse(
    args: { body?: Models.OnlinePatientAccountContract } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/contracts/payment-confirm",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * CalculatePackagesCost
   * Required scope - `gambit:contract`
   * POST /api/online/v1/contracts/calculate-packages-cost
   * Operation ID: CalculateContractPackagesCost
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function calculateContractPackagesCostResponse(
    args: { body?: Models.OnlinePatientContract } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/contracts/calculate-packages-cost",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Confirm payment
   * Required scope - `gambit:contract`
   * POST /api/online/v1/contracts/cancel-contract
   * Operation ID: CancelContract
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function cancelContractResponse(
    args: { body?: Models.CancelContractCommand } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/contracts/cancel-contract",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Get Status
   * Required scope - `gambit:contract`
   * POST /api/online/v1/contracts/{id}/info
   * Operation ID: GetContractInfo
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getContractInfoResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/contracts/{id}/info",
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
    createPatientContractResponse,
    /**
     * CreateAsync Contract
     * Required scope - `gambit:patient:contract`
     * POST /api/online/v1/contracts
     * Operation ID: CreatePatientContract
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPatientContract(
      args: { body?: Models.OnlinePatientContract } = {},
      options?: RequestOptions,
    ): Promise<Models.CreateOnlinePatientContractResponse> {
      return transport.read<Models.CreateOnlinePatientContractResponse>(
        await createPatientContractResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    confirmContractPaymentResponse,
    /**
     * Confirm payment
     * Required scope - `gambit:contract`
     * POST /api/online/v1/contracts/payment-confirm
     * Operation ID: ConfirmContractPayment
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async confirmContractPayment(
      args: { body?: Models.OnlinePatientAccountContract } = {},
      options?: RequestOptions,
    ): Promise<Models.CreateOnlinePatientContractResponse> {
      return transport.read<Models.CreateOnlinePatientContractResponse>(
        await confirmContractPaymentResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    calculateContractPackagesCostResponse,
    /**
     * CalculatePackagesCost
     * Required scope - `gambit:contract`
     * POST /api/online/v1/contracts/calculate-packages-cost
     * Operation ID: CalculateContractPackagesCost
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async calculateContractPackagesCost(
      args: { body?: Models.OnlinePatientContract } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.CalculateContractPackagesCostResult>> {
      return transport.read<Array<Models.CalculateContractPackagesCostResult>>(
        await calculateContractPackagesCostResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    cancelContractResponse,
    /**
     * Confirm payment
     * Required scope - `gambit:contract`
     * POST /api/online/v1/contracts/cancel-contract
     * Operation ID: CancelContract
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async cancelContract(
      args: { body?: Models.CancelContractCommand } = {},
      options?: RequestOptions,
    ): Promise<Models.BusinessResponse> {
      return transport.read<Models.BusinessResponse>(
        await cancelContractResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getContractInfoResponse,
    /**
     * Get Status
     * Required scope - `gambit:contract`
     * POST /api/online/v1/contracts/{id}/info
     * Operation ID: GetContractInfo
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getContractInfo(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ContractInfo> {
      return transport.read<Models.ContractInfo>(
        await getContractInfoResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
