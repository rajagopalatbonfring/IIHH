import React from 'react'

import programCta from '../../assets/cta-aboutus.jpg';

const ctaSecion = () => {
  return (
    <>

            <section
              id="cta"
              className="relative py-16 bg-[#d2a763] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${programCta})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-0" />
    
              {/* Content */}
              <div className="relative z-10 container mx-auto px-8 md:px-14 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Join IIHH – Shape the Future</h2>
                <p className="text-xl mb-12 max-w-2xl mx-auto">
                  Embark on a humanistic journey that empowers learners of all ages. Start your transformation today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all">
                    Join Our Programs
                  </button>
                  <button className="text-center border-2 border-white text-white hover:bg-white hover:text-[#036e8d] font-semibold py-4 px-12 rounded-full transition-all duration-300 text-base sm:text-lg">
                    Newsletter Signup
                  </button>
                </div>
              </div>
            </section>
      
    </>
  )
}

export default ctaSecion
