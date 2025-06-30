import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';

import aboutIntroImg from '../../assets/aboutusintroImg.jpg';
import vision from '../../assets/lottie/vision.json'; 
import mission from '../../assets/lottie/mission.json';

const whoWeAre = () => {

  const [isVisionHovered, setIsVisionHovered] = useState(false);
  const [isMissionHovered, setIsMissionHovered] = useState(false);

  // Refs to control Lottie animations
  const visionLottieRef = useRef(null);
  const missionLottieRef = useRef(null);

  // Functions to restart animations on hover
  const playVisionAnimation = () => {
    setIsVisionHovered(true);
    if (visionLottieRef.current) {
      visionLottieRef.current.goToAndPlay(0); // Start from first frame
    }
  };

  const playMissionAnimation = () => {
    setIsMissionHovered(true);
    if (missionLottieRef.current) {
      missionLottieRef.current.goToAndPlay(0); // Start from first frame
    }
  };



  return (
    <>
      <section id="who-we-are" className="flex align-center justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-0 bg-[#d2a763] relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="hidden sm:block absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="hidden sm:block absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="w-full flex-col mx-auto justify-center align-center container px-2 sm:px-8 md:px-4 relative z-10">
            {/* Enhanced Heading Section with Image */}
            <div className="text-left sm:text-center mb-16 sm:mb-16 md:mb-48">
              <h4 className="block lg:hidden text-gray-900 font-bold tracking-wider text-sm md:text-base uppercase">
                About Us
              </h4>
              <h1 className="block lg:hidden text-left sm:text-center text-4xl md:text-5xl font-bold text-white mb-14 sm:mb-20 leading-tight">
                Unveiling Our{' '}
                <br />
                <span className='text-[#036e8d]/90 relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                  Identity
                </span>
                ,{' '}
                <span className='text-[#036e8d]/90 relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                  Vision
                </span>
                {' '}&{' '}
                <span className='text-[#036e8d]/90 relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                  Values
                </span>
              </h1>
              <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-20 mb-10 sm:mb-48">
                {/* Left side - Image */}
                <div className="flex-shrink-0 order-2 px-4 sm:p-0 lg:order-1 mb-3">   
                  <div className="relative group">
                    {/* Decorative Elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#036e8d]/20 to-[#d2a763]/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-white/50 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/50 rounded-full backdrop-blur-sm"></div>
                    <img 
                      src={aboutIntroImg} 
                      alt="Students collaborating and learning together"
                      className="relative w-80 h-60 lg:w-96 lg:h-72 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white/80"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#036e8d] to-[#036e8d] rounded-full flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                      <i className="fa-solid fa-graduation-cap text-3xl text-white"></i>
                    </div>
                    
                    {/* Accent Lines */}
                    <div className="absolute top-4 left-2 w-8 h-1 bg-[#d2a763] rounded-full"></div>
                    <div className="absolute top-7 left-4 w-12 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="text-center lg:text-left flex-2 order-1 lg:order-2 relative">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-1/2 -left-12 w-2 h-24 bg-gradient-to-b from-[#d2a763] to-transparent rounded-full hidden lg:block"></div>              
                  <div className="relative z-10">
                    <h4 className="hidden lg:block text-gray-900 font-bold tracking-wider text-sm md:text-base uppercase">
                      About Us
                    </h4>
                    <h1 className="hidden lg:block text-4xl md:text-5xl font-bold text-white md:text-left mb-8 leading-tight">
                      Unveiling Our{' '}
                      <br />
                      <span className='text-[#036e8d]/90 relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                        Identity
                      </span>
                      ,{' '}
                      <span className='text-[#036e8d]/90 relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                        Vision
                      </span>
                      {' '}and{' '}
                      <span className='text-[#036e8d]/90 relative inline-block transform hover:scale-x-105 transition-transform duration-300'>
                        Values
                      </span>
                    </h1>
                    
                    <div className="relative">
                      <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-[#ffffff] to-transparent rounded-full hidden lg:block"></div>
                      <p className="text-left sm:text-center lg:text-left text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl px-4 py-2 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700">
                        <span className="text-[#d2a763] font-bold text-2xl">"</span>
                        The International Institute of Horizon Humanism (IIHH) is a trailblazing institution dedicated to blending humanistic principles with modern education, shaping compassionate, ethical leaders for a global society.
                        <span className="text-[#d2a763] font-bold text-2xl">"</span>
                      </p>                    
                      {/* Accent dots */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#036e8d] rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#036e8d] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Enhanced Vision and Mission Section */}
            <div className="relative grid grid-cols-1 px-4 pt-10 sm:px-8 md:px-8 py-8 sm:py-24 sm:pt-36 md:pt-40 border rounded-3xl md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-8 md:mb-10 bg-white shadow-2xl backdrop-blur-sm">
              
              {/* Enhanced Values Section - Floating Card */}
              <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-2/3 sm:w-3/2 md:w-3/4 lg:w-1/2 px-4 sm:px-0 md:px-0">
                <div className="bg-[#036e8d] rounded-3xl py-6 sm:py-8 px-4 sm:px-6 shadow-lg">
                  <h3 className="text-gray-900 text-lg sm:text-2xl md:text-4xl font-bold text-center mb-6">Our Core Values</h3>
                  <div className="grid grid-cols-4 md:grid-cols-4 gap-6 md:gap-8 items-center">
                    {[
                      { title: "Empathy", icon: "fa-heart", description: "Understanding others deeply" },
                      { title: "Purpose", icon: "fa-compass", description: "Driven by meaningful goals" },
                      { title: "Resilience", icon: "fa-shield-alt", description: "Strength through challenges" },
                      { title: "Inclusivity", icon: "fa-globe", description: "Embracing all perspectives" },
                    ].map((value, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors duration-300">
                          <i className={`fa-solid ${value.icon} text-2xl sm:text-3xl text-[#ffffff]`}></i>
                        </div>
                        <span className="text-white font-semibold text-sm md:text-base mb-1">
                          {value.title}
                        </span>
                        <span className="text-white/80 text-xs hidden md:block">
                          {value.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Vision */}
              <div className="flex flex-col">
                <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-[black]/5 rounded-full flex items-center justify-center mr-4">
                    {/* <i className="fa-solid fa-eye text-2xl text-[#036e8d]"></i> */}
                    <Lottie
                      lottieRef={visionLottieRef}
                      animationData={vision}
                      loop={false}
                      autoplay={false}
                      style={{ width: 48, height: 48 }}
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Our Vision</h3>


                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl hover:shadow-sm hover:scale-105 transition-all duration-300"
                  onMouseEnter={playVisionAnimation}
                  onMouseLeave={() => setIsVisionHovered(false)}
                >
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                    At IIHH, our vision is to redefine education by placing emotional intelligence, ethical reasoning, and social responsibility at the heart of learning—alongside academic excellence. We strive to create a transformative educational ecosystem that empowers school students, college students, educators, and professionals to become compassionate, responsible, and forward-thinking global citizens.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {['Emotional Intelligence', 'Ethical Reasoning', 'Social Responsibility'].map((tag, index) => (
                      <span key={index} className="bg-[#036e8d]/10 text-[#036e8d] px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vertical Separation Line - Enhanced */}
              <div className="hidden md:block absolute top-40 bottom-40 left-1/2 transform -translate-x-1/2">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>

              {/* Enhanced Mission */}
              <div className="flex flex-col">
                <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
                    {/* <i className="fa-solid fa-bullseye text-2xl text-[#036e8d]"></i> */}
                  <div className="w-12 h-12 bg-[black]/5 rounded-full flex items-center justify-center mr-4">
                    <Lottie
                      lottieRef={missionLottieRef}
                      animationData={mission}
                      loop={false}
                      autoplay={false}
                      style={{ width: 48, height: 48 }}
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl hover:shadow-sm hover:scale-105 transition-all duration-300"
                  onMouseEnter={playMissionAnimation}
                  onMouseLeave={() => setIsMissionHovered(false)}
                >
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                    Our mission is to nurture the next generation with the values, skills, and perspectives needed to thrive in a rapidly changing world. Through our afterschool program, rooted in the principles of humanism, inclusivity, and holistic personal development, we equip learners to lead meaningful, impactful lives beyond the classroom.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {['Humanism', 'Inclusivity', 'Holistic Development'].map((tag, index) => (
                      <span key={index} className="bg-[#d2a763]/20 text-[#036e8d] px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full px-0 mb-8 sm:hidden">
                <div className="bg-[#036e8d] rounded-3xl py-2 sm:py-8 px-4 sm:px-6 shadow-lg">
                  <h3 className="text-white text-lg sm:text-2xl md:text-4xl font-bold text-center">Our Core Values</h3>
                  <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 items-center">
                    {[
                      { title: "Empathy", icon: "fa-heart", description: "Understanding others deeply" },
                      { title: "Purpose", icon: "fa-compass", description: "Driven by meaningful goals" },
                      { title: "Resilience", icon: "fa-shield-alt", description: "Strength through challenges" },
                      { title: "Inclusivity", icon: "fa-globe", description: "Embracing all perspectives" },
                    ].map((value, index) => (
                      <div
                        key={index}
                        className={`flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 ${index % 2 !== 0 ? 'mt-10' : ''}`}
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors duration-300">
                          <i className={`fa-solid ${value.icon} text-lg sm:text-xl text-[#ffffff]`}></i>
                        </div>
                        <span className="text-white font-semibold text-xs mb-1">
                          {value.title}
                        </span>
                        <span className="text-white/80 text-xs hidden md:block">
                          {value.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">           
                {/* <p className="text-white/80 text-sm mt-4 max-w-md mx-auto">
                  Join thousands of students and educators who are already part of our transformative community.
                </p> */}
                <button className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#036e8d] font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg  backdrop-blur-xl">
                  <i className="fa-solid fa-play mr-3"></i>
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </section>
      
    </>
  )
}

export default whoWeAre
