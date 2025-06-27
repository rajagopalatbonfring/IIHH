import React from 'react'
import cloudClose from '../../assets/closeCloud.png';

const whatToExpect = () => {
  return (
    <>

      <section className="bg-[#036e8d] relative py-20 pb-0">
        <img 
          src={cloudClose}           
          alt="Cloud decoration" 
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}} 
        /> 

        <div className="container mx-auto px-6 py-0 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What to <span className='text-[#ffd278] inline-block transform hover:scale-x-105 duration-300'>Expect</span>
            </h2>
            <p className="text-white text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Experience a week of interactive workshops, collaborative projects, reflection, and community engagement—making every day meaningful.
            </p>
          </div>

          {/* Professional Info Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Mentorship Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#036e8d]/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#d2a763] m-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-[#036e8d] mb-4">
                  Mentorship & Support
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every learner is paired with a mentor and supported by a caring community, ensuring guidance and encouragement throughout their journey.
                </p>
              </div>
            </div>

            {/* Target Audience Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#d2a763]/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#d2a763] m-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-2xl font-bold text-[#036e8d] mb-4">
                  Who Is It For?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  IIHH's program is currently for school students—the future of our country. Our priority is to nurture young minds with values and skills.
                </p>
              </div>
            </div>

            {/* Program Structure Card */}
            <div className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#036e8d]/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 text-[#d2a763] m-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <h3 className="text-2xl font-bold text-[#036e8d] mb-4">
                  Program Structure
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Interactive workshops, collaborative projects, reflection sessions, and community engagement activities designed for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Impact Statement */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 max-w-5xl mx-auto text-center transform hover:scale-[1.01] transition-transform duration-300">
        {/* Icon Container */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#036e8d]/10 rounded-full mb-6 sm:mb-8 animate-pulse-slow">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#d2a763]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Header -->
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#036e8d] mb-4 sm:mb-6 tracking-tight">
          Shaping the Future Generation
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
          Our approach transforms not just academics but the mindset of young learners, fostering empathetic and ethical leaders for tomorrow.
        </p>

        {/* Quote Card */}
        <div className="bg-gradient-to-r from-[#036e8d]/5 to-[#d2a763]/5 rounded-xl p-4 sm:p-6 lg:p-8 border-l-4 border-[#036e8d] max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,110,141,0.1),transparent_70%)]"></div>
          <p className="text-[#036e8d] text-base sm:text-lg lg:text-xl font-semibold leading-relaxed relative z-10">
            IIHH's impact creates a ripple effect, empowering minds to transform communities and the world.
          </p>
        </div>
      </div>
    </div>

      </section>
      
    </>
  )
}

export default whatToExpect
