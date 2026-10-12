export const journeyDraftKey = "edukacuca-jornada-v2";
const leadKey = "edukacuca-diagnostico-dados";
const lifetimeMs = 4 * 60 * 60 * 1000;

type JourneyDraft = {
  version: 1;
  attemptId: string;
  answers: Record<number, number>;
  current: number;
  expiresAt: number;
};

function attemptId() {
  const lead = JSON.parse(window.localStorage.getItem(leadKey) ?? "null");
  return typeof lead?.attemptId === "string" && lead.attemptId.length > 0 ? lead.attemptId : null;
}

// Trade-offs: a four-hour, same-tab draft stores answers and an opaque attempt ID,
// never duplicate contact details. It cannot restore progress after closing the tab.
export function readJourneyDraft(): JourneyDraft | null {
  try {
    const stored: unknown = JSON.parse(window.sessionStorage.getItem(journeyDraftKey) ?? "null");
    if (!stored || typeof stored !== "object") return null;
    const draft = stored as JourneyDraft;
    if (draft.version !== 1 || draft.attemptId !== attemptId() || typeof draft.attemptId !== "string" || !Number.isFinite(draft.expiresAt) || draft.expiresAt <= Date.now()) return null;
    if (!Number.isInteger(draft.current) || draft.current < 0 || draft.current > 32 || !draft.answers || typeof draft.answers !== "object" || Array.isArray(draft.answers)) return null;
    const entries = Object.entries(draft.answers);
    if (entries.length > 33 || entries.some(([id,value]) => !/^(0|[1-9]|[12][0-9]|3[0-2])$/.test(id) || !Number.isInteger(value) || value < 0 || value > 4)) return null;
    const highest = Math.max(-1, ...entries.map(([id])=>Number(id)));
    if (draft.current > highest + 1) return null;
    return draft;
  } catch {
    return null;
  }
}

export function writeJourneyDraft(answers: Record<number, number>, current: number): boolean {
  try {
    const id = attemptId();
    if (!id) return false;
    const draft: JourneyDraft = {version:1,attemptId:id,answers,current,expiresAt:Date.now()+lifetimeMs};
    window.sessionStorage.setItem(journeyDraftKey,JSON.stringify(draft));
    return true;
  } catch {
    return false;
  }
}

export function clearJourneyDraft() {
  try { window.sessionStorage.removeItem(journeyDraftKey); } catch { /* The existing form/result can still be used without a draft. */ }
}
