import { Link } from 'react-router-dom'
import { DiscScene } from '../components/DiscScene'

function Home() {
  const scrollToFeatures = (e) => {
    e.preventDefault()
    const element = document.getElementById('features')
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div>
      {/* Hero Section - Full Screen */}
      <header className="relative h-[110vh] flex items-center justify-center overflow-hidden -mt-16">
        {/* 3D Flying Discs Background */}
        <DiscScene />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.7)_0%,rgba(249,248,244,0.3)_50%,rgba(249,248,244,0.1)_100%)]" />

        <div className="relative z-20 container mx-auto px-6 flex flex-col justify-between h-full pt-32 pb-8">
          <div className="text-center flex-grow flex flex-col justify-center">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-stone-900 drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '0s' }}>
              Disc Golf Disc Cleaner
            </h1>
            
            <p className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-stone-600 font-light mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Automated Cleaning Station
            </p>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A fully automated, Raspberry Pi-powered station that combines smart load sensing with precision mechanics to detect, clamp, and clean discs with consistent reliability.
            </p>
          </div>
          
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#features" onClick={scrollToFeatures} className="group flex flex-col items-center gap-3 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
              <span className="tracking-[0.2em] uppercase">Discover</span>
              <span className="p-3 border-2 border-stone-300 rounded-full group-hover:border-stone-900 transition-all bg-white/60 backdrop-blur-sm group-hover:bg-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Product Overview Section */}
      <div id="features" className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Product Image */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <img 
                src="https://placehold.co/600x600/C9A668/ffffff?text=Final+Product" 
                alt="Automated Disc Cleaner" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Features & Details */}
          <div className="lg:col-span-7">
            <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">CORE FEATURES</div>
            <h2 className="font-serif text-4xl mb-6 text-stone-900">Automated Disc Cleaning Station</h2>
            
            <p className="text-lg text-stone-600 leading-relaxed mb-10">
              A complete electromechanical system that autonomously detects, secures, and cleans disc golf discs. Our solution integrates advanced load sensing, precision motor control, and computer vision to ensure a perfect clean every cycle.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Intelligent Control System</h4>
                   <p className="text-stone-600">Raspberry Pi 5 orchestrates all sensors, motors, and AI vision logic.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Smart Load Sensing</h4>
                   <p className="text-stone-600">Rotary encoder detects disc presence by monitoring motor RPM changes.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Secure 3-Jaw Chuck</h4>
                   <p className="text-stone-600">Custom-designed mechanism safely clamps and rotates discs during cleaning.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Automated Deep Clean</h4>
                   <p className="text-stone-600">Servo-actuated brushes scrub both sides while pneumatics remove debris.</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">AI Quality Verification</h4>
                   <p className="text-stone-600">Integrated Pi Camera with ML model confirms cleanliness in real-time.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Interactive Interface</h4>
                   <p className="text-stone-600">Polished touchscreen GUI combined with physical controls for intuitive operation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery & Demo Section */}
      <div className="mb-20 bg-white border-t border-stone-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Media</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Gallery & Demo</h2>
          </div>

          {/* Demo Video */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-6 text-center">Final Demo Video</h3>
            <div className="aspect-video bg-stone-50 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center border border-stone-200">
              <div className="text-center">
                <svg 
                  className="mx-auto h-24 w-24 text-stone-400 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <p className="text-stone-500 text-lg">
                  Demo Video Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-6 text-center">Project Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all transform hover:scale-105 hover:shadow-md">
                  <img 
                    src={`https://placehold.co/400x300/C9A668/ffffff?text=Photo+${num}`}
                    alt={`Project photo ${num}`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
