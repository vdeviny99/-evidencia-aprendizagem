# Illustrated learning journey · NEL-542

Prepared from `origin/main` at `63b58cc` in an isolated checkout. João requested website and free-diagnosis refinement and reported Zé's authorization. This candidate is for local review; it has not been merged or published.

## Experience

The diagnosis landing replaces the sample numerical graph with an invitation to explore. Eight selectable folklore guides retain the original phrases and use context grounded in the existing matrix descriptions. Exploration does not assign a result.

The existing questions become a journey through eight scenery chapters: Cuca's garden, Saci's wind valley, Curupira's trail, Boitatá's clearing, Caipora's forest, Iara's river, Boto's waters, and Uirapuru's grove. Chapters follow question position, never answer values or scoring dimensions. Progress counts answered questions. Explicit confirmation advances the question; native radio controls support keyboard selection and changing an answer.

Original SVG landscapes provide hills, plants, paths or rivers, clouds and character-specific drawings. CSS animates leaves, clouds, glints and portraits. The question screen has a motion toggle; system reduced-motion preferences disable its animations. Capture uses static scenery. Explorer and result include controllable motion. Question changes focus the heading and restore the top of the journey below the sticky header.

The capture and result screens reuse the scenery and original character badges. Courses, recorded-course price, mentoring, institutional talks, the paid diagnosis and all existing destinations remain the site's commercial context.

## Integrity corrections

- The original 33 question strings, values 0 through 4, one-based submission IDs, inverse scoring, thresholds and all eight result mappings remain unchanged.
- Failed submissions retain answers and show an error instead of advancing as though received.
- A new free capture invalidates the previous respondent and answers before storing the new lead. Storage errors remain on the form.
- Result content is calculated from complete answers after hydration, avoiding a server/browser render mismatch and fabricated fallback results.
- Synthetic result previews accept canonical integers 1 through 8, use fictitious identity, and label their provenance in screen and print output. Decimal preview values are rejected.
- `EDUKACUCA_LOCAL_PREVIEW=1` disables global advertising, marketing tracking, first-party click tracking and Vercel analytics for local visual review. It does not mock diagnosis submissions or change the default production configuration.

## Provenance and trade-offs

The eight transparent badge PNGs are reused from the existing NEL-516 artwork at commit `9de644c`, `public/para/personagens/`. Landscapes are newly authored SVG shapes, with no new asset service or animation dependency.

Trade-offs: SVG and CSS provide lightweight scenery rather than a canvas engine or complex illustrated character rigs. Eight chapters cover 33 questions, so the last chapter contains five. V2 stores a same-tab session draft for four hours, bound to the free capture attempt identifier. It contains only answers, position, expiry and attempt ID. Expired drafts and another respondent's draft are rejected. Closing the tab ends the draft. Storage failure preserves in-memory answers and explains that resume is unavailable. The client identifier is not backend idempotency. No sounds, score-based rewards or backend schema changes are added. Browser storage has no transaction; clearing old attribution before writing a new lead can discard the previous local diagnostic if a subsequent write fails.

## Verification

- `npm run build`: passed, including TypeScript and all 28 generated pages.
- Targeted ESLint and `git diff --check`: passed.
- `npx tsx scripts/verify-learning-scoring.ts`: original questions/scoring source equality and all eight profile fixtures passed; invalid and incomplete answers rejected.
- `node scripts/verify-learning-journey.mjs`: desktop 1440 and mobile 390, all 33 answers, zero-valued answers, back navigation, same-tab resume, cross-respondent and expired draft rejection, Escape dismissal of exit confirmation, complete animation pause, progress, failed submission, successful mocked submission, keyboard radio arrows, no-result state, and reduced motion.
- `node scripts/verify-learning-explorer.mjs`: eight choices, empty initial selection, one active choice, eight synthetic previews, fictitious identity isolation, fractional-preview rejection, capture/explorer/result overflow.

Browser checks intercept all POSTs and non-local requests. They create no real leads, emails, payments or advertising events. Generated screenshots and JSON receipts live under `evidence/` and are excluded from git. Backend production persistence, real PDF generation and paid checkout were not accepted by these tests.

## Remaining release work

Independent static review found inherited issues outside this visual candidate: optional consent choices are not durably recorded; production still initializes a global Google tag outside the consent wrapper; submission has no idempotency key, so a retry after an uncertain server response can duplicate records or notifications; paid capture and shared-test required fields differ and paid capture has a separate stale-data path. Age/guardian handling requires product review for the school audience. These need their own acceptance before production rollout. The new preview switch only isolates local review, it does not resolve production tracking.

## Local review

```sh
EDUKACUCA_LOCAL_PREVIEW=1 npm run start -- --hostname 127.0.0.1 --port 3117
```

- `/diagnostico`: interactive style explorer and existing free/paid offer.
- `/diagnostico/teste`: illustrated question interface.
- `/diagnostico/resultado?matriz=6`: explicitly synthetic Iara result preview.

Publication remains a separate action-specific gate after visual review and release follow-ups.

## V2 refinement

Following João's request to go substantially beyond v1, the explorer now uses an interactive illustrated atlas. The eight biomes are connected by paths and water, with native buttons over their locations. During the questionnaire, the atlas permits revisiting reached chapters and disables future chapters. A welcome screen introduces the journey and offers an explicit resume choice when a valid draft exists. Native exit confirmation permits returning to the question with Escape.

Each folklore guide now has an original full-body SVG illustration with independent expressions and small CSS movements. Every landscape has its own composition and environmental motifs. Guide and navigation text use opaque paper surfaces for readability over all palettes. Chapter changes animate the guide's entrance; reduced motion and the pause toggle freeze animations. The result is presented as an illustrated paper reveal with immediate access to the educational report.

Atlas asset: `public/learning/atlas-v2.png`, generated with the built-in image generation tool on 2026-10-10, from an original prompt describing eight Brazilian folklore biomes, no text or logos. Original source: `/Users/jow/.codex/generated_images/01a1220a-1dcb-7591-8a22-71b927a0e4dc/exec-5a7967c9-1f33-4ac2-b196-c8165fb9789e.png`. Character and landscape SVGs are authored in source. Existing badge PNGs remain the atlas markers. The atlas is raster art; movement and character rigs are vector CSS/SVG.

## 16Personalities reference

Requested by João during V2. Reviewed the live homepage, personality index, INFP profile and hydrated free questionnaire on 2026-10-10. Reference: https://www.16personalities.com/free-personality-test and https://www.16personalities.com/infp-personality. Applied patterns: a short journey introduction, recognizable illustrated profiles, explicit exploration separate from testing, and a chapter index for the result. The report now offers anchor navigation through habits, the map, observed patterns, practices and next steps. EdukaCuca retains its five frequency choices, all original question wording and scoring. The reference's seven-point agreement scale, personality taxonomy, percentage claims, testimonials and illustration assets are not reused.
