import React from 'react'

const programCta = () => {
  return (
    <>

        <section id="program-cta" className="min-w-1/2 px-4 pb-28 bg-[#f9fcfd] relative overflow-hidden">
          <div className="w-full text-center mt-12 py-16 bg-[#036e8d] rounded-full p-8 text-white shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Begin Your Transformation?</h3>
            <p className="text-sm md:text-base mb-6 text-white/90">
              Start your journey with IIHH and unlock your full potential through our transformative curriculum.
            </p>
            <div className="px-2 flex flex-col sm:flex-row gap-3 justify-center">
              {/* Download Curriculum Guide - Desktop */}
<button className="hidden sm:block bg-white text-[#036e8d] px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
  Download Curriculum Guide
  <i className="fa-solid fa-download ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
</button>

{/* Download Curriculum Guide - Mobile */}
<button className="block sm:hidden bg-white text-[#036e8d] px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
  Curriculum Guide
  <i className="fa-solid fa-download ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
</button>

{/* Join IIHH Button */}
<button className="bg-white text-[#036e8d] px-6 py-3 rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
  Join IIHH
  <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
</button>
            </div>
          </div>
        </section>
      
    </>
  )
}

export default programCta
