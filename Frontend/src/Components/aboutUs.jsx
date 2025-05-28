import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
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
          style={{ backgroundImage: 'url(../src/assets/hero-sec-aboutus.jpg)' }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#223668]/40 z-0" />
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

        {/* Unveiling Our Identity, Vision and Values Section */}
        <section id="who-we-are" className="py-12 sm:py-16 md:py-24 bg-[#d2a763] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 md:px-14 relative z-10">
            {/* Enhanced Heading Section with Image */}
            <div className="text-center mb-32 sm:mb-16 md:mb-48">
              <h4 className="text-[#ffffff] mb-14 font-bold tracking-wider text-sm md:text-base uppercase">
                About Us
              </h4>
              <div className="flex flex-col mb-48 lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8 sm:mb-48">
                {/* Left side - Image */}
                <div className="flex-shrink-0 order-2 lg:order-1">
                  <div className="relative group">
                    {/* Decorative Elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#036e8d]/20 to-[#d2a763]/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-white/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
                    
                    <img 
                      src="../src/assets/aboutusintroImg.jpg" 
                      alt="Students collaborating and learning together"
                      className="relative w-80 h-60 lg:w-96 lg:h-72 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-3xl border-4 border-white/20"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#036e8d] to-[#024a5c] rounded-full flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                      <i className="fa-solid fa-graduation-cap text-3xl text-white"></i>
                    </div>
                    
                    {/* Accent Lines */}
                    <div className="absolute top-4 left-4 w-8 h-1 bg-white/60 rounded-full"></div>
                    <div className="absolute top-7 left-4 w-12 h-1 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="text-center lg:text-left flex-1 order-1 lg:order-2 relative">
                  {/* Decorative Background Elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute top-1/2 -left-12 w-2 h-24 bg-gradient-to-b from-[#036e8d] to-transparent rounded-full hidden lg:block"></div>              
                  <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 md:text-left mb-8 leading-tight">
                      Unveiling Our{' '}
                      <br />
                      <span className='text-[#036e8d] relative inline-block transform hover:scale-105 transition-transform duration-300'>
                        Identity
                      </span>
                      ,{' '}
                      <span className='text-[#036e8d] relative inline-block transform hover:scale-105 transition-transform duration-300'>
                        Vision
                      </span>
                      {' '}and{' '}
                      <span className='text-[#036e8d] relative inline-block transform hover:scale-105 transition-transform duration-300'>
                        Values
                      </span>
                      .
                    </h1>
                    
                    <div className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#ffffff] to-transparent rounded-full hidden lg:block"></div>
                      <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                        <span className="text-[#036e8d] font-bold text-2xl">"</span>
                        The International Institute of Horizon Humanism (IIHH) is a trailblazing institution dedicated to blending humanistic principles with modern education, shaping compassionate, ethical leaders for a global society.
                        <span className="text-[#036e8d] font-bold text-2xl">"</span>
                        
                        {/* Accent dots */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#036e8d] rounded-full"></div>
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#d2a763] rounded-full"></div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Vision and Mission Section */}
            <div className="relative grid grid-cols-1 px-6 pt-32 sm:px-8 md:px-16 py-16 sm:py-24 sm:pt-36 md:pt-40 border rounded-3xl md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-8 md:mb-10 bg-white shadow-2xl backdrop-blur-sm">
              
              {/* Enhanced Values Section - Floating Card */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center w-full px-4 sm:px-0 md:px-24">
                <div className="bg-gradient-to-r from-[#036e8d] to-[#024a5c] rounded-3xl py-6 sm:py-8 px-4 sm:px-6 shadow-2xl">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-6">Our Core Values</h3>
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
                          <i className={`fa-solid ${value.icon} text-2xl sm:text-3xl text-white`}></i>
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
                  <div className="w-12 h-12 bg-[#036e8d]/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-eye text-2xl text-[#036e8d]"></i>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
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
                  <div className="w-12 h-12 bg-[#036e8d]/10 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-bullseye text-2xl text-[#036e8d]"></i>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
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
            </div>

            {/* Enhanced Call to Action */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">           
                {/* <p className="text-white/80 text-sm mt-4 max-w-md mx-auto">
                  Join thousands of students and educators who are already part of our transformative community.
                </p> */}
                <button className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#036e8d] font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg">
                  <i className="fa-solid fa-play mr-3"></i>
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-12 relative bg-[#f9fcfd]">
          <img src={cloudOpen} className="w-100 absolute -top-16 p-0 m-0" />
          <div className="container mx-auto px-8 md:px-14 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Our <span className='text-[#d2a763]'>Signature</span> <span className='text-[#036e8d]'>Afterschool </span>Program</h2>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
              IIHH’s flagship one-year afterschool program is designed to empower students with essential life skills, values, and perspectives that go beyond the standard school curriculum.The program is structured into 10 transformative modules, each focusing on a crucial aspect of personal and humanistic development.
            </p>
            <div className="overflow-hidden bg-white/40 backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl relative grid grid-cols-1 px-4 pb-[380px] 
            sm:px-8 md:px-4 py-12 sm:py-24 md:py-16 md:grid-cols-3 gap-8 lg:grid-cols-4 gap-8 sm:grid-cols-2 gap-8 md:gap-12">
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

              <div 
                className='sm:hidden absolute bottom-0 right-0 left-0 bg-[#036e8d]'
                style={{width:'100%', height:'19.5%'}}
              >
                <img
                  src="../src/assets/ctaboy.png"
                  alt="Cropped Example"
                  className="absolute -bottom-10 right-0 object-cover"
                  style={{height:'260px'}}
                />

                <div className="text-left px-8 pt-8">
                  <h3 className="text-xl font-bold text-black mb-2">To Learn More About Programs</h3>
                  <p className="text-white text-left text-sm mb-4 max-w-xs">
                    Discover how our afterschool program can empower you with essential life skills!
                  </p>
                  <Link
                    to="/programs"
                    className="text-left inline-flex items-center justify-center bg-[#036e8d] text-white font-medium py-2 rounded-full hover:translate-x-1 transition duration-300 text-sm"
                  >
                    More Details
                    <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>


              </div>

              <div className='hidden sm:block absolute bottom-0 right-0 z-10 w-60'>
                  <div className="absolute bottom-0 right-0 z-20 w-60 h-100">
                    <img
                      src="../src/assets/ctaboy.png"
                      alt="Cropped Example"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <Link
                    to="/programs"
                    className="absolute bottom-5 right-10 z-20 group inline-flex items-center bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#036e8d] font-semibold py-2 px-6 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2"
                  >
                    More details
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                className="group inline-flex items-center bg-[#036e8d] hover:bg-[#d2a763] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More About the Program
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 relative bg-[#223668]/90">
          <img src={cloudClose} className="w-100 absolute -top-12 p-0 m-0" />
          <div className="container mx-auto px-8 md:px-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Our Leadership <span className='text-[#ffd278]'>Team</span></h2>
            <p className="text-white/80 text-center text-xs sm:text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mt-8 mb-16">
                Meet the passionate educators and visionaries who guide IIHH’s mission. Our leadership team brings together diverse expertise and a shared commitment to nurturing holistic, humanistic education for every learner.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Dr. Anika Desai", role: "Founder & Director", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
                { name: "Meera Patel", role: "Community Engagement Head", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
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

        <section id="trust-ventures" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-8 md:px-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              Our Trust & Ventures
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
              IIHH is governed by the <strong>Horizon Humanism Educational Trust</strong>, a registered non-profit dedicated to advancing education and humanistic values. Our CEO, Mr. Ravi Kumar, also leads innovative ventures in technology and academic publishing, expanding our impact in the education sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trust Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                <div className="mb-4">
                  <i className="fa-solid fa-handshake-angle text-4xl text-[#036e8d]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Horizon Humanism Educational Trust</h3>
                <p className="text-gray-600 mb-4">
                  The registered trust behind IIHH, committed to non-profit service, transparent governance, and the advancement of holistic education.<br/>
                  <span className="text-xs text-gray-500">Registered under Indian Trusts Act, 1882</span>
                </p>
                {/* Optional: Add a link to trust's official site or documents */}
              </div>
              {/* Bonfring Technology Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                <div className="mb-4">
                  <img src="https://dummyimage.com/80x80/036e8d/fff&text=BT" alt="Bonfring Technology" className="rounded-full mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bonfring Technology</h3>
                <p className="text-gray-600 mb-4">
                  An IT solutions company led by our CEO, specializing in digital transformation and innovative technology for education and businesses.
                </p>
                <a
                  href="https://www.bonfring.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#036e8d] font-medium underline"
                >
                  Visit Bonfring Technology
                </a>
              </div>
              {/* Bonfring Publications Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                <div className="mb-4">
                  <img src="https://dummyimage.com/80x80/d2a763/fff&text=BP" alt="Bonfring Publications" className="rounded-full mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bonfring Publications</h3>
                <p className="text-gray-600 mb-4">
                  Our own publishing house, offering academic and professional publishing services, including paper publication and editorial support.
                </p>
                <a
                  href="https://www.bonfring.org/publications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#036e8d] font-medium underline"
                >
                  Explore Bonfring Publications
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="relative py-16 bg-[#d2a763] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(../src/assets/cta-aboutus.jpg)" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-8 md:px-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join Our Community?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Become part of our growing network of educators, students, and professionals dedicated to humanistic principles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all">
                Join Our Programs
              </button>
              <button className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#036e8d] font-semibold py-4 px-12 rounded-full transition-all duration-300 text-base sm:text-lg">
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