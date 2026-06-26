# Lesson 17 — RGB LED and 4×4 matrix keypad

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Build a simple door-lock UI: enter a passcode on a 4×4 membrane keypad; show success (green) or denied (red) on an RGB LED.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | 4×4 matrix membrane keypad | `keypad-4x4` |
| 1 | RGB LED module or discrete RGB | `rgb-led-module` or `rgb-led-cc` |
| — | Resistors, jumper wires | `resistor-220`, `jumper-wires` |
| 1 | Breadboard | `breadboard` |

## Previous knowledge

- [Lesson 3 — RGB LED](03-rgb-led.md)

## Key concepts

- Keypad row/column scanning (8 pins for 16 keys)
- Storing entered digits vs secret PIN
- RGB feedback colors

## Libraries

- `Keypad` (Mark Stanley / Chris Young)

## Repo project

[projects/09-keypad-door](../../projects/09-keypad-door/)
