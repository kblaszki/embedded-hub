// Demo mode: DemoBlink = external LED blink pattern, DemoButtons = two-button LED control
enum DemoMode { DemoBlink, DemoButtons };
constexpr DemoMode DEMO = DemoButtons;

constexpr int LED_PIN = 9;
constexpr int ON_BUTTON_PIN = 10;
constexpr int OFF_BUTTON_PIN = 11;

void setupBlink() {
  pinMode(LED_PIN, OUTPUT);
}

void loopBlink() {
  digitalWrite(LED_PIN, HIGH);
  delay(3000);
  digitalWrite(LED_PIN, LOW);
  delay(2000);
  digitalWrite(LED_PIN, HIGH);
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  delay(2000);
}

void setupButtons() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(ON_BUTTON_PIN, INPUT_PULLUP);
  pinMode(OFF_BUTTON_PIN, INPUT_PULLUP);
}

void loopButtons() {
  if (digitalRead(ON_BUTTON_PIN) == LOW) {
    digitalWrite(LED_PIN, HIGH);
  }
  if (digitalRead(OFF_BUTTON_PIN) == LOW) {
    digitalWrite(LED_PIN, LOW);
  }
}

void setup() {
  if (DEMO == DemoBlink) {
    setupBlink();
  } else {
    setupButtons();
  }
}

void loop() {
  if (DEMO == DemoBlink) {
    loopBlink();
  } else {
    loopButtons();
  }
}
