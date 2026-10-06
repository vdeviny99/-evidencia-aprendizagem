import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const siteEventSchema = z.object({
  type: z.enum(["diagnostic_free_click", "whatsapp_click"]),
  path: z.string().trim().max(300).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = siteEventSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Evento inválido" }, { status: 400 });
    }

    await prisma.siteEvent.create({
      data: {
        type: parsed.data.type,
        path: parsed.data.path ?? null,
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Erro ao registrar evento do site:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
