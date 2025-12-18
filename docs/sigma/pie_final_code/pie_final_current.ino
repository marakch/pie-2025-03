/*
Plugboard Code - Single Keypress, simple version
Prints the pressed key once and waits for release before detecting next key
Pins 28 through 53 are used as the keyboard pins and 2 through 27 are the corresponding pins
PINS 20 and 21 CANNOT be used as input pins??
*/

char alphabet[] = {'Q', 'A', 'P', 'W', 'S', 'Y', 'E', 'D', 'X', 'R', 'F', 'C', 'T', 'G', 'V', 'Z', 'H', 'B', 'U', 'J', 'N', 'I', 'K', 'M', 'O', 'L'}; //The alphabet in the order I plugged it into the breadboard
int corresponding_pin; //Stores the corresponding pin, where pins 2 through 27 are corresponding pins.

//set max character limit printing.
int character_limit = 25;
int printed_characters = 0;

//Handling keypresses for unspammed printing
char last_output[2] = {'#','#'};  
bool keypress = false;

void setup() {
  Serial.begin(9600);

  //Setting all pins to input from 28 to 53 (these are keypresses) we skip 20 and 21 because those pins are unusable
  for (int i = 28; i <= 53; i++) {
    pinMode(i, INPUT_PULLUP); //All pins 28 through 53 are connected to ground so we use input pullup, Low represents active keypress
  }
  //This for loop is split into 3 parts since we have to skip unusable pins 20 and 21.
  for (int i = 2; i <= 19; i++) {
    pinMode(i, INPUT);
  }
  for (int i = 21; i <= 27; i++) {
    pinMode(i, INPUT);
  }

  //Special Pins (replacement for 20 and 21) Setting these to input.
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);

  //Printing the message
  Serial.println(" ");
  Serial.println("-----New Message-----"); //Bar for being able to read new line. (Mostly for debugging)
  Serial.println(" ");
}

void loop() {

    //Loop through pins 28 and 53 to see which key was pressed (which is low).
    
  for (int i = 28; i <= 53; i++) {
    if (digitalRead(i) == LOW) {
      keypress = true; //Set the keypress equal to true.
      //Serial.print("Pin ");
      //Serial.println(i);
      // Serial.println(" pressed");
      // Serial.println(alphabet[i-28]);

      delay(10);
      pinMode(i-26,OUTPUT);
      delay(10);
      digitalWrite(i-26,HIGH);
      //Serial.print("Pin ");
      //Serial.print(i-26);
      //Serial.println(" is high");

      corresponding_pin = i-26; //Assign the corresponding pin press.
      delay(10);

    
      //If the corresponding pin is 20 or 21, set A0 or A1 high 
      if(corresponding_pin ==20)
      {
        pinMode(A0,OUTPUT);
        digitalWrite(A0,HIGH);
        //Serial.println("A0 is high actually");
      }
      if(corresponding_pin ==21)
      {
        pinMode(A1,OUTPUT);
        digitalWrite(A1,HIGH);
        //Serial.println("A1 is high actually");
      }
      
      
      break;//Assign ignored pairing to avoid multiple keypresses
    }
  }

//More code for processing the keypress
  
last_output[0] = last_output[1]; //Shift the array no matter what

  if (keypress == false)
  {
    last_output[1] = '#';
  }
//For loops that look Look for which pin came back as high (disregarding the corresponding pin since that is the pressed pin).
  //NO 20 or 21
  for (int i = 2; i<=19; i++)
  {
    if(digitalRead(i) ==HIGH && i!=corresponding_pin)
    {

      // assign outputs
      last_output[1] = (alphabet[i-2]);
      //Serial.println(digitalRead(i));
      //Serial.println(" swapped");
    }
  }

  if(digitalRead(A0) == HIGH && 20!=corresponding_pin)
  {
      last_output[1]=(alphabet[20-2]);
      //Serial.println(digitalRead(A0));
      //Serial.println(" swapped");
    
  }
  if(digitalRead(A1) == HIGH && 21!=corresponding_pin)
  {
      last_output[1]=(alphabet[21-2]);
      //Serial.println(digitalRead(A1));
      //Serial.println(" swapped");
    
  }

  for (int i = 22; i<=27; i++)
  {
    if(digitalRead(i) ==HIGH && i!=corresponding_pin)
    {
      //Serial.print(i);
      //Serial.println(" - Swapped Pin");

      //current_ignored[1] = i;
      
      //Serial.println(previous_ignored[0]);

      // Serial.println("Current");
      // Serial.print(current_ignored[0]);
      // Serial.print(" ");
      // Serial.println(current_ignored[1]);
  
      // Serial.println("Previous");
      // Serial.print(previous_ignored[0]);
      // Serial.print(" ");
      // Serial.println(previous_ignored[1]);
     last_output[1]=(alphabet[i-2]);
    //Serial.println(digitalRead(i));
      // if(previous_ignored[0] != current_ignored[0] && previous_ignored[1] != current_ignored[1])
      // {
        
      // }  

    }
  }
  delay(20);

  //Reset the pins to their original modes
  pinMode(corresponding_pin,INPUT);
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
//Printing and aesthetics:
  //See if character limit exceeds and refresh first if it does
  if(printed_characters == character_limit)
  {
    Serial.println(" ");
    Serial.print("-----New Message (char limit: "); //print new message
    Serial.print(character_limit);
    Serial.println(")-----");
    printed_characters = 0;//reset character limit
  }
  if(last_output[0]!='#' && last_output[1]=='#')
  {
    Serial.print(last_output[0]);
    printed_characters+=1;
  }
  keypress = false;

}


