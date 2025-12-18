import { useState, useRef } from 'react'

function SystemDesign() {
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [scrollLeft, setScrollLeft] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const scrollContainerRef = useRef(null)

  const handleMouseDown = (e) => {
    if (scrollContainerRef.current) {
      setIsDragging(true)
      setStartPos({
        x: e.pageX - scrollContainerRef.current.offsetLeft,
        y: e.pageY - scrollContainerRef.current.offsetTop
      })
      setScrollLeft(scrollContainerRef.current.scrollLeft)
      setScrollTop(scrollContainerRef.current.scrollTop)
      e.preventDefault()
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const y = e.pageY - scrollContainerRef.current.offsetTop
    const walkX = (x - startPos.x) * 2
    const walkY = (y - startPos.y) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walkX
    scrollContainerRef.current.scrollTop = scrollTop - walkY
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    if (scrollContainerRef.current && e.touches.length === 1) {
      setIsDragging(true)
      setStartPos({
        x: e.touches[0].pageX - scrollContainerRef.current.offsetLeft,
        y: e.touches[0].pageY - scrollContainerRef.current.offsetTop
      })
      setScrollLeft(scrollContainerRef.current.scrollLeft)
      setScrollTop(scrollContainerRef.current.scrollTop)
    }
  }

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollContainerRef.current || e.touches.length !== 1) return
    e.preventDefault()
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const y = e.touches[0].pageY - scrollContainerRef.current.offsetTop
    const walkX = (x - startPos.x) * 2
    const walkY = (y - startPos.y) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walkX
    scrollContainerRef.current.scrollTop = scrollTop - walkY
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Technical Specifications</div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          System Design
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* System Architecture Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          System Architecture
        </h2>
        <p className="text-stone-600 mb-6 leading-relaxed">
          The Disc Golf Disc Cleaner integrates mechanical, electrical, and software subsystems. 
          The block diagram below shows all major components and how they connect to each other, 
          including the Raspberry Pi controller, motor drivers, sensors, and user interface elements.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="https://placehold.co/900x600/C9A668/ffffff?text=System+Architecture+Block+Diagram" 
            alt="System Architecture Block Diagram" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Data & Energy Flow Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Data & Energy Flow
        </h2>
        <p className="text-stone-600 mb-6 leading-relaxed">
          This diagram illustrates how information and power move through the system. 
          Data flow includes sensor readings, button inputs, and control signals. 
          Energy flow shows power distribution from the supply through the fuse box 
          to motors, the Raspberry Pi, and peripheral devices.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="https://placehold.co/900x600/C9A668/ffffff?text=Data+%26+Energy+Flow+Diagram" 
            alt="Data and Energy Flow Diagram" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Enclosure Design Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Enclosure Design
        </h2>
        
        <p className="text-stone-600 mb-6 leading-relaxed">
          The enclosure uses a dual-enclosure design inspired by microwave ovens: an outer enclosure for structure 
          and aesthetics, and an inner enclosure designed for easy cleaning of dust and debris.
        </p>

        {/* Overall Design Philosophy */}
        <div className="bg-[#F5F4F0] rounded-lg p-6 mb-8 border-l-4 border-nobel-gold">
          <h3 className="text-lg font-semibold text-stone-900 mb-3">Design Philosophy</h3>
          <ul className="text-stone-600 space-y-2">
            <li><strong>Outer Enclosure:</strong> Encapsulates the entire machine and provides structural support. The base plate is the only load-bearing component; walls are primarily aesthetic.</li>
            <li><strong>Inner Enclosure:</strong> Catches all dust and debris during cleaning. Connected to the outer enclosure via a wooden frame (inner enclosure supports) that also holds the central motor.</li>
            <li><strong>Electronics Placement:</strong> Mounted on top of the inner enclosure for shorter wire runs to the front control panel.</li>
          </ul>
        </div>

        <div className="space-y-8">
          {/* Brackets */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Bracket System (No Adhesives)</h3>
            <p className="text-stone-600 leading-relaxed mb-3">
              We avoided adhesives entirely, opting for mechanical brackets instead. Glue would not be sufficient 
              for our load-bearing supports and is less reliable than properly fastened brackets.
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li><strong>L-Brackets:</strong> Used for general connections. Note: only one hole per side is used to avoid screw interference.</li>
              <li><strong>C-Brackets:</strong> Used near the front to connect both the top structure and base to the pillars, replacing two L-brackets that interfered with the dust tray placement.</li>
            </ul>
          </div>

          {/* Materials Selection */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Material Selection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Euca Board (Outer Enclosure)</h4>
                <p className="text-stone-600 text-sm">Selected for laser cutting compatibility. Available in the Olin shop and easy to manufacture precise parts from.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Plywood (Base)</h4>
                <p className="text-stone-600 text-sm">Strong enough to support the entire structure including motors and components. Found a piece matching our required dimensions.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Wood (Supports)</h4>
                <p className="text-stone-600 text-sm">Used for inner enclosure supports and motor mounts. Versatile for modifications and strong enough to handle motor torque loads.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Sheet Metal (Inner Enclosure)</h4>
                <p className="text-stone-600 text-sm">Dust doesn't easily attach to metal surfaces, making cleanup easier. Chosen over acrylic for easier modification (drilling holes) and to fulfill fabrication learning goals.</p>
              </div>
            </div>
          </div>

          {/* Dust Tray */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Dust Tray</h3>
            <p className="text-stone-600 leading-relaxed">
              Designed for easy insertion and removal. Dimensions cover all open space under the inner enclosure. 
              Manufacturing was deferred to the end as it's less critical than structural components.
            </p>
            <p className="text-stone-500 text-sm italic mt-2">
              Future improvement: Add side guards to catch dust falling at angles and prevent debris from entering other open spaces.
            </p>
          </div>

          {/* Lessons Learned */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">Lessons Learned</h4>
            <ul className="text-amber-800 text-sm space-y-1">
              <li>The front wall should have been designed to bear loads from users pressing the E-Stop.</li>
              <li>An insulating material should be placed between the conductive metal inner enclosure and electrical components to prevent shorts.</li>
            </ul>
          </div>
        </div>

        {/* Enclosure Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
            <img 
              src="https://placehold.co/500x350/C9A668/ffffff?text=Enclosure+CAD" 
              alt="Enclosure CAD Rendering" 
              className="w-full h-auto"
            />
            <div className="p-3 bg-white">
              <p className="text-stone-600 text-sm">Enclosure CAD model showing dual-enclosure design</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
            <img 
              src="https://placehold.co/500x350/C9A668/ffffff?text=Inner+Enclosure+Supports" 
              alt="Inner Enclosure Supports" 
              className="w-full h-auto"
            />
            <div className="p-3 bg-white">
              <p className="text-stone-600 text-sm">Wooden frame connecting inner and outer enclosures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chuck Design Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          3-Jaw Chuck Design
        </h2>
        
        <p className="text-stone-600 mb-6 leading-relaxed">
          The chuck holds the disc golf disc in place during spinning and is based on a three-jaw lathe chuck design. 
          This mechanism allows the chuck tightening to be controlled separately from the spinning motion, 
          enabling the disc to be securely clamped before cleaning begins.
        </p>

        {/* Development Process */}
        <div className="space-y-8">
          {/* Prototype 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
                <img 
                  src="./dist/assets/images/initial_chuck.jpg" 
                  alt="First Chuck Prototype - Yellow 3D printed chuck from Thingiverse" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Prototype 1: Feasibility Test</h3>
              <p className="text-stone-600 leading-relaxed">
                The first prototype was downloaded from Thingiverse as a small three-jaw chuck to test if the 
                mechanism would be feasible for our application. This helped us understand the basic mechanics 
                before investing time in custom design.
              </p>
            </div>
          </div>

          {/* Prototype 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
                <img 
                  src="./dist/assets/images/50%_chuck.jpeg" 
                  alt="50% Scale Chuck Prototype - Black 3D printed chuck on cutting mat" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Prototype 2: Custom Design at 50% Scale</h3>
              <p className="text-stone-600 leading-relaxed">
                After deciding on the three-jaw chuck mechanism, we recreated the design in OnShape with 
                modifications to size, tolerances, and mounting mechanisms. The second prototype was printed 
                at 50% scale to verify tolerancing and the new clamp shapes before committing to full-scale production.
              </p>
              <p className="text-stone-600 leading-relaxed mt-2">
                During this phase, we determined that a slip ring would be needed to allow the chuck tightening 
                function to work while still enabling the full chuck to spin for cleaning.
              </p>
            </div>
          </div>

          {/* Final Version */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
                <img 
                  src="./dist/assets/images/final_chuck_assembly.png" 
                  alt="Final Chuck Assembly - CAD render showing full-scale chuck with gear train" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-stone-800 mb-2">Final Version: Full-Scale with Gear Train</h3>
              <p className="text-stone-600 leading-relaxed">
                After adjusting the scroll plate height, the final version was printed. Key features include:
              </p>
              <ul className="list-disc list-inside text-stone-600 mt-2 space-y-1 ml-2">
                <li>Motor mounted to the slip ring for independent tightening control</li>
                <li>Spur gear drives a crown gear attached to the scroll plate</li>
                <li>Scroll plate motion causes jaws to clamp onto the disc</li>
                <li>Entire chuck mounts to an 8mm motor shaft for rotation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Motor Systems Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Motor Systems
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Central Motor</h3>
            <p className="text-stone-600 leading-relaxed">
              HP C6409-60004 motor rotates the chuck and disc at controlled speeds for thorough cleaning. 
              Mounted to the wooden inner enclosure supports which handle the torque loads.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Brush Motor</h3>
            <p className="text-stone-600 leading-relaxed">
              Servo motor acts as a "wrist" to actuate the brush and position it across the disc surface 
              in pre-programmed patterns for complete coverage.
            </p>
          </div>
        </div>
      </div>

      {/* Electrical Design Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Electrical Design
        </h2>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Control System</h3>
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-stone-800">Raspberry Pi 5 (8GB):</strong> The main controller, upgraded from our initial Arduino Uno 
              plan to handle more complex processing requirements including potential AI/ML workloads and 
              multi-threaded control logic.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Motor Control</h3>
            <p className="text-stone-600 leading-relaxed">
              <strong className="text-stone-800">TB6600 Motor Driver (4.0A):</strong> Upgraded from the Adafruit Motorshield V2 (1.2A) 
              to properly handle the Nema 23 motor's 4.0A current draw. Provides precise stepper control with 
              microstepping capability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Sensing & Input</h3>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li>
                <strong className="text-stone-800">Rotary Encoder:</strong> Performs "load sensing" by measuring motor RPM to detect disc 
                presence. Distinguishes between fast "No-Load" speed and slower "Loaded" speed. This replaced 
                our original flawed plan of using 3 IR distance sensors.
              </li>
              <li>
                <strong className="text-stone-800">Pi Camera:</strong> For AI/ML-based mud detection and cleanliness verification
              </li>
              <li>
                <strong className="text-stone-800">Physical Button Panel:</strong> START, RESET, and STOP buttons for manual control
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Power Management</h3>
            <p className="text-stone-600 leading-relaxed">
              Power supply system designed to handle simultaneous high current draw from multiple motors 
              while maintaining stable voltage for the Raspberry Pi and sensors.
            </p>
          </div>
        </div>
        
        {/* Circuit Diagram */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200 bg-white">
          <div 
            ref={scrollContainerRef}
            className="relative w-full overflow-auto bg-stone-50 select-none"
            style={{ 
              maxHeight: '80vh', 
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="min-w-full p-4">
              <img 
                src="./dist/assets/images/circuit_diagram.svg" 
                alt="Circuit Diagram - KiCad Schematic" 
                className="w-full h-auto block mx-auto pointer-events-none"
                style={{ minWidth: '100%', maxWidth: 'none' }}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Software & Controls Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Software & Control Logic
        </h2>
        
        <div className="space-y-8">
          {/* System Architecture */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">System Architecture</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Our software implements a state machine that orchestrates the entire cleaning process. The system 
              continuously monitors inputs from buttons, rotary encoder, and camera, then controls outputs to 
              motors, servos, and the LCD display based on the current operational state.
            </p>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <p className="text-stone-700 text-sm font-mono">
                <strong>Inputs:</strong> Button presses (START/STOP), Rotary encoder (chuck motor RPM), Camera feed<br/>
                <strong>Outputs:</strong> Chuck motor relay, Central motor relay, Brush servo position, LCD display messages
              </p>
            </div>
          </div>

          {/* Software Architecture Diagram */}
          <div className="mb-6">
            <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
              <img 
                src="./dist/assets/images/software_architecture.png" 
                alt="Software Architecture & Data Flow Diagram" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-stone-600 leading-relaxed mt-4">
              The software architecture follows a centralized control model, where a single Python-based state 
              machine orchestrates all robot operations. To maintain modularity, hardware interactions are abstracted 
              into logical blocks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">Input Layer (Green)</h4>
                <p className="text-green-800 text-sm">
                  Handles raw signals from the button interface, rotary encoder, and camera feed. This layer debounces 
                  mechanical switches and buffers video frames to prevent blocking the main loop.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Logic Core (Blue)</h4>
                <p className="text-blue-800 text-sm">
                  The Main State Controller processes these inputs to make real-time decisions, such as detecting a stall 
                  condition or triggering a cleaning cycle. It also manages the API communication with the Roboflow cloud 
                  for defect detection.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-2">Output Layer (Red)</h4>
                <p className="text-red-800 text-sm">
                  Translates high-level commands into physical actions, managing GPIO states for the relay modules and 
                  generating PWM signals for the brush servo and LCD interface.
                </p>
              </div>
            </div>
          </div>

          {/* Camera Stream Architecture */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Camera Stream Architecture</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              To ensure low-latency image capture without blocking the main control loop, the system utilizes a 
              split-process architecture. A dedicated video streaming service runs in a separate terminal instance 
              using <code className="bg-stone-100 px-1 rounded">libcamera-vid</code>. This service interfaces directly 
              with the camera hardware and broadcasts a raw MJPEG stream over a local TCP socket (port 8888).
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The main Python control script connects to this stream only when an image is required. This decoupling 
              prevents the camera's initialization delay from slowing down the robot's real-time cleaning operations 
              and allows for easier debugging of the video feed independent of the robot's logic.
            </p>
            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <p className="text-stone-700 text-sm font-mono">
                <strong>Video Stream:</strong> libcamera-vid → TCP socket (port 8888) → OpenCV VideoCapture → Base64 encoding → Roboflow API
              </p>
            </div>
          </div>

          {/* State Machine */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">State Machine Operation</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The cleaning cycle operates through four distinct states, each handling a specific phase of the process:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-nobel-gold pl-4">
                <h4 className="font-semibold text-stone-800 mb-1">1. IDLE → WAIT_FOR_LOAD</h4>
                <p className="text-stone-600 text-sm">
                  When START is pressed, the chuck motor opens for 3 seconds to allow disc insertion. The system 
                  then waits for the user to place the disc and press START again.
                </p>
              </div>
              <div className="border-l-4 border-nobel-gold pl-4">
                <h4 className="font-semibold text-stone-800 mb-1">2. WAIT_FOR_LOAD → CLEANING</h4>
                <p className="text-stone-600 text-sm">
                  The chuck motor activates to clamp the disc. The rotary encoder monitors motor RPM, detecting 
                  when the motor stalls (indicating the disc is gripped). If no stall is detected within 5 seconds, 
                  the system returns to IDLE with an error message.
                </p>
                <div className="bg-stone-50 rounded p-3 mt-2 border border-stone-200">
                  <p className="text-stone-700 text-xs font-mono">
                    <strong>Stall Detection:</strong> Monitors encoder ticks. If the count remains unchanged for 
                    20 consecutive loops (0.2s), the disc is considered clamped.
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-nobel-gold pl-4">
                <h4 className="font-semibold text-stone-800 mb-1">3. CLEANING Cycle</h4>
                <p className="text-stone-600 text-sm">
                  The brush servo lowers to the scrubbing position, and the central motor rotates the disc for 
                  30 seconds. The LCD updates every 5 seconds showing remaining time. After cleaning, the brush 
                  retracts and the AI vision system analyzes the disc.
                </p>
              </div>
              <div className="border-l-4 border-nobel-gold pl-4">
                <h4 className="font-semibold text-stone-800 mb-1">4. CLEANING → FINISHED</h4>
                <p className="text-stone-600 text-sm">
                  If the AI detects no dirt, the system moves to FINISHED state and displays "Clean Complete!" 
                  If dirt is still detected, the system loops back to CLEANING for another wash cycle.
                </p>
              </div>
            </div>
          </div>

          {/* Machine Learning Model */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Machine Learning Dirt Detection</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              We trained a custom AI model using <strong className="text-stone-800">Roboflow</strong>, a web platform 
              that automates AI-powered image analysis. The model was trained on a dataset of 25 clean disc images and 
              25 images with visible dirt, enabling it to accurately detect dirt presence on disc surfaces.
            </p>

            {/* Image Comparison */}
            <div className="mb-6">
              <h4 className="font-semibold text-stone-800 mb-3">Model Performance Visualization</h4>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                The trained model demonstrates robust dirt detection capabilities, accurately identifying dirt particles 
                and debris while ignoring disc features such as color, logos, and printed graphics. This selective 
                detection is crucial for reliable operation across different disc designs and colors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
                  <div className="bg-stone-50 px-4 py-2 border-b border-stone-200">
                    <p className="text-sm font-semibold text-stone-700">Camera Input</p>
                    <p className="text-xs text-stone-500">Raw image captured by Pi Camera</p>
                  </div>
                  <img 
                    src="./dist/assets/images/dirty_disc.png" 
                    alt="Dirty disc as seen by camera" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-stone-200">
                  <div className="bg-stone-50 px-4 py-2 border-b border-stone-200">
                    <p className="text-sm font-semibold text-stone-700">ML Model Detection</p>
                    <p className="text-xs text-stone-500">Dirt regions identified by AI (blue bounding boxes)</p>
                  </div>
                  <img 
                    src="./dist/assets/images/dirt_detection.png" 
                    alt="ML model dirt detection with bounding boxes" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mt-4">
                As shown in the comparison above, the model successfully identifies individual dirt particles and 
                debris clusters (highlighted with blue bounding boxes) while completely ignoring the disc's pink 
                color, black logo artwork, and printed text. This demonstrates the model's ability to distinguish 
                between actual dirt contamination and the disc's inherent design features, ensuring accurate 
                cleanliness verification regardless of disc appearance.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">Roboflow Workflow</h4>
              <p className="text-blue-800 text-sm leading-relaxed mb-3">
                Our Roboflow workflow processes images through an automated pipeline:
              </p>
              <ol className="list-decimal list-inside text-blue-800 text-sm space-y-1 ml-2 mb-4">
                <li><strong>Input:</strong> Receives an image from the Raspberry Pi camera</li>
                <li><strong>Detection:</strong> Runs a segmentation model (SAM3) to identify and segment dirt regions</li>
                <li><strong>Visualization:</strong> Draws bounding boxes on detected dirt areas</li>
                <li><strong>Notification:</strong> Sends results via webhook for logging</li>
                <li><strong>Data Upload:</strong> Saves image and results to dataset for review/retraining</li>
                <li><strong>Boolean Output:</strong> Returns "true" if dirt detected, "false" if clean</li>
              </ol>
              <p className="text-blue-800 text-sm">
                <strong>Explore the workflow:</strong>{' '}
                <a 
                  href="https://app.roboflow.com/workflows/embed/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3JrZmxvd0lkIjoiZ2k0azZzeDFscWxwc1J1ZVd1YkIiLCJ3b3Jrc3BhY2VJZCI6IlFrWWFXQmI5NzNQWTNLN2pkYnlhVlBFMVV6eTIiLCJ1c2VySWQiOiJRa1lhV0JiOTczUFkzSzdqZGJ5YVZQRTFVenkyIiwiaWF0IjoxNzY2MDQ1MzY0fQ.kjzo9iuPqUFK4MCBv9G_rBWBhPuV9UrvZTv3FDnYCrU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View Roboflow Workflow
                </a>
              </p>
            </div>

            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
              <h4 className="font-semibold text-stone-800 mb-2">Integration in Software</h4>
              <p className="text-stone-700 text-sm leading-relaxed mb-3">
                The <code className="bg-white px-1 rounded text-stone-800">check_dirt_with_ai()</code> function 
                captures an image from the camera, encodes it as base64, and sends it to the Roboflow workflow API:
              </p>
              <pre className="bg-white rounded p-3 text-xs overflow-x-auto border border-stone-200">
{`# Capture image from camera
cap = cv2.VideoCapture("tcp://127.0.0.1:8888")
ret, frame = cap.read()

# Encode and send to Roboflow
img_base64 = base64.b64encode(img_encoded).decode("utf-8")
response = requests.post(WORKFLOW_URL, json={
    "api_key": API_KEY,
    "inputs": {"image": {"type": "base64", "value": img_base64}}
})

# Extract boolean result
is_dirty = result.get("outputs", [{}])[0].get("boolean", 0)
return is_dirty == 1`}
              </pre>
              <p className="text-stone-600 text-xs mt-2 italic">
                The function returns <code className="bg-white px-1 rounded">True</code> if dirt is detected, 
                triggering another cleaning cycle. Otherwise, the disc is considered clean and the process completes.
              </p>
            </div>
          </div>

          {/* Safety & Error Handling */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Safety & Error Handling</h3>
            <p className="text-stone-600 leading-relaxed mb-3">
              The system includes multiple safety mechanisms:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2 mb-6">
              <li>
                <strong className="text-stone-800">Emergency Stop:</strong> The STOP button immediately halts all 
                motors and returns the brush to home position, regardless of current state
              </li>
              <li>
                <strong className="text-stone-800">Stall Timeout:</strong> If the chuck fails to grip the disc within 
                5 seconds, the system safely returns to IDLE with an error message
              </li>
              <li>
                <strong className="text-stone-800">AI Failure Handling:</strong> If the Roboflow API call fails or 
                times out, the system defaults to assuming the disc is clean to prevent infinite cleaning loops
              </li>
              <li>
                <strong className="text-stone-800">LCD Feedback:</strong> Real-time status messages guide the user 
                through each phase of the cleaning process
              </li>
            </ul>

            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 mb-2">Active Servo Stabilization (Brownout Protection)</h4>
              <p className="text-amber-800 text-sm leading-relaxed mb-3">
                During the high-load cleaning phase, the central motor draws significant current, creating momentary 
                voltage drops (brownouts) and electrical noise that can cause the brush servo to lose holding torque 
                and drift upward. To counteract this, the software implements an <strong>active holding loop</strong>.
              </p>
              <p className="text-amber-800 text-sm leading-relaxed">
                Instead of sending a single position command, the control loop re-asserts the "brush down" PWM signal 
                at a frequency of 1Hz (once per second) throughout the entire wash cycle. This constant software 
                reinforcement forces the servo to maintain pressure on the disc despite electrical fluctuations and 
                mechanical vibrations, ensuring a consistent scrub.
              </p>
              <div className="bg-white rounded p-3 mt-3 border border-amber-200">
                <p className="text-amber-900 text-xs font-mono">
                  <strong>Implementation:</strong> During 30-second wash cycle, brush_servo.value = BRUSH_DOWN_POS 
                  is called every 1 second (within the loop), providing continuous position reinforcement
                </p>
              </div>
            </div>
          </div>

          {/* External Dependencies */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">External Software Dependencies</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The software relies on the following external libraries and services:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Operating System</h4>
                <ul className="text-stone-600 text-sm space-y-1">
                  <li>• <strong>Raspberry Pi OS</strong> - Linux-based OS for Raspberry Pi hardware</li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Programming Language</h4>
                <ul className="text-stone-600 text-sm space-y-1">
                  <li>• <strong>Python 3</strong> - Primary programming language</li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Computer Vision</h4>
                <ul className="text-stone-600 text-sm space-y-1">
                  <li>• <strong>OpenCV (cv2)</strong> - Image capture and processing</li>
                  <li>• <strong>libcamera-vid</strong> - Video streaming service for camera feed</li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Hardware Control</h4>
                <ul className="text-stone-600 text-sm space-y-1">
                  <li>• <strong>gpiozero</strong> - GPIO pin control for motors and buttons</li>
                  <li>• <strong>RPi.GPIO</strong> - Low-level GPIO access</li>
                  <li>• <strong>RPLCD</strong> - LCD display control library</li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Network & API</h4>
                <ul className="text-stone-600 text-sm space-y-1">
                  <li>• <strong>requests</strong> - HTTP library for Roboflow API calls</li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <h4 className="font-semibold text-stone-800 mb-2">Cloud Services</h4>
                <ul className="text-stone-600 text-sm space-y-1">
                  <li>• <strong>Roboflow</strong> - Cloud-based ML model inference service</li>
                </ul>
              </div>
            </div>
            <p className="text-stone-600 text-sm mt-4 italic">
              Note: Standard Python libraries (time, base64, os, threading) are also used but are included with Python by default.
            </p>
          </div>

          {/* Code Repository */}
          <div className="bg-[#F5F4F0] rounded-lg p-6 border-l-4 border-nobel-gold">
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">Source Code</h3>
            <p className="text-stone-600 mb-3">
              The complete software implementation, including the state machine, AI integration, and hardware control 
              logic, is available in our GitHub repository:
            </p>
            <a 
              href="https://github.com/ConnorHoang/Disk-Golf-Cleaner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-nobel-gold hover:text-stone-900 font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemDesign
