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
      <div className="container mx-auto px-8 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_0.6fr_1fr_1.6fr] gap-8 sm:gap-12 md:gap-8">
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