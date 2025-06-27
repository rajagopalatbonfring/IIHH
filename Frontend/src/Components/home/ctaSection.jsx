import React from 'react'

import homeCta from '../../assets/freepik__adjust__81086.png';

const ctaSection = () => {
  return (
    <>
        <section className="w-full overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row">
            {/* Left side - Yellow background with text and form */}
            <div className="bg-yellow-300 md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
              <h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Better Future for Your Kids</h2>
              <p className="text-center md:text-left text-gray-800 lg:text-xl mb-6">Embark on a humanistic journey that empowers learners of all ages. Start your transformation today.</p>
              <div className="flex flex-col sm:flex-row align-center justify-center md:justify-start gap-6">
                <button className="sm:text-xl bg-white text-[#036e8d] px-12 py-4 rounded-full font-semibold transform hover:scale-105 hover:shadow-lg transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
            
            {/* Right side */}
            <div className="relative bg-yellow-300 md:w-full flex items-center justify-center">
                <img  className="flex items-end w-full h-full object-cover object-fit" src={homeCta} alt="ctaimg" />
            </div>
          </div>
        </section>
    </>
  )
}

export default ctaSection
