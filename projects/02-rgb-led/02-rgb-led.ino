constexpr int RED_PIN = 3;
constexpr int GREEN_PIN = 5;
constexpr int BLUE_PIN = 6;

constexpr int COLOR_STEP_MS = 1000;

int redValue = 255;
int greenValue = 255;
int blueValue = 255;

void setColor(int red, int green, int blue) {
  analogWrite(RED_PIN, red);
  analogWrite(GREEN_PIN, green);
  analogWrite(BLUE_PIN, blue);
}

void setup() {
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
  randomSeed(analogRead(A0));
}

void loop() {
  setColor(redValue, greenValue, blueValue);
  delay(COLOR_STEP_MS);
  redValue = random(0, 256);

  setColor(redValue, greenValue, blueValue);
  delay(COLOR_STEP_MS);
  greenValue = random(0, 256);

  setColor(redValue, greenValue, blueValue);
  delay(COLOR_STEP_MS);
  blueValue = random(0, 256);
}
