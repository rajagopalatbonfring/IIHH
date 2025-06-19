import '../../App.css';
import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../../assets/IIHH-Logo-1-removebg-preview.png';
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterGallery from "./FooterGallery";

const Footer = () => {
  
  const socials = [
    { icon: "fa-facebook", href: "#" },
    { icon: "fa-instagram", href: "#" },
    { icon: "fa-linkedin", href: "#" },
    { icon: "fa-youtube", href: "#" },
  ];

  const location = useLocation();

  return (
    <footer id="footer" className="bg-[#ffffff]">
      <div className="container mx-auto px-8 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.6fr_1fr_1fr] gap-8 sm:gap-12 md:gap-8">
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
          {/* <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6 mt-6">Connect With Us</h3> */}
          <p className="mt-4 text-sm sm:text-base text-[#036e8d] font-comic">
            © 2025 International Institute of Horizon Humanism. All rights reserved.
          </p>
          <div className="flex align-center justify-center space-x-4 pt-4">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${item.icon.split("fa-")[1]}`}
                className="text-[#036e8d] hover:text-[#d2a763] transition-all duration-300 hover:scale-110"
              >
                <i className={`fa-brands ${item.icon} text-xl sm:text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;