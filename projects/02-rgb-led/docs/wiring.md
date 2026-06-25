# Wiring — 02-rgb-led

## Pin map

| Pin | Function | Connected to |
|-----|----------|--------------|
| D3 | `RED_PIN` | Red channel via 220 Ω |
| D5 | `GREEN_PIN` | Green channel via 220 Ω |
| D6 | `BLUE_PIN` | Blue channel via 220 Ω |
| GND | Ground | RGB common cathode |

## RGB LED (common cathode)

| Connection | Pin |
|------------|-----|
| D3 → 220 Ω → Red anode | D3 |
| D5 → 220 Ω → Green anode | D5 |
| D6 → 220 Ω → Blue anode | D6 |
| Common cathode → GND | GND |

## Wokwi simulation

The [diagram.json](../diagram.json) uses `wokwi-rgb-led` with `"common": "cathode"` (required — the Wokwi default is common anode, which inverts PWM logic). `COM` goes to GND; R/G/B on D3, D5, D6.

## Notes

- Uno PWM pins: D3, D5, D6, D9, D10, D11. This project uses D3, D5, D6.
- `analogWrite()` accepts 0–255 on Uno (8-bit PWM).
- Leave A0 unconnected for random seed noise, or wire a 10 kΩ pull-down if the pin floats inconsistently.
