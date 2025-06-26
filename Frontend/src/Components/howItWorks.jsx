import React, { useState, useEffect,} from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';

import HowWorkBgImage from '../assets/Howitworks-heroimg.jpg';

import howItWorksCta from '../assets/cta-howitworksPage.jpg';

import cloudOpen from '../assets/Group 33.png';
import cloudClose from '../assets/closeCloud.png';

import bolbImg from '../assets/Vector.png'

import { ChevronRight } from 'lucide-react';


const steps = [
  {
    title: "Discover",
    desc: "Explore our innovative healthcare solutions tailored to your needs",
    icon: "fa-magnifying-glass",
    color: "from-[#036e8d] to-[#025a73]"
  },
  {
    title: "Connect", 
    desc: "Join our community of healthcare professionals and patients",
    icon: "fa-handshake",
    color: "from-[#d2a763] to-[#b8914d]"
  },
  {
    title: "Transform",
    desc: "Experience personalized care that adapts to your journey",
    icon: "fa-rocket",
    color: "from-[#036e8d] to-[#d2a763]"
  },
  {
    title: "Thrive",
    desc: "Achieve optimal health outcomes with our continued support",
    icon: "fa-star",
    color: "from-[#d2a763] to-[#036e8d]"
  }
];

const activities = [
  {
    title: "Mindfulness & Reflection",
    desc: "Daily practices for self-awareness and balance.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/00bfa688de-7bcf72179a6e6a2ac002.png",
  },
  {
    title: "Community Engagement",
    desc: "Service projects that foster empathy and responsibility.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/82490b4b46-3069e169415faa93f34d.png",
  },
  {
    title: "Critical Thinking Labs",
    desc: "Interactive sessions to sharpen problem-solving and ethics.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/94da3bce72-2c360a3e59e34be9feb3.png",
  },
];

const benefits = [
  {
    icon: "fa-heart-pulse",
    title: "Holistic Growth",
    desc: "Nurture balanced development of mind, body, and character.",
  },
  {
    icon: "fa-lightbulb",
    title: "Ethical Leadership",
    desc: "Lead with compassion, integrity, and positive change.",
  },
  {
    icon: "fa-globe",
    title: "Global Perspective",
    desc: "Embrace diversity and contribute to an inclusive world.",
  },
];



export default function HowItWorks() {

  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-[#f9fcfd] font-comic text-base-content overflow-hidden">

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-auto min-h-[500px] md:min-h-[600px] 2xl:h-[800px]  bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HowWorkBgImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 flex-col align-center justify-center ">
          <h1 className="text-4xl text-center md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            How <span className="text-[#ffd278]">IIHH</span> Works
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover our unique, practical approach to humanistic learning—empowering the next generation through real-world experiences.
          </p>
          <p className='text-center'>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center bg-[#ffd278] text-[#036e8d] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-[#d2a763] transition-all duration-300 group"
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
        <svg
          className="absolute bottom-0"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#d2a763', width: '148%', height: 90, transform: 'rotate(180deg)' }}
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
                  <div className='absolute -bottom-0.5 bg-[#d2a763] w-full h-1'></div>
      </section>
      
      {/* Intro section */}
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
                  <button className="inline-flex items-center bg-[#036e8d] hover:bg-[#024a5c] text-white font-semibold py-3 px-6 sm:py-3.5 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center">
                    <i className="fa-solid fa-rocket mr-2 sm:mr-3"></i>
                    Explore Our Programs
                  </button>
                  
                  <button className="inline-flex items-center border-2 border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#036e8d] font-semibold py-3 px-6 sm:py-3.5 sm:px-8 rounded-full transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center">
                    <i className="fa-solid fa-play mr-2 sm:mr-3"></i>
                    Watch Our Story
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
                <style jsx>{`
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
        <style jsx>{`
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

      {/* Foundation */}
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
        <style jsx>{`
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

 {/* <JourneySteps steps={steps} /> */}

      {/* 4-Step Journey */}
      <section id="steps" className="relative h-auto flex items-center">
        <div className="container mx-auto px-8 md:px-12 relative z-10 max-w-8xl">
          {/* Header with Stagger Animation */}
          <div className={`text-center mt-16 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your <span className='text-[#d2a763] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>IIHH</span> <span className='text-[#036e8d] inline-block transform hover:scale-x-105 transition-transform duration-300'> Journey</span>
            </h2>
            <div className="inline-block mb-4">
              <span className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
                Your Journey Starts Here
              </span>
            </div>
          </div>

          {/* Modern Grid Layout */}
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#036e8d]/30 to-transparent hidden lg:block"></div>
            
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${idx * 200}ms`,
                  transform: activeStep === idx ? 'scale(1.03)' : 'scale(1)'
                }}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 z-20">
                  <div className={`w-10 h-10 rounded-full bg-[#d2a763] flex items-center justify-center text-white font-bold text-base shadow-lg transition-all duration-700 ease-out ${
                    activeStep === idx ? 'scale-110 shadow-2xl' : ''
                  }`}>
                    {idx + 1}
                  </div>
                </div>

                {/* Main Card */}
                <div className={`relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:-translate-y-1.5 ${
                  activeStep === idx 
                    ? 'border-[#036e8d]/30 shadow-xl bg-white/90' 
                    : 'border-white/50 shadow-lg'
                }`}>
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
                      activeStep === idx ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'
                    }`}>
                      <i className={`fa-solid ${step.icon} text-3xl text-black transition-all duration-700 ease-out`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className={`font-bold text-lg mb-3 transition-all duration-700 ease-out ${
                      activeStep === idx ? 'text-[#036e8d]' : 'text-gray-800'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed transition-all duration-700 ease-out">
                      {step.desc}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-[#036e8d] transition-all duration-700 ease-out rounded-full ${
                        activeStep === idx ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Connecting Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <div className={`w-6 h-6 text-[#036e8d] transition-all duration-700 ease-out ${
                      activeStep >= idx ? 'opacity-100 translate-x-0' : 'opacity-50 -translate-x-2'
                    }`}>
                      <i className="fa-solid fa-arrow-right text-lg"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Timeline */}
          <div className="mt-12 flex justify-center space-x-3">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ease-out ${
                  activeStep === idx 
                    ? 'bg-[#036e8d] scale-125' 
                    : 'bg-gray-300 hover:bg-[#d2a763]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </section>

      {/* <section id="steps" className="relative h-auto flex items-center">

        <div className="container mx-auto px-10 md:px-14 relative z-10 max-w-7xl">
          <div className={`text-center mt-20 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your <span className='text-[#d2a763] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>IIHH</span> <span className='text-[#036e8d] inline-block transform hover:scale-x-105 transition-transform duration-300'> Journey</span>
            </h2>
            <div className="inline-block mb-4">
              <span className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
                Your Journey Starts Here
              </span>
            </div>
          </div>

          <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#036e8d]/30 to-transparent hidden lg:block"></div>
            
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${idx * 200}ms`,
                  transform: activeStep === idx ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setActiveStep(idx)}
              >

                <div className="absolute -top-4 -left-4 z-20">
                  <div className={`w-12 h-12 rounded-full bg-[#d2a763] flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-700 ease-out ${
                    activeStep === idx ? 'scale-110 shadow-2xl' : ''
                  }`}>
                    {idx + 1}
                  </div>
                </div>


                <div className={`relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:-translate-y-2 ${
                  activeStep === idx 
                    ? 'border-[#036e8d]/30 shadow-xl bg-white/90' 
                    : 'border-white/50 shadow-lg'
                }`}>
                  
                  

                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
                      activeStep === idx ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'
                    }`}>
                      <i className={`fa-solid ${step.icon} text-4xl text-black transition-all duration-700 ease-out`}></i>
                    </div>
   
                  </div>


                  <div className="relative">
                    <h3 className={`font-bold text-xl mb-4 transition-all duration-700 ease-out ${
                      activeStep === idx ? 'text-[#036e8d]' : 'text-gray-800'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed transition-all duration-700 ease-out">
                      {step.desc}
                    </p>
                  </div>


                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-[#036e8d] transition-all duration-700 ease-out rounded-full ${
                        activeStep === idx ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <div className={`w-8 h-8 text-[#036e8d] transition-all duration-700 ease-out ${
                      activeStep >= idx ? 'opacity-100 translate-x-0' : 'opacity-50 -translate-x-2'
                    }`}>
                      <i className="fa-solid fa-arrow-right text-xl"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center space-x-4">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-700 ease-out ${
                  activeStep === idx 
                    ? 'bg-[#036e8d] scale-125' 
                    : 'bg-gray-300 hover:bg-[#d2a763]'
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(60px, 60px); }
          }
        `}</style>
      </section> */}

      {/* Signature Modules */}
      <section id="modules" className="pt-16 pb-0 bg-[#f9fcfd] font-comic">
        <div className="container mx-auto px-8 md:px-14 pt-14 pb-8 max-w-8xl flex flex-col items-center">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Signature <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Modules!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
            Foundations of Humanism, Life Skills, and Humanistic Leadership are exclusive to IIHH—designed to ignite empathy, ethical reasoning, and a global mindset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"> 
            {/* Card 1 */}
            <div
              id="course-card-1"
              className="flex flex-col shadow-xl justify-center rounded-2xl p-10 bg-yellow-200 transform hover:scale-105 duration-300 hover:shadow-none"
            >
              <i className="fa-solid fa-brain text-4xl text-[#ffffff] mb-4 self-center"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Foundations of Humanism</h3>
              <p className="text-gray-600 text-sm text-center">
                Build empathy, autonomy, and purpose—skills rarely taught elsewhere.
              </p>
            </div>

            {/* Card 2 */}
            <div
              id="course-card-2"
              className="flex flex-col shadow-xl justify-center rounded-2xl p-6 bg-orange-300 transform hover:scale-105 duration-300 hover:shadow-none"
            >
              <i className="fa-solid fa-toolbox text-4xl text-[#ffffff] mb-4 self-center"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Life Skills</h3>
              <p className="text-gray-600 text-sm text-center">
                Develop essential life skills to foster personal and social harmony.
              </p>
            </div>

            {/* Card 3 */}
            <div
              id="course-card-3"
              className="flex flex-col shadow-xl justify-center rounded-2xl p-6 bg-blue-200 transform hover:scale-105 duration-300 hover:shadow-none"
            >
              <i className="fa-solid fa-globe text-4xl text-[#ffffff] mb-4 self-center"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Humanistic Leadership</h3>
              <p className="text-gray-600 text-sm text-center">
                Inspire leadership with compassion, integrity, and community involvement.
              </p>
            </div>
          </div>
          <p className="text-center text-[#036e8d] font-medium text-base mt-10">
            These modules are exclusive to IIHH and cannot be learned anywhere else.
          </p>
        </div>
      </section>


      {/* Signature Activities */}
      <section id="activities" className="py-16 pb-32 bg-[#f9fcfd]">
        <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learning by <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Doing</span>, <br />Not Just <span className="text-[#d2a763] inline-block transform hover:scale-x-105 duration-300">Reading</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At IIHH, learning is hands-on and practical. Students engage in real-world projects, group challenges, and creative experiments—learning by doing, not just reading.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1.05}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                  <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="font-bold text-lg text-[#036e8d] mb-2">{activity.title}</h3>
                  <p className="text-gray-700 text-sm text-left">{activity.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-[#036e8d] relative py-20 pb-0">
        <img 
          src={cloudClose}           
          alt="Cloud decoration" 
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}} 
        /> 

        <div className="container mx-auto px-6 py-0 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What to <span className='text-[#ffd278] inline-block transform hover:scale-x-105 duration-300'>Expect</span>
            </h2>
            <p className="text-white text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Experience a week of interactive workshops, collaborative projects, reflection, and community engagement—making every day meaningful.
            </p>
          </div>

          {/* Professional Info Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Mentorship Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#036e8d]/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#d2a763] m-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-[#036e8d] mb-4">
                  Mentorship & Support
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every learner is paired with a mentor and supported by a caring community, ensuring guidance and encouragement throughout their journey.
                </p>
              </div>
            </div>

            {/* Target Audience Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#d2a763]/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#d2a763] m-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-2xl font-bold text-[#036e8d] mb-4">
                  Who Is It For?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  IIHH's program is currently for school students—the future of our country. Our priority is to nurture young minds with values and skills.
                </p>
              </div>
            </div>

            {/* Program Structure Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#036e8d]/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#d2a763] m-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h3 className="text-2xl font-bold text-[#036e8d] mb-4">
                  Program Structure
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Interactive workshops, collaborative projects, reflection sessions, and community engagement activities designed for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Impact Statement */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto text-center transform hover:scale-[1.01] transition-transform duration-300">
        {/* Icon Container */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#036e8d]/10 rounded-full mb-6 sm:mb-8 animate-pulse-slow">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#d2a763]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Header -->
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#036e8d] mb-4 sm:mb-6 tracking-tight">
          Shaping the Future Generation
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
          Our approach transforms not just academics but the mindset of young learners, fostering empathetic and ethical leaders for tomorrow.
        </p>

        {/* Quote Card */}
        <div className="bg-gradient-to-r from-[#036e8d]/5 to-[#d2a763]/5 rounded-xl p-4 sm:p-6 lg:p-8 border-l-4 border-[#036e8d] max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,110,141,0.1),transparent_70%)]"></div>
          <p className="text-[#036e8d] text-base sm:text-lg lg:text-xl font-semibold leading-relaxed relative z-10">
            IIHH's impact creates a ripple effect, empowering minds to transform communities and the world.
          </p>
        </div>
      </div>
    </div>

      </section>

      {/* Program Benefits */}
      <section id="program-benefits" className="pb-6 pt-12 bg-[#f9fcfd] relative overflow-hidden"> 
        <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-3">
          Program <span className="text-[#d2a763] inline-block transform hover:scale-x-105 duration-300">Benefits</span>
        </h2>
        <p className="text-lg text-center text-gray-900 max-w-2xl mx-auto leading-relaxed mb-16">
          IIHH’s program empowers you with more than knowledge—gain the resilience, well-being, and leadership skills to thrive in every aspect of life.
        </p>

        <div className="container mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col items-center">
          {/* Floating Card */}
          <div className="bg-[#036e8d]/80 rounded-3xl py-10 px-6 sm:px-12 shadow-lg max-w-4xl w-full relative mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center">
              {[
                { title: "Resilience", icon: "fa-shield-alt", description: "Navigate challenges with confidence" },
                { title: "Well-Being", icon: "fa-heart-pulse", description: "Balance mind, body, and emotions" },
                { title: "Ethical Leadership", icon: "fa-lightbulb", description: "Lead with compassion and integrity" },
                { title: "Global Citizenship", icon: "fa-globe", description: "Embrace diversity and make an impact" },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors duration-300 shadow-lg">
                    <i className={`fa-solid ${benefit.icon} text-2xl sm:text-3xl text-white`}></i>
                  </div>
                  <span className="text-white font-semibold text-base mb-1">
                    {benefit.title}
                  </span>
                  <span className="text-white/80 text-xs md:text-sm">
                    {benefit.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Still Curious? */}
      <section 
        id="faq" 
        className="py-20 bg-[#f9fcfd] relative bg-cover bg-center bg-no-repeat"
        style={
          {backgroundImage :`url(${howItWorksCta})`}
        }
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Curious?
          </h2>
          <p className="text-white/80 mb-4">
            We’re here to help you every step of the way.
          </p>
          <p className="text-white text-lg leading-relaxed mb-8">
            Have questions? Visit our <Link to="/faq" className="underline">FAQ</Link> or <Link to="/contact" className="underline">contact us</Link> for more information.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#d2a763] hover:text-[#036e8d] transition-all duration-300 group"
          >
            Apply Now
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}