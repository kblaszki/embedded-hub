# 01-led-buttons — External LED and Push Buttons

**Board:** Arduino Uno  
**External LED blink or two-button on/off control.**

## Goal

Learn digital output on an external LED and digital input with internal pull-up resistors on two push buttons.

## Quick start (Arduino IDE)

1. Open `projects/01-led-buttons/` in Arduino IDE (`File → Open`).
2. Select board: **Arduino Uno**.
3. Select port: your USB serial port (e.g. `COM3` on Windows).
4. Set `DEMO` in `01-led-buttons.ino` to `DemoBlink` or `DemoButtons` (default: `DemoButtons`).
5. Wire the circuit per [docs/wiring.md](docs/wiring.md).
6. Click **Upload**.

## Expected behavior

**DemoButtons (default):** Press the ON button to turn the LED on; press OFF to turn it off. Buttons use `INPUT_PULLUP` — pressed reads `LOW`.

**DemoBlink:** The LED follows a fixed on/off timing pattern (3 s on, 2 s off, 1 s on, 2 s off).

## Simulation (Wokwi)

This project includes `diagram.json` and `wokwi.toml` for [Wokwi](https://wokwi.com/) simulation. See [WOKWI.md](../../WOKWI.md).

1. Install the **Wokwi for VS Code** extension.
2. Compile firmware into `build/`:

   ```bash
   cd projects/01-led-buttons
   arduino-cli compile --fqbn arduino:avr:uno --output-dir build 01-led-buttons.ino
   ```

3. Run **Wokwi: Start Simulator** (`F1`).

Use `DemoButtons` mode for the simulated circuit (two buttons + LED).

The README teaser [`schematics/preview.png`](schematics/preview.png) reflects the compile-time `DEMO` constant — regenerate with the `wokwi-preview` skill when the sketch or diagram changes.

## Documentation

- [Overview](docs/overview.md)
- [Hardware](docs/hardware.md)
- [Wiring](docs/wiring.md)
