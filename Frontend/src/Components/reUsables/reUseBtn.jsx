import React from 'react';

const AnimatedButton = ({
  text = "See More",
  color = "text-[#036e8d]",
  hoverColor = "hover:text-white",
  bg = "bg-[#ffffff]",
  hoverBg = "hover:bg-[#025a75]",
  to = "/about",
  hoverAnimation = "hover:translate-x-1 transition-all",
  className = ""
}) => {
  const baseClasses = `inline-flex items-center justify-center font-bold px-6 py-4 rounded-full duration-300 shadow-lg group text-base`;
  
  const combinedClasses = `${baseClasses} ${bg} ${color} ${hoverBg} ${hoverColor} ${hoverAnimation} ${className}`;

  return (
    <a
      href={to}
      className={combinedClasses}
    >
      {text}
      <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};

export default AnimatedButton;