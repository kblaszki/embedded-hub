# Overview — 03-buzzer

## Summary

Demonstrates two buzzer types on pin 12: an active buzzer driven with `digitalWrite`, and a passive buzzer driven with `tone()` / `noTone()`.

## Behavior

### Passive (default)

1. Pin 12 is configured as output.
2. Each loop plays eight notes (Do, Re, Mi, Fa, Sol, La, Si, Do2) at 500 ms each.
3. `noTone()` stops output; 500 ms pause; scale repeats.

### Active

1. Pin 12 is configured as output.
2. Five rapid beep pairs (50 ms HIGH, 50 ms LOW).
3. 5 s silence, then repeat.

## Configuration

| Constant | Default | Purpose |
|----------|---------|---------|
| `BUZZER` | `Passive` | Select `Active` or `Passive` |
| `BUZZER_PIN` | 12 | Buzzer signal pin |
| `NOTE_DURATION_MS` | 500 | Note length for passive mode |

Change `constexpr BuzzerType BUZZER = Passive;` at the top of `03-buzzer.ino` to match your module, then re-upload.

## Hardware note

Active and passive buzzers look similar but are not interchangeable for this sketch. Active units contain an oscillator; passive units need a PWM square wave from `tone()`.
