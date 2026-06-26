# Example entries for sensors, actuators, and displays (copy into parts.yaml)

## Sensor (DHT11)

```yaml
  - id: dht11
    name: DHT11 temperature/humidity module
    qty: 1
    status: owned
    interface: onewire
    voltage: 5v
    used_in: []
    notes: Single data pin; 10 kΩ pull-up often on module.
```

## Actuator (servo)

```yaml
  - id: servo-sg90
    name: SG90 micro servo
    qty: 1
    status: owned
    interface: pwm
    voltage: 5v
    used_in: []
    notes: Use external 5 V supply if servo stalls under USB power.
```

## Display (LCD I2C)

```yaml
  - id: lcd1602-i2c
    name: LCD 1602 with I2C backpack (PCF8574)
    qty: 1
    status: owned
    interface: i2c
    voltage: 5v
    used_in: []
    notes: LiquidCrystal I2C library; default address 0x27 or 0x3F.
```
