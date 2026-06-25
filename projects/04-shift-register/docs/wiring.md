# Wiring — 04-shift-register

## Shared shift-register pins

| Pin | Function | 74HC595 |
|-----|----------|---------|
| D8 | `DATA_PIN` | DS |
| D9 | `LATCH_PIN` | STCP |
| D10 | `CLOCK_PIN` | SHCP |
| 5V | Power | VCC, MR |
| GND | Ground | GND, OE |

Tie **OE** to GND and **MR** to 5V unless you need output disable or hardware reset.

## Demo: LedChase

Connect Q0–Q7 each to an LED anode through 220 Ω; all LED cathodes to GND.

| 74HC595 output | Load |
|----------------|------|
| Q0–Q7 | LED + 220 Ω to GND |

`shiftOut` uses **MSBFIRST** in this demo.

## Demo: SevenSegment

Replace the 8-LED bank with one common-cathode 7-segment display. Map segments to Q0–Q7 per your display pinout; the sketch uses this bit layout:

```
0bABCDEFGX
```

Segment cathode (COM) goes to GND. If segments are dim, use 220 Ω resistors on each segment line.

`shiftOut` uses **LSBFIRST** in this demo.

## Demo: LightBar

Same 8-LED wiring on Q0–Q7 as LedChase, plus a photoresistor divider on A0:

| Connection | Pin |
|------------|-----|
| 5V → photoresistor → A0 → 10 kΩ → GND | A0 |

`shiftOut` uses **LSBFIRST**. Brighter light lowers the analog reading and reduces the number of lit LEDs.

## Wokwi simulation

The [diagram.json](../diagram.json) implements **LedChase**: Uno, 74HC595, eight red LEDs on Q0–Q7 with resistors.

For **SevenSegment** and **LightBar**, build the matching breadboard on hardware using the tables above; Wokwi diagrams for those variants can be added later.

## Notes

- Only one output load type (8 LEDs **or** 7-segment) should be connected to Q0–Q7 at a time.
- Keep wires short near the shift register; decouple VCC with a 0.1 µF capacitor if you see flicker (optional).
