import React from "react";
import okayByChildrens from '../../assets/okayByChildrens.jpg';

const FooterGallery = () => {
  const galleryImages = Array(6).fill(okayByChildrens);

  return (
    <div id="footer-social" className="bg-[#036e8d]/10 p-4 sm:p-6 rounded-lg mt-6 sm:mt-0">
      <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6">
        Look at IIHH Gallery
      </h3>
      <div className="w-full">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {galleryImages.map((imgSrc, index) => (
            <div
              key={index}
              className="w-12 h-10 overflow-hidden rounded-md flex-shrink-0"
            >
              <img
                src={imgSrc}
                alt={`Photo from IIHH Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterGallery;