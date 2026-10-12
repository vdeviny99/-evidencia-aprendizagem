"use client";

import { useId, type ReactNode } from "react";
import type { LearningGuide } from "@/lib/learningJourney";
import styles from "./LearningCharacter.module.css";

export interface LearningCharacterProps {
  guide: LearningGuide;
  moving?: boolean;
  className?: string;
  decorative?: boolean;
}

const ink = "#343c39";
const palette = { leaf: "#60977b", lime: "#a8ca83", skin: "#a96342", lightSkin: "#c8875c", coral: "#e97865", purple: "#78629e", teal: "#409d9a", cream: "#fff0cf", gold: "#efbb59" };

function Eye({ x, y, size = 10 }: { x: number; y: number; size?: number }) {
  return <g transform={`translate(${x} ${y})`}><g className={styles.eye}><ellipse rx={size} ry={size * 1.3} fill={palette.cream} strokeWidth="2.5"/><ellipse cx="2" cy="2" rx={size * .48} ry={size * .7} fill={ink} stroke="none"/><circle cx="4" cy="-2" r="2.5" fill="white" stroke="none"/></g><path d={`M${-size - 2} -${size + 3} q${size} -7 ${size * 2 + 4} 0`} fill="none" strokeWidth="2.5"/></g>;
}
function Cheek({ x, y }: { x: number; y: number }) { return <ellipse cx={x} cy={y} rx="11" ry="6" fill={palette.coral} opacity=".55" stroke="none"/>; }
function Leaf({ x, y, angle = 0, color = palette.leaf }: { x: number; y: number; angle?: number; color?: string }) {
  return <g transform={`translate(${x} ${y}) rotate(${angle})`}><path d="M0 0 Q-27 -17 0 -49 Q27 -17 0 0Z" fill={color} strokeWidth="3"/><path d="M0 -6 V-35 M0 -17 l-10 -9 M0 -24 l9 -8" fill="none" strokeWidth="2" opacity=".6"/></g>;
}
function Spark({ x, y, size = 12 }: { x: number; y: number; size?: number }) { return <path className={styles.spark} d={`M${x} ${y-size} Q${x+2} ${y-2} ${x+size} ${y} Q${x+2} ${y+2} ${x} ${y+size} Q${x-2} ${y+2} ${x-size} ${y} Q${x-2} ${y-2} ${x} ${y-size}Z`} fill={palette.gold} strokeWidth="2"/>; }
function Smile({ x, y }: { x: number; y: number }) { return <path d={`M${x-9} ${y} q9 10 18 -1`} fill="none" strokeWidth="3"/>; }

function Cuca() {
  return <>
    <path d="M235 283 Q318 277 294 214 Q335 257 304 302 Q279 322 232 315" fill={palette.leaf}/>
    <path d="M116 324 l-16 37 q21 12 52 0 l9 -38 M211 323 l3 38 q29 12 49 -1 l-21 -39" fill={palette.leaf}/>
    <path d="M137 170 Q110 208 100 326 Q174 355 254 323 Q247 233 215 177Z" fill={palette.purple}/>
    <path d="M139 191 Q177 212 216 187 L226 284 Q181 312 124 285Z" fill="#9780b6" stroke="none"/>
    <path d="M145 173 l30 29 35 -29" fill={palette.cream}/>
    <path d="M128 105 Q116 58 162 59 Q212 52 226 106 L259 120 Q274 136 251 153 L217 156 Q202 190 163 183 Q134 180 130 149 Q85 151 80 131 Q78 112 128 105Z" fill={palette.lime}/>
    <path d="M87 133 Q148 148 187 137" fill="none" strokeWidth="3"/><path d="M110 140 l6 9 8 -7" fill={palette.cream} strokeWidth="2"/>
    <Eye x={155} y={107}/><Eye x={193} y={103}/><Cheek x={134} y={128}/><circle cx="93" cy="122" r="3" fill={ink}/>
    <g className={styles.sway}><path d="M118 80 Q135 38 164 20 Q173 54 224 68 L226 88Z" fill="#69558d"/><path d="M133 60 Q174 70 209 65 L220 78 Q172 86 126 73Z" fill={palette.coral}/><path d="M104 83 Q162 65 234 77 Q259 86 227 95 Q150 108 104 93 Q91 88 104 83Z" fill="#8c73ab"/><Spark x={167} y={47} size={8}/></g>
    <path d="M126 215 Q87 221 92 257 L143 269 M229 214 Q257 224 254 255 L226 263" fill={palette.lime}/>
    <path d="M134 236 Q164 230 185 246 Q207 230 236 237 L231 289 Q208 284 185 298 Q160 285 139 290Z" fill={palette.cream}/>
    <path d="M185 246 V298 M148 253 l24 5 M149 265 l23 5 M201 255 l23 -5 M201 268 l21 -5" fill="none" stroke="#aa8554" strokeWidth="2.5"/>
    <path d="M92 253 q12 -13 26 2 l8 13 q-19 13 -29 -1 M237 249 q20 -7 20 8 q-2 15 -22 11" fill={palette.lime}/>
    <Spark x={70} y={191}/><Spark x={286} y={151} size={9}/>
  </>;
}
function Saci() {
  return <>
    <g className={styles.wind} fill="none" stroke="#b0c6b3" strokeWidth="6"><path d="M76 318 Q23 293 98 276 M66 346 Q184 391 280 331 Q324 304 272 294 M104 358 Q218 377 252 349"/><path d="M63 254 Q32 234 61 215" strokeWidth="3"/></g>
    <path d="M159 260 Q143 293 168 322 L189 347 Q203 360 177 367 Q146 366 146 347 L128 318 Q116 281 129 257" fill={palette.skin}/>
    <path d="M126 183 Q101 215 115 268 Q149 287 195 264 L204 202Z" fill={palette.cream}/>
    <path d="M116 249 Q160 265 196 244 L195 277 Q151 295 115 275Z" fill={palette.coral}/>
    <path d="M124 194 Q92 198 80 175 L66 149 Q59 134 48 146 Q40 152 55 180 Q79 225 116 224 M194 198 Q235 228 250 194 L259 174 Q266 159 275 170 Q290 183 274 211 Q249 251 199 227" fill={palette.skin}/>
    <path d="M153 165 v29 q21 14 36 -2 v-29" fill={palette.skin}/>
    <ellipse cx="164" cy="128" rx="52" ry="54" fill={palette.skin}/><ellipse cx="113" cy="135" rx="12" ry="16" fill={palette.skin}/><ellipse cx="216" cy="133" rx="12" ry="16" fill={palette.skin}/>
    <path d="M118 106 Q108 57 164 58 Q216 58 215 107 Q195 79 178 95 Q151 80 118 106Z" fill="#49382f"/>
    <Eye x={144} y={124}/><Eye x={183} y={124}/><Cheek x={130} y={146}/><Cheek x={200} y={146}/><Smile x={165} y={151}/><path d="M165 132 l-5 10 h9" fill="none" strokeWidth="2.5"/>
    <g className={styles.sway}><path d="M114 83 Q120 39 175 35 Q207 29 232 57 Q194 45 194 83Z" fill="#d55345"/><path d="M116 78 Q163 65 201 79 L203 97 Q155 89 114 99Z" fill="#ec7157"/><path d="M143 52 q19 -10 33 -8" fill="none" stroke="#f4ac76" strokeWidth="4"/></g>
    <Leaf x={290} y={269} angle={65}/><Spark x={80} y={92} size={8}/>
  </>;
}
function Curupira() {
  return <>
    <Leaf x={77} y={338} angle={-30}/><Leaf x={288} y={324} angle={40}/>
    <path d="M137 268 L128 332 Q98 331 95 350 Q125 365 153 345 L161 272 M185 273 L198 333 Q225 329 239 347 Q219 366 192 350 L169 280" fill={palette.lightSkin}/>
    <path d="M123 330 q-15 9 -19 19 M133 337 q-15 11 -20 14 M206 335 l19 14 M199 341 l17 14" fill="none" strokeWidth="2"/>
    <path d="M133 181 Q107 202 113 268 L95 282 L127 285 L139 299 L158 286 L179 300 L195 282 L220 283 Q201 211 186 183Z" fill={palette.leaf}/>
    <path d="M130 214 Q156 227 192 214 M126 242 Q158 256 199 241 M149 205 l-9 60 M174 212 l9 62" fill="none" stroke="#b4cd86" strokeWidth="3"/>
    <path d="M132 193 Q93 216 79 250 Q72 266 90 269 L105 251 Q115 230 139 221 M191 196 Q216 209 237 191 L256 170 Q269 159 279 171 Q275 192 255 208 Q230 235 198 223" fill={palette.lightSkin}/>
    <path d="M144 164 v30 q17 17 37 -2 v-29" fill={palette.lightSkin}/>
    <path d="M108 111 L92 93 L112 83 L99 60 L132 63 L142 35 L163 51 L191 30 L197 61 L231 54 L219 82 L240 100 L215 119Z" fill="#da6940"/>
    <path d="M132 78 l8 -21 M169 72 l14 -26 M202 90 l16 -18" stroke="#f5b44f" strokeWidth="5"/>
    <ellipse cx="164" cy="130" rx="51" ry="53" fill={palette.lightSkin}/><path d="M116 107 Q131 75 151 86 L170 104 L184 83 Q208 86 216 113" fill="#e47a43"/>
    <Eye x={144} y={129}/><Eye x={184} y={129}/><Cheek x={128} y={151}/><Cheek x={199} y={151}/><Smile x={165} y={154}/>
    <Leaf x={224} y={68} angle={38} color={palette.lime}/><path d="M270 198 L286 331" fill="none" stroke="#987349" strokeWidth="8"/><Leaf x={273} y={214} angle={-35}/>
  </>;
}
function Boitata({ gradient }: { gradient: string }) {
  return <>
    <g stroke="none" fill={palette.gold} opacity=".3"><ellipse cx="183" cy="215" rx="113" ry="142"/><circle cx="72" cy="221" r="13"/><circle cx="278" cy="126" r="10"/></g>
    <path d="M105 340 Q33 295 81 254 Q110 228 177 252 Q252 279 263 231 Q272 202 217 197 Q134 194 125 156 Q107 104 163 89" fill="none" stroke={ink} strokeWidth="57"/>
    <path d="M105 340 Q33 295 81 254 Q110 228 177 252 Q252 279 263 231 Q272 202 217 197 Q134 194 125 156 Q107 104 163 89" fill="none" stroke={`url(#${gradient})`} strokeWidth="48"/>
    <path d="M91 327 Q67 298 99 276 Q123 264 173 280 Q242 307 277 266" fill="none" stroke="#ffdfa0" strokeWidth="12"/>
    <g className={styles.sway}><path d="M149 92 Q123 66 145 42 Q152 63 166 51 Q174 25 194 19 Q187 55 210 59 Q235 74 218 101Z" fill={palette.gold}/><path d="M147 77 Q139 94 147 116 Q170 139 212 122 Q239 113 242 96 Q242 72 212 73Z" fill="#efa446"/><Eye x={173} y={95}/><Eye x={209} y={92}/><Cheek x={159} y={115}/><Smile x={208} y={114}/></g>
    {[ [104,290], [146,267], [205,271], [242,241], [208,216], [165,195], [140,163] ].map(([x,y],i)=><path key={i} d={`M${x-6} ${y-5} q6 10 12 0`} fill="none" stroke="#af6135" strokeWidth="3"/>)}
    <Spark x={73} y={139}/><Spark x={284} y={182} size={17}/><Spark x={168} y={341} size={10}/><Spark x={257} y={63} size={8}/>
  </>;
}
function Caipora() {
  return <>
    <g className={styles.sway}><path d="M92 283 Q52 257 47 281 Q42 300 66 293" fill="none" stroke="#a97c65" strokeWidth="7"/><path d="M112 302 l-3 53 22 0 10 -45 M231 305 l4 50 22 0 -4 -61" fill="#a97c65"/><path d="M80 278 Q98 226 173 237 Q255 229 270 283 Q276 333 179 330 Q88 335 80 278Z" fill="#c49a7c"/><path d="M231 251 l-4 -33 q28 1 37 27 M268 250 l27 -18 1 42" fill="#b3846d"/><path d="M238 247 Q281 239 298 270 Q315 303 281 319 Q244 328 227 303Z" fill="#cfaa89"/><ellipse cx="284" cy="291" rx="25" ry="19" fill="#e0b299"/><circle cx="275" cy="291" r="3" fill={ink}/><circle cx="292" cy="291" r="3" fill={ink}/><Eye x={257} y={269} size={7}/><path d="M110 270 Q150 248 186 255" fill="none" stroke="#dfbea0" strokeWidth="8"/></g>
    <path d="M138 219 Q120 247 143 280 L172 290 Q184 297 174 309 Q149 316 128 293 Q104 271 111 239 M175 219 Q201 238 202 272 L213 287 Q226 300 210 306 Q190 306 181 283 L160 250" fill={palette.skin}/>
    <path d="M123 160 Q97 185 105 239 Q148 260 195 233 Q192 183 176 163Z" fill={palette.leaf}/>
    <path d="M118 194 l24 34 13 -34 24 34" fill="none" stroke={palette.lime} strokeWidth="4"/>
    <path d="M116 181 Q84 190 78 228 Q75 246 87 248 Q99 244 102 223 L132 205 M183 183 Q204 199 221 173 L231 154 Q245 145 250 159 Q246 186 225 204 Q207 221 185 211" fill={palette.skin}/>
    <path d="M134 142 v28 q16 14 32 -1 v-27" fill={palette.skin}/><ellipse cx="149" cy="112" rx="48" ry="49" fill={palette.skin}/>
    <path d="M100 121 Q72 60 118 47 Q167 23 198 68 Q220 98 193 135 L181 98 Q156 109 136 83 L117 113Z" fill="#375c47"/>
    <Leaf x={113} y={94} angle={-25}/><Leaf x={141} y={81} angle={-5} color={palette.lime}/><Leaf x={165} y={83} angle={35}/><Leaf x={190} y={106} angle={65}/>
    <Eye x={132} y={116} size={9}/><Eye x={166} y={115} size={9}/><Cheek x={117} y={137}/><Cheek x={180} y={135}/><Smile x={149} y={141}/><Spark x={66} y={161} size={8}/>
  </>;
}
function Iara({ gradient }: { gradient: string }) {
  return <>
    <path d="M108 154 Q75 83 117 52 Q178 10 224 63 Q255 96 224 198 L252 230 Q159 262 90 204Z" fill="#344b50"/>
    <g className={styles.tail}><path d="M136 224 Q105 290 158 317 Q187 333 213 300 Q225 284 240 294 Q239 339 193 346 Q119 365 101 299 Q86 255 136 224Z" fill={`url(#${gradient})`}/><path d="M212 316 Q238 279 282 291 Q272 332 239 340 Q269 344 274 374 Q230 382 207 343Z" fill="#6ebbb0"/><path d="M225 334 l42 -29 M226 344 l34 18" fill="none" stroke="#26797d" strokeWidth="3"/>
    {[0,1,2,3].map(row=><g key={row} transform={`translate(${119+row*3} ${261+row*16})`} fill="none" stroke="#b3e0cb" strokeWidth="2.5"><path d="M0 0 q6 11 12 0 q6 11 12 0 q6 11 12 0"/></g>)}</g>
    <path d="M136 157 Q114 172 109 205 Q118 230 137 240 L181 241 Q205 215 205 182 L186 157Z" fill="#7c75b2"/>
    <path d="M123 190 Q153 213 194 190 L190 231 Q161 252 130 228Z" fill="#628eaf"/><path d="M130 222 Q157 236 188 221" fill="none" stroke="#b2c5da" strokeWidth="3"/>
    <path d="M124 166 Q92 165 81 139 L72 114 Q64 102 55 113 Q51 126 66 151 Q82 188 116 192 M195 167 Q223 189 246 161 L263 139 Q275 132 280 144 Q273 169 252 186 Q228 211 197 193" fill={palette.lightSkin}/>
    <path d="M145 135 v27 q16 17 34 -1 v-27" fill={palette.lightSkin}/><ellipse cx="160" cy="108" rx="48" ry="50" fill={palette.lightSkin}/>
    <path d="M111 104 Q107 58 150 56 Q200 48 211 110 Q181 99 165 75 Q146 97 111 104Z" fill="#344b50"/>
    <Eye x={141} y={110} size={9}/><Eye x={179} y={110} size={9}/><Cheek x={126} y={132}/><Cheek x={194} y={131}/><Smile x={160} y={139}/><path d="M121 83 Q136 56 165 63" fill="none" stroke="#5f7376" strokeWidth="5"/>
    <g transform="translate(205 83)"><path d="M0 -15 L5 -5 L16 -5 L7 3 L11 15 L0 8 L-11 15 L-7 3 L-16 -5 L-5 -5Z" fill={palette.coral} strokeWidth="2"/><circle r="3" fill={palette.gold}/></g>
    <path d="M55 327 q25 -14 53 0 M80 350 q28 -13 48 0" fill="none" stroke="#97c8c0" strokeWidth="4"/><Spark x={284} y={233} size={9}/>
  </>;
}
function Boto({ gradient }: { gradient: string }) {
  return <>
    <path d="M67 302 Q32 282 41 255 Q65 262 82 283 Q73 246 91 225 Q119 249 105 288Z" fill="#cd799b"/>
    <path d="M79 290 Q112 263 120 190 Q126 114 191 105 Q245 97 269 143 L297 165 Q327 184 304 195 L268 191 Q262 256 216 283 Q172 313 106 309Z" fill={`url(#${gradient})`}/>
    <path d="M126 190 Q153 227 205 214 Q243 201 253 173 Q257 240 208 266 Q168 292 110 290" fill="#f5c6d0" stroke="none"/>
    <path d="M147 143 Q135 107 162 78 Q187 79 197 108" fill="#d989a6"/>
    <g className={styles.fin}><path d="M190 215 Q210 249 256 260 Q247 225 222 202Z" fill="#d883a3"/><path d="M208 224 l28 23" fill="none" stroke="#b56688" strokeWidth="3"/></g>
    <Eye x={239} y={150} size={11}/><Cheek x={233} y={180}/><path d="M265 177 Q287 187 303 183" fill="none" strokeWidth="3"/>
    <path d="M161 133 Q177 119 195 125" fill="none" stroke="#ffe0dc" strokeWidth="7"/>
    <g className={styles.wind} fill="none" stroke="#8ebfc3" strokeWidth="4"><path d="M70 338 Q155 361 241 321 M118 359 Q182 370 216 354"/><circle cx="96" cy="144" r="9"/><circle cx="81" cy="111" r="5"/><circle cx="281" cy="281" r="8"/></g><Spark x={275} y={87} size={11}/>
  </>;
}
function Uirapuru() {
  return <>
    <path d="M68 349 Q172 334 289 346" fill="none" stroke="#98764f" strokeWidth="11"/><Leaf x={90} y={346} angle={-65}/><Leaf x={275} y={345} angle={65}/>
    <path d="M160 290 l-4 48 M195 288 l8 49 M141 342 l16 -6 15 7 M189 344 l15 -8 17 6" fill="none" stroke="#ac7548" strokeWidth="5"/>
    <path d="M134 257 Q77 269 48 319 Q114 335 159 295 Q128 330 111 362 Q172 353 190 285Z" fill="#397f88"/>
    <path d="M141 278 l-64 31 M157 291 l-30 47" fill="none" stroke="#85bdb0" strokeWidth="4"/>
    <path d="M124 138 Q102 187 116 244 Q123 290 177 299 Q241 293 245 226 Q248 177 216 142Z" fill={palette.teal}/>
    <path d="M177 170 Q226 163 229 217 Q231 271 181 281 Q156 263 160 220Z" fill={palette.coral} stroke="none"/>
    <g className={styles.fin}><path d="M128 162 Q96 187 105 228 Q111 260 169 264 Q176 222 145 183Z" fill="#347c83"/><path d="M119 197 Q127 228 155 247 M116 220 q8 20 24 27" fill="none" stroke="#8ebfac" strokeWidth="4"/></g>
    <path d="M133 131 Q102 102 131 67 Q161 36 204 57 Q240 72 235 115 Q232 154 192 164 Q153 164 133 131Z" fill="#5bacaa"/>
    <path d="M154 58 Q140 34 156 22 Q176 37 176 54 Q180 26 199 28 L196 58" fill={palette.coral}/>
    <path d="M232 100 L270 116 L232 132 Q241 116 232 100Z" fill={palette.gold}/><path d="M237 116 h26" stroke="#ad7742" strokeWidth="2"/>
    <path d="M149 94 Q168 78 192 88 Q213 101 204 125 Q190 143 165 130Z" fill={palette.cream} stroke="none"/><Eye x={184} y={107} size={12}/><Cheek x={208} y={134}/>
    <path d="M132 77 q9 -11 18 -12 M140 150 q11 7 23 7" fill="none" stroke="#a7d1ba" strokeWidth="4"/>
    <g className={styles.sway} fill="none" stroke="#a47d9e" strokeWidth="3"><path d="M281 71 V43 l18 -5 v27 M281 47 l18 -5"/><ellipse cx="275" cy="73" rx="7" ry="4" fill="#a47d9e"/><ellipse cx="293" cy="67" rx="7" ry="4" fill="#a47d9e"/></g><Spark x={75} y={125} size={9}/>
  </>;
}

/** Trade-offs: hand-authored paths keep art portable and dependency-free; shared
 * paper stippling costs a little SVG paint work but avoids raster assets and filters. */
export function LearningCharacter({ guide, moving = false, className, decorative = false }: LearningCharacterProps) {
  const id = `learning-${useId().replace(/:/g, "")}`;
  const gradient = `${id}-wash`;
  const art: Record<LearningGuide["id"], ReactNode> = {
    cuca: <Cuca/>, saci: <Saci/>, curupira: <Curupira/>, boitata: <Boitata gradient={gradient}/>,
    caipora: <Caipora/>, iara: <Iara gradient={gradient}/>, boto: <Boto gradient={gradient}/>, uirapuru: <Uirapuru/>,
  };
  const washes: Record<LearningGuide["id"], [string, string]> = {
    cuca: [palette.lime, palette.leaf], saci: [palette.skin, palette.coral], curupira: [palette.leaf, palette.lime],
    boitata: ["#ffd776", "#e8873e"], caipora: [palette.leaf, palette.lime], iara: ["#70c4b0", "#328e98"],
    boto: ["#efb2c2", "#d67e9e"], uirapuru: [palette.teal, palette.coral],
  };
  return <svg viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg" className={[styles.character, className].filter(Boolean).join(" ")} data-moving={moving} data-guide={guide.id} role={decorative ? undefined : "img"} aria-hidden={decorative ? true : undefined} aria-labelledby={decorative ? undefined : `${id}-title`} focusable="false">
    {!decorative && <title id={`${id}-title`}>{`${guide.name}, guia da jornada de aprendizagem`}</title>}
    <defs>
      <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1"><stop stopColor={washes[guide.id][0]}/><stop offset="1" stopColor={washes[guide.id][1]}/></linearGradient>
      <pattern id={`${id}-paper`} width="19" height="23" patternUnits="userSpaceOnUse" patternTransform="rotate(13)"><circle cx="3" cy="5" r=".8" fill="#fff4dc" opacity=".28"/><circle cx="14" cy="17" r=".65" fill="#3f483d" opacity=".13"/><path d="M8 10 l3 -1 M1 20 l2 1" stroke="#fff4dc" strokeWidth=".7" opacity=".22"/></pattern>
      <mask id={`${id}-silhouette`} style={{ maskType: "alpha" }}><g fill="white" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">{art[guide.id]}</g></mask>
    </defs>
    <g className={styles.body} stroke={ink} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
      {art[guide.id]}
      <rect width="360" height="400" fill={`url(#${id}-paper)`} stroke="none" mask={`url(#${id}-silhouette)`} pointerEvents="none"/>
    </g>
  </svg>;
}

export default LearningCharacter;
