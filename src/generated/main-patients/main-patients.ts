// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPatients(transport: Transport) {
  /**
   * GetProtocolDrugs
   * Required scope - `gambit:public:patient:read`
   * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs
   * Operation ID: GetProtocolDrugs
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getProtocolDrugsResponse(
    args: { patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * CreateProtocolDrug
   * Required scope - `gambit:public:patient:write`
   * POST /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs
   * Operation ID: CreateProtocolDrug
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createProtocolDrugResponse(
    args: {
      patientId: number;
      protocolId: number;
      body: Models.ERPProtocolDrugCreateRequest;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * UpdateProtocolDrug
   * Required scope - `gambit:public:patient:write`
   * PUT /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs/{protocolDrugId}
   * Operation ID: UpdateProtocolDrug
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateProtocolDrugResponse(
    args: {
      patientId: number;
      protocolId: number;
      protocolDrugId: number;
      body: Models.ERPProtocolDrugUpdateRequest;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs/{protocolDrugId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolDrugId",
            field: "protocolDrugId",
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
   * DeleteProtocolDrug
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs/{protocolDrugId}
   * Operation ID: DeleteProtocolDrug
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteProtocolDrugResponse(
    args: { patientId: number; protocolId: number; protocolDrugId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs/{protocolDrugId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolDrugId",
            field: "protocolDrugId",
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
   * GetProtocolMonitoringAssignments
   * Required scope - `gambit:public:patient:read`
   * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments
   * Operation ID: GetProtocolMonitoringAssignments
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getProtocolMonitoringAssignmentsResponse(
    args: { patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * CreateProtocolMonitoringAssignment
   * Required scope - `gambit:public:patient:write`
   * POST /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments
   * Operation ID: CreateProtocolMonitoringAssignment
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createProtocolMonitoringAssignmentResponse(
    args: {
      patientId: number;
      protocolId: number;
      body: Models.ERPProtocolMonitoringCreateRequest;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * GetProtocolMonitoringAssignment
   * Required scope - `gambit:public:patient:read`
   * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}
   * Operation ID: GetProtocolMonitoringAssignment
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getProtocolMonitoringAssignmentResponse(
    args: { patientId: number; protocolId: number; assignmentId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "assignmentId",
            field: "assignmentId",
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
   * UpdateProtocolMonitoringAssignment
   * Required scope - `gambit:public:patient:write`
   * PUT /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}
   * Operation ID: UpdateProtocolMonitoringAssignment
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateProtocolMonitoringAssignmentResponse(
    args: {
      patientId: number;
      protocolId: number;
      assignmentId: number;
      body: Models.ERPProtocolMonitoringUpdateRequest;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "assignmentId",
            field: "assignmentId",
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
   * DeleteProtocolMonitoringAssignment
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}
   * Operation ID: DeleteProtocolMonitoringAssignment
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteProtocolMonitoringAssignmentResponse(
    args: { patientId: number; protocolId: number; assignmentId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "assignmentId",
            field: "assignmentId",
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
   * GetPatientMonitoringAssignments
   * Required scope - `gambit:public:patient:read`
   * GET /api/erp/v1/patients/{patientId}/monitoring-assignments
   * Operation ID: GetPatientMonitoringAssignments
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientMonitoringAssignmentsResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/monitoring-assignments",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * GetPatientHospitalizationAppointments
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patients/{patientId}/hospitalizations
   * Operation ID: GetPatientHospitalizationAppointments
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientHospitalizationAppointmentsResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/hospitalizations",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * GetPatientAnalysisFiles
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files
   * Operation ID: GetPatientAnalysisFiles
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientAnalysisFilesResponse(
    args: { analysisId: number; patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/analysis/{analysisId}/files",
        parameters: [
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
   * GenerateAnalysisFileUploadUri
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/initialize/{fileName}
   * Operation ID: GenerateAnalysisFileUploadUri
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function generateAnalysisFileUploadUriResponse(
    args: { fileName: string; patientId: number; analysisId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/initialize/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "analysisId",
            field: "analysisId",
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
   * AllowSendAnalysisFile
   * Required scope - `gambit:erp`
   * PATCH /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{id}
   * Operation ID: AllowSendAnalysisFile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function allowSendAnalysisFileResponse(
    args: {
      analysisId: number;
      patientId: number;
      id: number;
      isSend: boolean;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{id}",
        parameters: [
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
          {
            name: "isSend",
            field: "isSend",
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
   * DeleteAnalysisFile
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{id}
   * Operation ID: DeleteAnalysisFile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteAnalysisFileResponse(
    args: { analysisId: number; patientId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{id}",
        parameters: [
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
   * CreateAnalysisFile
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{fileName}
   * Operation ID: CreateAnalysisFile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createAnalysisFileResponse(
    args: { analysisId: number; patientId: number; fileName: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{fileName}",
        parameters: [
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
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
   * GetPatientFiles
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patients/{patientId}/files
   * Operation ID: GetPatientFiles
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientFilesResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/files",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * GeneratePatientFileUploadUri
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/files/initialize/{fileName}
   * Operation ID: GeneratePatientFileUploadUri
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function generatePatientFileUploadUriResponse(
    args: { fileName: string; patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/files/initialize/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
   * CreatePatientFile
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/files/{fileName}
   * Operation ID: CreatePatientFile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPatientFileResponse(
    args: { fileName: string; patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/files/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
   * DeletePatientFile
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/patients/{patientId}/files/{id}
   * Operation ID: DeletePatientFile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePatientFileResponse(
    args: { patientId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patients/{patientId}/files/{id}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * GetPatientProtocolFiles
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files
   * Operation ID: GetPatientProtocolFiles
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientProtocolFilesResponse(
    args: { protocolId: number; patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/files",
        parameters: [
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
   * GenerateProtocolFileUploadUri
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/initialize/{fileName}
   * Operation ID: GenerateProtocolFileUploadUri
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function generateProtocolFileUploadUriResponse(
    args: { fileName: string; patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/initialize/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * CreateProtocolFile
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/{fileName}
   * Operation ID: CreateProtocolFile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createProtocolFileResponse(
    args: { fileName: string; patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * DeleteProtocolFile
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/{id}
   * Operation ID: DeleteProtocolFile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteProtocolFileResponse(
    args: { protocolId: number; patientId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/{id}",
        parameters: [
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
   * GetPatientProtocolImages
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images
   * Operation ID: GetPatientProtocolImages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientProtocolImagesResponse(
    args: { protocolId: number; patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/images",
        parameters: [
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
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
   * GenerateProtocolImageUploadUri
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/initialize/{fileName}
   * Operation ID: GenerateProtocolImageUploadUri
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function generateProtocolImageUploadUriResponse(
    args: { fileName: string; patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/initialize/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * CreateProtocolImage
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/{fileName}
   * Operation ID: CreateProtocolImage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createProtocolImageResponse(
    args: { fileName: string; patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/{fileName}",
        parameters: [
          {
            name: "fileName",
            field: "fileName",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * DeleteProtocolImage
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/{id}
   * Operation ID: DeleteProtocolImage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteProtocolImageResponse(
    args: { patientId: number; protocolId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/{id}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * GetProtocolServices
   * Required scope - `gambit:public:patient:read`
   * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages
   * Operation ID: GetProtocolServices
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getProtocolServicesResponse(
    args: { patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * CreateProtocolService
   * Required scope - `gambit:public:patient:write`
   * POST /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages
   * Operation ID: CreateProtocolService
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createProtocolServiceResponse(
    args: {
      patientId: number;
      protocolId: number;
      body: Models.EditableERPReferralSalepackPackage;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * UpdateProtocolService
   * Required scope - `gambit:public:patient:write`
   * PUT /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages/{referralSalepackPackageId}
   * Operation ID: UpdateProtocolService
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateProtocolServiceResponse(
    args: {
      patientId: number;
      protocolId: number;
      referralSalepackPackageId: number;
      body: Models.EditableERPReferralSalepackPackage;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages/{referralSalepackPackageId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "referralSalepackPackageId",
            field: "referralSalepackPackageId",
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
   * DeleteProtocolService
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages/{referralSalepackPackageId}
   * Operation ID: DeleteProtocolService
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteProtocolServiceResponse(
    args: {
      patientId: number;
      protocolId: number;
      referralSalepackPackageId: number;
      /**
       * Values:
       *
       * - `0`: CorrectionOfAppointments
       *
       * - `1`: PatientRefusal
       *
       * - `2`: AlreadyDone
       *
       *
       */ removeReasonId?: Models.RemoveReferalSalepackPackageReason;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages/{referralSalepackPackageId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "referralSalepackPackageId",
            field: "referralSalepackPackageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "removeReasonId",
            field: "removeReasonId",
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
   * GetPatientReferrals
   * Required scope - `gambit:erp`
   * GET /api/public/v1/patients/{id}/referral-salepack-packages
   * Operation ID: GetPatientReferrals
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientReferralsResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{id}/referral-salepack-packages",
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
   * Returns list of family members
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{patientId}/familyMembers
   * Operation ID: GetPatientFamilyMembers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientFamilyMembersResponse(
    args: {
      /**
       * patient family owner id
       */ patientId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/familyMembers",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * Remove family member by family member identifier
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/public/v1/patients/{patientId}/familyMembers/{memberId}
   * Operation ID: RemovePatientFamilyMember
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removePatientFamilyMemberResponse(
    args: {
      /**
       * family owner id
       */ patientId: number;
      /**
       * family member id
       */ memberId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/public/v1/patients/{patientId}/familyMembers/{memberId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "memberId",
            field: "memberId",
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
   * Get family member by id
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{patientId}/familyMembers/{memberId}
   * Operation ID: GetPatientFamilyMemberById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientFamilyMemberByIdResponse(
    args: {
      /**
       * family owner id
       */ patientId: number;
      /**
       * family member id
       */ memberId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/familyMembers/{memberId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "memberId",
            field: "memberId",
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
   * Get family owmer by family member identifier
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{patientId}/familyOwner
   * Operation ID: GetPatientFamilyOwner
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientFamilyOwnerResponse(
    args: {
      /**
       * patient id (family owner)
       */ patientId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/familyOwner",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * returns all patient positions by identifier
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{id}/positions
   * Operation ID: GetPatientPositions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientPositionsResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{id}/positions",
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
   * GetPatientPositionsDisplay
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{id}/positions/display
   * Operation ID: GetPatientPositionsDisplay
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientPositionsDisplayResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{id}/positions/display",
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
   * Returns all patient positions by external identifier
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{externalId}/positions
   * Operation ID: GetPatientPositionsByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientPositionsByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{externalId}/positions",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * Create patient
   * Required scope - `gambit:public:patient:write`
   *
   * Api supports different creation strategies `$.Options.CreateStrategy`:
   *
   * - `0`: Default - creates patient every time and do not check if patient exists
   * - `1`: GetOrCreate - if patient exists, returns it, otherwise creates new one (in this case you can provide minimum required information)
   * - `2`: CreateOrUpdate - if patient exists, updates it, otherwise creates new one (in this case you should provide all patient data)
   *
   * ```json
   * {
   *   "Patient": {
   *     "LFM": "Last First",
   *     "Born": "2025-01-26",
   *     "TelMob1": "0000000000"
   *   },
   *   "Options": {
   *     "CreateStrategy": 1
   *   }
   * }
   * ```
   * POST /api/public/v1/patients
   * Operation ID: CreatePatient
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPatientResponse(
    args: { body: Models.CreatePublicPatientRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/public/v1/patients",
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
   * Api for searching patients
   * Required scope - `gambit:public:patient:read`
   *
   * Searching is case insensitive.
   *
   * - if value is matching to phone numbers - api will look for patients with this phone number
   * - else api will look for patients with this name
   *
   * pagination:
   *  - first page: `skip=0 take=20`
   *  - second page: `skip=20 take=20`
   *  - page x: `skip=(x-1)*20 take=20`
   * GET /api/public/v1/patients
   * Operation ID: SearchPatients
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchPatientsResponse(
    args: {
      /**
       * searching expression
       */ query?: string;
      /**
       * number of records to skip
       */ skip?: number;
      /**
       * number of records to take, max is 100
       */ take?: number;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients",
        parameters: [
          {
            name: "query",
            field: "query",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "skip",
            field: "skip",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "take",
            field: "take",
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
   * Get patient full information by identifier
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{id}
   * Operation ID: GetPatientById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{id}",
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
   * Remove patient by identifier
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/public/v1/patients/{id}
   * Operation ID: DeletePatient
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePatientResponse(
    args: {
      /**
       * patient identifier
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/public/v1/patients/{id}",
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
   * Update patient by id
   * Required scope - `gambit:public:patient:write`
   *
   * api does not support patching, so all information should be provided
   * PUT /api/public/v1/patients/{id}
   * Operation ID: UpdatePatient
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePatientResponse(
    args: {
      /**
       * patient identifier
       */ id: number;
      /**
       * Data to be updated
       */ body: Models.UpdatePublicPatientRequest;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/public/v1/patients/{id}",
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
   * Generate unique barcode value for patient
   * Required scope - `gambit:public:patient:write`
   *
   * This can be used for different kinds of integration where patient should have unique identifier that fits into barcode
   * PATCH /api/public/v1/patients/{id}/generateBarcode
   * Operation ID: EnsurePatientBarcode
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function ensurePatientBarcodeResponse(
    args: {
      /**
       * patient identifier
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/public/v1/patients/{id}/generateBarcode",
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
   * Get patient full information by external identifier
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{externalId}
   * Operation ID: GetPatientByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * Remove patient by external identifier
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/public/v1/patients/{externalId}
   * Operation ID: DeletePatientByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePatientByExternalIdResponse(
    args: {
      /**
       * patient external identifier
       */ externalId: string;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/public/v1/patients/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * UpdatePatientByExternalId
   * Required scope - `gambit:public:patient:write`
   * PUT /api/public/v1/patients/{externalId}
   * Operation ID: UpdatePatientByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePatientByExternalIdResponse(
    args: { externalId: string; body: Models.UpdatePublicPatientRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/public/v1/patients/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * Patient history
   * Required scope - `gambit:public:patient:read`
   *
   * returns history of patient orders and services
   * GET /api/public/v1/patients/{id}/history
   * Operation ID: GetPatientHistoryById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientHistoryByIdResponse(
    args: {
      /**
       * patient identifier
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{id}/history",
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
   * GetPatientSickLeaveById
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{patientId}/sickLeaves/{id}
   * Operation ID: GetPatientSickLeaveById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientSickLeaveByIdResponse(
    args: { patientId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/sickLeaves/{id}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * DeletePatientSickLeave
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/public/v1/patients/{patientId}/sickLeaves/{id}
   * Operation ID: DeletePatientSickLeave
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePatientSickLeaveResponse(
    args: { patientId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/public/v1/patients/{patientId}/sickLeaves/{id}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * UpdatePatientSickLeave
   * Required scope - `gambit:public:patient:write`
   * PUT /api/public/v1/patients/{patientId}/sickLeaves/{id}
   * Operation ID: UpdatePatientSickLeave
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePatientSickLeaveResponse(
    args: {
      patientId: number;
      id: number;
      body: Models.ERPPatientSickLeaveEditModel;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/public/v1/patients/{patientId}/sickLeaves/{id}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * CreatePatientSickLeave
   * Required scope - `gambit:public:patient:write`
   * POST /api/public/v1/patients/{patientId}/sickLeaves
   * Operation ID: CreatePatientSickLeave
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPatientSickLeaveResponse(
    args: { patientId: number; body: Models.ERPPatientSickLeaveEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/public/v1/patients/{patientId}/sickLeaves",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * GetPatientSickLeaves
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{patientId}/sickLeaves
   * Operation ID: GetPatientSickLeaves
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientSickLeavesResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/sickLeaves",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * GetPatientSickLeaveByExternalId
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/{patientId}/sickLeaves/{externalId}
   * Operation ID: GetPatientSickLeaveByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientSickLeaveByExternalIdResponse(
    args: { patientId: string; externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/sickLeaves/{externalId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "externalId",
            field: "externalId",
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
   * DeletePatientSickLeaveByExternalId
   * Required scope - `gambit:public:patient:write`
   * DELETE /api/public/v1/patients/{patientId}/sickLeaves/{externalId}
   * Operation ID: DeletePatientSickLeaveByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePatientSickLeaveByExternalIdResponse(
    args: { patientId: string; externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/public/v1/patients/{patientId}/sickLeaves/{externalId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "externalId",
            field: "externalId",
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
   * UpdatePatientSickLeaveByExternalId
   * Required scope - `gambit:public:patient:write`
   * PUT /api/public/v1/patients/{patientId}/sickLeaves/{externalId}
   * Operation ID: UpdatePatientSickLeaveByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePatientSickLeaveByExternalIdResponse(
    args: {
      patientId: string;
      externalId: string;
      body: Models.ERPPatientSickLeaveEditModel;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/public/v1/patients/{patientId}/sickLeaves/{externalId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "externalId",
            field: "externalId",
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
   * GetPatientSickLeavesByClinicId
   * Required scope - `gambit:public:patient:read`
   * GET /api/public/v1/patients/sickLeaves
   * Operation ID: GetPatientSickLeavesByClinicId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientSickLeavesByClinicIdResponse(
    args: { clinicId: number; active?: boolean },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/sickLeaves",
        parameters: [
          {
            name: "clinicId",
            field: "clinicId",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "active",
            field: "active",
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
   * Return all analyses by patient identifier
   * Required scope - `gambit:public:patient:medical-records:read`
   * GET /api/public/v1/patients/{patientId}/analyses
   * Operation ID: GetPatientAnalyses
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientAnalysesResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/analyses",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * Return full information about analysis\laboratory test
   * Required scope - `gambit:public:patient:medical-records:read`
   * GET /api/public/v1/patients/{patientId}/analyses/{analysisId}
   * Operation ID: GetPatientAnalysisById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientAnalysisByIdResponse(
    args: { patientId: number; analysisId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/analyses/{analysisId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "analysisId",
            field: "analysisId",
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
   * Download analysis conclusion
   * Required scope - `gambit:public:patient:medical-records:read`
   *
   * result is gziped text/plain, `ContentEncoding: gzip`
   * GET /api/public/v1/patients/{patientId}/analyses/{analysisId}/analysis-conclusion
   * Operation ID: GetPatientAnalysisConclusionById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAnalysisConclusionResponse(
    args: { patientId: number; analysisId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/analyses/{analysisId}/analysis-conclusion",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "text/plain",
      },
      args,
      options,
    );
  }
  /**
   * Download analysis recommendation
   * Required scope - `gambit:public:patient:medical-records:read`
   *
   * result is gziped text/plain, `ContentEncoding: gzip`
   * GET /api/public/v1/patients/{patientId}/analyses/{analysisId}/analysis-recomendations-conclusion
   * Operation ID: GetPatientAnalysisRecommendationsConclusionById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientAnalysisRecommendationsConclusionByIdResponse(
    args: { patientId: number; analysisId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/analyses/{analysisId}/analysis-recomendations-conclusion",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "text/plain",
      },
      args,
      options,
    );
  }
  /**
   * PrintPatientAnalysis
   * Required scope - `gambit:public:patient:medical-records:read`
   * GET /api/public/v1/patients/{patientId}/analyses/{analysisId}/print
   * Operation ID: PrintPatientAnalysis
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function printAnalysisResponse(
    args: { patientId: number; analysisId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/analyses/{analysisId}/print",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "application/pdf",
      },
      args,
      options,
    );
  }
  /**
   * Get protocol\examination by patient identifier
   * Required scope - `gambit:public:patient:medical-records:read`
   * GET /api/public/v1/patients/{patientId}/protocols
   * Operation ID: GetPatientProtocols
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientProtocolsResponse(
    args: {
      /**
       * Patient identifier
       */ patientId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/protocols",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * returns full information about protocol
   * Required scope - `gambit:public:patient:medical-records:read`
   * GET /api/public/v1/patients/{patientId}/protocols/{protocolId}
   * Operation ID: GetPatientProtocolById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientProtocolByIdResponse(
    args: {
      /**
       * patient identifier
       */ patientId: number;
      /**
       * protocol identifier
       */ protocolId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/protocols/{protocolId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
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
   * Download protocol conclusion
   * Required scope - `gambit:public:patient:medical-records:read`
   *
   * result is gziped text/plain, `ContentEncoding: gzip`
   * GET /api/public/v1/patients/{patientId}/protocols/{protocolId}/protocol-conclusion
   * Operation ID: GetPatientProtocolConclusionById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientProtocolConclusionByIdResponse(
    args: {
      /**
       * patient identifier
       */ patientId: number;
      /**
       * protocol identifier
       */ protocolId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/protocols/{protocolId}/protocol-conclusion",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "text/plain",
      },
      args,
      options,
    );
  }
  /**
   * Download protocol recommendation
   * Required scope - `gambit:public:patient:medical-records:read`
   *
   * result is gziped text/plain, `ContentEncoding: gzip`
   * GET /api/public/v1/patients/{patientId}/protocols/{protocolId}/protocol-recommendation-conclusion
   * Operation ID: GetPatientProtocolRecommendationConclusionById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientProtocolRecommendationConclusionByIdResponse(
    args: {
      /**
       * patient identifier
       */ patientId: number;
      /**
       * protocol identifier
       */ protocolId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/protocols/{protocolId}/protocol-recommendation-conclusion",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "text/plain",
      },
      args,
      options,
    );
  }
  /**
   * PrintPatientProtocol
   * Required scope - `gambit:public:patient:medical-records:read`
   * GET /api/public/v1/patients/{patientId}/protocols/{protocolId}/print
   * Operation ID: PrintPatientProtocol
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function printPatientProtocolResponse(
    args: { patientId: number; protocolId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/protocols/{protocolId}/print",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "application/pdf",
      },
      args,
      options,
    );
  }
  /**
   * GetPatientDynamicFormResults
   * Required scope - `gambit:public:patient:medical-records:read`
   * GET /api/public/v1/patients/{patientId}/patient-dynamic-forms/{id}/results
   * Operation ID: GetPatientDynamicFormResults
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientDynamicFormResultsResponse(
    args: { patientId: number; id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/patients/{patientId}/patient-dynamic-forms/{id}/results",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * GetActiveReferralSalepackPackagesByPatientId
   *
   * GET /api/patients/{patientId}/referralSalepackPackages/active
   * Operation ID: GetActiveReferralSalepackPackagesByPatientId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getActiveReferralSalepackPackagesByPatientIdResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/patients/{patientId}/referralSalepackPackages/active",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * HasActiveReferralSalepackPackagesByPatientId
   *
   * GET /api/patients/{patientId}/referralSalepackPackages/isHaveActive
   * Operation ID: HasActiveReferralSalepackPackagesByPatientId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function hasActiveReferralSalepackPackagesByPatientIdResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/patients/{patientId}/referralSalepackPackages/isHaveActive",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * Get a referral salepack package for prerecord by its ID.
   * The id identifies a referral salepack package, not a patient, despite the legacy patients URL segment.
   * GET /api/patients/{id}/referralSalepackPackages/prerecord
   * Operation ID: GetReferralSalepackPackageForPrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferralSalepackPackageForPrerecordResponse(
    args: {
      /**
       * Referral salepack package ID (ReferalSalepackPackage.Id), not patient ID.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/patients/{id}/referralSalepackPackages/prerecord",
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
   * SetReferralSalepackPackageStatus
   *
   * POST /api/patients/{id}/referralSalepackPackages/SetStatus
   * Operation ID: SetReferralSalepackPackageStatus
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function setReferralSalepackPackageStatusResponse(
    args: { id: number; body: Models.ReferalSalepackPackageStatus },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/patients/{id}/referralSalepackPackages/SetStatus",
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
   * SetReferralSalepackPackageAssuranceStatus
   *
   * POST /api/patients/{id}/referralSalepackPackages/SetAssuranceStatus
   * Operation ID: SetReferralSalepackPackageAssuranceStatus
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function setReferralSalepackPackageAssuranceStatusResponse(
    args: { id: number; body: Models.AssuranceAproveEnum },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/patients/{id}/referralSalepackPackages/SetAssuranceStatus",
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
  return {
    getProtocolDrugsResponse,
    /**
     * GetProtocolDrugs
     * Required scope - `gambit:public:patient:read`
     * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs
     * Operation ID: GetProtocolDrugs
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getProtocolDrugs(
      args: { patientId: number; protocolId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPProtocolDrugDto>> {
      return transport.read<Array<Models.ERPProtocolDrugDto>>(
        await getProtocolDrugsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createProtocolDrugResponse,
    /**
     * CreateProtocolDrug
     * Required scope - `gambit:public:patient:write`
     * POST /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs
     * Operation ID: CreateProtocolDrug
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createProtocolDrug(
      args: {
        patientId: number;
        protocolId: number;
        body: Models.ERPProtocolDrugCreateRequest;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPProtocolDrugDto> {
      return transport.read<Models.ERPProtocolDrugDto>(
        await createProtocolDrugResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    updateProtocolDrugResponse,
    /**
     * UpdateProtocolDrug
     * Required scope - `gambit:public:patient:write`
     * PUT /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs/{protocolDrugId}
     * Operation ID: UpdateProtocolDrug
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateProtocolDrug(
      args: {
        patientId: number;
        protocolId: number;
        protocolDrugId: number;
        body: Models.ERPProtocolDrugUpdateRequest;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateProtocolDrugResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteProtocolDrugResponse,
    /**
     * DeleteProtocolDrug
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/erp/v1/patients/{patientId}/protocol/{protocolId}/drugs/{protocolDrugId}
     * Operation ID: DeleteProtocolDrug
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteProtocolDrug(
      args: { patientId: number; protocolId: number; protocolDrugId: number },
      options?: RequestOptions,
    ): Promise<undefined> {
      return transport.read<undefined>(
        await deleteProtocolDrugResponse(args, options),
        { "204": { kind: "empty" } },
      );
    },
    getProtocolMonitoringAssignmentsResponse,
    /**
     * GetProtocolMonitoringAssignments
     * Required scope - `gambit:public:patient:read`
     * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments
     * Operation ID: GetProtocolMonitoringAssignments
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getProtocolMonitoringAssignments(
      args: { patientId: number; protocolId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPProtocolMonitoringAssignment>> {
      return transport.read<Array<Models.ERPProtocolMonitoringAssignment>>(
        await getProtocolMonitoringAssignmentsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createProtocolMonitoringAssignmentResponse,
    /**
     * CreateProtocolMonitoringAssignment
     * Required scope - `gambit:public:patient:write`
     * POST /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments
     * Operation ID: CreateProtocolMonitoringAssignment
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createProtocolMonitoringAssignment(
      args: {
        patientId: number;
        protocolId: number;
        body: Models.ERPProtocolMonitoringCreateRequest;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPProtocolMonitoringAssignment> {
      return transport.read<Models.ERPProtocolMonitoringAssignment>(
        await createProtocolMonitoringAssignmentResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getProtocolMonitoringAssignmentResponse,
    /**
     * GetProtocolMonitoringAssignment
     * Required scope - `gambit:public:patient:read`
     * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}
     * Operation ID: GetProtocolMonitoringAssignment
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getProtocolMonitoringAssignment(
      args: { patientId: number; protocolId: number; assignmentId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPProtocolMonitoringAssignment> {
      return transport.read<Models.ERPProtocolMonitoringAssignment>(
        await getProtocolMonitoringAssignmentResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateProtocolMonitoringAssignmentResponse,
    /**
     * UpdateProtocolMonitoringAssignment
     * Required scope - `gambit:public:patient:write`
     * PUT /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}
     * Operation ID: UpdateProtocolMonitoringAssignment
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateProtocolMonitoringAssignment(
      args: {
        patientId: number;
        protocolId: number;
        assignmentId: number;
        body: Models.ERPProtocolMonitoringUpdateRequest;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateProtocolMonitoringAssignmentResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteProtocolMonitoringAssignmentResponse,
    /**
     * DeleteProtocolMonitoringAssignment
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/erp/v1/patients/{patientId}/protocol/{protocolId}/monitoring-assignments/{assignmentId}
     * Operation ID: DeleteProtocolMonitoringAssignment
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteProtocolMonitoringAssignment(
      args: { patientId: number; protocolId: number; assignmentId: number },
      options?: RequestOptions,
    ): Promise<undefined> {
      return transport.read<undefined>(
        await deleteProtocolMonitoringAssignmentResponse(args, options),
        { "204": { kind: "empty" } },
      );
    },
    getPatientMonitoringAssignmentsResponse,
    /**
     * GetPatientMonitoringAssignments
     * Required scope - `gambit:public:patient:read`
     * GET /api/erp/v1/patients/{patientId}/monitoring-assignments
     * Operation ID: GetPatientMonitoringAssignments
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientMonitoringAssignments(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPProtocolMonitoringAssignment>> {
      return transport.read<Array<Models.ERPProtocolMonitoringAssignment>>(
        await getPatientMonitoringAssignmentsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientHospitalizationAppointmentsResponse,
    /**
     * GetPatientHospitalizationAppointments
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patients/{patientId}/hospitalizations
     * Operation ID: GetPatientHospitalizationAppointments
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientHospitalizationAppointments(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.HospitalizationAppointment>> {
      return transport.read<Array<Models.HospitalizationAppointment>>(
        await getPatientHospitalizationAppointmentsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientAnalysisFilesResponse,
    /**
     * GetPatientAnalysisFiles
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files
     * Operation ID: GetPatientAnalysisFiles
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientAnalysisFiles(
      args: { analysisId: number; patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.AnalysisFileViewModel>> {
      return transport.read<Array<Models.AnalysisFileViewModel>>(
        await getPatientAnalysisFilesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    generateAnalysisFileUploadUriResponse,
    /**
     * GenerateAnalysisFileUploadUri
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/initialize/{fileName}
     * Operation ID: GenerateAnalysisFileUploadUri
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async generateAnalysisFileUploadUri(
      args: { fileName: string; patientId: number; analysisId: number },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await generateAnalysisFileUploadUriResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    allowSendAnalysisFileResponse,
    /**
     * AllowSendAnalysisFile
     * Required scope - `gambit:erp`
     * PATCH /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{id}
     * Operation ID: AllowSendAnalysisFile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async allowSendAnalysisFile(
      args: {
        analysisId: number;
        patientId: number;
        id: number;
        isSend: boolean;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await allowSendAnalysisFileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteAnalysisFileResponse,
    /**
     * DeleteAnalysisFile
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{id}
     * Operation ID: DeleteAnalysisFile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteAnalysisFile(
      args: { analysisId: number; patientId: number; id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteAnalysisFileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createAnalysisFileResponse,
    /**
     * CreateAnalysisFile
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/analysis/{analysisId}/files/{fileName}
     * Operation ID: CreateAnalysisFile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createAnalysisFile(
      args: { analysisId: number; patientId: number; fileName: string },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createAnalysisFileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPatientFilesResponse,
    /**
     * GetPatientFiles
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patients/{patientId}/files
     * Operation ID: GetPatientFiles
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientFiles(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.FileDto>> {
      return transport.read<Array<Models.FileDto>>(
        await getPatientFilesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    generatePatientFileUploadUriResponse,
    /**
     * GeneratePatientFileUploadUri
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/files/initialize/{fileName}
     * Operation ID: GeneratePatientFileUploadUri
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async generatePatientFileUploadUri(
      args: { fileName: string; patientId: number },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await generatePatientFileUploadUriResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPatientFileResponse,
    /**
     * CreatePatientFile
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/files/{fileName}
     * Operation ID: CreatePatientFile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPatientFile(
      args: { fileName: string; patientId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createPatientFileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deletePatientFileResponse,
    /**
     * DeletePatientFile
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/patients/{patientId}/files/{id}
     * Operation ID: DeletePatientFile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePatientFile(
      args: { patientId: number; id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePatientFileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPatientProtocolFilesResponse,
    /**
     * GetPatientProtocolFiles
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files
     * Operation ID: GetPatientProtocolFiles
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientProtocolFiles(
      args: { protocolId: number; patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.FileDto>> {
      return transport.read<Array<Models.FileDto>>(
        await getPatientProtocolFilesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    generateProtocolFileUploadUriResponse,
    /**
     * GenerateProtocolFileUploadUri
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/initialize/{fileName}
     * Operation ID: GenerateProtocolFileUploadUri
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async generateProtocolFileUploadUri(
      args: { fileName: string; patientId: number; protocolId: number },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await generateProtocolFileUploadUriResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createProtocolFileResponse,
    /**
     * CreateProtocolFile
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/{fileName}
     * Operation ID: CreateProtocolFile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createProtocolFile(
      args: { fileName: string; patientId: number; protocolId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createProtocolFileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteProtocolFileResponse,
    /**
     * DeleteProtocolFile
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/patients/{patientId}/protocols/{protocolId}/files/{id}
     * Operation ID: DeleteProtocolFile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteProtocolFile(
      args: { protocolId: number; patientId: number; id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteProtocolFileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPatientProtocolImagesResponse,
    /**
     * GetPatientProtocolImages
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images
     * Operation ID: GetPatientProtocolImages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientProtocolImages(
      args: { protocolId: number; patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ImageDto>> {
      return transport.read<Array<Models.ImageDto>>(
        await getPatientProtocolImagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    generateProtocolImageUploadUriResponse,
    /**
     * GenerateProtocolImageUploadUri
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/initialize/{fileName}
     * Operation ID: GenerateProtocolImageUploadUri
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async generateProtocolImageUploadUri(
      args: { fileName: string; patientId: number; protocolId: number },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await generateProtocolImageUploadUriResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createProtocolImageResponse,
    /**
     * CreateProtocolImage
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/{fileName}
     * Operation ID: CreateProtocolImage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createProtocolImage(
      args: { fileName: string; patientId: number; protocolId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createProtocolImageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteProtocolImageResponse,
    /**
     * DeleteProtocolImage
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/patients/{patientId}/protocols/{protocolId}/images/{id}
     * Operation ID: DeleteProtocolImage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteProtocolImage(
      args: { patientId: number; protocolId: number; id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteProtocolImageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getProtocolServicesResponse,
    /**
     * GetProtocolServices
     * Required scope - `gambit:public:patient:read`
     * GET /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages
     * Operation ID: GetProtocolServices
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getProtocolServices(
      args: { patientId: number; protocolId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPReferralSalepackPackage>> {
      return transport.read<Array<Models.ERPReferralSalepackPackage>>(
        await getProtocolServicesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createProtocolServiceResponse,
    /**
     * CreateProtocolService
     * Required scope - `gambit:public:patient:write`
     * POST /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages
     * Operation ID: CreateProtocolService
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createProtocolService(
      args: {
        patientId: number;
        protocolId: number;
        body: Models.EditableERPReferralSalepackPackage;
      },
      options?: RequestOptions,
    ): Promise<Models.SavedERPReferralSalepackPackage> {
      return transport.read<Models.SavedERPReferralSalepackPackage>(
        await createProtocolServiceResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    updateProtocolServiceResponse,
    /**
     * UpdateProtocolService
     * Required scope - `gambit:public:patient:write`
     * PUT /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages/{referralSalepackPackageId}
     * Operation ID: UpdateProtocolService
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateProtocolService(
      args: {
        patientId: number;
        protocolId: number;
        referralSalepackPackageId: number;
        body: Models.EditableERPReferralSalepackPackage;
      },
      options?: RequestOptions,
    ): Promise<Models.SavedERPReferralSalepackPackage> {
      return transport.read<Models.SavedERPReferralSalepackPackage>(
        await updateProtocolServiceResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteProtocolServiceResponse,
    /**
     * DeleteProtocolService
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/erp/v1/patients/{patientId}/protocol/{protocolId}/referralSalepackPackages/{referralSalepackPackageId}
     * Operation ID: DeleteProtocolService
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteProtocolService(
      args: {
        patientId: number;
        protocolId: number;
        referralSalepackPackageId: number;
        /**
         * Values:
         *
         * - `0`: CorrectionOfAppointments
         *
         * - `1`: PatientRefusal
         *
         * - `2`: AlreadyDone
         *
         *
         */ removeReasonId?: Models.RemoveReferalSalepackPackageReason;
      },
      options?: RequestOptions,
    ): Promise<undefined> {
      return transport.read<undefined>(
        await deleteProtocolServiceResponse(args, options),
        { "204": { kind: "empty" } },
      );
    },
    getPatientReferralsResponse,
    /**
     * GetPatientReferrals
     * Required scope - `gambit:erp`
     * GET /api/public/v1/patients/{id}/referral-salepack-packages
     * Operation ID: GetPatientReferrals
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientReferrals(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPReferralSalepackPackage>> {
      return transport.read<Array<Models.ERPReferralSalepackPackage>>(
        await getPatientReferralsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientFamilyMembersResponse,
    /**
     * Returns list of family members
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{patientId}/familyMembers
     * Operation ID: GetPatientFamilyMembers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientFamilyMembers(
      args: {
        /**
         * patient family owner id
         */ patientId: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePatientFamilyMember>> {
      return transport.read<Array<Models.OnlinePatientFamilyMember>>(
        await getPatientFamilyMembersResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    removePatientFamilyMemberResponse,
    /**
     * Remove family member by family member identifier
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/public/v1/patients/{patientId}/familyMembers/{memberId}
     * Operation ID: RemovePatientFamilyMember
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removePatientFamilyMember(
      args: {
        /**
         * family owner id
         */ patientId: number;
        /**
         * family member id
         */ memberId: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removePatientFamilyMemberResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPatientFamilyMemberByIdResponse,
    /**
     * Get family member by id
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{patientId}/familyMembers/{memberId}
     * Operation ID: GetPatientFamilyMemberById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientFamilyMemberById(
      args: {
        /**
         * family owner id
         */ patientId: number;
        /**
         * family member id
         */ memberId: number;
      },
      options?: RequestOptions,
    ): Promise<Models.OnlinePatient> {
      return transport.read<Models.OnlinePatient>(
        await getPatientFamilyMemberByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientFamilyOwnerResponse,
    /**
     * Get family owmer by family member identifier
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{patientId}/familyOwner
     * Operation ID: GetPatientFamilyOwner
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientFamilyOwner(
      args: {
        /**
         * patient id (family owner)
         */ patientId: number;
      },
      options?: RequestOptions,
    ): Promise<Models.OnlinePatient> {
      return transport.read<Models.OnlinePatient>(
        await getPatientFamilyOwnerResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientPositionsResponse,
    /**
     * returns all patient positions by identifier
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{id}/positions
     * Operation ID: GetPatientPositions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientPositions(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PatientDepartmentPositionModel>> {
      return transport.read<Array<Models.PatientDepartmentPositionModel>>(
        await getPatientPositionsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientPositionsDisplayResponse,
    /**
     * GetPatientPositionsDisplay
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{id}/positions/display
     * Operation ID: GetPatientPositionsDisplay
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientPositionsDisplay(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PatientDepartmenPositionDto>> {
      return transport.read<Array<Models.PatientDepartmenPositionDto>>(
        await getPatientPositionsDisplayResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientPositionsByExternalIdResponse,
    /**
     * Returns all patient positions by external identifier
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{externalId}/positions
     * Operation ID: GetPatientPositionsByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientPositionsByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<Array<Models.PatientDepartmentPositionModel>> {
      return transport.read<Array<Models.PatientDepartmentPositionModel>>(
        await getPatientPositionsByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPatientResponse,
    /**
     * Create patient
     * Required scope - `gambit:public:patient:write`
     *
     * Api supports different creation strategies `$.Options.CreateStrategy`:
     *
     * - `0`: Default - creates patient every time and do not check if patient exists
     * - `1`: GetOrCreate - if patient exists, returns it, otherwise creates new one (in this case you can provide minimum required information)
     * - `2`: CreateOrUpdate - if patient exists, updates it, otherwise creates new one (in this case you should provide all patient data)
     *
     * ```json
     * {
     *   "Patient": {
     *     "LFM": "Last First",
     *     "Born": "2025-01-26",
     *     "TelMob1": "0000000000"
     *   },
     *   "Options": {
     *     "CreateStrategy": 1
     *   }
     * }
     * ```
     * POST /api/public/v1/patients
     * Operation ID: CreatePatient
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPatient(
      args: { body: Models.CreatePublicPatientRequest },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createPatientResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    searchPatientsResponse,
    /**
     * Api for searching patients
     * Required scope - `gambit:public:patient:read`
     *
     * Searching is case insensitive.
     *
     * - if value is matching to phone numbers - api will look for patients with this phone number
     * - else api will look for patients with this name
     *
     * pagination:
     *  - first page: `skip=0 take=20`
     *  - second page: `skip=20 take=20`
     *  - page x: `skip=(x-1)*20 take=20`
     * GET /api/public/v1/patients
     * Operation ID: SearchPatients
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchPatients(
      args: {
        /**
         * searching expression
         */ query?: string;
        /**
         * number of records to skip
         */ skip?: number;
        /**
         * number of records to take, max is 100
         */ take?: number;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.PublicPatientResponse>> {
      return transport.read<Array<Models.PublicPatientResponse>>(
        await searchPatientsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientByIdResponse,
    /**
     * Get patient full information by identifier
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{id}
     * Operation ID: GetPatientById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.PublicPatientResponse> {
      return transport.read<Models.PublicPatientResponse>(
        await getPatientByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePatientResponse,
    /**
     * Remove patient by identifier
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/public/v1/patients/{id}
     * Operation ID: DeletePatient
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePatient(
      args: {
        /**
         * patient identifier
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePatientResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePatientResponse,
    /**
     * Update patient by id
     * Required scope - `gambit:public:patient:write`
     *
     * api does not support patching, so all information should be provided
     * PUT /api/public/v1/patients/{id}
     * Operation ID: UpdatePatient
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePatient(
      args: {
        /**
         * patient identifier
         */ id: number;
        /**
         * Data to be updated
         */ body: Models.UpdatePublicPatientRequest;
      },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await updatePatientResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    ensurePatientBarcodeResponse,
    /**
     * Generate unique barcode value for patient
     * Required scope - `gambit:public:patient:write`
     *
     * This can be used for different kinds of integration where patient should have unique identifier that fits into barcode
     * PATCH /api/public/v1/patients/{id}/generateBarcode
     * Operation ID: EnsurePatientBarcode
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async ensurePatientBarcode(
      args: {
        /**
         * patient identifier
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await ensurePatientBarcodeResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientByExternalIdResponse,
    /**
     * Get patient full information by external identifier
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{externalId}
     * Operation ID: GetPatientByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<Models.PublicPatientResponse> {
      return transport.read<Models.PublicPatientResponse>(
        await getPatientByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePatientByExternalIdResponse,
    /**
     * Remove patient by external identifier
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/public/v1/patients/{externalId}
     * Operation ID: DeletePatientByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePatientByExternalId(
      args: {
        /**
         * patient external identifier
         */ externalId: string;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePatientByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePatientByExternalIdResponse,
    /**
     * UpdatePatientByExternalId
     * Required scope - `gambit:public:patient:write`
     * PUT /api/public/v1/patients/{externalId}
     * Operation ID: UpdatePatientByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePatientByExternalId(
      args: { externalId: string; body: Models.UpdatePublicPatientRequest },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await updatePatientByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientHistoryByIdResponse,
    /**
     * Patient history
     * Required scope - `gambit:public:patient:read`
     *
     * returns history of patient orders and services
     * GET /api/public/v1/patients/{id}/history
     * Operation ID: GetPatientHistoryById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientHistoryById(
      args: {
        /**
         * patient identifier
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.PatientHistory>> {
      return transport.read<Array<Models.PatientHistory>>(
        await getPatientHistoryByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientSickLeaveByIdResponse,
    /**
     * GetPatientSickLeaveById
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{patientId}/sickLeaves/{id}
     * Operation ID: GetPatientSickLeaveById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientSickLeaveById(
      args: { patientId: number; id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPPatientSickLeave> {
      return transport.read<Models.ERPPatientSickLeave>(
        await getPatientSickLeaveByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePatientSickLeaveResponse,
    /**
     * DeletePatientSickLeave
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/public/v1/patients/{patientId}/sickLeaves/{id}
     * Operation ID: DeletePatientSickLeave
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePatientSickLeave(
      args: { patientId: number; id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePatientSickLeaveResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePatientSickLeaveResponse,
    /**
     * UpdatePatientSickLeave
     * Required scope - `gambit:public:patient:write`
     * PUT /api/public/v1/patients/{patientId}/sickLeaves/{id}
     * Operation ID: UpdatePatientSickLeave
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePatientSickLeave(
      args: {
        patientId: number;
        id: number;
        body: Models.ERPPatientSickLeaveEditModel;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePatientSickLeaveResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createPatientSickLeaveResponse,
    /**
     * CreatePatientSickLeave
     * Required scope - `gambit:public:patient:write`
     * POST /api/public/v1/patients/{patientId}/sickLeaves
     * Operation ID: CreatePatientSickLeave
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPatientSickLeave(
      args: { patientId: number; body: Models.ERPPatientSickLeaveEditModel },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createPatientSickLeaveResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientSickLeavesResponse,
    /**
     * GetPatientSickLeaves
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{patientId}/sickLeaves
     * Operation ID: GetPatientSickLeaves
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientSickLeaves(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPatientSickLeave>> {
      return transport.read<Array<Models.ERPPatientSickLeave>>(
        await getPatientSickLeavesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientSickLeaveByExternalIdResponse,
    /**
     * GetPatientSickLeaveByExternalId
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/{patientId}/sickLeaves/{externalId}
     * Operation ID: GetPatientSickLeaveByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientSickLeaveByExternalId(
      args: { patientId: string; externalId: string },
      options?: RequestOptions,
    ): Promise<Models.ERPPatientSickLeave> {
      return transport.read<Models.ERPPatientSickLeave>(
        await getPatientSickLeaveByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePatientSickLeaveByExternalIdResponse,
    /**
     * DeletePatientSickLeaveByExternalId
     * Required scope - `gambit:public:patient:write`
     * DELETE /api/public/v1/patients/{patientId}/sickLeaves/{externalId}
     * Operation ID: DeletePatientSickLeaveByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePatientSickLeaveByExternalId(
      args: { patientId: string; externalId: string },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePatientSickLeaveByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePatientSickLeaveByExternalIdResponse,
    /**
     * UpdatePatientSickLeaveByExternalId
     * Required scope - `gambit:public:patient:write`
     * PUT /api/public/v1/patients/{patientId}/sickLeaves/{externalId}
     * Operation ID: UpdatePatientSickLeaveByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePatientSickLeaveByExternalId(
      args: {
        patientId: string;
        externalId: string;
        body: Models.ERPPatientSickLeaveEditModel;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePatientSickLeaveByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPatientSickLeavesByClinicIdResponse,
    /**
     * GetPatientSickLeavesByClinicId
     * Required scope - `gambit:public:patient:read`
     * GET /api/public/v1/patients/sickLeaves
     * Operation ID: GetPatientSickLeavesByClinicId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientSickLeavesByClinicId(
      args: { clinicId: number; active?: boolean },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPatientSickLeave>> {
      return transport.read<Array<Models.ERPPatientSickLeave>>(
        await getPatientSickLeavesByClinicIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientAnalysesResponse,
    /**
     * Return all analyses by patient identifier
     * Required scope - `gambit:public:patient:medical-records:read`
     * GET /api/public/v1/patients/{patientId}/analyses
     * Operation ID: GetPatientAnalyses
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientAnalyses(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PatientHistoryItem>> {
      return transport.read<Array<Models.PatientHistoryItem>>(
        await getPatientAnalysesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientAnalysisByIdResponse,
    /**
     * Return full information about analysis\laboratory test
     * Required scope - `gambit:public:patient:medical-records:read`
     * GET /api/public/v1/patients/{patientId}/analyses/{analysisId}
     * Operation ID: GetPatientAnalysisById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientAnalysisById(
      args: { patientId: number; analysisId: number },
      options?: RequestOptions,
    ): Promise<Models.AnalysisEditModelPatientCard> {
      return transport.read<Models.AnalysisEditModelPatientCard>(
        await getPatientAnalysisByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getAnalysisConclusionResponse,
    /**
     * Download analysis conclusion
     * Required scope - `gambit:public:patient:medical-records:read`
     *
     * result is gziped text/plain, `ContentEncoding: gzip`
     * GET /api/public/v1/patients/{patientId}/analyses/{analysisId}/analysis-conclusion
     * Operation ID: GetPatientAnalysisConclusionById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAnalysisConclusion(
      args: { patientId: number; analysisId: number },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await getAnalysisConclusionResponse(args, options),
        { "200": { kind: "text", charset: "UTF-16" } },
      );
    },
    getPatientAnalysisRecommendationsConclusionByIdResponse,
    /**
     * Download analysis recommendation
     * Required scope - `gambit:public:patient:medical-records:read`
     *
     * result is gziped text/plain, `ContentEncoding: gzip`
     * GET /api/public/v1/patients/{patientId}/analyses/{analysisId}/analysis-recomendations-conclusion
     * Operation ID: GetPatientAnalysisRecommendationsConclusionById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientAnalysisRecommendationsConclusionById(
      args: { patientId: number; analysisId: number },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await getPatientAnalysisRecommendationsConclusionByIdResponse(
          args,
          options,
        ),
        { "200": { kind: "text", charset: "UTF-16" } },
      );
    },
    printAnalysisResponse,
    getPatientProtocolsResponse,
    /**
     * Get protocol\examination by patient identifier
     * Required scope - `gambit:public:patient:medical-records:read`
     * GET /api/public/v1/patients/{patientId}/protocols
     * Operation ID: GetPatientProtocols
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientProtocols(
      args: {
        /**
         * Patient identifier
         */ patientId: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.PatientHistoryItem>> {
      return transport.read<Array<Models.PatientHistoryItem>>(
        await getPatientProtocolsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientProtocolByIdResponse,
    /**
     * returns full information about protocol
     * Required scope - `gambit:public:patient:medical-records:read`
     * GET /api/public/v1/patients/{patientId}/protocols/{protocolId}
     * Operation ID: GetPatientProtocolById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientProtocolById(
      args: {
        /**
         * patient identifier
         */ patientId: number;
        /**
         * protocol identifier
         */ protocolId: number;
      },
      options?: RequestOptions,
    ): Promise<Models.ProtocolEditModel> {
      return transport.read<Models.ProtocolEditModel>(
        await getPatientProtocolByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientProtocolConclusionByIdResponse,
    /**
     * Download protocol conclusion
     * Required scope - `gambit:public:patient:medical-records:read`
     *
     * result is gziped text/plain, `ContentEncoding: gzip`
     * GET /api/public/v1/patients/{patientId}/protocols/{protocolId}/protocol-conclusion
     * Operation ID: GetPatientProtocolConclusionById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientProtocolConclusionById(
      args: {
        /**
         * patient identifier
         */ patientId: number;
        /**
         * protocol identifier
         */ protocolId: number;
      },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await getPatientProtocolConclusionByIdResponse(args, options),
        { "200": { kind: "text", charset: "UTF-16" } },
      );
    },
    getPatientProtocolRecommendationConclusionByIdResponse,
    /**
     * Download protocol recommendation
     * Required scope - `gambit:public:patient:medical-records:read`
     *
     * result is gziped text/plain, `ContentEncoding: gzip`
     * GET /api/public/v1/patients/{patientId}/protocols/{protocolId}/protocol-recommendation-conclusion
     * Operation ID: GetPatientProtocolRecommendationConclusionById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientProtocolRecommendationConclusionById(
      args: {
        /**
         * patient identifier
         */ patientId: number;
        /**
         * protocol identifier
         */ protocolId: number;
      },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await getPatientProtocolRecommendationConclusionByIdResponse(
          args,
          options,
        ),
        { "200": { kind: "text", charset: "UTF-16" } },
      );
    },
    printPatientProtocolResponse,
    getPatientDynamicFormResultsResponse,
    /**
     * GetPatientDynamicFormResults
     * Required scope - `gambit:public:patient:medical-records:read`
     * GET /api/public/v1/patients/{patientId}/patient-dynamic-forms/{id}/results
     * Operation ID: GetPatientDynamicFormResults
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientDynamicFormResults(
      args: { patientId: number; id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.DynamicFormResultDto>> {
      return transport.read<Array<Models.DynamicFormResultDto>>(
        await getPatientDynamicFormResultsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getActiveReferralSalepackPackagesByPatientIdResponse,
    /**
     * GetActiveReferralSalepackPackagesByPatientId
     *
     * GET /api/patients/{patientId}/referralSalepackPackages/active
     * Operation ID: GetActiveReferralSalepackPackagesByPatientId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getActiveReferralSalepackPackagesByPatientId(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ActiveReferalSalepackPackage>> {
      return transport.read<Array<Models.ActiveReferalSalepackPackage>>(
        await getActiveReferralSalepackPackagesByPatientIdResponse(
          args,
          options,
        ),
        { "200": { kind: "json" } },
      );
    },
    hasActiveReferralSalepackPackagesByPatientIdResponse,
    /**
     * HasActiveReferralSalepackPackagesByPatientId
     *
     * GET /api/patients/{patientId}/referralSalepackPackages/isHaveActive
     * Operation ID: HasActiveReferralSalepackPackagesByPatientId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async hasActiveReferralSalepackPackagesByPatientId(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<boolean> {
      return transport.read<boolean>(
        await hasActiveReferralSalepackPackagesByPatientIdResponse(
          args,
          options,
        ),
        { "200": { kind: "json" } },
      );
    },
    getReferralSalepackPackageForPrerecordResponse,
    /**
     * Get a referral salepack package for prerecord by its ID.
     * The id identifies a referral salepack package, not a patient, despite the legacy patients URL segment.
     * GET /api/patients/{id}/referralSalepackPackages/prerecord
     * Operation ID: GetReferralSalepackPackageForPrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferralSalepackPackageForPrerecord(
      args: {
        /**
         * Referral salepack package ID (ReferalSalepackPackage.Id), not patient ID.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<Models.ReferalSalepackForPrerecord> {
      return transport.read<Models.ReferalSalepackForPrerecord>(
        await getReferralSalepackPackageForPrerecordResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    setReferralSalepackPackageStatusResponse,
    /**
     * SetReferralSalepackPackageStatus
     *
     * POST /api/patients/{id}/referralSalepackPackages/SetStatus
     * Operation ID: SetReferralSalepackPackageStatus
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async setReferralSalepackPackageStatus(
      args: { id: number; body: Models.ReferalSalepackPackageStatus },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await setReferralSalepackPackageStatusResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    setReferralSalepackPackageAssuranceStatusResponse,
    /**
     * SetReferralSalepackPackageAssuranceStatus
     *
     * POST /api/patients/{id}/referralSalepackPackages/SetAssuranceStatus
     * Operation ID: SetReferralSalepackPackageAssuranceStatus
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async setReferralSalepackPackageAssuranceStatus(
      args: { id: number; body: Models.AssuranceAproveEnum },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await setReferralSalepackPackageAssuranceStatusResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
