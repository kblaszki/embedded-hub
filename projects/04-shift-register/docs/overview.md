# Overview — 04-shift-register

## Summary

Three demos share one 74HC595 pinout (data D8, latch D9, clock D10). Each demo uses `shiftOut()` to send an 8-bit pattern to the shift register outputs Q0–Q7.

## Behavior

### LedChase (default)

1. Configure DATA, LATCH, and CLOCK as outputs.
2. Each second, light exactly one of eight LEDs by setting a single bit in the output byte.
3. The lit position advances Q0 → Q7, then wraps to Q0.

### SevenSegment

1. Same shift-register pins.
2. Replace the 8-LED bank with a single common-cathode 7-segment display wired to Q0–Q7 (segment mapping in sketch).
3. Display digits 0 through 9, one second each, then repeat.

### LightBar

1. Same shift-register pins plus a photoresistor voltage divider on A0.
2. Read ambient light every 50 ms.
3. Map the analog value to 0–8 lit LEDs on the bar (brighter ambient → fewer LEDs lit).

## Configuration

| Constant | Default | Purpose |
|----------|---------|---------|
| `DEMO` | `LedChase` | `LedChase`, `SevenSegment`, or `LightBar` |
| `DATA_PIN` | 8 | 74HC595 DS (serial data) |
| `LATCH_PIN` | 9 | 74HC595 STCP (storage latch) |
| `CLOCK_PIN` | 10 | 74HC595 SHCP (shift clock) |
| `LIGHT_PIN` | A0 | Photoresistor analog input (LightBar only) |

Change `constexpr ShiftDemo DEMO = LedChase;` at the top of `04-shift-register.ino`, rewire if needed per [wiring.md](wiring.md), then re-upload.

## Legacy note

This project merges four earlier exercises: 74HC595 LED chase, photoresistor bar graph, and two 7-segment counter sketches. All now use the unified pinout above.
