import React from 'react'
import { Link } from "react-router-dom";

import cloudOpen from '../../assets/Group 33.png'
import bgImage from '../../assets/boyForModulesCta.png';


const modules = [
{ id: 1, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
{ id: 2, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
{ id: 3, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
];


const whatWeOffer = () => {
  return (
    <>
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
      
    </>
  )
}

export default whatWeOffer
