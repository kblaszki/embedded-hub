// Buzzer type: Active = digital on/off beeps, Passive = tone() melody
enum BuzzerType { Active, Passive };
constexpr BuzzerType BUZZER = Passive;

constexpr int BUZZER_PIN = 12;

// Passive buzzer note frequencies (Hz)
constexpr int NOTE_DO = 262;
constexpr int NOTE_RE = 294;
constexpr int NOTE_MI = 330;
constexpr int NOTE_FA = 349;
constexpr int NOTE_SOL = 392;
constexpr int NOTE_LA = 440;
constexpr int NOTE_SI = 494;
constexpr int NOTE_DO2 = 524;

constexpr int NOTE_DURATION_MS = 500;

void setupActive() {
  pinMode(BUZZER_PIN, OUTPUT);
}

void loopActive() {
  for (int i = 0; i < 5; i++) {
    digitalWrite(BUZZER_PIN, HIGH);
    delay(50);
    digitalWrite(BUZZER_PIN, LOW);
    delay(50);
  }
  digitalWrite(BUZZER_PIN, LOW);
  delay(5000);
}

void setupPassive() {
  pinMode(BUZZER_PIN, OUTPUT);
}

void playNote(int frequency, int durationMs) {
  tone(BUZZER_PIN, frequency, durationMs);
  delay(durationMs);
}

void loopPassive() {
  playNote(NOTE_DO, NOTE_DURATION_MS);
  playNote(NOTE_RE, NOTE_DURATION_MS);
  playNote(NOTE_MI, NOTE_DURATION_MS);
  playNote(NOTE_FA, NOTE_DURATION_MS);
  playNote(NOTE_SOL, NOTE_DURATION_MS);
  playNote(NOTE_LA, NOTE_DURATION_MS);
  playNote(NOTE_SI, NOTE_DURATION_MS);
  playNote(NOTE_DO2, NOTE_DURATION_MS);
  noTone(BUZZER_PIN);
  delay(500);
}

void setup() {
  if (BUZZER == Active) {
    setupActive();
  } else {
    setupPassive();
  }
}

void loop() {
  if (BUZZER == Active) {
    loopActive();
  } else {
    loopPassive();
  }
}
