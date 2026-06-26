# 00-blink — Built-in LED Blink

**Board:** Arduino Uno  
**Minimal blink sketch using the onboard LED.**

## Goal

Toggle the built-in LED on and off every second. Serves as the first template project and verifies your Arduino IDE upload workflow.

## Quick start (Arduino IDE)

1. Open `projects/00-blink/` in Arduino IDE (`File → Open`).
2. Select board: **Arduino Uno**.
3. Select port: your USB serial port (e.g. `COM3` on Windows).
4. Click **Upload**.

## Expected behavior

The orange LED near pin 13 (marked `L`) blinks on for 1 second, off for 1 second, repeatedly.

## Simulation (Wokwi)

This project includes `diagram.json` and `wokwi.toml` for [Wokwi](https://wokwi.com/) simulation in Cursor/VS Code. See [WOKWI.md](../../WOKWI.md) for full setup.

1. Install the **Wokwi for VS Code** extension.
2. Compile firmware into `build/`:

   ```bash
   cd projects/00-blink
   arduino-cli compile --fqbn arduino:avr:uno --output-dir build 00-blink.ino
   ```

3. Run **Wokwi: Start Simulator** (`F1`).

The README teaser [`schematics/preview.png`](schematics/preview.png) is generated locally with the `wokwi-preview` skill or `npm run capture-preview` (see [WOKWI.md](../../WOKWI.md)).

The diagram contains only the Arduino Uno — the built-in LED (pin 13) is part of the board and blinks in simulation without extra wiring.

## Documentation

- [Overview](docs/overview.md)
- [Hardware](docs/hardware.md)
- [Wiring](docs/wiring.md)
