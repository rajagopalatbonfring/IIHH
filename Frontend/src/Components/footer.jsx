// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../App.css";

// const Footer = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <footer id="footer" className="bg-gradient-to-b from-gray-50 to-purple-100">
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* About Section */}
//           <div id="footer-about">
//             <div className="flex items-center space-x-3 mb-6">
//               <i className="fa-solid fa-graduation-cap text-4xl text-purple-600"></i>
//               <span className="text-2xl font-bold text-gray-900">IIHH</span>
//             </div>
//             <p className="text-base font-semibold text-gray-700 leading-relaxed">
//               Transforming lives through humanistic education that fosters resilience, empathy, and purpose for learners of all ages.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div id="footer-links">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               {[
//                 { path: "/", label: "Home" },
//                 { path: "/about", label: "About Us" },
//                 { path: "/programs", label: "Programs" },
//                 { path: "/how-it-works", label: "How It Works" },
//                 { path: "/testimonials", label: "Testimonials" },
//                 { path: "/contact", label: "Contact Us" },
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.path}
//                     className={`text-base font-semibold text-gray-700 transition-all duration-200 ${
//                       isActive(item.path) ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div id="footer-contact">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
//             <ul className="space-y-3 text-gray-600">
//               <li className="flex items-center space-x-3">
//                 <i className="fa-solid fa-location-dot text-purple-600"></i>
//                 <span className="text-base font-semibold text-gray-700">456 Horizon Ave, Humanism City, HC 67890</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <i className="fa-solid fa-phone text-purple-600"></i>
//                 <span className="text-base font-semibold text-gray-700">(555) 987-6543</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <i className="fa-solid fa-envelope text-purple-600"></i>
//                 <span className="text-base font-semibold text-gray-700">contact@iihh.org</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div id="footer-social">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
//                 <i className="fa-brands fa-facebook text-2xl"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
//                 <i className="fa-brands fa-instagram text-2xl"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
//                 <i className="fa-brands fa-linkedin text-2xl"></i>
//               </a>
//               <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
//                 <i className="fa-brands fa-youtube text-2xl"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-gray-200 mt-12 pt-8 text-center">
//           <p className="text-gray-600">© 2025 International Institute of Horizon Humanism. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import '../App.css';

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/IIHH-Logo-1-removebg-preview.png'

const Footer = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <footer id="footer" className="bg-[#ffffff]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div id="footer-about">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="logo" className="w-100 h-auto" />
            </div>
            <p className="text-base font-comic text-[#036e8d] leading-relaxed">
              Transforming lives through humanistic education that fosters resilience, empathy, and purpose for learners of all ages.
            </p>
          </div>

          {/* Quick Links */}
          <div id="footer-links">
            <h3 className="text-xl font-bubblegum text-[#036e8d] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/programs", label: "Programs" },
                { path: "/how-it-works", label: "How It Works" },
                { path: "/testimonials", label: "Testimonials" },
                { path: "/contact", label: "Contact Us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`text-base font-comic text-[#036e8d] transition-all duration-500 ${
                      isActive(item.path) ? "text-[#d2a763] font-semibold" : "hover:text-[#d2a763]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="footer-contact">
            <h3 className="text-xl font-bubblegum text-[#036e8d] mb-6">Get in Touch</h3>
            <ul className="space-y-3 text-[#036e8d] font-comic">
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-location-dot text-[#d2a763] transition-transform duration-500 hover:scale-110"></i>
                <span className="text-base">456 Horizon Ave, Humanism City, HC 67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-phone text-[#d2a763] transition-transform duration-500 hover:scale-110"></i>
                <span className="text-base">(555) 987-6543</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fa-solid fa-envelope text-[#d2a763] transition-transform duration-500 hover:scale-110"></i>
                <span className="text-base">contact@iihh.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div id="footer-social" className="bg-[#036e8d]/10 p-6 rounded-lg">
            <h3 className="text-xl font-bubblegum text-[#036e8d] mb-6">Connect With Us</h3>
            <div className="flex space-x-6">
              {[
                { icon: "fa-brands fa-facebook", href: "#" },
                { icon: "fa-brands fa-instagram", href: "#" },
                { icon: "fa-brands fa-linkedin", href: "#" },
                { icon: "fa-brands fa-youtube", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#036e8d] hover:text-[#d2a763] transition-all duration-500 hover:scale-110"
                >
                  <i className={`${item.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#d2a763]/20 mt-12 pt-8 text-center">
          <p className="text-[#036e8d] font-comic">© 2025 International Institute of Horizon Humanism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
