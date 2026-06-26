# Lesson 14 — Rain sensor and I2C LCD screen

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Read a rain / water level sensor on an analog pin, convert the value to a moisture percentage, and show it on a 16×2 LCD with I2C backpack.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | Water level / rain sensor module | `water-sensor` |
| 1 | LCD 1602 with I2C backpack | `lcd1602-i2c` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires, Dupont cable | `jumper-wires`, `dupont-10p-female-male` |

## Previous knowledge

- [Lesson 7 — Photoresistor](07-photoresistor.md)

## Key concepts

- I2C: SDA (A4), SCL (A5) on Uno
- LCD address 0x27 or 0x3F
- Analog moisture 0–1023 → percentage

## Libraries

- `LiquidCrystal_I2C` (Library Manager or vendor zip)

## Repo project

[projects/08-lcd-sensors](../../projects/08-lcd-sensors/) — set `MODE` to `Rain`
