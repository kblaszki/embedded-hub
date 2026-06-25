# Hardware — 04-shift-register

## Board

| Item | Value |
|------|-------|
| MCU board | Arduino Uno R3 |
| Voltage | 5 V |
| Clock | 16 MHz |

## Shared components (all demos)

| Component | Qty | Notes |
|-----------|-----|-------|
| Arduino Uno R3 | 1 | Any compatible Uno clone |
| 74HC595 shift register | 1 | 8-bit SIPO; DIP-16 |
| Breadboard + jumper wires | 1 set | For prototyping |
| USB cable | 1 | Data-capable |

## Per-demo additions

| Demo | Extra components |
|------|------------------|
| LedChase | LED × 8, 220 Ω resistor × 8 |
| SevenSegment | Common-cathode 7-segment display × 1, 220 Ω resistor × 8 (or segment resistors as needed) |
| LightBar | LED × 8, 220 Ω × 8, photoresistor × 1, 10 kΩ resistor × 1 (voltage divider) |

## 74HC595 control pins

| 74HC595 pin | Connect to |
|-------------|------------|
| DS | Arduino D8 |
| SHCP | Arduino D10 |
| STCP | Arduino D9 |
| OE | GND (output always enabled) |
| MR | 5V (disable reset) |
| VCC | 5V |
| GND | GND |

## Libraries

None. Uses Arduino core (`pinMode`, `digitalWrite`, `shiftOut`, `analogRead`, `delay`).
