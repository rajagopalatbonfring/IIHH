








// import React from 'react';
// import "../App.css";
// import { Link } from "react-router-dom";

// function HowItWorks() {
//   return (
//     <div className="min-h-screen bg-white">
//       <main className="pt-20 min-h-screen">
//       <section 
//       id="hero" 
//       className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center overflow-hidden"
//       style={{ backgroundImage: 'url(https://i.pinimg.com/736x/34/bc/39/34bc390c998681aac71ee47d64589c22.jpg)' }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-indigo-600/70 to-pink-500/60 z-0"></div>

//       {/* Content */}
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-3xl text-center mx-auto">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
//             How It Works – <span className="block md:inline">Transformative Humanistic Learning</span>
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
//             Discover a one-year journey that blends humanism, life skills, and personal growth for students, educators, and professionals.
//           </p>
//           <div className="flex justify-center">
//             <Link 
//               to="/programs" 
//               className="relative bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
//             >
//               <span className="relative z-10">Get Started</span>
//               <span className="absolute inset-0 bg-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
//         <a href="#intro" className="text-white">
//           <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
//         </a>
//       </div>

//       {/* Subtle Background Enhancement */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="w-48 h-48 bg-purple-400/20 rounded-full absolute top-10 left-10 animate-pulse"></div>
//         <div className="w-64 h-64 bg-indigo-400/20 rounded-full absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
//       </div>
//     </section>

//         {/* New Intro Section */}
//         <section id="intro" className="py-2 relative z-10 bg-white pb-16">
//           <div className="mx-auto px-6">
//             <div className="max-w-3xl mx-auto text-center my-8 py-12">
//               <h4 className="text-purple-600 font-semibold tracking-wider mb-4 uppercase">Our Approach</h4>
//               <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
//                 Your Journey to <br/> <span className="relative">
//               <span className="relative z-10 text-purple-600">Humanistic Core</span>
//               <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
//             </span>
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 At IIHH, we guide you through a transformative one-year program that integrates humanism, emotional intelligence, and practical skills, empowering you to become a resilient, ethical leader in a global society.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section id="process" className="bg-white">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Your Learning Journey with IIHH</h2>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div id="step-1" className="bg-blue-50 rounded-xl p-6 transform shadow-lg">
//                 <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
//                   <i className="fa-solid fa-user-plus text-2xl text-white"></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">Enroll</h3>
//                 <p className="text-gray-600">Easy registration for students, educators, or professionals to join our program.</p>
//               </div>
//               <div id="step-2" className="bg-purple-50 rounded-xl p-6 transform shadow-lg">
//                 <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
//                   <i className="fa-solid fa-list-check text-2xl text-white"></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">Explore Modules</h3>
//                 <p className="text-gray-600">Dive into our 10-module curriculum tailored for holistic growth.</p>
//               </div>
//               <div id="step-3" className="bg-green-50 rounded-xl p-6 transform shadow-lg">
//                 <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
//                   <i className="fa-solid fa-users-rectangle text-2xl text-white"></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">Engage Actively</h3>
//                 <p className="text-gray-600">Participate in interactive sessions and real-world activities.</p>
//               </div>
//               <div id="step-4" className="bg-orange-50 rounded-xl p-6 transform shadow-lg">
//                 <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
//                   <i className="fa-solid fa-chart-line text-2xl text-white"></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3">Thrive & Lead</h3>
//                 <p className="text-gray-600">Develop resilience, empathy, and leadership for life.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="activities" className="py-20 bg-gray-50">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Experience Our Humanistic Approach</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div id="activity-1" className="rounded-xl overflow-hidden shadow-lg">
//                 <img 
//                   className="w-full h-64 object-cover" 
//                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/82490b4b46-3069e169415faa93f34d.png" 
//                   alt="learners practicing mindfulness in a serene setting, candid photography" 
//                 />
//                 <div className="p-6 bg-white">
//                   <h3 className="text-xl font-bold mb-2">Mindfulness & Self-Awareness</h3>
//                   <p className="text-gray-600">Activities to foster emotional intelligence and resilience</p>
//                 </div>
//               </div>
//               <div id="activity-2" className="rounded-xl overflow-hidden shadow-lg">
//                 <img 
//                   className="w-full h-64 object-cover" 
//                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00bfa688de-7bcf72179a6e6a2ac002.png" 
//                   alt="participants collaborating on a community project, educational setting" 
//                 />
//                 <div className="p-6 bg-white">
//                   <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
//                   <p className="text-gray-600">Hands-on projects for social responsibility</p>
//                 </div>
//               </div>
//               <div id="activity-3" className="rounded-xl overflow-hidden shadow-lg">
//                 <img 
//                   className="w-full h-64 object-cover" 
//                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6b6dc7db20-3c48f33b601a491c7b69.png" 
//                   alt="group solving real-world problems in a workshop, colorful setting" 
//                 />
//                 <div className="p-6 bg-white">
//                   <h3 className="text-xl font-bold mb-2">Critical Thinking Workshops</h3>
//                   <p className="text-gray-600">Interactive challenges to boost problem-solving</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="benefits" className="py-20 bg-white">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Why IIHH Stands Out</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//               <div id="benefit-1" className="text-center">
//                 <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
//                   <i className="fa-solid fa-hands-holding text-3xl text-blue-500"></i>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">Holistic Development</h3>
//                 <p className="text-gray-600">Nurturing mental, emotional, and social well-being</p>
//               </div>
//               <div id="benefit-2" className="text-center">
//                 <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
//                   <i className="fa-solid fa-lightbulb text-3xl text-purple-500"></i>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">Ethical Leadership</h3>
//                 <p className="text-gray-600">Building compassionate and responsible leaders</p>
//               </div>
//               <div id="benefit-3" className="text-center">
//                 <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
//                   <i className="fa-solid fa-globe text-3xl text-green-500"></i>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">Global Perspective</h3>
//                 <p className="text-gray-600">Fostering cultural intelligence and inclusivity</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default HowItWorks;










import React, { useState, useEffect,} from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { ChevronRight } from 'lucide-react';
import cloudOpen from '../assets/Group 33.png';
import cloudClose from '../assets/closeCloud.png';

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
    <main className="min-h-screen pt-20 bg-[#f9fcfd] font-comic text-base-content">

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: 'url(./src/assets/Howitworks-heroimg.jpg)' }}
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
          style={{ fill: '#223668', width: '148%', height: 87, transform: 'rotate(180deg)' }}
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

      {/*Introduction Section */}
      <section id="introduction" className="pt-4 py-16 sm:py-20 md:pt-4 md:py-28 bg-[#223668] relative overflow-hidden">
        {/* Background Pattern - Similar to who-we-are section */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 left-16 w-24 h-24 border-2 border-[#036e8d]/20 rounded-full"></div>
          <div className="absolute top-60 right-24 w-32 h-32 border-2 border-[#d2a763]/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-[#036e8d]/15 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-[#d2a763]/10 rounded-full blur-xl"></div>
        </div>

        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Enhanced Heading with decorative elements */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-40 h-40 bg-gradient-to-r from-[#036e8d]/10 to-[#d2a763]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h4 className="text-white font-bold tracking-wider text-sm md:text-base uppercase mb-4">
                Our Philosophy
              </h4>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Redefining{' '}
                <span className='text-[#ffd278] relative inline-block transform hover:scale-105 transition-transform duration-300'>
                  Education
                </span>
                {' '}Through{' '}
                <br className="hidden sm:block" />
                <span className='text-[#ffd278] relative inline-block transform hover:scale-105 transition-transform duration-300'>
                  Our Approach
                </span>
              </h2>
              
              {/* Enhanced description with styling similar to the who-we-are section */}
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#036e8d] to-transparent rounded-full hidden lg:block"></div>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-medium relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/30">
                  <span className="text-[#036e8d] font-bold text-2xl">"</span>
                  IIHH redefines afterschool education by blending humanistic values, hands-on learning, and mentorship. We empower students to become compassionate, confident, and creative leaders ready to make a meaningful impact in our interconnected world.
                  <span className="text-[#036e8d] font-bold text-2xl">"</span>
                  
                  {/* Accent dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#036e8d] rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#d2a763] rounded-full"></div>
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16">
            {[
              {
                icon: "fa-heart",
                title: "Humanistic Values",
                description: "Fostering empathy, compassion, and understanding as the foundation of all learning",
                gradient: "from-rose-50 to-pink-50",
                iconBg: "bg-rose-100",
                iconColor: "text-rose-600"
              },
              {
                icon: "fa-hands",
                title: "Hands-On Learning",
                description: "Interactive experiences that make education tangible, memorable, and personally meaningful",
                gradient: "from-blue-50 to-cyan-50",
                iconBg: "bg-blue-100",
                iconColor: "text-[#036e8d]"
              },
              {
                icon: "fa-user-graduate",
                title: "Personal Mentorship",
                description: "One-on-one guidance that nurtures individual potential and builds confident leaders",
                gradient: "from-amber-50 to-orange-50",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-600"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                {/* Decorative background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#036e8d]/10 to-[#d2a763]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative bg-gradient-to-br ${feature.gradient} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50`}>
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fa-solid ${feature.icon} text-2xl ${feature.iconColor}`}></i>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-8 bg-gradient-to-b from-[#036e8d] to-transparent rounded-full opacity-30"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-gradient-to-r from-[#036e8d]/5 to-[#d2a763]/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <p className="text-white text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                Discover how our innovative approach transforms traditional afterschool programs into life-changing experiences.
              </p>
              
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                <button className="inline-flex items-center bg-[#036e8d] hover:bg-[#024a5c] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <i className="fa-solid fa-rocket mr-3"></i>
                  Explore Our Programs
                </button>
                
                <button className="inline-flex items-center border-2 border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#036e8d] font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg">
                  <i className="fa-solid fa-play mr-3"></i>
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Journey */}
      <section id="steps" className="py-24 relative min-h-screen flex items-center">
        <img src={cloudOpen} className="w-full absolute -top-14 p-0 m-0 z-0" alt="Cloud decoration" />
        <div className="container mx-auto px-8 md:px-14 relative z-10 max-w-7xl">
          {/* Header with Stagger Animation */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your <span className='text-[#d2a763] relative inline-block transform hover:scale-105 transition-transform duration-300'>IIHH</span> <span className='text-[#036e8d]'> Journey</span>
            </h2>
            <div className="inline-block mb-4">
              <span className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
                Your Journey Starts Here
              </span>
            </div>
          </div>

          {/* Modern Grid Layout */}
          <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
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
                  transform: activeStep === idx ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 z-20">
                  <div className={`w-12 h-12 rounded-full bg-[#d2a763] flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-700 ease-out ${
                    activeStep === idx ? 'scale-110 shadow-2xl' : ''
                  }`}>
                    {idx + 1}
                  </div>
                </div>

                {/* Main Card */}
                <div className={`relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:-translate-y-2 ${
                  activeStep === idx 
                    ? 'border-[#036e8d]/30 shadow-xl bg-white/90' 
                    : 'border-white/50 shadow-lg'
                }`}>
                  
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
                      activeStep === idx ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'
                    }`}>
                      <i className={`fa-solid ${step.icon} text-4xl text-black transition-all duration-700 ease-out`}></i>
                    </div>
   
                  </div>

                  {/* Content */}
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

                  {/* Progress Bar */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-[#036e8d] transition-all duration-700 ease-out rounded-full ${
                        activeStep === idx ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Connecting Arrow */}
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

          {/* Interactive Timeline */}
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

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(60px, 60px); }
          }
        `}</style>
      </section>

      {/* Signature Activities */}
      <section id="activities" className="py-16 bg-white">
        <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learning by <span className="text-[#036e8d]">Doing</span>, <br />Not Just <span className="text-[#d2a763]">Reading</span>
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

      {/* Signature Modules */}
      <section id="modules" className="py-16 bg-[#f9fcfd] font-comic">
        <div className="container mx-auto px-8 md:px-14 py-14 max-w-7xl flex flex-col items-center">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Signature <span className="text-[#036e8d]">Modules!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
            Foundations of Humanism, Life Skills, and Humanistic Leadership are exclusive to IIHH—designed to ignite empathy, ethical reasoning, and a global mindset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <div
              id="course-card-1"
              className="flex flex-col justify-center rounded-2xl p-10 bg-yellow-200 hover:shadow-lg transition-all duration-300"
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
              className="flex flex-col justify-center rounded-2xl p-6 bg-orange-300 hover:shadow-lg transition-all duration-300"
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
              className="flex flex-col justify-center rounded-2xl p-6 bg-blue-200 hover:shadow-lg transition-all duration-300"
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

      {/* Program Benefits */}
      <section id="program-benefits" className="pb-6 pt-4 bg-[#f9fcfd] relative overflow-hidden"> 
        <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-3">
          Program <span className="text-[#d2a763]">Benefits</span>
        </h2>
        <p className="text-lg text-center text-gray-900 max-w-2xl mx-auto leading-relaxed mb-16">
          IIHH’s program empowers you with more than knowledge—gain the resilience, well-being, and leadership skills to thrive in every aspect of life.
        </p>

        {/* Decorative Background Circles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#036e8d] rounded-full"></div>
          <div className="absolute bottom-16 right-24 w-24 h-24 border-2 border-[#d2a763] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#d2a763] rounded-full"></div>
        </div>

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


      <section className="bg-[#223668] relative py-20 pb-0">
        <img src={cloudClose} className="w-full absolute -top-12 left-0" alt="Cloud Decoration" /> 

        <div className="container mx-auto px-6 py-0 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What to <span className='text-[#d2a763]'>Expect</span>
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#d2a763] to-[#d2a763]/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#d2a763] to-[#d2a763]/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#d2a763] to-[#d2a763]/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
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
        <div className="container bg-[white] flex-col text-center py-10 px-10">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#036e8d] to-[#036e8d]/80 rounded-xl mx-auto">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-[#036e8d] mb-6">
            Shaping the Future Generation
          </h3>
          
          <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
            Our approach transforms not just academics, but the thought process of young learners—preparing them to shape the future as empathetic, ethical leaders.
          </p>
          
          <div className="bg-gradient-to-r from-[#036e8d]/10 to-[#d2a763]/10 rounded-lg p-6 border-l-4 border-[#036e8d]">
            <p className="text-[#036e8d] text-xl font-semibold leading-relaxed">
              The impact of IIHH creates a ripple effect, nurturing minds that will shape communities and the world.
            </p>
          </div>
        </div>

      </section>

      {/* FAQ / Still Curious? */}
      <section 
        id="faq" 
        className="py-20 bg-[#f9fcfd] relative bg-cover bg-center bg-no-repeat"
        style={
          {backgroundImage : `url('../src/assets/cta-howitworksPage.jpg')`}
        }
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Curious?
          </h2>
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