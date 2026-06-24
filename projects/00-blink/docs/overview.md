# Overview — 00-blink

## Summary

This is the simplest Arduino sketch: it blinks the built-in LED on the Arduino Uno. Use it to confirm that your edit → compile → upload workflow works end to end.

## Behavior

1. On power-up, pin 13 is configured as an output.
2. The LED turns **on** for 1000 ms.
3. The LED turns **off** for 1000 ms.
4. Steps 2–3 repeat forever.

## Configuration

| Constant | Value | Purpose |
|----------|-------|---------|
| `LED_PIN` | `LED_BUILTIN` | Onboard LED (pin 13 on Uno) |
| Blink interval | 1000 ms | Hardcoded in `delay()` calls |

To change the blink speed, adjust the `delay()` values in `00-blink.ino`.
