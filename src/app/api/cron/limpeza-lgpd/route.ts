import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const RETENTION_DAYS = Number(process.env.RETENTION_DAYS ?? 90);

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  const secret = process.env.CRON_SECRET;

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const cutoff = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);

  const result = await prisma.diagnosticSubmission.deleteMany({
    where: { createdAt: { lt: cutoff } },
  });

  return NextResponse.json({
    success: true,
    deleted: result.count,
    retentionDays: RETENTION_DAYS,
  });
}
