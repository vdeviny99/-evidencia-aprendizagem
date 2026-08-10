import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

const emptyToNull = (v: unknown) =>
  typeof v === "string" && v.trim() === "" ? null : v;

const diagnosticoSchema = z.object({
  name: z.string().trim().min(2).max(120),
  age: z.preprocess(emptyToNull, z.string().trim().max(10).nullable()),
  occupation: z.preprocess(emptyToNull, z.string().trim().max(120).nullable()),
  course: z.preprocess(emptyToNull, z.string().trim().max(160).nullable()),
  howMet: z.preprocess(emptyToNull, z.string().trim().max(120).nullable()),
  whatsapp: z.string().trim().min(8).max(25),
  email: z.preprocess(emptyToNull, z.string().trim().email().max(200).nullable()),
  objective: z.preprocess(emptyToNull, z.string().trim().max(2000).nullable()),
  goalSpecific: z.preprocess(emptyToNull, z.string().trim().max(2000).nullable()),
  deadline: z.preprocess(emptyToNull, z.string().trim().max(200).nullable()),
  relation: z.preprocess(emptyToNull, z.string().trim().max(10000).nullable()),
  answers: z
    .record(z.string(), z.coerce.number().int().min(0).max(4))
    .refine((a) => Object.keys(a).length > 0, {
      message: "Pelo menos uma resposta é obrigatória",
    }),
});

const adminPanelUrl =
  process.env.SITE_URL ?? process.env.NEXTAUTH_URL ?? "http://localhost:3000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = diagnosticoSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const {
      name,
      age,
      occupation,
      course,
      howMet,
      whatsapp,
      email,
      objective,
      goalSpecific,
      deadline,
      relation,
      answers,
    } = parsed.data;

    const submission = await prisma.diagnosticSubmission.create({
      data: {
        name,
        age: age ?? null,
        occupation: occupation ?? null,
        course: course ?? null,
        howMet: howMet ?? null,
        whatsapp,
        email: email ?? null,
        objective: objective ?? "",
        goalSpecific: goalSpecific ?? null,
        deadline: deadline ?? null,
        relation: relation ?? "",
        answers,
      },
    });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.warn("GMAIL_USER/GMAIL_APP_PASSWORD não configurados; e-mail não enviado");
    } else {
      try {
        const transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        const panelLink = `${adminPanelUrl.replace(/\/$/, "")}/admin/diagnosticos`;
        await transport.sendMail({
          from: `"Eduka Cuca" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_TO ?? process.env.GMAIL_USER,
          subject: `Novo diagnóstico recebido: ${name}`,
          text:
            `Um novo diagnóstico foi recebido.\n\n` +
            `Nome: ${name}\n` +
            `ID: ${submission.id}\n\n` +
            `Acesse o painel para visualizar as respostas:\n${panelLink}\n\n` +
            `Os dados completos ficam restritos ao painel administrativo.`,
        });
      } catch (mailError) {
        console.error("Erro ao enviar e-mail:", mailError);
      }
    }

    return NextResponse.json({ success: true, id: submission.id }, { status: 201 });
  } catch (error) {
    console.error("Erro ao processar diagnóstico:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
