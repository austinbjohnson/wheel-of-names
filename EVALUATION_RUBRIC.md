# Evaluation Rubric: Wheel of Names

This rubric defines the pass/fail criteria for evaluating the "Wheel of Names" implementation by various LLM models.

## 1. Visual & Branding
*   **Strict Color Compliance:**
    *   **Zap Orange (`#FF4F00`)** must be the dominant hero color (~60%).
    *   **Earth (`#201515`)** used for text/contrast (no pure black).
    *   **Cream (`#FFF3E6`)** or **Almost White (`#FFFDF9`)** for background.
    *   **Wheel Slices** must strictly use the Expanded Palette: Moss (`#1F3121`), Night (`#2B2358`), Lavender (`#C1B7FF`), Peach (`#FFBF6E`), Bolt (`#F6FFDB`), Sky (`#CDE4E1`).
*   **Wheel Construction:**
    *   Slices must be proportional.
    *   Text must be readable on all slice colors (contrast check).

## 2. Core Functionality (Spinner)
*   **Spin Action:** Smooth animation that decelerates naturally.
*   **Indicator:** A clear pointer/marker exists and "points" into the wheel.
*   **Alignment & Logic Check:**
    *   **Visual Alignment:** The wheel must stop with the selected name clearly aligned under the indicator.
        *   *Critical Fail:* If the wheel stops between lines (random rotation).
    *   **Outcome Verification:** The announced winner MUST match the name physically under the pointer.
        *   *Critical Fail:* If the announced winner is different from the one under the pointer (e.g., 180° opposite due to Top/Bottom logic mismatch).
    *   **Code Verification (If Mismatch Suspected):** Check if the visual pointer position (e.g., Top) matches the angle calculation in JS (e.g., Top usually requires offsetting by `-Math.PI/2` or `270` degrees).

## 3. Interaction & Flow
*   **Post-Spin Dialog:**
    *   Must appear after spinning stops.
    *   Must show the winning name.
    *   **Confetti:** Must trigger a confetti animation.
    *   **Actions:** Must offer "Keep" (close dialog, keep name) and "Disable" (remove/disable name from list).
*   **Manual Management:**
    *   User can **Add** a new name.
    *   User can **Edit** an existing name.
    *   User can **Disable/Enable** a name *without* spinning (checkbox or toggle).

## 4. Edge Cases
*   **Long Names:** Text should handle wrapping or truncation gracefully on the wheel.
*   **One Item:** Does it handle a single item list?
*   **Zero Items:** Does it crash or show a meaningful empty state?

## 5. Reporting Standards
*   **Folder Structure:** All results from a run must be saved in a new timestamped directory: `results/YYYYMMDD_HHMM/`.
*   **Eval File:** The evaluation report must be saved as `evaluations/YYYYMMDD_HHMM_results.md`.
*   **Screenshots:** Verification screenshots must be saved in `screenshots/YYYYMMDD_HHMM/` with naming convention `{model}_{type}.png` (see `screenshots/README.md` for details).
*   **Registry:** New runs must be appended to the `benchmarkData` array in `data.js`.
*   **Versioning:** Do not overwrite previous evaluation files; keep a historical log.

## 6. Testing & Verification
*   **Browser Checks:** Verification if automated browser checks were executed. Must be flagged if not run.
*   **E2E Test Status:** Report pass/fail/incomplete status for End-to-End flows.
    *   *Requirement:* If E2E tests could not be completed, this must be explicitly noted as "Incomplete".


