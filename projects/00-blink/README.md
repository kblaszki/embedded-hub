# 00-blink — Built-in LED Blink

**Board:** Arduino Uno  
**Minimal blink sketch using the onboard LED.**

<img src="schematics/preview.png" width="560" alt="Wokwi simulation preview — Arduino Uno built-in LED blink" />

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

The diagram contains only the Arduino Uno — the built-in LED (pin 13) is part of the board and blinks in simulation without extra wiring. Regenerate the preview with the `wokwi-preview` skill (see [WOKWI.md](../../WOKWI.md)).

## Documentation

- [Overview](docs/overview.md)
- [Hardware](docs/hardware.md)
- [Wiring](docs/wiring.md)
