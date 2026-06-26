# Lesson 19 — IR receiver with remote control and stepper motor

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Decode IR remote button presses with a VS1838B receiver and control a 28BYJ-48 stepper motor via the ULN2003 driver board.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Infrared receiver module | `ir-receiver` |
| 1 | IR remote handset | `ir-remote` |
| 1 | Stepper motor 28BYJ-48 | `stepper-28byj-48` |
| 1 | ULN2003 stepper driver board | `uln2003-stepper-driver` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 6 — 74HC595](06-74hc595-eight-leds.md) (digital I/O)

## Key concepts

- IR protocols (NEC, Sony, RC5 — depends on remote)
- `IRremote` decode in `loop()`
- `Stepper` library — steps per revolution, direction

## Libraries

- `IRremote` (use a pin-compatible fork for your Arduino core version)
- `Stepper` (Arduino built-in)

## Repo project

[projects/11-ir-stepper](../../projects/11-ir-stepper/)
