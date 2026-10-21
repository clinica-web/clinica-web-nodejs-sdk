import { JSONParser } from "@streamparser/json";
import { ensureSuccess } from "../responses/api-error";

/** Consumes a root JSON array without retaining previous rows. */
export async function* readJsonArray<T>(
  response: Response,
  signal?: AbortSignal,
): AsyncGenerator<T> {
  await ensureSuccess(response);
  if (
    response.status === 204 ||
    response.headers.get("content-length") === "0"
  ) {
    await response.body?.cancel();
    return;
  }
  if (!response.body) throw new SyntaxError("Expected a JSON array");
  const reader = response.body.getReader();
  const parser = new JSONParser({ paths: ["$.*"], keepStack: false });
  let rows: T[] = [];
  let started = false;
  parser.onValue = ({ value }) => {
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
      throw new SyntaxError("Expected a report object");
    }
    rows.push(value as T);
  };
  const abort = () => {
    void reader.cancel(signal?.reason).catch(() => {});
  };
  signal?.addEventListener("abort", abort, { once: true });
  try {
    signal?.throwIfAborted();
    while (true) {
      const { done, value } = await reader.read();
      signal?.throwIfAborted();
      if (done) break;
      // Bound the synchronous parser's row queue even when fetch supplies a large chunk.
      for (let offset = 0; offset < value.length; offset += 4096) {
        const part = value.subarray(offset, offset + 4096);
        if (!started) {
          const first = part.find((byte) => ![9, 10, 13, 32].includes(byte));
          if (first !== undefined) {
            if (first !== 91)
              throw new SyntaxError("Expected a root JSON array");
            started = true;
          }
        }
        parser.write(part);
        for (const row of rows) {
          signal?.throwIfAborted();
          yield row;
        }
        rows = [];
      }
    }
    if (!started) throw new SyntaxError("Expected a JSON array");
    if (!parser.isEnded) parser.end();
  } finally {
    signal?.removeEventListener("abort", abort);
    try {
      await reader.cancel();
    } finally {
      reader.releaseLock();
    }
  }
}
