import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../App.css";

import rectangle from '../assets/home-storySectionImg.jpg';

import stryimg1 from '../assets/middlestrySecImg.jpg';
import stryimg2 from '../assets/one-SubImg.png';
import stryimg3 from '../assets/second-SubImg.png';
import stryimg4 from '../assets/third-SubImg.png';

import bgImage from '../assets/boyForModulesCta.png';

import boyThink from '../assets/thinkingImg.png';

import homeCta from '../assets/freepik__adjust__81086.png';



import cloudOpen from '../assets/Group 33.png'
import cloudClose from '../assets/closeCloud.png'
import logoAlone from '../assets/IIHH_OnlyLogo.png'

import { ChevronRight } from "lucide-react";
import { Star, Heart, Users, Brain } from "lucide-react";
import { CheckCircle, BookOpen} from 'lucide-react';

import TestimonialCarousel from '../Components/ui/TestimonialCarousel'

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

  const testimonials = [
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
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      name: "VIKRAM SINGH",
      title: "Empowering Leadership",
      desc: "The leadership workshops at IIHH helped me discover my potential to inspire others. The focus on empathy and ethical decision-making has shaped me into a better leader and person.",
      role: "Student, Grade 12",
      stars: 5,
    },
    {
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      name: "ANITA DESAI",
      title: "A Supportive Community",
      desc: "IIHH’s community-driven approach made my son feel valued and supported. The program’s emphasis on collaboration and cultural understanding has been transformative for his growth.",
      role: "Parent",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };



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
      <main className="pt-20 min-h-screen overflow-hidden">
        

        {/* Hero section */}
        <section
          id="hero"
          className="relative h-auto min-h-[500px] md:min-h-[600px] 2xl:h-[800px] bg-cover bg-center flex items-center justify-center bg-[#223668]"
          style={{ backgroundImage: `url(${rectangle})` }}
        >
          <div className="absolute inset-0 bg-black/20 z-0" />

          {/* Content Wrapper */}
          <div className="py-4 w-full container px-6 relative z-10 flex flex-col items-center justify-start md:flex-row md:items-start md:justify-start gap-10">
            <div className="w-full flex flex-col items-center md:items-start md:text-left">
              
              {/* Logo + Heading */}
              <div className="w-full flex flex-col text-center items-center mt-4 gap-4 md:flex-row md:items-start md:text-left md:justify-start">
                <img
                  src={logoAlone}
                  alt="Logo"
                  className="align-center h-auto object-contain transform hover:scale-105 duration-300"
                  width="200px"
                />
                <h1 className="block text-5xl md:text-6xl font-extrabold text-[#ffd278] mb-4 leading-tight tracking-tight drop-shadow-lg">
                    International <br /> Institute 
                    of <br />Horizon Humanism
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-center text-lg md:text-xl text-white/90 mb-10 max-w-lg md:mx-0 leading-relaxed drop-shadow-md md:text-left">
                A transformative educational experience fostering humanism, resilience,
                and purpose for all learners.
              </p>

              {/* Buttons */}
              <div className="pb-20 flex flex-row justify-center md:justify-start gap-6 md:pb-0">
                <Link
                  to="/programs"
                  className="sm:text-lg bg-white text-purple-700 px-8 py-3 rounded-full font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
                >
                  <span className="text-[#036e8d]">Explore Programs</span>
                </Link>
                <a
                  href="#testimonials"
                  className="relative bg-white/70 text-white px-5 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center"
                >
                  <i className="fa-solid fa-play text-[#036e8d]"></i>
                </a>
              </div>
            </div>
          </div>

          {/* SVG Wave */}
          <svg
            className="absolute bottom-0"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "#d2a763",
              width: "148%",
              height: 90,
              transform: "rotate(180deg)",
            }}
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
              style={{ fill: "#ffffff" }}
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
              style={{ fill: "#ffffff",}}
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
          <div className='absolute -bottom-0.5 bg-[#d2a763] w-full h-1'></div>
        </section>

        
        {/* Our story */}
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


        {/* what we offer*/}
        <section id="what-we-offer" className="py-24 relative">
          <img 
            src={cloudOpen} 
            className="w-full absolute top-0 left-0 object-cover object-top" 
            style={{ transform: 'translateY(-50%)'}}
          />

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

          <div className="container mx-auto px-8 md:px-8 relative z-10 bg-transparent">
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


              <div className="overflow-hidden bg-white border border-white/50 rounded-lg shadow-2xl px-0 py-0 sm:px-8 md:px-0 sm:py-8 md:py-8">
                <div className="flex flex-col lg:flex-row gap-0`">
                  {/* Left Side - 4x4 Grid with 3 Cards + Button */}
                  <div className="py-6 px-6 sm:px-10 flex-1 flex items-center justify-center">
                    <div className="w-full max-w-3xl">
                      {/* 4x4 Grid Structure */}
                      <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                        {/* First 3 cards */}
                        {modules.map((module, index) => (
                          <div
                            key={module.id}
                            id={`course-card-${module.id}`}
                            className="relative flex flex-col items-center justify-center gap-3 text-center bg-white px-6 py-6 md:px-4 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 aspect-square"
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
                          className="w-full h-full flex items-center justify-center aspect-square"
                        >
                        <Link
                          to="/programs"
                          style={{ backgroundImage:`url(${bgImage})` }}
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
                  <div className="px-10 pb-10 flex-1 lg:max-w-xl flex flex-col justify-center">
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

              <div className="container mx-auto py-10 max-w-7xl">
                <div className="bg-white backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl">
                  <div className="px-8 sm:px-0 py-4 flex flex-col lg:flex-row align-center justify-center gap-4 md:gap-1">
                    {/* Left Section - Heading and Description */}
                    <div className="py-4 px-0 sm:py-4 sm:px-10 lg:w-1/2 lg:max-w-4xl flex flex-col justify-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        What Makes <br /> 
                        IIHH <span className='text-[#036e8d] inline-block transform hover:scale-x-105 duration-300'>Unique?</span>
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Our program includes three exclusive modules you won't find anywhere else—designed to spark personal growth and real-world leadership.
                      </p>
                    </div>

                    {/* Right Section - Small Square Cards */}
                    <div className='py-2 pb-8 sm:pb-4 sm:py-0 px-2 sm:px-8 md:px-10 md:pb-0 flex flex-col gap-6 align-center justify-center'>
                      <div className="flex flex-col sm:flex-row align-center justify-center gap-4 2xl:gap-6">
                        {/* Card 1 */}
                        <div className="w-full aspect-square flex flex-col shadow-lg justify-center items-center rounded-xl p-3 bg-yellow-200 hover:shadow-sm hover:scale-105 transition-all duration-300 text-center">
                          <i className="fa-solid fa-seedling text-2xl text-green-500 mb-2"></i>
                          <h3 className="text-sm font-bold text-[#223668] leading-tight">Foundations of Humanism</h3>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full aspect-square flex flex-col shadow-lg justify-center items-center rounded-xl p-3 bg-orange-300 hover:shadow-sm hover:scale-105 transition-all duration-300 text-center">
                          <i className="fa-solid fa-toolbox text-2xl text-blue-500 mb-2"></i>
                          <h3 className="text-sm font-bold text-[#223668] leading-tight">Life Skills</h3>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full aspect-square flex flex-col shadow-lg justify-center items-center rounded-xl p-3 bg-blue-200 hover:shadow-sm hover:scale-105 transition-all duration-300 text-center">
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
        <section id="whychooseus" className="relative py-2 md:py-14 bg-[#036e8d]">

          <img 
            src={cloudClose} 
            className="w-full absolute top-0 left-0 object-cover object-top" 
            style={{ transform: 'translateY(-50%)'}}
          />

          <div className="container mx-auto mt-24 px-8 sm:px-6 lg:px-8">
            {/* Top Section: Image and Text */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 mb-20">
              
                {/* Image */}
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500">
                  <img
                    src={boyThink}
                    alt="IIHH Transformation"
                    className="w-full h-full object-cover bg-[#223668]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                </div>

                {/* Text Content */}
                <div className="w-full text-center text-left">
                  <h2 className="text-left text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">
                    Why Choose{" "}
                    <span className="text-[#d2a763] relative inline-block transform hover:scale-x-105 duration-300">
                      IIHH?
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#d2a763] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                    </span>
                  </h2>
                  <h3 className="text-left text-2xl lg:text-3xl font-semibold text-[#036e8d] mb-6 animate-fade-in-delayed">
                    Because Real Transformation Starts Here
                  </h3>
                  <p className="text-left text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-delayed lg:max-w-4xl">
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
          <div className="container mx-auto px-8">
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
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">What Our <span className="text-[#d2a763] transform inline-block hover:scale-x-105 duration-300">Students </span>{" "}Say</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Hear from our learners and families about how IIHH’s afterschool program has helped them grow beyond academics—building confidence, life skills, and a humanistic outlook for the real world.
            </p>

            <TestimonialCarousel testimonials={testimonials} />
            
            {/* Read More Button */}
            <div className="text-center">
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#025a75] hover:translate-x-1 transition-all duration-300 shadow-lg group text-base"
              >
                Read More
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>


        {/* Enhanced CTA Section */}
        <section className="w-full overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row">
            {/* Left side - Yellow background with text and form */}
            <div className="bg-yellow-300 md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
              <h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Better Future for Your Kids</h2>
              <p className="text-center md:text-left text-gray-800 lg:text-xl mb-6">Embark on a humanistic journey that empowers learners of all ages. Start your transformation today.</p>
              <div className="flex flex-col sm:flex-row align-center justify-center md:justify-start gap-6">
                <button className="sm:text-xl bg-white text-[#036e8d] px-12 py-4 rounded-full font-semibold transform hover:scale-105 hover:shadow-lg transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
            
            {/* Right side */}
            <div className="relative bg-yellow-300 md:w-full flex items-center justify-center">
                <img  className="flex items-end w-full h-full object-cover object-fit" src={homeCta} alt="ctaimg" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;