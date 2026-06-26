# Lesson 1 — Flashing LED / Blinking LED

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Turn the built-in LED on and off at a fixed interval. This verifies the Arduino IDE install, USB connection, and upload workflow.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | USB cable | `usb-cable-uno` |

## Previous knowledge

None — first lesson.

## Key concepts

- `setup()` runs once; `loop()` repeats forever
- `pinMode()` and `digitalWrite()` for digital outputs
- Built-in LED on pin 13 (`LED_BUILTIN`)
- `delay()` for timing (blocking)

## Libraries

None (Arduino core only).

## Repo project

[projects/00-blink](../../projects/00-blink/)
