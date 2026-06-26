# Lesson 3 — RGB LED control

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Mix red, green, and blue with PWM to produce different colors on an RGB LED or RGB module.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | RGB LED module or discrete RGB LED | `rgb-led-module` or `rgb-led-cc` |
| 3 | Resistor 220 Ω | `resistor-220` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 2 — LED + push button](02-led-push-button.md)

## Key concepts

- PWM on `analogWrite()` (pins 3, 5, 6, 9, 10, 11 on Uno)
- Common cathode vs common anode wiring
- Color mixing (R+G = yellow, etc.)

## Libraries

None.

## Repo project

[projects/02-rgb-led](../../projects/02-rgb-led/)
