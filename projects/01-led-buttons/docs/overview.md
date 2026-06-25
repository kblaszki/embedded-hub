# Overview — 01-led-buttons

## Summary

Controls an external LED on pin 9. Two demo modes cover basic blink timing and interactive on/off control with push buttons.

## Behavior

### DemoButtons (default)

1. Pin 9 is configured as output; pins 10 and 11 as `INPUT_PULLUP`.
2. When the ON button (pin 10) is pressed, the LED turns on.
3. When the OFF button (pin 11) is pressed, the LED turns off.
4. The loop runs continuously; either button can be pressed at any time.

### DemoBlink

1. Pin 9 is configured as output.
2. The LED blinks in a fixed pattern: 3 s on, 2 s off, 1 s on, 2 s off, then repeats.

## Configuration

| Constant | Default | Purpose |
|----------|---------|---------|
| `DEMO` | `DemoButtons` | Select `DemoBlink` or `DemoButtons` |
| `LED_PIN` | 9 | External LED anode (via resistor) |
| `ON_BUTTON_PIN` | 10 | ON button (active low) |
| `OFF_BUTTON_PIN` | 11 | OFF button (active low) |

Change `constexpr DemoMode DEMO = DemoButtons;` at the top of `01-led-buttons.ino` to switch modes, then re-upload.
