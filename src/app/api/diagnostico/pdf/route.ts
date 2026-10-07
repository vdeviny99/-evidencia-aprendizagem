import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const pdfSchema = z.object({
  lead: z.object({
    nome: z.string().optional(),
    idade: z.string().optional(),
    fase: z.string().optional(),
    objetivo: z.string().optional(),
    data: z.string().optional(),
  }),
  result: z.object({
    styleName: z.string(),
    styleDescription: z.string(),
    interpretation: z.array(z.string()),
  }),
  axes: z.array(z.tuple([z.string(), z.number().min(0).max(100)])),
});

const pageWidth = 595.28;
const pageHeight = 841.89;
const margin = 48;
const contentWidth = pageWidth - margin * 2;

type PdfPage = { content: string[] };

function formatDate(value?: string) {
  if (!value) return new Intl.DateTimeFormat("pt-BR").format(new Date());
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : new Intl.DateTimeFormat("pt-BR").format(parsed);
}

function hexText(value: string) {
  return Buffer.from(`\uFEFF${value}`, "utf16le").swap16().toString("hex").toUpperCase();
}

function safeFilename(value?: string) {
  return (value || "aluno")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "aluno";
}

function wrapText(text: string, maxWidth: number, fontSize: number) {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  const maxChars = Math.max(18, Math.floor(maxWidth / (fontSize * 0.48)));
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines;
}

function rgb(r: number, g: number, b: number) {
  return `${(r / 255).toFixed(3)} ${(g / 255).toFixed(3)} ${(b / 255).toFixed(3)}`;
}

function rect(page: PdfPage, x: number, y: number, w: number, h: number, color: string, stroke = false) {
  page.content.push(`${color} ${stroke ? "RG" : "rg"} ${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${stroke ? "S" : "f"}`);
}

function text(page: PdfPage, value: string, x: number, y: number, size = 11, color = rgb(46, 58, 51), font = "F1") {
  page.content.push(`BT ${color} rg /${font} ${size} Tf ${x.toFixed(2)} ${y.toFixed(2)} Td <${hexText(value)}> Tj ET`);
}

function paragraph(page: PdfPage, value: string, x: number, y: number, maxWidth: number, size = 11, lineHeight = 16, color = rgb(46, 58, 51)) {
  const lines = wrapText(value, maxWidth, size);
  lines.forEach((line, index) => text(page, line, x, y - index * lineHeight, size, color));
  return y - lines.length * lineHeight;
}

function buildPdf(data: z.infer<typeof pdfSchema>) {
  const pages: PdfPage[] = [];
  const addPage = () => {
    const page = { content: [] };
    pages.push(page);
    return page;
  };

  const name = data.lead.nome?.trim() || "Aluno EdukaCuca";
  const objective = [data.lead.fase, data.lead.objetivo].filter(Boolean).join(" · ") || "Não informado";

  let page = addPage();
  rect(page, 0, 0, pageWidth, pageHeight, rgb(246, 248, 246));
  text(page, "EdukaCuca", margin, 720, 13, rgb(21, 128, 61), "F2");
  text(page, "Diagnóstico Gratuito", margin, 675, 30, rgb(46, 58, 51), "F2");
  text(page, "de Aprendizagem", margin, 640, 30, rgb(46, 58, 51), "F2");
  text(page, "Feedback personalizado de hábitos de estudo", margin, 608, 14, rgb(95, 105, 98));
  rect(page, margin, 405, contentWidth, 150, rgb(255, 255, 255));
  const rows = [["Nome", name], ["Escolaridade/objetivo", objective], ["Data", formatDate(data.lead.data)], ["Tipo de diagnóstico", "Gratuito"]];
  rows.forEach(([label, value], index) => {
    const y = 520 - index * 32;
    text(page, label, margin + 18, y, 10, rgb(95, 105, 98), "F2");
    text(page, value, margin + 170, y, 11, rgb(46, 58, 51));
  });
  text(page, "edukacuca.com.br", margin, 82, 10, rgb(95, 105, 98));

  page = addPage();
  text(page, "Apresentação do diagnóstico", margin, 770, 22, rgb(46, 58, 51), "F2");
  let y = paragraph(page, "Olá, esta é a sua devolutiva do diagnóstico de hábitos de estudo versão gratuita. Este questionário foi criado com base na experiência da EdukaCuca com estratégias de aprendizagem e em pesquisas sobre aprendizagem, autorregulação, metacognição, memória e motivação.", margin, 730, contentWidth, 11.5, 17, rgb(67, 78, 70));
  y = paragraph(page, "O objetivo aqui não é diagnosticar pessoas ou ditar o que é certo ou errado. A proposta é explorar habilidades de aprendizado e ganhar mais autonomia perante os estudos.", margin, y - 14, contentWidth, 11.5, 17, rgb(67, 78, 70));
  rect(page, margin, y - 75, contentWidth, 58, rgb(252, 237, 225));
  paragraph(page, "Como ler este material: use a devolutiva como ponto de partida. Os resultados indicam tendências atuais e podem mudar conforme sua rotina, suas estratégias e seu acompanhamento.", margin + 14, y - 37, contentWidth - 28, 10.5, 15, rgb(67, 78, 70));
  text(page, "Fatores avaliados", margin, y - 115, 15, rgb(46, 58, 51), "F2");
  ["Planejamento", "Metacognição", "Gestão do tempo", "Busca de ajuda", "Aprendizagem ativa", "Revisão estratégica", "Motivação"].forEach((factor, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = margin + col * 250;
    const boxY = y - 155 - row * 42;
    rect(page, x, boxY, 230, 28, rgb(246, 248, 246));
    text(page, factor, x + 10, boxY + 9, 10.5, rgb(46, 58, 51));
  });

  page = addPage();
  text(page, "Mapa de desempenho", margin, 770, 22, rgb(46, 58, 51), "F2");
  paragraph(page, "O gráfico mostra sua pontuação nos 7 construtos avaliados, em percentual.", margin, 735, contentWidth, 11, 16, rgb(67, 78, 70));
  rect(page, margin, 430, contentWidth, 270, rgb(255, 255, 255));
  data.axes.forEach(([label, value], index) => {
    const rowY = 665 - index * 34;
    text(page, label, margin + 18, rowY, 10.5, rgb(46, 58, 51));
    text(page, `${value}%`, margin + contentWidth - 54, rowY, 10.5, rgb(46, 58, 51), "F2");
    rect(page, margin + 18, rowY - 16, contentWidth - 36, 8, rgb(225, 230, 226));
    rect(page, margin + 18, rowY - 16, (contentWidth - 36) * (value / 100), 8, rgb(234, 88, 12));
  });
  rect(page, margin, 255, contentWidth, 125, rgb(246, 248, 246));
  text(page, `Perfil identificado: ${data.result.styleName}`, margin + 18, 345, 15, rgb(46, 58, 51), "F2");
  paragraph(page, data.result.styleDescription, margin + 18, 318, contentWidth - 36, 11, 16, rgb(67, 78, 70));

  page = addPage();
  text(page, "Boas recomendações e práticas de estudo", margin, 770, 21, rgb(46, 58, 51), "F2");
  y = 735;
  data.result.interpretation.forEach((item) => {
    if (y < 150) {
      page = addPage();
      y = 770;
    }
    y = paragraph(page, item, margin, y, contentWidth, 10.6, 15.5, rgb(67, 78, 70)) - 8;
  });
  const practices = [
    ["Planejamento", "Organize sua sessão de estudos antes de começar a estudar. Separe blocos de estudo, planeje pausas, escolha um ambiente calmo, defina o que vai estudar antes de começar e como vai fazer isso. Foque no processo, esqueça o resultado."],
    ["Execução", "Utilize estratégias que façam você relembrar o estudo por mais tempo, como a prática do relembrar ativo, estudo espaçado e alternância entre blocos de assuntos parecidos."],
    ["Manutenção do aprendizado", "Organize revisões ao longo das semanas, teste a si mesmo com provas sobre o assunto e tente explicar para colegas o que sabe com suas próprias palavras."],
    ["Reflexão", "Após cada semana ou sessão de estudo, pare e pense: eu atingi meus objetivos? O que funcionou? Como posso melhorar para as próximas vezes?"],
  ];
  practices.forEach(([title, body]) => {
    if (y < 135) {
      page = addPage();
      y = 770;
    }
    rect(page, margin, y - 78, contentWidth, 66, rgb(246, 248, 246));
    text(page, title, margin + 14, y - 34, 13, rgb(46, 58, 51), "F2");
    paragraph(page, body, margin + 14, y - 52, contentWidth - 28, 9.8, 13.5, rgb(67, 78, 70));
    y -= 86;
  });

  page = addPage();
  text(page, "Como a EdukaCuca pode ajudar", margin, 770, 22, rgb(46, 58, 51), "F2");
  const offers = ["Diagnóstico premium", "Curso básico de Aprender a Aprender", "Aulas particulares de inglês ou francês", "Aulas personalizadas de habilidades de aprendizagem"];
  offers.forEach((offer, index) => {
    const boxY = 700 - index * 88;
    rect(page, margin, boxY, contentWidth, 64, rgb(246, 248, 246));
    text(page, offer, margin + 16, boxY + 38, 13, rgb(46, 58, 51), "F2");
    paragraph(page, "Fale com a EdukaCuca para transformar o diagnóstico em plano de estudo, aulas personalizadas ou mentoria de aprendizagem.", margin + 16, boxY + 20, contentWidth - 32, 9.8, 13, rgb(67, 78, 70));
  });
  rect(page, margin, 235, contentWidth, 72, rgb(252, 237, 225));
  paragraph(page, "Próximo passo: fale com a EdukaCuca para transformar o diagnóstico em plano de estudo, aulas personalizadas ou mentoria de aprendizagem.", margin + 16, 280, contentWidth - 32, 11, 16, rgb(46, 58, 51));
  text(page, "edukacuca.com.br · almeida.jv2019@gmail.com", margin, 82, 10, rgb(95, 105, 98));

  const objects: string[] = [];
  const addObject = (body: string) => {
    objects.push(body);
    return objects.length;
  };

  const fontRegular = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBold = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const pageObjectIds: number[] = [];
  const contentObjectIds: number[] = [];

  pages.forEach((pdfPage) => {
    const stream = pdfPage.content.join("\n");
    const contentId = addObject(`<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`);
    contentObjectIds.push(contentId);
    pageObjectIds.push(0);
  });

  const pagesId = objects.length + pages.length + 1;
  pages.forEach((_, index) => {
    const pageId = addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> /Contents ${contentObjectIds[index]} 0 R >>`);
    pageObjectIds[index] = pageId;
  });
  const actualPagesId = addObject(`<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjectIds.length} >>`);
  const catalogId = addObject(`<< /Type /Catalog /Pages ${actualPagesId} 0 R >>`);

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, "binary");
}

export async function POST(request: Request) {
  const parsed = pdfSchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos para gerar PDF", details: parsed.error.flatten() }, { status: 400 });
  }

  const pdf = buildPdf(parsed.data);
  const filename = `diagnostico-edukacuca-${safeFilename(parsed.data.lead.nome)}.pdf`;

  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
