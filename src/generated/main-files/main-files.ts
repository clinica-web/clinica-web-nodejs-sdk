// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainFiles(transport: Transport) {
  /**
   * InitializePublicFileUploadByPathFileName
   * Required scope - `gambit:erp:files`
   * POST /api/erp/v1/public/files/initialize/{fileName}
   * Operation ID: InitializePublicFileUploadByPathFileName
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function initializePublicFileUploadByPathFileNameResponse(
    args: { fileName: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/public/files/initialize/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
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
   * InitializePublicFileUpload
   * Required scope - `gambit:erp:files`
   * POST /api/erp/v1/public/files/initialize
   * Operation ID: InitializePublicFileUpload
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function initializePublicFileUploadResponse(
    args: { fileName: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/public/files/initialize",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
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
    initializePublicFileUploadByPathFileNameResponse,
    /**
     * InitializePublicFileUploadByPathFileName
     * Required scope - `gambit:erp:files`
     * POST /api/erp/v1/public/files/initialize/{fileName}
     * Operation ID: InitializePublicFileUploadByPathFileName
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async initializePublicFileUploadByPathFileName(
      args: { fileName: string },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await initializePublicFileUploadByPathFileNameResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    initializePublicFileUploadResponse,
    /**
     * InitializePublicFileUpload
     * Required scope - `gambit:erp:files`
     * POST /api/erp/v1/public/files/initialize
     * Operation ID: InitializePublicFileUpload
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async initializePublicFileUpload(
      args: { fileName: string },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await initializePublicFileUploadResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
