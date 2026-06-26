# Project templates

Replace all `NN`, `name`, `Title`, `Board`, and `Description` placeholders.

---

## README.md

```markdown
# NN-name — Title

**Board:** Board  
**Description**

<img src="schematics/preview.png" width="560" alt="Wokwi simulation preview — NN-name" />

## Goal

Brief description of what this project does.

## Quick start (Arduino IDE)

1. Open `projects/NN-name/` in Arduino IDE (`File → Open`).
2. Select board: **Board**.
3. Select port: your USB serial port (e.g. `COM3` on Windows).
4. Click **Upload**.

## Expected behavior

Describe what should happen after a successful upload.

## Simulation (Wokwi)

Optional. Add `diagram.json`, `wokwi.toml`, and `schematics/preview.png`. See [WOKWI.md](../../WOKWI.md). Show the preview image at the top of README (see above).

Preview timing in `wokwi.toml`:

```toml
[preview]
delay_ms = 1500
width = 1200
height = 675
offset_left = 0
offset_top = 0
```

Preview PNGs are auto-centered at capture time for single-part diagrams only; use `offset_*` for fine-tuning.

## Documentation

- [Overview](docs/overview.md)
- [Hardware](docs/hardware.md)
- [Wiring](docs/wiring.md)
```

---

## docs/overview.md

```markdown
# Overview — NN-name

## Summary

What this firmware does and why.

## Behavior

Step-by-step description of runtime behavior.

## Configuration

List any `#define` constants, thresholds, or compile-time options.
```

---

## docs/hardware.md

```markdown
# Hardware — NN-name

## Board

| Item | Value |
|------|-------|
| MCU board | Board |
| Voltage | 5 V (Uno) / 3.3 V (ESP32) |
| Clock | 16 MHz (Uno) |

## Components

| Component | Qty | Notes |
|-----------|-----|-------|
| — | — | — |

## Libraries

| Library | Version | Source |
|---------|---------|--------|
| — | — | Built-in / Arduino Library Manager |
```

---

## docs/wiring.md

```markdown
# Wiring — NN-name

## Pin map

| Pin | Function | Connected to |
|-----|----------|--------------|
| — | — | — |

## Diagram

Add a Fritzing export or photo to `schematics/` when available.

## Notes

Any pull-up/pull-down resistors, voltage dividers, or power considerations.
```

---

## Optional: docs/troubleshooting.md

```markdown
# Troubleshooting — NN-name

## Upload fails

- Verify correct board and port in Arduino IDE.
- Check USB cable supports data (not charge-only).

## Runtime issues

Document symptoms, causes, and fixes as you encounter them.
```

---

## Optional: docs/changelog.md

```markdown
# Changelog — NN-name

## Unreleased

### Added
- Initial sketch
```
