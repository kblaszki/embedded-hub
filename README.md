# Embedded Hub

Monorepo for embedded firmware projects: Arduino Uno today, ESP32 and robotics later.

## Workflow

1. Edit source in **Cursor** (or any editor).
2. Open the project sketch folder in **Arduino IDE** (`File → Open`).
3. Select board and serial port, then **Upload**.

## Project layout

All firmware lives under `projects/`. Each project uses this naming pattern:

```
projects/NN-kebab-name/
```

- `NN` — two-digit ordinal (`00`, `01`, `02`, …)
- `kebab-name` — short descriptive slug

Every project should contain:

- `NN-name.ino` — main sketch (folder name must match `.ino` filename for Arduino IDE)
- `README.md` — quick start and upload instructions
- `docs/` — detailed documentation in Markdown

See [`.cursor/README.md`](.cursor/README.md) for AI agent rules and skills used in this repo.

## Circuit diagrams and simulation

| Tool | Guide | Role in this repo |
|------|-------|-------------------|
| **Wokwi** | [WOKWI.md](WOKWI.md) | Primary — `diagram.json` + simulation in Cursor |
| **Fritzing** | [FRITZING.md](FRITZING.md) | Optional — breadboard/PCB diagrams (`.fzz`) |

## Projects

| # | Name | Board | Description |
|---|------|-------|-------------|
| 00 | [00-blink](projects/00-blink/) | Arduino Uno | Built-in LED blink — first template project |

## Optional per-project folders

Add these when a project needs them:

| Path | Purpose |
|------|---------|
| `diagram.json`, `wokwi.toml` | Wokwi circuit + simulation ([WOKWI.md](WOKWI.md)) |
| `lib/` | Vendored Arduino libraries |
| `schematics/` | Static diagrams (Fritzing SVG, KiCad, PDF) — see [FRITZING.md](FRITZING.md) |
| `photos/` | Build and breadboard photos |
| `docs/troubleshooting.md` | Upload/runtime issue notes |
| `docs/changelog.md` | Firmware version history |
