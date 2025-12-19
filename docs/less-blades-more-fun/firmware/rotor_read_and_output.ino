//Code reads encoder position and then computes throttle output based on throttle, pitch, and roll inputs. 
// Currently those inputs are entered through the serial monitor.

#include "AS5600.h"


//  Uncomment the line according to your sensor type
//AS5600L as5600;   //  use default Wire
 AS5600 as5600;   //  use default Wire
const float pi = 3.14159265;

float throttleIN  = 0;
float pitchCTRL   = 0;
float rollCTRL    = 0;
float yawCTRL     = 0;
float Duty        = 0;
float throttleOUT = 0;
float throttleMAP = 0;

void setup()
{
  
  Serial.begin(115200);
  Serial.println();
  Serial.println(__FILE__);
  Serial.print("AS5600_LIB_VERSION: ");
  Serial.println(AS5600_LIB_VERSION);
  Serial.println();

  Wire.begin();

  as5600.begin();  //  set direction pin.
  as5600.setDirection(AS5600_CLOCK_WISE);  //  default, just be explicit.
  int b = as5600.isConnected();
  Serial.print("Connect: ");
  Serial.println(b);
  delay(1000);
}


void loop()
{
  
  float MotorRads = as5600.rawAngle() * AS5600_RAW_TO_RADIANS;
  Serial.print("Rads = ");
  Serial.print(MotorRads);
  Serial.print("\tω = ");
  Serial.print(as5600.getAngularSpeed(AS5600_MODE_RPM));
  
//// Calculate Output ////
//
  if (Serial.available()>0){
    String var = Serial.readString();
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

  }
  if (throttleIN > 1){
    Duty = throttleIN + (pitchCTRL*cos(MotorRads)) + (rollCTRL * sin(MotorRads));
  }
  else{
    Duty = 0;
  }
  if (throttleIN > 100){
    Duty = 0;
  }
  
  //// Output ////
  throttleMAP = map(Duty,0,100,0,100);
  throttleOUT = constrain(throttleMAP, 0, 100);
  Serial.print("\tThrottle Out= ");
  Serial.println(throttleOUT );
  analogWrite(4, throttleOUT);
}



//  -- END OF FILE --
