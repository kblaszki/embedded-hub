# Wiring — 01-led-buttons

## Pin map

| Pin | Function | Connected to |
|-----|----------|--------------|
| D9 | `LED_PIN` | LED anode via 220 Ω resistor |
| D10 | `ON_BUTTON_PIN` | ON button (other leg to GND) |
| D11 | `OFF_BUTTON_PIN` | OFF button (other leg to GND) |
| GND | Ground | LED cathode, both buttons |

## LED

| Connection | Pin |
|------------|-----|
| D9 → 220 Ω → LED anode (+) | D9 |
| LED cathode (−) → GND | GND |

## Push buttons

Each button uses the Uno's internal pull-up (`INPUT_PULLUP`):

| Button | Pin | Wiring |
|--------|-----|--------|
| ON | D10 | One leg to D10, other leg to GND |
| OFF | D11 | One leg to D11, other leg to GND |

When not pressed, the pin reads `HIGH`. When pressed, the button connects the pin to GND → reads `LOW`.

## Wokwi simulation

The [diagram.json](../diagram.json) matches **DemoButtons**: red LED on D9, green button on D10 (ON), blue button on D11 (OFF).

## Notes

- `DemoBlink` uses only the LED on D9; buttons are not read in that mode.
- Use 220 Ω (or 330 Ω) for the LED. Longer leg is usually the anode.
