#define BLINK_TIME 50
#define LEFT 14
#define RIGHT 15
#define DATA_RATE 115200

int cmd = 0;

/**
* Blink digital ouput
* @param pin - Pin to blink
* @param nbLoop - Number of blink loop
*/
void blink(int pin, int nbLoop) {
  while(nbLoop > 0) {
    delay(100);
    digitalWrite(pin, HIGH);
    delay(BLINK_TIME);
    digitalWrite(pin, LOW);

    nbLoop = nbLoop - 1;
  }
}
/***/

void setup() {
  /* Init pin */
  pinMode(LEFT, OUTPUT);
  pinMode(RIGHT, OUTPUT);
  /***/

  /* Open serial */
  Serial.begin(DATA_RATE);
	Serial.setTimeout(1); 
  /***/

  /* Start sequence */
  blink(LEFT, 3);
  blink(RIGHT, 3);
  /***/
}

void loop() {
  /* Read in serial */
  while (!Serial.available()); 
  cmd = Serial.readString().toInt();
  /***/

  if (cmd == 42) {
    blink(LEFT, 5);
    cmd = 0;
  }

    if (cmd == 58) {
    blink(RIGHT, 5);
    cmd = 0;
  }
} 
