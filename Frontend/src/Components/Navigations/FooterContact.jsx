import React from "react";

const FooterContact = () => {
  const contactInfo = [
    {
      icon: "fa-location-dot",
      text: "456 Horizon Ave, Humanism City, HC 67890",
    },
    {
      icon: "fa-phone",
      text: "(555) 987-6543",
      href: "tel:+15559876543",
    },
    {
      icon: "fa-envelope",
      text: "contact@iihh.org",
      href: "mailto:contact@iihh.org",
    },
  ];


  return (
    <div id="footer-contact">
      <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6">Get in Touch</h3>
      <ul className="space-y-2 sm:space-y-3 text-[#036e8d] font-comic">
        {contactInfo.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <i className={`fa-solid ${item.icon} text-[#d2a763] transition-transform duration-300 hover:scale-110`}></i>
            {item.href ? (
              <a href={item.href} className="text-sm sm:text-base hover:underline">
                {item.text}
              </a>
            ) : (
              <span className="text-sm sm:text-base">{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContact;