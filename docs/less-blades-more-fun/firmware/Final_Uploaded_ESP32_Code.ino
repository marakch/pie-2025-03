//Code reads encoder position and then computes throttle output based on throttle, pitch, and roll inputs.
// Currently those inputs are entered through the serial monitor.

#include "AS5600.h"
#include <Arduino.h>
#include <DShotRMT.h>
#include <driver/rmt_rx.h>

// USB serial port settings
static constexpr auto &USB_SERIAL = Serial0;
static constexpr auto USB_SERIAL_BAUD = 115200;

// Motor configuration - Pin number or GPIO_PIN
static constexpr gpio_num_t MOTOR01_PIN = GPIO_NUM_18;
static constexpr gpio_num_t MOTOR02_PIN = GPIO_NUM_19;
static constexpr dshot_mode_t DSHOT_MODE = DSHOT600;
static constexpr auto IS_BIDIRECTIONAL = false;

// Motor magnet count for RPM calculation
static constexpr auto MOTOR01_MAGNET_COUNT = 24;
static constexpr auto MOTOR02_MAGNET_COUNT = 24;
float throttle_percent = 0;

//  Uncomment the line according to your sensor type
//AS5600L as5600;   //  use default Wire
AS5600 as5600;  //  use default Wire

float throttleIN = 0;
float pitchCTRL = 0;
float rollCTRL = 0;
float yawCTRL = 0;
float Duty = 0;
float yaw_Duty = 0;
float throttleOUT = 0;
float yawOUT = 0;
float throttleMAP = 0;

//Initialize GPIOs for pwm from Flight Controller
const int pin1 = 25;
const int pin2 = 26;
const int pin3 = 27;
const int pin4 = 14;

const int threshold = 1750;
const int throttle_threshhold = 1070;

volatile uint32_t rise1 = 0, pulse1 = 0;
volatile uint32_t rise2 = 0, pulse2 = 0;
volatile uint32_t rise3 = 0, pulse3 = 0;
volatile uint32_t rise4 = 0, pulse4 = 0;

// Interrupts for PWM channels:
// ---- Interrupts for each channel ----

void IRAM_ATTR isr1() {
  if (digitalRead(pin1))
    rise1 = micros();
  else
    pulse1 = micros() - rise1;
}

void IRAM_ATTR isr2() {
  if (digitalRead(pin2))
    rise2 = micros();
  else
    pulse2 = micros() - rise2;
}

void IRAM_ATTR isr3() {
  if (digitalRead(pin3))
    rise3 = micros();
  else
    pulse3 = micros() - rise3;
}

void IRAM_ATTR isr4() {
  if (digitalRead(pin4))
    rise4 = micros();
  else
    pulse4 = micros() - rise4;
}

// Disarm to begin
bool ARMED = false;

// Creates the motor instance
DShotRMT motor01(MOTOR01_PIN, DSHOT_MODE, IS_BIDIRECTIONAL, MOTOR01_MAGNET_COUNT);
DShotRMT motor02(MOTOR02_PIN, DSHOT_MODE, IS_BIDIRECTIONAL, MOTOR02_MAGNET_COUNT);

unsigned long previous_millis = 0;
unsigned long current_millis = 0;
unsigned long loop_time_ms = 0;

void setup() {
  //PWM setup


  pinMode(pin1, INPUT);
  pinMode(pin2, INPUT);
  pinMode(pin3, INPUT);
  pinMode(pin4, INPUT);

  attachInterrupt(digitalPinToInterrupt(pin1), isr1, CHANGE);
  attachInterrupt(digitalPinToInterrupt(pin2), isr2, CHANGE);
  attachInterrupt(digitalPinToInterrupt(pin3), isr3, CHANGE);
  attachInterrupt(digitalPinToInterrupt(pin4), isr4, CHANGE);


  // Starts the USB Serial Port

  // Initialize DShot Signal for both motors
  motor01.begin();
  motor02.begin();

  // Initialize encoder


  Wire.begin();

  as5600.begin();                          //  set direction pin.
  as5600.setDirection(AS5600_CLOCK_WISE);  //  default, just be explicit.

  int b = as5600.isConnected();
  delay(1000);
}

void loop() {

  float MotorRads = as5600.rawAngle() * AS5600_RAW_TO_RADIANS;

  // Read Flight Controller Inputs
  int32_t ThrottleIN = pulse1;
  int32_t pitchCTRL = pulse3;
  int32_t rollCTRL = pulse4;
  int32_t yawCTRL = pulse2;

  // if (Serial.available() > 0) {
  //   String var = Serial.readStringUntil('\n');
  //   int i = var.indexOf(' ');
  //   String text = var.substring(0, i);
  //   int val = var.substring(i).toInt();
  //   if (text.equals("t")) {
  //     throttleIN = val;
  //   } else if (text.equals("p")) {
  //     pitchCTRL = val;
  //   } else if (text.equals("r")) {
  //     rollCTRL = val;
  //   } else if (text.equals("arm")) {
  //     Serial.println("ARMING…");
  //     for (int i = 0; i < 2000; i++) {
  //       motor01.sendThrottle(0);
  //       motor02.sendThrottle(0);
  //       delay(1);

  //       ARMED = true;
  //       Serial.println("ARMED!");
  //     }
  //   } 

  //   else if (text.equals("disarm")) {
  //     ARMED = false;
  //     Serial.println("DISARMED");
  //     motor01.sendThrottle(0);
  //     // // while (Serial.available() == 0) {
  //     // }
  //   }
  // }

  if (ThrottleIN < 1250 && ThrottleIN > throttle_threshhold && pitchCTRL > threshold && rollCTRL > threshold && yawCTRL < 1250 && ARMED == false){
        Serial.println("ARMING…");
        ARMED = true;
        for (int i = 0; i < 2000; i++) {
          motor01.sendThrottle(0);
          motor02.sendThrottle(0);
          delay(1);
          
        }
        Serial.println("ARMED!");
        //delay(1000);
    }
  else if (ThrottleIN < 1250 && pitchCTRL > threshold && rollCTRL > threshold && yawCTRL < 1250 && ARMED == true){
      motor01.sendThrottle(47);
      motor02.sendThrottle(47);
      ARMED = false;
      Serial.println("DISARMED");
      delay(500);
    }
  // else if (ThrottleIN < throttle_threshhold){
  //     motor01.sendThrottle(47);
  //     motor02.sendThrottle(47);
  //     ARMED = false;
  //     Serial.println("DISARMED");
  //     delay(500);
    // }
  

  //// Calculate Output ////
  if (ARMED == true && ThrottleIN > throttle_threshhold) {
    // Serial.print("\tRads = ");
    // Serial.println(MotorRads);
    // Serial.print("\tω = ");
    Duty = (2 * (ThrottleIN - 600)) + 1 * ((pitchCTRL - 1500) * sin(MotorRads)) + 1 * ((rollCTRL - 1500) * -cos(MotorRads));
    yaw_Duty = (yawCTRL - 1290);

  

    throttleOUT = constrain(Duty, 49, 2048);
    yawOUT = constrain(yaw_Duty, 60, 2048);

    motor01.sendThrottle(throttleOUT);
    motor02.sendThrottle(yawOUT);
  

    // Serial.print("   throttleOUT: ");
    // Serial.print(throttleOUT);
    // Serial.print("   yawOUT: ");
    // Serial.println(yawOUT);
  
  } 


  //// Output ////


  
  // Serial.print("ThrottleIN "); Serial.print(ThrottleIN);
  // Serial.print("   pitchCTRL: "); Serial.print(pitchCTRL);
  // Serial.print("   rollCTRL: "); Serial.print(rollCTRL);
  // Serial.print("   yawCTRL: "); Serial.println(yawCTRL);


}



//  -- END OF FILE --
