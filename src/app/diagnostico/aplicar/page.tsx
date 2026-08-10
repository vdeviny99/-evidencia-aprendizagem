"use client";

import { useState } from "react";
import { ClipboardList, CheckCircle, Printer } from "lucide-react";

const scale = [
  { value: 0, label: "Nunca" },
  { value: 1, label: "Raramente" },
  { value: 2, label: "Às vezes" },
  { value: 3, label: "Frequentemente" },
  { value: 4, label: "Sempre" },
];

const items = [
  { id: 1, neg: false, label: "1", text: "Antes de começar a estudar, defino claramente o que quero aprender naquela sessão de estudos." },
  { id: 2, neg: false, label: "2", text: "Durante o estudo, paro para verificar se estou realmente entendendo o conteúdo." },
  { id: 3, neg: false, label: "3", text: "Estudo em blocos de tempo definidos com pausas planejadas entre eles." },
  { id: 4, neg: false, label: "4", text: "Quando não entendo algo, peço ajuda a colegas, professores ou tutores." },
  { id: 5, neg: false, label: "5", text: "Depois de estudar, fecho o material e tento lembrar o máximo que consigo." },
  { id: 6, neg: false, label: "6", text: "Reviso o conteúdo em dias diferentes, não deixo para estudar em um dia só." },
  { id: 7, neg: false, label: "7", text: "Continuo estudando mesmo quando o conteúdo é difícil ou frustrante." },
  { id: 8, neg: false, label: "8", text: "Defino objetivos específicos e mensuráveis (ex.: \"resolver 10 questões\") em vez de vagos (\"estudar\")." },
  { id: 9, neg: false, label: "9", text: "Avalio com precisão quais tópicos já domino e quais ainda preciso estudar." },
  { id: 10, neg: false, label: "10", text: "Quando travo em um problema, faço uma pausa para descansar antes de continuar a estudar." },
  { id: 11, neg: false, label: "11", text: "Uso sites, vídeos, fóruns ou ferramentas online para esclarecer dúvidas." },
  { id: 12, neg: false, label: "12", text: "Escolho formas desafiadoras de estudar (tentar resolver, explicar) em vez de apenas reler." },
  { id: 13, neg: false, label: "13", text: "Ao revisar, primeiro tento lembrar ativamente o conteúdo antes de reler o material." },
  { id: 14, neg: false, label: "14", text: "Estudo porque quero aprender e sentir progresso, não apenas por notas ou pressão." },
  { id: 15, neg: false, label: "15", text: "Divido metas grandes em etapas menores e alcançáveis." },
  { id: 16, neg: false, label: "16", text: "Consigo explicar o propósito do que estou estudando." },
  { id: 17, neg: false, label: "17", text: "Faço pausas intencionais entre sessões de estudo." },
  { id: 18, neg: false, label: "18", text: "Peço feedback sobre meu desempenho e uso isso para melhorar." },
  { id: 19, neg: false, label: "19", text: "Explico o conteúdo em voz alta como se estivesse ensinando alguém." },
  { id: 20, neg: false, label: "20", text: "Uso ferramentas que me ajudam a relembrar o conteúdo, como Quizlet, Anki, flashcard ou similares." },
  { id: 21, neg: true, label: "21", text: "Eu gosto de ir bem nos estudos para poder mostrar minhas habilidades no trabalho, família, emprego e outros" },
  { id: 22, neg: false, label: "22", text: "No início da semana, planejo o que e quando vou estudar cada disciplina." },
  { id: 23, neg: true, label: "23", text: "Acho que aprendi, mas na prova descubro que não sabia tanto assim" },
  { id: 24, neg: true, label: "24", text: "Deixo a maior parte do estudo para a véspera da prova." },
  { id: 25, neg: false, label: "25", text: "Crio minhas próprias perguntas sobre o conteúdo e tento respondê-las sem consultar." },
  { id: 26, neg: false, label: "26", text: "Minhas anotações são organizadas e fáceis de revisar depois." },
  { id: 27, neg: true, label: "27", text: "Tenho dificuldade em manter uma rotina de estudos por várias semanas seguidas." },
  { id: 28, neg: true, label: "28", text: "Começo a estudar sem um plano claro do que vou fazer naquela sessão de estudos." },
  { id: 29, neg: false, label: "29", text: "Depois de estudar, avalio se minha estratégia funcionou e ajusto para a próxima." },
  { id: 30, neg: true, label: "30", text: "Minha principal forma de estudar é reler o material várias vezes." },
  { id: 31, neg: true, label: "31", text: "Só reviso o conteúdo na véspera da prova." },
  { id: 32, neg: false, label: "32", text: "Quando tiro uma nota baixa, uso isso como motivação para melhorar." },
  { id: 33, neg: false, label: "33", text: "Acredito que posso melhorar minha capacidade de aprender com esforço e estratégias certas." }
];

export default function AplicarDiagnostico() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function setAnswer(id: number, value: number) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      age: formData.get("age"),
      occupation: formData.get("occupation"),
      course: formData.get("course"),
      howMet: formData.get("howMet"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      objective: formData.get("objective"),
      goalSpecific: formData.get("goalSpecific"),
      deadline: formData.get("deadline"),
      relation: formData.get("relation"),
      consent: formData.get("consent") === "on",
      answers,
    };

    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Erro ao enviar");
      }
      setSubmitted(true);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erro ao enviar diagnóstico");
    }
  }

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-to-b from-accent/5 to-cream pb-16 pt-12 sm:pt-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
            <h1 className="mt-4 font-heading text-2xl font-bold text-accent">Diagnóstico enviado!</h1>
            <p className="mt-2 text-accent/60">Obrigado por responder com sinceridade. Suas respostas foram registradas.</p>
            <p className="mx-auto mt-4 max-w-xl rounded-lg bg-accent/5 px-5 py-4 text-sm text-accent/70">
              A equipe do Eduka Cuca recebeu seu diagnóstico e vai avaliar suas respostas com calma. Em breve você receberá um feedback personalizado com o resultado da sua análise.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-b from-accent/5 to-cream pb-8 pt-12 sm:pt-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
            Diagnóstico
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold text-accent sm:text-4xl">
            Questionário de Autoavaliação
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-accent/60">
            Preencha os campos abaixo e depois responda às 33 afirmações sobre seus hábitos de estudo.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4">
          <form onSubmit={handleSubmit} className="space-y-10">

            <div className="rounded-xl bg-card p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 font-heading text-lg font-bold text-accent">1. Identificação</h2>
              <div className="space-y-5">
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Qual seu nome?</label>
                  <input type="text" name="name" required className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Qual sua idade?</label>
                  <input type="text" name="age" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Ex.: 25" />
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Qual sua profissão ou ocupação atualmente?</label>
                  <input type="text" name="occupation" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Ex.: estudante, professor, designer..." />
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Se estiver estudando, qual curso ou série você faz?</label>
                  <input type="text" name="course" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Ex.: Engenharia, 3º ano EM..." />
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Como nos conheceu?</label>
                  <input type="text" name="howMet" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Ex.: Instagram, amigo, Google..." />
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Seu WhatsApp (com DDD) <span className="text-gold">*</span></label>
                  <input type="tel" name="whatsapp" required className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Ex.: (11) 99999-9999" />
                  <p className="mt-1 text-xs text-accent/50">É por aqui que enviaremos seu feedback personalizado.</p>
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Se quiser, deixe um telefone ou e-mail para contato.</label>
                  <input type="text" name="email" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Opcional" />
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 font-heading text-lg font-bold text-accent">2. Objetivo</h2>
              <div className="space-y-5">
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">O que te trouxe até aqui? O que você gostaria de aprender ou melhorar?</label>
                  <textarea rows={3} name="objective" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Conte um pouco sobre sua motivação..." />
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Existe algum objetivo específico? (prova, faculdade, concurso, trabalho, inglês, aprender melhor etc.)</label>
                  <input type="text" name="goalSpecific" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Ex.: passar no ENEM, melhorar speaking..." />
                </div>
                <div>
                  <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Qual seu prazo ideal para alcançar esse objetivo?</label>
                  <input type="text" name="deadline" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Ex.: 6 meses, 1 ano, sem prazo definido..." />
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 font-heading text-lg font-bold text-accent">3. Relação com os estudos</h2>
              <div>
                <label className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Como é sua relação com os estudos? Fique à vontade para falar sobre o que vier à mente — gostos, dificuldades, hábitos, motivações.</label>
                <textarea rows={5} name="relation" className="mt-1 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20" placeholder="Escreva livremente..." />
              </div>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-sm sm:p-8">
              <h2 className="mb-6 font-heading text-lg font-bold text-accent">4. Autoavaliação de Hábitos de Estudo</h2>

              <div className="mb-6 rounded-lg bg-cream p-4 text-center">
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-gold">Instruções</p>
                <p className="mt-1 text-sm text-accent/70">Para cada afirmação, marque com que frequência o comportamento descrito corresponde à sua realidade. Responda com sinceridade: não existem respostas certas ou erradas.</p>
              </div>

              <div className="mb-6 grid grid-cols-5 gap-1 rounded-lg bg-accent/5 p-3 text-center text-xs">
                {scale.map((s) => (
                  <div key={s.value}>
                    <span className="block font-heading font-bold text-accent">{s.value}</span>
                    <span className="text-accent/50">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-accent text-left text-xs font-bold uppercase tracking-wider text-white">
                      <th className="w-10 px-2 py-3 text-center">Nº</th>
                      <th className="px-3 py-3">Item</th>
                      {scale.map((s) => (
                        <th key={s.value} className="w-12 px-1 py-3 text-center">{s.value}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id} className={i % 2 === 0 ? "bg-cream" : "bg-card"}>
                        <td className="px-2 py-2.5 text-center text-accent/50">{item.label}</td>
                        <td className="px-3 py-2.5 text-accent">{item.text}</td>
                        {scale.map((s) => (
                          <td key={s.value} className="px-1 py-2.5 text-center">
                            <input
                              type="radio"
                              name={"item-" + item.id}
                              value={s.value}
                              checked={answers[item.id] === s.value}
                              onChange={() => setAnswer(item.id, s.value)}
                              className="h-4 w-4 accent-gold"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-lg border border-accent/20 px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-accent transition-colors hover:bg-accent/5"
              >
                <Printer className="h-3 w-3" />
                Imprimir
              </button>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                <ClipboardList className="h-3 w-3" />
                {status === "sending" ? "Enviando..." : "Enviar Diagnóstico"}
              </button>
            </div>

            <div className="rounded-xl border border-accent/15 bg-cream p-5">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-0.5 h-4 w-4 accent-gold"
                />
                <span className="text-xs leading-relaxed text-accent/70">
                  Autorizo o Eduka Cuca a coletar e armazenar meus dados (nome,
                  WhatsApp, e-mail e respostas) para fins de análise do
                  diagnóstico e envio do feedback personalizado. Entendo que
                  posso solicitar a exclusão dos meus dados a qualquer momento,
                  conforme a{" "}
                  <a
                    href="/privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gold underline hover:text-accent"
                  >
                    Política de Privacidade
                  </a>{" "}
                  (Lei Geral de Proteção de Dados – LGPD).
                </span>
              </label>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">Não foi possível enviar. {error} Tente novamente em instantes.</p>
            )}

          </form>
        </div>
      </section>
    </>
  );
}
