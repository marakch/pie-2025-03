function Learnings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Project Insights</div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Learnings
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Key insights, challenges, and lessons learned throughout the development of the Disc Golf Disc Cleaner project.
        </p>
      </div>

      {/* General Learnings & Tips Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          General Learnings & Tips
        </h2>
        <div className="bg-stone-50 rounded-lg p-6 border border-stone-200 mb-6">
          <p className="text-stone-600 leading-relaxed mb-6">
            As a team, we feel it is important to recognize our failures, strive to learn from them, and strive to make sure others do not make the same mistakes. In this spirit, we leave the following advice:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Physical Iteration:</strong> Not everything can be done analytically, numerically, or even in sim. When those options are difficult, physical iteration may be your best, even if long and costly, path to success.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Regularity & Scheduling:</strong> Regularity is key to consistent productivity. Start early and schedule co-working hours, scaffold in-class meetings, or find whichever format works best for you.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Scavenged Materials:</strong> Take care with the scrap you've scavenged. Sometimes it's old or proprietary and you can't find a datasheet. Sometimes it's damaged. Sometimes you've scavenged multiple and only the two you tested are undamaged. Repurposing old materials is great for sustainability both environmental and monetary, but be especially diligent in evaluating if the scavenged item will fulfill your needs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Communication Norms:</strong> Come up with communication norms to facilitate cross-team conversation and familiar patterns. For instance, implementing a norm that all members state they are leaving a meeting before doing so allows for final comments to be shared so that everyone is on the same page.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Seeking Outside Input:</strong> There may be a time when what is easiest, familiar, or simply best for you does not align with what is the best for others or best for the team. At this time it may be beneficial to ask for outside input, be it teammates, classmates, or teaching team to offer guidance, although the final decision will still be made among the team.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Common Design Channels:</strong> Try to create common channels for design. Separated workflows deter general cohesion and create opportunities for chaos in the form of concatenation and integration issues.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Respect:</strong> Respect is key, if a team does not respect its individual members, work will be deterred since groupmates cannot stand to work together.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Trust & Leveraging Expertise:</strong> Creating an environment of trust is key to leverage each other's skills. One person's area of expertise might be the solution for another individual's blocker.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Project Scale Considerations:</strong> Making consideration for the scale of the project early on is key. A project at any scale has to have considerations about the amount of required effort in order to complete it. If team members de-prioritize, make that clear.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border-l-4 border-nobel-gold">
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-stone-900">Enthusiasm & Team Effort:</strong> One has to be enthusiastic to help. Completing your own task has no merit if your teammate is still blocked on theirs. Inconsistencies in progress create blockers for one another. Be excited to help out and make sure that the project progresses steadily. A group project is a team effort, the "I am done with my part, I do not care" mentality is poison to team cohesion.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-300 text-center">
            <p className="text-stone-600 italic">
              We wish you all the best and better in your own work,
            </p>
            <p className="text-stone-800 font-semibold mt-2">
              Team Disc Golf
            </p>
          </div>
        </div>
      </div>

      {/* Mechanical Issues & Lessons Learned Section */}
      <div className="mb-16 pb-8 border-b border-stone-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
          Mechanical Issues & Lessons Learned
        </h2>
        
        <div className="space-y-8">
          {/* Material Choice and Fabrication */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Material Choice and Fabrication</h3>
            
            <p className="text-stone-600 leading-relaxed mb-4">
              As with any project, there are always bound to be issues and mishaps which cause designs to be reconsidered and solutions to be implemented in order to maintain workflow as well as stay on schedule. The bulk of issues can be summed into two main categories: material choice/fabrication, and design integration.
            </p>
            
            <p className="text-stone-600 leading-relaxed mb-4">
              Though somewhat of a short consideration in the beginning of a project, comparatively to the other topics, material choice is paramount of justifying designs. A good design is only justified through the choice of materials to support its intended purpose.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-stone-400">
                <h4 className="font-semibold text-stone-800 mb-2">Outer Enclosure: Eucalyptus Hardboard</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The outer enclosure was designed with the choice of eucalyptus hardboard in mind. This material choice allowed for easy fabrication of what essentially were the panels of a box. Since the panels themselves were essentially a 2D consideration when looking at the enclosure as the sum of its components. Additionally, recutting extra space for new mounting holes as well as entry points for pneumatics and UI considerations were made quite facile with "euca-board" since fabricating and editing with the laser cutter is a simple task.
                </p>
              </div>

              <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-stone-400">
                <h4 className="font-semibold text-stone-800 mb-2">Inner Enclosure: 22 Gauge Mild Steel Sheet Metal</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The inner enclosure was chosen to be made out of 22 gauge mild-steel sheet metal due to the consideration of facility in cleaning the inner enclosure from all the dirt and grime flapped off of the intaken disk. Additionally a consideration was made with the top panel of the enclosure bending due to the weight load from the electronics. Additionally, sheet metal tools were easy to access out of normal shop hours, and plasma cut manufacturing, while not extremely precise due to the nature of its kerf, aided in reading areas impossible with the sheet metal tools shear force nature.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">
                  The long blade was not the most accurate tool, and the more precise angle cutter was not designed to cut stock the size which was necessary for the enclosure panels. Future considerations might lean towards plasma cutting for large cuts and then sheet metal tools for precise clean-up.
                </p>
              </div>

              <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-stone-400">
                <h4 className="font-semibold text-stone-800 mb-2">Brackets: 22 Gauge Mild Steel</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  In terms of all the brackets, which connected everything to the base and allowed for the enclosures to maintain shape and structure, the same mild steel was utilized, yet 22 gauge. The brackets did not require a certain thickness and are designed to hold a certain redundancy. In this vein, the same consideration of 22 gauge thickness was not needed due to the strength of the design. Fabrication was relatively simple with sheet metal tools being more maneuverable with smaller sheet metal pieces.
                </p>
              </div>

              <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-stone-400">
                <h4 className="font-semibold text-stone-800 mb-2">Grate: Plywood & Aluminum Shield</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The load-bearing grate was designed with plywood due to its multi-axial load bearing capabilities; an area where traditional wood fails often. Since normal wood has a grain structure, it is very strong to force acting in one direction in its length, yet weak when the force acts on the axis of its width. Plywood is composed of multiple sheets of wood in different directions, which allow for the strong load bearing capabilities of one direction to compensate for another sheet's weak structure in a different direction.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">
                  Finite element analysis demonstrated a strong safety factor for plywood, while traditionally wood edged on the limit of uncertainty. The grate shield was made out of aluminum sheet metal due to its same moisture wicking properties as other stock metals, yet it was less costly and weighed much less, which reduced the load the plywood grate had to suspend.
                </p>
              </div>

              <div className="bg-stone-50 rounded-lg p-4 border-l-4 border-stone-400">
                <h4 className="font-semibold text-stone-800 mb-2">3D Printed Components: PLA Plastic</h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Most non-load-bearing components were manufactured with PLA plastic, manufactured through the FDM Prusa and Bamboo carbon 3D printers. Normal 15% infill, and level 2 perimeter settings were utilized for most non structural components. For the brush assembly brackets, the motor mount, and the grate support brackets were designed with 5-8 level perimeters, which ensured structural strength while reducing print times as PLA waste.
                </p>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">
                  For most rapid iteration, the Prusa's proximity and general availability made for facile use. Yet, the Bamboo carbons had greater accuracy, could allow for more interactive designs with less worries of failure and had shorter printing times. The only shortcoming were the open hours of the foundry, which limited its use to important components that had been designed, verified and required longer print times.
                </p>
              </div>
            </div>
          </div>

          {/* Integration Issues */}
          <div>
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Integration Challenges</h3>
            
            <p className="text-stone-600 leading-relaxed mb-4">
              In terms of integration issues, there were some serious design shortcomings that matured into awkward assembly and integration issues. But PIE is all about integration and learning that there will never be a lack of issues to come forward. The key process is to identify the issues, what caused them, how to solve them in the short term, and then how to implement long term solutions that allow for more redundant design verification.
            </p>

            <div className="space-y-4">
              <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                <h4 className="font-semibold text-amber-900 mb-2">Measurement Discrepancies</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  One issue that had no structural issues but caused some annoyance with aesthetics was the inaccuracy of certain given objects. For example, the base was originally measured to be of a certain length, which was demonstrated on the design, but when the panels were fabricated and installed to create the enclosure, there was a discrepancy between the design and reality: the base board was slightly wider than measured. This caused the side panels to flare-out slightly at the bottom, which was a big enough annoyance to be perceivable, yet small enough to not merit redesign and acquisition of new manufacturing materials.
                </p>
                <p className="text-amber-800 text-sm leading-relaxed mt-2">
                  Additionally, many electronics and hinges utilized did not have any schematics or CAD models, which made designing their mounting points more difficult and imprecise since the value that the design followed were based off of caliper readings.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-2">Electrical Conductivity Issues</h4>
                <p className="text-red-800 text-sm leading-relaxed">
                  One consideration not made that came back as an issue during electrical testing was the inner enclosure's electrical conductivity, due to the nature of mild steel. This caused issues with noise, inconsistent power distortion, and generally many unknown problems that were only resolved due to the implementation of electrical tape as a second layer to the electronics. Future considerations for electronics mounting might include a thin sheet of rubber or any other electric insulator.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">Chuck Assembly Integration</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Another issue with integration was a separation between the chuck assembly design and the rest of the mechanical assembly, since the latter was wholly unaware of the smaller details of the chuck assembly, there was much testing which led to mechanical issues that needed to be repaired quite late in the process. This delayed testing and caused issues with creating a minimum viable product. Future considerations would be to consolidate designs continually through more mechanical meetings.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2">Electronics Integration Challenges</h4>
                <p className="text-purple-800 text-sm leading-relaxed">
                  Finally, integrating electronics as well as the interfaces to interact with their end-points, the motor actuations, was difficult due to sudden needs for mechanical changes, which required disassembly and subtractive manufacturing. One such case was the additional need of integration of a switch that allowed the chuck motor to change direction and allow for the chuck to tighten around a disc and loosen to allow the disc to be collected. This could not be done programmatically and needed a physical switch for the user to do so. While the actual integration of a print mounting design as well as spacing consideration on the front panel was not difficult in of itself, disassembling the front panel was time consuming and dragged members away from other tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learnings

