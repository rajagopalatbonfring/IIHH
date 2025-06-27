import React from 'react'

import cloudClose from '../../assets/closeCloud.png'
import boyThink from '../../assets/thinkingImg.png';
import { ChevronRight } from "lucide-react";

const whyChooseUs = () => {
  return (
    <>
    
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
      
    </>
  )
}

export default whyChooseUs
