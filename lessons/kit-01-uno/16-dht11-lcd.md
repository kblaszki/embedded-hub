# Lesson 16 — DHT11 temperature and humidity sensor

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Read temperature and relative humidity from a DHT11 module and display both values on the I2C LCD.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | DHT11 temperature/humidity module | `dht-temp-humidity` |
| 1 | LCD 1602 with I2C backpack | `lcd1602-i2c` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 14 — Rain sensor + LCD](14-rain-lcd.md)

## Key concepts

- Single-wire DHT protocol (timing-sensitive)
- Humidity % and temperature °C
- Minimum interval between reads (~2 s)

## Libraries

- `DHT sensor library` (Adafruit or Rob Tillaart)
- `LiquidCrystal_I2C`

## Repo project

[projects/08-lcd-sensors](../../projects/08-lcd-sensors/) — set `MODE` to `Dht11`

## Notes

TENSTAR kit lists DHT11 explicitly. If your board is labeled differently, check whether `temp-sensor-module` in inventory is DHT11 or another chip (LM35/NTC).
