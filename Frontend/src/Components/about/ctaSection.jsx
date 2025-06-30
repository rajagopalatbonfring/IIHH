import React from 'react'

import aboutcta from '../../assets/programs-pg-cta-last.jpg';

const ctaSection = () => {
  return (
    <>
        <section
          id="cta"
          className="relative py-16 bg-[#d2a763] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage:`url(${aboutcta})` }}
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
              <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                Enroll now
              </button>
              <button 
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-white hover:text-[#d2a763] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
              >
                Newsletter Signup
              </button>
            </div>
          </div>
        </section>
    </>
  )
}

export default ctaSection
