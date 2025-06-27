import React, { useState, useEffect } from 'react';

const JourneySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Define precise positioning for each card based on SVG path coordinates
  const cardPositions = [
    { 
      // Position 1: SVG coordinate (200, 180)
      desktop: { left: '20%', top: '15%' },
      tablet: { left: '15%', top: '18%' },
      mobile: { left: '10%', top: '20%' }
    },
    { 
      // Position 2: SVG coordinate (700, 240)
      desktop: { right: '20%', top: '30%' },
      tablet: { right: '15%', top: '35%' },
      mobile: { right: '10%', top: '40%' }
    },
    { 
      // Position 3: SVG coordinate (200, 480)
      desktop: { left: '20%', top: '60%' },
      tablet: { left: '15%', top: '65%' },
      mobile: { left: '10%', top: '70%' }
    },
    { 
      // Position 4: SVG coordinate (700, 720)
      desktop: { right: '20%', top: '85%' },
      tablet: { right: '15%', top: '90%' },
      mobile: { right: '10%', top: '95%' }
    }
  ];

  return (
    <section id="steps" className="relative h-auto flex items-center py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Header with Stagger Animation */}
        <div className={`text-center mt-16 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your <span className='text-[#d2a763] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>IIHH</span> <span className='text-[#036e8d] inline-block transform hover:scale-x-105 transition-transform duration-300'> Journey</span>
          </h2>
          <div className="inline-block mb-4">
            <span className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
              Your Journey Starts Here
            </span>
          </div>
        </div>

        {/* Journey Container with Fixed Height for Positioning */}
        <div className="relative max-w-7xl mx-auto h-[1000px] md:h-[1200px] lg:h-[1400px]">
          {/* SVG Curved Path Background */}
          <div className="absolute inset-0 z-0">
            <svg 
              className="w-full h-full pointer-events-none overflow-visible" 
              viewBox="0 0 1200 1600" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#036e8d" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#d2a763" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#036e8d" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Expanded S-Curve Path */}
              <path
                d="M150 200 
                   Q600 250 1050 350
                   Q1150 450 950 600
                   Q750 750 150 850
                   Q50 950 250 1100
                   Q450 1250 1050 1350"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="15,10"
                filter="url(#glow)"
                className="animate-pulse"
              />
              
              {/* Connection Points - Larger and More Visible */}
              <circle cx="150" cy="200" r="12" fill="#036e8d" opacity="0.9"/>
              <circle cx="1050" cy="350" r="12" fill="#d2a763" opacity="0.9"/>
              <circle cx="150" cy="850" r="12" fill="#036e8d" opacity="0.9"/>
              <circle cx="1050" cy="1350" r="12" fill="#d2a763" opacity="0.9"/>
              
              {/* Animated Flow Indicator */}
              <circle r="8" fill="#036e8d" opacity="0.8">
                <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                  <path d="M150 200 Q600 250 1050 350 Q1150 450 950 600 Q750 750 150 850 Q50 950 250 1100 Q450 1250 1050 1350"/>
                </animateMotion>
              </circle>
            </svg>
          </div>

          {/* Absolutely Positioned Cards */}
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`absolute z-20 w-72 md:w-80 lg:w-84 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${
                activeStep === idx ? 'scale-105 z-30' : 'scale-100'
              }`}
              style={{ 
                transitionDelay: `${idx * 200}ms`,
                // Responsive positioning
                ...cardPositions[idx].mobile,
                '@media (min-width: 768px)': cardPositions[idx].tablet,
                '@media (min-width: 1024px)': cardPositions[idx].desktop,
                // Desktop positioning
                ...(window.innerWidth >= 1024 ? cardPositions[idx].desktop : 
                    window.innerWidth >= 768 ? cardPositions[idx].tablet : 
                    cardPositions[idx].mobile)
              }}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(-1)}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 z-30">
                <div className={`w-12 h-12 rounded-full bg-[#d2a763] flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-700 ease-out ${
                  activeStep === idx ? 'scale-110 shadow-2xl' : ''
                }`}>
                  {idx + 1}
                </div>
              </div>

              {/* Main Card */}
              <div className={`relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 border transition-all duration-700 ease-out hover:shadow-2xl hover:-translate-y-2 ${
                activeStep === idx 
                  ? 'border-[#036e8d]/40 shadow-2xl bg-white/95 ring-2 ring-[#036e8d]/20' 
                  : 'border-white/60 shadow-xl hover:border-[#d2a763]/30'
              }`}>
                {/* Connection Line to Path Point */}
                <div className={`absolute w-1 h-8 bg-gradient-to-b from-[#036e8d] to-transparent ${
                  idx % 2 === 0 ? '-bottom-8 left-1/2 transform -translate-x-1/2' : '-top-8 left-1/2 transform -translate-x-1/2'
                } opacity-60`}></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-br from-[#036e8d]/10 to-[#d2a763]/10 flex items-center justify-center transition-all duration-700 ease-out ${
                    activeStep === idx ? 'rotate-12 scale-110' : 'hover:rotate-6 hover:scale-105'
                  }`}>
                    <i className={`fa-solid ${step.icon} text-2xl md:text-4xl transition-all duration-700 ease-out ${
                      activeStep === idx ? 'text-[#036e8d]' : 'text-gray-700'
                    }`}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`font-bold text-lg md:text-xl mb-3 md:mb-4 transition-all duration-700 ease-out ${
                    activeStep === idx ? 'text-[#036e8d]' : 'text-gray-800'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-all duration-700 ease-out">
                    {step.desc}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-4 md:mt-6 flex justify-center">
                  <div className="flex space-x-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-700 ease-out ${
                          i <= idx 
                            ? 'bg-[#036e8d] scale-110' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-[#d2a763] rounded-full transition-all duration-700 ease-out ${
                  activeStep === idx ? 'scale-150 opacity-100' : 'scale-100 opacity-60'
                }`}></div>
                <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-[#036e8d] rounded-full transition-all duration-700 ease-out ${
                  activeStep === idx ? 'scale-125 opacity-100' : 'scale-100 opacity-40'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="mt-8 flex justify-center space-x-3">
          {steps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
              className={`w-3 h-3 rounded-full transition-all duration-700 ease-out ${
                activeStep === idx 
                  ? 'bg-[#036e8d] scale-125' 
                  : 'bg-gray-300 hover:bg-[#d2a763]'
              }`}
            />
          ))}
        </div>

        {/* Responsive Styles */}
        <style>{`
          @media (min-width: 768px) {
            .card-position-1 {
              left: 15% !important;
              top: 18% !important;
            }
            .card-position-2 {
              right: 15% !important;
              top: 35% !important;
            }
            .card-position-3 {
              left: 15% !important;
              top: 65% !important;
            }
            .card-position-4 {
              right: 15% !important;
              top: 90% !important;
            }
          }
          
          @media (min-width: 1024px) {
            .card-position-1 {
              left: 20% !important;
              top: 15% !important;
            }
            .card-position-2 {
              right: 20% !important;
              top: 30% !important;
            }
            .card-position-3 {
              left: 20% !important;
              top: 60% !important;
            }
            .card-position-4 {
              right: 20% !important;
              top: 85% !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default JourneySection;