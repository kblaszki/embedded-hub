# Hardware — 00-blink

## Board

| Item | Value |
|------|-------|
| MCU board | Arduino Uno R3 |
| Voltage | 5 V |
| Clock | 16 MHz |
| USB interface | Type-B (programming and power) |

## Components

No external components required. The sketch uses only the onboard LED connected to digital pin 13.

| Component | Qty | Notes |
|-----------|-----|-------|
| Arduino Uno R3 | 1 | Any compatible Uno clone works |
| USB cable | 1 | Must support data, not charge-only |

## Libraries

None. Uses only the Arduino core (`pinMode`, `digitalWrite`, `delay`).
