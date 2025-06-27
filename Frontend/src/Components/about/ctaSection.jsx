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
              <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all">
                Enroll now
              </button>
              <button className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#036e8d] font-semibold py-4 px-12 rounded-full transition-all duration-300 text-base sm:text-lg">
                Newsletter Signup
              </button>
            </div>
          </div>
        </section>
    </>
  )
}

export default ctaSection
