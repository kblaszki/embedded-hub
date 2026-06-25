# Wiring — 03-buzzer

## Pin map

| Pin | Function | Connected to |
|-----|----------|--------------|
| D12 | `BUZZER_PIN` | Buzzer signal (`S` or `+` on module) |
| 5V | Power | Buzzer VCC (if 3-pin module) |
| GND | Ground | Buzzer GND |

## 3-pin buzzer module (typical)

| Connection | Pin |
|------------|-----|
| Signal `S` | D12 |
| `VCC` / `+` | 5V |
| `GND` / `−` | GND |

## 2-pin passive buzzer

| Connection | Pin |
|------------|-----|
| One leg | D12 |
| Other leg | GND |

## Wokwi simulation

The [diagram.json](../diagram.json) uses `wokwi-buzzer` with positive on D12 and negative on GND. Use **Passive** mode in the sketch.

## Notes

- Do not drive an active buzzer with `tone()` — it may not change pitch meaningfully.
- Passive buzzers on Uno work well with `tone()` on any digital pin; pin 12 has no PWM requirement for `tone()`.
