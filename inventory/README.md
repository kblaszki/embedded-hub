# Parts inventory

Catalog of boards and components you **physically own** (or plan to buy). Used to suggest realistic next projects in this repo.

## How to use

1. Edit **[parts.yaml](parts.yaml)** — primary source for the AI agent (structured, easy to parse).
2. Optionally add detail in category Markdown files below.
3. Set `status` to `owned`, `planned`, or `wishlist` and fill in `qty`.
4. Link parts to repo projects via `used_in` (e.g. `05-lcd-hello`).

## Files

| File | Contents |
|------|----------|
| [kits/](kits/) | Learning kit manifests |
| [parts.yaml](parts.yaml) | Master list — boards, modules, passives, tools |
| [boards.md](boards.md) | MCU boards (Uno, ESP32) |
| [passives.md](passives.md) | Resistors, capacitors, LEDs, buttons |
| [sensors.md](sensors.md) | Temperature, distance, light, etc. |
| [actuators.md](actuators.md) | Motors, servos, relays, buzzers |
| [displays.md](displays.md) | LCD, OLED, 7-segment, LED matrix |
| [tools.md](tools.md) | Breadboard, wires, multimeter, power supply |

| [examples.md](examples.md) | Copy-paste YAML blocks for new parts |

## Field reference (`parts.yaml`)

| Field | Meaning |
|-------|---------|
| `id` | Stable slug (kebab-case) |
| `name` | Human-readable name |
| `qty` | How many you have (`0` if wishlist only) |
| `status` | `owned` \| `planned` \| `wishlist` |
| `interface` | `gpio`, `pwm`, `analog`, `i2c`, `spi`, `uart`, `onewire`, `none` |
| `voltage` | `5v`, `3v3`, or `both` |
| `used_in` | Project folder names under `projects/` that use this part |
| `kits` | Learning kit id(s) that included this part (see [kits/](kits/)) |
| `notes` | Free text (package, module vs bare chip, etc.) |

## Projects already in this repo

Cross-check [../README.md](../README.md#projects). When suggesting new work, prefer skills/topics not yet covered and parts marked `owned`.

| # | Project | Main parts practiced |
|---|---------|----------------------|
| 00 | blink | Arduino Uno, built-in LED |
| 01 | led-buttons | LED, resistor, push buttons |
| 02 | rgb-led | RGB LED, PWM |
| 03 | buzzer | Buzzer (active/passive) |
| 04 | shift-register | 74HC595, LEDs, 7-segment, LDR |

## Asking for project ideas

In Cursor, ask e.g. *“What should I build next?”* — the agent should read `inventory/parts.yaml` and existing `projects/` before proposing `05-name` ideas.

Optional skill: [`.cursor/skills/suggest-embedded-projects/`](../.cursor/skills/suggest-embedded-projects/SKILL.md).
