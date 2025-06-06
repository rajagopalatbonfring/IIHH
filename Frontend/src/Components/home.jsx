import React, { useState, useEffect } from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import rectangle from '../assets/home-storySectionImg.jpg'
import cloudOpen from '../assets/Group 33.png'
import cloudClose from '../assets/closeCloud.png'
import { ChevronRight } from "lucide-react";
import { Star, Heart, Users, Brain } from "lucide-react";
import { CheckCircle, BookOpen} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

function Home() {

  const features = [
    { name: 'Empathy', icon: Heart },
    { name: 'Leadership', icon: Star },
    { name: 'Humanism', icon: Users },
    { name: 'Broad Mind', icon: Brain }
  ];

  const modules = [
  { id: 1, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
  { id: 2, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
  { id: 3, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
];

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
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen"
      >
        <section 
          id="hero" 
          className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-center overflow-hidden flex items-center bg-[#223668]"
          style={{ backgroundImage: `url(${rectangle})` }}
        >
            <div className="absolute inset-0 bg-black/20 z-0" />
            {/* Content Wrapper */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10">
              
              {/* Content on the left */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#ffd278] mb-6 leading-tight tracking-tight drop-shadow-lg">
                  IIHH - <span className="block md:inline">International Institute of Horizon Humanism</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                  A transformative educational experience fostering humanism, resilience, and purpose for all learners.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                  <Link 
                    to="/programs" 
                    className="relative bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
                  >
                    <span className="relative z-10 text-[#036e8d]">Explore Programs</span>
                  </Link>
                  <a
                    href="#testimonials"
                    className="bg-white/70 text-white px-5 py-3 rounded-full text-lg font-semibold hover:bg-white hover: transition-all duration-300 flex items-center justify-center relative"
                  >
                    <i className="fa-solid fa-play text-[#036e8d]"></i>
                  </a>
                </div>
              </div>

              {/* Image on the right */}
              {/* <div className="w-full lg:w-1/2 flex justify-center">
                <img 
                  src="src/assets/kids-gesturing-thumbs-up.png" 
                  alt="IIHH Community" 
                  className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
                />
              </div> */}

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
              <a href="#what-we-offer" className="text-white">
                <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
              </a>
            </div>

              <svg
                className='absolute bottom-0'
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: '#d2a763', width: '148%', height: 87, transform: 'rotate(180deg)' }}
              >
              <path
                d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                opacity=".25"
                style={{ fill: '#ffffff' }}
              />
              <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                opacity=".5"
                style={{ fill: '#ffffff' }}
              />
                <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
            </svg>
        </section>

        
        {/* Our story */}
        <section id="about-us" className="py-24 pt-4 pb-36 px-8 bg-[#d2a763]">
          <div className="container py-10 px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 px-6">
              <div className="md:w-1/2">
                <h4 className="text-left text-gray-900 font-bold tracking-wider ">OUR STORY</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Top Choice <br />For <span className="inline-block transform hover:scale-x-105 duration-300 text-[#036e8d] text-4xl md:text-6xl uppercase">Children</span></h2>
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

              <div className="lg:w-1/2 w-full">
                <div 
                  className="relative max-w-lg mx-auto"
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
                    className="relative bg-[#036e8d] rounded-full p-6 backdrop-blur-sm border border-white/50 shadow-2xl"
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    
                    {/* Main image with smooth hover effect */}
                    <div className="relative bg-[#cde1dc] rounded-full overflow-hidden shadow-xl group cursor-pointer">
                      <img 
                        src="..\src/assets/middle-strySecImg.jpg"
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
                          src="../src/assets/one-SubImg.png"
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
                          src="../src/assets/second-SubImg.png"
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
                          src="../src/assets/third-SubImg.png"
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

                <style jsx>{`
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

          </div>
          </div>
        </section>
        

        {/* what we offer*/}
        <section id="what-we-offer" className="py-24 relative">
          <img src={cloudOpen} className='w-100 absolute -top-16 p-0 m-0' />

          {/* Abstract background with animated elements */}
          <div className="absolute inset-0 bg-[#f9fcfd] overflow-hidden">
            <div className="absolute w-full h-full opacity-100">
              <div className="absolute top-1/4 left-4 w-96 h-96 bg-[#d2a763]/80 rounded-full mix-blend-multiply float"></div>
              <div
                className="absolute top-3/4 left-2/3 w-64 h-64 bg-[#036e8d]/70 rounded-full mix-blend-multiply float"
                style={{ animationDelay: "2s", animationDuration: "5s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#223668]/70 rounded-full mix-blend-multiply float"
                style={{ animationDelay: "3s", animationDuration: "8s" }}
              ></div>
            </div>
          </div>



          <div className="container mx-auto px-8 md:px-14 relative z-10 bg-transparent">
              {/* Section header with creative typography */}
              <div className="max-w-3xl mx-auto text-center mb-24">
                <h4 className="text-[#036e8d] font-semibold tracking-wider mb-3">OUR PROGRAMS</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
                  Explore Our <span className='text-[#d2a763] inline-block transform hover:scale-x-105 duration-300'>Transformative</span>{' '}<span className='text-[#036e8d] inline-block transform hover:scale-x-105 duration-300'>Modules</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover IIHH’s unique afterschool program—unlock skills, broaden perspectives, and ignite a lifelong love of learning beyond the classroom.                
                </p>
              </div>


              <div className="overflow-hidden bg-white border border-white/50 rounded-lg shadow-2xl px-0 py-0 sm:px-8 md:px-14 sm:py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left Side - 4x4 Grid with 3 Cards + Button */}
                  <div className="p-4 flex-1 flex items-center justify-center">
                    <div className="w-full max-w-2xl">
                      {/* 4x4 Grid Structure */}
                      <div className="grid grid-cols-2 gap-6 md:gap-8">
                        {/* First 3 cards */}
                        {modules.map((module, index) => (
                          <div
                            key={module.id}
                            id={`course-card-${module.id}`}
                            className="relative flex flex-col items-center justify-center gap-3 text-center bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-square"
                          >
                            <span className="absolute top-4 right-4 text-gray-600 font-bold text-lg md:text-xl">
                              {module.id}
                            </span>
                            <i className={`fa-solid ${module.icon} text-2xl md:text-3xl text-${module.color}-600`}></i>
                            <h3 className="text-lg md:text-xl font-bold text-gray-800">{module.title}</h3>
                            <p className="text-gray-600 text-xs md:text-sm">{module.subtitle}</p>
                          </div>
                        ))}
                        
                        <div 
                          className="flex items-center justify-center aspect-square"
                        >
                        <Link
                          to="/programs"
                          style={{ backgroundImage: 'url("../src/assets/boyForModulesCta.png")' }}
                          className="bg-[#036e8d]/90 flex flex-col items-end justify-end gap-3 text-white font-medium p-6 md:p-8 rounded-2xl hover:from-[#025a75] hover:to-[#044c63] hover:scale-105 transition-all duration-300 shadow-lg w-full h-full group bg-center bg-no-repeat bg-cover"
                        >
                          <svg className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-sm md:text-base font-semibold text-center">View All<br />Modules</span>
                        </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Integrated Section (No Card Design) */}
                  <div className="px-6 pb-10 flex-1 lg:max-w-md flex flex-col justify-center">
                    {/* Content Section */}
                    <div className="space-y-6">
                      <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                      Transform Your<br /> 
                        <span className='text-[#036e8d] inline-block transform hover:scale-x-105 duration-300'>Future</span> with our <span className='text-[#d2a763] inline-block transform hover:scale-x-105 duration-300'>Programs</span> 
                      </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          Discover how our afterschool program can empower you with essential life skills! 
                          Join thousands of students who have transformed their futures through our comprehensive modules.
                        </p>
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#036e8d] rounded-full"></div>
                          <span className="text-gray-700">Comprehensive skill development</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#036e8d] rounded-full"></div>
                          <span className="text-gray-700">Expert-designed curriculum</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#036e8d] rounded-full"></div>
                          <span className="text-gray-700">Real-world applications</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mx-auto py-14 px-4">
                <div className="bg-white backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl">
                  <div className="flex flex-col lg:flex-row gap-8 p-10">
                    {/* Left Section - Heading and Description */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        What Makes <br /> 
                        IIHH <span className='text-[#036e8d] inline-block transform hover:scale-x-105 duration-300'>Unique?</span>
                      </h2>
                      <p className="text-gray-600 text-lg mb-6">
                        Our program includes three exclusive modules you won't find anywhere else—designed to spark personal growth and real-world leadership.
                      </p>
                    </div>

                    {/* Right Section - Small Square Cards */}
                    <div className='flex flex-col gap-6 align-center justify-center'>
                    <div className="lg:w-1/2 flex flex gap-4">
                      {/* Card 1 */}
                      <div className="w-32 h-32 aspect-square flex flex-col shadow-lg justify-center items-center rounded-xl p-3 bg-yellow-200 hover:shadow-sm hover:scale-105 transition-all duration-300 text-center">
                        <i className="fa-solid fa-seedling text-2xl text-green-500 mb-2"></i>
                        <h3 className="text-sm font-bold text-[#223668] leading-tight">Foundations of Humanism</h3>
                      </div>

                      {/* Card 2 */}
                      <div className="w-32 h-32 aspect-square flex flex-col shadow-lg justify-center items-center rounded-xl p-3 bg-orange-300 hover:shadow-sm hover:scale-105 transition-all duration-300 text-center">
                        <i className="fa-solid fa-toolbox text-2xl text-blue-500 mb-2"></i>
                        <h3 className="text-sm font-bold text-[#223668] leading-tight">Life Skills</h3>
                      </div>

                      {/* Card 3 */}
                      <div className="w-32 h-32 aspect-square flex flex-col shadow-lg justify-center items-center rounded-xl p-3 bg-blue-200 hover:shadow-sm hover:scale-105 transition-all duration-300 text-center">
                        <i className="fa-solid fa-users text-2xl text-purple-500 mb-2"></i>
                        <h3 className="text-sm font-bold text-[#223668] leading-tight">Humanistic Leadership</h3>
                      </div>
                    </div>
                    <div className='flex w-full align-center justify-center'>
                      <Link
                        to="/programs"
                        className="inline-flex items-center justify-center text-[#036e8d] font-bold hover: hover:translate-x-1 transition-all duration-300 group text-base"
                      >
                       See Why These Modules Are Unique
                        <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>

                    </div>

                  </div>
                </div>
              </div>
    
              {/* Call to action */}
              <div className="mt-8 text-center">
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#025a75] hover:translate-x-1 transition-all duration-300 shadow-lg group text-base"
                >
                  Explore All Programs
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

            </div>
        </section>


        {/* Why choose us */}
        <section id="whychooseus" className="relative py-12 md:py-14 bg-[#036e8d] overflow-hidden">

          <img src={cloudClose} className='w-100 absolute -top-12 p-0 m-0' />

          <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
            {/* Top Section: Image and Text */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 mb-20">
              
                {/* Image */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500">
                  <img
                    src="src/assets/thinkingImg.png"
                    alt="IIHH Transformation"
                    className="w-full h-full object-cover bg-[#223668]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                </div>

                {/* Text Content */}
                <div className="w-full text-center lg:text-left">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">
                    Why Choose{" "}
                    <span className="text-[#d2a763] relative inline-block transform hover:scale-x-105 duration-300">
                      IIHH?
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#d2a763] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                    </span>
                  </h2>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#036e8d] mb-6 animate-fade-in-delayed">
                    Because Real Transformation Starts Here
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-delayed">
                    We deliver more than education—we foster profound personal growth through our uniquely humanistic approach that nurtures resilience, empathy, and purpose.
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-4 text-left max-w-xl mx-auto mb-14 lg:mx-0">
                    {[
                      "Holistic development for students, educators & professionals",
                      "Evidence-based methodologies with measurable outcomes",
                      "Community-centered learning that creates lasting change",
                    ].map((text, index) => (
                      <div
                        key={index}
                        className="flex items-center group animate-fade-in"
                        style={{ animationDelay: `${(index + 1) * 200}ms` }}
                      >
                        <ChevronRight
                          className="text-blue-500 mr-3 group-hover:translate-x-1 transition-transform duration-300"
                          size={20}
                        />
                        <span className="text-gray-700 text-base sm:text-lg">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {['Humanistic Focus','Emotional Intelligence', 'Social Responsibility', 'Global Perspective'].map((tag, index) => (
                      <span key={index} className="bg-[#036e8d]/10 text-[#036e8d] px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          </div>

        </section>
    

        {/* FAQ Section - New addition */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">Frequently Asked <span className="text-[#036e8d] transform inline-block hover:scale-x-105 duration-300">Questions</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about our humanistic education programs and how they can benefit you.
                </p>
              </div>
              
              {/* Two Column FAQ Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    question: "Who can enroll in IIHH programs?",
                    answer: "Our programs are designed for diverse audiences including students (K-12 and college), educators, professionals, and lifelong learners. We have specialized tracks for different age groups and experience levels.",
                    category: "Enrollment"
                  },
                  {
                    question: "How are courses delivered?",
                    answer: "We offer flexible learning formats including in-person workshops, online courses, blended learning programs, and intensive retreats. All formats emphasize experiential learning and practical application.",
                    category: "Learning Format"
                  },
                  {
                    question: "What is the duration of IIHH programs?",
                    answer: "Program duration varies based on the course type. Short workshops range from 2-5 days, certificate programs span 3-6 months, and comprehensive diploma courses take 12-18 months to complete.",
                    category: "Duration"
                  },
                  {
                    question: "Do you offer corporate training programs?",
                    answer: "Yes, we provide customized corporate training programs focusing on emotional intelligence, leadership development, team building, and workplace wellness. Programs can be tailored to your organization's specific needs.",
                    category: "Corporate"
                  },
                  {
                    question: "What qualifications do instructors have?",
                    answer: "Our instructors are certified professionals with advanced degrees in psychology, education, or related fields. They have extensive experience in humanistic approaches and undergo continuous professional development.",
                    category: "Faculty"
                  },
                  {
                    question: "Can I get continuing education credits?",
                    answer: "Many of our programs offer continuing education units (CEUs) for professionals in education, healthcare, and counseling. Check with your professional board for specific accreditation requirements.",
                    category: "Certification"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-fit">
                    <details className="group/details">
                      <summary className="flex justify-between items-start p-6 cursor-pointer hover:bg-gray-50 rounded-t-2xl transition-colors duration-200">
                        <div className="flex-1 pr-4">
                          <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                            {item.question}
                          </h3>
                          <div className="flex items-center">
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                            <span className="transform group-open/details:rotate-180 transition-transform duration-300">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="text-center mt-16">
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#025a75] hover:translate-x-1 transition-all duration-300 shadow-lg group text-base"
                >
                  View all FAQ
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
            </div>
          </div>
        </section>


        {/* Testimonials Section - Redesigned to match image */}
        <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl text-center font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Hear from our learners and families about how IIHH’s afterschool program has helped them grow beyond academics—building confidence, life skills, and a humanistic outlook for the real world.
            </p>

            {/* Navigation and Cards Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Left Arrow */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
                {[
                  {
                    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
                    name: "PRIYA SHARMA",
                    title: "A New Perspective on Learning",
                    desc: "Joining IIHH was a turning point for me. The modules on self-awareness and emotional intelligence helped me understand myself and connect better with others. I feel more confident and ready for any challenge.",
                    role: "Student, Grade 10",
                    stars: 5,
                  },
                  {
                    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
                    name: "AARAV PATEL",
                    title: "Skills for Real Life",
                    desc: "IIHH taught me practical skills I never learned in regular school—like managing my finances, solving problems, and leading with empathy. I now see the world differently and feel prepared for my future.",
                    role: "Student, Grade 11",
                    stars: 5,
                  },
                  {
                    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
                    name: "NEHA GUPTA",
                    title: "Holistic Growth for My Child",
                    desc: "As a parent, I wanted my daughter to learn more than just academics. IIHH’s focus on values, culture, and inclusivity has made her more thoughtful and responsible. I highly recommend this program!",
                    role: "Parent",
                    stars: 5,
                  },
                ].map((testimonial, index) => (
                  <Tilt
                    key={index}
                    className="tilt-card"
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    transitionSpeed={400}
                    scale={1.05}
                    glareEnable={false}
                    perspective={1000}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center h-full flex flex-col">
                      {/* Large Quote Mark */}
                      <div className="text-6xl text-gray-300 font-serif mb-4">"</div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{testimonial.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                        {testimonial.desc}
                      </p>
                      
                      {/* Stars */}
                      <div className="flex justify-center text-orange-400 mb-6">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Author Info */}
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>

            {/* Optional: Read More Button */}
            <div className="text-center mt-12">
                <Link
                  to="/testimonials"
                  className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#025a75] hover:translate-x-1 transition-all duration-300 shadow-lg group text-base"
                >
                  Read More Success Stories
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
            </div>
          </div>
        </section>


        {/* Enhanced CTA Section */}
        <section className="w-full overflow-hidden">
        
          <div className="flex flex-col md:flex-row">
            {/* Left side - Yellow background with text and form */}
            <div className="bg-yellow-300 md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Better Future for Your Kids</h2>
              <p className="text-gray-800 mb-6">Embark on a humanistic journey that empowers learners of all ages. Start your transformation today.</p>
              <div className="flex flex-col sm:flex-row align-center gap-6">
                <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
            
            {/* Right side - Green background with children image */}
            <div className="relative bg-emerald-400 md:w-full flex items-center justify-center">
                <img  className="flex items-end" src="src/assets/freepik__adjust__81086.png" alt="" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;








// import '../App.css';
// import heroImg from '../assets/kids-gesturing-thumbs-up.png'
// import rocket from '../assets/airplane.png'
// import bgImg from '../assets/portrait-smiley-little-kid2.jpg'
// import stryImg from '../assets/smiley-childrens-book-day-event.jpg'
// import React, { useEffect } from 'react';
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";


// function Home() {
//   useEffect(() => {
//     const elements = document.querySelectorAll('.scroll-animate');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => elements.forEach((el) => observer.unobserve(el));
//   }, []);

//   return (
//     <div className="h-full text-[#036e8d] ">
//       <main className="pt-20 min-h-screen">
//         <section
//           id="hero"
//           className="relative h-auto min-h-[600px] md:min-h-[700px] overflow-hidden flex items-center scroll-animate"
//           style={{ backgroundImage:`url('../assets/Rectangle 7.png')`,
//             backgroundSize: 'cover',          
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'right',
//             width: '100%',
//             height: '400px',
//           }}
//         >
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-[#036e8d]/10 z-0"></div>
//           {/* <motion.img
//                 src={rocket}
//                 alt="rocket"
//                 className="absolute w-14 md:w-16 top-[25%] left-[100px] z-20"
//                 animate={{
//                   x: ["-100px","1200px"], // curve-like x steps
//                   y: ["-50%", "30%", "60%", "30%", "0%"],               // mimics arc motion
//                   rotate: [60,50,40,30,20,10],                         // synced with the arc
//                 }}
//                 transition={{
//                   duration: 12,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//             /> */}
//           {/* Content Wrapper */}
//           <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
//             {/* Content on the left */}
//             <div className="w-full lg:w-1/2 text-center lg:text-left scroll-animate">
//               <h1 className="text-5xl md:text-7xl font-bubblegum text-[#ffffff] mb-6 leading-tight tracking-tight drop-shadow-lg bg-[#ffcd80] bg-clip-text text-transparent">
//                 IIHH - Internation Institute of Horizon Humanism
//               </h1>
//               <p className="text-xl md:text-2xl text-[#ffffff] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md font-comic">
//                 Transformative education fostering resilience, empathy, and purpose for all learners.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 scroll-animate">
//                 <Link
//                   to="/programs"
//                   className="relative bg-[#f39f5f] text-[#ffffff] px-8 py-4 rounded-full text-xl font-bubblegum overflow-hidden group transition-all duration-500 hover:bg-[#036e8d] hover:shadow-lg"
//                 >
//                   <span className="relative z-10">Explore Programs</span>
//                 </Link>
//                 <a
//                   href="#testimonials"
//                   className="bg-transparent border-2 border-[#ffffff] text-[#ffffff] px-8 py-4 rounded-full text-xl font-bubblegum hover:bg-[#d2a763]/20 hover:border-[#d2a763] transition-all duration-500"
//                 >
//                   See Success Stories
//                 </a>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex justify-center">
//                <img 
//                  src={heroImg}
//                  alt="IIHH Community" 
//                  className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
//                />
//              </div> 


//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse z-10">
//             <a href="#about-us" className="text-[#ffffff]">
//               <i className="fa-solid fa-chevron-down text-3xl drop-shadow-md"></i>
//             </a>
//           </div>
//         </section>
//         {/* About Us Section with Parallax Background */}
//         <section 
//           id="about-us" 
//           className="py-20 px-8 bg-cover bg-[#ffffff] bg-fixed bg-center scroll-animate"
//         >
//           {/* <div className="mx-auto px-6 py-12 bg-[#ffffff]/0 border border-black border-dotted"> */}
//             <div className="container mx-auto px-6 bg-[#1f3e59]/90 rounded-lg py-12">
//               <div className="flex flex-col md:flex-row items-center gap-12">
//                 <div className="md:w-1/2 scroll-animate">
//                   <h4 className="text-[#f8c575] font-bubblegum tracking-wider mb-3 text-lg">OUR STORY</h4>
//                   <h2 className="text-4xl md:text-5xl font-bubblegum text-[#1f3e59] mb-6 leading-tight bg-[#ffffff] bg-clip-text text-transparent">
//                     Pioneering Humanistic Education
//                   </h2>
//                   <p className="text-[#ffffff] mb-6 font-comic text-lg leading-relaxed">
//                     Founded in 2018, IIHH leads in integrating humanistic principles into education, nurturing the mind, heart, and spirit.
//                   </p>
//                 </div>
//                 <div className="md:w-1/2 relative scroll-animate">
//                   <div className="w-full h-80 md:h-96 bg-[#d2a763]/20 rounded-lg relative z-10 overflow-hidden shadow-lg">
//                     <img 
//                       src={stryImg} 
//                       alt="Students engaged in learning" 
//                       className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           {/* </div> */}
//         </section>

//         {/* What We Offer Section */}
//         <section id="what-we-offer" className="py-24 bg-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6 md:px-12 relative z-10">
//             <div className="max-w-3xl mx-auto text-center mb-24 scroll-animate">
//               <h4 className="text-[#d2a763] font-bubblegum tracking-wider mb-3 text-lg">OUR EXPERTISE</h4>
//               <h2 className="text-5xl md:text-6xl font-bubblegum text-[#1f3e59] mb-6 leading-tight bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">
//                 Transform Your Potential
//               </h2>
//               <p className="text-xl text-[#036e8d] leading-relaxed font-comic">Comprehensive programs to develop essential skills for success in today's world.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: "fa-solid fa-brain",
//                   title: "Emotional Intelligence",
//                   desc: "Cultivate self-awareness and empathy through reflective practices.",
//                   color: "from-[#036e8d] to-[#d2a763]"
//                 },
//                 {
//                   icon: "fa-solid fa-hands-helping",
//                   title: "Social Responsibility",
//                   desc: "Develop leadership and community engagement skills.",
//                   color: "from-[#d2a763] to-[#036e8d]"
//                 },
//                 {
//                   icon: "fa-solid fa-lightbulb",
//                   title: "Critical Thinking",
//                   desc: "Enhance problem-solving and ethical reasoning abilities.",
//                   color: "from-[#036e8d] to-[#d2a763]"
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="group relative scroll-animate">
//                   <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl transition-all duration-500 group-hover:shadow-lg`}></div>
//                   <div className="relative bg-[#ffffff] rounded-xl p-8 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2 shadow-lg">
//                     <div className="bg-[#d2a763]/20 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto transition-transform duration-500 group-hover:scale-105">
//                       <i className={`${item.icon} text-4xl text-[#036e8d]`}></i>
//                     </div>
//                     <h3 className="text-2xl font-bubblegum text-[#036e8d] mb-4 transition-transform duration-500 group-hover:scale-105">{item.title}</h3>
//                     <p className="text-[#036e8d] flex-grow font-comic text-lg">{item.desc}</p>
//                     <div className="mt-6 transition-opacity duration-500 group-hover:opacity-100">
//                       <Link to={`/programs/${item.title.toLowerCase().replace(' ', '-')}`} className="text-[#d2a763] font-comic flex items-center justify-center transition-transform duration-500 hover:scale-105">
//                         Learn more <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="container mx-auto px-6 py-20 pb-0 scroll-animate">
//               <h2 className="text-4xl font-bubblegum text-[#036e8d] mb-16 text-center bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">Our Featured Modules</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {[
//                   {
//                     icon: "fa-solid fa-seedling",
//                     title: "Foundations of Humanism",
//                     desc: "Discover values of empathy, autonomy, and purpose.",
//                     color: "text-[#d2a763]"
//                   },
//                   {
//                     icon: "fa-solid fa-toolbox",
//                     title: "Life Skills",
//                     desc: "Master practical skills for personal and social success.",
//                     color: "text-[#036e8d]"
//                   },
//                   {
//                     icon: "fa-solid fa-users",
//                     title: "Humanistic Leadership",
//                     desc: "Inspire with compassion and integrity.",
//                     color: "text-[#d2a763]"
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="flex flex-col justify-center bg-[#ffffff] rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl scroll-animate">
//                     <i className={`${item.icon} text-4xl ${item.color} mb-6 transition-transform duration-500 hover:scale-110`}></i>
//                     <h3 className="text-2xl font-bubblegum text-[#036e8d] mb-4 transition-transform duration-500 hover:scale-105">{item.title}</h3>
//                     <p className="text-[#036e8d] mb-6 font-comic text-lg">{item.desc}</p>
//                     <div>
//                       <Link to="/programs" className={`text-${item.color} font-comic flex items-center transition-transform duration-500 hover:scale-105`}>
//                         Explore module <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-20 text-center scroll-animate">
//               <Link to="/programs" className="inline-flex items-center px-8 py-4 rounded-full bg-[#d2a763] text-[#ffffff] font-bubblegum text-xl transition-all duration-500 hover:bg-[#036e8d] hover:shadow-lg">
//                 Explore Our Programs
//                 <i className="fa-solid fa-arrow-right ml-2"></i>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Video Section */}
//         <section id="video-showcase" className="py-20 bg-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto text-center mb-12 scroll-animate">
//               <h2 className="text-5xl font-bubblegum text-[#036e8d] mb-6 bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">See IIHH in Action</h2>
//               <p className="text-xl text-[#036e8d] font-comic">Discover how our humanistic approach transforms education and empowers learners.</p>
//             </div>
//             <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#036e8d] flex items-center justify-center scroll-animate">
//               <img 
//                 src="/api/placeholder/1280/720" 
//                 alt="Video thumbnail" 
//                 className="w-full h-full object-cover opacity-75 rounded-lg transition-transform duration-500"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="w-20 h-20 bg-[#d2a763] bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-500">
//                   <i className="fa-solid fa-play text-[#ffffff] text-2xl ml-1"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Section */}
//         <section id="why-choose" className="relative h-auto md:h-[350px] bg-gradient-to-r from-[#036e8d]/20 to-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6 py-16 md:py-20">
//             <div className="flex flex-col items-center text-center scroll-animate">
//               <h2 className="text-5xl md:text-6xl font-bubblegum text-[#1f3e59] mb-6 transition-transform duration-500">
//                 Why Choose IIHH?
//               </h2>
//               <p className="text-xl md:text-2xl text-[#036e8d] max-w-2xl font-comic">
//                 Unique humanistic education fostering resilience, empathy, and purpose for all.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section id="benefits" className="py-20 bg-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   icon: "fa-solid fa-heart",
//                   title: "Humanistic Focus",
//                   desc: "Education rooted in empathy, autonomy, and purpose.",
//                   color: "text-[#d2a763] bg-[#d2a763]/10"
//                 },
//                 {
//                   icon: "fa-solid fa-brain",
//                   title: "Emotional Intelligence",
//                   desc: "Developing self-awareness and resilience.",
//                   color: "text-[#036e8d] bg-[#036e8d]/10"
//                 },
//                 {
//                   icon: "fa-solid fa-hands-helping",
//                   title: "Social Responsibility",
//                   desc: "Fostering ethical leadership and engagement.",
//                   color: "text-[#d2a763] bg-[#d2a763]/10"
//                 },
//                 {
//                   icon: "fa-solid fa-globe",
//                   title: "Global Perspective",
//                   desc: "Building cultural intelligence and inclusivity.",
//                   color: "text-[#036e8d] bg-[#036e8d]/10"
//                 },
//               ].map((item, index) => (
//                 <div key={index} className={`rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl ${item.color} scroll-animate`}>
//                   <div className={`text-4xl mb-4 ${item.color} transition-transform duration-500`}>
//                     <i className={item.icon}></i>
//                   </div>
//                   <h3 className="text-xl font-bubblegum text-[#036e8d] mb-4 transition-transform duration-500">{item.title}</h3>
//                   <p className="text-[#036e8d] font-comic text-lg">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section with Parallax Background */}
//         <section 
//           id="testimonials" 
//           className="py-20 bg-[#ffffff] bg-cover bg-fixed bg-center scroll-animate"
//           style={{ backgroundImage: "url('/api/placeholder/1920/1080?text=Community+Moments')" }}
//         >
//           <div className="container mx-auto px-6 bg-[#ffffff]/90 rounded-lg py-12">
//             <h2 className="text-5xl font-bubblegum text-[#036e8d] mb-4 text-center bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500 scroll-animate">What Our Community Says</h2>
//             <p className="text-xl text-center text-[#036e8d] mb-12 max-w-2xl mx-auto font-comic scroll-animate">
//               Real stories from students, educators, and parents who experienced the IIHH difference.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
//               {[
//                 {
//                   img: "/api/placeholder/80/80",
//                   name: "Priya Sharma",
//                   desc: '"IIHH transformed how I teach, making me more empathetic."',
//                   role: "Educator",
//                   stars: 5
//                 },
//                 {
//                   img: "/api/placeholder/80/80",
//                   name: "Aarav Patel",
//                   desc: '"The program helped me find my purpose—life-changing!"',
//                   role: "College Student",
//                   stars: 5
//                 },
//                 {
//                   img: "/api/placeholder/80/80",
//                   name: "Neha Gupta",
//                   desc: '"My daughter’s confidence soared thanks to IIHH."',
//                   role: "Parent of Riya, Age 12",
//                   stars: 5
//                 },
//               ].map((testimonial, index) => (
//                 <div key={index} className="bg-[#ffffff] p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl scroll-animate">
//                   <div className="absolute -top-4 -left-4 text-[#d2a763] text-6xl opacity-40">
//                     <i className="fa-solid fa-quote-left"></i>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
//                     <div>
//                       <h3 className="font-bubblegum text-[#036e8d] text-lg">{testimonial.name}</h3>
//                       <p className="text-[#036e8d] font-comic">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <div className="flex text-[#d2a763] mb-3">
//                     {[...Array(testimonial.stars)].map((_, i) => (
//                       <i key={i} className="fa-solid fa-star"></i>
//                     ))}
//                   </div>
//                   <p className="text-[#036e8d] italic font-comic text-lg">{testimonial.desc}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="text-center mt-12 scroll-animate">
//               <Link to="/testimonials" className="inline-flex items-center px-6 py-3 rounded-full bg-[#d2a763] text-[#ffffff] font-bubblegum text-lg hover:bg-[#036e8d] transition-all duration-500">
//                 Read More Success Stories
//                 <i className="fa-solid fa-arrow-right ml-2"></i>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Newsletter Section */}
//         <section id="newsletter" className="py-20 bg-[#036e8d]/90 scroll-animate">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto bg-[#ffffff]/10 rounded-2xl p-10 shadow-xl scroll-animate">
//               <div className="flex flex-col md:flex-row items-center">
//                 <div className="md:w-2/3 mb-8 md:mb-0 scroll-animate">
//                   <h2 className="text-4xl font-bubblegum text-[#ffffff] mb-4 bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">Stay Updated with IIHH</h2>
//                   <p className="text-[#ffffff] text-opacity-90 font-comic text-lg">
//                     Get insights on humanistic education, event invitations, and exclusive resources.
//                   </p>
//                 </div>
//                 <div className="md:w-1/3 w-full scroll-animate">
//                   <form className="flex flex-col space-y-3">
//                     <input 
//                       type="email" 
//                       placeholder="Your email address" 
//                       className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a763] font-comic text-[#036e8d]"
//                     />
//                     <button 
//                       type="submit" 
//                       className="bg-[#d2a763] text-[#ffffff] px-4 py-3 rounded-lg font-bubblegum text-lg hover:bg-[#ffffff] hover:text-[#036e8d] transition-all duration-500"
//                     >
//                       Subscribe Now
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section id="join-cta" className="py-20 bg-gradient-to-r from-[#036e8d] to-[#d2a763] scroll-animate">
//           <div className="container mx-auto px-6 text-center">
//             <h2 className="text-5xl font-bubblegum text-[#ffffff] mb-8 bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500 hover: scroll-animate">Join IIHH – Shape the Future</h2>
//             <p className="text-2xl text-[#ffffff] mb-12 max-w-2xl mx-auto font-comic scroll-animate">
//               Embark on a humanistic journey that empowers learners of all ages.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-6 scroll-animate">
//               <button className="bg-[#ffffff] text-[#036e8d] px-12 py-4 rounded-full text-xl font-bubblegum hover:bg-[#d2a763] hover:text-[#ffffff] transition-all duration-500 hover:shadow-xl">
//                 Enroll Now
//               </button>
//               <button className="bg-transparent border-2 border-[#ffffff] text-[#ffffff] px-12 py-4 rounded-full text-xl font-bubblegum hover:bg-[#d2a763] hover:border-[#d2a763] transition-all duration-500">
//                 Request Information
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Home;
