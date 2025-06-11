import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ currentPath }) => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/programs", label: "Programs" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div id="footer-links">
      <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6">Quick Links</h3>
      <nav aria-label="Footer Quick Links">
        <ul className="space-y-2 sm:space-y-3">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`text-sm sm:text-base font-comic text-[#036e8d] transition-all duration-300 ${
                  currentPath === item.path ? "text-[#d2a763] font-semibold" : "hover:text-[#d2a763]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterLinks;
