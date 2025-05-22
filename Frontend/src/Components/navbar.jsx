// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../App.css";

// const Nav = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav id="header" className="fixed w-full bg-white shadow-lg z-50 px-4 py-3 transition-all duration-300">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-3">
//             <i className="fa-solid fa-graduation-cap text-4xl text-purple-600 group-hover:text-purple-700 transition-colors duration-300"></i>
//             <span className="text-2xl font-bold text-gray-900">IIHH</span>
//           </div>

//           {/* Navigation Links (Desktop) */}
//           <div className="hidden lg:flex items-center space-x-10">
//             {[
//               { path: "/", label: "Home" },
//               { path: "/about", label: "About" },
//               { path: "/programs", label: "Programs" },
//               { path: "/how-it-works", label: "How It Works" },
//               { path: "/testimonials", label: "Testimonials" },
//               { path: "/contact", label: "Contact" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className={`text-base font-semibold transition-all duration-300 ${
//                   isActive(item.path)
//                     ? "text-purple-600 border-b-2 border-purple-600"
//                     : "text-gray-700 hover:text-purple-600 hover:border-b-2 hover:border-purple-200"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link
//               to="/join"
//               className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
//             >
//               Join Us
//             </Link>
//           </div>

//           {/* Hamburger Menu (Mobile) */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
//           >
//             {isOpen ? (
//               <i className="fa-solid fa-xmark text-2xl transition-transform duration-300"></i>
//             ) : (
//               <i className="fa-solid fa-bars text-2xl transition-transform duration-300"></i>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden bg-white shadow-lg absolute w-full left-0 top-full transition-all duration-300 ease-in-out ${
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
//               className={`block py-4 px-6 text-base font-semibold transition-all duration-200 ${
//                 isActive(item.path)
//                   ? "text-purple-600 bg-purple-50"
//                   : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <div className="px-6 py-4">
//             <Link
//               to="/join"
//               onClick={() => setIsOpen(false)}
//               className="block text-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300"
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


import '../App.css';
import logo from '../assets/IIHH-Logo-1-removebg-preview.png'

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Nav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);

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
              { path: "/testimonials", label: "Testimonials" },
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
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#036e8d] focus:outline-none p-2 rounded-md hover:bg-[#d2a763]/20 transition-colors duration-500"
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark text-2xl transition-transform duration-500"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl transition-transform duration-500"></i>
            )}
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
            { path: "/testimonials", label: "Testimonials" },
            { path: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
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
              onClick={() => setIsOpen(false)}
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
