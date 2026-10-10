import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { calculateDiagnosticResult, isCompleteDiagnosticAnswers } from "../src/lib/diagnosticoResultado";

// Guard the instrument against editorial drift during this visual redesign.
const originalPage = execFileSync("git", ["show", "63b58cc:src/app/diagnostico/teste/page.tsx"], { encoding: "utf8" });
const currentPage = readFileSync("src/app/diagnostico/teste/page.tsx", "utf8");
const questions = (source: string) => source.match(/const questions = \[([\s\S]*?)\n\];/)?.[1];
assert.equal(questions(currentPage), questions(originalPage));
const originalScoring = execFileSync("git", ["show", "63b58cc:src/lib/diagnosticoResultado.ts"], { encoding: "utf8" });
assert.equal(readFileSync("src/lib/diagnosticoResultado.ts", "utf8"), originalScoring);

const planning = new Set([1, 3, 8, 10, 15, 17, 22, 24, 28]);
const active = new Set([5, 6, 12, 13, 19, 20, 25, 26, 30, 31]);
const inverted = new Set([21, 23, 24, 27, 28, 30, 31]);
const fixtures = [
  [true, true, true, "Cuca"], [false, true, true, "Saci"],
  [true, false, true, "Curupira"], [true, true, false, "Boitatá"],
  [true, false, false, "Caipora"], [false, true, false, "Iara"],
  [false, false, true, "Boto"], [false, false, false, "Uirapuru"],
] as const;
for (const [plan, meta, practice, name] of fixtures) {
  const answers = Object.fromEntries(Array.from({ length: 33 }, (_, index) => {
    const id = index + 1;
    const positive = planning.has(id) ? plan : active.has(id) ? practice : meta;
    const corrected = positive ? 4 : 0;
    return [id, inverted.has(id) ? 4 - corrected : corrected];
  }));
  assert.equal(isCompleteDiagnosticAnswers(answers), true);
  assert.equal(calculateDiagnosticResult(answers).styleName, name);
  assert.equal(isCompleteDiagnosticAnswers({ ...answers, 1: -1 }), false);
  assert.equal(isCompleteDiagnosticAnswers({ ...answers, 1: 1.5 }), false);
  const incomplete = { ...answers }; delete incomplete[1];
  assert.equal(isCompleteDiagnosticAnswers(incomplete), false);
}
console.log("Original questions/scoring preserved; all eight folklore mappings passed.");
