# Evaluation Results: Wheel of Names

## Summary

*   **Winner:** **Claude 4.5 Sonnet**
    *   It delivered the most robust and visually accurate implementation. It handled the "Top Pointer" logic correctly, included full CRUD for names, and had a polished UI that strictly followed the brand guide.
*   **Runner Up:** **GPT 5.1 Codex High Fast**
    *   Very high quality, professional UI, and excellent code structure (using ARIA labels). It used a "Right-side Pointer" which is valid but less conventional for a "Wheel of Fortune" style.
*   **Notable Fail:** **Composer 1**
    *   Failed the core branding requirement by using a black background instead of Cream/White.
*   **Potential Bug:** **Grok Code Fast 1**
    *   Likely has an "off-by-90-degrees" bug where the calculated winner (based on rotation) does not visually match the slice under the top pointer.

---

## Detailed Matrix

| Feature | Claude 4.5 Haiku | Claude 4.5 Sonnet | Composer 1 | Gemini 3 Pro | GPT 5.1 Codex | Grok Fast |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Visuals** | | | | | | |
| Brand Colors | ✅ | ✅ | ❌ (Black BG) | ✅ | ✅ | ✅ |
| Slice Palette | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Spinner** | | | | | | |
| Canvas/SVG | Canvas | Canvas | Canvas | Canvas | Canvas | SVG |
| Pointer Pos | Top | Top | Top | Right | Right | Top |
| Math Logic | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ (Likely Off) |
| **Interaction** | | | | | | |
| Add Name | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Edit Name | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Disable (Toggle) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Confetti | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dialog Options | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Model-by-Model Notes

### 1. Claude 4.5 Haiku
*   **Pros:** Good visual adherence. Simple, clean code.
*   **Cons:** Lacked "Edit" functionality for names (could only add/remove).
*   **Verdict:** Solid B+. Good for a quick prototype but missing full features.

### 2. Claude 4.5 Sonnet
*   **Pros:** Best in Class. Full feature set (Add/Edit/Delete/Disable). Correct math for top-pointer. Polished UI with gradients.
*   **Cons:** None significant.
*   **Verdict:** A+ (Winner).

### 3. Composer 1
*   **Pros:** Good functionality (localStorage support).
*   **Cons:** **Visual Failure.** The prompt asked for "Cream" or "Almost White" background, but it used `#000` (Black).
*   **Verdict:** C. Functional but ignored design constraints.

### 4. Gemini 3 Pro
*   **Pros:** Used an external library for superior confetti. interesting "Textarea" bulk edit approach.
*   **Cons:** Pointer positioning (Right side) is less intuitive than Top, but valid.
*   **Verdict:** A-. Very strong logic and features.

### 5. GPT 5.1 Codex High Fast
*   **Pros:** Most "Professional" code structure. ARIA accessibility labels. Great gradients. LocalStorage persistence.
*   **Cons:** Right-side pointer (subjective preference).
*   **Verdict:** A. Excellent engineering quality.

### 6. Grok Code Fast 1
*   **Pros:** Used SVG for the wheel (cleaner scaling than Canvas).
*   **Cons:** **Logic Error.** The wheel starts drawing at 0° (Right), but the pointer is at 90° (Top). The winning calculation didn't account for this 90° offset, meaning the code "thinks" the winner is at 0° when the pointer is actually looking at 90°.
*   **Verdict:** B-. Good tech stack (SVG), but broken core logic.

