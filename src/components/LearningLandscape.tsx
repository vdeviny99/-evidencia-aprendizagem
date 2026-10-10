import type { CSSProperties } from "react";
import type { LearningGuide } from "@/lib/learningJourney";
import styles from "./LearningLandscape.module.css";

// Trade-offs: lightweight original SVG scenery uses CSS motion instead of a canvas
// engine. Decorative movement is restrained and requires no animation dependency.
export function LearningLandscape({ guide, moving = true }: { guide: LearningGuide; moving?: boolean }) {
  const water = guide.id === "iara" || guide.id === "boto";
  return (
    <div aria-hidden="true" className={`${styles.landscape} ${moving ? styles.moving : ""}`} data-world={guide.id} style={{ "--world-color": guide.color, "--world-pale": guide.pale } as CSSProperties}>
      <svg viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" className={styles.art}>
        <rect width="1440" height="1000" fill={guide.pale} />
        <circle className={styles.sun} cx="1170" cy="190" r="85" fill="#f6c66e" />
        <circle cx="1170" cy="190" r="112" fill="none" stroke="#f6c66e" strokeWidth="2" strokeDasharray="3 18" />
        <g className={styles.clouds} fill="#fffaf0" opacity=".8">
          <path d="M80 180C30 130 90 90 130 115C140 45 240 60 243 120C300 90 355 147 319 178Z" />
          <path d="M930 95C895 62 937 30 978 51C996 7 1058 17 1070 64C1118 44 1157 83 1130 103Z" />
        </g>
        <path d="M-80 650Q180 310 420 550T900 570T1520 490V1100H-80Z" fill={guide.color} opacity=".12" />
        <path d="M-60 800Q190 455 450 720T1010 650T1530 740V1100H-60Z" fill={guide.color} opacity=".16" />
        <g className={styles.river}>
          <path d="M850 580C420 760 1080 750 690 1060" stroke={water ? "#66bfc0" : "#edd4a0"} strokeWidth="145" fill="none" />
          <path d="M850 580C420 760 1080 750 690 1060" stroke={water ? "#caefeb" : "#fff0c9"} strokeWidth="3" strokeDasharray="20 26" fill="none" />
        </g>
        <g className={styles.plants} stroke="#355b49" strokeWidth="4" strokeLinecap="round" fill="none">
          <path d="M105 1020Q70 780 160 570M80 875Q-10 800 3 741M97 799Q200 753 215 676M111 735Q45 680 61 620M134 657Q218 621 231 559" />
          <path d="M1338 1020Q1401 760 1280 540M1370 874Q1450 830 1457 757M1373 787Q1280 752 1258 670M1336 697Q1420 637 1410 570" />
        </g>
        <g className={styles.leaves} fill="#739e70">
          <path d="M96 799Q182 650 215 676Q221 747 96 799Z" /><path d="M110 735Q22 683 61 620Q106 639 110 735Z" />
          <path d="M134 657Q181 521 231 559Q229 618 134 657Z" /><path d="M1374 787Q1230 760 1258 670Q1320 674 1374 787Z" />
          <path d="M1336 697Q1340 550 1410 570Q1428 626 1336 697Z" />
        </g>
        <g fill="#d99a88"><path d="M-40 1050Q-5 760 65 815Q85 900 30 1050Z" /><path d="M1400 1030Q1295 820 1349 801Q1405 828 1450 1030Z" /></g>
        <g className={styles.sparks} fill={guide.color}>
          <path d="M295 240l5 15 15 5-15 5-5 15-5-15-15-5 15-5Z" />
          <path d="M1060 370l5 15 15 5-15 5-5 15-5-15-15-5 15-5Z" />
          <circle cx="210" cy="420" r="5" /><circle cx="1240" cy="470" r="4" /><circle cx="360" cy="850" r="5" /><circle cx="1120" cy="760" r="6" />
        </g>
        <g className={styles.sparks} fill="none" stroke={guide.color} strokeWidth="3" strokeLinecap="round" opacity=".55">
          {guide.id === "cuca" && <><path d="M180 320l45-75 58 86-103-11 60 67 43-56" /><circle cx="180" cy="320" r="7" /><circle cx="225" cy="245" r="7" /><circle cx="283" cy="331" r="7" /></>}
          {guide.id === "curupira" && <><path d="M240 620q-18-35-30-12q-8 25 15 33q16 0 15-21M280 565q18-35 30-12q8 25-15 33q-16 0-15-21M280 460q-18-35-30-12q-8 25 15 33q16 0 15-21" /><path d="M215 622q-20-35-24-36M305 567q20-35 24-36" strokeDasharray="1 8" /></>}
          {guide.id === "caipora" && <><path d="M1100 840q60-95 120 0Z M1155 840v48h20v-48" /><path d="M1240 930q32-50 64 0Z M1264 930v28h16v-28" /><circle cx="1165" cy="815" r="5" /></>}
          {guide.id === "iara" && <path d="M85 550q30-25 60 0t60 0t60 0M85 575q30-25 60 0t60 0t60 0M1150 680q30-25 60 0t60 0t60 0" />}
          {guide.id === "boto" && <><ellipse cx="250" cy="690" rx="50" ry="12" /><path d="M233 686q15-50 30 0q35-25 20 0M1140 800q50-70 100-10q-35-10-55 20Z" /></>}
          {guide.id === "uirapuru" && <><path d="M230 370v-62l35-10v57" /><ellipse cx="220" cy="375" rx="11" ry="7" /><ellipse cx="255" cy="360" rx="11" ry="7" /><path d="M1180 470q25-40 60 0q-28-3-42 21l-20-20-20 8" /></>}
        </g>
        <g className={styles.birds} fill="none" stroke={guide.color} strokeWidth="3" strokeLinecap="round">
          <path d="M1020 270q15-17 30 0q15-17 30 0M350 160q12-14 24 0q12-14 24 0" />
          {guide.id === "saci" && <path d="M80 330q160-70 150 0q-20 40-45 0M1110 470q120-55 160-15" />}
          {guide.id === "boitata" && <path d="M1210 805q-75-45-40-100q-5 40 30 35q40 15 10 65Z" />}
        </g>
      </svg>
      <div className={styles.wash} />
    </div>
  );
}
