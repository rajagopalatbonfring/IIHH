// import React from "react";
// import { Link } from "react-router-dom";
// import okayByChildrens from '../../assets/okayBychildrens.jpg';

// const FooterGallery = () => {
//   const galleryImages = Array(7).fill(okayByChildrens); // Reduced to 7 images to make room for the arrow
  
//   return (
//     <div 
//       id="footer-social" 
//       className="rounded-xl mt-2 sm:mt-0 w-fit transition-shadow duration-300"
//     >
//       <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6 md:mb-8 text-left tracking-wide">
//         Explore IIHH Gallery
//       </h3>
//       <div className="flex justify-center align-center">
//         <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-fit">
//           {galleryImages.slice(0, window.innerWidth >= 768 ? 15 : 8).map((imgSrc, index) => (
//             <div
//               key={index}
//               className="w-12 h-10 sm:w-14 sm:h-12 md:w-14 md:h-12 overflow-hidden rounded-lg flex-shrink-0 border border-[#036e8d]/10"
//             >
//               <img
//                 src={imgSrc}
//                 alt={`Photo from IIHH Gallery ${index + 1}`}
//                 className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
//               />
//             </div>
//           ))}
//           <Link
//             to="#"
//             className="w-12 h-10 sm:w-14 sm:h-12 md:w-14 md:h-12 flex items-center justify-center rounded-lg flex-shrink-0 bg-[#036e8d]/10 transition-all duration-500 hover:bg-transparent hover:bg-[#036e8d]/20 hover:scale-105 cursor-pointer group"
//             aria-label="View full gallery"
//           >
//             <i className="fa-solid fa-arrow-right text-[#d2a763] transform transition-all duration-500 group-hover:text-[#036e8d] group-hover:translate-x-1 text-lg sm:text-xl md:text-2xl"></i>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterGallery;

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import okayByChildrens from '../../../assets/okayBychildrens.jpg';

const FooterGallery = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Sample image data - replace with your actual images
  const galleryImages = [
    { src: okayByChildrens , alt: 'IIHH Gallery Photo 1' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 2' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 3' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 4' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 5' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 6' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 7' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 8' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 9' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 10' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 11' },
    { src: okayByChildrens, alt: 'IIHH Gallery Photo 12' },
  ];

  const openGallery = (index = 0) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const selectImage = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <div 
        id="footer-social" 
        className="rounded-xl mt-2 sm:mt-0 w-fit transition-shadow duration-300"
      >
        <h3 className="text-lg sm:text-xl font-bold text-[#036e8d] mb-4 sm:mb-6 md:mb-8 text-left tracking-wide">
          Explore IIHH Gallery
        </h3>
        <div className="flex justify-center align-center">
          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-fit">
            {galleryImages.slice(0, 7).map((image, index) => (
              <div
                key={index}
                className="w-12 h-10 sm:w-14 sm:h-12 md:w-14 md:h-12 overflow-hidden rounded-lg flex-shrink-0 border border-[#036e8d]/10"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
                  onClick={() => openGallery(index)}
                />
              </div>
            ))}
            <button
              onClick={() => openGallery(0)}
              className="w-12 h-10 sm:w-14 sm:h-12 md:w-14 md:h-12 flex items-center justify-center rounded-lg flex-shrink-0 bg-[#036e8d]/10 transition-all duration-500 hover:bg-[#036e8d]/20 hover:scale-105 cursor-pointer group"
              aria-label="View full gallery"
            >
              <ChevronRight className="text-[#d2a763] group-hover:text-[#036e8d] transition-all duration-500 group-hover:translate-x-1" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full h-full max-h-screen overflow-hidden">
            {/* Header with close button */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
              <button
                onClick={closeGallery}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <X className="text-white" size={20} />
              </button>
            </div>

            {/* Desktop Layout (lg and above) */}
            <div className="hidden lg:flex h-full">
              {/* Main image display */}
              <div className="flex-1 flex items-center justify-center relative p-4">
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-10"
                >
                  <ChevronLeft className="text-white" size={24} />
                </button>
                
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={galleryImages[selectedImageIndex].src}
                    alt={galleryImages[selectedImageIndex].alt}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-10"
                >
                  <ChevronRight className="text-white" size={24} />
                </button>
              </div>

              {/* Thumbnail sidebar */}
              <div className="w-80 h-full bg-black/20 overflow-y-auto">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className={`relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-200 ${
                          index === selectedImageIndex 
                            ? 'ring-2 ring-[#d2a763] scale-95' 
                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                        }`}
                        onClick={() => selectImage(index)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                        {index === selectedImageIndex && (
                          <div className="absolute inset-0 bg-[#d2a763]/20 flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#d2a763] rounded-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout (below lg) */}
            <div className="lg:hidden h-full flex flex-col">
              {/* Main image display */}
              <div className="flex-1 flex items-center justify-center relative px-2 sm:px-4 pt-12 sm:pt-16">
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-10"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={galleryImages[selectedImageIndex].src}
                    alt={galleryImages[selectedImageIndex].alt}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-10"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>
              </div>

              {/* Bottom thumbnail strip */}
              <div className="h-32 sm:h-40 bg-black/20 overflow-x-auto overflow-y-hidden">
                <div className="flex gap-2 p-3 sm:p-4 h-full">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-lg cursor-pointer transition-all duration-200 ${
                        index === selectedImageIndex 
                          ? 'ring-2 ring-[#d2a763] scale-95' 
                          : 'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => selectImage(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      {index === selectedImageIndex && (
                        <div className="absolute inset-0 bg-[#d2a763]/20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#d2a763] rounded-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs sm:text-sm bg-black/30 px-2 py-1 rounded-full lg:bottom-4">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterGallery;