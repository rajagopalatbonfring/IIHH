import React from 'react'
import Tilt from 'react-parallax-tilt';

import cloudClose from '../../assets/closeCloud.png';

const teamSection = () => {
  return (
    <>

        {/* Team Section */}
        <section id="team" className="py-24 relative bg-[#036e8d]">
          <img 
            src={cloudClose} 
            className="w-full absolute top-0 left-0 object-cover object-top" 
            style={{ transform: 'translateY(-50%)'}}
          />
          <div className="container mx-auto px-8 md:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Our Leadership <span className='text-[#ffd278] inline-block transform hover:scale-x-105 duration-300'>Team</span></h2>
            <p className="text-white/80 text-center text-lg sm:text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mt-8 mb-16">
                Meet the passionate educators and visionaries who guide IIHH’s mission. Our leadership team brings together diverse expertise and a shared commitment to nurturing holistic, humanistic education for every learner.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Dr. Anika Desai", role: "Founder & Director", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
                { name: "Meera Patel", role: "Community Engagement Head", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
                { name: "Prof. Rajesh Kumar", role: "Curriculum Lead", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
                { name: "Meera Patel", role: "Community Engagement Head", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" }
              ].map((member, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  transitionSpeed={400}
                  scale={1.05}
                  glareEnable={false}
                  perspective={1000}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#d2a763]"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-[#036e8d] mb-3">{member.role}</p>
                    <p className="text-gray-600">Committed to fostering humanistic education and personal growth.</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>
      
    </>
  )
}

export default teamSection
