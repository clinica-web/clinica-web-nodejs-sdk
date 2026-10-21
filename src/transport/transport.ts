import { ensureSuccess } from "../responses/api-error";
import type { ClientOptions, RequestOptions } from "./options";
export type { ClientOptions, RequestOptions } from "./options";

export class Transport {
  private readonly baseUrl: URL;
  private readonly fetcher: typeof globalThis.fetch;

  request(
    operation: {
      method: string;
      path: string;
      parameters: readonly {
        name: string;
        field: string;
        in: string;
        required: boolean;
        array: boolean;
        explode: boolean;
      }[];
      bodyField?: string;
      bodyRequired?: boolean;
      accept: string;
    },
    args: Record<string, unknown>,
    options?: RequestOptions,
  ): Promise<Response> {
    let path = operation.path;
    const query = new URLSearchParams();
    for (const parameter of operation.parameters) {
      const value = args[parameter.field];
      if (value === undefined || value === null) {
        if (parameter.required)
          throw new TypeError(`Missing required argument: ${parameter.field}`);
        continue;
      }
      if (parameter.in === "path") {
        path = path.replace(
          `{${parameter.name}}`,
          encodeURIComponent(String(value)),
        );
      } else if (parameter.in === "query") {
        const values = parameter.array ? (value as unknown[]) : [value];
        if (!Array.isArray(values))
          throw new TypeError(`${parameter.field} must be an array`);
        if (parameter.explode)
          for (const entry of values)
            query.append(parameter.name, String(entry));
        else query.append(parameter.name, values.map(String).join(","));
      } else throw new TypeError("Unsupported parameter location");
    }
    const body = operation.bodyField ? args[operation.bodyField] : undefined;
    if (operation.bodyRequired && body === undefined)
      throw new TypeError("Missing required request body");
    const suffix = query.toString();
    return this.send(
      operation.method,
      path + (suffix ? `?${suffix}` : ""),
      options,
      body,
      operation.accept,
    );
  }

  async read<T>(
    response: Response,
    readers: Record<string, { kind: string; charset?: string }>,
  ): Promise<T> {
    await ensureSuccess(response);
    const reader = readers[String(response.status)] ?? { kind: "unknown" };
    if (reader.kind === "empty" || response.status === 204) {
      await response.body?.cancel();
      return undefined as T;
    }
    if (reader.kind === "json") return (await response.json()) as T;
    const contentType = response.headers.get("content-type") ?? "";
    if (
      reader.kind === "unknown" &&
      contentType &&
      !/json|^text\//i.test(contentType)
    ) {
      await response.body?.cancel();
      throw new TypeError(
        "Undeclared binary response; use the Response method",
      );
    }
    const charset =
      /charset\s*=\s*"?([^;"\s]+)/i.exec(contentType)?.[1] ??
      reader.charset ??
      "utf-8";
    try {
      const text = new TextDecoder(charset, { fatal: true }).decode(
        await response.arrayBuffer(),
      );
      return (
        reader.kind === "unknown"
          ? !text
            ? undefined
            : /json/i.test(contentType)
              ? JSON.parse(text)
              : text
          : text
      ) as T;
    } finally {
      if (!response.bodyUsed) await response.body?.cancel();
    }
  }

  constructor(private readonly options: ClientOptions) {
    this.baseUrl = new URL(options.baseUrl);
    if (
      !["https:", "http:"].includes(this.baseUrl.protocol) ||
      this.baseUrl.search ||
      this.baseUrl.hash ||
      this.baseUrl.username ||
      this.baseUrl.password
    ) {
      throw new TypeError(
        "baseUrl must be an HTTP(S) URL without credentials, query or fragment",
      );
    }
    this.baseUrl.pathname = this.baseUrl.pathname.replace(/\/?$/, "/");
    this.fetcher = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  async send(
    method: string,
    path: string,
    options: RequestOptions = {},
    body?: unknown,
    accept = "application/json",
  ): Promise<Response> {
    options.signal?.throwIfAborted();
    const token =
      typeof this.options.accessToken === "function"
        ? await this.options.accessToken(options)
        : this.options.accessToken;
    options.signal?.throwIfAborted();
    const headers = new Headers({ Accept: accept });
    if (token !== undefined) headers.set("Authorization", `Bearer ${token}`);
    if (body !== undefined) headers.set("Content-Type", "application/json");
    return this.fetcher(new URL(path.replace(/^\/+/, ""), this.baseUrl), {
      method,
      headers,
      signal: options.signal,
      redirect: "manual",
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  }
}
