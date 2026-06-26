# Lesson 12 — Analog joystick module

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Read X and Y axes of a KY-023 style joystick with `analogRead()` and map values to control an output such as LED brightness.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | XY joystick module | `joystick-xy` |
| 1 | LED 5 mm + resistor | `led-5mm`, `resistor-220` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 7 — Photoresistor](07-photoresistor.md)

## Key concepts

- Two potentiometers (VRx, VRy) + push switch (SW)
- `map()` from 0–1023 to PWM 0–255
- Center dead zone handling

## Libraries

None.

## Repo project

[projects/07-joystick-sound-relay](../../projects/07-joystick-sound-relay/) — set `MODE` to `Joystick`
