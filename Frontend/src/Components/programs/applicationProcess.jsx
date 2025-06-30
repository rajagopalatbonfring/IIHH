import React, { useState } from "react";

import programAppBoyImg from "../../assets/programpageImg1.png";
import graduateCap from '../../assets/academicLogoProgrampg.png';

import AnimatedButton from "../reUsables/reUseBtn";

const steps = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Complete the online form with your details.",
    icon: "fa-file-alt"
  },
  {
    step: "02",
    title: "Interview Process",
    desc: "Attend an interview with our admissions team.",
    icon: "fa-comments"
  },
  {
    step: "03",
    title: "Application Review",
    desc: "Your application will be reviewed within 2-3 weeks.",
    icon: "fa-search"
  },
  {
    step: "04",
    title: "Final Enrollment",
    desc: "Confirm acceptance and start your journey!",
    icon: "fa-check-circle"
  }
];

const applicationProcess = () => {


    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    // Handle mouse movement
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 15,
        y: (e.clientY - rect.top - rect.height / 2) / 15,
      });
    };
  
    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };



  return (
    <>
            {/* Application Process Section */}
            <section id="application-process" className="py-16 bg-[#f9fcfd]">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  {/* Header */}
                  <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                      Get amazing education in 4<br />
                      <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">simple steps</span>
                    </h2>
                    <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto px-4">
                      Join our transformative program through our streamlined application process.
                    </p>
                  </div>
    
                  {/* Main Content */}
                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/2 order-1 p-6">
                    <div
                      className="relative w-full max-w-lg mx-auto"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Floating Wrapper */}
                      <div
                        className="relative w-full aspect-square rounded-2xl border border-white/30 backdrop-blur-md"
                        style={{
                          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        {/* Large Main Image */}
                        <div className="w-full h-full rounded-full bg-white overflow-hidden border-[1.5px] bg-gradient-to-r from-[#036e8d] to-[#036e8d]">
                          <img
                            src={programAppBoyImg}
                            alt="Main Image"
                            className="w-full h-full object-cover mt-4"
                            style={{
                              animation: "gentleFloat 3s ease-in-out infinite",
                            }}
                          />
                        </div>
    
                      </div>
    
                      {/* Overlay Small Image */}
                      <div className="absolute top-12 -right-8 z-10 w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white group">
                        <img
                          src={graduateCap}
                          alt="Overlay Image"
                          className="w-full h-full mt-1 p-2 object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{
                            animation: "gentleFloat 5s ease-in-out infinite 1s",
                          }}
                        />
                      </div>
    
                      {/* Floating Animation Keyframes */}
                      <style>{`
                        @keyframes gentleFloat {
                          0%,
                          100% {
                            transform: translateY(0);
                          }
                          50% {
                            transform: translateY(-8px);
                          }
                        }
                      `}</style>
                    </div>
                    </div>
    
    
                    {/* Right Side - Steps */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                      {/* Connecting Line - Only show on larger screens and stop before last step */}
                      <div className="absolute left-7 top-8 h-[calc(82%-2rem)] w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 hidden lg:block"></div>
                      
                      <div className="space-y-6 lg:space-y-8">
                        {steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-4 lg:gap-6 relative group">
                            {/* Step Number Circle */}
                            <div className="group relative w-14 h-14 flex items-center justify-center">
                              <div className="absolute shadow-xl inset-0 rounded-full border-4 border-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300"></div>
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 group-hover:scale-110 transition-transform duration-300">
                                {step.step}
                              </div>
                            </div>
    
                            {/* Step Content */}
                            <div className="flex-1 bg-white rounded-xl p-4 lg:p-6 shadow-xl border border-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
                              <div className="flex items-start gap-3 lg:gap-4">
                                <div className="bg-[#036e8d]/10 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                  <i className={`fa-solid ${step.icon} text-lg lg:text-xl text-[#036e8d]`}></i>
                                </div>
                                <div>
                                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">
                                    Step {step.step.replace('0', '')}: {step.title}
                                  </h3>
                                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{step.desc}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
    
                  {/* CTA Button */}
                  <div className="text-center mt-12 lg:mt-16">
                    <AnimatedButton to="/contact" text="Start Your Application" bg="bg-[#036e8d]" color="text-white" hoverBg="hover:bg-[#d2a763]" hoverAnimation="hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </section>
      
    </>
  )
}

export default applicationProcess
