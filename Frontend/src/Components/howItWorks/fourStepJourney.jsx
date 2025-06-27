import React, { useState, useEffect,} from 'react';


const steps = [
  {
    title: "Discover",
    desc: "Explore our innovative healthcare solutions tailored to your needs",
    icon: "fa-magnifying-glass",
    color: "from-[#036e8d] to-[#025a73]"
  },
  {
    title: "Connect", 
    desc: "Join our community of healthcare professionals and patients",
    icon: "fa-handshake",
    color: "from-[#d2a763] to-[#b8914d]"
  },
  {
    title: "Transform",
    desc: "Experience personalized care that adapts to your journey",
    icon: "fa-rocket",
    color: "from-[#036e8d] to-[#d2a763]"
  },
  {
    title: "Thrive",
    desc: "Achieve optimal health outcomes with our continued support",
    icon: "fa-star",
    color: "from-[#d2a763] to-[#036e8d]"
  }
];

const fourStepJourney = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>

          <section id="steps" className="relative h-auto flex items-center">
        <div className="container mx-auto px-8 md:px-12 relative z-10 max-w-8xl">
          {/* Header with Stagger Animation */}
          <div className={`text-center mt-16 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your <span className='text-[#d2a763] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>IIHH</span> <span className='text-[#036e8d] inline-block transform hover:scale-x-105 transition-transform duration-300'> Journey</span>
            </h2>
            <div className="inline-block mb-4">
              <span className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
                Your Journey Starts Here
              </span>
            </div>
          </div>

          {/* Modern Grid Layout */}
          <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#036e8d]/30 to-transparent hidden lg:block"></div>
            
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${idx * 200}ms`,
                  transform: activeStep === idx ? 'scale(1.03)' : 'scale(1)'
                }}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 z-20">
                  <div className={`w-10 h-10 rounded-full bg-[#d2a763] flex items-center justify-center text-white font-bold text-base shadow-lg transition-all duration-700 ease-out ${
                    activeStep === idx ? 'scale-110 shadow-2xl' : ''
                  }`}>
                    {idx + 1}
                  </div>
                </div>

                {/* Main Card */}
                <div className={`relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:-translate-y-1.5 ${
                  activeStep === idx 
                    ? 'border-[#036e8d]/30 shadow-xl bg-white/90' 
                    : 'border-white/50 shadow-lg'
                }`}>
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
                      activeStep === idx ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'
                    }`}>
                      <i className={`fa-solid ${step.icon} text-3xl text-black transition-all duration-700 ease-out`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className={`font-bold text-lg mb-3 transition-all duration-700 ease-out ${
                      activeStep === idx ? 'text-[#036e8d]' : 'text-gray-800'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed transition-all duration-700 ease-out">
                      {step.desc}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-[#036e8d] transition-all duration-700 ease-out rounded-full ${
                        activeStep === idx ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Connecting Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <div className={`w-6 h-6 text-[#036e8d] transition-all duration-700 ease-out ${
                      activeStep >= idx ? 'opacity-100 translate-x-0' : 'opacity-50 -translate-x-2'
                    }`}>
                      <i className="fa-solid fa-arrow-right text-lg"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Timeline */}
          <div className="mt-12 flex justify-center space-x-3">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ease-out ${
                  activeStep === idx 
                    ? 'bg-[#036e8d] scale-125' 
                    : 'bg-gray-300 hover:bg-[#d2a763]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Custom Styles */}
        <style>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </section>
      
    </>
  )
}

export default fourStepJourney
