import { useState, useEffect } from 'react'

function Documentation() {
  const [zoomedImage, setZoomedImage] = useState(null)

  const handleImageClick = (src, alt) => {
    setZoomedImage({ src, alt })
  }

  const closeZoom = () => {
    setZoomedImage(null)
  }

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && zoomedImage) {
        setZoomedImage(null)
      }
    }

    if (zoomedImage) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [zoomedImage])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Project Resources</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Documentation & Photos
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Additional documentation, build photos, and resources.
        </p>
      </div>

      {/* Mechanical Photos Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
          Mechanical
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/chuck.png" 
              alt="Chuck Assembly CAD" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/chuck.png", "Chuck Assembly CAD")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Chuck Assembly CAD</h3>
              <p className="text-stone-500 text-sm mt-1">3D CAD rendering of the 3-jaw chuck mechanism</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/chuck_thing.png" 
              alt="Chuck Component Detail" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/chuck_thing.png", "Chuck Component Detail")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Chuck Component Detail</h3>
              <p className="text-stone-500 text-sm mt-1">Detailed CAD view of chuck mechanism components</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/chuckplate.jpeg" 
              alt="Chuck Plate" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/chuckplate.jpeg", "Chuck Plate")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Chuck Plate</h3>
              <p className="text-stone-500 text-sm mt-1">Physical chuck plate component with scroll mechanism</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/base_grid.jpeg" 
              alt="Base Grid Structure" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/base_grid.jpeg", "Base Grid Structure")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Base Grid Structure</h3>
              <p className="text-stone-500 text-sm mt-1">Grid-based base structure for component mounting</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/enclosure_draft.jpeg" 
              alt="Enclosure Draft" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/enclosure_draft.jpeg", "Enclosure Draft")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Enclosure Draft</h3>
              <p className="text-stone-500 text-sm mt-1">Early draft of the enclosure design and layout</p>
            </div>
          </div>
        </div>
        
        {/* Brush Servo CAD Video */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg border border-stone-200">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-auto"
              style={{ borderRadius: '8px' }}
            >
              <source src="./dist/assets/images/brush_servo_cad.mov" type="video/quicktime" />
              <source src="./dist/assets/images/brush_servo_cad.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-stone-600 text-sm mt-3 italic">
            CAD animation of how the brush system works
          </p>
        </div>
      </div>

      {/* Design Sketches Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
          Design Sketches & Ideation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/Rotation Mechanism Ideation.png" 
              alt="Rotation Mechanism Ideation" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/Rotation Mechanism Ideation.png", "Rotation Mechanism Ideation")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Rotation Mechanism Ideation</h3>
              <p className="text-stone-500 text-sm mt-1">Early sketches exploring disc rotation and clamping mechanisms</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/Central Motor Mount Ideation.png" 
              alt="Central Motor Mount Ideation" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/Central Motor Mount Ideation.png", "Central Motor Mount Ideation")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Central Motor Mount Ideation</h3>
              <p className="text-stone-500 text-sm mt-1">Conceptual sketches for motor mounting and structural dimensions</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/Pneumatic System Overview.png" 
              alt="Pneumatic System Overview" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/Pneumatic System Overview.png", "Pneumatic System Overview")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Pneumatic System Overview</h3>
              <p className="text-stone-500 text-sm mt-1">Hand-drawn diagrams of pneumatic system layout and pressure control</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/Pmeumatic System Overview v2.png" 
              alt="Pneumatic System Overview v2" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/Pmeumatic System Overview v2.png", "Pneumatic System Overview v2")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Pneumatic System Overview v2</h3>
              <p className="text-stone-500 text-sm mt-1">Updated pneumatic system diagrams with brush assembly and tubing details</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/Overall Enclosure Design.png" 
              alt="Overall Enclosure Design" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/Overall Enclosure Design.png", "Overall Enclosure Design")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Overall Enclosure Design</h3>
              <p className="text-stone-500 text-sm mt-1">Layout sketches showing enclosure dimensions and component placement</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/Proposed Adjustments to CAD to account for Wood Size.png" 
              alt="Proposed Adjustments to CAD" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/Proposed Adjustments to CAD to account for Wood Size.png", "Proposed Adjustments to CAD")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">CAD Adjustments for Wood Size</h3>
              <p className="text-stone-500 text-sm mt-1">Design modifications to accommodate available wood dimensions</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/motor_calcs.png" 
              alt="Motor Calculations" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/motor_calcs.png", "Motor Calculations")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Motor Calculations</h3>
              <p className="text-stone-500 text-sm mt-1">Handwritten calculations for motor power, torque, and angular velocity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wiring Photos Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
          Wiring & Electrical
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/wiring.jpg" 
              alt="Internal Wiring Overview" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/wiring.jpg", "Internal Wiring Overview")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Internal Wiring Overview</h3>
              <p className="text-stone-500 text-sm mt-1">Top-down view of the electronics panel showing Raspberry Pi, relays, and power management components</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/wiring_under.jpg" 
              alt="Underside Wiring" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/wiring_under.jpg", "Underside Wiring")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Underside Wiring</h3>
              <p className="text-stone-500 text-sm mt-1">View from below showing motor mounts, solenoid valve, and cable routing</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all hover:shadow-lg">
            <img 
              src="./dist/assets/images/wiring_back.jpg" 
              alt="Back Panel Wiring" 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onClick={() => handleImageClick("./dist/assets/images/wiring_back.jpg", "Back Panel Wiring")}
            />
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-stone-900">Back Panel Wiring</h3>
              <p className="text-stone-500 text-sm mt-1">Close-up of the back panel showing chuck motor connections and solenoid valve wiring</p>
            </div>
          </div>
        </div>
      </div>


      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeZoom}
        >
          <div className="relative max-w-7xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl">
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 text-3xl font-bold z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-stone-100 transition-colors"
              aria-label="Close zoom"
            >
              ×
            </button>
            <img 
              src={zoomedImage.src} 
              alt={zoomedImage.alt} 
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Documentation
