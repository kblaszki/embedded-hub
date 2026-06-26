# Lesson 6 — Eight LEDs with 74HC595

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Use a 74HC595 shift register to drive eight LEDs from three Arduino pins — serial-in, parallel-out expansion.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | 74HC595 shift register | `74hc595` |
| 8 | LED 5 mm | `led-5mm` |
| 8 | Resistor 220 Ω | `resistor-220` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 5 — Passive buzzer](05-passive-buzzer.md)

## Key concepts

- `shiftOut()` — data, clock, latch pins
- SIPO: serial in, parallel out (8 bits)
- LED chase pattern with bit shifting

## Libraries

None.

## Repo project

[projects/04-shift-register](../../projects/04-shift-register/) — set `DEMO` to `LedChase`
