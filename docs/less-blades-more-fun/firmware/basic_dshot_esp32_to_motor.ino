#include <Arduino.h>
#include <DShotRMT.h>

// Define the GPIO pin connected to the motor ESC
const gpio_num_t MOTOR_PIN = GPIO_NUM_13;
static constexpr auto IS_BIDIRECTIONAL = false;
// Motor magnet count for RPM calculation
static constexpr auto MOTOR_MAGNET_COUNT = 24;

// Creates the motor instance
DShotRMT motor(MOTOR_PIN, DSHOT600, IS_BIDIRECTIONAL, MOTOR_MAGNET_COUNT);


void setup() {
  Serial.begin(115200);

  // Initialize the DShot motor
  motor.begin();

  // Print CPU Info
  printCpuInfo(Serial);
  
  Serial.println("Arming ESC…");
  for (int i = 0; i < 2000; i++) {   // ~2 seconds of zero throttle
      motor.sendThrottle(0);
      delay(1);
  }
  
  

  Serial.println("Motor initialized. Ramping up to 25% throttle...");
  }

void loop() {
  // Ramp up to 25% throttle over 2.5 seconds
  
  
  for (uint16_t i = 48; i <= 3000; i++) {
    motor.sendThrottle(i);
    delay(2);
  
  }
  
  
  
  Serial.println("Stopping motor.");
  motor.sendThrottle(0);

  // Print DShot Info
  printDShotInfo(motor, Serial);

  // Take a break before next bench run
  delay(300);
}
