# Lesson 7 — Photoresistor

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Read ambient light with a photoresistor (LDR) module and use the value to control outputs — e.g. LEDs via the 74HC595 as a light bar.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Photoresistor (LDR) module | `photoresistor` |
| 1 | 74HC595 shift register | `74hc595` |
| 8 | LED 5 mm | `led-5mm` |
| — | Resistors, jumper wires | `resistor-220`, `jumper-wires` |
| 1 | Breadboard | `breadboard` |

## Previous knowledge

- [Lesson 6 — 74HC595 eight LEDs](06-74hc595-eight-leds.md)

## Key concepts

- `analogRead()` on A0–A5 (10-bit, 0–1023)
- LDR voltage divider on module PCB
- Mapping sensor value to number of lit LEDs

## Libraries

None.

## Repo project

[projects/04-shift-register](../../projects/04-shift-register/) — set `DEMO` to `LightBar`
