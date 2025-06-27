import React, { useState, useEffect } from "react";

import ourProgramImg from '../../assets/programs-pageHeroimg.jpg';

const introductionSection = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  // Generate random floating elements on mount
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 4 + Math.random() * 8,
    }));
    setFloatingElements(elements);
  }, []);


  return (
    <>

      <section className="pb-4 lg:pb-20 bg-[#d2a763] relative overflow-hidden">
        
        {/* Animated Floating Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">

          {/* Dynamic floating particles */}
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="absolute bg-white/30 rounded-full animate-float"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                width: `${element.size}px`,
                height: `${element.size}px`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto mt-10 px-4 pb-10 sm:px-8 md:px-14 relative z-10">
          
          {/* Split Layout - Adjusted grid to 5/12 and 7/12 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[500px]">

            {/* mobile heading */}
            <div className="block lg:hidden lg:col-span-7 flex items-center justify-start p-8 pl-8 animate-slideInRight">
              <div className="max-w-2xl w-full">
                <h4 className="text-gray-900 text-left mb-4 font-bold tracking-wider text-sm md:text-base uppercase animate-fadeInDown">
                  OUR PROGRAM
                </h4>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
                  A Year of <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Humanistic</span> <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Transformation</span> and <br />Empowered <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300"> Learning</span>
                </h1>
              </div>
            </div>

            {/* Left Side - Interactive Image - 5/12 width */}
            <div className="pb-20 pt-10 lg:col-span-5 relative flex items-center justify-center p-6">
              <div 
                className="relative cursor-pointer animate-slideInLeft"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Animated Background Elements */}
                <div className={`absolute -inset-2 transition-all duration-700 ease-out animate-rotate-slow ${
                  isHovered ? 'scale-10 rotate-12' : 'scale-100 rotate-6'
                }`}>
                  <div className="w-full h-full bg-[#036e8d] rounded-3xl opacity-80 animate-glow"></div>
                </div>
                
                {/* Secondary Background Layer */}
                <div className={`absolute -inset-2 transition-all duration-500 delay-100 ease-out animate-rotate-reverse ${
                  isHovered ? 'scale-105 -rotate-3' : 'scale-100 rotate-0'
                }`}>
                  <div className="w-full h-full bg-white/40 rounded-3xl backdrop-blur-sm animate-shimmer"></div>
                </div>

                {/* Floating Orbs with continuous movement */}
                <div className={`absolute -top-4 -right-4 w-6 h-6 bg-white rounded-full transition-all duration-1000 animate-orbit ${
                  isHovered ? 'animate-bounce scale-150' : 'scale-100'
                }`}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full transition-all duration-700 delay-200 animate-float-reverse ${
                  isHovered ? 'animate-pulse scale-125' : 'scale-100'
                }`}></div>
                <div className={`absolute top-1/2 -right-6 w-3 h-3 bg-white rounded-full transition-all duration-800 delay-300 animate-wiggle ${
                  isHovered ? 'animate-ping scale-200' : 'scale-100'
                }`}></div>

                {/* Main Image with Hover Effects */}
                <div className={`relative transition-all duration-500 ease-out animate-gentle-sway ${
                  isHovered ? 'scale-105 rotate-2' : 'scale-100 rotate-0'
                }`}>
                  <img
                    src={ourProgramImg}
                    alt="Students collaborating on projects"
                    className={`rounded-3xl shadow-2xl object-cover w-full max-w-sm h-72 border-4 transition-all duration-500 animate-subtle-zoom ${
                      isHovered ? 'border-[#d2a763] shadow-3xl brightness-110' : 'border-white shadow-2xl brightness-100'
                    }`}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-t from-[#223668]/60 via-transparent to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className={`transform transition-all duration-700 ${
                        isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <h3 className="text-white font-bold text-lg mb-2 animate-typing">Transformative Learning</h3>
                        <p className="text-gray-200 text-sm animate-slideInUp">Experience hands-on education that shapes your future</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Ring Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-[#036e8d] transition-all duration-1000 animate-pulse-ring ${
                  isHovered ? 'scale-110 opacity-60' : 'scale-100 opacity-30'
                }`}></div>
                
                {/* Ripple Effect */}
                <div className={`absolute inset-0 rounded-3xl border border-white/50 transition-all duration-1200 animate-ripple ${
                  isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
                }`}></div>

                {/* Floating Text Badge */}
                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-600 animate-bob ${
                  isHovered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-80 scale-95'
                }`}>
                  <div className="bg-[#036e8d] text-center text-white px-10 py-2 rounded-full text-xs font-semibold shadow-lg animate-glow-soft">
                    Interactive Experience
                  </div>
                </div>

                {/* Side Decorative Elements with continuous animation */}
                <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full transition-all duration-800 animate-slide-lines ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-60 -translate-x-4'
                }`}>
                  <div className="w-12 h-1 bg-[#036e8d] rounded animate-expand"></div>
                  <div className="w-8 h-1 bg-white rounded mt-2 animate-expand" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-6 h-1 bg-[#036e8d] rounded mt-2 animate-expand" style={{animationDelay: '0.4s'}}></div>
                </div>

                <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full transition-all duration-800 delay-100 animate-slide-lines-reverse ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-4'
                }`}>
                  <div className="w-12 h-1 bg-white rounded animate-expand"></div>
                  <div className="w-8 h-1 bg-[#036e8d] rounded mt-2 animate-expand" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-6 h-1 bg-white rounded mt-2 animate-expand" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>

            {/* sub para mobile view */}
            <div className="block lg:hidden lg:col-span-7 flex items-center justify-start p-8 pl-8 animate-slideInRight">
              <div className="max-w-2xl w-full">
                <div className="animate-fadeInUp animate-subtle-float" style={{animationDelay: '0.3s'}}>
                  <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700">
                    At IIHH, education transcends traditional boundaries. Our one-year program integrates ten thoughtfully designed modules that foster empathy, resilience, and critical thinking—preparing learners to lead with compassion and creativity in a rapidly evolving world.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Content with animations - 7/12 width */}
            <div className="hidden lg:block lg:col-span-7 flex items-center justify-start p-8 pl-8 animate-slideInRight">
              <div className="max-w-2xl w-full">
                <h4 className="text-gray-900 text-left mb-4 font-bold tracking-wider text-sm md:text-base uppercase animate-fadeInDown">
                  OUR PROGRAM
                </h4>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
                  A Year of <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Humanistic</span> <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Transformation</span> and <br />Empowered <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300"> Learning</span>
                </h1>
                <div className="animate-fadeInUp animate-subtle-float" style={{animationDelay: '0.3s'}}>
                  <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700">
                    At IIHH, education transcends traditional boundaries. Our one-year program integrates ten thoughtfully designed modules that foster empathy, resilience, and critical thinking—preparing learners to lead with compassion and creativity in a rapidly evolving world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
          }
          
          @keyframes gentle-sway {
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            25% { transform: translateX(2px) rotate(0.5deg); }
            75% { transform: translateX(-2px) rotate(-0.5deg); }
          }
          
          @keyframes rotate-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes rotate-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(210, 167, 99, 0.3); }
            50% { box-shadow: 0 0 40px rgba(210, 167, 99, 0.6); }
          }
          
          @keyframes glow-soft {
            0%, 100% { box-shadow: 0 0 10px rgba(3, 110, 141, 0.4); }
            50% { box-shadow: 0 0 20px rgba(3, 110, 141, 0.7); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
          }
          
          @keyframes wiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
          
          @keyframes bob {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 0.4; }
            100% { transform: scale(1); opacity: 0.8; }
          }
          
          @keyframes ripple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          
          @keyframes expand {
            0% { width: 0; }
            100% { width: var(--target-width, 100%); }
          }
          
          @keyframes text-glow {
            0%, 100% { text-shadow: 0 0 10px rgba(210, 167, 99, 0.5); }
            50% { text-shadow: 0 0 20px rgba(210, 167, 99, 0.8); }
          }
          
          @keyframes subtle-zoom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.01); }
          }
          
          @keyframes subtle-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: float-reverse 3s ease-in-out infinite;
          }
          
          .animate-gentle-sway {
            animation: gentle-sway 6s ease-in-out infinite;
          }
          
          .animate-rotate-slow {
            animation: rotate-slow 20s linear infinite;
          }
          
          .animate-rotate-reverse {
            animation: rotate-reverse 25s linear infinite;
          }
          
          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }
          
          .animate-glow-soft {
            animation: glow-soft 2s ease-in-out infinite;
          }
          
          .animate-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
          }
          
          .animate-orbit {
            animation: orbit 8s linear infinite;
          }
          
          .animate-wiggle {
            animation: wiggle 2s ease-in-out infinite;
          }
          
          .animate-bob {
            animation: bob 2s ease-in-out infinite;
          }
          
          .animate-pulse-ring {
            animation: pulse-ring 2s ease-in-out infinite;
          }
          
          .animate-ripple {
            animation: ripple 3s ease-out infinite;
          }
          
          .animate-expand {
            animation: expand 1s ease-out forwards;
          }
          
          .animate-text-glow {
            animation: text-glow 3s ease-in-out infinite;
          }
          
          .animate-subtle-zoom {
            animation: subtle-zoom 8s ease-in-out infinite;
          }
          
          .animate-subtle-float {
            animation: subtle-float 4s ease-in-out infinite;
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }
          
          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out forwards;
          }
          
          .animate-slideInLeft {
            animation: slideInLeft 1s ease-out forwards;
          }
          
          .animate-slideInRight {
            animation: slideInRight 1s ease-out forwards;
          }
          
          .animate-slideInUp {
            animation: slideInUp 0.6s ease-out forwards;
          }
          
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
          }
        `}</style>
      </section>
      
    </>
  )
}

export default introductionSection
