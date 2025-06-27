// import '../../App.css';
// import logo from '../../assets/IIHH-Logo-1-removebg-preview.png';
// import React, { useState, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Lottie from "lottie-react";
// import hamburgerAnimation from "../../assets/lottie/Hamburger menu.json";

// const Nav = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   const [isOpen, setIsOpen] = useState(false);
//   const lottieRef = useRef();

//   const toggleMenu = () => {
//     setIsOpen((prev) => {
//       if (prev) {
//         // Cross → Hamburger
//         lottieRef.current.playSegments([20, 0], true); 
//       } else {
//         // Hamburger → Cross
//         lottieRef.current.playSegments([0, 20], true); 
//       }
//       return !prev;
//     });
//   };

//   return (
//     <nav
//       id="header"
//       className="fixed w-full bg-[#ffffff] shadow-lg z-50 px-4 py-3 transition-all duration-500 border-b-2 border-gradient-teal-gold"
//     >
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-3">
//             <img src={logo} alt="logo" className="w-60 h-auto" />
//           </div>

//           {/* Navigation Links (Desktop) */}
//           <div className="hidden lg:flex items-center space-x-10">
//             {[
//               { path: "/", label: "Home" },
//               { path: "/about", label: "About" },
//               { path: "/programs", label: "Programs" },
//               { path: "/how-it-works", label: "How It Works" },
//               { path: "/contact", label: "Contact" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className={`text-lg font-comic font-semibold transition-all duration-500 ${
//                   isActive(item.path)
//                     ? "text-[#036e8d] border-b-2 border-[#d2a763]"
//                     : "text-[#036e8d] hover:text-[#d2a763] hover:border-b-2 hover:border-[#d2a763]"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link
//               to="/join"
//               className="bg-[#d2a763] text-[#ffffff] px-6 py-2 rounded-full font-bubblegum text-lg font-semibold hover:bg-[#036e8d] transition-all duration-500 hover:shadow-lg"
//             >
//               Join Us
//             </Link>
//           </div>

//           {/* Hamburger Menu (Mobile) */}
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden text-[#036e8d] focus:outline-none p-2 rounded-md hover:bg-[#d2a763]/20 transition-colors duration-500"
//           >
//             <div className="w-10 h-10">
//               <Lottie
//                 lottieRef={lottieRef}
//                 animationData={hamburgerAnimation}
//                 loop={false}
//                 autoplay={false}
//               />
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden bg-[#ffffff] shadow-lg absolute w-full left-0 top-full transition-all duration-500 ease-in-out ${
//             isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
//           }`}
//         >
//           {[
//             { path: "/", label: "Home" },
//             { path: "/about", label: "About" },
//             { path: "/programs", label: "Programs" },
//             { path: "/how-it-works", label: "How It Works" },
//             // { path: "/testimonials", label: "Testimonials" },
//             { path: "/contact", label: "Contact" },
//           ].map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               onClick={toggleMenu}
//               className={`block py-4 px-6 text-lg font-comic font-semibold transition-all duration-500 ${
//                 isActive(item.path)
//                   ? "text-[#036e8d] bg-[#d2a763]/10"
//                   : "text-[#036e8d] hover:text-[#d2a763] hover:bg-[#d2a763]/10"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <div className="px-6 py-4">
//             <Link
//               to="/join"
//               onClick={toggleMenu}
//               className="block text-center bg-[#d2a763] text-[#ffffff] px-6 py-3 rounded-full font-bubblegum text-lg font-semibold hover:bg-[#036e8d] transition-all duration-500"
//             >
//               Join Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


import '../../App.css';
import logo from '../../assets/IIHH-Logo-1-removebg-preview.png';
import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import hamburgerAnimation from "../../assets/lottie/Hamburger menu.json";

const Nav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isOpen, setIsOpen] = useState(false);
  const lottieRef = useRef();

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (prev) {
        // Cross → Hamburger
        lottieRef.current.playSegments([20, 0], true); 
      } else {
        // Hamburger → Cross
        lottieRef.current.playSegments([0, 20], true); 
      }
      return !prev;
    });
  };

  return (
    <nav
      id="header"
      className="fixed w-full bg-[#ffffff] shadow-lg z-50 px-4 py-3 transition-all duration-500 border-b-2 border-gradient-teal-gold"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="logo" className="w-60 h-auto" />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center xl:space-x-10 lg:space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/programs", label: "Programs" },
              { path: "/how-it-works", label: "How It Works" },
              { path: "/contact", label: "Contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`xl:text-lg lg:text-base font-comic font-semibold transition-all duration-300 relative group whitespace-nowrap ${
                  isActive(item.path)
                    ? "text-[#036e8d]"
                    : "text-[#036e8d] hover:text-[#d2a763]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#d2a763] transition-transform duration-300 ease-out origin-left ${
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } w-full`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & Hamburger Section */}
          <div className="flex items-center xl:space-x-6 lg:space-x-4">
            {/* Contact Section (Desktop) */}
            <div className="hidden xl:flex items-center space-x-4">
              {/* Phone Number */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#d2a763] rounded-full flex items-center justify-center">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-600 font-comic whitespace-nowrap">Call for Questions</span>
                  <a 
                    href="tel:+19035550106" 
                    className="text-[#036e8d] font-comic font-bold text-sm hover:text-[#d2a763] transition-colors duration-300 whitespace-nowrap"
                  >
                    (903) 555-0106
                  </a>
                </div>
              </div>
              
              {/* Get in Touch Button */}
              <Link
                to="/contact"
                className="bg-[#d2a763] text-white px-4 py-2 rounded-3xl font-comic font-semibold text-sm hover:bg-[#036e8d] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </div>

            {/* Compact Contact for lg screens (1024-1279px) */}
            <div className="hidden lg:flex xl:hidden items-center space-x-3">
              <a 
                href="tel:+19035550106" 
                className="flex items-center space-x-2 text-[#036e8d] hover:text-[#d2a763] transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-[#036e8d] rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-comic font-bold text-sm whitespace-nowrap">(903) 555-0106</span>
              </a>
              
              <Link
                to="/contact"
                className="bg-[#d2a763] text-white px-3 py-2 rounded-md font-comic font-semibold text-xs hover:bg-[#036e8d] transition-all duration-300 whitespace-nowrap"
              >
                Contact
              </Link>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-[#036e8d] focus:outline-none p-2 rounded-md hover:bg-[#d2a763]/20 transition-colors duration-500"
            >
              <div className="w-10 h-10">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={hamburgerAnimation}
                  loop={false}
                  autoplay={false}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#ffffff] shadow-lg absolute w-full left-0 top-full transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/programs", label: "Programs" },
            { path: "/how-it-works", label: "How It Works" },
            { path: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={toggleMenu}
              className={`block py-4 px-6 text-lg font-comic font-semibold transition-all duration-300 relative group ${
                isActive(item.path)
                  ? "text-[#036e8d] bg-[#d2a763]/10"
                  : "text-[#036e8d] hover:text-[#d2a763] hover:bg-[#d2a763]/10"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[#d2a763] transition-transform duration-300 ease-out origin-left ${
                  isActive(item.path)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } w-full`}
              ></span>
            </Link>
          ))}
          
          {/* Contact Info in Mobile Menu */}
          <div className="px-6 py-4 border-t border-[#d2a763]/20">
            <div className="flex flex-col space-y-3">
              <a 
                href="tel:+19035550106" 
                className="flex items-center space-x-3 text-[#036e8d] font-comic font-semibold hover:text-[#d2a763] transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-[#036e8d] rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Call for Questions</div>
                  <div className="font-bold">(903) 555-0106</div>
                </div>
              </a>
              
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="bg-[#d2a763] text-white px-4 py-3 rounded-md font-comic font-semibold text-center hover:bg-[#036e8d] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;