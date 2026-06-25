# Overview — 02-rgb-led

## Summary

Drives a common-cathode RGB LED using PWM on pins 3, 5, and 6. Each loop cycle updates one color channel to a random brightness while holding the other two.

## Behavior

1. On startup, all three channels are set to 255 (white).
2. `randomSeed(analogRead(A0))` seeds the RNG from floating A0 noise.
3. Every `COLOR_STEP_MS` (1000 ms):
   - Hold current color, then set red to `random(0, 256)`.
   - Hold, then set green to a new random value.
   - Hold, then set blue to a new random value.
4. The sequence repeats indefinitely.

## Configuration

| Constant | Default | Purpose |
|----------|---------|---------|
| `RED_PIN` | 3 | Red channel (PWM) |
| `GREEN_PIN` | 5 | Green channel (PWM) |
| `BLUE_PIN` | 6 | Blue channel (PWM) |
| `COLOR_STEP_MS` | 1000 | Delay between channel updates |

Pins 3, 5, and 6 support hardware PWM on the Arduino Uno.
