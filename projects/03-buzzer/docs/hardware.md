# Hardware — 03-buzzer

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
| Buzzer module | 1 | Active **or** passive (set `BUZZER` in code) |
| Breadboard + jumper wires | 1 set | Optional; many modules have pins |
| USB cable | 1 | Data-capable |

## Buzzer types

| Type | How it works | Sketch mode |
|------|--------------|-------------|
| Active | Beeps at fixed frequency when pin is HIGH | `Active` |
| Passive | Needs PWM frequency from `tone()` | `Passive` |

Typical 3-pin modules: `S` (signal) → D12, `+`/`VCC` → 5V, `−`/`GND` → GND. Some 2-pin modules connect directly between D12 and GND (check your datasheet).

## Libraries

None. Uses Arduino core (`pinMode`, `digitalWrite`, `tone`, `noTone`, `delay`).
