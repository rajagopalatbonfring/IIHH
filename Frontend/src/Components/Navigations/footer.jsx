// import '../App.css';
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from '../assets/IIHH-Logo-1-removebg-preview.png';
// import okayByChildrens from '../assets/okayByChildrens.jpg';

// const Footer = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   const galleryImages = Array(6).fill(okayByChildrens);

//   return (
//     <footer id="footer" className="bg-[#ffffff]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
//           {/* About Section */}
//           <div id="footer-about" className="flex flex-col items-start">
//             <div className="flex items-center space-x-3 mb-4">
//               <img src={logo} alt="IIHH Logo" className="w-56 h-auto" />
//             </div>
//             <p className="text-sm sm:text-base font-comic text-[#036e8d] leading-relaxed">
//               Transforming lives through humanistic education that fosters resilience, empathy, and purpose for learners of all ages.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div id="footer-links">
//             <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6">Quick Links</h3>
//             <nav aria-label="Footer Quick Links">
//               <ul className="space-y-2 sm:space-y-3">
//                 {[
//                   { path: "/", label: "Home" },
//                   { path: "/about", label: "About Us" },
//                   { path: "/programs", label: "Programs" },
//                   { path: "/how-it-works", label: "How It Works" },
//                   { path: "/contact", label: "Contact Us" },
//                 ].map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.path}
//                       className={`text-sm sm:text-base font-comic text-[#036e8d] transition-all duration-300 ${
//                         isActive(item.path) ? "text-[#d2a763] font-semibold" : "hover:text-[#d2a763]"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Contact Info */}
//           <div id="footer-contact">
//             <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6">Get in Touch</h3>
//             <ul className="space-y-2 sm:space-y-3 text-[#036e8d] font-comic">
//               <li className="flex items-center space-x-3">
//                 <i className="fa-solid fa-location-dot text-[#d2a763] transition-transform duration-300 hover:scale-110"></i>
//                 <span className="text-sm sm:text-base">456 Horizon Ave, Humanism City, HC 67890</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <i className="fa-solid fa-phone text-[#d2a763] transition-transform duration-300 hover:scale-110"></i>
//                 <a href="tel:+15559876543" className="text-sm sm:text-base hover:underline">(555) 987-6543</a>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <i className="fa-solid fa-envelope text-[#d2a763] transition-transform duration-300 hover:scale-110"></i>
//                 <a href="mailto:contact@iihh.org" className="text-sm sm:text-base hover:underline">contact@iihh.org</a>
//               </li>
//             </ul>

//             <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6 mt-6">Connect With Us</h3>
//             <div className="flex space-x-4">
//               {[
//                 { icon: "fa-brands fa-facebook", href: "#" },
//                 { icon: "fa-brands fa-instagram", href: "#" },
//                 { icon: "fa-brands fa-linkedin", href: "#" },
//                 { icon: "fa-brands fa-youtube", href: "#" },
//               ].map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Follow us on ${item.icon.split('fa-brands fa-')[1]}`}
//                   className="text-[#036e8d] hover:text-[#d2a763] transition-all duration-300 hover:scale-110"
//                 >
//                   <i className={`${item.icon} text-xl sm:text-2xl`}></i>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Gallery Section */}
//           <div id="footer-social" className="bg-[#036e8d]/10 p-4 sm:p-6 rounded-lg mt-6 sm:mt-0">
//             <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6">
//               Look at IIHH Gallery
//             </h3>
//             <div className="w-full">
//               <div className="flex flex-wrap gap-2 sm:gap-3">
//                 {galleryImages.map((imgSrc, index) => (
//                   <div
//                     key={index}
//                     className="w-12 h-10 overflow-hidden rounded-md flex-shrink-0"
//                   >
//                     <img
//                       src={imgSrc}
//                       alt={`Photo from IIHH Gallery ${index + 1}`}
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-[#d2a763]/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
//           <p className="mt-12 text-sm sm:text-base text-[#036e8d] font-comic">
//             © 2025 International Institute of Horizon Humanism. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import '../../App.css';
import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../../assets/IIHH-Logo-1-removebg-preview.png';
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterGallery from "./FooterGallery";

const Footer = () => {
  const location = useLocation();

  return (
    <footer id="footer" className="bg-[#ffffff]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Section */}
          <div id="footer-about" className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="IIHH Logo" className="w-56 h-auto" />
            </div>
            <p className="text-sm sm:text-base font-comic text-[#036e8d] leading-relaxed">
              Transforming lives through humanistic education that fosters resilience, empathy, and purpose for learners of all ages.
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinks currentPath={location.pathname} />

          {/* Contact Info */}
          <FooterContact />

          {/* Gallery */}
          <FooterGallery />
        </div>

        {/* Copyright */}
        <div className="border-t border-[#d2a763]/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="mt-12 text-sm sm:text-base text-[#036e8d] font-comic">
            © 2025 International Institute of Horizon Humanism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
