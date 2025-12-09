---
description: Rules for contributing to the Wheel of Names AI evaluation framework
globs:
  - "*.md"
  - "*.html"
  - "evaluations/**"
  - "prompts/**"
  - "results/**"
  - "screenshots/**"
alwaysApply: true
---

# Rules

## 1. Prompt Versioning

New evaluation prompts **must** be placed in the `prompts/` directory.

- Use incremental version numbers: `prompts/v1.md`, `prompts/v2.md`, `prompts/v3.md`, etc.
- Each prompt **must** include an HTML comment header at the top with:
  - `Prompt Version`: The version identifier (e.g., `v3`)
  - `Name`: A short descriptive name for the prompt variant
  - `Created`: Date in `YYYY-MM-DD` format
  - `Description`: What this prompt tests or its purpose
  - `Changes from vN`: What changed from the previous version (if applicable)
  - `Used in runs`: List of evaluation timestamps where this prompt was used

Example header:
```html
<!--
Prompt Version: v3
Name: Minimal Requirements
Created: 2025-12-08
Description: Tests model creativity with only core functional requirements
Changes from v2: Removed visual requirements section
Used in runs: (none yet)
-->
```

## 2. Evaluation Results

Evaluation result files go in the `evaluations/` directory.

- Naming format: `YYYYMMDD_HHMM_results.md`
- **Must** reference which prompt version was used for that evaluation run
- **Must** include scores/notes for all models tested in that run
- Timestamp must match corresponding folders in `results/` and `screenshots/`

## 3. Generated HTML Results

AI-generated HTML files are stored in the `results/` directory.

- Folder structure: `results/YYYYMMDD_HHMM/`
- File naming: `{model-name}.html`
- Use consistent model identifiers:
  - `claude-4.5-opus.html`
  - `claude-4.5-sonnet.html`
  - `claude-4.5-haiku.html`
  - `gpt-5.1-codex-high-fast.html`
  - `gemini-3-pro.html`
  - `composer-1.html`
  - `grok-code-fast-1.html`

## 4. Screenshots

Screenshots for verification go in the `screenshots/` directory.

- Folder structure: `screenshots/YYYYMMDD_HHMM/`
- File naming: `{model}_{type}.png`
- Model shorthand identifiers: `opus`, `sonnet`, `haiku`, `gpt`, `gemini`, `composer`, `grok`
- Screenshot types:
  - `_screenshot` - Initial page state after load
  - `_wheel` - Wheel with names added
  - `_spinning` - Wheel mid-spin
  - `_winner` - Winner modal with confetti
  - `_error` - Console error or broken state
  - `_disabled` - After disabling a winner

See [screenshots/README.md](screenshots/README.md) for full conventions.

## 5. Timestamp Synchronization

All timestamped folders **must** use the same `YYYYMMDD_HHMM` identifier across:
- `evaluations/YYYYMMDD_HHMM_results.md`
- `results/YYYYMMDD_HHMM/`
- `screenshots/YYYYMMDD_HHMM/`

This ensures traceability between prompts, generated code, visual verification, and evaluation scores.
