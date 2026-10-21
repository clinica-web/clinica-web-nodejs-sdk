import { ensureSuccess } from "../../responses/api-error";
import type { RequestOptions } from "../../transport/options";

export interface ClientCredentialsOptions {
  clientId: string;
  clientSecret: string;
  scopes: readonly string[];
  /** Defaults to Clinica's identity server, independently of the API deployment URL. */
  tokenUrl?: string;
  fetch?: typeof globalThis.fetch;
}

/** Instance-local cache and single-flight acquisition. No patient sessions or retries. */
export function createClientCredentialsProvider(
  options: ClientCredentialsOptions,
) {
  const fetcher = options.fetch ?? globalThis.fetch.bind(globalThis);
  let cached: { token: string; expiresAt: number } | undefined;
  let pending: Promise<string> | undefined;

  async function acquire(): Promise<string> {
    const requestedAt = Date.now();
    const response = await fetcher(
      options.tokenUrl ?? "https://id.medakadem.com/connect/token",
      {
        method: "POST",
        redirect: "manual",
        signal: AbortSignal.timeout(30000),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: options.clientId,
          client_secret: options.clientSecret,
          scope: options.scopes.join(" "),
        }),
      },
    );
    await ensureSuccess(response);
    const data = (await response.json()) as Record<string, unknown>;
    if (
      typeof data.access_token !== "string" ||
      !data.access_token ||
      typeof data.expires_in !== "number" ||
      !Number.isFinite(data.expires_in) ||
      data.expires_in <= 0 ||
      typeof data.token_type !== "string" ||
      data.token_type.toLowerCase() !== "bearer"
    ) {
      throw new TypeError("Invalid client credentials token response");
    }
    cached = {
      token: data.access_token,
      expiresAt:
        requestedAt +
        data.expires_in * 1000 -
        Math.min(30000, data.expires_in * 100),
    };
    return cached.token;
  }

  return {
    async getAccessToken({ signal }: RequestOptions = {}): Promise<string> {
      signal?.throwIfAborted();
      if (cached && Date.now() < cached.expiresAt) return cached.token;
      pending ??= acquire().finally(() => {
        pending = undefined;
      });
      // A cancelled caller must not cancel acquisition shared by other callers.
      if (!signal) return pending;
      const current = pending;
      return new Promise<string>((resolve, reject) => {
        const abort = () => reject(signal.reason);
        signal.addEventListener("abort", abort, { once: true });
        current
          .then(resolve, reject)
          .finally(() => signal.removeEventListener("abort", abort));
        if (signal.aborted) abort();
      });
    },
  };
}
