"use client";

import { useState, type CSSProperties } from "react";
import { LearningCharacter } from "@/components/LearningCharacter";
import { LearningAtlas } from "@/components/LearningAtlas";
import Link from "next/link";
import { ArrowRight, Leaf, Compass } from "lucide-react";
import { LearningLandscape } from "@/components/LearningLandscape";
import { learningGuides } from "@/lib/learningJourney";
import styles from "./LearningStyleExplorer.module.css";

// Trade-offs: selection stays local and starts empty to avoid implying a diagnostic
// result. Native toggle buttons use normal Tab order (eight stops) rather than a
// custom tab widget. Short editorial contexts mirror matrixConfig descriptions;
// they describe educational possibilities, never infer a visitor's score or type.
const contexts: Record<string, { asset: string; context: string; practice: string }> = {
  Cuca: { asset: "cuca", context: "Este estilo reúne planejamento, reflexão sobre o próprio estudo e estratégias ativas de aprendizagem.", practice: "Observe se seu plano deixa espaço para praticar, revisar e avaliar o que funcionou." },
  Saci: { asset: "saci", context: "Este estilo combina reflexão e estratégias ativas, com espaço para fortalecer planejamento e organização.", practice: "Antes de começar, escolha o assunto, o tempo disponível e como vai estudar." },
  Curupira: { asset: "curupira", context: "Este estilo reúne organização e prática, com espaço para observar como se aprende e quando pedir ajuda.", practice: "Faça uma pausa para explicar o conteúdo sem olhar e identificar o que ainda precisa de ajuda." },
  "Boitatá": { asset: "boitata", context: "Este estilo combina planejamento e reflexão, com espaço para transformar o conteúdo em prática ativa.", practice: "Reserve um momento para lembrar o conteúdo sem consultar e depois conferir o que lembrou." },
  Caipora: { asset: "caipora", context: "Este estilo parte da organização, com espaço para fortalecer a reflexão e as estratégias ativas.", practice: "Use seu planejamento para incluir uma pergunta sobre o que entendeu e uma revisão de memória." },
  Iara: { asset: "iara", context: "Este estilo parte da reflexão sobre o aprendizado, com espaço para fortalecer planejamento e prática ativa.", practice: "Escolha um objetivo para a sessão e uma atividade para testar o que aprendeu." },
  Boto: { asset: "boto", context: "Este estilo parte do aprender fazendo, com espaço para fortalecer planejamento e reflexão sobre o processo.", practice: "Antes de praticar, defina o que quer aprender. Depois, observe o que funcionou e o que ficou confuso." },
  Uirapuru: { asset: "uirapuru", context: "Este estilo representa um momento de construção da rotina, com espaço para desenvolver planejamento, reflexão e estratégias ativas.", practice: "Comece com uma sessão possível: escolha um assunto, tente explicar o que aprendeu e anote uma dúvida." },
};

export default function LearningStyleExplorer() {
  const [moving, setMoving] = useState(true);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const guide = learningGuides.find((item) => item.name === selectedName);
  const context = guide ? contexts[guide.name] : undefined;
  const palette = guide ? { "--guide-color": guide.color, "--guide-pale": guide.pale, "--guide-ink": guide.ink } as CSSProperties : undefined;

  return (
    <section id="explorar-estilos" className={styles.section} aria-labelledby="explorer-title" style={palette}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <span className={styles.eyebrow}><Leaf size={16} aria-hidden="true" /> Um passeio pelos estilos</span>
          <h2 id="explorer-title">Cada caminho tem algo a ensinar.</h2>
          <p>Entre a floresta e o rio, oito personagens ajudam a conversar sobre hábitos de estudo. Escolha um para conhecer suas ideias.</p>
        </header>
        <div className={styles.notice}>
          <Compass size={22} aria-hidden="true" />
          <p><strong>Exploração, não resultado.</strong> Nenhum estilo está predeterminado para você. Todos os estilos são educativos, não rótulos fixos. O diagnóstico considera suas respostas.</p>
        </div>
        <div className={styles.stage}>
          <div className={styles.selector}>
            <p className={styles.selectorTitle}>Quem vamos conhecer?</p>
            <LearningAtlas selectedId={guide?.id} onSelect={(item) => setSelectedName(item.name)} />
            <p className={styles.selectorHint}>Você pode visitar todos. Escolher um personagem não altera seu diagnóstico.</p>
          </div>
          <div id="style-story" className={styles.story}>
            <button type="button" className={styles.motionToggle} aria-pressed={!moving} onClick={() => setMoving(value => !value)}>{moving ? "Pausar movimento" : "Ativar movimento"}</button>
            {guide && context ? (
              <>
                <div className={styles.scene} aria-hidden="true">
                  <LearningLandscape guide={guide} moving={moving} />
                  <div className={styles.portrait}><LearningCharacter guide={guide} moving={moving} decorative /></div>
                  <span className={styles.realm}>{guide.realm}</span>
                </div>
                <div className={styles.storyCopy}>
                  <p className={styles.eyebrow}>Estilo educativo</p>
                  <h3>{guide.name}</h3>
                  <blockquote>“{guide.quote}”</blockquote>
                  <p>{context.context}</p>
                  <div className={styles.practice}><span>Uma ideia para experimentar</span><p>{context.practice}</p></div>
                </div>
              </>
            ) : (
              <div className={styles.welcome}>
                <div className={styles.chalkOrbit} aria-hidden="true"><Leaf size={56} strokeWidth={1.2} /><span>✦</span></div>
                <p className={styles.eyebrow}>A curiosidade abre o caminho</p>
                <h3>Seu passeio começa com uma escolha.</h3>
                <p>Toque em um personagem para descobrir uma frase, um contexto de aprendizagem e uma ideia prática.</p>
                <span className={styles.welcomeNote}>Aqui não há pontuações nem um perfil atribuído a você.</span>
              </div>
            )}
            <span className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">{guide ? `${guide.name} selecionado para exploração. ${guide.quote}` : "Nenhum personagem selecionado."}</span>
          </div>
        </div>
        <footer className={styles.footer}>
          <div><span className={styles.eyebrow}>Do passeio à sua rotina</span><h3>Quer observar seus próprios hábitos?</h3><p>Responda ao diagnóstico para receber uma leitura educativa baseada nas suas respostas.</p></div>
          <Link href="/diagnostico/captura" className={styles.cta}>Fazer diagnóstico gratuito <ArrowRight size={18} aria-hidden="true" /></Link>
        </footer>
      </div>
    </section>
  );
}
