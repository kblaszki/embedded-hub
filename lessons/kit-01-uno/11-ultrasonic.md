# Lesson 11 — HC-SR04 ultrasonic sensor module

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Measure distance with an HC-SR04 ultrasonic module and sound an active buzzer when an object is closer than a set threshold (e.g. 50 cm).

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Ultrasonic sensor module (HC-SR04) | `ultrasonic-hcsr04` |
| 1 | Active buzzer module | `buzzer-active` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 4 — Active buzzer](04-active-buzzer.md)

## Key concepts

- TRIG pulse and ECHO timing
- Distance formula: cm ≈ pulse µs / 58
- Presence alarm threshold

## Libraries

None (manual pulse timing) or NewPing (optional).

## Repo project

[projects/06-proximity-alarms](../../projects/06-proximity-alarms/) — set `MODE` to `Ultrasonic`

## Notes

Listed in the TENSTAR kit material list. Also in [inventory/parts.yaml](../../inventory/parts.yaml) via kit 01 manifest entry `ultrasonic-hcsr04`.
