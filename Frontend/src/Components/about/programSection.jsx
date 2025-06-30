import React from 'react'
import { Link } from "react-router-dom";

import cloudOpen from '../../assets/Group 33.png';
import aboutProgramCtaImg from '../../assets/ctaboy.png';

import AnimatedButton from '../reUsables/reUseBtn';


const modules = [
  { id: 1, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
  { id: 2, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
  { id: 3, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
  { id: 4, title: "Self-Awareness & Emotional Intelligence", subtitle: "Master your emotions", icon: "fa-brain", color: "indigo" },
  { id: 5, title: "Critical Thinking & Problem-Solving", subtitle: "Sharpen your mind", icon: "fa-lightbulb", color: "teal" },
  { id: 6, title: "Financial Literacy", subtitle: "Master your finances", icon: "fa-piggy-bank", color: "pink" },
  { id: 7, title: "Diversity, Culture & Ethics", subtitle: "Embrace inclusivity", icon: "fa-globe", color: "cyan" },
]; 

const programSection = () => {
  return (
    <>

      {/* Programs Section */}
      <section id="programs" className="py-12 relative bg-[#f9fcfd]">
        <img 
          src={cloudOpen}
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}}
        />
        <div className="container mx-auto px-8 md:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">Our <span className='text-[#d2a763] inline-block transform hover:scale-x-105 duration-300'>Signature</span> <span className='text-[#036e8d] inline-block transform hover:scale-x-105 duration-300'>Afterschool</span> Program</h2>
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
                src={aboutProgramCtaImg}
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
                    src={aboutProgramCtaImg}
                    alt="Cropped Example"
                    className="object-cover w-full h-full"
                  />
                </div>

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
                    Our Featured <br /> <span className='text-[#036e8d] inline-block transform hover:scale-x-105 duration-300'>Modules!</span>
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
                    className="flex flex-col justify-center rounded-2xl p-6 bg-yellow-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
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
                    className="flex flex-col justify-center rounded-2xl p-6 bg-orange-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
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
                    className="flex flex-col justify-center rounded-2xl p-6 bg-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
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
          <div className="text-center mt-2">
            <AnimatedButton className="block sm:hidden" to="/programs" text="Learn More" bg="bg-[#036e8d]" color="text-white" hoverBg="hover:bg-[#d2a763]" hoverAnimation="hover:-translate-y-1" />
            <AnimatedButton className="hidden sm:inline-flex" to="/programs" text="Learn More About the Program" bg="bg-[#036e8d]" color="text-white" hoverBg="hover:bg-[#d2a763]" hoverAnimation="hover:-translate-y-1" />
          </div>

        </div>
      </section>
      

    </>
  )
}

export default programSection
