"use client";

import { useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { LearningCharacter } from "@/components/LearningCharacter";
import type { LearningGuide } from "@/lib/learningJourney";
import styles from "./LearningReveal.module.css";

// Trade-offs: a short CSS entrance keeps all content immediately readable.
// Motion is local presentation state, with no timers, storage or scoring effects.
export function LearningReveal({ guide, quote, preview = false }: {
  guide: LearningGuide;
  quote: string;
  preview?: boolean;
}) {
  const [paused, setPaused] = useState(false);
  const palette = { "--reveal-color": guide.color, "--reveal-pale": guide.pale, "--reveal-ink": guide.ink } as CSSProperties;

  return (
    <section className={styles.reveal} style={palette} data-paused={paused} aria-label={`Leitura de aprendizagem: ${guide.name}`}>
      <div className={styles.art} aria-hidden="true">
        <span className={styles.sun} />
        <span className={styles.hill} />
        <span className={styles.trail} />
        <LearningCharacter guide={guide} moving={!paused} decorative className={styles.character} />
        <span className={styles.artCaption}>{guide.realm}</span>
      </div>
      <div className={styles.words}>
        <p className={styles.eyebrow}>{preview ? "Uma leitura de demonstração" : "Uma pausa para se conhecer"}</p>
        <h2 className={styles.name}>{guide.name}</h2>
        <blockquote className={styles.quote}>“{quote}”</blockquote>
        <p className={styles.explanation}>Este personagem representa um retrato dos seus hábitos de estudo neste momento. É uma leitura educativa, não um rótulo fixo sobre quem você é. Seus hábitos podem mudar com a prática, o contexto e novas experiências.</p>
        {preview && <p className={styles.preview}>Prévia sintética: personagem e leitura ilustram um exemplo, sem respostas reais.</p>}
        <button type="button" className={styles.motion} aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          {paused ? "Retomar movimento" : "Pausar movimento"}
        </button>
      </div>
    </section>
  );
}
