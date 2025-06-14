import React, { useRef, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const facultyData = [
  {
    name: "Dr. Elena Rodriguez",
    role: "Program Director",
    specialty: "Humanistic Philosophy",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
  },
  {
    name: "Prof. Michael Chen",
    role: "Lead Instructor",
    specialty: "Emotional Intelligence",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
  },
  {
    name: "Dr. Amara Okafor",
    role: "Curriculum Designer",
    specialty: "Critical Thinking",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
  },
  {
    name: "Prof. James Wilson",
    role: "Research Lead",
    specialty: "Social Ethics",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
  },
  {
    name: "Prof. Sarah Johnson",
    role: "Innovation Head",
    specialty: "Holistic Learning",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
  },
];

const FacultyCarousel = () => {
  const containerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 700) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else if (width < 1280) setCardsPerView(3);
      else setCardsPerView(4);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = facultyData.length - cardsPerView;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="faculty" className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-3">
          Meet Our{" "}
          <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">
            Faculty
          </span>
        </h2>
        <p className="text-gray-600 mt-2 text-base lg:text-lg max-w-2xl mx-auto text-center leading-relaxed mb-10">
          Meet the passionate educators and visionaries who guide IIHH’s mission. Our leadership team brings together diverse expertise and a shared commitment to nurturing holistic, humanistic education for every learner.
        </p>


        {/* Carousel */}
        <div className="relative overflow-hidden py-10">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200/80 rounded-full p-3 transition-shadow"
          >
            <i className="fa-solid fa-chevron-left text-[#036e8d] text-xl p-2"></i>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200/80 rounded-full p-3 transition-shadow"
          >
            <i className="fa-solid fa-chevron-right text-[#036e8d] text-xl p-2"></i>
          </button>

          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / facultyData.length) * currentIndex}%)`,
              width: `${(100 / cardsPerView) * facultyData.length}%`,
            }}
          >
            {facultyData.map((faculty, index) => (
              <div
                key={index}
                className="px-4"
                style={{ width: `${100 / facultyData.length}%` }}
              >
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  transitionSpeed={400}
                  scale={1.05}
                  glareEnable={false}
                >
                  <div className="bg-white rounded-2xl p-6 transition-shadow text-center h-full flex flex-col">
                    <img
                      src={faculty.img}
                      alt={faculty.name}
                      className="w-full h-64 object-cover rounded-xl mb-4"
                      onError={(e) => {
                        e.target.src = "/assets/fallback.jpg";
                      }}
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                    <p className="text-[#036e8d] font-medium mb-1">{faculty.role}</p>
                    <p className="text-gray-600 text-sm mb-4">
                      Specializes in {faculty.specialty}
                    </p>
                    <Link
                      to={`/faculty/${index}`}
                      className="text-[#036e8d] hover:text-[#d2a763] font-medium text-sm mt-auto"
                    >
                      View Profile <i className="fa-solid fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyCarousel;
