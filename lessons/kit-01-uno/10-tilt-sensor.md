# Lesson 10 — Tilt sensor

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Detect inclination with a ball / tilt switch module and trigger an alarm output when the board tilts beyond a threshold angle.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Tilt / ball switch module | `tilt-switch` |
| 1 | LED 5 mm + resistor | `led-5mm`, `resistor-220` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 2 — LED + push button](02-led-push-button.md)

## Key concepts

- Digital tilt switch (SW-520D class)
- `digitalRead()` for orientation alarm
- Debouncing optional for mechanical bounce

## Libraries

None.

## Repo project

[projects/06-proximity-alarms](../../projects/06-proximity-alarms/) — set `MODE` to `Tilt`
