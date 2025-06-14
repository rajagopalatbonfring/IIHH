// import React from "react";
// import okayByChildrens from '../../assets/okayBychildrens.jpg';

// const FooterGallery = () => {
//   const galleryImages = Array(8).fill(okayByChildrens);
  
//   return (
//     <div 
//       id="footer-social" 
//       className="bg-[#036e8d]/5 p-6 sm:p-6 md:p-8 lg:p-4 rounded-xl mt-2 sm:mt-6 sm:mt-0 w-fit shadow-sm transition-shadow duration-300 hover:shadow-md"
//     >
//       <h3 className="text-lg sm:text-xl md:text-2xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6 md:mb-8 text-left sm:text-center tracking-wide">
//         Explore IIHH Gallery
//       </h3>
//       <div className="flex justify-center">
//         <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-fit">
//           {galleryImages.slice(0, window.innerWidth >= 768 ? 16 : 9).map((imgSrc, index) => (
//             <div
//               key={index}
//               className="w-12 h-10 sm:w-14 sm:h-12 md:w-16 md:h-14 overflow-hidden rounded-lg flex-shrink-0 border border-[#036e8d]/10"
//             >
//               <img
//                 src={imgSrc}
//                 alt={`Photo from IIHH Gallery ${index + 1}`}
//                 className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterGallery;

import React from "react";
import { Link } from "react-router-dom";
import okayByChildrens from '../../assets/okayBychildrens.jpg';

const FooterGallery = () => {
  const galleryImages = Array(7).fill(okayByChildrens); // Reduced to 7 images to make room for the arrow
  
  return (
    <div 
      id="footer-social" 
      className="bg-[#036e8d]/5 p-6 sm:p-6 md:p-8 lg:p-4 rounded-xl mt-2 sm:mt-0 w-fit shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <h3 className="text-lg sm:text-xl font-bubblegum text-[#036e8d] mb-4 sm:mb-6 md:mb-8 text-left tracking-wide">
        Explore IIHH Gallery
      </h3>
      <div className="flex justify-center align-center">
        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-fit">
          {galleryImages.slice(0, window.innerWidth >= 768 ? 15 : 8).map((imgSrc, index) => (
            <div
              key={index}
              className="w-12 h-10 sm:w-14 sm:h-12 md:w-14 md:h-12 overflow-hidden rounded-lg flex-shrink-0 border border-[#036e8d]/10"
            >
              <img
                src={imgSrc}
                alt={`Photo from IIHH Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
              />
            </div>
          ))}
          <Link
            to="#"
            className="w-12 h-10 sm:w-14 sm:h-12 md:w-14 md:h-12 flex items-center justify-center rounded-lg flex-shrink-0 bg-[#036e8d]/10 transition-all duration-500 hover:bg-transparent hover:bg-[#036e8d]/20 hover:scale-105 cursor-pointer group"
            aria-label="View full gallery"
          >
            <i className="fa-solid fa-arrow-right text-[#d2a763] transform transition-all duration-500 group-hover:text-[#036e8d] group-hover:translate-x-1 text-lg sm:text-xl md:text-2xl"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterGallery;