import { Link } from 'react-router-dom'

function Process() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Development Journey</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Design Process & Rationale
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg mb-16 text-center max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Follow our journey through three sprints of iterative design, prototyping, and integration. 
          Click on any sprint to explore the details.
        </p>
      </div>

      {/* GitHub-Style Tree Timeline - Centered */}
      <div className="relative max-w-6xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        {/* Main Vertical Line - CENTERED */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-400 transform -translate-x-1/2"></div>
        
        {/* Timeline Items */}
        <div className="space-y-32">
          {/* Sprint 1 - LEFT BRANCH */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Dot on CENTER LINE - at midpoint */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-4 border-stone-400 shadow-sm z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Short line ONLY in the gap - from center to left */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-8 h-px bg-stone-400 z-10 transform -translate-x-full -translate-y-1/2"></div>
            
            {/* Content on LEFT */}
            <div className="md:order-1 order-2 flex justify-end">
              <Link to="/process/sprint1" className="group block w-full">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 group-hover:shadow-lg group-hover:border-nobel-gold group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-nobel-gold font-serif font-bold text-xl mr-4 border border-stone-100">
                      01
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Sprint 1: Ideation</h3>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    Concept development, initial prototyping, and feasibility analysis
                  </p>
                  <div className="flex items-center text-stone-500 font-semibold text-sm uppercase tracking-wider group-hover:text-nobel-gold transition-colors">
                    <span>Explore Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Empty space on RIGHT */}
            <div className="hidden md:block md:order-2"></div>
          </div>

          {/* Sprint 2 - RIGHT BRANCH */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Dot on CENTER LINE - at midpoint */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-4 border-nobel-gold shadow-sm z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Short line ONLY in the gap - from center to right */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-8 h-px bg-stone-400 z-10 transform -translate-y-1/2"></div>
            
            {/* Empty space on LEFT */}
            <div className="hidden md:block md:order-1"></div>
            
            {/* Content on RIGHT */}
            <div className="md:order-2 order-2 flex justify-start">
              <Link to="/process/sprint2" className="group block w-full">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 group-hover:shadow-lg group-hover:border-nobel-gold group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-nobel-gold font-serif font-bold text-xl mr-4 border border-stone-100">
                      02
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Sprint 2: Prototyping</h3>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    Subsystem development, testing, and component integration
                  </p>
                  <div className="flex items-center text-stone-500 font-semibold text-sm uppercase tracking-wider group-hover:text-nobel-gold transition-colors">
                    <span>Explore Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Sprint 3 - LEFT BRANCH */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Dot on CENTER LINE - at midpoint */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-white rounded-full border-4 border-stone-900 shadow-sm z-20 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Short line ONLY in the gap - from center to left */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-8 h-px bg-stone-400 z-10 transform -translate-x-full -translate-y-1/2"></div>
            
            {/* Content on LEFT */}
            <div className="md:order-1 order-2 flex justify-end">
              <Link to="/process/sprint3" className="group block w-full">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 group-hover:shadow-lg group-hover:border-nobel-gold group-hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-nobel-gold font-serif font-bold text-xl mr-4 border border-stone-100">
                      03
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">Sprint 3: Integration</h3>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">
                    System integration, comprehensive testing, and MVP delivery
                  </p>
                  <div className="flex items-center text-stone-500 font-semibold text-sm uppercase tracking-wider group-hover:text-nobel-gold transition-colors">
                    <span>Explore Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Empty space on RIGHT */}
            <div className="hidden md:block md:order-2"></div>
          </div>
        </div>
      </div>

      {/* Quick Overview Section */}
    </div>
  )
}

export default Process
