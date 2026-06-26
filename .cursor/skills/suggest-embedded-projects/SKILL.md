---
name: suggest-embedded-projects
description: Suggests next embedded learning projects from inventory/parts.yaml and existing projects in this repo. Use when the user asks what to build next, project ideas, learning path, or which parts to use.
---

# Suggest Embedded Projects

## Before proposing anything

1. Read [inventory/parts.yaml](../../inventory/parts.yaml) — only suggest projects buildable with `status: owned` parts (or note what to buy if `planned` / `wishlist`).
2. List existing [projects/](../../projects/) — do not duplicate topics already covered (see [inventory/README.md](../../inventory/README.md#projects-already-in-this-repo)).
3. Match board voltage (Uno = 5 V) and interfaces the user actually has.

## Output format

Propose **3–5 ideas**, ordered from easier to harder. For each:

```markdown
### 05-short-name — Title

- **Parts used:** (from inventory ids)
- **New skills:** e.g. I2C, millis() timing, interrupts
- **Why now:** one sentence after 04-shift-register
- **Wokwi:** yes/no (can we simulate before wiring?)
```

Use the next free ordinal (`05`, `06`, …) from `projects/`.

## Learning path hints

| Stage | Topics | Example parts |
|-------|--------|---------------|
| Digital I/O | blink, buttons | LED, button |
| PWM / analog | dimming, sensors | RGB LED, LDR |
| Expansion | fewer pins, more outputs | 74HC595 |
| Buses | I2C, SPI | LCD backpack, OLED |
| Timing | non-blocking code | multiple inputs + display |
| Communication | UART, later WiFi | ESP32 when in inventory |

## If inventory is incomplete

Tell the user which `parts.yaml` fields to fill (especially `qty` and `status`) and offer generic ideas marked **requires:** part name.

## Creating a chosen project

When the user picks an idea, use the `new-embedded-project` skill to scaffold `projects/NN-name/`.
