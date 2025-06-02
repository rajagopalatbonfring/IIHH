








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










import React from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { ChevronRight } from 'lucide-react';
import cloudOpen from '../assets/Group 33.png';
import cloudClose from '../assets/closeCloud.png';

const steps = [
  {
    icon: "fa-user-plus",
    title: "Enroll",
    desc: "Join our vibrant community dedicated to humanistic growth.",
  },
  {
    icon: "fa-book-open-reader",
    title: "Explore Modules",
    desc: "Dive into transformative courses blending values, skills, and real-world application.",
  },
  {
    icon: "fa-people-group",
    title: "Engage Actively",
    desc: "Participate in workshops, group projects, and mentor-guided sessions.",
  },
  {
    icon: "fa-seedling",
    title: "Thrive & Lead",
    desc: "Apply learning to real life, build your portfolio, and lead with compassion.",
  },
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
      </section>

      {/*Introduction Section */}
      <section id="introduction" className="py-16 sm:py-20 md:py-28 bg-[#f9fcfd] relative overflow-hidden">
        {/* Background Pattern - Similar to who-we-are section */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-20 left-16 w-24 h-24 border-2 border-[#036e8d]/20 rounded-full"></div>
          <div className="absolute top-60 right-24 w-32 h-32 border-2 border-[#d2a763]/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-[#036e8d]/15 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-[#d2a763]/10 rounded-full blur-xl"></div>
        </div>

        {/* Cloud decoration */}
        <img src={cloudOpen} className="w-full absolute -top-12 p-0 m-0 z-0" alt="Cloud decoration" />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Enhanced Heading with decorative elements */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-40 h-40 bg-gradient-to-r from-[#036e8d]/10 to-[#d2a763]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h4 className="text-[#036e8d] font-bold tracking-wider text-sm md:text-base uppercase mb-4">
                Our Philosophy
              </h4>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Redefining{' '}
                <span className='text-[#036e8d] relative inline-block transform hover:scale-105 transition-transform duration-300'>
                  Education
                </span>
                {' '}Through{' '}
                <br className="hidden sm:block" />
                <span className='text-[#d2a763] relative inline-block transform hover:scale-105 transition-transform duration-300'>
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
              <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
                Discover how our innovative approach transforms traditional afterschool programs into life-changing experiences.
              </p>
              
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                <button className="inline-flex items-center bg-[#036e8d] hover:bg-[#024a5c] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <i className="fa-solid fa-rocket mr-3"></i>
                  Explore Our Programs
                </button>
                
                <button className="inline-flex items-center border-2 border-[#036e8d] text-[#036e8d] hover:bg-[#036e8d] hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg">
                  <i className="fa-solid fa-play mr-3"></i>
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Journey */}
      <section id="steps" className="py-20 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#036e8d] rounded-full"></div>
          <div className="absolute bottom-16 right-24 w-24 h-24 border-2 border-[#d2a763] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#036e8d] mb-12">
            Your IIHH Journey in 4 Steps
          </h2>
          <div className="relative flex flex-col items-center">
            {/* Vertical Timeline Line */}
            <div className="absolute w-1 bg-[#036e8d] h-[calc(100%-6rem)] top-16 left-1/2 transform -translate-x-1/2 z-0"></div>
            {steps.map((step, idx) => (
              <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1.05}>
                <div
                  className={`flex items-center w-full mb-12 ${
                    idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-fadeInUp`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Step Card */}
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'mr-auto transform -rotate-[10deg]' : 'ml-auto transform rotate-[10deg]'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-[#036e8d]/10 flex items-center justify-center rounded-full mb-4 mx-auto">
                        <i className={`fa-solid ${step.icon} text-3xl text-[#036e8d]`}></i>
                      </div>
                      <h3 className="font-bold text-lg text-[#036e8d] mb-2 text-center">{step.title}</h3>
                      <p className="text-gray-700 text-sm text-center">{step.desc}</p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-[#036e8d] rounded-full border-4 border-white z-10"></div>
                  </div>
                  {/* Spacer for alignment */}
                  <div className="w-5/12"></div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="expect" className="py-20 bg-white relative">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d2a763] mb-6">
            What to Expect
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Experience a week of interactive workshops, collaborative projects, reflection, and community engagement—making every day meaningful.
          </p>
        </div>
      </section>

      {/* Signature Modules */}
      <section id="modules" className="py-16 bg-gradient-to-r from-[#036e8d]/10 to-[#d2a763]/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#d2a763] mb-6">
            Our Signature Modules: Uniquely IIHH
          </h2>
          <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            Foundations of Humanism, Ethics for Tomorrow, and Visionary Citizenship are exclusive to IIHH—designed to ignite empathy, ethical reasoning, and a global mindset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#036e8d]/10 flex items-center justify-center rounded-full mb-4">
                <i className="fa-solid fa-brain text-3xl text-[#036e8d]"></i>
              </div>
              <h3 className="font-bold text-lg text-[#036e8d] mb-2">Foundations of Humanism</h3>
              <p className="text-gray-700 text-sm">
                Build empathy, autonomy, and purpose—skills rarely taught elsewhere.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#d2a763]/10 flex items-center justify-center rounded-full mb-4">
                <i className="fa-solid fa-toolbox text-3xl text-[#d2a763]"></i>
              </div>
              <h3 className="font-bold text-lg text-[#d2a763] mb-2">Life Skills</h3>
              <p className="text-gray-700 text-sm">
                Develop essential life skills to foster personal and social harmony.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#036e8d]/10 flex items-center justify-center rounded-full mb-4">
                <i className="fa-solid fa-globe text-3xl text-[#036e8d]"></i>
              </div>
              <h3 className="font-bold text-lg text-[#036e8d] mb-2">Humanistic Leadership</h3>
              <p className="text-gray-700 text-sm">
                Inspire leadership with compassion, integrity, and community involvement.
              </p>
            </div>
          </div>
          <p className="text-center text-[#036e8d] font-medium mt-10">
            These modules are exclusive to IIHH and cannot be learned anywhere else.
          </p>
        </div>
      </section>

      {/* Practical Learning */}
      <section id="practical" className="py-16 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#d2a763] mb-4">
            Learning by Doing, Not Just Reading
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At IIHH, learning is hands-on and practical. Students engage in real-world projects, group challenges, and creative experiments—learning by doing, not just reading.
          </p>
        </div>
      </section>

      {/* Signature Activities */}
      <section id="activities" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#036e8d] mb-6">
            Signature Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1.05}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                  <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="font-bold text-lg text-[#036e8d] mb-2">{activity.title}</h3>
                  <p className="text-gray-700 text-sm text-center">{activity.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship & Support */}
      <section id="mentorship" className="py-20 bg-[#f9fcfd] relative">
        <img src={cloudClose} className="w-full absolute -top-12 p-0 m-0" alt="Cloud decoration" />
        <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#036e8d] mb-6">
            Mentorship & Support
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every learner is paired with a mentor and supported by a caring community, ensuring guidance and encouragement.
          </p>
        </div>
      </section>

      {/* Generational Impact */}
      <section id="impact" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#036e8d] mb-4">
            Shaping the Future Generation
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our approach transforms not just academics, but the thought process of young learners—preparing them to shape the future as empathetic, ethical leaders.
          </p>
          <p className="text-[#d2a763] font-semibold">
            The impact of IIHH creates a ripple effect, nurturing minds that will shape communities and the world.
          </p>
        </div>
      </section>

      {/* Program Benefits */}
      <section id="program-benefits" className="pb-6 pt-4 bg-[#f9fcfd] relative overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#036e8d] rounded-full"></div>
          <div className="absolute bottom-16 right-24 w-24 h-24 border-2 border-[#d2a763] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#d2a763] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col items-center">
          {/* Floating Card */}
          <div className="bg-[#036e8d]/80 rounded-3xl py-10 px-6 sm:px-12 shadow-2xl max-w-4xl w-full relative mb-8">
            <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-3">
              Program <span className="text-[#ffd278]">Benefits</span>
            </h2>
            <p className="text-lg text-center text-white max-w-2xl mx-auto leading-relaxed mb-16">
              IIHH’s program empowers you with more than knowledge—gain the resilience, well-being, and leadership skills to thrive in every aspect of life.
            </p>
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

      {/* Who Is It For */}
      <section id="audience" className="py-20 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10 relative">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d2a763] mb-6">
            Who Is It For?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            IIHH’s program is currently for school students—the future of our country. Our priority is to nurture young minds with values and skills to lead tomorrow’s world.
          </p>
        </div>
      </section>

      {/* FAQ / Still Curious? */}
      <section id="faq" className="py-20 bg-[#f9fcfd] relative">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#036e8d] mb-6">
            Still Curious?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Have questions? Visit our <Link to="/faq" className="text-[#d2a763] hover:underline">FAQ</Link> or <Link to="/contact" className="text-[#d2a763] hover:underline">contact us</Link> for more information.
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