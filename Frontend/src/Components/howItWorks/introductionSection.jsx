import React from 'react'

import bolbImg from '../../assets/Vector.png'

const introductionSection = () => {
  return (
    <>
      <section className="bg-[#d2a763] pb-8 relative">
        {/* Background Circle Rings and White Dots */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Circle Rings matching background color */}
          <div className="absolute top-[-5%] left-[-5%] w-48 h-48 border-2 border-[#ffffff] rounded-full opacity-30"></div>
          <div className="absolute bottom-[-10%] right-[-2%] w-60 h-60 border-2 border-[#ffffff] rounded-full opacity-25"></div>
          <div className="absolute top-[15%] right-[5%] w-40 h-40 border-2 border-[#ffffff] rounded-full opacity-35"></div>
          {/* White Floating Dots */}
          <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-white rounded-full opacity-80 animate-float-dot" style={{ animationDelay: "0s" }}></div>
          <div className="absolute bottom-[15%] right-[15%] w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-float-dot" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-[50%] left-[5%] w-2.5 h-2.5 bg-white rounded-full opacity-80 animate-float-dot" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-[20%] left-[30%] w-1.8 h-1.8 bg-white rounded-full opacity-80 animate-float-dot" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-[25%] left-[20%] w-2 h-2 bg-white rounded-full opacity-80 animate-float-dot" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-[35%] right-[25%] w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-float-dot" style={{ animationDelay: "2.5s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-20">
          {/* Liquid Shape Container */}
          <div className="relative max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                            {/* Right: Content with White Background */}
              <div className="space-y-8">
                <div className="relative z-10 max-w-4xl mx-auto">
                  <h4 className="text-gray-900 font-bold tracking-wider text-sm md:text-base uppercase mb-4">
                    Our Philosophy
                  </h4>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Redefining{' '}
                    <span className='text-[#036e8d] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                      Education
                    </span>
                    {' '}Through{' '}
                    <br className="hidden sm:block" />
                    <span className='text-[#036e8d] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                      Our Approach
                    </span>
                  </h2>
                </div>
                <div className="bg-white rounded-3xl p-8 border border-[#036e8d]/20 shadow-2xl">
                  <p className="text-gray-900 text-lg leading-relaxed">
                    At IIHH, we believe education should spark curiosity and character. Our program blends real-world modules, hands-on activities, and mentorship—empowering students to grow as thinkers, collaborators, and ethical leaders.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                  <button className="inline-flex items-center bg-[#036e8d] hover:bg-[#024a5c] text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center">
                    <i className="fa-solid fa-rocket mr-2 sm:mr-3"></i>
                    Explore Our Programs
                  </button>
                </div>
              </div>
              {/* Left: Morphing Visual */}
              <div className="relative w-full max-w-[480px] mx-auto aspect-square">
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <img
                    src={bolbImg}
                    alt="Blob image"
                    className="w-full h-full object-contain animate-imageFloat"
                  />

                  {/* Floating Knowledge Cards positioned relative to image */}
                  <div className="absolute inset-0">
                    {[
                      { icon: "fa-brain", label: "Critical Thinking", pos: "top-[2%] left-[5%]", delay: "0s" },
                      { icon: "fa-palette", label: "Creative Arts", pos: "top-[-4%] right-[16%]", delay: "0.5s" },
                      { icon: "fa-flask", label: "STEM Labs", pos: "bottom-[-4%] left-[25%]", delay: "1s" },
                      { icon: "fa-book", label: "Literature", pos: "bottom-[8%] right-[5%]", delay: "1.5s" },
                      { icon: "fa-lightbulb", label: "Innovation", pos: "top-[40%] -right-[5%]", delay: "2.5s" },
                      { icon: "fa-globe", label: "Global Awareness", pos: "top-[48%] -left-[6%]", delay: "2s" },
                    ].map((card, i) => (
                      <div
                        key={i}
                        className={`absolute ${card.pos} transform hover:scale-110 transition-all duration-300 cursor-pointer group`}
                        style={{
                          animation: `float 4s ease-in-out infinite`,
                          animationDelay: card.delay,
                        }}
                      >
                        <div className="bg-white rounded-xl p-3 shadow-lg border border-[#036e8d]/10 min-w-20 text-center group-hover:bg-[#036e8d] group-hover:text-white transition-all duration-300">
                          <i className={`fa-solid ${card.icon} text-xl mb-1 text-[#036e8d] group-hover:text-white`}></i>
                          <div className="text-[10px] font-semibold whitespace-nowrap text-[#036e8d] group-hover:text-white">{card.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Animation Keyframes */}
                <style>{`
                  @keyframes float {
                    0%, 100% {
                      transform: translateY(0) scale(1);
                      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    }
                    50% {
                      transform: translateY(-8px) scale(1.02);
                      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                    }
                  }

                  @keyframes imageFloat {
                    0%, 100% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(-10px);
                    }
                  }

                  @keyframes float-dot {
                    0%, 100% {
                      transform: translateY(0) translateX(0);
                      opacity: 0.8;
                    }
                    50% {
                      transform: translateY(-15px) translateX(5px);
                      opacity: 0.9;
                    }
                  }

                  .animate-imageFloat {
                    animation: imageFloat 3s ease-in-out infinite;
                  }

                  .animate-float-dot {
                    animation: float-dot 5s ease-in-out infinite;
                  }
                `}</style>
              </div>

            </div>
          </div>
        </div>

        {/* Advanced Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(2deg); }
            66% { transform: translateY(5px) rotate(-1deg); }
          }
          @keyframes pop-in {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-pop-in {
            animation: pop-in 0.5s ease-out forwards;
          }
        `}</style>
      </section>
    </>
  )
}

export default introductionSection;
