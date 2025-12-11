# SIGMA
### A modernized take on the Enigma Machine used in WWII to encrypt messages.

## ------- We will insert video and photo of how the system works here ------

## The Process
First, here's a system diagram of how the parts of the machine works and how they interact with one another.

#### --- INSERT GIF OF WHOLE FLOW HERE ANDDDD Make a SYSTEM DIAGRAM of it to the right.

## INSERT SYSTEM DIAGRAM HERE!!!! -------------------

### Design Ideation
#### Our approach to each part of the original

#### Plugboard and Lightbulbs
We wanted our plugbord to be an accurate representation of the real Enigma Machine but with a few modernized twists. We decided that all swapping and encryping must be done physically through hardware, while the encrypted message should be displayed on a screen. We made this decision for a few reasons:

1. The original Enigma Machine required two people to work the machine. 1 person to type the encrypted letters, and another person to write the encryption down as the letter swap appeared through the corresponding lightbulbs. Therefore, we decided to replace the lightbulbs with a display. Our machine modernizes this approach allowing for one-person operation.
2. Tiny Lightbulbs for each swapped letter would require us to spend more of our budget. Additional CAD would be required to contain all these lightbulbs and we would need to focus on wiring to display the swapped letters this way.
3. The original machine process was the following: Battery -> Keypress -> Plugboard -> Rotors -> Plugboard -> Keyswitch -> Lightbulb -> Battery. By replacing the lightbulbs with a display, we are essentially removing the complicated keyswitch step (and onwards), which simply becomes "display".

Some trade-offs that came with this is ideation. Since the original machine did not have an arduino and display, we needed to decide which new components to use, where the data flows, and ultimately how this would fit into the original design.

#### Keyboard
The keyboard design borrows from the original Enigma Machine. It uses spring-loaded conductive metal topped with labeled key-caps. When a letter is pressed, the key completes a circuit on the breadboard which gets sent to the arduino for processing.
# TALK TO JO -------------- add more here
We chose to make the keypresses send information to the Arduino for one particular reason. When the arduino recieves a signal of the swapped letter, both the pin corresponding to the keypress, and the pin corresponding to the swapped letter will read high. By sending the keyboard press to the arduino first, it can differentiate between the two, allowing it to send the swapped letter (and not the keypress!) to the display. 

A tradeoff to making the keyboard as opposed to using a standard keyboard is time and redundancy. Since keys are made using springs and many small parts, each key is essentially a small mechanism, requiring hours of soldering. Since there are 26 letters in the alphabet, this creates long-repetative tasks for the assembly of dozens of parts.

However, design choice was superior due to the satisfaction achieved by replicating the original machine. Aesthetically, a real keyboard (which was used by previous PIE teams) makes for an unrealistic and unappealing design.

#### Rotors
The rotors were designed as close to the original as possible. 
#### ADD DIAGRAM OF THE ROTOR LIKE OPENED UP HERE ------------------------
#### THEN ASK ANNA bc idk bro ---------------------------

### Data and Energy Flow
These individual parts come together to estabish the final product in the following way:

### PUT DATA AND ENERGY FLOW DIAGRAM HERE ---------------------------

### Mechanical Design (CAD Parts)

##### Plugboard
##### Rotors etc. etc.
##### Keyboard
###### Keys

### The Circuit Schematic (and analysis)

### SOURCE CODE --------- LOOK AT RUBRIC. WHAT THE HELLY IS A SWITHLINK ------------

Software Used:
* Arduino IDE - for reading the input and output letters. The code handles taking inputs from the keypress, and the final swaps from the plugboard.
* Raspberry PI Operating System - for operating the raspberry PI. Installed using a Raspberry PI Imager.
* 
* Putty - A software application used for programming the raspberry pi (comes pre-installed). This was used to send the final swapped letter to the display. The code simply listens for the print messages from the Arduino.
* Thonny - A terminal emulator. This was simply used to display the text in a visually appealing way. Thonny allows for full-screen and more customization
* 

### Bill Of Materials.
Dont forget:
1. Copper pins
2. the conductive tubes we found
3. arduino mega
4. raspi
5. conductive tape
6. the clear lasercut material thing
7. Display
8. Wires and connectors used between arduino, raspi, and etc.





