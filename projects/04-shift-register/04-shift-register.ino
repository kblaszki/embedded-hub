// Demo: LedChase = 8-LED chase, SevenSegment = digits 0-9, LightBar = photoresistor bar graph
enum ShiftDemo { LedChase, SevenSegment, LightBar };
constexpr ShiftDemo DEMO = LedChase;

constexpr int DATA_PIN = 8;
constexpr int LATCH_PIN = 9;
constexpr int CLOCK_PIN = 10;
constexpr int LIGHT_PIN = A0;

constexpr int CHASE_STEP_MS = 1000;
constexpr int SEGMENT_STEP_MS = 1000;
constexpr int LIGHT_BAR_SAMPLE_MS = 50;

// 0bABCDEFGX — segment map for common-cathode 7-segment via 74HC595
const byte SEGMENT_DIGITS[10] = {
  0b11111100, // 0
  0b01100000, // 1
  0b11011010, // 2
  0b11110010, // 3
  0b01100110, // 4
  0b10110110, // 5
  0b10111110, // 6
  0b11100000, // 7
  0b11111110, // 8
  0b11110110  // 9
};

void shiftRegisterWrite(byte value, uint8_t bitOrder) {
  digitalWrite(LATCH_PIN, LOW);
  shiftOut(DATA_PIN, CLOCK_PIN, bitOrder, value);
  digitalWrite(LATCH_PIN, HIGH);
}

void setupShiftPins() {
  pinMode(DATA_PIN, OUTPUT);
  pinMode(LATCH_PIN, OUTPUT);
  pinMode(CLOCK_PIN, OUTPUT);
}

// --- LedChase ---

int chaseIndex = 0;

void setupLedChase() {
  setupShiftPins();
}

void loopLedChase() {
  byte pattern = 0;
  bitSet(pattern, chaseIndex);
  shiftRegisterWrite(pattern, MSBFIRST);

  chaseIndex++;
  if (chaseIndex > 7) {
    chaseIndex = 0;
  }
  delay(CHASE_STEP_MS);
}

// --- SevenSegment ---

void setupSevenSegment() {
  setupShiftPins();
}

void loopSevenSegment() {
  for (int digit = 0; digit < 10; digit++) {
    shiftRegisterWrite(SEGMENT_DIGITS[digit], LSBFIRST);
    delay(SEGMENT_STEP_MS);
  }
}

// --- LightBar ---

int ledsFromLightLevel(int analogValue) {
  int count = 9 - analogValue / 63;
  if (count > 8) {
    return 8;
  }
  if (count < 0) {
    return 0;
  }
  return count;
}

byte patternForLedCount(int count) {
  if (count <= 0) {
    return 0;
  }
  byte pattern = 128; // MSB on first
  for (int i = 0; i < count - 1; i++) {
    pattern |= (1 << i);
  }
  return pattern;
}

void setupLightBar() {
  setupShiftPins();
}

void loopLightBar() {
  int lightValue = analogRead(LIGHT_PIN);
  int ledCount = ledsFromLightLevel(lightValue);
  shiftRegisterWrite(patternForLedCount(ledCount), LSBFIRST);
  delay(LIGHT_BAR_SAMPLE_MS);
}

void setup() {
  switch (DEMO) {
    case LedChase:
      setupLedChase();
      break;
    case SevenSegment:
      setupSevenSegment();
      break;
    case LightBar:
      setupLightBar();
      break;
  }
}

void loop() {
  switch (DEMO) {
    case LedChase:
      loopLedChase();
      break;
    case SevenSegment:
      loopSevenSegment();
      break;
    case LightBar:
      loopLightBar();
      break;
  }
}
