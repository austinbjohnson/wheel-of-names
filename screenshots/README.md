# Screenshots Directory

This folder contains verification screenshots taken during model evaluations.

## Structure

```
screenshots/
├── YYYYMMDD_HHMM/           # Timestamped folder matching eval run
│   ├── {model}_screenshot.png    # Initial page load
│   ├── {model}_winner.png        # Winner modal + confetti
│   └── {model}_error.png         # Error state (if applicable)
└── README.md
```

## Naming Convention

### Folder Names
- Use the same timestamp as the evaluation: `YYYYMMDD_HHMM`
- Example: `20251124_1505/` matches `evaluations/20251124_1505_results.md`

### File Names
Format: `{model}_{type}.png`

**Model identifiers:**
- `opus` - Claude 4.5 Opus
- `sonnet` - Claude 4.5 Sonnet
- `haiku` - Claude 4.5 Haiku
- `gpt` - GPT 5.1 Codex
- `gemini` - Gemini 3 Pro
- `composer` - Composer 1
- `grok` - Grok Code Fast

**Screenshot types:**
- `_screenshot` - Initial page state after load
- `_wheel` - Wheel with names added
- `_spinning` - Wheel mid-spin
- `_winner` - Winner modal with confetti
- `_error` - Console error or broken state
- `_disabled` - After disabling a winner

### Examples
```
screenshots/20251124_1505/
├── opus_screenshot.png      # Opus initial state
├── opus_winner.png          # Opus winner modal
├── sonnet_screenshot.png    # Sonnet initial state
├── composer_screenshot.png  # Composer showing error state
└── grok_error.png           # Grok JS error
```

## Usage

When running evaluations:
1. Create a new folder with the eval timestamp
2. Capture screenshots using Chrome DevTools MCP
3. Save with consistent naming per above conventions
4. Reference in the corresponding `evaluations/YYYYMMDD_HHMM_results.md`

