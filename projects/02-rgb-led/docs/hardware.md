# Hardware — 02-rgb-led

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
| RGB LED (common cathode) | 1 | 4 pins: R, G, B, common cathode |
| Resistor 220 Ω | 3 | One per color channel |
| Breadboard + jumper wires | 1 set | For prototyping |
| USB cable | 1 | Data-capable |

## Libraries

None. Uses only the Arduino core (`pinMode`, `analogWrite`, `analogRead`, `random`, `delay`).

## LED type

This sketch targets a **common cathode** RGB LED (longest pin or marked `COM` goes to GND). For common anode, invert logic or use `255 - value` in `setColor()`.
