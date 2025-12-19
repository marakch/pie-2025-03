import { useState, useRef } from 'react'

function SystemDesign() {
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [scrollLeft, setScrollLeft] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [isEnergyFlowZoomed, setIsEnergyFlowZoomed] = useState(false)
  const [isSystemArchitectureZoomed, setIsSystemArchitectureZoomed] = useState(false)
  const [isWiringDiagramZoomed, setIsWiringDiagramZoomed] = useState(false)
  const [isWiringDiagramSVGZoomed, setIsWiringDiagramSVGZoomed] = useState(false)
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

      {/* Table of Contents */}
      <div className="mb-16 bg-stone-50 rounded-lg p-6 border border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Table of Contents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <a 
            href="#system-architecture" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('system-architecture')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            System Architecture
          </a>
          <a 
            href="#data-energy-flow" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('data-energy-flow')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            Data & Energy Flow
          </a>
          <a 
            href="#design-process" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('design-process')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            Design Process & Trade-offs
          </a>
          <a 
            href="#enclosure-design" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('enclosure-design')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            Enclosure Design
          </a>
          <a 
            href="#chuck-design" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('chuck-design')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            3-Jaw Chuck Design
          </a>
          <a 
            href="#brush-assembly" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('brush-assembly')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            Brush Assembly
          </a>
          <a 
            href="#grate-assembly" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('grate-assembly')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            Grate Assembly
          </a>
          <a 
            href="#electrical-design" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('electrical-design')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            Electrical Design
          </a>
          <a 
            href="#software-controls" 
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('software-controls')?.scrollIntoView({ behavior: 'auto', block: 'start' })
            }}
            className="text-stone-600 hover:text-nobel-gold transition-colors text-sm flex items-center cursor-pointer"
          >
            <span className="mr-2">→</span>
            Software & Control Logic
          </a>
        </div>
      </div>

      {/* System Architecture Section */}
      <div id="system-architecture" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          System Architecture
        </h2>
        <p className="text-stone-600 mb-6 leading-relaxed">
          The Disc Golf Disc Cleaner integrates mechanical, electrical, and software subsystems. 
          The block diagram below shows all major components and how they connect to each other, 
          including the Raspberry Pi controller, motor drivers, sensors, and user interface elements.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setIsSystemArchitectureZoomed(true)}>
          <img 
            src="./dist/assets/images/system_diagram.jpg" 
            alt="System Architecture Block Diagram" 
            className="w-full h-auto"
          />
          <div className="bg-stone-50 p-2 text-center">
            <p className="text-stone-500 text-xs">Click to zoom</p>
          </div>
        </div>

        {/* Wiring Diagram */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Wiring Diagram</h3>
          <p className="text-stone-600 mb-4 leading-relaxed">
            Detailed wiring diagram showing the electrical connections between components, including the Raspberry Pi GPIO pins, relays, motors, sensors, and control panel elements.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setIsWiringDiagramZoomed(true)}>
            <img 
              src="./dist/assets/images/wiring_diagram.jpg" 
              alt="Wiring Diagram" 
              className="w-full h-auto"
            />
            <div className="bg-stone-50 p-2 text-center">
              <p className="text-stone-500 text-xs">Click to zoom</p>
            </div>
          </div>

          {/* SVG Wiring Diagram */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg border border-stone-200 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setIsWiringDiagramSVGZoomed(true)}>
            <img 
              src="./dist/assets/images/disk_golf_wiring_diagram.svg" 
              alt="Wiring Diagram SVG" 
              className="w-full h-auto"
            />
            <div className="bg-stone-50 p-2 text-center">
              <p className="text-stone-500 text-xs">Click to zoom</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Architecture Zoom Modal */}
      {isSystemArchitectureZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsSystemArchitectureZoomed(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl">
            <button
              onClick={() => setIsSystemArchitectureZoomed(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-stone-100 transition-colors"
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              src="./dist/assets/images/system_diagram.jpg" 
              alt="System Architecture Block Diagram - Zoomed" 
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Wiring Diagram Zoom Modal */}
      {isWiringDiagramZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsWiringDiagramZoomed(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl">
            <button
              onClick={() => setIsWiringDiagramZoomed(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-stone-100 transition-colors"
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              src="./dist/assets/images/wiring_diagram.jpg" 
              alt="Wiring Diagram - Zoomed" 
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Wiring Diagram SVG Zoom Modal */}
      {isWiringDiagramSVGZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsWiringDiagramSVGZoomed(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl">
            <button
              onClick={() => setIsWiringDiagramSVGZoomed(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-stone-100 transition-colors"
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              src="./dist/assets/images/disk_golf_wiring_diagram.svg" 
              alt="Wiring Diagram SVG - Zoomed" 
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Data & Energy Flow Section */}
      <div id="data-energy-flow" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Data & Energy Flow
        </h2>
        <p className="text-stone-600 mb-6 leading-relaxed">
          This diagram illustrates how information and power move through the system. 
          Data flow includes sensor readings, button inputs, and control signals. 
          Energy flow shows power distribution from the supply through the fuse box 
          to motors, the Raspberry Pi, and peripheral devices.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setIsEnergyFlowZoomed(true)}>
          <img 
            src="./dist/assets/images/energy_flow.jpg" 
            alt="Data and Energy Flow Diagram" 
            className="w-full h-auto"
          />
          <div className="bg-stone-50 p-2 text-center">
            <p className="text-stone-500 text-xs">Click to zoom</p>
          </div>
        </div>
      </div>

      {/* Energy Flow Zoom Modal */}
      {isEnergyFlowZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsEnergyFlowZoomed(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl">
            <button
              onClick={() => setIsEnergyFlowZoomed(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-stone-100 transition-colors"
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              src="./dist/assets/images/energy_flow.jpg" 
              alt="Data and Energy Flow Diagram - Zoomed" 
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Design Process & Trade-offs Section */}
      <div id="design-process" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.25s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Design Process & Trade-offs
        </h2>
        
        <p className="text-stone-600 mb-6 leading-relaxed">
          After fairly quickly settling on the idea of cleaning disc golf discs, our design process started with a group brainstorming session ideating the various mechanisms we could implement to complete our self-assigned task. Upon settling on the general design, we assigned out sub assemblies of the larger mechanism to various teammates in an effort to promote ownership and got to work on sprint 1, agreeing to an ad hoc style of team management.
        </p>

        <div className="space-y-8">
          {/* Material Selection Trade-offs */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Material Selection</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Material choices were driven by a combination of budget constraints, fabrication learning goals, and functional requirements. We prioritized materials that were cost-effective, easy to modify, and suitable for our mechanical needs.
            </p>
            <div className="bg-stone-50 rounded-lg p-5 border-l-4 border-nobel-gold mb-4">
              <h4 className="font-semibold text-stone-900 mb-2">Outer Enclosure: Eucalyptus Hardboard</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Chosen for its ease of fabrication with laser cutting, allowing for rapid iteration and modifications. The 2D panel-based design made it simple to recut panels for new mounting holes or entry points. This material choice balanced aesthetics with manufacturability and cost.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-5 border-l-4 border-nobel-gold mb-4">
              <h4 className="font-semibold text-stone-900 mb-2">Inner Enclosure: 16 Gauge Mild Steel Sheet Metal</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Selected for its ease of cleaning and structural strength. The metal surface resists dirt adhesion better than alternatives like acrylic. Sheet metal tools were accessible outside normal shop hours, enabling faster iteration. However, we later discovered electrical conductivity issues that required insulating tape, highlighting the importance of considering all material properties, not just mechanical ones.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-5 border-l-4 border-nobel-gold mb-4">
              <h4 className="font-semibold text-stone-900 mb-2">Grate: Plywood</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Chosen over traditional wood for its multi-axial load-bearing capabilities. Finite element analysis showed plywood provided adequate safety factors while traditional wood would be at the limit. The multi-directional grain structure compensates for directional weaknesses, making it ideal for supporting the disc during cleaning.
              </p>
            </div>
            <div className="bg-stone-50 rounded-lg p-5 border-l-4 border-nobel-gold">
              <h4 className="font-semibold text-stone-900 mb-2">3D Printed Components: PLA Plastic</h4>
              <p className="text-stone-700 text-sm leading-relaxed">
                Used for non-load-bearing components with standard 15% infill. For structural components like brush assembly brackets and motor mounts, we increased to 5-8 level perimeters to ensure strength while minimizing print time and material waste. The Prusa printers offered proximity and availability, while Bamboo carbon printers provided greater accuracy for critical components.
              </p>
            </div>
          </div>

          {/* CAD System Trade-off */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-4">CAD System Split</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              One significant trade-off we made was splitting our CAD work between two systems: PTC Onshape and Autodesk Fusion 360. While this allowed team members to work in their preferred environments, it created integration challenges that required a team member to act as a "middleman" between systems. This inefficiency became apparent during final integration, teaching us the importance of unified design workflows for team cohesion.
            </p>
            <p className="text-stone-600 leading-relaxed">
              <strong>Trade-off:</strong> Individual comfort and productivity vs. team efficiency and integration ease. In future projects, we would prioritize team cohesion over personal preference.
            </p>
          </div>

          {/* Component Selection Trade-offs */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Component Selection & Pivots</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Raspberry Pi 5 → Pi 4</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  When our Raspberry Pi 5 failed unexpectedly, we pivoted to a Pi 4. Rather than running AI inference locally (which could oversaturate the Pi 4's CPU), we chose Roboflow's cloud-based inference API. This trade-off of cloud dependency for performance allowed us to maintain functionality while working within hardware constraints.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-5 border-l-4 border-amber-500">
                <h4 className="font-semibold text-amber-900 mb-2">Central Motor Replacement</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  After our original motor broke during testing, we replaced it with a 12V/18V 200W DC Planet Gear Motor. This pivot was driven by availability and compatibility with our existing motor mount. The replacement motor provided adequate torque while fitting within our budget and timeline constraints.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2">Chuck Motor with Slip Ring</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  We chose a small motor with an inbuilt encoder for the chuck mechanism to minimize load on the central motor. Since the chuck motor rotates with the chuck assembly, we integrated a slip ring ($68.57) to allow stationary power transmission. This was more expensive than alternatives but necessary for the self-tightening functionality we prioritized.
                </p>
              </div>
            </div>
          </div>

          {/* Design Philosophy Trade-offs */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Design Philosophy Decisions</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">No Adhesives Policy</h4>
                <p className="text-green-800 text-sm leading-relaxed">
                  We avoided adhesives entirely, opting for mechanical brackets instead. While glue might have been faster, brackets provide more reliable load-bearing connections and allow for easier disassembly and repairs. This decision prioritized long-term reliability and maintainability over initial assembly speed.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-2">Pneumatics as Stretch Goal</h4>
                <p className="text-red-800 text-sm leading-relaxed">
                  Pneumatics was designated as a stretch goal from the beginning, recognizing that our $250 budget and timeline constraints might not allow full implementation. We prioritized core functionality (detection, clamping, brushing, AI vision) over the enhanced cleaning capability that pneumatics would provide. This trade-off allowed us to deliver a functional MVP while leaving room for future enhancement.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-5 border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-900 mb-2">Brush Assembly Constraints</h4>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  The brush assembly was constrained to a 128×100×180mm box to optimize positioning relative to disc height. Weight was also a critical constraint since the system mounts on the back wall. We chose bevel gears to translate z-axis servo rotation into x-axis brush motion, accepting the complexity of a gear train in exchange for precise control and space efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Budget-Driven Decisions */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Budget Considerations</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              With a $250 budget, we made several cost-conscious decisions:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li><strong>Scavenged Components:</strong> We repurposed switches, buttons, and other components from previous projects, significantly reducing costs but requiring careful evaluation of component condition and compatibility.</li>
              <li><strong>Material Optimization:</strong> We chose materials that balanced cost with functionality: eucalyptus hardboard over more expensive wood, sheet metal over acrylic, and PLA for 3D printing.</li>
              <li><strong>Component Prioritization:</strong> Higher-cost items like the slip ring ($68.57) were justified for core functionality, while pneumatics components were purchased but not fully integrated due to time constraints.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-[#F5F4F0] rounded-lg p-6 border-l-4 border-nobel-gold">
          <p className="text-stone-700 leading-relaxed">
            Keep reading for more information on each subsystem's detailed design rationale.
          </p>
        </div>
      </div>

      {/* Enclosure Design Section */}
      <div id="enclosure-design" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.3s' }}>
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
              src="./dist/assets/images/Enclosure.png" 
              alt="Enclosure CAD Rendering" 
              className="w-full h-auto"
            />
            <div className="p-3 bg-white">
              <p className="text-stone-600 text-sm">Enclosure CAD model showing dual-enclosure design</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
            <img 
              src="./dist/assets/images/Inner Enclosure Supports.png" 
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
      <div id="chuck-design" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.4s' }}>
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

      {/* Brush Assembly Section */}
      <div id="brush-assembly" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.42s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Brush Assembly
        </h2>
        
        <p className="text-stone-600 mb-6 leading-relaxed">
          The brush assembly serves one point within the overall "disc golf" system: to raise and lower the "brush" which will clean the disc golf. Within the assembly there are 10 components: the scrub daddy "brush", the servo motor, the servo mount, the gear train mount, the 24-tooth bevel pinion, the 48-tooth bevel gear, the shaft, the shaft spacer, the "brush" arm, and the scrub daddy mounts.
        </p>

        {/* Annotated Brush Assembly Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="./dist/assets/images/annotated_brush_assembly.png" 
            alt="Annotated Brush Assembly CAD rendering showing gear train, servo motor, shaft, and arm mounting wheel" 
            className="w-full h-auto"
          />
        </div>

        {/* Design Constraints */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Design Constraints</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              For the construction of all the supporting members of the brush assembly, the combined area was designed to be limited to a 128 by 100 by 180 millimeter box. This constraint was imposed to optimize "brush" positioning regarding the height of the test disc-golf when rested upon the chuck surface. Another constraint was weight, the system itself would be mounted on the back wall, which would mean that any extraneous weight would reduce the brush system's performance.
            </p>
            <p className="text-stone-600 leading-relaxed">
              In this vein, the gear train mount and the servo mount were designed to minimize width by cutting unnecessary walls and features, yet still maintaining the required strength to hold up the shaft, servo motor, gear train, brush arm and "brush". The wall paneling mounting points for these mounts were chosen to lay flush to the wall and "in-line" to align the servo pinion to the shaft which held the driven gear. In order to assure no x-axis translation of the driven gear on the shaft, 3D-printed spacers were mounted onto the shaft. Specifically for the servo-mount, channels for wiring were iterated upon and drawn in order to optimize wire-harnessing and facilitate electrical integration.
            </p>
          </div>

          {/* Arm Design */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Arm Design</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              In order to attach the driven gear to the "brush" arm, the gear was manufactured to have a rear circular mounting that would allow for arm-mounting holes. This design choice did raise concerns with spacing constraints, but was designed with those limitations in mind, as well as the concern that the "brush" arm would interfere with the shaft spacer.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The arm itself was designed to have two straight portions, with an angled change differentiating them. This angle was chosen purposely to maintain a flat and flush brush when the servo was actuated. In other words, if the "upper-arm" was parallel to the ground, the brush was in its "idle" position, but when the fore-arm was parallel with the ground, the brush was flat against the disc and in its "actuated" position.
            </p>
          </div>

          {/* Gear Train */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Gear Train</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The gear train itself is only composed of the 24-tooth driving pinion and the 48-tooth driven gear. The "brush" actuation process is simply the driving motion of the servo motor being transferred to the pinion, which then "steps-up" the torque of the system when the motion is exchanged between the pinion and the gear. Bevel gears were chosen in order to translate the z-axis rotation of the back-wall mounted servo-motor into x-axis rotation of the driven gear. This x-axis motion would then translate the "brush" "up" and "down", allowing for the brush to remain idle out of use, and then actuated onto the disc when in use.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              This process occurs since the tooth ratio between the driver and driven gear is 1:2, which corresponds to a twofold increase in output torque, yet also a twofold decrease in output angular velocity. Since the only actual worry is the brush assembly delivering a high enough torque to counteract the resting torque, which is exerted by the weight of the scrub daddy applied at the distance equal to the length of the "brush" arm length, the increase in torque is prioritized over the decrease in angular velocity.
            </p>
            
            {/* Math Equations */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-4">
              <p className="text-stone-700 mb-3 font-medium">Gear Ratio Relationships:</p>
              <div className="space-y-2 text-stone-600 font-mono text-sm">
                <p>Gear ratio ∝ τ | Gear ratio ∝ ω | ω ∝ 1/τ</p>
              </div>
            </div>
          </div>

          {/* Torque Calculations */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Torque Analysis & Justification</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              To justify the 1:2 gear ratio design decision, hand-calculations were drawn to compare the resting torque exerted by the scrub daddy compared to the "stepped-up" torque of the gear train. The factory specification for the maximum exerted torque by the model HS-425BB servo motor available the project landed between 3.3 - 4.1 kg·cm. The scrub daddy weighs 3 to 4 grams, and the amount of predicted PLA filament usage of a printed arm of the supposed dimensions is about 7 grams. Choosing the value which reflects the worst-case weight, the total weight lands around 0.011 kilograms. The arm itself, though angled at x degrees, measures at 0.194 meters.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Through simple hand calcs listed below, the resting torque of the arm paired with the scrub daddy is at around 0.021 newton-meters. Converting a conservative max torque value of 3.3 kg·cm to Nm for the servo, will return a value of 0.32 newton-meters. When stepped-up by the gear-train, this will result in a conservative max-torque value of 0.64 newton-meters.
            </p>
            
            {/* Math Calculations */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 my-4">
              <p className="text-stone-700 mb-3 font-medium">Torque Conversion Calculations:</p>
              <div className="space-y-3 text-stone-600 font-mono text-sm">
                <p>3.3 kg·cm → 3.3 kg·cm · (9.81 N/kg) · (m/100 cm) = 0.32 Nm</p>
                <p>0.011 kg · 0.194 m = 0.021 Nm (resting torque)</p>
                <p>0.32 Nm · 2 (gear ratio) = 0.64 Nm (stepped-up torque)</p>
              </div>
            </div>

            <p className="text-stone-600 leading-relaxed">
              While 0.64 newton-meters might seem "overkill" for a resting gravitational torque of 0.021 newton-meters, the scrub-daddy "brush" was an actual pivot from an actual wood-handle, horse-hair long brush, which exerted a resting torque of 0.5 newton-meters. While the gear train did accommodate the resting torque of the original brush, due to spatial constraints, and issues with mounting, the scrub-daddy system was implemented. With this change in standard, the safety factor for the actuation of the "brush" motor was now exceedingly higher, which allows for more minute adjustment and reduction of mechanical fault for possible troubleshooting purposes.
            </p>
          </div>
        </div>
      </div>

      {/* Grate Assembly Section */}
      <div id="grate-assembly" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.43s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Grate Assembly
        </h2>
        
        <p className="text-stone-600 mb-6 leading-relaxed">
          The grate assembly has two key functions: keep the central motor and its chuck systems suspended, and to allow the flow of grime from the dish to fall into the dust pan. The assembly itself is fairly simple: the grate mounts, the grate cover, the grate, the motor mount, and the motor mount supports.
        </p>

        {/* Annotated Grate Assembly Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg border border-stone-200">
          <img 
            src="./dist/assets/images/annotated_grate_assembly.png" 
            alt="Annotated Grate Assembly showing central motor, gear train, grate mounts, and motor mount supports" 
            className="w-full h-auto"
          />
        </div>

        {/* Design Constraints and Mounting */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Spatial Constraints & Mounting</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Working within the 300 × 300 millimeter z-x-axis spatial constraints, the grate had to be mounted low enough in order for the camera to have a large enough field-of-vision that could allow the ML model to make its data collection and analysis, yet high enough for the bottom of the motor not to interfere with the dust pan.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Given these constraints, 3D-printed PLA brackets were fastened with wood screws onto the wood enclosure support brackets. To allow for quick reparations and facile iterative testing, the mounts were chosen to have tight yet ample enough fits with the grate in order for quick removal, yet stable enough to not induce any vibrational fatigue in the plywood grate.
            </p>
          </div>

          {/* Grate and Grate Cover Design */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Grate and Grate Cover Design</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The grate and the grate cover were both designed with the constraints of the 300×300 millimeter space limitations, yet also with the idea that dimensions that matched that exact space would inhibit facile installation and de-installation. In that vein, the grate and grate cover were designed to "sit" on the mounts, but for their "arms" to not then push flush against the walls created by the wooden enclosure support brackets.
            </p>
            <p className="text-stone-600 leading-relaxed">
              The chosen materials for the grate and the grate cover followed the basic analysis for each component's purpose: the grate had to be lightweight and easy to iterate with as well as strong in all directions, and the grate cover had to make sure to protect the grate from any debris damage. To this point, the grate was chosen to be manufactured in plywood for its multi-axial strength due to its pluri-layer makeup, which makes up for traditional wood's one-direction grain weakness. The cover was machined out of sheet metal in order to minimize any additional weight as well as to protect the grate from any mud or moisture which might otherwise weaken its load-bearing capabilities.
            </p>
          </div>

          {/* Motor Mount Design */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Motor Mount Design</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The motor mount was designed around three core concepts: suspend the motor, create a strong yet weight-efficient connection to the grate, and protect the motor. To that end, the motor mount was inspired by the shape of a yogurt cup. The "cusp" of the mount would allow for mounting to the grate as well as to the motor, and the body would protect the motor body from any unwanted presences in the form of grime or plywood offshoots. The body was designed to be "concentric" with the square opening in the middle of the grate, but not flush in order to allow any fasteners for the motor to pass through.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Additionally, during the first few iterations, connection was a major issue due to the fact that mounting points on the motor were wholly skewed on one side, which would not create a tight fit when the motor was upright, and then would tilt when taut. The problem area was identified to be the plastic deformation of the mount itself when applied extra pressure under the tightening of the fasteners. Spacers were then added in order to move the pressure point upwards and to negate the possibility of the tilt effect from occurring.
            </p>
          </div>

          {/* Stress Analysis */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Structural Analysis</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Finally, to justify material and design choices, a static stress test was run in order to observe the simulated displacement, stress concentrations and strain due to a perceived load of 20 Newtons, an overestimation of the total weight that the grate and its motor mounts would be subject to. The results demonstrated a high safety factor with minimal displacement and no perceivable dangers of failure.
            </p>

            {/* Stress Test Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
                <img 
                  src="./dist/assets/images/stress_test_1.png" 
                  alt="Von Mises stress analysis showing stress distribution with maximum stress of 13.122 MPa" 
                  className="w-full h-auto"
                />
                <div className="p-3 bg-white">
                  <p className="text-stone-600 text-sm font-semibold mb-1">Von Mises Stress Analysis</p>
                  <p className="text-stone-500 text-xs">Maximum stress: 13.122 MPa at load application points. Stress concentrations visible at beam connections to central plate.</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm border border-stone-200">
                <img 
                  src="./dist/assets/images/stress_test_2.png" 
                  alt="Displacement analysis showing maximum displacement of 0.017 mm under 20N load" 
                  className="w-full h-auto"
                />
                <div className="p-3 bg-white">
                  <p className="text-stone-600 text-sm font-semibold mb-1">Displacement Analysis</p>
                  <p className="text-stone-500 text-xs">Maximum displacement: 0.017 mm at central plate. Fixed supports at beam ends show zero displacement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Electrical Design Section */}
      <div id="electrical-design" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Electrical Design
        </h2>
        
        <div className="space-y-8 mb-8">
          {/* Overview and Power */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Overview and Power</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              The general layout of our electrical system is as follows: A LiPo battery connects through an E-stop to a fusebox that acts as the power distribution hub (PDH) for the whole system. The PDH has output voltages of 22.2V for the primary motors or, through a buck converter, 5V for smaller devices. A Raspberry Pi 4b, powered off 5V from the PDH, then connects GPIO pins to close relays, get sensor readings, and control the UI.
            </p>
          </div>

          {/* Central Motor */}
          <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-400">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Central Motor</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Description</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The central motor's electrical system consists of a relay, diode, and the motor itself. Rated for 24V, we supplied 22.2V directly from the PDH. The relay and diode across the power line allow the Raspberry Pi to control when the motor is on or off.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Requirements</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  We needed control over when the motor spun up or slowed down. We needed enough torque to spin the complete chuck subassembly. We needed a high enough rpm to have an abrasive cleaning function. Should the chuck friction values fail and the chuck motor spins the whole chuck as opposed to just the scroll plate, the motor must be disconnected to not send backwards current through the power system.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Justification</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  To have control over when the motor spins up or slows down we included the relay used to disconnect the motor from power. As we knew our power constraints (22.2V) from the LiPo battery, we ordered a motor that is able to fully rotate the chuck mechanism at an acceptable speed for abrasive cleaning to work.
                </p>
              </div>
            </div>
          </div>

          {/* Chuck Motor */}
          <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-400">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Chuck Motor</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Description</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The chuck motor's electrical system consists of a relay, diode, slip ring, motor controller, and the motor itself. Most notable is the use of a slip ring in this design. The slip ring was necessary to provide power to the motor while the motor itself gets spun by the central motor, along with the chuck mechanism. The chuck motor is used to automatically adjust the tightness of the chuck mechanism without direct user input. The chuck motor can be disconnected from the rest of the circuit using a relay; this is used to prevent backwards current from flowing back into the electrical system when the chuck is being spun.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Requirements</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The motor must be able to spin the chuck just enough to tighten the chuck teeth but not enough to damage the disc golf disc. The motor must be able to run on a maximum of 22.2 V.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Justification</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The chuck needs to be able to be spun by a motor to provide self-tightening functionality, so we chose a small motor with an inbuilt motor encoder to minimize the load on the central motor. Since the chuck motor is being rotated along with the chuck, we purchased a slip ring to allow for stationary wires to be sent back to the PDH and Raspberry Pi, while the rotating wires in being free spinning remain untangled.
                </p>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-400">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Control Panel</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Description</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The control panel consists of an LCD display, two buttons used for navigating the UI, an E-Stop, and a switch used for manually switching the polarity of the chuck motor. The main purpose of the control panel is to interface with the disc golf cleaner and input settings for how you would like your disc golf disc cleaned. The switch to change the chuck motor's polarity was added in the last few days due to not having any hardware to reverse the polarity and thus reverse the direction of where the chuck was spinning (an oversight during the design process).
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Requirements</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  There needs to be an E-stop, a display for information, and two buttons for users to control the system. The two buttons need to use a 3.3 V logic level.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Justification</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  We needed a way for the user to tell the system to immediately stop operations in case of emergency, for which we introduced the emergency stop button. We also needed to provide an interface for the user to tell the system when to clean the disc and for how long for which we introduced the UI. The buttons allow for user control of the system, in particular, allowing for the machine to start and a graceful stop if a wash needs to stop, but the E-stop is not warranted. The button colors were selected to align with industry-standard "Start/Stop" semantics, ensuring the interface is intuitive for the operator.
                </p>
              </div>
            </div>
          </div>

          {/* Pneumatics */}
          <div className="bg-stone-50 rounded-lg p-6 border-l-4 border-stone-400">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Pneumatics</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Description</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The pneumatic system conceptually consists of an electrically controlled valve, pneumatic tubing, an air compressor, and an air pressure sensor. The air pressure sensor is used for diagnostics with the pneumatics system and to adjust the cleaning cycle time based on the pressure in the system. The electrically controlled valve allows the system to control when compressed air is being dispensed. Currently, there is no implementation for how the system would control the air compressor. A likely implementation would involve disconnecting power to the air compressor using some sort of relay or electronically controlled switch mechanism.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Requirements</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The components must be able to be run using a maximum of 22.2 V, rated for a minimum of 55 PSI, and ultimately able to dislodge waste from the disc.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Justification</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  This was a stretch goal that would aid in cleaning off debris from the disc golf disc. The compressed air would theoretically help remove already loose debris, allowing the machine to better target the debris that is very stuck on the disc and would allow the brush to stay cleaner for longer and due to it removing less debris. The system would run at 40 PSI to achieve the proper exit velocity, but for safety precautions, we allotted some additional 55 PSI headroom.
                </p>
              </div>
            </div>
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
                src="./dist/assets/images/disk_golf_electrical_system.svg" 
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
      <div id="software-controls" className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up scroll-mt-24" style={{ animationDelay: '0.6s' }}>
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
