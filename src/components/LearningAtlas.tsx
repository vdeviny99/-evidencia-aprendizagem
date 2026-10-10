"use client";

import Image from "next/image";
import { learningGuides, type LearningGuide } from "@/lib/learningJourney";
import styles from "./LearningAtlas.module.css";

const locations = [[17,18],[49,20],[74,22],[78,49],[84,81],[49,85],[11,81],[20,51]] as const;
// Trade-offs: a single decorative atlas is paired with native HTML controls.
// Its scenery is descriptive; navigation and progress never depend on the image.
export function LearningAtlas({ selectedId, onSelect, currentChapter, furthestChapter = 7, mode = "explore", compact = false }: {
  selectedId?: string | null;
  onSelect?: (guide: LearningGuide, index: number) => void;
  currentChapter?: number;
  furthestChapter?: number;
  mode?: "explore" | "journey" | "decoration";
  compact?: boolean;
}) {
  return (
    <div className={`${styles.atlas} ${compact ? styles.compact : ""}`} data-atlas-mode={mode}>
      <Image src="/learning/atlas-v2.png" alt="" fill sizes="(max-width: 760px) 100vw, 800px" className={styles.art} priority={mode === "decoration"} />
      <div className={styles.vignette} aria-hidden="true" />
      {mode !== "decoration" && <ol aria-label={mode === "explore" ? "Os oito mundos de aprendizagem" : "Percurso da sua jornada"} className={styles.places}>
        {learningGuides.map((guide, index) => {
          const selected = mode === "journey" ? currentChapter === index : selectedId === guide.id;
          const available = mode !== "journey" || index <= furthestChapter;
          return <li key={guide.id} style={{left: `${locations[index][0]}%`, top: `${locations[index][1]}%`}}>
            <button type="button" data-character={guide.id} aria-label={guide.name} aria-pressed={mode === "explore" ? selected : undefined} aria-current={mode === "journey" && selected ? "step" : undefined} disabled={!available || !onSelect} onClick={() => onSelect?.(guide, index)} className={`${styles.place} ${selected ? styles.selected : ""}`}>
              <span className={styles.marker}><Image src={`/para/personagens/${guide.id}.png`} width={56} height={56} alt="" />{mode === "journey" && index < (currentChapter ?? 0) && <i aria-hidden="true">✓</i>}</span>
              <span className={styles.label}>{guide.name}</span>
            </button>
          </li>;
        })}
      </ol>}
      <div className={styles.cartouche} aria-hidden="true"><span>✦</span> Atlas da aprendizagem</div>
    </div>
  );
}
