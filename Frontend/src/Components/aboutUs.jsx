// import React from 'react';
// import "../App.css";

// function AboutUs() {
//   return (
//     <main className="pt-20 relative min-h-screen">
//       {/* Enhanced abstract background with more animated balls */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
//         <div className="absolute w-full h-full opacity-20">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply animate-pulse"></div>
//           <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1s"}}></div>
//           <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2s"}}></div>
//           <div className="absolute top-1/5 right-1/6 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "0.5s"}}></div>
//           <div className="absolute bottom-1/4 left-1/8 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1.5s"}}></div>
//           <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-orange-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2.5s"}}></div>
//           <div className="absolute bottom-1/6 left-3/4 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "0.8s"}}></div>
//         </div>
//       </div>

//       {/* Enhanced Hero Section */}
//       <section 
//         id="hero" 
//         className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center overflow-hidden"
//         style={{ backgroundImage: 'url(src/assets/3d-portrait-people.png)' }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-indigo-600/70 to-pink-500/60 z-0"></div>

//         {/* Content */}
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl text-center mx-auto">
//             <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
//               About IIHH – <span className="block md:inline">Pioneering Humanistic Education</span>
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
//               We empower learners of all ages with a holistic education that integrates humanism, resilience, and global awareness.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-6">
//               <a 
//                 href="/programs" 
//                 className="relative bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
//               >
//                 <span className="relative z-10">Explore Our Programs</span>
//                 <span className="absolute inset-0 bg-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//               </a>
//               <a 
//                 href="#team" 
//                 className="bg-transparent border-2 border-white/90 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
//               >
//                 Meet Our Team
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
//           <a href="#who-we-are" className="text-white">
//             <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
//           </a>
//         </div>

//         {/* Subtle Background Enhancement */}
//         <div className="absolute inset-0 z-0 pointer-events-none">
//           <div className="w-48 h-48 bg-purple-400/20 rounded-full absolute top-10 left-10 animate-pulse"></div>
//           <div className="w-64 h-64 bg-indigo-400/20 rounded-full absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
//         </div>
//       </section>

//       <section id="who-we-are" className="py-20 relative z-10 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center mb-24">
//             <h4 className="text-purple-600 font-semibold tracking-wider mb-4 uppercase">About Us</h4>
//             <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
//               Who <span className="relative">
//                 <span className="relative z-10 text-purple-600">We Are</span>
//                 <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               The International Institute of Horizon Humanism (IIHH) is a trailblazing institution dedicated to blending humanistic principles with modern education, shaping compassionate, ethical leaders for a global society.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section id="why-we-started" className="bg-indigo-50 py-20 relative z-10">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2">
//               <img 
//                 className="rounded-2xl shadow-xl w-full max-w-md mx-auto md:max-w-none hover:shadow-2xl transition-shadow duration-300" 
//                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fc38e6bd97-7a54c23a7bb68887dbdd.png" 
//                 alt="IIHH community in action" 
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6">Our Vision & Mission</h2>
//               <p className="text-gray-600 text-lg mb-6">
//                 IIHH was founded to redefine education by prioritizing emotional intelligence, ethical reasoning, and social responsibility alongside academic rigor. We aim to create a transformative learning ecosystem for school students, college students, educators, and professionals.
//               </p>
//               <p className="text-gray-600 text-lg">
//                 Our mission is to cultivate resilient, empathetic individuals who lead with purpose and contribute positively to humanity's future.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="programs" className="py-20 px-8 relative z-10 bg-white">
//           <div className="container mx-auto px-2">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Educational Programs</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 { 
//                   title: "School Curriculum Integration", 
//                   description: "Humanistic principles integrated into K-12 education, developing emotional intelligence alongside academic excellence.", 
//                   icon: "fa-school", 
//                   gradient: "from-purple-400 to-indigo-600", 
//                   textColor: "text-purple-600", 
//                   bgColor: "bg-purple-100" 
//                 },
//                 { 
//                   title: "Professional Development", 
//                   description: "Workshops and certification programs for educators and professionals seeking to enhance their humanistic leadership skills.", 
//                   icon: "fa-briefcase", 
//                   gradient: "from-pink-400 to-purple-600", 
//                   textColor: "text-pink-600", 
//                   bgColor: "bg-pink-100" 
//                 },
//                 { 
//                   title: "Global Citizenship Program", 
//                   description: "Immersive experiences fostering cross-cultural understanding and global awareness for students of all ages.", 
//                   icon: "fa-globe", 
//                   gradient: "from-blue-400 to-cyan-600", 
//                   textColor: "text-blue-600", 
//                   bgColor: "bg-blue-100" 
//                 }
//               ].map((program, index) => (
//                 <div key={index} className="group relative">
//                   <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl`}></div>
//                   <div className="relative bg-white rounded-xl p-8 transform transition-all duration-300 h-full flex flex-col group-hover:translate-x-2 group-hover:-translate-y-2">
//                     <div className={`${program.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
//                       <i className={`fa-solid ${program.icon} text-2xl ${program.textColor}`}></i>
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{program.title}</h3>
//                     <p className="text-gray-600 text-center flex-grow">{program.description}</p>
//                     <div className="mt-6 text-center group-hover:opacity-100 transition-opacity duration-300 opacity-75">
//                       <a href="#" className={`${program.textColor} font-semibold hover:${program.textColor.replace('600', '800')} transition duration-300 flex items-center justify-center`}>
//                         Learn More <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//       </section>


//       <section id="team" className="py-20 relative z-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Leadership Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { name: "Dr. Anika Desai", role: "Founder & Director", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
//               { name: "Prof. Rajesh Kumar", role: "Curriculum Lead", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
//               { name: "Meera Patel", role: "Community Engagement Head", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" }
//             ].map((member, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-100" 
//                 />
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
//                 <p className="text-indigo-600 mb-3">{member.role}</p>
//                 <p className="text-gray-600">Committed to fostering humanistic education and personal growth.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="values" className="bg-indigo-50 py-20 relative z-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Guiding Principles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: "Empathy", icon: "fa-heart", desc: "Fostering understanding and connection in all interactions." },
//               { title: "Resilience", icon: "fa-shield-alt", desc: "Building strength to thrive through life's challenges." },
//               { title: "Inclusivity", icon: "fa-globe", desc: "Embracing diversity and global perspectives." },
//               { title: "Purpose", icon: "fa-compass", desc: "Guiding learners to find meaning and direction." }
//             ].map((value, index) => (
//               <div key={index} className="bg-white rounded-xl p-8 text-center">
//                 <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <i className={`fa-solid ${value.icon} text-2xl text-indigo-600`}></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
//                 <p className="text-gray-600">{value.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="cta" className="bg-purple-600/80  text-white py-16 relative z-10">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
//           <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
//             Become part of our growing network of educators, students, and professionals dedicated to humanistic principles.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
//               Join Our Programs
//             </button>
//             <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300">
//               Newsletter Signup
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default AboutUs;



import React from 'react';
import Lottie from "lottie-react";
import empathyAnimation from "../assets/lottie/empathyAnimation.json";
import resilienceAnimation from "../assets/lottie/resilienceAnimation.json";
import inclusivityAnimation from "../assets/lottie/inclusivityAnimation.json";
import purposeAnimation from "../assets/lottie/purposeAnimation.json";
import "../App.css";
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { ChevronRight, PhoneCall } from "lucide-react";
import cloudOpen from '../assets/Group 33.png';
import cloudClose from '../assets/closeCloud.png';

const modules = [
  { id: 1, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
  { id: 2, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
  { id: 3, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
  { id: 4, title: "Self-Awareness & Emotional Intelligence", subtitle: "Master your emotions", icon: "fa-brain", color: "indigo" },
  { id: 5, title: "Critical Thinking & Problem-Solving", subtitle: "Sharpen your mind", icon: "fa-lightbulb", color: "teal" },
  { id: 6, title: "Financial Literacy", subtitle: "Master your finances", icon: "fa-piggy-bank", color: "pink" },
  { id: 7, title: "Diversity, Culture & Ethics", subtitle: "Embrace inclusivity", icon: "fa-globe", color: "cyan" },
]; 

function AboutUs() {
  return (
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-center overflow-hidden flex items-center bg-[#223668]"
          // style={{ backgroundImage: 'url(src/assets/3d-portrait-people.png)' }}
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#ffd278] mb-6 leading-tight tracking-tight drop-shadow-lg">
                About IIHH – <span className="block md:inline">Pioneering Humanistic Education</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                We empower learners of all ages with a holistic education that integrates humanism, resilience, and global awareness.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  to="/programs"
                  className="relative bg-white text-[#036e8d] px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
                >
                  <span className="relative z-10">Explore Our Programs</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
            <a href="#who-we-are" className="text-white">
              <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
            </a>
          </div>
          <svg
              className='absolute bottom-0'
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: '#ffffff', width: '148%', height: 87, transform: 'rotate(180deg)' }}
            >
              <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
            />
              <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                opacity=".5"
              />
              <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
        </section>


        {/* Unveiling Our Identity, Vision and Values Section */}
        <section id="who-we-are" className="py-12 sm:py-16 md:py-24 bg-[#d2a763]/90">
          <div className="container mx-auto px-4 sm:px-8 md:px-14">
            {/* Heading and Subheading */}
            <div className="text-center mb-8 sm:mb-12 md:mb-40">
              <h4 className="text-[#ffffff] font-semibold tracking-wider text-xs sm:text-sm md:text-base uppercase mb-2 sm:mb-3">
                About Us
              </h4>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Unveiling Our <span className='text-[#036e8d]'>Identity</span>, <span className='text-[#036e8d]'>Vision</span> and <span className='text-[#036e8d]'>Values</span>.
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
                The International Institute of Horizon Humanism (IIHH) is a trailblazing institution dedicated to blending humanistic principles with modern education, shaping compassionate, ethical leaders for a global society.
              </p>
            </div>

            {/* Vision and Mission Section */}
            <div className="relative grid grid-cols-1 px-4 sm:px-8 md:px-16 py-12 sm:py-24 md:pt-36 border rounded-lg md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16 bg-white">
              {/* Values Section */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full sm:w-full px-4 sm:px-0">
                <div className="bg-[#036e8d] rounded-2xl py-4 sm:py-6 px-3 sm:px-4 md:px-8 grid grid-cols-4 gap-y-4 gap-x-4 sm:gap-x-6 lg:gap-y-2 lg:gap-x-8 items-center w-full sm:w-auto">
                  {[
                    { title: "Empathy", icon: "fa-heart", gridAreaMobile: "1 / 1 / 2 / 2", gridArea: "1 / 1 / 2 / 2" },
                    { title: "Purpose", icon: "fa-compass", gridAreaMobile: "1 / 2 / 2 / 3", gridArea: "1 / 4 / 2 / 5" },
                    { title: "Resilience", icon: "fa-shield-alt", gridAreaMobile: "1 / 3 / 2 / 4", gridArea: "2 / 2 / 3 / 3" },
                    { title: "Inclusivity", icon: "fa-globe", gridAreaMobile: "1 / 4 / 2 / 5", gridArea: "2 / 3 / 3 / 4" },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center [grid-area:var(--grid-area-mobile)] lg:[grid-area:var(--grid-area)]"
                    >
                      <i className={`fa-solid ${value.icon} text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3`}></i>
                      <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                        {value.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-3 sm:mb-4 w-full">
                  <i className="fa-solid fa-eye text-xl sm:text-2xl md:text-3xl text-[#036e8d] mr-2 sm:mr-3"></i>
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800">Vision</h3>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-lg leading-relaxed">
                  At IIHH, our vision is to redefine education by placing emotional intelligence, ethical reasoning, and social responsibility at the heart of learning—alongside academic excellence. We strive to create a transformative educational ecosystem that empowers school students, college students, educators, and professionals to become compassionate, responsible, and forward-thinking global citizens.professionals.
                </p>
              </div>

              {/* Vertical Separation Line */}
              <div className="hidden md:block absolute top-36 bottom-36 left-1/2 transform -translate-x-1/2 w-px bg-blue-400"></div>

              {/* Mission */}
              <div className="flex flex-col items-center md:items-start md:text-left">
                <div className="flex items-center mb-3 sm:mb-4 w-full">
                  <i className="fa-solid fa-bullseye text-xl sm:text-2xl md:text-3xl text-[#036e8d] mr-2 sm:mr-3"></i>
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800">Mission</h3>
                </div>
                <p className="md:text-left text-gray-600 text-xs sm:text-sm md:text-lg leading-relaxed">
                  Our mission is to nurture the next generation with the values, skills, and perspectives needed to thrive in a rapidly changing world. Through our afterschool program, rooted in the principles of humanism, inclusivity, and holistic personal development, we equip learners to lead meaningful, impactful lives beyond the classroom.</p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="text-center">
              <Link
                to="/programs"
                className="inline-flex items-center bg-[#036e8d] hover:bg-[#d2a763] text-white font-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full transition duration-300 text-sm sm:text-base"
              >
                See More
                <svg className="ml-1 sm:ml-2 w-3 sm:w-4 h-3 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>


        {/* Programs Section */}
        <section id="programs" className="py-12 relative bg-[#f9fcfd]">
          <img src={cloudOpen} className="w-100 absolute -top-16 p-0 m-0" />
          <div className="container mx-auto px-8 md:px-14 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Our Signature <span className='text-[#036e8d]'>Afterschool </span>Program</h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              IIHH’s flagship one-year afterschool program is designed to empower students with essential life skills, values, and perspectives that go beyond the standard school curriculum.The program is structured into 10 transformative modules, each focusing on a crucial aspect of personal and humanistic development.
            </p>
            <div className="overflow-hidden bg-white/40 backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl relative grid grid-cols-1 px-4 sm:px-8 md:px-16 py-12 sm:py-24 md:py-16 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  id="course-card-1"
                  className={`relative flex flex-col items-center justify-center gap-1 md:items-start text-center md:text-left bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl hover:shadow-lg transition-all ${
                    index % 2 === 1 && "md:-translate-y-4"
                  } ${index < modules.length - 1 ? "border-b border-gray-200 md:border-b-0" : ""}`}
                >
                  <span className="absolute top-5 right-5 text-gray-600 font-bold text-2xl"> {module.id} </span>
                  <i className={`fa-solid ${module.icon} text-xl sm:text-2xl md:text-3xl text-${module.color}-600 mr-2 sm:mr-3`}></i>
                  <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {module.subtitle}
                  </p>
                </div>
              ))}

              <div className='absolute bottom-0 right-0 z-10 w-60'>
                  <div className="absolute bottom-0 right-0 z-20 w-60 h-100">
                    <img
                      src="../src/assets/ctaboy.png"
                      alt="Cropped Example"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <Link
                    to="/programs"
                    className="absolute bottom-5 right-10 z-20 inline-flex items-center bg-[#ffffff] text-[#036e8d] hover:bg-[#d2a763]/90 font-bold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full transition duration-300 text-sm sm:text-base"
                  >
                    More details
                    <svg className="ml-1 sm:ml-2 w-3 sm:w-4 h-3 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>

                  <div
                    className="w-0 h-0 z-10 absolute bottom-0 right-0"
                    style={{
                      borderStyle: "solid",
                      borderWidth: "0 0 300px 300px",
                      borderColor: "transparent transparent #036e8d transparent"
                    }}
                  ></div>
              </div>
            </div>

            <div className="container py-14">
              <div className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-8 p-10">
                  {/* Left Section - Heading and Description */}
                  <div className="lg:w-1/3 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                      Our Featured <br /> <span className='text-[#036e8d]'>Modules!</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Discover the tools and skills you need to excel, grow, and thrive.
                    </p>
                  </div>

                  {/* Right Section - Cards */}
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div
                      id="course-card-1"
                      className="flex flex-col justify-center rounded-2xl p-6 bg-yellow-200 hover:shadow-lg transition-all"
                    >
                      <i className="fa-solid fa-seedling text-4xl text-green-500 mb-4"></i>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Foundations of Humanism</h3>
                      <p className="text-gray-600 text-sm">
                        Discover values of empathy, autonomy, and purpose.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div
                      id="course-card-2"
                      className="flex flex-col justify-center rounded-2xl p-6 bg-orange-300 hover:shadow-lg transition-all"
                    >
                      <i className="fa-solid fa-toolbox text-4xl text-blue-500 mb-4"></i>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Life Skills</h3>
                      <p className="text-gray-600 text-sm">
                        Master practical skills for personal and social success.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div
                      id="course-card-3"
                      className="flex flex-col justify-center rounded-2xl p-6 bg-blue-200 hover:shadow-lg transition-all"
                    >
                      <i className="fa-solid fa-users text-4xl text-orange-500 mb-4"></i>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Humanistic Leadership</h3>
                      <p className="text-gray-600 text-sm">
                        Inspire with compassion and integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="text-center mt-8">
              <Link
                to="/programs"
                className="inline-flex items-center bg-[#036e8d] hover:bg-[#d2a763] text-white font-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full transition duration-300 text-sm sm:text-base"
              >
                Learn More About the Program
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 relative bg-[#4e99af]/90">
          <img src={cloudClose} className="w-100 absolute -top-12 p-0 m-0" />
          <div className="container mx-auto px-8 md:px-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Anika Desai", role: "Founder & Director", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
                { name: "Prof. Rajesh Kumar", role: "Curriculum Lead", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
                { name: "Meera Patel", role: "Community Engagement Head", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" }
              ].map((member, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  transitionSpeed={400}
                  scale={1.05}
                  glareEnable={false}
                  perspective={1000}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#d2a763]"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-[#036e8d] mb-3">{member.role}</p>
                    <p className="text-gray-600">Committed to fostering humanistic education and personal growth.</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-16 bg-[#d2a763]">
          <div className="container mx-auto px-8 md:px-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to Join Our Community?</h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              Become part of our growing network of educators, students, and professionals dedicated to humanistic principles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all">
                Join Our Programs
              </button>
              <button className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all">
                Newsletter Signup
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;