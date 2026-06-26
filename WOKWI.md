# Wokwi — simulation and circuit diagrams

[Wokwi](https://wokwi.com/) is the **primary diagram and simulation tool** for this repository. It runs inside VS Code / Cursor via the [Wokwi for VS Code](https://marketplace.visualstudio.com/items?itemName=wokwi.wokwi-vscode) extension.

Use Wokwi when you want to:

- Visualize an Arduino or ESP32 circuit while coding
- Simulate firmware before uploading to real hardware
- Keep machine-readable wiring in `diagram.json` (easy to generate and review in git)

## Files per project

| File | Purpose |
|------|---------|
| `diagram.json` | Circuit layout: parts, positions, wire connections |
| `wokwi.toml` | Points Wokwi to compiled firmware (`.hex` / `.elf`) |
| `NN-name.ino` | Same sketch you upload with Arduino IDE |

Both Wokwi files live **in the project folder** next to the sketch, e.g. `projects/00-blink/`.

## diagram.json basics

JSON with two main arrays:

- **`parts`** — components (`wokwi-arduino-uno`, `wokwi-led`, `wokwi-pushbutton`, …)
- **`connections`** — wires between pins, e.g. `["led1:A", "uno:13", "green", []]`

Each part needs a unique `id` and a `type` from the [Wokwi parts library](https://docs.wokwi.com/parts).

The Arduino Uno includes a built-in LED on pin 13 (`LED_BUILTIN`). Simple sketches may need **only the board** in `diagram.json` with no external parts or wires.

Official reference: [diagram.json format](https://docs.wokwi.com/diagram-format)

## wokwi.toml basics

Wokwi simulates **compiled firmware**, not raw `.ino` source. You must build the sketch before starting the simulator.

Minimal config for Arduino Uno:

```toml
[wokwi]
version = 1
firmware = "build/00-blink.ino.hex"
```

The `firmware` path is relative to the folder containing `wokwi.toml`.

Supported firmware types for Uno: `.hex`, `.elf` (`.elf` is optional but can speed up simulation).

Official reference: [wokwi.toml configuration](https://docs.wokwi.com/vscode/project-config)

## Local simulation workflow (Cursor / VS Code)

1. Install the **Wokwi for VS Code** extension.
2. Open the repository root (or the project folder) in Cursor.
3. Compile the sketch into `build/` (see below).
4. Run **Wokwi: Start Simulator** from the command palette (`F1`).
5. Edit `NN-name.ino` or `diagram.json`; recompile and restart simulation after logic changes.

### Compile with Arduino CLI

Install [Arduino CLI](https://arduino.github.io/arduino-cli/) and the AVR core:

```bash
arduino-cli core update-index
arduino-cli core install arduino:avr
```

From the project directory:

```bash
cd projects/00-blink
arduino-cli compile --fqbn arduino:avr:uno --output-dir build 00-blink.ino
```

This produces `build/00-blink.ino.hex`, which matches the path in `wokwi.toml`.

You can still use **Arduino IDE** for uploading to physical hardware; use Arduino CLI only when you want Wokwi simulation.

### Online alternative

Create a project at [wokwi.com](https://wokwi.com/), paste your sketch, copy `diagram.json` back into the repo. You still need `wokwi.toml` for local VS Code simulation.

## Adding components to a diagram

Example: external LED on pin 13 with resistor:

```json
{
  "parts": [
    { "type": "wokwi-arduino-uno", "id": "uno", "top": 0, "left": 0 },
    { "type": "wokwi-led", "id": "led1", "top": -20, "left": 200, "attrs": { "color": "red" } },
    { "type": "wokwi-resistor", "id": "r1", "top": 40, "left": 160, "attrs": { "value": "220" } }
  ],
  "connections": [
    ["uno:13", "r1:1", "green", ["v0"]],
    ["r1:2", "led1:A", "green", ["v0"]],
    ["led1:C", "uno:GND.1", "black", ["v0"]]
  ]
}
```

Always align pin numbers with `docs/wiring.md` and your `#define` / `pinMode` usage in code.

## Repo conventions

- Commit `diagram.json` and `wokwi.toml` — they are source, not build output.
- Do **not** commit `build/` (already in `.gitignore`).
- Commit `schematics/preview.png` — README teaser (generate locally with the `wokwi-preview` skill or `npm run capture-preview:all`).
- For complex circuits, add a short “Simulation” section in the project `README.md`.

## Preview images

GitHub README teasers use `projects/NN-name/schematics/preview.png` — a Wokwi simulation screenshot.

### Generate locally

Use the **`wokwi-preview`** Cursor skill (`.cursor/skills/wokwi-preview/`) or run from the repository root:

```bash
npm ci
npx playwright install chromium

# All projects with wokwi.toml:
npm run capture-preview:all

# One project:
cd projects/00-blink
arduino-cli compile --fqbn arduino:avr:uno --output-dir build 00-blink.ino
cd ../..
npm run capture-preview -- --project projects/00-blink
```

Commit updated PNGs when you are happy with them — nothing runs automatically on push.

### Per-project timing

Optional `[preview]` section in `wokwi.toml`:

```toml
[preview]
delay_ms = 1500
width = 1200
height = 675
offset_left = 0   # optional fine-tune after auto-center
offset_top = 0
```

`delay_ms` controls how long the simulation runs before the screenshot (e.g. catch LED on-state). The preview reflects the compile-time `DEMO` constant in each sketch.

Circuits are **auto-centered** in the preview frame when the diagram has only one part (e.g. `00-blink`). Multi-part diagrams are left as-is. Optional `offset_left` / `offset_top` in `[preview]` fine-tune any project.

See [scripts/wokwi-preview/README.md](scripts/wokwi-preview/README.md) for troubleshooting.

## Example in this repo

See [projects/00-blink/](projects/00-blink/) — minimal Uno-only diagram for the built-in LED blink sketch.

## AI-assisted workflow

The agent can reliably generate and update:

- `diagram.json` from a pin list or `.ino` file
- `docs/wiring.md` pin tables
- `wokwi.toml` firmware paths
- `schematics/preview.png` via the `wokwi-preview` skill

Prefer Wokwi over Fritzing when asking the agent to create wiring from a description ([FRITZING.md](FRITZING.md) compares both).

## Further reading

- [Getting started with Wokwi for VS Code](https://docs.wokwi.com/vscode/getting-started)
- [Arduino Uno part reference](https://docs.wokwi.com/parts/wokwi-arduino-uno)
