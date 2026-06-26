# Lesson 2 — LED control with push button

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Control an external LED with a momentary push button — press to turn the LED on or off.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | LED 5 mm | `led-5mm` |
| 1 | Resistor 220 Ω (from assortment) | `resistor-220` |
| 1 | Tactile push button or key switch module | `pushbutton-tactile` or `key-switch` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 1 — Blinking LED](01-blinking-led.md)

## Key concepts

- External LED with series current-limiting resistor
- `INPUT_PULLUP` for buttons (active LOW when pressed)
- Reading `digitalRead()` in `loop()`

## Libraries

None.

## Repo project

[projects/01-led-buttons](../../projects/01-led-buttons/)
