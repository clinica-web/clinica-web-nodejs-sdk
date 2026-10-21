export interface RequestOptions {
  /** Covers token acquisition, sending and body consumption. */
  signal?: AbortSignal;
}

export interface AreaOptions {
  /** Defaults to the root deployment URL. */
  baseUrl?: string;
  /** Acquired lazily, cached independently for this area. */
  clientCredentials?: import("../auth/client-credentials/client-credentials").ClientCredentialsOptions;
  accessToken?:
    string | ((options: RequestOptions) => string | Promise<string>);
  /** Adapter must return a Web Response and honor the request signal. */
  fetch?: typeof globalThis.fetch;
}

export interface ClientOptions extends AreaOptions {
  /** Deployment URL, optionally including a path prefix. */
  baseUrl: string;
  /** Separate identity: never inherits the root bearer token or credentials. */
  online?: AreaOptions;
  /** Separate identity: never inherits the root bearer token or credentials. */
  referring?: AreaOptions;
}
