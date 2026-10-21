/** HTTP failure. The body preview is limited to 64 KiB and may be truncated. */
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly headers: Headers,
    public readonly body: string,
    public readonly truncated: boolean,
  ) {
    super(`Clinica API returned HTTP ${status}`);
    this.name = "ApiError";
  }
}

export async function ensureSuccess(response: Response): Promise<void> {
  if (response.ok) return;
  const reader = response.body?.getReader();
  const parts: Uint8Array[] = [];
  let size = 0;
  let truncated = false;
  try {
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const available = 65536 - size;
        parts.push(value.subarray(0, available));
        size += Math.min(value.length, available);
        if (size === 65536) {
          truncated = true;
          break;
        }
      }
    }
  } finally {
    if (reader) {
      try {
        await reader.cancel();
      } finally {
        reader.releaseLock();
      }
    }
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const part of parts) {
    bytes.set(part, offset);
    offset += part.length;
  }
  throw new ApiError(
    response.status,
    response.headers,
    new TextDecoder().decode(bytes),
    truncated,
  );
}
