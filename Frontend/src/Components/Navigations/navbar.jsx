// import '../../App.css';
// import logo from '../../assets/IIHH-Logo-1-removebg-preview.png'

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";


// const Nav = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;
//   const [isOpen, setIsOpen] = useState(false);

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
//               // { path: "/testimonials", label: "Testimonials" },
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
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-[#036e8d] focus:outline-none p-2 rounded-md hover:bg-[#d2a763]/20 transition-colors duration-500"
//           >
//             {isOpen ? (
//               <i className="fa-solid fa-xmark text-2xl transition-transform duration-500"></i>
//             ) : (
//               <i className="fa-solid fa-bars text-2xl transition-transform duration-500"></i>
//             )}
//           </button>
//         </div>

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
//             { path: "/testimonials", label: "Testimonials" },
//             { path: "/contact", label: "Contact" },
//           ].map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               onClick={() => setIsOpen(false)}
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
//               onClick={() => setIsOpen(false)}
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
          <div className="hidden lg:flex items-center space-x-10">
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
                className={`text-lg font-comic font-semibold transition-all duration-500 ${
                  isActive(item.path)
                    ? "text-[#036e8d] border-b-2 border-[#d2a763]"
                    : "text-[#036e8d] hover:text-[#d2a763] hover:border-b-2 hover:border-[#d2a763]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join"
              className="bg-[#d2a763] text-[#ffffff] px-6 py-2 rounded-full font-bubblegum text-lg font-semibold hover:bg-[#036e8d] transition-all duration-500 hover:shadow-lg"
            >
              Join Us
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
            // { path: "/testimonials", label: "Testimonials" },
            { path: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={toggleMenu}
              className={`block py-4 px-6 text-lg font-comic font-semibold transition-all duration-500 ${
                isActive(item.path)
                  ? "text-[#036e8d] bg-[#d2a763]/10"
                  : "text-[#036e8d] hover:text-[#d2a763] hover:bg-[#d2a763]/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              to="/join"
              onClick={toggleMenu}
              className="block text-center bg-[#d2a763] text-[#ffffff] px-6 py-3 rounded-full font-bubblegum text-lg font-semibold hover:bg-[#036e8d] transition-all duration-500"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
