# Lesson 5 — Passive buzzer

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Generate musical notes with a passive buzzer using the `tone()` function and PWM frequency control.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Passive buzzer module | `buzzer-passive-small` or `buzzer-module` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 4 — Active buzzer](04-active-buzzer.md)

## Key concepts

- Passive buzzer needs AC/square wave — `tone(pin, frequency)`
- `noTone()` to stop
- Note frequencies (Hz) for scales

## Libraries

None.

## Repo project

[projects/03-buzzer](../../projects/03-buzzer/) — set `BUZZER` to `Passive`
