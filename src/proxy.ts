import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LIMITS: Record<string, { max: number; windowMs: number }> = {
  "/api/diagnostico": { max: 5, windowMs: 10 * 60 * 1000 },
  "/api/contato": { max: 10, windowMs: 10 * 60 * 1000 },
};

const hits = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (request.method !== "POST") return NextResponse.next();

  const limit = LIMITS[pathname];
  if (!limit) return NextResponse.next();

  const key = `${pathname}:${getClientIp(request)}`;
  const now = Date.now();

  const recent = (hits.get(key) ?? []).filter((t) => now - t < limit.windowMs);

  if (recent.length >= limit.max) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 }
    );
  }

  recent.push(now);
  hits.set(key, recent);

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/diagnostico", "/api/contato"],
};
