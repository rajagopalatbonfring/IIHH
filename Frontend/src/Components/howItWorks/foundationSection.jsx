import React from 'react'

import cloudOpen from '../../assets/Group 33.png';

const foundationSection = () => {
  return (
    <>
      <section className="py-20 bg-[#ffffff] font-comic relative">
        <img 
          src={cloudOpen}
          alt="Cloud decoration" 
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}}
        />
        {/* Subtle Background Decor */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-16 left-20 w-24 h-24 bg-[#036e8d]/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-16 w-20 h-20 bg-[#d2a763]/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto px-8 md:px-14 max-w-8xl flex flex-col items-center">
          {/* Heading and Subheading */}
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Foundations for <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Success</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-12 font-medium">
            Skills to Shape Your Future
          </p>

          {/* Professional Grid Structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
            {[
              { icon: "fa-users", title: "Peer Learning", desc: "Collaborate in dynamic group settings to foster growth.", gradient: "from-[#036e8d]/60 to-[#036e8d]/30", iconColor: "text-[#036e8d]" },
              { icon: "fa-chalkboard-teacher", title: "Mentorship", desc: "Receive tailored guidance from expert mentors.", gradient: "from-[#d2a763]/60 to-[#d2a763]/30", iconColor: "text-[#d2a763]" },
              { icon: "fa-vials", title: "Experimentation", desc: "Innovate through hands-on, real-world projects.", gradient: "from-[#036e8d]/60 to-[#036e8d]/30", iconColor: "text-[#036e8d]" },
              { icon: "fa-seedling", title: "Values in Action", desc: "Embody ethical principles in daily practice.", gradient: "from-[#d2a763]/60 to-[#d2a763]/30", iconColor: "text-[#d2a763]" },
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-lg p-6 flex flex-col items-start bg-gradient-to-br ${feature.gradient} border border-gray-100/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fadeInUp`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/90 group-hover:scale-105 transition-transform duration-300">
                  <i className={`fa-solid ${feature.icon} text-2xl ${feature.iconColor}`}></i>
                </div>
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">{feature.desc}</p>
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-${feature.iconColor.replace('text-', '')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes pulse-slow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.1;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.15;
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          .animate-pulse-slow {
            animation: pulse-slow 5s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  )
}

export default foundationSection
