# Hardware — 01-led-buttons

## Board

| Item | Value |
|------|-------|
| MCU board | Arduino Uno R3 |
| Voltage | 5 V |
| Clock | 16 MHz |

## Components

| Component | Qty | Notes |
|-----------|-----|-------|
| Arduino Uno R3 | 1 | Any compatible Uno clone |
| LED | 1 | Any color; 5 mm through-hole is typical |
| Resistor 220 Ω | 1 | Current limit for LED |
| Tactile push button | 2 | Momentary, normally open |
| Breadboard + jumper wires | 1 set | For prototyping |
| USB cable | 1 | Data-capable |

## Libraries

None. Uses only the Arduino core (`pinMode`, `digitalRead`, `digitalWrite`, `delay`).
