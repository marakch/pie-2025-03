function Team() {
  const teamMembers = [
    {
      name: "Connor Hoang",
      role: "Electrical & Computer Systems (EE/CS)",
      learningGoal: "Gain hands-on experience with component specification and system integration. Learn how to properly spec electrical components for real-world applications and work with the Raspberry Pi in a complex system with multiple sensors and actuators.",
      reflection: "",
      photo: "./dist/assets/images/connor2.png",
      linkedin: "https://www.linkedin.com/in/cdhoang/"
    },
    {
      name: "Hong Zhang",
      role: "Electrical & Computer Systems (EE/CS)",
      learningGoal: "Develop expertise in full-stack embedded systems development, from hardware specification to software implementation. Learn to properly spec, wire, and program the Raspberry Pi to integrate all electrical components with mechanical systems. Additionally, learn how to train and implement a machine learning model for real-world applications like dirt detection.",
      reflection: "I learned a tremendous amount throughout this project. This was my first time working with a Raspberry Pi, and I learned how it works and the entire process of setting it up, from flashing the OS to configuring GPIO pins and integrating sensors and actuators. I also set up my first machine learning model and learned a lot about the pipeline, from data collection and annotation to training the model on Roboflow and integrating it into our control system via API calls. One of the biggest challenges I faced was learning how difficult it is to think about mechanical considerations while coding. When writing software, it's easy to assume everything will work perfectly, but in reality, physical constraints like wire routing, component placement, and mechanical tolerances significantly impact how the code needs to be structured.",
      photo: "./dist/assets/images/hong_yi_zhang.JPEG",
      linkedin: "https://www.linkedin.com/in/hong-yi-zhang"
    },
    {
      name: "Henry Tejada Deras",
      role: "Electrical & Computer Systems (EE/CS)",
      learningGoal: "Gain experience speccing out and designing a complete mechanical system, then fabricating it using shop tools. Learn proper fabrication techniques and understand how design decisions affect manufacturability.",
      reflection: "Overall, I am very happy with what I have gotten from the project. It was great to get a lot of fabrication and mechanical design thinking experience. Getting a lot of experience working with CAD and tools that I would not normally get to work with as a student studying Electrical and Computer Engineering. Dealing with spacing challenges and constraints imposed by the machines we have available was both tricky and rewarding to work with. In the end, I am glad to have been able to learn and briefly iterate on mechanical designs and learn more about the mechanical aspects that go into a project.",
      photo: "./dist/assets/images/henry.jpeg",
      linkedin: "https://www.linkedin.com/in/henry-neftaly-tejada-deras/"
    },
    {
      name: "Mateo Otero-Diaz",
      role: "Mechanical Engineering (ME)",
      learningGoal: "Design a viable, well-scoped system that demonstrates tangible mechanical engineering skills through the complete design lifecycle: from concept and CAD design through fabrication and testing.",
      reflection: "Disc Golf opened my eyes to many lessons as well as accomplishments. While the project did not pan out in the manner I expected within the timespan given, there were many personal accomplishments I can personally take pride in: improvements in design and modeling, understanding the whole design cycle, understanding how electrical circuits work outside of the classroom setting, and the importance of creating a team dynamics that effectively works towards the expected common goal. My personal learning goals were met partially. While I cannot say that disc golf has turned into a finished project, mechanically the design feels sound and representative of the effort that it took to create an aesthetically oriented final product that searches to create the desired capabilities. Additionally, while not noted, I was able to delve into the world of electronics and \"get a taste\" for the frustrations that come with electronics and electrical engineering. One of my core career goals as an engineer is to have a systems approach to projects, which means that while my focus is mechanically-oriented, I have a strong enough understanding of electronics and software in order to pinpoint issues and have that inform my mechanical designs. In terms of working on a team, Olin's core tenets of its teaching style emphasize both failure as a teacher and working on a team is just as important as the technical issues. I felt that both these topics were simultaneously and even encountered together in the form of how I learned about teaming in this experience. One aspect that I remember Professor Donald Ger emphasizing in Products and Markets is that a project is only as good as its team, and a team that does not like or tolerate collaboration will not succeed. I learned that sacrifice and respect are key tenets of trying to make a team work. In terms of coworking design, one major issue that I felt caused issues up to demo day was the separation of CAD systems. Originally, the team began with PTC Onshape, as it was one member's preferred system. One shortcoming I am not proud of, and will concede as being a blocker I caused, was my shift to Autodesk Fusion 360 as my primary system for design. While the aforementioned member continued to work on the chuck system in Onshape, I, along with another team member, worked on creating the rest of the design in Fusion 360. That latter team member was utilized as a middleman between both systems and their designs, which was incredibly inefficient, and boiled down to a personal inability to sacrifice my own comfort for team cohesion. I am not faultness, and my \"preaching\" of sacrifice is due to my own learned failures. I refused to adapt to the team, and this resulted in an inefficient workflow that ignored integration between both systems until the final day. Many of my team members emphasized their own boundaries for work early in the project timelines, and while I may feel the need to put in the time and effort to create an end-product that I believe is representative of my abilities, others have responsibilities and work-life schedules outside of PIE. Finding a good middle-round between asking your team to join you in putting in the effort and not creating an abusive work environment is a fine line, yet paramount to the team's success. Additionally, while not everyone on the team may enjoy coworking, this project has taught me that constant engagement with teammates and check-ins, especially when in the same subteam, is key to avoiding issues down the line. Sometimes you do not get to choose your teammates or coworkers, but putting in the effort to make sure that personal qualms do not deter progress should be the first ticket on the docket. A team that cannot learn to tolerate each other will never want to work together cohesively. One aspect that I am proud of is my personal involvement in trying to jettison the team to take perspective of the current progress after the second spring review: we were not where we wanted to be and everyone knew that yet did not want to speak up. I delivered the words of pain but reality, which I believed allowed our team to jumpstart our progress and arrive where we did on demo day. I strongly believe that had we maintained the same pace, we would not have even approached the end product we came out with towards the end. In the end, I can say I learned the most about teaming, mechanical design as a lifecycle was a secondary lesson, and my introduction to realistic electronic design was a side-lesson that I stand proud with. I am proud of my effort within this project, but still wary of the lessons I learned about my own actions and how they can cause issues. I hope to carry the fruits of these lessons into future projects where they can be better implemented.",
      photo: "./dist/assets/images/mateo.jpeg",
      linkedin: "https://www.linkedin.com/in/mateo-otero-diaz/"
    },
    {
      name: "Emily Boyd",
      role: "Mechanical Engineering (ME)",
      learningGoal: "Design a more complex mechanism with multiple interacting parts, including the custom chuck and motor integration.",
      reflection: "The final chuck mechanism did not end up working fully as intended due to torque of the tightness motor being higher than expected. Instead of just spinning the scroll plate, the tightness motor spun the full chuck instead. There were also challenges with not having enough room for the wire which meant that the central shaft needed to be longer and the gear connected to the tightness motor needed to be larger due to the increased spacing. If I had more time, I would figure out a way to affix housing of the chuck to the central shaft to prevent it from rotating when the scroll plate was rotating. Overall I am proud of the mechanism that I designed and how well it held a frisbee while being spun. While it did not work fully as intended, I learned crown gears and building complex assemblies on my own.",
      linkedin: "https://www.linkedin.com/in/emily-boyd-66505137a/"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase animate-fade-in-up" style={{ animationDelay: '0s' }}>Our People</div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Team & Reflections
        </h1>
        <div className="w-20 h-1 bg-nobel-gold mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Meet our team and learn about their individual learning goals and reflections from this project.
        </p>
      </div>

      {/* Top Row - 3 Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {teamMembers.slice(0, 3).map((member, index) => (
          <a
            key={index}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-nobel-gold group cursor-pointer block"
          >
            {/* Header with Avatar, Name, Role */}
            <div className="text-center mb-8">
              <div className="w-28 h-28 rounded-full bg-stone-100 flex items-center justify-center text-nobel-gold font-serif font-bold text-2xl mx-auto mb-5 border border-stone-200 group-hover:border-nobel-gold transition-colors shadow-inner overflow-hidden">
                {member.photo ? (
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    style={member.name === "Hong Zhang" 
                      ? { objectPosition: '50% 15%', transform: 'scale(3) translateX(-22%)' }
                      : member.name === "Henry Tejada Deras"
                      ? { objectPosition: '30% -10%', transform: 'scale(1.3) translateX(0%) translateY(0%)' }
                      : member.name === "Connor Hoang"
                      ? { transform: 'scale(1.2)' }
                      : {}
                    }
                  />
                ) : (
                  member.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                {member.name}
              </h3>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">
                {member.role}
              </p>
            </div>
            
            {/* Initial Learning Goal */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-2"></span>
                Initial Goal
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                {member.learningGoal}
              </p>
            </div>

            {/* Reflection */}
            <div>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mr-2"></span>
                Reflection
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm italic">
                {member.reflection || "Coming soon..."}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Row - 2 Members Centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {teamMembers.slice(3, 5).map((member, index) => (
          <a
            key={index + 3}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-nobel-gold group cursor-pointer block"
          >
            {/* Header with Avatar, Name, Role */}
            <div className="text-center mb-8">
              <div className="w-28 h-28 rounded-full bg-stone-100 flex items-center justify-center text-nobel-gold font-serif font-bold text-2xl mx-auto mb-5 border border-stone-200 group-hover:border-nobel-gold transition-colors shadow-inner overflow-hidden">
                {member.photo ? (
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    style={member.name === "Hong Zhang" 
                      ? { objectPosition: '50% 20%', transform: 'scale(3) translateX(-22%)' }
                      : member.name === "Henry Tejada Deras"
                      ? { objectPosition: '30% 30%', transform: 'scale(1.1) translateX(-50%) translateY(-40%)' }
                      : {}
                    }
                  />
                ) : (
                  member.name.split(' ').map(n => n[0]).join('')
                )}
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                {member.name}
              </h3>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">
                {member.role}
              </p>
            </div>
            
            {/* Initial Learning Goal */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-2"></span>
                Initial Goal
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                {member.learningGoal}
              </p>
            </div>

            {/* Reflection */}
            <div>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mr-2"></span>
                Reflection
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm italic">
                {member.reflection || "Coming soon..."}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Team
