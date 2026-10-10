"use client";

import { ArrowLeft, ArrowRight, Loader2, Pause, Play, Check, Map, X } from "lucide-react";
import { useState, useTransition, useEffect, useRef, useMemo, useSyncExternalStore } from "react";
import { calculateDiagnosticResult, isCompleteDiagnosticAnswers } from "@/lib/diagnosticoResultado";

import { LearningCharacter } from "@/components/LearningCharacter";
import { LearningAtlas } from "@/components/LearningAtlas";
import { readJourneyDraft, writeJourneyDraft, clearJourneyDraft } from "@/lib/learningJourneyDraft";
import Link from "next/link";
import { LearningLandscape } from "@/components/LearningLandscape";
import { guideForQuestion } from "@/lib/learningJourney";
import styles from "./journey.module.css";

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

const subscribe = () => () => {};
export default function TesteGratuito() {
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const draft = useMemo(() => hydrated ? readJourneyDraft() : null, [hydrated]);
  const [storageNote, setStorageNote] = useState("");
  const [started, setStarted] = useState(false);
  const exitDialog = useRef<HTMLDialogElement>(null);
  function begin(resume: boolean) {
    if (resume && draft) { setAnswers(draft.answers); setCurrent(draft.current); }
    else { clearJourneyDraft(); setAnswers({}); setCurrent(0); }
    setStarted(true);
  }
  function navigate(index: number) { writeJourneyDraft(answers, index); startTransition(() => setCurrent(index)); }
  function choose(value: number) { const updated = { ...answers, [current]: value }; setAnswers(updated); const saved = writeJourneyDraft(updated, current); setStorageNote(saved ? "" : "Não foi possível salvar um rascunho nesta aba. Suas respostas continuam disponíveis enquanto esta tela estiver aberta."); }

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [moving, setMoving] = useState(true);
  const [mapOpen, setMapOpen] = useState(false);
  const questionHeading = useRef<HTMLHeadingElement>(null);
  const lastQuestion = useRef(0);
  const journeyTop = useRef<HTMLDivElement>(null);
  const guide = guideForQuestion(current);
  const chapter = Math.min(7, Math.floor(current / 4));
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  useEffect(() => {
    if (lastQuestion.current !== current) {
      questionHeading.current?.focus({ preventScroll: true });
      journeyTop.current?.scrollIntoView({ behavior: "instant", block: "start" });
      lastQuestion.current = current;
    }
  }, [current]);

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
    try {
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
          window.location.assign("/diagnostico/captura");
          return;
        }

        const result = calculateDiagnosticResult(answersByItem);
        window.localStorage.setItem("edukacuca-diagnostico-resultado", JSON.stringify(result));
        window.localStorage.setItem("edukacuca-diagnostico-respostas", JSON.stringify(answersByItem));

        setIsSubmitting(true);
        try {
          await saveSubmission(answersByItem);
        } catch {
          setSubmitError("Suas respostas estão neste navegador, mas não conseguimos enviá-las. Verifique sua conexão e tente finalizar novamente.");
          return;
        } finally {
          setIsSubmitting(false);
        }
        const stored = window.localStorage.getItem(leadStorageKey);
        const savedLead = stored ? (JSON.parse(stored) as StoredLead) : null;
        clearJourneyDraft();
        window.location.assign(savedLead?.plan === "paid" ? "/diagnostico/enviar-comprovante" : "/diagnostico/resultado");
        return;
      }
      navigate(current + 1);
    } catch {
      setIsSubmitting(false);
      setSubmitError("Não conseguimos acessar os dados desta jornada no navegador. Suas respostas continuam nesta tela. Verifique as permissões de armazenamento antes de tentar novamente.");
    }
  }

  return (
    <section data-moving={moving} className={styles.journey} style={{ "--journey-color": guide.color, "--journey-ink": guide.ink } as React.CSSProperties}>
      <LearningLandscape guide={guide} moving={moving} />
      <div className={styles.content}>
        <div ref={journeyTop} className={styles.topbar}>
          <button type="button" onClick={() => exitDialog.current?.showModal()} className={styles.exit}><X size={16} /> Sair da jornada</button>
          <span className={styles.eyebrow}>SEU MAPA DE APRENDIZAGEM</span>
          <button className={styles.motion} aria-pressed={!moving} onClick={() => setMoving(value => !value)} type="button">
            {moving ? <Pause size={15} /> : <Play size={15} />}{moving ? "Pausar movimento" : "Ativar movimento"}
          </button>
        </div>
        {!started ? <div className={styles.welcomeStage}>
          <div className={styles.welcomeCharacter}><LearningCharacter guide={guide} moving={moving} decorative /></div>
          <div className={styles.welcomePaper}>
            <span className={styles.eyebrow}>Seu caderno de descobertas</span>
            <h1>Uma trilha para observar como você aprende.</h1>
            <p>Você vai atravessar oito paisagens e responder a 33 perguntas sobre sua rotina. Os personagens acompanham o caminho. Seu resultado nasce das suas respostas.</p>
            <ol><li>Escolha a frequência que representa sua experiência.</li><li>Volte quando quiser rever uma resposta.</li><li>Ao terminar, receba uma leitura educativa e ideias para estudar.</li></ol>
            {draft && <p className={styles.resumeNote}>Há {Object.keys(draft.answers).length} respostas salvas nesta aba. Você pode continuar de onde parou.</p>}
            <button className={styles.next} type="button" onClick={() => begin(Boolean(draft))}>{draft ? "Retomar jornada" : "Começar jornada"}<ArrowRight size={18} /></button>
            {draft && <button className={styles.back} type="button" onClick={() => begin(false)}>Começar de novo</button>}
            <p className={styles.hint}>As respostas ficam disponíveis nesta aba por até 4 horas. Fechar a aba encerra esse rascunho.</p>
          </div>
        </div> : <>
        <div className={styles.progressRow}>
          <span>{answeredCount} de 33 respondidas</span>
          <button onClick={() => setMapOpen(value => !value)} aria-expanded={mapOpen} aria-controls="journey-map" type="button"><Map size={16} /> Ver percurso</button>
        </div>
        <div role="progressbar" aria-label="Perguntas respondidas" aria-valuenow={answeredCount} aria-valuemin={0} aria-valuemax={33} className={styles.progress}>
          <div style={{ width: `${progress}%` }} />
        </div>
        {mapOpen && <div id="journey-map" className={styles.map}>
          <p>Os personagens acompanham o percurso. Seu resultado aparece só depois das 33 respostas.</p>
          <LearningAtlas mode="journey" compact currentChapter={chapter} furthestChapter={Math.min(7, Math.floor(Math.max(current, ...Object.keys(answers).map(Number)) / 4))} onSelect={(_, index) => { navigate(index * 4); setMapOpen(false); }} />
        </div>}
        <div className={styles.stage}>
          <aside key={guide.id} className={styles.guide} style={{ animation: moving ? undefined : "none" }}>
            <div className={styles.chapter}>PARADA {chapter + 1} DE 8</div>
            <p className={styles.realm}>{guide.realm}</p>
            <div className={`${styles.portrait} ${moving ? styles.floating : ""}`}>
              <LearningCharacter key={guide.id} guide={guide} moving={moving} />
              <span className={styles.doodle}>✦</span>
            </div>
            <h2>{guide.name}</h2>
            <p className={styles.quote}>“{guide.quote}”</p>
            <p className={styles.guideNote}>Um guia para este trecho, não uma previsão do seu resultado.</p>
          </aside>
          <div className={styles.card}>
            <div className={styles.cardMeta}><span>QUESTÃO {current + 1} / 33</span><span>NO SEU RITMO</span></div>
            <div key={current} className={moving ? styles.questionEnter : ""}>
              <h1 ref={questionHeading} tabIndex={-1} className={styles.question}>{questions[current]}</h1>
              <p className={styles.hint}>Com que frequência isso acontece com você?</p>
              <fieldset className={styles.answers} disabled={isSubmitting}>
                <legend className={styles.srOnly}>Escolha a frequência que representa sua rotina</legend>
                {scale.map(option => <label key={option.value} className={`${styles.option} ${answers[current] === option.value ? styles.selected : ""}`}>
                  <input type="radio" name={`question-${current}`} value={option.value} checked={answers[current] === option.value} onChange={() => choose(option.value)} />
                  <span className={styles.optionNumber} aria-hidden="true">{answers[current] === option.value ? <Check size={17} /> : option.value}</span>
                  <span>{option.label}</span>
                  <span className={styles.frequency} aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <i key={index} className={index <= option.value ? styles.dotFilled : ""} />)}</span>
                </label>)}
              </fieldset>
            </div>
            <div className={styles.navigation}>
              <button type="button" onClick={() => navigate(Math.max(0, current - 1))} disabled={current === 0 || isPending || isSubmitting} className={styles.back}><ArrowLeft size={17} /> Voltar</button>
              <button type="button" onClick={next} disabled={answers[current] === undefined || isPending || isSubmitting} className={styles.next}>
                {isSubmitting ? <><Loader2 size={17} className="animate-spin" /> Enviando</> : <>{current === questions.length - 1 ? "Ver meu resultado" : "Continuar"}<ArrowRight size={17} /></>}
              </button>
            </div>
            <p className={styles.reassurance}>Não há resposta certa ou errada. Vale a sua experiência.</p>
            {storageNote && <p role="status" className={styles.hint}>{storageNote}</p>}
            {submitError && <p role="alert" className={styles.error}>{submitError}</p>}
          </div>
        </div>
        </>}
        <dialog ref={exitDialog} className={styles.exitDialog}><h2>Fazer uma pausa?</h2><p>Se você mantiver esta aba aberta, suas respostas ficam salvas por até 4 horas. Volte ao questionário para retomar.</p><div><button type="button" className={styles.next} onClick={() => exitDialog.current?.close()}>Continuar aqui</button><Link href="/diagnostico" className={styles.back}>Sair agora</Link></div></dialog>
        <p className={styles.bottomNote}>Uma jornada educativa pelos seus hábitos. Você pode voltar e ajustar suas respostas.</p>
      </div>
    </section>
  );
}
