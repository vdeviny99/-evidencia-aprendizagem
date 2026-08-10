import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

const SCALE_LABELS: Record<number, string> = {
  0: "Nunca",
  1: "Raramente",
  2: "Às vezes",
  3: "Frequentemente",
  4: "Sempre",
};

function formatAnswers(answers: Record<string, number>) {
  return Object.entries(answers)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([id, value]) => {
      const label = SCALE_LABELS[value] ?? String(value);
      return `• Item ${id}: ${label} (${value})`;
    })
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
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
    } = body;

    if (!name || !whatsapp || !answers) {
      return NextResponse.json(
        { error: "Nome, WhatsApp e respostas são obrigatórios" },
        { status: 400 }
      );
    }

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

        const answerCount = Object.keys(answers).length;
        await transport.sendMail({
          from: `"Eduka Cuca" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_TO ?? process.env.GMAIL_USER,
          subject: `🎯 Novo diagnóstico recebido: ${name}`,
          text: `Um novo diagnóstico foi enviado!\n\n` +
            `Nome: ${name}\n` +
            `Idade: ${age ?? "-"}\n` +
            `Profissão: ${occupation ?? "-"}\n` +
            `Curso: ${course ?? "-"}\n` +
            `Como conheceu: ${howMet ?? "-"}\n` +
            `WhatsApp: ${whatsapp}\n` +
            `E-mail: ${email ?? "-"}\n\n` +
            `Objetivo: ${objective}\n` +
            `Objetivo específico: ${goalSpecific ?? "-"}\n` +
            `Prazo: ${deadline ?? "-"}\n\n` +
            `Relação com estudos:\n${relation}\n\n` +
            `Respostas (${answerCount} itens):\n${formatAnswers(answers)}\n\n` +
            `ID: ${submission.id}`,
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
