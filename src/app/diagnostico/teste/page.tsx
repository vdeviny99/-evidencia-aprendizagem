"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { calculateDiagnosticResult, isCompleteDiagnosticAnswers } from "@/lib/diagnosticoResultado";

const questions = [
  "Antes de começar a estudar, defino claramente o que quero aprender naquela sessão de estudos.",
  "Durante o estudo, paro para verificar se estou realmente entendendo o conteúdo.",
  "Estudo em blocos de tempo definidos com pausas planejadas entre eles.",
  "Quando não entendo algo, peço ajuda a colegas, professores ou tutores.",
  "Depois de estudar, fecho o material e tento lembrar o máximo que consigo.",
  "Reviso o conteúdo em dias diferentes, não deixo para estudar em um dia só.",
  "Continuo estudando mesmo quando o conteúdo é difícil ou frustrante.",
  "Defino objetivos específicos e mensuráveis (ex.: resolver 10 questões) em vez de vagos (estudar).",
  "Avalio com precisão quais tópicos já domino e quais ainda preciso estudar.",
  "Quando travo em um problema, faço uma pausa para descansar antes de continuar a estudar.",
  "Uso sites, vídeos, fóruns ou ferramentas online para esclarecer dúvidas.",
  "Escolho formas desafiadoras de estudar (tentar resolver, explicar) em vez de apenas reler.",
  "Ao revisar, primeiro tento lembrar ativamente o conteúdo antes de reler o material.",
  "Estudo porque quero aprender e sentir progresso, não apenas por notas ou pressão.",
  "Divido metas grandes em etapas menores e alcançáveis.",
  "Consigo explicar o propósito do que estou estudando.",
  "Faço pausas intencionais entre sessões de estudo.",
  "Peço feedback sobre meu desempenho e uso isso para melhorar.",
  "Explico o conteúdo em voz alta como se estivesse ensinando alguém.",
  "Uso ferramentas que me ajudam a relembrar o conteúdo, como Quizlet, Anki, flashcard ou similares.",
  "Eu gosto de ir bem nos estudos para poder mostrar minhas habilidades no trabalho, família, emprego e outros.",
  "No início da semana, planejo o que e quando vou estudar cada disciplina.",
  "Acho que aprendi, mas na prova descubro que não sabia tanto assim.",
  "Deixo a maior parte do estudo para a véspera da prova.",
  "Crio minhas próprias perguntas sobre o conteúdo e tento respondê-las sem consultar.",
  "Minhas anotações são organizadas e fáceis de revisar depois.",
  "Tenho dificuldade em manter uma rotina de estudos por várias semanas seguidas.",
  "Começo a estudar sem um plano claro do que vou fazer naquela sessão de estudos.",
  "Depois de estudar, avalio se minha estratégia funcionou e ajusto para a próxima.",
  "Minha principal forma de estudar é reler o material várias vezes.",
  "Só reviso o conteúdo na véspera da prova.",
  "Quando tiro uma nota baixa, uso isso como motivação para melhorar.",
  "Acredito que posso melhorar minha capacidade de aprender com esforço e estratégias certas.",
];

const scale = [
  { value: 0, label: "Nunca" },
  { value: 1, label: "Raramente" },
  { value: 2, label: "Às vezes" },
  { value: 3, label: "Frequentemente" },
  { value: 4, label: "Sempre" },
];

const leadStorageKey = "edukacuca-diagnostico-dados";

type StoredLead = {
  plan?: "free" | "paid";
  nome?: string;
  email?: string;
  whatsapp?: string;
  fase?: string;
  objetivo?: string;
  idade?: string;
  ocupacao?: string;
  comoConheceu?: string;
  objetivoEspecifico?: string;
  prazo?: string;
  relacao?: string;
};

export default function TesteGratuito() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();
  const progress = Math.round(((current + 1) / questions.length) * 100);

  async function saveSubmission(answersByItem: Record<number, number>) {
    const stored = window.localStorage.getItem(leadStorageKey);
    const lead = stored ? (JSON.parse(stored) as StoredLead) : null;
    if (!lead?.nome || !lead.whatsapp) return;

    const response = await fetch("/api/diagnostico", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plan: lead.plan ?? "free",
        name: lead.nome,
        age: lead.idade ?? null,
        occupation: lead.ocupacao ?? null,
        course: lead.fase ?? null,
        howMet: lead.comoConheceu ?? null,
        whatsapp: lead.whatsapp,
        email: lead.email ?? null,
        objective: lead.objetivo ?? "",
        goalSpecific: lead.objetivoEspecifico ?? null,
        deadline: lead.prazo ?? null,
        relation: lead.relacao ?? "",
        type: lead.plan === "paid" ? "completo" : "gratuito",
        answers: answersByItem,
        consent: true,
      }),
    });

    if (!response.ok) throw new Error("Erro ao salvar diagnóstico");
  }

  async function next() {
    setSubmitError("");

    if (current === questions.length - 1) {
      const answersByItem = Object.fromEntries(
        Object.entries(answers).map(([index, value]) => [Number(index) + 1, value]),
      ) as Record<number, number>;

      if (!isCompleteDiagnosticAnswers(answersByItem)) {
        setSubmitError("Responda todas as 33 perguntas antes de finalizar o diagnóstico.");
        return;
      }

      const lead = JSON.parse(window.localStorage.getItem("edukacuca-diagnostico-dados") ?? "{}");
      const missingLeadFields = [lead.nome, lead.email, lead.whatsapp, lead.idade, lead.fase, lead.objetivo].some(
        (value) => typeof value !== "string" || value.trim().length === 0,
      );

      if (missingLeadFields) {
        setSubmitError("Complete seus dados obrigatórios antes de finalizar o diagnóstico.");
        window.location.href = "/diagnostico/captura";
        return;
      }

      const result = calculateDiagnosticResult(answersByItem);
      window.localStorage.setItem("edukacuca-diagnostico-resultado", JSON.stringify(result));
      window.localStorage.setItem("edukacuca-diagnostico-respostas", JSON.stringify(answersByItem));

      setIsSubmitting(true);
      try {
        await saveSubmission(answersByItem);
      } catch (error) {
        console.error("Erro ao salvar diagnóstico:", error);
      } finally {
        setIsSubmitting(false);
      }
      const stored = window.localStorage.getItem(leadStorageKey);
      const savedLead = stored ? (JSON.parse(stored) as StoredLead) : null;
      window.location.href = savedLead?.plan === "paid" ? "/diagnostico/enviar-comprovante" : "/diagnostico/resultado";
      return;
    }
    startTransition(() => setCurrent((value) => value + 1));
  }

  return (
    <section className="bg-[linear-gradient(180deg,#f6f8f6_0%,#ffffff_100%)] py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 rounded-3xl border border-accent/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4 text-sm text-accent/60">
            <span>Questão {current + 1} de {questions.length}</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-3 h-3 rounded-full bg-accent/10">
            <div className="h-3 rounded-full bg-gold transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/10 bg-white p-6 shadow-xl shadow-accent/5 sm:p-10">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">responda com sinceridade</p>
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-accent">
            {questions[current]}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-accent/60">
            Não existem respostas certas ou erradas. O objetivo é entender tendências do seu jeito de aprender.
          </p>

          <div className="mt-8 space-y-3">
            {scale.map((option) => (
              <label key={option.value} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-accent/10 bg-cream px-5 py-4 text-accent transition hover:border-gold/50 hover:bg-gold/5">
                <input
                  type="radio"
                  name={`question-${current}`}
                  value={option.value}
                  checked={answers[current] === option.value}
                  onChange={() => setAnswers((prev) => ({ ...prev, [current]: option.value }))}
                  className="h-4 w-4 accent-gold"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() => setCurrent((value) => Math.max(0, value - 1))}
              disabled={current === 0 || isPending || isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/15 px-6 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-accent transition-colors hover:bg-accent/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>
            <button
              type="button"
              onClick={next}
              disabled={answers[current] === undefined || isPending || isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isPending || isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : current === questions.length - 1 ? "Finalizar" : "Próxima"}
              {!isPending && !isSubmitting && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
          {submitError && <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{submitError}</p>}
        </div>
      </div>
    </section>
  );
}
