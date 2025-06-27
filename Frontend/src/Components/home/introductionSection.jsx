import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";

import { Star, Heart,Users,Brain } from "lucide-react";
import { CheckCircle, BookOpen} from 'lucide-react';

import stryimg1 from '../../assets/middlestrySecImg.jpg';
import stryimg2 from '../../assets/one-SubImg.png';
import stryimg3 from '../../assets/second-SubImg.png';
import stryimg4 from '../../assets/third-SubImg.png';

const features = [
  { name: 'Empathy', icon: Heart },
  { name: 'Leadership', icon: Star },
  { name: 'Humanism', icon: Users },
  { name: 'Broad Mind', icon: Brain }
];


const introductionSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [pulseActive, setPulseActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for image movement
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width * 30; // Adjust sensitivity
    const y = (e.clientY - centerY) / rect.height * 20; // Adjust sensitivity
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Pulse effect
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 600);
    }, 3000);
    return () => clearInterval(pulseInterval);
  }, []);



  return (
    <>

        <section id="about-us" 
          className="px-2 sm:px-8 py-24 pt-4 pb-24 bg-[#d2a763]"
        >
          <div className="container py-0 sm:py-10 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
              <div className="md:w-3/4 lg:w-1/2">
                <h4 className="hidden lg:block text-left text-gray-900 font-bold tracking-wider ">OUR STORY</h4>
                <h2 className="hidden lg:block text-4xl md:text-5xl font-bold text-white mb-4"><span className="inline-block transform hover:scale-x-105 duration-300 text-[#036e8d] text-4xl md:text-6xl font-bold">Top</span> Choice <br />For <span className="inline-block transform hover:scale-x-105 duration-300 text-[#036e8d] text-4xl md:text-6xl font-bold">Children</span></h2>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700">
                  Founded in 2018, IIHH has been at the forefront of integrating humanistic principles into education. 
                  We believe that learning should nurture not just the mind, but also the heart and spirit.
                </p>
                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-8">
                  {['Empathy', 'Leadership', 'Humanism', 'Board Mind'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[white] flex items-center justify-center mr-3">
                        <div className="w-3 h-3 rounded-full bg-[#036e8d]"></div>
                      </div>
                      <span className="text-white font-bold">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center bg-[#ffffff] text-[#036e8d] font-medium px-6 py-3 rounded-full hover:bg-[#025a75] hover:text-white hover:translate-x-1 transition-all duration-300 shadow-lg group text-base"
                >
                  See More
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                </div>
              </div>

              {/* Right Image Section - Enhanced */}

              {/* Non mobile */}
              <div className="hidden sm:block lg:w-1/2 w-full">
                <h4 className="block lg:hidden text-left text-gray-900 font-bold tracking-wider ">OUR STORY</h4>
                <h2 className="block lg:hidden text-4xl md:text-5xl font-bold text-white mb-16">
                  <span className="inline-block transform hover:scale-x-105 duration-300 text-[#036e8d] text-5xl md:text-6xl">Top</span> Choice<br />For <span className="inline-block transform hover:scale-x-105 duration-300 text-[#036e8d] text-5xl md:text-6xl">Children</span>
                </h2>

                <div 
                  className="mt-10 sm:mt-0 relative max-w-lg mx-auto"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  
                  {/* Background Shapes */}
                  <div className="absolute inset-0 -m-20 overflow-hidden">
                    {/* Large decorative circles */}
                    <div 
                      className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-xl"
                      style={{ animation: 'float 8s ease-in-out infinite' }}
                    ></div>
                    
                    {/* Geometric shapes */}
                    <div 
                      className="absolute bottom-1/4 -left-12 w-12 h-12 bg-[#d2a763]/30 rounded-full"
                      style={{ animation: 'pulse2 4s ease-in-out infinite 1s' }}
                    ></div>
                    
                    {/* Wavy background element */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M20,50 Q40,30 60,50 T100,50 L100,100 L0,100 Z"
                          fill="url(#gradient)"
                          style={{ animation: 'wave 6s ease-in-out infinite' }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#036e8d" />
                            <stop offset="100%" stopColor="#d2a763" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Elegant border rings - replacing dotted rotation */}
                  <div className="absolute inset-0 -m-6">
                    <div 
                      className="absolute inset-0 border-[2px] border-[#ffffff] rounded-full"
                      style={{ animation: 'breathe 4s ease-in-out infinite' }}
                    ></div>
                    <div 
                      className="absolute inset-2 border border-[#d2a763]/30 rounded-full"
                      style={{ animation: 'breathe 4s ease-in-out infinite 1s' }}
                    ></div>
                  </div>

                  {/* Main image container */}
                  <div 
                    className="relative bg-[#036e8d] rounded-full p-6 backdrop-blur-sm border border-white/50"
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    
                    {/* Main image with smooth hover effect */}
                    <div className="relative bg-[#cde1dc] rounded-full overflow-hidden shadow-xl group cursor-pointer">
                      <img 
                        src={stryimg1}
                        alt="Teacher helping student" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onLoad={() => setImageLoaded(true)}
                        style={{ animation: 'gentleFloat 6s ease-in-out infinite' }}
                      />
                      
                      {/* Overlay with your brand colors */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#036e8d]/20 via-transparent to-transparent"></div>
                      
                      {/* Smooth hover overlay */}
                      <div className="absolute inset-0 group-hover:from-[#036e8d]/10 group-hover:to-[#d2a763]/10 transition-all duration-500"></div>
                    </div>
                    
                    {/* Secondary image - bottom left */}
                    <div 
                      className="absolute -bottom-4 -left-4 w-32 h-32 group cursor-pointer z-10"
                      style={{
                        transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.3}px)`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={stryimg2}
                          alt="Children learning together" 
                          className="w-full h-full object-cover rounded-full border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                          style={{ animation: 'gentleFloat 4s ease-in-out infinite 1s' }}
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#036e8d]/0 group-hover:ring-[#036e8d]/50 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Third overlay image - top right */}
                    <div 
                      className="absolute -top-6 right-14 w-24 h-24 group cursor-pointer z-10"
                      style={{
                        transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.6}px)`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={stryimg3}
                          alt="Students in classroom" 
                          className="w-full h-full object-cover rounded-full border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                          style={{ animation: 'gentleFloat 5s ease-in-out infinite 2s' }}
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#036e8d]/0 group-hover:ring-[#036e8d]/50 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Fourth overlay image - middle left */}
                    <div 
                      className="absolute top-1/2 -left-8 w-20 h-20 group cursor-pointer z-10 transform -translate-y-1/2"
                      style={{
                        transform: `translate(${mousePosition.x * -0.7}px, ${mousePosition.y * -0.4}px) translateY(-50%)`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img 
                          src={stryimg4}
                          alt="Happy students" 
                          className="w-full h-full object-cover rounded-full border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                          style={{ animation: 'gentleFloat 4.5s ease-in-out infinite 3s' }}
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#d2a763]/0 group-hover:ring-[#d2a763]/40 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Achievement badge */}
                    <div 
                      className={`absolute top-28 left-12 bg-[#ffffff] text-[#036e8d] p-2 rounded-full shadow-lg transition-transform duration-300 z-20 ${
                        pulseActive ? 'scale-110' : 'scale-100'
                      }`}
                      style={{
                        transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) ${pulseActive ? 'scale(1.1)' : 'scale(1)'}`,
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      <CheckCircle className="w-3 h-3" />
                    </div>

                    {/* Small decorative badges */}
                    <div 
                      className="absolute top-8 left-28 bg-[#ffffff] text-white p-2 rounded-full shadow-md z-15"
                      style={{
                        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.1}px)`,
                        transition: 'transform 0.3s ease-out',
                        animation: 'gentleBob 3s ease-in-out infinite 1s'
                      }}
                    >
                      <Star className="w-3 h-3 text-[#d2a763]" />
                    </div>
                    
                    <div 
                      className="absolute top-28 left-32 bg-gradient-to-br from-[#d2a763] to-[#b8954e] text-white p-2 rounded-full shadow-md z-15"
                      style={{
                        transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.4}px)`,
                        transition: 'transform 0.3s ease-out',
                        animation: 'gentleBob 3.5s ease-in-out infinite 2s'
                      }}
                    >
                      <Heart className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Info cards with better positioning */}
                  <div 
                    className="absolute -top-8 -left-12 z-30"
                    style={{
                      transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.2}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                  </div>

                  <div 
                    className="absolute bottom-8 right-10 z-30"
                    style={{
                      transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/50">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#036e8d]" />
                      </div>
                    </div>
                  </div>

                  {/* Subtle floating elements */}
                  {imageLoaded && (
                    <>
                      <div 
                        className="absolute top-1/4 right-8 w-2 h-2 bg-[#ffffff] rounded-full opacity-60"
                        style={{ animation: 'floatParticle 4s ease-in-out infinite' }}
                      ></div>
                      <div 
                        className="absolute bottom-1/3 -left-6 w-1.5 h-1.5 bg-[#036e8d] rounded-full opacity-40"
                        style={{ animation: 'floatParticle 3s ease-in-out infinite 1s' }}
                      ></div>
                      <div 
                        className="absolute top-2/3 right-4 w-1 h-1 bg-[#ffffff] rounded-full opacity-50"
                        style={{ animation: 'floatParticle 5s ease-in-out infinite 2s' }}
                      ></div>
                    </>
                  )}
                </div>

                <style>{`
                  @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                  }
                  
                  @keyframes gentleBob {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-4px) scale(1.05); }
                  }
                  
                  @keyframes floatParticle {
                    0%, 100% { 
                      transform: translateY(0px);
                      opacity: 0.4;
                    }
                    50% { 
                      transform: translateY(-8px);
                      opacity: 0.8;
                    }
                  }
                  
                  @keyframes breathe {
                    0%, 100% { 
                      transform: scale(1);
                      opacity: 0.3;
                    }
                    50% { 
                      transform: scale(1.02);
                      opacity: 0.6;
                    }
                  }
                  
                  @keyframes float1 {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-10px) translateX(5px); }
                    66% { transform: translateY(5px) translateX(-8px); }
                  }
                  
                  @keyframes float2 {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) translateX(10px) rotate(5deg); }
                  }
                  
                  @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  
                  @keyframes pulse2 {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.1); opacity: 0.6; }
                  }
                  
                  @keyframes wave {
                    0%, 100% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                  }
                `}</style>
              </div>

              {/* Mobile view */}
              <div className="block lg:w-1/2 w-full sm:hidden">
                <h4 className="block md:hidden text-left text-gray-900 font-bold tracking-wider">OUR STORY</h4>
                <h2 className="block md:hidden text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="inline-block transform hover:scale-x-105 duration-300 text-[#036e8d] text-5xl md:text-6xl">Top</span> Choicee <br />For <span className="inline-block transform hover:scale-x-105 duration-300 text-[#036e8d] text-5xl md:text-6xl">Children</span>
                </h2>
                <div
                  className="mt-10 sm:mt-0 relative max-w-xs sm:max-w-sm lg:max-w-lg mx-auto"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Background Shapes */}
                  <div className="absolute inset-0 -m-10 sm:-m-16 lg:-m-20 overflow-hidden">
                    <div
                      className="absolute -top-6 sm:-top-8 lg:-top-10 -left-6 sm:-left-8 lg:-left-10 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 rounded-full blur-xl"
                      style={{ animation: 'float 8s ease-in-out infinite' }}
                    ></div>
                    <div
                      className="absolute bottom-1/4 -left-6 sm:-left-10 lg:-left-12 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-[#d2a763]/30 rounded-full"
                      style={{ animation: 'pulse2 4s ease-in-out infinite 1s' }}
                    ></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 opacity-5">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M20,50 Q40,30 60,50 T100,50 L100,100 L0,100 Z"
                          fill="url(#gradient)"
                          style={{ animation: 'wave 6s ease-in-out infinite' }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#036e8d" />
                            <stop offset="100%" stopColor="#d2a763" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Elegant border rings */}
                  <div className="absolute inset-0 -m-4 sm:-m-5 lg:-m-6">
                    <div
                      className="absolute inset-0 border-[2px] border-[#ffffff] rounded-full"
                      style={{ animation: 'breathe 4s ease-in-out infinite' }}
                    ></div>
                    <div
                      className="absolute inset-2 border border-[#d2a763]/30 rounded-full"
                      style={{ animation: 'breathe 4s ease-in-out infinite 1s' }}
                    ></div>
                  </div>

                  {/* Main image container */}
                  <div
                    className="relative bg-[#036e8d] rounded-full p-4 sm:p-5 lg:p-6 backdrop-blur-sm border border-white/50"
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                      transition: 'transform 0.3s ease-out',
                    }}
                  >
                    <div className="relative bg-[#cde1dc] rounded-full overflow-hidden shadow-xl group cursor-pointer">
                      <img
                        src={stryimg1}
                        alt="Teacher helping student"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onLoad={() => setImageLoaded(true)}
                        style={{ animation: 'gentleFloat 6s ease-in-out infinite' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#036e8d]/20 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 group-hover:from-[#036e8d]/10 group-hover:to-[#d2a763]/10 transition-all duration-500"></div>
                    </div>

                    {/* Secondary image - bottom left */}
                    <div
                      className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -left-2 sm:-left-3 lg:-left-4 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 group cursor-pointer z-10"
                      style={{
                        transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.3}px)`,
                        transition: 'transform 0.3s ease-out',
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={stryimg2}
                          alt="Children learning together"
                          className="w-full h-full object-cover rounded-full border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                          style={{ animation: 'gentleFloat 4s ease-in-out infinite 1s' }}
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#036e8d]/0 group-hover:ring-[#036e8d]/50 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Third overlay image - top right */}
                    <div
                      className="absolute -top-3 sm:-top-4 lg:-top-6 right-8 sm:right-10 lg:right-14 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 group cursor-pointer z-10"
                      style={{
                        transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.6}px)`,
                        transition: 'transform 0.3s ease-out',
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={stryimg3}
                          alt="Students in classroom"
                          className="w-full h-full object-cover rounded-full border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                          style={{ animation: 'gentleFloat 5s ease-in-out infinite 2s' }}
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#036e8d]/0 group-hover:ring-[#036e8d]/50 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Fourth overlay image - middle left */}
                    <div
                      className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 group cursor-pointer z-10 transform -translate-y-1/2"
                      style={{
                        transform: `translate(${mousePosition.x * -0.7}px, ${mousePosition.y * -0.4}px) translateY(-50%)`,
                        transition: 'transform 0.3s ease-out',
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={stryimg4}
                          alt="Happy students"
                          className="w-full h-full object-cover rounded-full border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300"
                          style={{ animation: 'gentleFloat 4.5s ease-in-out infinite 3s' }}
                        />
                        <div className="absolute inset-0 rounded-full ring-2 ring-[#d2a763]/0 group-hover:ring-[#d2a763]/40 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Achievement badge */}
                    <div
                      className={`absolute top-0 sm:top-20 lg:top-28 left-8 sm:left-10 lg:left-12 bg-[#ffffff] text-[#036e8d] backdrop-blur-sm rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg transition-transform duration-300 z-20 ${
                        pulseActive ? 'scale-110' : 'scale-100'
                      }`}
                      style={{
                        transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) ${pulseActive ? 'scale(1.1)' : 'scale(1)'}`,
                        transition: 'transform 0.3s ease-out',
                      }}
                    >
                      <CheckCircle className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4" />
                    </div>

                    {/* Small decorative badges */}
                    <div
                      className="absolute -top-4 sm:top-6 lg:top-8 left-20 sm:left-20 lg:left-28 bg-[#ffffff] text-white backdrop-blur-sm rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg z-15"
                      style={{
                        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.1}px)`,
                        transition: 'transform 0.3s ease-out',
                        animation: 'gentleBob 3s ease-in-out infinite 1s',
                      }}
                    >
                      <Star className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4  text-[#d2a763]" />
                    </div>
                    <div
                      className="absolute bottom-16 sm:top-20 lg:top-28 right-0 sm:left-24 lg:left-32 bg-gradient-to-br from-[#d2a763] to-[#b8954e] text-white backdrop-blur-sm rounded-full p-2 sm:p-2.5 lg:p-3 shadow-md z-15"
                      style={{
                        transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.4}px)`,
                        transition: 'transform 0.3s ease-out',
                        animation: 'gentleBob 3.5s ease-in-out infinite 2s',
                      }}
                    >
                      <Heart className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4" />
                    </div>

                    {/* Info card - bottom right */}
                    <div
                      className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-6 sm:right-8 lg:right-10 z-30"
                      style={{
                        transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
                        transition: 'transform 0.3s ease-out',
                      }}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg border border-white/50">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <BookOpen className="w-3 sm:w-3.5 lg:w-4 h-3 sm:h-3.5 lg:h-4 text-[#036e8d]" />
                        </div>
                      </div>
                    </div>

                    {/* Subtle floating elements */}
                    {imageLoaded && (
                      <>
                        <div
                          className="absolute top-1/4 right-4 sm:right-6 lg:right-8 w-1.5 sm:w-2 lg:w-2 h-1.5 sm:h-2 lg:h-2 bg-[#ffffff] rounded-full opacity-60"
                          style={{ animation: 'floatParticle 4s ease-in-out infinite' }}
                        ></div>
                        <div
                          className="absolute bottom-1/3 -left-3 sm:-left-4 lg:-left-6 w-1 sm:w-1.5 lg:w-1.5 h-1 sm:h-1.5 lg:h-1.5 bg-[#036e8d] rounded-full opacity-40"
                          style={{ animation: 'floatParticle 3s ease-in-out infinite 1s' }}
                        ></div>
                        <div
                          className="absolute top-2/3 right-2 sm:right-3 lg:right-4 w-0.5 sm:w-1 lg:w-1 h-0.5 sm:h-1 lg:h-1 bg-[#ffffff] rounded-full opacity-50"
                          style={{ animation: 'floatParticle 5s ease-in-out infinite 2s' }}
                        ></div>
                      </>
                    )}
                  </div>

                  <style>{`
                    @keyframes gentleFloat {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-8px); }
                    }
                    @keyframes gentleBob {
                      0%, 100% { transform: translateY(0px) scale(1); }
                      50% { transform: translateY(-4px) scale(1.05); }
                    }
                    @keyframes floatParticle {
                      0%, 100% {
                        transform: translateY(0px);
                        opacity: 0.4;
                      }
                      50% {
                        transform: translateY(-8px);
                        opacity: 0.8;
                      }
                    }
                    @keyframes breathe {
                      0%, 100% {
                        transform: scale(1);
                        opacity: 0.3;
                      }
                      50% {
                        transform: scale(1.02);
                        opacity: 0.6;
                      }
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0px) translateX(0px); }
                      33% { transform: translateY(-10px) translateX(5px); }
                      66% { transform: translateY(5px) translateX(-8px); }
                    }
                    @keyframes pulse2 {
                      0%, 100% { transform: scale(1); opacity: 0.3; }
                      50% { transform: scale(1.1); opacity: 0.6; }
                    }
                    @keyframes wave {
                      0%, 100% { transform: translateX(-5px); }
                      50% { transform: translateX(5px); }
                    }

                    @media (max-width: 640px) {
                      .absolute.-bottom-4, .absolute.-bottom-3, .absolute.-bottom-2 {
                        bottom: -1rem;
                      }
                      .absolute.-left-4, .absolute.-left-3, .absolute.-left-2 {
                        left: -1rem;
                      }
                      .absolute.-top-6, .absolute.-top-4, .absolute.-top-3 {
                        top: -1rem;
                      }
                      .absolute.right-14, .absolute.right-10, .absolute.right-8 {
                        right: 2rem;
                      }
                      .absolute.-left-8, .absolute.-left-6, .absolute.-left-4 {
                        left: -1.5rem;
                      }
                      .absolute.top-28, .absolute.top-20, .absolute.top-16 {
                        top: 4rem;
                      }
                      .absolute.left-12, .absolute.left-10, .absolute.left-8 {
                        left: 2rem;
                      }
                      .absolute.top-8, .absolute.top-6, .absolute.top-4 {
                        top: 1rem;
                      }
                      .absolute.left-28, .absolute.left-20, .absolute.left-16 {
                        left: 4rem;
                      }
                      .absolute.left-32, .absolute.left-24, .absolute.left-20 {
                        left: 5rem;
                      }
                      .absolute.bottom-8, .absolute.bottom-6, .absolute.bottom-4 {
                        bottom: 1rem;
                      }
                      .absolute.right-10, .absolute.right-8, .absolute.right-6 {
                        right: 1.5rem;
                      }
                    }
                  `}</style>
                </div>
              </div>

          </div>
          </div>
        </section>
      
    </>
  )
}

export default introductionSection
