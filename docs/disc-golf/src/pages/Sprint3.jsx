import { Link } from 'react-router-dom'

function Sprint3() {
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
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Development Phase 3</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Sprint 3: Fabrication & Integration
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mb-6"></div>
        <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
          During Sprint 3, we focused on full fabrication of all components and final system integration. 
          We overcame major hardware failures and successfully got our machine learning model working 
          with over 98% accuracy.
        </p>
      </div>

      {/* Sprint Goal */}
      <div className="mb-12 bg-[#F5F4F0] rounded-lg p-8 border-l-4 border-nobel-gold">
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-3">Sprint 3 Goal</h2>
        <p className="text-stone-700">
          Complete fabrication of all components, resolve space claims within the enclosure, 
          and achieve full system integration with working software.
        </p>
      </div>

      {/* Major Pivots */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Major Pivots This Sprint</h2>
        
        <div className="space-y-6">
          {/* Pi Failure */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-2 flex items-center">
              <span className="mr-2">⚠️</span> Raspberry Pi 5 Failure
            </h3>
            <p className="text-red-800 mb-3">
              Our Raspberry Pi 5 fried unexpectedly, forcing us to migrate our entire system to a Raspberry Pi 4.
            </p>
            <div className="bg-white rounded p-4 border border-red-100">
              <p className="text-stone-700 text-sm mb-2">
                <span className="font-medium">The Risk:</span> The Pi 4 has significantly less processing power. 
                We anticipated the full-fidelity AI model could oversaturate the older CPU, causing inference latency.
              </p>
              <p className="text-stone-700 text-sm">
                <span className="font-medium">Our Solution:</span> We used Roboflow's cloud-based inference instead 
                of running the model locally, which works perfectly with the Pi 4's capabilities.
            </p>
          </div>
          </div>

          {/* Motor Failure */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 mb-2 flex items-center">
              <span className="mr-2">🔧</span> Central Motor Failure
            </h3>
            <p className="text-amber-800 mb-3">
              Our original central motor broke during testing. We pivoted to using an 
              <span className="font-medium"> HP C6409-60004 Motor</span> as a replacement, which we successfully 
              integrated with our existing motor mount and control system.
            </p>
          </div>
        </div>
      </div>

      {/* Biggest Challenge */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Our Biggest Challenge & How We Overcame It</h2>
        
        <div className="border border-stone-200 rounded-lg p-6 bg-white">
          <h3 className="text-xl font-semibold text-stone-900 mb-3">Resolving Conflicting Space Claims</h3>
          <p className="text-stone-600 leading-relaxed mb-4">
          We had conflicting space claims within the inner enclosure between the chuck, slip ring, 
          brush assembly, and central motor. The vertical "stack-up" height was critical. If the 
          central motor was mounted too high or low, it would interfere with the slip ring assembly 
          or the enclosure lid.
          </p>
          <h4 className="font-semibold text-stone-800 mb-2">Steps to Resolution:</h4>
          <ol className="list-decimal list-inside text-stone-600 space-y-2 ml-2">
            <li><span className="font-medium">Component Isolation:</span> We measured the absolute Z-height requirements of the slip ring and brush assembly individually</li>
            <li><span className="font-medium">Calculated Stack-up:</span> Performed hand calculations to determine the exact necessary clearance for the central motor relative to the chuck</li>
            <li><span className="font-medium">Derived Fabrication Specs:</span> Used these calculations to define the motor mounting height before finalizing CAD/cuts, ensuring the physical assembly would fit on the first attempt</li>
          </ol>
        </div>
            </div>

      {/* What We Built */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">What We Built</h2>
        
        <div className="space-y-8">
          {/* ML Model */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <div className="flex items-center mb-3">
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded mr-3">98%+ ACCURACY</span>
              <h3 className="text-xl font-semibold text-stone-900">Machine Learning Dirt Detection</h3>
            </div>
            <p className="text-stone-600 leading-relaxed mb-4">
              We set up our machine learning model on Roboflow and got it working on the Raspberry Pi 
              with over 98% accuracy. The workflow is:
            </p>
            <ol className="list-decimal list-inside text-stone-600 space-y-2 ml-2">
              <li>The Pi camera takes an image of the disc</li>
              <li>The image is sent to Roboflow via their workflow API</li>
              <li>Roboflow returns a binary value indicating whether dirt is detected</li>
              <li>The system decides whether to continue cleaning or mark the disc as clean</li>
            </ol>
          </div>

          {/* CAD Updates */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">CAD Updates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Chuck:</h4>
                <ul className="list-disc list-inside text-stone-600 space-y-1 text-sm">
                  <li>Final motor mount design</li>
                  <li>Crown gear on scroll plate</li>
                  <li>Spur gear integration with motor shaft</li>
                </ul>
            </div>
            <div>
                <h4 className="font-medium text-stone-800 mb-2">Enclosure:</h4>
                <ul className="list-disc list-inside text-stone-600 space-y-1 text-sm">
                  <li>Final mechanical drawings for base plate</li>
                  <li>Inner enclosure supports finalized</li>
                  <li>Screw hole locations determined</li>
                  <li>Motor mount supports completed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fabrication */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Fabrication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Laser Cutter:</h4>
                <p className="text-stone-600 text-sm">Outer enclosure walls</p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Plasma Cutter:</h4>
                <p className="text-stone-600 text-sm">Inner enclosure walls, sheet metal grate</p>
            </div>
            <div>
                <h4 className="font-medium text-stone-800 mb-2">ShopBot:</h4>
                <p className="text-stone-600 text-sm">Wood grate</p>
            </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">3D Printers:</h4>
                <p className="text-stone-600 text-sm">Chuck, jaws, gear train housing, brush assembly</p>
          </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Sheet Metal Tools:</h4>
                <p className="text-stone-600 text-sm">Brackets, inner enclosure walls</p>
            </div>
            <div>
                <h4 className="font-medium text-stone-800 mb-2">Hand Tools:</h4>
                <p className="text-stone-600 text-sm">Full assembly of all enclosures</p>
              </div>
            </div>
          </div>

          {/* Electrical */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Electrical System</h3>
            <p className="text-stone-600 leading-relaxed mb-3">
              We completed the full electrical wiring and created detailed schematics in KiCAD. 
              Our approach to fidelity:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1 ml-2">
              <li>Used WAGO nuts to test electrical systems, allowing wire length to match mechanical constraints</li>
              <li>Color-mapped wires on breadboards for easy debugging</li>
              <li>Created professional schematics in KiCAD for documentation</li>
            </ul>
          </div>

          {/* Software Architecture */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Software Architecture</h3>
            <p className="text-stone-600 leading-relaxed mb-3">
              We organized our software into clear modules:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded p-4">
                <h4 className="font-medium text-green-800 mb-2">Inputs (Sensors)</h4>
                <p className="text-green-700 text-sm">Handle raw electrical signals and send info like "Button Pressed" or "RPM is 300" to the main controller</p>
              </div>
              <div className="bg-blue-50 rounded p-4">
                <h4 className="font-medium text-blue-800 mb-2">Logic (Controller)</h4>
                <p className="text-blue-700 text-sm">AI work runs in its own file so heavy image processing doesn't freeze the main loop</p>
              </div>
              <div className="bg-red-50 rounded p-4">
                <h4 className="font-medium text-red-800 mb-2">Outputs (Motors)</h4>
                <p className="text-red-700 text-sm">Controller sends commands to drivers, which handle spinning motors and updating the screen</p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Issue */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Additional Challenge: Camera Placement</h2>
        
        <div className="border border-stone-200 rounded-lg p-6 bg-white">
          <h3 className="text-xl font-semibold text-stone-900 mb-3">Disc Too High for Camera View</h3>
          <p className="text-stone-600 leading-relaxed mb-4">
            We discovered that the placement of our disc was too high relative to the camera, 
            which meant the camera couldn't see as much of the disc surface as we needed for 
            accurate dirt detection.
        </p>
          <h4 className="font-semibold text-stone-800 mb-2">Our Solution:</h4>
          <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
            <li>Purchased a new Arducam with a wider 120° field of view to capture more of the disc</li>
            <li>Currently exploring ways to bring the disc lower, either by cutting down the shaft or other mechanical adjustments</li>
          </ul>
        </div>
      </div>

      {/* Current Status */}
      <div className="mb-12 bg-[#F5F4F0] rounded-lg p-8">
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Current Status</h2>
        <p className="text-stone-700 mb-4">
          Our desired goal was to have MVP done by 12/14/2025 to leave room for pneumatic integration 
          as a mini-sprint if time permits.
        </p>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Machine learning dirt detection working with 98%+ accuracy
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Full enclosure fabricated and assembled
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            Electrical system wired and documented
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✓</span>
            New 120° Arducam purchased to fix camera view issue
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Full system integration (in progress)
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Pneumatics integration (stretch goal)
          </li>
        </ul>
      </div>

      {/* Next Steps */}
      <div className="mb-12 bg-amber-50 border border-amber-200 rounded-lg p-8">
        <h2 className="font-serif text-xl font-bold text-amber-900 mb-4">Next Steps</h2>
        <ul className="space-y-2 text-amber-800">
          <li className="flex items-start">
            <span className="mr-2">→</span>
            Get everything fully integrated into a working system
          </li>
          <li className="flex items-start">
            <span className="mr-2">→</span>
            Resolve disc height issue (cut shaft or mechanical adjustment)
          </li>
          <li className="flex items-start">
            <span className="mr-2">→</span>
            Complete final testing and validation
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-stone-200">
        <Link 
          to="/process/sprint2" 
          className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
        >
          ← Previous: Sprint 2
        </Link>
        <Link 
          to="/process" 
          className="text-nobel-gold hover:text-stone-900 font-medium transition-colors"
        >
          Back to Process →
        </Link>
      </div>
    </div>
  )
}

export default Sprint3
