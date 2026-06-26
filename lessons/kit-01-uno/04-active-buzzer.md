# Lesson 4 — Active buzzer

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Drive an active buzzer that produces a fixed tone when power is applied — simple digital ON/OFF control.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Active buzzer module | `buzzer-module` or `buzzer-active` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 3 — RGB LED](03-rgb-led.md)

## Key concepts

- Active buzzer: internal oscillator, tone fixed by hardware
- Short beeps with `digitalWrite()` + `delay()`
- No `tone()` required

## Libraries

None.

## Repo project

[projects/03-buzzer](../../projects/03-buzzer/) — set `BUZZER` to `Active`
