# Wokwi preview capture

Generates `schematics/preview.png` for GitHub README teasers using Playwright and the [Wokwi embed API](https://github.com/wokwi/wokwi-embed-example).

## Prerequisites

- Node.js 20+
- [Arduino CLI](https://arduino.github.io/arduino-cli/) with `arduino:avr` core
- Playwright Chromium (`npx playwright install chromium`)

## Usage

From repository root:

```bash
npm ci
npx playwright install chromium

# All projects with wokwi.toml:
npm run capture-preview:all

# Single project:
cd projects/00-blink
arduino-cli compile --fqbn arduino:avr:uno --output-dir build 00-blink.ino
cd ../..
npm run capture-preview -- --project projects/00-blink
```

In Cursor, ask the agent to use the **`wokwi-preview`** skill (`.cursor/skills/wokwi-preview/`).

## Configuration

Per-project settings in `wokwi.toml`:

```toml
[preview]
delay_ms = 1500
width = 1200
height = 675
offset_left = 0
offset_top = 0
```

- `delay_ms` — wait after simulation start before screenshot
- `width` / `height` — iframe and viewport size
- `offset_left` / `offset_top` — optional fine-tune after auto-centering

Centering runs automatically only for **single-part** diagrams. Multi-part circuits are not shifted. The committed `diagram.json` is never modified.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `Timed out waiting for Wokwi embed` | Network blocked or Wokwi embed down; retry |
| `Firmware not found` | Run `arduino-cli compile` in the project folder first |
| Blank or clipped diagram | Increase `height` in `[preview]` (e.g. `04-shift-register`) |
| Preview does not match hardware | Preview uses compile-time `DEMO` constant in `.ino` |

If Wokwi updates their embed UI, update selectors in `capture-driver.js` and the embed URL in `host.html`.

See also [WOKWI.md](../../WOKWI.md).
