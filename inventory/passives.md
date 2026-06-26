# Passives and basic components

Discrete parts: resistors, capacitors, LEDs, buttons. See [parts.yaml](parts.yaml) → `passives`.

| id | name | used_in |
|----|------|---------|
| led-5mm | LED 5 mm | 01-led-buttons, 04-shift-register |
| resistor-220 | 220 Ω | 01-led-buttons, 04-shift-register |
| resistor-10k | 10 kΩ | 04-shift-register (LDR divider) |
| pushbutton-tactile | Tactile button | 01-led-buttons |
| rgb-led-cc | RGB LED common cathode | 02-rgb-led |

## To add

- Capacitors (100 nF decoupling, 10 µF bulk)
- Additional resistor values (1 kΩ, 4.7 kΩ)
- DIP switches, potentiometers
