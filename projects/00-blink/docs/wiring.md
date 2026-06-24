# Wiring — 00-blink

## Pin map

| Pin | Function | Connected to |
|-----|----------|--------------|
| D13 | `LED_BUILTIN` | Onboard LED (marked `L` on the board) |

No external wiring is needed for this project.

## Wokwi simulation

The [diagram.json](../diagram.json) in this folder contains only a `wokwi-arduino-uno` part. The onboard LED is simulated internally on pin 13 — no `connections` entries are required.

To run the simulator, see the **Simulation (Wokwi)** section in [README.md](../README.md).

## Built-in LED

The Arduino Uno has a surface-mount LED connected to pin 13 through a current-limiting resistor. The sketch drives this LED directly — no breadboard required.

## Optional: external LED

If you want to blink an external LED instead of (or in addition to) the onboard one:

| Connection | Pin |
|------------|-----|
| LED anode (+) → resistor (220 Ω) → | D13 |
| LED cathode (−) → | GND |

Use a 220 Ω resistor to limit current. Longer leg of the LED is typically the anode.

## Notes

- Pin 13 also drives the built-in LED when used for external wiring — both will blink together unless you use a different pin.
- Uno logic is 5 V; do not connect 3.3 V-only devices directly to I/O pins without level shifting.
