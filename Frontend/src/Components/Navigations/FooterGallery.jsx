import React from "react";
import okayByChildrens from '../../assets/okayBychildrens.jpg';

const FooterGallery = () => {
  const galleryImages = Array(8).fill(okayByChildrens);
  
  return (
    <div 
      id="footer-social" 
      className="bg-[#036e8d]/5 p-4 sm:p-6 md:p-8 lg:p-4 rounded-xl mt-6 sm:mt-0 w-fit shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6 md:mb-8 text-center tracking-wide">
        Explore IIHH Gallery
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-fit">
          {galleryImages.slice(0, window.innerWidth >= 768 ? 16 : 9).map((imgSrc, index) => (
            <div
              key={index}
              className="w-12 h-10 sm:w-14 sm:h-12 md:w-16 md:h-14 overflow-hidden rounded-lg flex-shrink-0 border border-[#036e8d]/10"
            >
              <img
                src={imgSrc}
                alt={`Photo from IIHH Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterGallery;