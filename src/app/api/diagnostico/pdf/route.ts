import { NextResponse } from "next/server";
import PDFDocument from "pdfkit/js/pdfkit.standalone.js";
import { z } from "zod";
import { calculateDiagnosticResult, scoreToPercent } from "@/lib/diagnosticoResultado";

export const runtime = "nodejs";

const accent = "#2D3C33";
const gold = "#F05A1A";
const cream = "#F5F7F4";
const soft = "#FFF4ED";
const green = "#1F7A45";
const muted = "#5E6B65";
const border = "#D9E1DB";

const answersSchema = z
  .record(z.string(), z.coerce.number().int().min(0).max(4))
  .refine((answers) => {
    const ids = Object.keys(answers).map(Number);
    return ids.length === 33 && Array.from({ length: 33 }, (_, index) => index + 1).every((id) => ids.includes(id));
  }, "O PDF exige as 33 respostas do diagnóstico.");

const leadSchema = z.object({
  nome: z.string().trim().min(1).max(120).optional().default("Aluno EdukaCuca"),
  email: z.string().trim().max(200).optional().default(""),
  whatsapp: z.string().trim().max(40).optional().default(""),
  fase: z.string().trim().max(160).optional().default(""),
  objetivo: z.string().trim().max(160).optional().default(""),
  data: z.string().trim().optional().default(""),
});

const requestSchema = z.object({
  lead: leadSchema.optional().default({ nome: "Aluno EdukaCuca", email: "", whatsapp: "", fase: "", objetivo: "", data: "" }),
  answers: answersSchema,
});

type PdfDoc = {
  x: number;
  y: number;
  on(event: "data", callback: (chunk: Buffer) => void): PdfDoc;
  on(event: "end", callback: () => void): PdfDoc;
  on(event: "error", callback: (error: Error) => void): PdfDoc;
  end(): void;
  addPage(): PdfDoc;
  moveDown(lines?: number): PdfDoc;
  fillColor(color: string): PdfDoc;
  font(name: string): PdfDoc;
  fontSize(size: number): PdfDoc;
  text(content: string, options?: Record<string, unknown>): PdfDoc;
  text(content: string, x: number, y: number, options?: Record<string, unknown>): PdfDoc;
  rect(x: number, y: number, width: number, height: number): PdfDoc;
  roundedRect(x: number, y: number, width: number, height: number, radius: number): PdfDoc;
  fill(color?: string): PdfDoc;
  fillAndStroke(fillColor: string, strokeColor: string): PdfDoc;
  switchToPage(page: number): PdfDoc;
  bufferedPageRange(): { start: number; count: number };
};

const constructLabels = [
  ["planejamento", "Planejamento"],
  ["metacognicao", "Metacognição"],
  ["gestaoTempo", "Gestão do tempo"],
  ["buscaAjuda", "Busca de ajuda"],
  ["aprendizagemAtiva", "Aprendizagem ativa"],
  ["revisaoEstrategica", "Revisão estratégica"],
  ["motivacao", "Motivação"],
] as const;

const constructDescriptions = [
  ["Planejamento", "Capacidade de analisar a tarefa, definir metas, organizar a sessão de estudo e escolher estratégias antes de começar."],
  ["Metacognição", "Habilidade de pensar sobre o próprio pensamento, perceber o que já sabe, o que ainda não sabe e ajustar a forma de estudar."],
  ["Gestão do tempo", "Uso consciente do tempo de estudo, com blocos, pausas, rotina e distribuição adequada das tarefas."],
  ["Busca de ajuda", "Capacidade de reconhecer quando travou e procurar apoio com professores, colegas, tutores ou bons materiais."],
  ["Aprendizagem ativa", "Uso de estratégias que exigem recuperar, explicar, resolver, praticar e testar o conhecimento, em vez de apenas reler."],
  ["Revisão estratégica", "Organização de revisões espaçadas e testes de recuperação para reduzir o esquecimento ao longo do tempo."],
  ["Motivação", "Energia, direção e persistência para continuar estudando mesmo diante de dificuldade, frustração ou rotina exigente."],
] as const;

const practices = [
  ["Planejamento", "Organize sua sessão de estudos antes de começar. Separe blocos de estudo, planeje pausas, escolha um ambiente calmo, defina o que vai estudar e como pretende estudar."],
  ["Execução", "Durante o estudo, use estratégias que façam você recuperar o conteúdo da memória: resolva questões, explique com suas palavras, tente lembrar antes de consultar o material."],
  ["Manutenção do aprendizado", "Planeje revisões ao longo das semanas, teste a si mesmo e retome os pontos mais frágeis antes que o esquecimento avance."],
  ["Reflexão", "Depois de estudar, avalie se sua estratégia funcionou: o que ficou claro, o que continua confuso, o que precisa mudar na próxima sessão?"],
] as const;

const services = [
  ["Diagnóstico premium", "Versão mais detalhada e personalizada do diagnóstico gratuito, com mais perguntas, avaliação individual e plano de ação para colocar em prática."],
  ["Curso básico de Aprender a Aprender", "Curso gravado online sobre estratégias eficazes de aprendizagem e como torná-las parte da rotina."],
  ["Aulas particulares de inglês ou francês", "Aulas online personalizadas e centradas no aluno. Sua demanda, nossa prioridade."],
  ["Aulas personalizadas de habilidades de aprendizagem", "Investigação profunda sobre fortalezas e dificuldades, com seleção de estratégias que cabem no dia a dia."],
] as const;

function formatDate(value: string) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return new Intl.DateTimeFormat("pt-BR").format(new Date());
  return new Intl.DateTimeFormat("pt-BR").format(date);
}

function sanitizeFilename(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase() || "diagnostico-edukacuca";
}

function correctedAnswers(answers: Record<string, number>) {
  return Object.fromEntries(Object.entries(answers).map(([key, value]) => [Number(key), value])) as Record<number, number>;
}

function collectPdf(doc: PdfDoc) {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
    doc.end();
  });
}

function ensureSpace(doc: PdfDoc, needed: number) {
  if (doc.y + needed > 760) doc.addPage();
}

function text(doc: PdfDoc, content: string, options: Record<string, unknown> = {}) {
  doc.text(content, { lineGap: 3, ...options });
}

function h1(doc: PdfDoc, content: string) {
  ensureSpace(doc, 58);
  doc.moveDown(0.2).fillColor(accent).font("Helvetica-Bold").fontSize(24);
  text(doc, content);
  doc.moveDown(0.35);
}

function h2(doc: PdfDoc, content: string) {
  ensureSpace(doc, 46);
  doc.moveDown(0.9).fillColor(accent).font("Helvetica-Bold").fontSize(17);
  text(doc, content);
  doc.moveDown(0.2);
}

function kicker(doc: PdfDoc, content: string) {
  ensureSpace(doc, 20);
  doc.fillColor(gold).font("Helvetica-Bold").fontSize(8.5).text(content.toUpperCase(), { characterSpacing: 1.1 });
  doc.moveDown(0.25);
}

function paragraph(doc: PdfDoc, content: string) {
  ensureSpace(doc, 46);
  doc.fillColor(accent).font("Helvetica").fontSize(10.2);
  text(doc, content, { align: "left" });
  doc.moveDown(0.45);
}

function card(doc: PdfDoc, title: string, content: string, fill = cream) {
  ensureSpace(doc, 82);
  const x = doc.x;
  const y = doc.y;
  const width = 503;
  doc.roundedRect(x, y, width, 74, 12).fillAndStroke(fill, border);
  doc.fillColor(accent).font("Helvetica-Bold").fontSize(11).text(title, x + 18, y + 15, { width: width - 36 });
  doc.fillColor(muted).font("Helvetica").fontSize(9).text(content, x + 18, y + 34, { width: width - 36, lineGap: 2 });
  doc.y = y + 86;
}

function callout(doc: PdfDoc, title: string, content: string) {
  ensureSpace(doc, 92);
  const x = doc.x;
  const y = doc.y;
  const width = 503;
  doc.roundedRect(x, y, width, 86, 10).fillAndStroke(soft, border);
  doc.fillColor(gold).font("Helvetica-Bold").fontSize(18).text("→", x + 20, y + 31, { width: 24 });
  doc.fillColor(accent).font("Helvetica-Bold").fontSize(11).text(title, x + 60, y + 18, { width: width - 78 });
  doc.fillColor(muted).font("Helvetica").fontSize(9).text(content, x + 60, y + 39, { width: width - 78, lineGap: 2 });
  doc.y = y + 100;
}

function progressBar(doc: PdfDoc, label: string, percent: number, x: number, y: number, width: number) {
  doc.fillColor(accent).font("Helvetica-Bold").fontSize(9.5).text(label, x, y, { width: width - 50 });
  doc.fillColor(muted).font("Helvetica").fontSize(9.5).text(`${percent}%`, x + width - 44, y, { width: 44, align: "right" });
  doc.roundedRect(x, y + 18, width, 9, 4.5).fill("#E7ECE8");
  doc.roundedRect(x, y + 18, Math.max(2, (width * percent) / 100), 9, 4.5).fill(green);
}

function drawConstructChart(doc: PdfDoc, result: ReturnType<typeof calculateDiagnosticResult>) {
  ensureSpace(doc, 300);
  const x = doc.x;
  const y = doc.y;
  const width = 503;
  const height = 285;
  doc.roundedRect(x, y, width, height, 16).fillAndStroke("#EEF3EF", border);
  doc.fillColor(accent).font("Helvetica-Bold").fontSize(14).text("Gráfico individual do aluno", x + 22, y + 18);
  doc.fillColor(muted).font("Helvetica").fontSize(9).text("Pontuação dos 7 construtos em percentual", x + 22, y + 39);

  let currentY = y + 68;
  constructLabels.forEach(([key, label]) => {
    progressBar(doc, label, scoreToPercent(result.constructs[key]), x + 22, currentY, width - 44);
    currentY += 30;
  });

  doc.y = y + height + 20;
}

function drawGroupMap(doc: PdfDoc, result: ReturnType<typeof calculateDiagnosticResult>) {
  ensureSpace(doc, 170);
  const x = doc.x;
  const y = doc.y;
  const width = 503;
  doc.roundedRect(x, y, width, 156, 16).fillAndStroke("#FFFFFF", border);
  doc.fillColor(accent).font("Helvetica-Bold").fontSize(14).text("Mapa gratuito de aprendizagem", x + 22, y + 18);
  progressBar(doc, "Planejamento", scoreToPercent(result.groups.planejamento), x + 22, y + 52, width - 44);
  progressBar(doc, "Estratégias ativas", scoreToPercent(result.groups.estrategiasAtivas), x + 22, y + 86, width - 44);
  progressBar(doc, "Metacognição", scoreToPercent(result.groups.metacognicao), x + 22, y + 120, width - 44);
  doc.y = y + 176;
}

function addFooters(doc: PdfDoc) {
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i += 1) {
    doc.switchToPage(i);
    doc.fillColor(muted).font("Helvetica").fontSize(8).text("EdukaCuca · Diagnóstico gratuito de aprendizagem", 46, 806, {
      width: 503,
      align: "center",
    });
  }
}

function buildPdf(lead: z.infer<typeof leadSchema>, answers: Record<number, number>) {
  const result = calculateDiagnosticResult(answers);
  const doc = new PDFDocument({ size: "A4", margin: 46, bufferPages: true, info: { Title: "Diagnóstico EdukaCuca" } }) as PdfDoc;

  doc.rect(0, 0, 595.28, 330).fill(accent);
  doc.fillColor(gold).font("Helvetica-Bold").fontSize(9).text("DIAGNÓSTICO GRATUITO DE APRENDIZAGEM", 58, 74, { characterSpacing: 0.7 });
  doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(32).text("Feedback personalizado de hábitos de estudo", 58, 104, { width: 430, lineGap: 2 });
  doc.fillColor("#DCE5DF").font("Helvetica").fontSize(12).text("EdukaCuca · Ciência da aprendizagem aplicada ao estudo", 58, 210);

  const infoY = 360;
  const rows = [
    ["Respondente", lead.nome],
    ["Estudando", lead.fase || "Não informado"],
    ["Objetivo", lead.objetivo || "Não informado"],
    ["Data", formatDate(lead.data)],
    ["Tipo de diagnóstico", "Gratuito"],
  ];
  rows.forEach(([label, value], index) => {
    const y = infoY + index * 38;
    doc.rect(46, y, 160, 38).fillAndStroke(cream, border);
    doc.rect(206, y, 343, 38).fillAndStroke("#FFFFFF", border);
    doc.fillColor(accent).font("Helvetica-Bold").fontSize(9.5).text(label, 58, y + 13);
    doc.fillColor(muted).font("Helvetica").fontSize(9.5).text(value, 220, y + 13, { width: 315 });
  });

  doc.addPage();
  kicker(doc, "seção 1");
  h1(doc, "Apresentação do diagnóstico");
  paragraph(doc, "Olá, esta é a sua devolutiva do diagnóstico de hábitos de estudo versão gratuita. Esta ferramenta foi criada para auxiliar alunos atuais e futuros alunos a terem um acesso breve às suas habilidades de aprendizagem, entendendo um pouco mais sobre como aprender com qualidade e reorganizar os próprios métodos de estudo.");
  paragraph(doc, "O objetivo aqui não é diagnosticar pessoas ou ditar o que é certo ou errado. É uma forma de explorar habilidades de aprendizado e ganhar mais autonomia perante os estudos ao se aprofundar em metodologias validadas de aprendizagem.");
  callout(doc, "Nota sobre a leitura", "Este material organiza padrões de estudo e caminhos possíveis de ação. Use a devolutiva como guia para refletir, testar estratégias e acompanhar sua evolução.");

  h2(doc, "Fatores avaliados");
  paragraph(doc, "Os construtos abaixo aparecem na ordem usada na leitura do diagnóstico. Eles ajudam a organizar diferentes dimensões dos hábitos de estudo.");
  constructDescriptions.forEach(([title, description]) => card(doc, title, description));

  doc.addPage();
  kicker(doc, "seção 2");
  h1(doc, "Mapa de desempenho");
  paragraph(doc, "O gráfico abaixo foi gerado de acordo com a performance do aluno nos 7 construtos avaliados.");
  drawConstructChart(doc, result);
  drawGroupMap(doc, result);

  h2(doc, `Seu estilo de aprendizagem: ${result.styleName}`);
  paragraph(doc, result.styleDescription);
  result.interpretation.forEach((item) => paragraph(doc, item));
  callout(doc, "Hora da reflexão", "Essa leitura é um ponto de partida. Observe as recomendações e pense sobre o que faz sentido para sua rotina e estratégias de estudo.");

  doc.addPage();
  kicker(doc, "seção 3");
  h1(doc, "Boas recomendações e práticas de estudo");
  paragraph(doc, "Se eu tivesse apenas 2 minutos para te ajudar a aprender melhor baseado em meus anos de experiência como professor, faria mais ou menos assim.");
  practices.forEach(([title, content], index) => card(doc, `${String(index + 1).padStart(2, "0")} · ${title}`, content, "#FFFFFF"));
  callout(doc, "", "Esta é a sua oportunidade de criar o hábito de questionar seus métodos de aprendizado e seus resultados. Seja sincero consigo mesmo e aprenda a refletir sobre suas estratégias e também sobre o que aprendeu. Desta forma, ao se dedicar ao aprender a aprender, terá mais autonomia ao longo do tempo.");

  h2(doc, "Como a EdukaCuca pode ajudar");
  paragraph(doc, "A EdukaCuca oferece formas de colocar essas estratégias em prática com acompanhamento. Para o seu perfil, estas opções fazem mais sentido:");
  services.forEach(([title, content]) => card(doc, title, content));
  callout(doc, "Próximo passo", "Fale com a EdukaCuca para transformar o diagnóstico em plano de estudo, aulas personalizadas ou mentoria de aprendizagem.");
  doc.fillColor(muted).font("Helvetica").fontSize(9).text("edukacuca.com.br · almeida.2019@gmail.com", { align: "center" });

  addFooters(doc);
  return collectPdf(doc);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Dados inválidos para gerar PDF", details: parsed.error.flatten() }, { status: 400 });
    }

    const pdf = await buildPdf(parsed.data.lead, correctedAnswers(parsed.data.answers));
    const filename = `${sanitizeFilename(parsed.data.lead.nome)}-diagnostico-edukacuca.pdf`;

    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PDF do diagnóstico:", error);
    return NextResponse.json({ error: "Erro interno ao gerar PDF" }, { status: 500 });
  }
}
