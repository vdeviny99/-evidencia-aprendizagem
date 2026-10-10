"use client";

import { useId } from "react";
import type { LearningGuide } from "@/lib/learningJourney";
import styles from "./LearningLandscape.module.css";

// Trade-offs: individually drawn vector worlds cost more markup than a shared
// landscape, but stay crisp and deterministic without assets, timers or canvas.
// The guide is the positional chapter supplied by the parent, never a result.
const palettes = {
  cuca: ["#30274e", "#89729e", "#c5a6b1"], saci: ["#bb713e", "#ecc28a", "#fae1b0"],
  curupira: ["#284f43", "#789a60", "#dfcf91"], boitata: ["#102f32", "#345044", "#b48a4c"],
  caipora: ["#326256", "#94b78d", "#e6e6ba"], iara: ["#153f58", "#378b91", "#a8c5b7"],
  boto: ["#bc6c8b", "#f0b2a0", "#ffe1b8"], uirapuru: ["#35567c", "#8db8c8", "#d6e6dc"],
} as const;

function Leaf({ x, y, scale = 1, fill = "#5e9877", rotate = 0 }: { x: number; y: number; scale?: number; fill?: string; rotate?: number }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}><path d="M0 0C-65-30-80-98-26-144C25-115 47-46 0 0Z" fill={fill} /><path d="M0 0Q-21-65-26-129M-12-49l-31-23M-19-80l22-26" fill="none" stroke="#193f42" strokeOpacity=".4" strokeWidth="2" /></g>;
}
function Flower({ x, y, fill = "#e3b1cb", scale = 1 }: { x: number; y: number; fill?: string; scale?: number }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}><path d="M0 10Q-15 60 8 100" stroke="#527365" strokeWidth="4" fill="none" /><g fill={fill} stroke="#805c79" strokeWidth="1.5">{[0, 72, 144, 216, 288].map(r => <ellipse key={r} cy="-16" rx="12" ry="22" transform={`rotate(${r})`} />)}</g><circle r="8" fill="#f9d588" /></g>;
}
function Fern({ x, y, scale = 1, fill = "#438578", rotate = 0 }: { x: number; y: number; scale?: number; fill?: string; rotate?: number }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} fill={fill}><path d="M0 0Q-40-110 8-240" fill="none" stroke={fill} strokeWidth="5" />{[0, 1, 2, 3, 4, 5].map(i => <g key={i} transform={`translate(${-15 + i * 3} ${-35 - i * 32}) scale(${1 - i * .11})`}><path d="M0 0Q-80-8-87-50Q-25-50 0 0ZM0 0Q62-5 76-47Q20-45 0 0Z" /><path d="M-69-40L0 0L60-35" fill="none" stroke="#b5cf94" strokeWidth="1.5" /></g>)}</g>;
}
function Ripples({ color = "#b7e5de" }: { color?: string }) {
  return <g className={styles.ripples} fill="none" stroke={color} strokeWidth="2" opacity=".55"><path d="M70 665q95-16 210 0m-170 18q65-9 135 0M1120 690q90-14 230 0m-180 22h105M70 887q130-18 245 0M1040 932q120-20 280 0M430 970q110-10 200 0" /></g>;
}

function Cuca() {
  return <>
    <g opacity=".4" fill="#b9adc9"><path d="M0 350Q170 180 325 345Q520 290 680 390L1440 360V1000H0Z" /><path d="M920 350Q1140 240 1440 335V700H920Z" /></g>
    <g stroke="#574261" strokeWidth="3" strokeLinejoin="round"><path d="M1040 365l24-146 137-7 67 172Z" fill="#b7a5b1" /><path d="M1015 227l122-119 145 119Z" fill="#51485f" /><path d="M1045 214l92-89 116 87M1107 147l24 62M1157 151l36 62" fill="none" /><path d="M1094 362v-80q24-42 51 0v80" fill="#735a80" /><rect x="1170" y="259" width="47" height="51" rx="18" fill="#f9d793" /><path d="M1194 261v47m-22-23h43" /><path d="M1220 161v-57h25v74" fill="#8d768b" /></g>
    <path d="M0 643Q195 525 360 640Q220 775 370 1000H0ZM1440 525Q1260 620 1180 1000H1440Z" fill="#675776" />
    <g className={styles.sway}><Leaf x={130} y={960} scale={2.5} fill="#557b76" rotate={-22} /><Leaf x={195} y={1000} scale={2} fill="#8eaaa0" rotate={32} /><Leaf x={1310} y={960} scale={2.8} fill="#6a8380" rotate={18} /><Leaf x={1250} y={1050} scale={2.5} fill="#b2a2b6" rotate={-36} /><Flower x={265} y={825} scale={1.5} /><Flower x={1185} y={912} fill="#d3b6dd" /></g>
    <g stroke="#544060" strokeWidth="3"><path d="M60 793l192 25-10 32-196-27Z" fill="#ce9e86" /><path d="M70 824l167 23-4 28-173-21Z" fill="#a9b895" /><path d="M80 867l159 11-7 31-156-12Z" fill="#c2a1cd" /><path d="M119 768q-38-57-9-74v-33h30v33q33 28 7 74Z" fill="#abcebd" /><path d="M106 739h44" stroke="#e6efd5" /><path d="M1255 730q-21-44 9-57v-28h22v28q34 29 10 57Z" fill="#bd92cc" /></g>
    <g className={styles.glow} fill="#ffe7ac">{[[210,320],[320,460],[1100,440],[1230,540],[285,735],[1180,785],[130,610]].map(([x,y]) => <g key={x}><circle cx={x} cy={y} r="13" opacity=".12" /><circle cx={x} cy={y} r="3" /></g>)}</g>
    <path className={styles.drift} d="M74 174q-28-30 8-49q34 27-8 49m5-6q44-38 65 1q-34 25-65-1" fill="#d6b4d4" stroke="#8a739a" strokeWidth="2" />
  </>;
}
function Saci() {
  return <>
    <g className={styles.clouds} fill="#fff0ce" stroke="#d5a970" strokeWidth="3"><path d="M-90 290C-35 207 62 260 104 183C151 99 266 94 303 180C362 123 459 163 450 224C544 211 584 270 533 301Z" /><path d="M940 155C905 81 1000 59 1046 92C1083-10 1221 16 1237 99C1330 45 1462 96 1480 188L969 202Z" /><path d="M10 271q114-39 203-25m-37-57q45-29 94-3M1070 141q80-24 139-6" fill="none" /></g>
    <path d="M0 579L187 388L346 553L528 465L710 610L970 464L1180 364L1440 578V1000H0Z" fill="#c18b53" /><path d="M0 729Q180 532 355 640L290 1000H0ZM1440 650Q1190 539 1070 690L1210 1000H1440Z" fill="#a56643" />
    <g stroke="#754831" strokeWidth="4" strokeLinejoin="round"><path d="M1135 603l30-236h57l44 236Z" fill="#ead1a1" /><path d="M1144 369l46-61 49 61Z" fill="#a5503a" /><path d="M1186 446v141h20V446Z" fill="#915d43" /><g className={styles.windmill}><path d="M1191 379l-84-116-27 20 101 105M1191 379l118-83 20 28-128 64M1191 379l82 120-28 18-63-129M1191 379l-117 83-18-29 126-65" fill="#f6e5c2" /><circle cx="1191" cy="379" r="13" fill="#a3593d" /></g></g>
    <g className={styles.wind} fill="none" stroke="#b44e3b" strokeWidth="5" strokeLinecap="round"><path d="M-40 401C74 320 280 364 257 434C242 476 166 447 200 417M1110 640C1280 540 1410 597 1500 544M30 810q160-89 246-26m-235 53q83-35 160-16" /><path d="M85 430q74-25 133-6M1270 475q70-24 150-9" strokeWidth="2" /></g>
    <g className={styles.sway} fill="#e2bb70" stroke="#855a38" strokeWidth="2"><path d="M83 1030Q65 836 112 705M135 1030Q120 839 193 776M1308 1050Q1290 878 1350 725" fill="none" />{[0,1,2,3].map(i => <g key={i} transform={`translate(0 ${i*42})`}><path d="M93 780q-55-18-48-48q47 0 48 48m0 0q50-9 57-41q-48-8-57 41M1340 800q-48-27-44-54q45 10 44 54m0 0q49-3 66-34q-48-15-66 34" /></g>)}</g>
  </>;
}
function Curupira() {
  return <>
    <g fill="#537956" opacity=".5"><path d="M60 0h95l-32 485H70ZM310 0h70l12 412h-90ZM1050 0h60l35 510h-86ZM1320 0h105l-20 530h-85Z" /><path d="M0 365Q260 253 462 408T930 388T1440 305V1000H0Z" /></g>
    <path d="M565 465C350 629 404 663 578 715C745 773 547 895 442 1000H1000C879 830 801 785 711 701C613 609 650 537 685 465Z" fill="#c5b07a" opacity=".7" />
    <g fill="#705e43" stroke="#344d39" strokeWidth="5"><path d="M-20-30H175C136 134 246 216 169 345C81 491 214 601 182 749L279 1000H-30L97 742C136 584-17 484 64 327C122 210-24 97-20-30Z" /><path d="M1296-30H1465V1000H1189L1285 739C1334 633 1202 487 1306 376C1381 274 1218 143 1296-30Z" /><path d="M95 39q-30 128 46 226q38 57-21 157q-69 114 11 271M1344 35q-60 126 12 236q58 96-24 198q-47 99 8 235" fill="none" stroke="#a08a5d" strokeWidth="3" /></g>
    <g className={styles.sway}><Leaf x={245} y={220} scale={2.2} rotate={100} fill="#3e7550" /><Leaf x={1240} y={180} scale={2.5} rotate={-85} fill="#426e47" /><Fern x={195} y={1040} scale={1.8} fill="#315c46" /><Fern x={1260} y={1050} scale={2} rotate={-15} fill="#426e47" /><Leaf x={310} y={1025} scale={1.5} fill="#91a966" /></g>
    <g fill="#79694c" opacity=".65" transform="rotate(-22 320 750)">{[0,1,2,3].map(i => <g key={i} transform={`translate(${i%2*48} ${i*-56})`}><ellipse cx="318" cy="790" rx="11" ry="19" /><circle cx="306" cy="767" r="4" /><circle cx="319" cy="764" r="4" /><circle cx="330" cy="769" r="3" /></g>)}</g>
    <g className={styles.drift} fill="#ecd991"><path d="M260 385q-39-48-51-3q14 34 51 3q41-48 53-3q-15 34-53 3" /><path d="M1120 570q-25-33-35-4q10 26 35 4q25-33 35-4q-10 26-35 4" /></g>
  </>;
}
function Boitata() {
  return <>
    <g fill="#26473e"><path d="M0 0H1440V180Q1280 271 1140 156Q930 237 781 103Q593 199 428 118Q213 259 0 172Z" /><path d="M0 0h100l23 679H0ZM220 0h47l33 532h-73ZM1170 0h65l-10 540h-70ZM1330 0h110v733h-150Z" /></g>
    <path d="M0 696Q246 474 449 671Q293 833 340 1000H0ZM1440 656Q1200 539 1070 749L1150 1000H1440Z" fill="#203d35" />
    <g className={styles.fire} fill="none" strokeLinecap="round"><path d="M1134 443C1361 540 1110 651 1192 758C1330 921 837 899 816 1040" stroke="#e8a344" strokeWidth="81" opacity=".12" /><path d="M1134 443C1361 540 1110 651 1192 758C1330 921 837 899 816 1040" stroke="#c98332" strokeWidth="37" /><path d="M1134 443C1361 540 1110 651 1192 758C1330 921 837 899 816 1040" stroke="#ffe3a2" strokeWidth="8" /><path d="M1190 742q-53-58-13-100q-2 54 34 57q40 33 6 69M1288 863q-35-42-7-73q-2 30 23 41q22 23-6 43" fill="#ffc86e" stroke="#f8d999" strokeWidth="2" /></g>
    <g className={styles.glow} fill="#ffd28a">{[[160,370],[245,590],[1208,324],[1090,680],[1310,730],[298,843],[1184,855]].map(([x,y]) => <g key={x}><circle cx={x} cy={y} r="20" opacity=".08" /><path d={`M${x} ${y-7}q-9 10 0 15q9-5 0-15`} /></g>)}</g>
    <g fill="#152f2e" stroke="#54715a" strokeWidth="2"><path d="M10 1000q24-234 118-187q17 68-49 155q94-137 153-66l-36 98ZM1280 1000q-38-127 23-151q38 29 29 105q49-193 108-158v204Z" /></g>
    <path d="M160 178q38 24 77 0m-51 45q29 10 51-5" fill="none" stroke="#aab78e" strokeWidth="2" opacity=".4" />
  </>;
}
function Caipora() {
  return <>
    <g fill="#659384" opacity=".55"><path d="M95 0h85l-32 771H85ZM370 0h50l-14 615h-61ZM1000 0h55l32 642h-82ZM1250 0h90l36 775h-110Z" /></g>
    <path d="M670 0L303 775H484L850 0ZM905 0L756 570H818L1012 0Z" fill="#e5ecc4" opacity=".13" />
    <g fill="#2b6256" stroke="#305749" strokeWidth="3"><path d="M-20 0H1460V113Q1343 71 1273 184Q1165 239 1080 131Q919 209 813 92Q695 193 580 94Q428 196 338 96Q181 240 0 148Z" /><path d="M0 0h81q-3 417 41 776L20 1000H0ZM1400 0h40v1000h-135q67-297 56-478Z" /></g>
    <g className={styles.sway} fill="none" stroke="#44765b" strokeWidth="4"><path d="M240 0q-95 233 27 328q47 40 4 109M1190 0q94 146 17 274q-50 90 10 155" /><Leaf x={256} y={249} scale={.9} rotate={70} fill="#82aa76" /><Leaf x={1214} y={324} scale={1.1} rotate={-65} fill="#779e6c" /></g>
    <path d="M0 798Q180 672 377 827L353 1000H0ZM1440 794Q1241 659 1092 817L1140 1000H1440Z" fill="#497758" />
    <g stroke="#695b42" strokeWidth="3"><path d="M172 901l9-112h28l17 112Z" fill="#dfd7af" /><path d="M106 796q82-135 173 0q-71 26-173 0Z" fill="#bd735b" /><path d="M1170 898l18-100h25l16 100Z" fill="#ddd1ad" /><path d="M1134 810q65-112 144 0q-57 22-144 0Z" fill="#d0a75d" /><g fill="#f7dfaf" stroke="none"><ellipse cx="169" cy="767" rx="13" ry="8" /><circle cx="218" cy="775" r="8" /><ellipse cx="1210" cy="780" rx="12" ry="7" /></g></g>
    <g className={styles.sway}><Fern x={75} y={1030} scale={2} fill="#24594b" rotate={-20} /><Fern x={325} y={1075} scale={1.3} fill="#72a16e" rotate={25} /><Fern x={1360} y={1060} scale={2.2} fill="#2f6654" /><Leaf x={1175} y={1050} scale={1.4} rotate={-35} fill="#89ac79" /></g>
  </>;
}
function Iara() {
  return <>
    <circle cx="1090" cy="202" r="62" fill="#e2e5ca" /><circle cx="1112" cy="186" r="59" fill="#367586" />
    <path d="M0 475Q201 354 413 463Q678 407 861 462Q1196 344 1440 424V1000H0Z" fill="#225e68" /><path d="M0 561Q390 495 770 560T1440 510V1000H0Z" fill="#397f86" />
    <g fill="none" stroke="#b7d9c8" opacity=".25" strokeWidth="3"><path d="M1032 516h97m-117 22h127m-154 23h173m-194 24h204m-232 28h246" /></g><Ripples />
    <g fill="#478777" stroke="#254f5a" strokeWidth="2"><path d="M75 740q84-43 171 0q-64 41-171 0l74-15Z" /><path d="M1129 828q98-44 165 0q-59 38-165 0l82-12Z" /><path d="M240 919q58-35 115 0q-35 26-115 0l54-13Z" /></g>
    <g className={styles.sway} fill="none" stroke="#274e56" strokeWidth="6"><path d="M12 1020Q17 706 65 510M69 1030Q127 794 116 593M1367 1010Q1332 701 1392 531M1298 1040Q1260 802 1302 649" /><path d="M43 804Q-17 664-27 672M89 854q100-125 94-205M1358 843q-82-120-82-179" /><path d="M65 524l10-83M116 606l-3-77M1392 543l15-91M1302 659l12-79" stroke="#907b7b" strokeWidth="15" /></g>
    <g className={styles.float}><Flower x={194} y={702} fill="#d6b3d2" scale={.7} /><Flower x={1190} y={792} fill="#e2c3da" scale={.8} /></g>
    <path d="M0 963q98-95 186 37H0ZM1440 940q-125-57-175 60h175Z" fill="#1b4c59" />
    <g className={styles.glow} fill="#cee9d8"><circle cx="287" cy="333" r="2" /><circle cx="1200" cy="310" r="3" /><circle cx="173" cy="460" r="2" /></g>
  </>;
}
function Boto() {
  return <>
    <circle cx="348" cy="309" r="111" fill="#ffe2ae" opacity=".65" /><g className={styles.clouds} fill="none" stroke="#f8d2bc" strokeWidth="20" strokeLinecap="round"><path d="M75 203q105-23 210 0M1040 239q150-35 314 0" /></g>
    <path d="M0 505Q176 425 396 500T821 485T1440 485V1000H0Z" fill="#b38da0" /><path d="M0 580Q340 523 650 569T1440 551V1000H0Z" fill="#d7a6ae" />
    <g fill="#788f83" stroke="#657f78" strokeWidth="3"><path d="M-20 680Q101 529 301 646Q349 679 297 704Z" /><path d="M1120 588Q1227 447 1408 586Z" /><path d="M1195 890Q1290 754 1459 867L1460 922Z" /></g><Ripples color="#ffe1d2" />
    <g className={styles.float} fill="#e6a0ba" stroke="#995e87" strokeWidth="3" strokeLinejoin="round"><path d="M146 785C171 722 255 713 310 768L354 765L327 784Q269 761 232 789L218 819L200 791L155 810L162 790Z" /><path d="M1110 693q61-67 135-8l49 3-37 14q-61-26-105 8l-17 27-12-25-40 9Z" /><path d="M204 756q18-14 37-10m931-58q17-8 34-4" fill="none" stroke="#fce0db" strokeWidth="2" /><circle cx="305" cy="770" r="2.5" fill="#654464" /></g>
    <g className={styles.sway}><Leaf x={62} y={1030} scale={2} fill="#6e9b89" rotate={-20} /><Leaf x={1380} y={1030} scale={2.5} fill="#678d84" rotate={20} /><Flower x={140} y={902} fill="#f7c1a3" scale={1.3} /><Flower x={275} y={965} fill="#f1a5bb" /><Flower x={1237} y={968} fill="#fbd0a3" scale={1.5} /></g>
    <g fill="none" stroke="#ffe1cf" strokeWidth="2"><path d="M122 817q90 24 178 0M1100 729q80 18 170 0M250 465q88-13 186 0m-173 18h148" /></g>
  </>;
}
function Uirapuru() {
  return <>
    <g fill="#7199ad" opacity=".45"><path d="M90 0h47l37 758H98ZM284 0h58l-13 585h-45ZM1080 0h56l-13 611h-60ZM1310 0h79l-15 766h-81Z" /></g>
    <path d="M0 625Q215 514 435 655Q714 569 966 639Q1190 531 1440 628V1000H0Z" fill="#719aa1" opacity=".65" />
    <g fill="none" stroke="#425d70" strokeWidth="29" strokeLinecap="round"><path d="M-30 9Q53 289 340 260Q440 254 507 162M48 174Q168 97 257 25M1470 48Q1347 300 1104 295Q994 296 958 210M1290 241Q1256 121 1130 60" /></g>
    <g className={styles.sway}>{[[102,198,65],[229,235,110],[342,256,150],[1198,282,-100],[1325,192,-55],[1114,90,-75]].map(([x,y,r]) => <Leaf key={x} x={x} y={y} rotate={r} scale={1.1} fill="#66929b" />)}<Fern x={180} y={1060} scale={1.8} fill="#3f7180" /><Fern x={1290} y={1070} scale={1.9} fill="#547f91" rotate={-15} /></g>
    <g stroke="#395770" strokeWidth="2.5"><g transform="translate(300 220)"><path d="M-29 15q-16-54 20-64q34-10 39 24l26 8-22 12q-1 48-42 38l-49 32 12-46Z" fill="#b67961" /><path d="M-19-6q40-4 37 26q-28 10-37-26Z" fill="#e2b881" /><circle cx="17" cy="-23" r="3" fill="#213e54" /><path d="M-2 53l-4 16m16-17 1 17" /></g><g transform="translate(1155 253) scale(-.85 .85)"><path d="M-29 15q-16-54 20-64q34-10 39 24l26 8-22 12q-1 48-42 38l-49 32 12-46Z" fill="#80b5bd" /><path d="M-19-6q40-4 37 26q-28 10-37-26Z" fill="#c5d8b5" /><circle cx="17" cy="-23" r="3" fill="#213e54" /></g></g>
    <g className={styles.notes} fill="#d8e6cb" stroke="#5b8397" strokeWidth="2"><path d="M208 411v-61l40-10v56m-40-40 40-10" fill="none" /><ellipse cx="199" cy="414" rx="11" ry="7" /><ellipse cx="239" cy="399" rx="11" ry="7" /><path d="M1218 504v-68q34 8 27 32" fill="none" /><ellipse cx="1209" cy="507" rx="11" ry="7" /><path d="M290 553v-49" fill="none" /><ellipse cx="281" cy="557" rx="9" ry="6" /></g>
    <g className={styles.drift} fill="none" stroke="#507790" strokeWidth="3"><path d="M817 161q17-22 36 0q18-23 37 0M668 218q13-15 25 0q14-17 28 0" /></g>
  </>;
}
const scenes = { cuca: Cuca, saci: Saci, curupira: Curupira, boitata: Boitata, caipora: Caipora, iara: Iara, boto: Boto, uirapuru: Uirapuru };

export function LearningLandscape({ guide, moving = true }: { guide: LearningGuide; moving?: boolean }) {
  // React's hydration-stable identifier is escaped to an SVG-safe token, not randomized.
  const instance = useId().replace(/[^a-zA-Z0-9_-]/g, c => `_${c.charCodeAt(0).toString(16)}_`);
  const sky = `landscape-${instance}-sky`;
  const Scene = scenes[guide.id];
  const colors = palettes[guide.id];
  return <div aria-hidden="true" className={`${styles.landscape} ${moving ? styles.moving : styles.still}`} data-world={guide.id}>
    <svg viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" className={styles.art} focusable="false">
      <defs><linearGradient id={sky} x1="0" y1="0" x2="0.2" y2="1"><stop stopColor={colors[0]} /><stop offset=".58" stopColor={colors[1]} /><stop offset="1" stopColor={colors[2]} /></linearGradient></defs>
      <rect width="1440" height="1000" fill={`url(#${sky})`} />
      <Scene />
    </svg>
    <div className={styles.wash} />
  </div>;
}
