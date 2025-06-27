import React from 'react'

const programBenefit = () => {
  return (
    <>

      {/* Program Benefits */}
      <section id="program-benefits" className="pb-6 pt-12 bg-[#f9fcfd] relative overflow-hidden"> 
        <h2 className="text-black text-4xl md:text-5xl font-bold text-center mb-3">
          Program <span className="text-[#d2a763] inline-block transform hover:scale-x-105 duration-300">Benefits</span>
        </h2>
        <p className="text-lg text-center text-gray-900 max-w-2xl mx-auto leading-relaxed mb-16">
          IIHH’s program empowers you with more than knowledge—gain the resilience, well-being, and leadership skills to thrive in every aspect of life.
        </p>

        <div className="container mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col items-center">
          {/* Floating Card */}
          <div className="bg-[#036e8d]/80 rounded-3xl py-10 px-6 sm:px-12 shadow-lg max-w-4xl w-full relative mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center">
              {[
                { title: "Resilience", icon: "fa-shield-alt", description: "Navigate challenges with confidence" },
                { title: "Well-Being", icon: "fa-heart-pulse", description: "Balance mind, body, and emotions" },
                { title: "Ethical Leadership", icon: "fa-lightbulb", description: "Lead with compassion and integrity" },
                { title: "Global Citizenship", icon: "fa-globe", description: "Embrace diversity and make an impact" },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors duration-300 shadow-lg">
                    <i className={`fa-solid ${benefit.icon} text-2xl sm:text-3xl text-white`}></i>
                  </div>
                  <span className="text-white font-semibold text-base mb-1">
                    {benefit.title}
                  </span>
                  <span className="text-white/80 text-xs md:text-sm">
                    {benefit.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default programBenefit
