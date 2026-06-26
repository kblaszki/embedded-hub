# Lesson 20 — RFID RC522 and SG90 servo motor

**Source:** [TENSTAR ROBOT - RFID Starter Kit (Arduino UNO R3)](https://pl.aliexpress.com/item/1005005970564532.html)

## Goal

Read RFID tags (card or key fob) with an RC522 module over SPI and move an SG90 servo to different angles based on the detected UID.

## Materials

| Qty | name | `parts.yaml` id |
|-----|------|-----------------|
| 1 | Arduino UNO board | `arduino-uno-r3` |
| 1 | RFID reader module (RC522) | `rfid-rc522` |
| 1 | RFID key fob | `rfid-key-fob` |
| 1 | RFID white card | `rfid-card` |
| 1 | Micro servo (SG90 class) | `servo-sg90` |
| 1 | Breadboard | `breadboard` |
| — | Jumper wires | `jumper-wires` |

## Previous knowledge

- [Lesson 19 — IR + stepper](19-ir-stepper.md) (actuator control)

## Key concepts

- SPI: MOSI, MISO, SCK, SS (Uno pins 11, 12, 13, 10)
- RC522 operates at 3.3 V logic — many modules are 3.3 V tolerant on Uno
- Servo PWM pulse width 1–2 ms for 0–180°

## Libraries

- `MFRC522` (GithubCommunity fork in Library Manager)

## Repo project

[projects/12-rfid-servo](../../projects/12-rfid-servo/)
