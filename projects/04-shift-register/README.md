# 04-shift-register — 74HC595 Output Expansion

**Board:** Arduino Uno  
**Shift register demos: LED chase, 7-segment digits, photoresistor bar graph.**

## Goal

Learn the 74HC595 serial-in parallel-out shift register with `shiftOut()` — expand 3 Arduino pins into 8 outputs.

## Quick start (Arduino IDE)

1. Open `projects/04-shift-register/` in Arduino IDE (`File → Open`).
2. Select board: **Arduino Uno**.
3. Select port: your USB serial port (e.g. `COM3` on Windows).
4. Set `DEMO` in `04-shift-register.ino` to match your wired circuit (default: `LedChase`).
5. Wire per [docs/wiring.md](docs/wiring.md) for the selected demo.
6. Click **Upload**.

## Expected behavior

**LedChase (default):** One of eight LEDs lights at a time, stepping every second.

**SevenSegment:** A single 7-segment display cycles through digits 0–9, one second each.

**LightBar:** A photoresistor on A0 drives how many LEDs in an 8-LED bar are lit (more light → fewer LEDs).

## Simulation (Wokwi)

This project includes `diagram.json` and `wokwi.toml` for [Wokwi](https://wokwi.com/) simulation. See [WOKWI.md](../../WOKWI.md).

1. Install the **Wokwi for VS Code** extension.
2. Compile firmware into `build/`:

   ```bash
   cd projects/04-shift-register
   arduino-cli compile --fqbn arduino:avr:uno --output-dir build 04-shift-register.ino
   ```

3. Run **Wokwi: Start Simulator** (`F1`).

The default diagram matches **LedChase** (74HC595 + 8 LEDs). See wiring docs for SevenSegment and LightBar breadboard layouts.

The README teaser [`schematics/preview.png`](schematics/preview.png) reflects the compile-time `DEMO` constant — regenerate with the `wokwi-preview` skill when the sketch or diagram changes.

## Documentation

- [Overview](docs/overview.md)
- [Hardware](docs/hardware.md)
- [Wiring](docs/wiring.md)
