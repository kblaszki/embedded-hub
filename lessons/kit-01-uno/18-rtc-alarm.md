# Lesson 18 — DS1302 real-time module and LED

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Set a time-based alarm with a DS1302 RTC module; turn on an LED when the programmed time is reached.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Real-time clock module (DS1302) | `rtc-module` |
| 1 | LED 5 mm + resistor | `led-5mm`, `resistor-220` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 1 — Blinking LED](01-blinking-led.md)

## Key concepts

- RTC keeps time with backup battery (CR2032 on module)
- DS1302 3-wire interface (CLK, DAT, RST)
- Compare `hour:minute:second` to alarm target

## Libraries

- DS1302 library (e.g. `Ds1302`, `virtuabotixRTC`, or `RTClib` depending on wiring)

## Repo project

[projects/10-rtc-alarm](../../projects/10-rtc-alarm/)

## Notes

Install backup battery on the RTC module if not already fitted. Chip may be DS1302 or DS3231 — verify silkscreen on `rtc-module`.
