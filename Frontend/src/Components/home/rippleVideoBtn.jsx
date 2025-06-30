import React from 'react';

const RippleButton = () => {
  return (
    <div className="relative inline-block">
      {/* Continuous ripple animations */}
      <div className="absolute inset-0 rounded-full animate-ping bg-white/30"></div>
      <div className="absolute inset-0 rounded-full animate-pulse bg-white/20" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute inset-0 rounded-full animate-ping bg-white/20" style={{animationDelay: '1s'}}></div>
      
      {/* Main button */}
      <a
        href="#testimonials"
        className="relative bg-white/70 text-white px-5 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center z-10"
      >
        <i className="fa-solid fa-play text-[#036e8d]"></i>
      </a>
      
      {/* Custom ripple animation styles */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ripple {
          animation: ripple 2s infinite;
        }
        
        .animate-ripple-delayed {
          animation: ripple 2s infinite;
          animation-delay: 1s;
        }
        
        .animate-ripple-delayed-2 {
          animation: ripple 2s infinite;
          animation-delay: 2s;
        }
      `}</style>
      
      {/* Additional ripple layers with custom animation */}
      <div className="absolute inset-0 rounded-full bg-white/25 animate-ripple"></div>
      <div className="absolute inset-0 rounded-full bg-white/20 animate-ripple-delayed"></div>
      <div className="absolute inset-0 rounded-full bg-white/15 animate-ripple-delayed-2"></div>
    </div>
  );
};

export default RippleButton;