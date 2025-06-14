import React, { useRef, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

const TestimonialCarousel = ({ testimonials }) => {
  const containerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1); // Small screens (sm)
      else if (width < 1024) setCardsPerView(2); // Medium screens (md)
      else setCardsPerView(3); // Large screens (lg and above)
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = testimonials.length - cardsPerView;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200/80 rounded-full p-3 transition-shadow"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200/80 rounded-full p-3 shadow-sm transition-shadow"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel */}
      <div className="overflow-hidden py-10 px-2">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / testimonials.length) * currentIndex}%)`,
            width: `${(100 / cardsPerView) * testimonials.length}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-4"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                transitionSpeed={400}
                scale={1.05}
                glareEnable={false}
              >
                <div className="bg-white rounded-2xl p-8 transition-shadow text-center h-full flex flex-col">
                  <div className="text-6xl text-gray-300 font-serif mb-4">"</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{testimonial.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                    {testimonial.desc}
                  </p>
                  <div className="flex justify-center text-orange-400 mb-6">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;


