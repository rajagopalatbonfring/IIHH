import React from 'react'

import ctaImgContact3 from '../../assets/contactCtaImgNew3.jpg';

const ctaSection = () => {
  return (
    <>
          {/* CTA Section Img*/}
      <section className="relative overflow-hidden">
        <div className="flex min-h-[480px] md:min-h-[400px]">

          {/* Right Image Section with Centered Buttons */}
          <div className="w-full relative overflow-hidden">
            
            {/* Background Image */}
            <div className="absolute inset-0">
              <div className="h-full">
                <img
                  src={ctaImgContact3}
                  alt="IIHH Journey - Inspiring transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Overlay for button visibility */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[black]/10 via-transparent to-black/30"></div>
            
            {/* Centered Buttons */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center space-y-6 px-6">
                
                {/* Optional overlay text */}
                <div className="mb-8">
                  <h3 className="text-white text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    Ready to Transform Education?
                  </h3>
                  <p className="text-white/90 text-xl drop-shadow-md">
                    Join our community today
                  </p>
                </div>
                
                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="group bg-[#036e8d] text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide hover:bg-[#ffd278] hover:text-[#223668] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                    aria-label="Join IIHH community"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Join IIHH
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  
                  <button 
                    className="group border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg tracking-wide hover:bg-white hover:text-[#d2a763] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                    aria-label="Download IIHH program guide"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Program Guide
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Edge gradient for seamless blending */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#d2a763]/20"></div>
          </div>

        </div>
      </section>
    
    </>
  )
}

export default ctaSection
