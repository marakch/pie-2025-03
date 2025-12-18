import { Link } from 'react-router-dom'

function Sprint2() {
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
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Development Phase 2</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Sprint 2: Scaling Up & Integration
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mb-6"></div>
        <p className="text-stone-600 text-lg leading-relaxed max-w-3xl">
          During Sprint 2, we transitioned from benchtop prototypes to full-scale components. 
          We focused on finalizing materials, fabricating all components, and improving our team organization.
        </p>
      </div>

      {/* Sprint Goal */}
      <div className="mb-12 bg-[#F5F4F0] rounded-lg p-8 border-l-4 border-nobel-gold">
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-3">Sprint 2 Goal</h2>
        <p className="text-stone-700">
          Scale up from benchtop prototypes to full-scale components. Finalize materials and approaches, 
          and fabricate all components for integration.
        </p>
      </div>

      {/* Team Process Improvement */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">How We Improved Our Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">✓ What Worked Well</h3>
            <ul className="text-green-800 space-y-2">
              <li>• Very productive co-working hours</li>
              <li>• Improved team communication</li>
              <li>• Everyone committed throughout</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 mb-2">△ What We Changed</h3>
            <ul className="text-amber-800 space-y-2">
              <li>• We weren't organized before</li>
              <li>• Tasks were getting lost</li>
              <li>• Unclear who was working on what</li>
            </ul>
          </div>
        </div>

        <div className="border border-stone-200 rounded-lg p-6 bg-white">
          <h3 className="text-xl font-semibold text-stone-900 mb-3">New Approach: Ad Hoc Task Management</h3>
          <p className="text-stone-600 leading-relaxed mb-4">
            In Sprint 1, we were in "scrambling" mode, still finalizing core design pivots while half our team 
            was at the SHPE conference. For Sprint 2, we adopted a more organized structure:
          </p>
          <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
            <li>We delegate tasks based on who has time and which tasks align with personal learning goals</li>
            <li>We use a central task spreadsheet to hold everyone accountable</li>
            <li>The spreadsheet tracks deadlines and keeps everyone working in sync</li>
          </ul>
        </div>
      </div>

      {/* What We Built */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">What We Built</h2>
        
        <div className="space-y-8">
          {/* Enclosure */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Enclosure</h3>
            <p className="text-stone-600 leading-relaxed">
              We completed the external enclosure CAD design and laser cut the internal enclosure. 
              The enclosure now has a front door for disc insertion and a dustpan at the bottom 
              for waste collection. We also determined the central motor location.
            </p>
          </div>

          {/* Chuck */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Frisbee Chuck</h3>
            <p className="text-stone-600 leading-relaxed mb-3">
              We created full-scale CAD for the chuck and made a 50% scale version to test tolerances 
              and offsets. We also worked on:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1 ml-2">
              <li>Testing different clamp shapes for optimal grip</li>
              <li>Redesigning the clamps for better frisbee compatibility</li>
              <li>Integrating the chuck with the central motor</li>
            </ul>
          </div>

          {/* Rotary Encoder */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Custom Rotary Encoder Setup</h3>
            <p className="text-stone-600 leading-relaxed">
              We finished building a custom housing for the rotary encoder and got the load sensing 
              system working. The encoder can now detect when a disc is present by measuring the 
              difference between "no-load" and "loaded" motor speeds.
            </p>
          </div>

          {/* Brush Assembly */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Brush Assembly</h3>
            <p className="text-stone-600 leading-relaxed">
              We continued developing the brush mechanism, working on the servo-controlled "wrist" 
              that positions the brush across the disc surface.
            </p>
          </div>

          {/* Circuit Diagram */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Circuit Diagram</h3>
            <p className="text-stone-600 leading-relaxed">
              We started creating a complete circuit diagram showing all electrical connections 
              including power distribution. This helps ensure proper wiring during final assembly.
            </p>
          </div>

          {/* Camera Vision */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Camera Vision Progress</h3>
            <p className="text-stone-600 leading-relaxed">
              We set up the camera with the Raspberry Pi and began working on grime detection. 
              The disc will be considered "clean" when our ML model no longer detects any mud spots.
            </p>
          </div>

          {/* Pneumatics */}
          <div className="border border-stone-200 rounded-lg p-6 bg-white hover:border-nobel-gold transition-colors">
            <h3 className="text-xl font-semibold text-stone-900 mb-3">Pneumatics Research</h3>
            <p className="text-stone-600 leading-relaxed">
              We found the pneumatic system connection points. Pneumatics are likely but not required 
              for the final product. It's a nice-to-have feature.
            </p>
          </div>
        </div>
      </div>

      {/* Task Tracking Highlights */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Key Tasks Completed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">Pi peripherals and monitor setup</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">Camera connected to Raspberry Pi</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">Rotary encoder housing completed</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">Central motor location determined</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">External enclosure CAD completed</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">Internal enclosure laser cut</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">Clamps redesigned for frisbee</span>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg border border-stone-200">
            <span className="text-green-600 mr-3">✓</span>
            <span className="text-stone-700">Stepper motor software figured out</span>
          </div>
        </div>
      </div>

      {/* Goals Confirmation */}
      <div className="mb-12 bg-[#F5F4F0] rounded-lg p-8">
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Final Goals: Unchanged</h2>
        <p className="text-stone-700 mb-4">
          Given our skills, progress, and projected effort, we felt confident we could reach our original goal. 
          Our final machine will include:
        </p>
        <ul className="space-y-2 text-stone-700">
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Enclosure with door and dustpan for waste collection
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Disc detection via rotary encoder load sensing
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Custom chuck for secure disc rotation
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            Two-sided cleaning with user flip prompt
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            AI vision detection to confirm cleanliness
          </li>
          <li className="flex items-start">
            <span className="text-nobel-gold mr-2">→</span>
            GUI for status and instructions
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-stone-200">
        <Link 
          to="/process/sprint1" 
          className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
        >
          ← Previous: Sprint 1
        </Link>
        <Link 
          to="/process/sprint3" 
          className="bg-nobel-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors"
        >
          Next: Sprint 3 →
        </Link>
      </div>
    </div>
  )
}

export default Sprint2
