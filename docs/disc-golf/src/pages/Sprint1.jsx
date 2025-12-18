import { Link } from 'react-router-dom'

function Sprint1() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      {/* Back Navigation */}
      <Link 
        to="/process" 
        className="inline-flex items-center text-nobel-gold hover:text-stone-900 mb-8 font-medium transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Process
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Development Phase 1</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Sprint 1: Benchtop Prototypes
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mb-6"></div>
        <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
          Our goal for Sprint 1 was to build benchtop-level functional prototypes of all sub-assemblies. 
          We focused on proving out each subsystem individually before integration.
        </p>
      </div>

      {/* Sprint Goal */}
      <div className="mb-12 bg-[#F5F4F0] rounded-lg p-8 border-l-4 border-nobel-gold">
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-3">Sprint 1 Goal</h2>
        <p className="text-stone-700">
          Build benchtop-model functional prototypes of all sub-assemblies (excluding pneumatics). 
          Demonstrate an integrated prototype that implements functional electronics, firmware, and mechanical systems.
        </p>
      </div>

      {/* What We Built */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">What We Built</h2>
        
        <div className="space-y-8">
          {/* Enclosure */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Enclosure</h3>
            <p className="text-stone-600 leading-relaxed">
              We built an initial cardboard prototype to establish the basic form factor and space claims. 
              This allowed us to test disc insertion and understand the spatial requirements for the chuck, 
              motors, and electronics before committing to final materials.
            </p>
          </div>

          {/* Chuck */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Custom 3-Jaw Chuck</h3>
            <p className="text-stone-600 leading-relaxed">
              We started with a small physical prototype, taking inspiration from lathe chuck mechanisms 
              as our foundation. During this sprint, we worked on understanding how to upscale and adapt 
              the system, designing new clamps and a differential system for secure disc clamping.
            </p>
          </div>

          {/* Central Motor */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Central Motor System</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              We set up our motor control system with a StepperOnline Nema 23 stepper motor, Raspberry Pi 5 (8GB), 
              and TB6600 motor driver. We initially tried using an Adafruit Motor Shield V2 with an Arduino Uno, 
              but discovered it couldn't handle our motor's 4.0A current draw (the shield only supports 1.2A).
            </p>
            <p className="text-stone-600 leading-relaxed">
              We pivoted to the TB6600 driver, an industry standard that properly handles the Nema 23's requirements 
              and connects directly to the Raspberry Pi.
            </p>
          </div>

          {/* Brush */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Brush Mechanism</h3>
            <p className="text-stone-600 leading-relaxed">
              We built a mock brush on a servo "wrist" that actuates to reach the approximate location above the disc. 
              We used actual brush weight in our prototype to ensure our servo could handle the real load.
            </p>
          </div>

          {/* Controls */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Physical Controls</h3>
            <p className="text-stone-600 leading-relaxed mb-3">
              We implemented a physical button panel with three operation modes:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1 ml-2">
              <li><span className="text-stone-800 font-medium">START:</span> Moves the central motor and after 3 seconds, moves the brush in place</li>
              <li><span className="text-stone-800 font-medium">RESET:</span> Stops the central motor and resets the brush motor</li>
              <li><span className="text-stone-800 font-medium">STOP:</span> Stops all movement immediately</li>
            </ul>
          </div>

          {/* Sensing Research */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Sensing Research</h3>
            <p className="text-stone-600 leading-relaxed mb-3">
              We researched and selected our sensing approach using a rotary encoder for "load sensing":
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1 ml-2">
              <li>No Disc = No Load: Motor spins at a high, fast "No-Load" speed</li>
              <li>Disc = Load: The disc's weight slows the motor to a lower "Loaded" speed</li>
              <li>This method is immune to dirt/water and can detect motor jams or disc slips for safety</li>
            </ul>
          </div>

          {/* Vision Detection */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Vision Detection Research</h3>
            <p className="text-stone-600 leading-relaxed">
              We began researching AI-based mud detection using the Raspberry Pi Camera. Our approach involves 
              taking photos of the stopped disc and feeding them into an AI model trained to distinguish 
              "mud" from "clean plastic."
            </p>
          </div>
        </div>
      </div>

      {/* Key Pivot */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Major Pivot: Disc Detection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-2">❌ Original Plan</h3>
            <p className="text-red-800">
              Use 3 IR distance sensors to detect when a disc is present.
            </p>
            <p className="text-red-700 text-sm mt-2 italic">
              Problem: The morphology of different discs doesn't have large enough differences for IR sensors to reliably detect.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">✓ New Plan</h3>
            <p className="text-green-800">
              Use a rotary encoder for "load sensing" by measuring motor RPM.
            </p>
            <p className="text-green-700 text-sm mt-2 italic">
              This approach is more robust and also provides safety benefits like detecting jams.
            </p>
          </div>
            </div>
          </div>

      {/* Challenges */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Challenges We Faced</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-3 h-3 bg-nobel-gold rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-1">Schedule Delay</h3>
              <p className="text-stone-600 mb-1">
                Half the team was at the SHPE conference, putting us slightly behind schedule.
              </p>
              <p className="text-stone-500 text-sm italic">
                Solution: We held additional team meetings and work sessions to catch up.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 w-3 h-3 bg-nobel-gold rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="font-semibold text-stone-900 mb-1">Integration Risk</h3>
              <p className="text-stone-600 mb-1">
                Developing mechanical, electrical, and software systems in parallel risked major failures when combining them.
              </p>
              <p className="text-stone-500 text-sm italic">
                Solution: We de-risked this by building a benchtop prototype (Pi, motor drivers, encoder) to solve integration issues early.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Sprint Goals */}
      <div className="mb-12 bg-[#F5F4F0] rounded-lg p-8">
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Goals for Sprint 2</h2>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Full-scale model with all sensors and components mounted
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Pneumatics system assembled (if parts arrive)
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Inner enclosure assembled with chuck and central motors
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Motor encoder detecting when disc is tightened
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Central motors wired to Raspberry Pi
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-stone-200">
        <Link 
          to="/process" 
          className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
        >
          ← Back to Process
        </Link>
        <Link 
          to="/process/sprint2" 
          className="bg-nobel-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors"
        >
          Next: Sprint 2 →
        </Link>
      </div>
    </div>
  )
}

export default Sprint1
