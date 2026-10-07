"use client";

import { ArrowRight, BarChart3, Bird, BookOpen, CalendarCheck, Download, Fish, Flame, Footprints, Languages, LockKeyhole, MessageCircle, Presentation, Sparkles, TreePine, Waves, Wind } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { calculateDiagnosticResult, DiagnosticResult, isCompleteDiagnosticAnswers, matrixConfig, MatrixId, scoreToPercent } from "@/lib/diagnosticoResultado";

type LeadData = {
  nome?: string;
  idade?: string;
  fase?: string;
  objetivo?: string;
  data?: string;
};

const constructExplanations = [
  ["Planejamento", "Planejamento representa nossa capacidade de analisar a tarefa a ser realizada, definir metas e escolher estratégias de estudo que auxiliem no processo de aprendizado (Zimmerman, 2002; Locke & Latham, 2002)."],
  ["Metacognição", "Chamamos de metacognição a habilidade de 'pensar sobre o próprio pensamento', ou seja, é perceber as próprias ideias que criamos mentalmente e a partir disso aprender a 'monitorar' nossos próprios processos de aprendizagem (Bjork et al., 2013; Dunlosky & Rawson, 2012)."],
  ["Gestão de tempo", "Consideramos o termo gestão de tempo como nossa habilidade de observar o próprio uso do tempo enquanto estuda/trabalha, como organiza momentos de foco e descanso, habilidade de perceber a própria 'bateria' de atenção e hierarquização de tarefas (Macan et al., 1990; Claessens et al., 2007)."],
  ["Busca de ajuda", "Entendemos como busca de ajuda a habilidade de perceber quando 'travamos' nos estudos e saber buscar ajuda com professor, colegas, estratégias de aprendizagem e/ou ferramentas online (Ryan et al., 2001; Karabenick, 2003)."],
  ["Aprendizagem ativa", "Chamamos de aprendizagem ativa a capacidade do aluno de planejar e utilizar estratégias de aprendizagem que o ajudem a praticar o assunto, recuperar memórias e aplicar conceitos. Qualquer estratégia que o ajude a fortalecer, 'guardar' e lembrar do assunto a longo-prazo (Roediger & Karpicke, 2006; Dunlosky et al., 2013)."],
  ["Revisão estratégica", "Revisão estratégica representa a habilidade do aluno de espaçar suas revisões e sessões de estudo de forma que o ajude a relembrar do aprendizado por mais tempo. É o entendimento de como a memória funciona e a capacidade de se organizar para reter mais aprendizado (Cepeda et al., 2006; Bahrick et al., 1993)."],
  ["Motivação", "Entendemos por motivação o conjunto de processos que dão energia, direção e persistência para que o aluno consiga concluir tarefas (Ryan & Deci, 2000; Steel, 2007)."],
] as const;

const constructMeta: Record<string, { accent: string; boldTerms: string[] }> = {
  Planejamento: { accent: "bg-green", boldTerms: ["analisar a tarefa", "definir metas", "escolher estratégias de estudo"] },
  Metacognição: { accent: "bg-sky-deep", boldTerms: ["pensar sobre o próprio pensamento", "monitorar", "nossos próprios processos"] },
  "Gestão de tempo": { accent: "bg-yellow-400", boldTerms: ["observar o próprio uso do tempo", "momentos de foco e descanso", "hierarquização de tarefas"] },
  "Busca de ajuda": { accent: "bg-gold", boldTerms: ["perceber quando 'travamos'", "buscar ajuda"] },
  "Aprendizagem ativa": { accent: "bg-teal-500", boldTerms: ["praticar o assunto", "recuperar memórias", "fortalecer", "guardar", "lembrar"] },
  "Revisão estratégica": { accent: "bg-accent", boldTerms: ["espaçar suas revisões", "relembrar do aprendizado por mais tempo"] },
  Motivação: { accent: "bg-amber-400", boldTerms: ["energia", "direção", "persistência", "concluir tarefas"] },
};

const introHighlightTerms = ["diagnóstico de hábitos de estudo", "estratégias de aprendizagem", "não é diagnosticar pessoas", "ganhar mais autonomia perante os estudos", "metodologias validadas pela ciência"];

const studyPractices = [
  ["Planejamento", "Organize sua sessão de estudos antes de começar a estudar. Separe blocos de estudo, planeje pausas, escolha um ambiente calmo, defina o que vai estudar antes de começar e como vai fazer isso. Foque no processo, esqueça o resultado."],
  ["Execução", "Esta é a parte de quando você está no ato de estudar. Utilize estratégias que façam você relembrar o estudo por mais tempo, tais como a prática do 'relembrar ativo' para treinar sua recuperação de memórias, espace as sessões de estudo pela semana em vez de estudar de uma vez só e alterne blocos de estudo com assuntos parecidos em vez de uma matéria só."],
  ["Manutenção do aprendizado", "Aqui você vai se preocupar em interromper o esquecimento do que estudou. Organize revisões ao longo das semanas, teste a si mesmo com provas sobre o assunto, tente explicar para colegas o que sabe. Se envolva com o assunto de verdade e tente entender com suas próprias palavras."],
  ["Reflexão", "Após cada semana/sessão de estudo, pare e pense. Eu atingi meus objetivos ao estudar? Eu poderia ter utilizado estratégias diferentes? O que fiz realmente funcionou? Como posso melhorar para as próximas vezes?"],
] as const;

const products = [
  [BookOpen, "Curso básico de Aprender a Aprender", "Curso gravado online sobre as estratégias mais eficazes de aprendizagem e como torná-las parte da sua rotina.", "Ver curso", "/cursos"],
  [Languages, "Aulas particulares de inglês ou francês", "Aulas online personalizadas centrada no aluno. Sua demanda, nossa prioridade.", "Conhecer aulas", "/aulas"],
  [CalendarCheck, "Aulas personalizadas de habilidades de aprendizagem", "Investigação profunda sobre suas fortalezas e dificuldades em relação a aprendizagem. Aqui montamos um plano de estudo e selecionamos estratégias de aprendizagem que cabem no seu dia a dia.", "Falar sobre aulas", "/cursos"],
  [Presentation, "Diagnóstico premium", "Versão mais detalhada e personalizada do diagnóstico gratuito. Contém mais perguntas sobre a rotina e habilidades do aluno, áudio com avaliação individual de cada item respondido e plano de ação para por em prática.", "Ver premium", "/diagnostico/completo"],
] as const;

const profileReveal = {
  Cuca: { icon: Sparkles, quote: "Para um bom feitiço, é preciso conhecer a receita, o tempo e a intenção.", animation: "animate-profile-glow", effect: "profile-effect-sparkles" },
  Saci: { icon: Wind, quote: "Nem todo redemoinho nasce perdido; às vezes, só precisa de direção.", animation: "animate-profile-wind", effect: "profile-effect-wind" },
  Curupira: { icon: Footprints, quote: "Mesmo com trilha marcada, é preciso olhar as próprias pegadas.", animation: "animate-profile-step", effect: "profile-effect-steps" },
  Boitatá: { icon: Flame, quote: "A clareza só vira aprendizagem quando a luz encontra ação.", animation: "animate-profile-flame", effect: "profile-effect-flame" },
  Caipora: { icon: TreePine, quote: "Planejar a entrada na mata é só o começo; é preciso perceber seus sinais e voltar para revisar.", animation: "animate-profile-sway", effect: "profile-effect-leaves" },
  Iara: { icon: Waves, quote: "Entender o que acontece por dentro é força; organizar o mergulho é o próximo passo.", animation: "animate-profile-wave", effect: "profile-effect-water" },
  Boto: { icon: Fish, quote: "Praticar é parte da dança; planejar e perceber o passo fazem a música durar.", animation: "animate-profile-swim", effect: "profile-effect-water" },
  Uirapuru: { icon: Bird, quote: "Antes do canto mais bonito, existe o silêncio de quem aprende a escutar.", animation: "animate-profile-song", effect: "profile-effect-song" },
} as const;

const highlightTermsByMatrix: Record<number, string[]> = {
  1: ["hábitos importantes que ajudam na hora de estudar", "planejamento", "monitora os próprios pensamentos", "estratégias de aprendizagem para praticar e revisar", "se observar e refletir", "qualidade do seu planejamento", "momentos foco e descanso", "Bons estudos!"],
  2: ["monitorar seu momento de aprendizado", "estratégias ativas de aprendizagem", "planejar as sessões de estudo", "encaixá-las na sua rotina", "tempo disponível", "pré-planejamento", "o que vai estudar e como", "Bons estudos!"],
  3: ["bom planejamento", "estratégias ativas de aprendizagem", "monitorar o próprio pensamento", "verificar se suas estratégias de estudo são realmente eficazes", "antes de estudar, durante o estudo e depois do estudo", "Eu consigo explicar isso sem olhar?", "O que ainda está confuso?", "Bons estudos!"],
  4: ["boa organização", "monitorar seu momento de aprendizado", "estratégias ativas de aprendizagem", "testar seu próprio conhecimento", "tentar lembrar de cabeça", "não utilize métodos passivos de estudo", "tentar relembrar o que estudou", "Não desista!"],
  5: ["bom planejamento", "monitorar seu momento de aprendizado", "estratégias ativas de aprendizagem", "ponto forte de organização", "antes do estudo, durante o estudo e após o estudo", "Qual estratégia eu deveria utilizar?", "planeje revisões sobre o assunto", "Não desista!"],
  6: ["monitorar seu momento de aprendizado", "se planejar e cumprir as tarefas propostas", "estratégias de planejamento e revisão", "tempo disponível", "pré-planejamento", "tentar lembrar de cabeça", "não utilize métodos passivos de estudo"],
  7: ["estratégias ativas de aprendizagem", "se planejar", "monitorar seu próprio aprendizado", "escolher as estratégias mais eficazes", "antes de estudar, durante o estudo e depois do estudo", "Quanto tempo irá durar seu foco?", "Qual estratégia ativa irá utilizar?", "etapa 1", "etapa 2", "etapa 3", "Na etapa 1", "Na etapa 2", "Na etapa 3", "Não desista!"],
  8: ["hábitos de estudo avaliados aparecem com pouca frequência", "planejamento", "monitoramento dos seus próprios pensamentos", "estratégias ativas de aprendizagem", "começar por planejamento e metacognição", "seu plano antes de executar o plano", "Eu consigo explicar isso sem colar?", "testar estratégias novas", "Bons estudos!"],
};

const practiceAccentClasses = ["border-green", "border-gold", "border-sky-deep", "border-yellow-400"];

const practiceBoldTerms: Record<string, string[]> = {
  Planejamento: ["Organize sua sessão de estudos antes de começar a estudar.", "blocos de estudo", "defina o que vai estudar antes de começar", "Foque no processo, esqueça o resultado."],
  Execução: ["ato de estudar", "estratégias que façam você relembrar o estudo", "treinar sua recuperação de memórias", "alterne blocos de estudo"],
  "Manutenção do aprendizado": ["interromper o esquecimento", "Organize revisões ao longo das semanas", "teste a si mesmo com provas sobre o assunto", "tente explicar para colegas", "entender com suas próprias palavras"],
  Reflexão: ["pare e pense", "Eu atingi meus objetivos ao estudar?", "O que fiz realmente funcionou?", "Como posso melhorar para as próximas vezes?"],
};

const finalPracticeBoldTerms = ["criar o hábito de questionar seus métodos de aprendizado e seus resultados", "Seja sincero consigo mesmo", "mais autonomia ao longo do tempo"];

function formatStoredDate(value?: string) {
  if (!value) return new Intl.DateTimeFormat("pt-BR").format(new Date());

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;

  return new Intl.DateTimeFormat("pt-BR").format(parsed);
}

function readLeadData(): LeadData {
  if (typeof window === "undefined") return {};

  try {
    return JSON.parse(window.localStorage.getItem("edukacuca-diagnostico-dados") ?? "{}") as LeadData;
  } catch {
    return {};
  }
}

function getPreviewMatrixId() {
  if (typeof window === "undefined") return null;

  const matrix = Number(new URLSearchParams(window.location.search).get("matriz"));
  return matrix >= 1 && matrix <= 8 ? matrix as MatrixId : null;
}

function buildPreviewResult(matrixId: MatrixId): DiagnosticResult {
  const matrix = matrixConfig[matrixId];
  const statusByMatrix: Record<MatrixId, [boolean, boolean, boolean]> = {
    1: [true, true, true],
    2: [false, true, true],
    3: [true, false, true],
    4: [true, true, false],
    5: [true, false, false],
    6: [false, true, false],
    7: [false, false, true],
    8: [false, false, false],
  };
  const [planejamentoOk, metacognicaoOk, estrategiasOk] = statusByMatrix[matrixId];

  const high = 3.2;
  const low = 1.7;
  const constructs = {
    planejamento: planejamentoOk ? high : low,
    gestaoTempo: planejamentoOk ? high : low,
    metacognicao: metacognicaoOk ? high : low,
    buscaAjuda: metacognicaoOk ? high : low,
    motivacao: metacognicaoOk ? high : low,
    aprendizagemAtiva: estrategiasOk ? high : low,
    revisaoEstrategica: estrategiasOk ? high : low,
  };

  return {
    constructs,
    groups: {
      planejamento: planejamentoOk ? high : low,
      metacognicao: metacognicaoOk ? high : low,
      estrategiasAtivas: estrategiasOk ? high : low,
    },
    groupStatus: {
      planejamento: planejamentoOk,
      metacognicao: metacognicaoOk,
      estrategiasAtivas: estrategiasOk,
    },
    matrixId,
    styleName: matrix.name,
    styleDescription: matrix.description,
    interpretation: matrix.interpretation,
  };
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function markText(text: string, terms: string[], className: string) {
  const activeTerms = terms.filter((term) => text.includes(term));
  if (activeTerms.length === 0) return text;

  const pattern = new RegExp(`(${activeTerms.map(escapeRegExp).join("|")})`, "g");
  return text.split(pattern).map((part, index) => {
    if (!activeTerms.includes(part)) return part;
    return <span key={`${part}-${index}`} className={className}>{part}</span>;
  });
}

function PracticeText({ title, text }: { title: string; text: string }) {
  return <>{markText(text, practiceBoldTerms[title] ?? [], "font-bold text-accent")}</>;
}

export default function ResultadoDiagnostico() {
  const [lead] = useState<LeadData>(() => readLeadData());
  const [pdfStatus, setPdfStatus] = useState<"idle" | "loading" | "error">("idle");
  const [result] = useState<DiagnosticResult | null>(() => {
    if (typeof window === "undefined") return null;

    const previewMatrixId = getPreviewMatrixId();
    if (previewMatrixId) return buildPreviewResult(previewMatrixId);

    const storedAnswers = window.localStorage.getItem("edukacuca-diagnostico-respostas");
    if (!storedAnswers) return null;

    try {
      const answers = JSON.parse(storedAnswers) as Record<string, number>;
      const answersByItem = Object.fromEntries(Object.entries(answers).map(([id, value]) => [Number(id), value])) as Record<number, number>;
      if (!isCompleteDiagnosticAnswers(answersByItem)) return null;
      const calculated = calculateDiagnosticResult(answersByItem);
      window.localStorage.setItem("edukacuca-diagnostico-resultado", JSON.stringify(calculated));
      return calculated;
    } catch {
      return null;
    }
  });

  if (!result) {
    return (
      <section className="bg-[linear-gradient(135deg,#f6f8f6_0%,#ffffff_55%,#eef7f2_100%)] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="rounded-[2rem] border border-accent/10 bg-white p-8 shadow-xl shadow-accent/5 sm:p-10">
            <h1 className="font-heading text-3xl font-bold text-accent">Resultado não encontrado</h1>
            <p className="mt-4 leading-relaxed text-accent/70">
              Para ver sua devolutiva completa, responda as 33 perguntas do diagnóstico neste mesmo navegador.
            </p>
            <Link href="/diagnostico/captura" className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark">
              Fazer diagnóstico
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const axes = [
    ["Planejamento", scoreToPercent(result.constructs.planejamento)],
    ["Metacognição", scoreToPercent(result.constructs.metacognicao)],
    ["Gestão do tempo", scoreToPercent(result.constructs.gestaoTempo)],
    ["Busca de ajuda", scoreToPercent(result.constructs.buscaAjuda)],
    ["Aprendizagem ativa", scoreToPercent(result.constructs.aprendizagemAtiva)],
    ["Revisão estratégica", scoreToPercent(result.constructs.revisaoEstrategica)],
    ["Motivação", scoreToPercent(result.constructs.motivacao)],
  ] as const;

  const identification = [
    ["Respondente:", lead.nome || "Aluno EdukaCuca"],
    ["Idade:", lead.idade || "-"],
    ["Estudando:", lead.fase || "-"],
    ["Objetivo:", lead.objetivo || "-"],
    ["Data:", formatStoredDate(lead.data)],
    ["Tipo de diagnóstico:", "Gratuito"],
  ] as const;
  const reveal = profileReveal[result.styleName as keyof typeof profileReveal] ?? profileReveal.Cuca;
  const RevealIcon = reveal.icon;

  function downloadPdf() {
    setPdfStatus("loading");
    requestAnimationFrame(() => {
      const originalTitle = document.title;
      document.title = `diagnostico-edukacuca-${(lead.nome || "aluno").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
      window.print();
      document.title = originalTitle;
      setPdfStatus("idle");
    });
  }

  return (
    <main className="diagnostic-result-page bg-[linear-gradient(135deg,#f6f8f6_0%,#ffffff_45%,#eef7f2_100%)] py-10 sm:py-16">
      <article id="devolutiva-gratuita" className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-accent/10 bg-white shadow-2xl shadow-accent/10">
        <header className="border-b border-accent/10 bg-cream px-6 py-8 text-center sm:px-10">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-green">EdukaCuca · Resultado Gratuito</p>
          <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-accent sm:text-5xl">Feedback do Diagnóstico de Aprendizagem</h1>
          <button
            type="button"
            onClick={downloadPdf}
            disabled={pdfStatus === "loading"}
            className="no-export mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-gold/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Download className="h-4 w-4" />
            {pdfStatus === "loading" ? "Preparando devolutiva..." : "Baixar devolutiva gratuita"}
          </button>
        </header>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <section className="mx-auto mb-10 max-w-3xl text-center">
            <div className="profile-reveal-stage relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-[#A97C2B]/55 bg-[radial-gradient(circle_at_38%_28%,#F4E1A2_0%,#D6B866_30%,#C9A44C_58%,#A97C2B_100%)] shadow-2xl shadow-[#B9933D]/30 ring-1 ring-white/50 sm:h-56 sm:w-56">
              <div className="absolute inset-4 rounded-full bg-[#6B4A16]/20 blur-2xl" />
              <div className={`absolute inset-0 ${reveal.effect}`} />
              <RevealIcon className={`relative h-28 w-28 text-cream drop-shadow-[0_0_18px_rgba(255,255,255,0.75)] [filter:drop-shadow(0_10px_18px_rgba(46,58,51,0.30))] sm:h-36 sm:w-36 ${reveal.animation}`} strokeWidth={1.45} />
            </div>
            <h2 className="animate-fade-in-up relative mx-auto mt-6 inline-flex px-6 py-1 font-heading text-4xl font-black tracking-tight text-accent sm:text-6xl">
              <span className="absolute inset-x-0 bottom-2 -z-0 h-4 rounded-full bg-[#D6B866]/35" />
              <span className="relative z-10">{result.styleName}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance font-heading text-2xl font-semibold leading-snug text-accent sm:text-3xl">
              “{reveal.quote}”
            </p>
            <p className="mt-5 text-center font-heading text-sm font-bold uppercase tracking-[0.18em] text-accent/45">
              Seu estilo de aprendizagem é {result.styleName}
            </p>
          </section>

          <section className="overflow-hidden rounded-3xl border border-accent/10">
            {identification.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[130px_1fr] border-b border-accent/10 last:border-b-0 sm:grid-cols-[180px_1fr]">
                <div className="bg-accent px-4 py-3 font-heading text-sm font-bold text-white">{label}</div>
                <div className="bg-cream px-4 py-3 text-sm text-accent/80">{value}</div>
              </div>
            ))}
          </section>

          <section className="mt-10">
            <h2 className="font-heading text-2xl font-bold text-accent">1. Apresentação do diagnóstico e fatores avaliados</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-accent/70">
              <p>{markText("Olá, esta é a sua devolutiva do diagnóstico de hábitos de estudo versão gratuita. Este questionário foi criado por mim, José Vinicius, com base na minha experiência como professor de idiomas e estratégias de aprendizagem e em pesquisas sobre aprendizagem, autorregulação, metacognição, memória e motivação.", introHighlightTerms, "rounded bg-gold/15 px-1 text-accent/80")}</p>
              <p>{markText("O objetivo aqui não é diagnosticar pessoas ou ditar o que é certo ou errado, é uma maneira de explorar as próprias habilidades de aprendizado e ganhar mais autonomia perante os estudos ao se aprofundar em metodologias validadas pela ciência.", introHighlightTerms, "rounded bg-gold/15 px-1 text-accent/80")}</p>
              <p>Caso queira saber mais sobre o meu trabalho, enviar feedbacks, tecer críticas ou elogios, acesse Edukacuca.com.br ou me mande um e-mail em almeida.jv2019@gmail.com.</p>
            </div>

            <h3 className="mt-8 font-heading text-xl font-bold text-accent">Breve explicação dos construtos avaliados</h3>
            <div className="mt-5 grid gap-4">
              {constructExplanations.map(([title, text]) => {
                const meta = constructMeta[title];
                return (
                <div key={title} className="relative overflow-hidden rounded-3xl border border-accent/10 bg-cream p-5 pl-7">
                  <div className={`absolute left-0 top-0 h-full w-1.5 ${meta.accent}`} />
                  <h4 className="font-heading text-xl font-extrabold text-accent">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-accent/70">{markText(text, meta.boldTerms, "font-bold text-accent")}</p>
                </div>
                );
              })}
            </div>
          </section>

          <section className="mt-12">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-gold" />
              <div>
                <h2 className="font-heading text-2xl font-bold text-accent">2. Seu mapa de aprendizagem</h2>
                <p className="mt-1 text-sm text-accent/65">O diagnóstico gratuito mostra uma primeira leitura. O mapa completo aprofunda os construtos bloqueados no diagnóstico premium.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 rounded-[2rem] border border-accent/10 bg-white p-5 shadow-sm">
              {axes.slice(0, 3).map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm text-accent/70">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-accent/10">
                    <div className="h-3 rounded-full bg-gradient-to-r from-green to-gold" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
              <div className="relative overflow-hidden rounded-3xl bg-cream/60 px-3 py-4">
                <div className="space-y-4 select-none blur-[2.5px] opacity-60">
                {axes.slice(3).map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm text-accent/55">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-accent/10">
                      <div className="h-3 rounded-full bg-gradient-to-r from-green via-[#D6B866] to-gold" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-cream/45 px-4 backdrop-blur-[1px]">
                  <Link
                    href="/diagnostico/completo"
                    className="no-export inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-heading text-[0.68rem] font-bold uppercase tracking-wider text-accent shadow-lg shadow-accent/10 transition-all hover:-translate-y-0.5 hover:bg-cream focus:outline-none focus:ring-2 focus:ring-gold/40 sm:px-6"
                  >
                    <LockKeyhole className="h-4 w-4 text-gold" />
                    Mapa completo no diagnóstico premium
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-[2rem] bg-cream p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold text-accent">3. Padrões observados no seu estudo - {result.styleName}</h2>
            <p className="mt-4 text-lg leading-relaxed text-accent/75">{result.styleDescription}</p>
            <div className="mt-5 space-y-4 leading-relaxed text-accent/70">
              {result.interpretation.map((paragraph) => (
                <p key={paragraph}>{markText(paragraph, highlightTermsByMatrix[result.matrixId], "rounded bg-gold/15 px-1 text-accent/80")}</p>
              ))}
            </div>
          </section>

          <section className="no-export mt-12">
            <h2 className="font-heading text-2xl font-bold text-accent">4. Boas práticas recomendadas pelo professor</h2>
            <p className="mt-4 leading-relaxed text-accent/70">Se eu tivesse apenas 2 minutos para te ajudar a aprender melhor baseado em meus 8 anos de experiência como professor, faria mais ou menos assim.</p>
            <p className="mt-6 font-heading text-sm font-bold uppercase tracking-wider text-green">Os 4 passos fundamentais</p>
            <div className="mt-5 grid gap-4">
              {studyPractices.map(([title, text], index) => (
                <div key={title} className={`rounded-2xl border-l-4 bg-cream p-5 ${practiceAccentClasses[index]}`}>
                  <p className="text-sm leading-relaxed text-accent/75"><strong className="font-heading text-accent">{title}.</strong> <PracticeText title={title} text={text} /></p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-accent/70">
              {markText("Esta é a sua oportunidade de criar o hábito de questionar seus métodos de aprendizado e seus resultados. Seja sincero consigo mesmo e aprenda a refletir sobre suas estratégias e também sobre o que aprendeu. Desta forma, ao se dedicar ao aprender a aprender, terá mais autonomia ao longo do tempo.", finalPracticeBoldTerms, "font-bold text-accent")}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-accent">5. Como podemos ajudar você</h2>
            <p className="mt-4 leading-relaxed text-accent/70">A EdukaCuca oferece formas de colocar essas estratégias em prática com acompanhamento. Para o seu perfil, estas opções fazem mais sentido:</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {products.map(([Icon, title, text, button, href]) => (
                <div key={title} className="rounded-3xl border border-accent/10 bg-cream p-6">
                  <Icon className="h-8 w-8 text-gold" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-accent">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent/70">{text}</p>
                  <Link href={href} className="mt-5 inline-flex font-heading text-xs font-bold uppercase tracking-wider text-green">
                    {button}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="no-export mt-12 rounded-[2rem] bg-accent p-8 text-center text-white">
            <h2 className="font-heading text-3xl font-bold">Quer uma análise personalizada do seu resultado?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/75">No diagnóstico completo, você recebe uma devolutiva individual por WhatsApp com interpretação do seu estilo, recomendações específicas e próximos passos para melhorar sua rotina de estudos.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://wa.me/5511926599367" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-gold/90">
                <MessageCircle className="h-4 w-4" />
                Falar pelo WhatsApp
              </a>
              <Link href="/diagnostico/completo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-white/10">
                Ver diagnóstico completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
