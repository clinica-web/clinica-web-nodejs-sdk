// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";
import { readJsonArray } from "../../streaming/json-array";
export function createMainReports(transport: Transport) {
  /**
   * GetConsolidatedReport
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/reports/consolidated
   * Operation ID: GetConsolidatedReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getConsolidatedReportResponse(
    args: { dateStart: string; dateEnd: string; clinicId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/reports/consolidated",
        parameters: [
          {
            name: "dateStart",
            field: "dateStart",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateEnd",
            field: "dateEnd",
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
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetCashDeskReport
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/reports/cashDesk
   * Operation ID: GetCashDeskReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function cashDeskResponse(
    args: { dateStart: string; dateEnd: string; clinicId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/reports/cashDesk",
        parameters: [
          {
            name: "dateStart",
            field: "dateStart",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateEnd",
            field: "dateEnd",
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
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetPrerecordsReport
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/reports/prerecords
   * Operation ID: GetPrerecordsReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrerecordsReportResponse(
    args: {
      dateStart: string;
      dateEnd: string;
      clinicId?: number;
      filterByPrerecordDate?: boolean;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/reports/prerecords",
        parameters: [
          {
            name: "dateStart",
            field: "dateStart",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateEnd",
            field: "dateEnd",
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
            name: "filterByPrerecordDate",
            field: "filterByPrerecordDate",
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
   * GetUserSalaryReport
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/reports/userSalary
   * Operation ID: GetUserSalaryReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserSalaryReportResponse(
    args: { from: string; to: string; clinicId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/reports/userSalary",
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
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetCovidReport
   * Required scope - `gambit:erp:salepack`
   * GET /api/erp/v1/reports/covid
   * Operation ID: GetCovidReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCovidReportResponse(
    args: { from: string; to: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/reports/covid",
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
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetSchedulerReport
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/reports/scheduler
   * Operation ID: GetSchedulerReport
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSchedulerReportResponse(
    args: { from: string; to: string; clinicId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/reports/scheduler",
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
    getConsolidatedReportResponse,
    /**
     * GetConsolidatedReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/consolidated
     * Operation ID: GetConsolidatedReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getConsolidatedReport(
      args: { dateStart: string; dateEnd: string; clinicId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ReportAll>> {
      return transport.read<Array<Models.ReportAll>>(
        await getConsolidatedReportResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    /**
     * GetConsolidatedReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/consolidated
     * Operation ID: GetConsolidatedReport
     * Lazy single-use iterator. Cancels on break/abort/error. Earlier rows may precede a later failure. No retries.
     */
    async *streamConsolidatedReport(
      args: { dateStart: string; dateEnd: string; clinicId?: number },
      options?: RequestOptions,
    ): AsyncGenerator<Models.ReportAll> {
      yield* readJsonArray<Models.ReportAll>(
        await getConsolidatedReportResponse(args, options),
        options?.signal,
      );
    },
    cashDeskResponse,
    /**
     * GetCashDeskReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/cashDesk
     * Operation ID: GetCashDeskReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async cashDesk(
      args: { dateStart: string; dateEnd: string; clinicId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ReportCashDesk>> {
      return transport.read<Array<Models.ReportCashDesk>>(
        await cashDeskResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    /**
     * GetCashDeskReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/cashDesk
     * Operation ID: GetCashDeskReport
     * Lazy single-use iterator. Cancels on break/abort/error. Earlier rows may precede a later failure. No retries.
     */
    async *streamCashDesk(
      args: { dateStart: string; dateEnd: string; clinicId?: number },
      options?: RequestOptions,
    ): AsyncGenerator<Models.ReportCashDesk> {
      yield* readJsonArray<Models.ReportCashDesk>(
        await cashDeskResponse(args, options),
        options?.signal,
      );
    },
    getPrerecordsReportResponse,
    /**
     * GetPrerecordsReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/prerecords
     * Operation ID: GetPrerecordsReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrerecordsReport(
      args: {
        dateStart: string;
        dateEnd: string;
        clinicId?: number;
        filterByPrerecordDate?: boolean;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ReportPrerecordBase>> {
      return transport.read<Array<Models.ReportPrerecordBase>>(
        await getPrerecordsReportResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    /**
     * GetPrerecordsReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/prerecords
     * Operation ID: GetPrerecordsReport
     * Lazy single-use iterator. Cancels on break/abort/error. Earlier rows may precede a later failure. No retries.
     */
    async *streamPrerecordsReport(
      args: {
        dateStart: string;
        dateEnd: string;
        clinicId?: number;
        filterByPrerecordDate?: boolean;
      },
      options?: RequestOptions,
    ): AsyncGenerator<Models.ReportPrerecordBase> {
      yield* readJsonArray<Models.ReportPrerecordBase>(
        await getPrerecordsReportResponse(args, options),
        options?.signal,
      );
    },
    getUserSalaryReportResponse,
    /**
     * GetUserSalaryReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/userSalary
     * Operation ID: GetUserSalaryReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserSalaryReport(
      args: { from: string; to: string; clinicId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.UserSalaryReportDto>> {
      return transport.read<Array<Models.UserSalaryReportDto>>(
        await getUserSalaryReportResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    /**
     * GetUserSalaryReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/userSalary
     * Operation ID: GetUserSalaryReport
     * Lazy single-use iterator. Cancels on break/abort/error. Earlier rows may precede a later failure. No retries.
     */
    async *streamUserSalaryReport(
      args: { from: string; to: string; clinicId?: number },
      options?: RequestOptions,
    ): AsyncGenerator<Models.UserSalaryReportDto> {
      yield* readJsonArray<Models.UserSalaryReportDto>(
        await getUserSalaryReportResponse(args, options),
        options?.signal,
      );
    },
    getCovidReportResponse,
    /**
     * GetCovidReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/covid
     * Operation ID: GetCovidReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCovidReport(
      args: { from: string; to: string },
      options?: RequestOptions,
    ): Promise<Array<Models.AnalysisExportCovidModel>> {
      return transport.read<Array<Models.AnalysisExportCovidModel>>(
        await getCovidReportResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    /**
     * GetCovidReport
     * Required scope - `gambit:erp:salepack`
     * GET /api/erp/v1/reports/covid
     * Operation ID: GetCovidReport
     * Lazy single-use iterator. Cancels on break/abort/error. Earlier rows may precede a later failure. No retries.
     */
    async *streamCovidReport(
      args: { from: string; to: string },
      options?: RequestOptions,
    ): AsyncGenerator<Models.AnalysisExportCovidModel> {
      yield* readJsonArray<Models.AnalysisExportCovidModel>(
        await getCovidReportResponse(args, options),
        options?.signal,
      );
    },
    getSchedulerReportResponse,
    /**
     * GetSchedulerReport
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/reports/scheduler
     * Operation ID: GetSchedulerReport
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSchedulerReport(
      args: { from: string; to: string; clinicId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.SchedulerExportViewModel>> {
      return transport.read<Array<Models.SchedulerExportViewModel>>(
        await getSchedulerReportResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    /**
     * GetSchedulerReport
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/reports/scheduler
     * Operation ID: GetSchedulerReport
     * Lazy single-use iterator. Cancels on break/abort/error. Earlier rows may precede a later failure. No retries.
     */
    async *streamSchedulerReport(
      args: { from: string; to: string; clinicId: number },
      options?: RequestOptions,
    ): AsyncGenerator<Models.SchedulerExportViewModel> {
      yield* readJsonArray<Models.SchedulerExportViewModel>(
        await getSchedulerReportResponse(args, options),
        options?.signal,
      );
    },
  };
}
