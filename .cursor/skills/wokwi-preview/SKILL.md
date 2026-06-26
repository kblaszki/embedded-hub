---
name: wokwi-preview
description: Generates Wokwi simulation preview PNGs (schematics/preview.png) for embedded projects. Use when the user asks to regenerate preview images, Wokwi screenshots, README teasers, or capture one or all projects locally.
---

# Wokwi Preview Capture

Generates `projects/NN-name/schematics/preview.png` via Playwright + Wokwi embed. Output is committed manually by the user.

## Prerequisites (first time only)

From repository root:

```bash
npm ci
npx playwright install chromium
```

Requires [Arduino CLI](https://arduino.github.io/arduino-cli/) with AVR core:

```bash
arduino-cli core update-index
arduino-cli core install arduino:avr
```

## Workflow

Copy this checklist:

```
- [ ] Step 1: Determine scope (one project or all)
- [ ] Step 2: Ensure npm + Playwright + arduino-cli are available
- [ ] Step 3: Run capture script(s)
- [ ] Step 4: Confirm preview.png files were updated
```

### Step 1: Determine scope

| User intent | Command |
|-------------|---------|
| All Wokwi projects | `npm run capture-preview:all` |
| One project, e.g. `00-blink` | `npm run capture-preview -- --project projects/00-blink` |

A project must have `wokwi.toml` and `diagram.json` to be captured. `capture-preview:all` skips folders without `wokwi.toml`.

### Step 2: Run from repository root

**All projects** (compiles each sketch, then captures):

```bash
npm run capture-preview:all
```

**Single project**:

```bash
cd projects/NN-name
arduino-cli compile --fqbn arduino:avr:uno --output-dir build NN-name.ino
cd ../..
npm run capture-preview -- --project projects/NN-name
```

On Windows PowerShell use `;` instead of `&&` between commands if needed.

### Step 3: Verify output

Check that `projects/NN-name/schematics/preview.png` exists and looks correct.

- Single-part diagrams (e.g. `00-blink`) are auto-centered in the frame.
- Multi-part diagrams are not shifted — Wokwi embed frames them as designed.
- Preview reflects compile-time `DEMO` constant in `.ino` when applicable.
- Tune timing via `[preview] delay_ms` in `wokwi.toml`; fine-tune position via `offset_left` / `offset_top`.

### Step 4: Commit (user decides)

Preview PNGs are **not** auto-committed. User commits when ready:

```bash
git add projects/*/schematics/preview.png
```

## Troubleshooting

| Error | Fix |
|-------|-----|
| `Firmware not found` | Run `arduino-cli compile` in the project folder first |
| Playwright browser missing | `npx playwright install chromium` |
| Wokwi embed timeout | Retry once; check network access to wokwi.com |
| Wrong LED state in image | Adjust `delay_ms` in `wokwi.toml` `[preview]` |

See [scripts/wokwi-preview/README.md](../../scripts/wokwi-preview/README.md) and [WOKWI.md](../../WOKWI.md).

## Implementation notes

- Scripts live in `scripts/wokwi-preview/` — do not duplicate capture logic in the skill.
- Do **not** recreate GitHub Actions workflows unless the user explicitly asks.
- After changing `diagram.json` or sketch logic, regenerate previews before committing docs that reference them.
