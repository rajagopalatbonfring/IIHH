import React, { useState, useEffect } from "react";

import cloudClose from '../../assets/closeCloud.png';
import collabWorkImg from "../../assets/Groupworkintheclassroom.jpeg";

const learningInAction = () => {

  const learningItems = [
    "Collaborative Learning",
    "Outdoor Team Building",
    "Project Presentations",
    "Creative Problem Solving",
    "Leadership Games",
    "Fun Experiments",
    "Mind Mapping",
    "Design Thinking",
  ];

  const groupSize = 3; // 3 items per slide
  const slideGroups = Array.from({ length: Math.ceil(learningItems.length / groupSize) }, (_, i) =>
    learningItems.slice(i * groupSize, i * groupSize + groupSize)
  );

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % slideGroups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
            <section id="learning-showcase" className="relative py-16 pt-40 bg-[#036e8d]">
              <img 
                src={cloudClose} 
                alt="Cloud decoration" 
                className="w-full absolute top-0 left-0 object-cover object-top" 
                style={{ transform: 'translateY(-50%)'}}
              />
    
              <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                    <span className="text-white">Learning in </span>
                    <span className="text-[#ffd278] inline-block transform hover:scale-x-105 duration-300">Action</span>
                  </h2>
                  <p className="text-lg md:text-xl text-white/90">
                    See IIHH students collaborate, create, and lead through hands-on activities, building confidence and teamwork.
                  </p>
                </div>
    
                {/* Carousel */}
                <div className="relative w-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ width: `${slideGroups.length * 100}%`, transform: `translateX(-${currIndex * (100 / slideGroups.length)}%)` }}
                  >
                    {slideGroups.map((group, idx) => (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 w-full">
                        {group.map((title, subIdx) => (
                          <div key={subIdx} className="rounded-xl overflow-hidden shadow-lg group relative">
                            <img
                              className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                              src={collabWorkImg}
                              alt={title}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#223668]/70 to-transparent p-4">
                              <h3 className="text-white text-lg font-bold">{title}</h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
    
                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 space-x-3">
                  {slideGroups.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrIndex(idx)}
                      className={`w-3 h-3 rounded-full ${
                        idx === currIndex ? "bg-[#ffd278]" : "bg-white/40"
                      } transition-all duration-300`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>
      
    </>
  )
}

export default learningInAction
