# Lesson 9 — 74HC595 and 4-digit 7-segment display

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Drive a 4-digit common-cathode 7-segment display through the 74HC595 to show and scroll characters (e.g. HALO, 0000, EEEE).

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | 74HC595 shift register | `74hc595` |
| 1 | 4-digit 7-segment display | `7seg-4digit` |
| 4 | Resistor 220 Ω | `resistor-220` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 8 — 74HC595 + 1-digit 7-segment](08-74hc595-7seg.md)

## Key concepts

- Multiplexing four digits with shared segment lines
- Digit select via 595 outputs or direct pins
- Segment patterns for numbers and limited letters

## Libraries

None.

## Repo project

[projects/05-four-digit-7seg](../../projects/05-four-digit-7seg/)
