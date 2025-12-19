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
static constexpr dshot_mode_t DSHOT_MODE = DSHOT600;
static constexpr auto IS_BIDIRECTIONAL = false;

// Motor magnet count for RPM calculation
static constexpr auto MOTOR01_MAGNET_COUNT = 24;
float throttle_percent = 0;

//  Uncomment the line according to your sensor type
//AS5600L as5600;   //  use default Wire
 AS5600 as5600;   //  use default Wire

float throttleIN  = 0;
float pitchCTRL   = 0;
float rollCTRL    = 0;
float yawCTRL     = 0;
float Duty        = 0;
float throttleOUT = 0;
float throttleMAP = 0;

bool ARMED = false;

// Creates the motor instance
DShotRMT motor01(MOTOR01_PIN, DSHOT_MODE, IS_BIDIRECTIONAL, MOTOR01_MAGNET_COUNT);


void setup()
{
  // Starts the USB Serial Port
  USB_SERIAL.begin(USB_SERIAL_BAUD);
  // Initialize DShot Signal
  motor01.begin();

  // Serial.begin(115200);
  // Serial.println();
  // Serial.println(__FILE__);
  // Serial.print("AS5600_LIB_VERSION: ");
  // Serial.println(AS5600_LIB_VERSION);
  // Serial.println();

  Wire.begin();

  as5600.begin();  //  set direction pin.
  as5600.setDirection(AS5600_CLOCK_WISE);  //  default, just be explicit.

  int b = as5600.isConnected();
  // Serial.print("Connect: ");
  // Serial.println(b);
  delay(1000);

 // Serial.println("Arming ESC…");
  for (int i = 0; i < 2000; i++) {   // ~2 seconds of zero throttle
      motor01.sendThrottle(0);
      delay(1);
}

  ARMED = true;
  //Serial.println("ESC ARMED.");
}

void loop()
{
  float MotorRads = as5600.rawAngle() * AS5600_RAW_TO_RADIANS;
  
  

//
  if (Serial.available()>0)
  {
    String var = Serial.readStringUntil('\n');
    int i = var.indexOf(' ');
    String text = var.substring(0, i);
    int val = var.substring(i).toInt();
    if(text.equals("t")){
      throttleIN = val;
    }else if(text.equals("p")){
      pitchCTRL = val;
    }else if(text.equals("r")){
      rollCTRL = val;
    }
    else if(text.equals("arm")){
        //Serial.println("ARMING…");
        for (int i = 0; i < 2000; i++) {
            motor01.sendThrottle(0);
            delay(1);
        
        ARMED = true;
        //Serial.println("ARMED!");
        }
      }
    else if (text.equals("disarm")) {
        ARMED = false;
        //Serial.println("DISARMED");
        motor01.sendThrottle(0);
        while(Serial.available()==0){
          
        }
        }
    

    
  

    // ---- AUTO ARM IF throttle > 0 ----
  if (!ARMED && throttleIN > 0) {
      //Serial.println("Auto ARM triggered!");
      for (int i = 0; i < 2000; i++) {
          motor01.sendThrottle(0);  // 2 seconds of zero throttle
          delay(1);
      }
      ARMED = true;
      //Serial.println("ESC ARMED!");
      }
  }
  //// Calculate Output ////
  if (throttleIN > 5){
    // Serial.print("\tRads = ");
    // Serial.print(MotorRads);
    // Serial.print("\tω = ");
    // Serial.print(as5600.getAngularSpeed(AS5600_MODE_RPM));
    Duty = throttleIN + (pitchCTRL*cos(MotorRads)) + (rollCTRL * sin(MotorRads));
  }
  else{
    Duty = 0;
  }
  if (throttleIN > 100){
    Duty = 0;
  }
  
  //// Output ////
  
  
  throttleOUT = constrain(Duty, 0, 100);
  // Serial.print("\tThrottle Out= ");
  // Serial.println(throttleOUT );
  motor01.sendThrottlePercent(throttleOUT);
}



//  -- END OF FILE --
