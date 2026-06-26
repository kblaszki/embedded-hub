# Lesson 13 — Sound sensor and 5 V relay

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Use a sound sensor (KY-037 class) to detect noise above a threshold and switch a 5 V relay module to turn on an LED (or load).

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Sound sensor module | `sound-sensor` |
| 1 | Relay module (1 channel) | `relay-1ch` |
| 1 | LED 5 mm + resistor | `led-5mm`, `resistor-220` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 12 — Joystick](12-joystick.md)

## Key concepts

- Analog vs digital output on sound module
- Sensitivity trim pot on KY-037
- Relay as electrically isolated switch — do not drive heavy loads from Arduino 5 V pin

## Libraries

None.

## Repo project

[projects/07-joystick-sound-relay](../../projects/07-joystick-sound-relay/) — set `MODE` to `SoundRelay`
