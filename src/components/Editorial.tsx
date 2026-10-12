import type { ReactNode } from "react";
import { LearningCharacter } from "./LearningCharacter";
import { learningGuides } from "@/lib/learningJourney";
import styles from "./Editorial.module.css";

/** Trade-offs: scoped paper styling and existing static SVG art keep the visual
 * system portable; the character retains its existing small client boundary. */
export function EditorialPage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.page} ${className}`}>{children}</div>;
}

export function EditorialAccent({ guide = "cuca", className = "" }: { guide?: "cuca" | "uirapuru" | "iara"; className?: string }) {
  const character = learningGuides.find((item) => item.id === guide) ?? learningGuides[0];
  return <div className={`${styles.accent} ${className}`} aria-hidden="true"><LearningCharacter guide={character} moving={false} decorative /></div>;
}
