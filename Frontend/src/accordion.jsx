import React, { useState, useEffect } from 'react';

const EnhancedIIHHLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const timer = setTimeout(() => setIsVisible(true), 200);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const floatingCards = [
    { icon: "🧠", label: "Critical Thinking", pos: "top-8 left-8", delay: "0s", color: "#036e8d" },
    { icon: "🎨", label: "Creative Arts", pos: "top-12 right-12", delay: "1s", color: "#d2a763" },
    { icon: "🔬", label: "STEM Labs", pos: "bottom-16 left-16", delay: "2s", color: "#036e8d" },
    { icon: "📚", label: "Literature", pos: "bottom-8 right-8", delay: "3s", color: "#d2a763" },
    { icon: "🌍", label: "Global Awareness", pos: "top-1/2 left-4", delay: "4s", color: "#036e8d" },
    { icon: "💡", label: "Innovation", pos: "top-1/3 right-4", delay: "5s", color: "#d2a763" }
  ];

  const features = [
    { icon: "👥", title: "Peer Learning", desc: "Grow together, learn together" },
    { icon: "🎯", title: "Mentorship", desc: "Personal guidance" },
    { icon: "🧪", title: "Experimentation", desc: "Hands-on discovery" },
    { icon: "🌱", title: "Values in Action", desc: "Live humanism daily" }
  ];

  return (
    <section className="min-h-screen bg-[#d2a763] relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Cursor Following Glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(3,110,141,0.15) 0%, rgba(3,110,141,0.05) 30%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-20">
        {/* Enhanced Morphing Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-black relative">
              {/* Layered text effects */}
              <span className="absolute inset-0 text-[#036e8d] animate-pulse">
                IIHH
              </span>
              <span className="absolute inset-0 text-transparent bg-gradient-to-br from-[#036e8d] via-[#d2a763] to-[#036e8d] bg-clip-text animate-pulse"
                    style={{ animationDelay: '0.5s' }}>
                IIHH
              </span>
              <span className="text-white/30 relative z-10">IIHH</span>
              
              {/* Floating letters effect */}
              <div className="absolute inset-0 opacity-20">
                {['I', 'I', 'H', 'H'].map((letter, i) => (
                  <span 
                    key={i}
                    className="absolute text-white/40 animate-bounce"
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${-10 + Math.sin(i) * 5}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '3s'
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light text-white mt-8 tracking-wide">
            Where <span className="font-bold text-[#036e8d] relative">
              <span className="absolute inset-0 bg-white/20 blur-sm animate-pulse"></span>
              <span className="relative">Humanity</span>
            </span> Inspires <span className="font-bold text-[#036e8d] relative">
              <span className="absolute inset-0 bg-white/20 blur-sm animate-pulse"></span>
              <span className="relative">Learning</span>
            </span>
          </h2>
          
          {/* Subtitle animation */}
          <div className="mt-4 text-white/80 text-lg animate-pulse">
            Transforming minds • Shaping futures • Building character
          </div>
        </div>

        {/* Enhanced Liquid Shape Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Enhanced Morphing Visual */}
            <div className="relative h-96 lg:h-[600px]">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#036e8d]/20 via-transparent to-[#d2a763]/20 rounded-full animate-pulse"></div>
              
              {/* Main Enhanced Blob Shape */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="enhancedBlobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#036e8d" stopOpacity="0.9" />
                      <stop offset="30%" stopColor="#d2a763" stopOpacity="0.7" />
                      <stop offset="60%" stopColor="#036e8d" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#d2a763" stopOpacity="0.9" />
                    </linearGradient>
                    <filter id="enhancedGlow">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="ripple">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feOffset dx="2" dy="2" result="offsetBlur"/>
                      <feMerge>
                        <feMergeNode in="offsetBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Multiple morphing shapes for depth */}
                  <path
                    d="M200,60 C280,60 340,140 340,200 C340,280 260,340 200,340 C140,340 60,280 60,200 C60,120 120,60 200,60 Z"
                    fill="url(#enhancedBlobGradient)"
                    filter="url(#enhancedGlow)"
                    opacity="0.6"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 200 200;360 200 200"
                      dur="15s"
                      repeatCount="indefinite"
                    />
                  </path>
                  
                  <path
                    d="M200,80 C260,80 320,140 320,200 C320,260 260,320 200,320 C140,320 80,260 80,200 C80,140 140,80 200,80 Z"
                    fill="url(#enhancedBlobGradient)"
                    filter="url(#ripple)"
                    opacity="0.4"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="360 200 200;0 200 200"
                      dur="12s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>

              {/* Enhanced Floating Knowledge Cards */}
              <div className="absolute inset-0">
                {floatingCards.map((card, i) => (
                  <div
                    key={i}
                    className={`absolute ${card.pos} transform hover:scale-125 transition-all duration-500 cursor-pointer group`}
                    style={{ 
                      animation: `float 4s ease-in-out infinite`, 
                      animationDelay: card.delay 
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#036e8d]/30 min-w-28 text-center group-hover:bg-[#036e8d] group-hover:text-white transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#d2a763]/40">
                      <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                        {card.icon}
                      </div>
                      <div className="text-xs font-semibold whitespace-nowrap text-[#036e8d] group-hover:text-white">
                        {card.label}
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ 
                             background: `radial-gradient(circle at center, ${card.color}20 0%, transparent 70%)`,
                             transform: 'scale(1.5)'
                           }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced DNA Helix Animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#d2a763" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Multiple helix strands */}
                  {[0, 1, 2].map((strand) => (
                    <path
                      key={strand}
                      d="M20,10 Q50,30 80,10 M20,30 Q50,10 80,30 M20,50 Q50,70 80,50 M20,70 Q50,50 80,70 M20,90 Q50,110 80,90"
                      stroke="url(#helixGradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity={0.8 - strand * 0.2}
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 50 50;360 50 50"
                        dur={`${8 + strand * 2}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  ))}
                </svg>
              </div>

              {/* Orbital elements */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: `${80 + i * 40}px 0px`,
                      animation: `orbit ${5 + i * 2}s linear infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right: Enhanced Content */}
            <div className="space-y-8">
              {/* Enhanced Philosophy Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-[#036e8d]/30 shadow-2xl hover:shadow-[#d2a763]/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#d2a763] to-[#036e8d] rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <span className="text-white text-2xl">👁️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#036e8d]">Our Vision</h3>
                </div>
                <p className="text-[#036e8d]/90 text-lg leading-relaxed">
                  At IIHH, we believe education should spark curiosity and character. Our program blends real-world modules, hands-on activities, and mentorship—empowering students to grow as thinkers, collaborators, and ethical leaders.
                </p>
                
                {/* Animated underline */}
                <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-[#036e8d] via-[#d2a763] to-[#036e8d] opacity-30 animate-pulse"></div>
              </div>

              {/* Enhanced Interactive Features Grid */}
              <div className="flex flex-wrap justify-center gap-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-white/95 backdrop-blur-sm rounded-xl w-36 h-36 flex flex-col items-center justify-center text-center p-4 border border-[#036e8d]/30 shadow-lg hover:bg-[#d2a763] hover:shadow-xl hover:shadow-[#036e8d]/30 transition-all duration-300 cursor-pointer group"
                    style={{ 
                      animation: `popIn 0.6s ease-out forwards`,
                      animationDelay: `${i * 0.15}s`,
                      opacity: 0
                    }}
                  >
                    <div className="relative -top-5 w-10 h-10 bg-gradient-to-br from-[#d2a763] to-[#036e8d] rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#036e8d]/40 group-hover:-top-6 transition-all duration-300">
                      <span className="text-white text-lg">{feature.icon}</span>
                    </div>
                    <h4 className="text-[#036e8d] font-bold text-sm group-hover:text-white mt-2 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-[#036e8d]/70 text-xs group-hover:text-white/90 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="relative">
                <button className="w-full bg-white/95 backdrop-blur-sm text-[#036e8d] font-bold py-6 px-8 rounded-full text-xl shadow-2xl transform hover:scale-105 hover:bg-[#036e8d] hover:text-white transition-all duration-300 relative overflow-hidden group border border-[#036e8d]/20">
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="text-2xl mr-3 group-hover:animate-bounce">🚀</span>
                    Start Your IIHH Journey
                  </span>
                  
                  {/* Enhanced Holographic Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d2a763]/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#036e8d]/20 to-[#d2a763]/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </button>
                
                {/* Enhanced Floating Action Indicators */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d2a763] rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#036e8d] rounded-full animate-pulse"></div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          50% { transform: translateY(-4px) rotate(-0.5deg); }
          75% { transform: translateY(-12px) rotate(0.5deg); }
        }
        
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0px); }
        }
        
        @keyframes orbit {
          from { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          to { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default EnhancedIIHHLanding;