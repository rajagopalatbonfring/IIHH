import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProgramInformation = ({ programDetails }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="program-details" className="py-16 bg-[#f9fcfd] relative overflow-hidden">
      {/* Cloud Overlays */}
      <img
        src="/assets/Group 33.png"
        className="w-full absolute top-0 p-0 m-0 opacity-20 animate-cloudFade"
        alt="Cloud decoration top"
      />
      <img
        src="/assets/Group 33.png"
        className="w-full absolute bottom-0 p-0 m-0 opacity-20 animate-cloudFadeReverse"
        alt="Cloud decoration bottom"
      />

      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#036e8d]/5 to-transparent z-0"></div>

      {/* Animated Wave Lines */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#036e8d]/10 animate-wave"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d2a763]/10 animate-waveReverse"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Program <span className="text-[#036e8d]">Information</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about IIHH’s transformative one-year program.
          </p>
        </div>

        {/* Centered Content */}
        <div className="max-w-4xl mx-auto">
          {/* Key Details Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#036e8d] text-center mb-6">Key Details</h3>
            <div className="relative overflow-hidden">
              <div className="flex animate-carousel gap-4">
                {[
                  { title: "Duration", icon: "fa-calendar-days", value: programDetails.duration },
                  { title: "Format", icon: "fa-laptop-house", value: programDetails.format },
                  { title: "Tuition", icon: "fa-money-bill-wave", value: programDetails.tuition },
                  { title: "Certification", icon: "fa-certificate", value: programDetails.certification },
                ].map((detail, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-[#036e8d]/10 hover:border-[#d2a763] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#036e8d]/10 rounded-full flex items-center justify-center mb-2">
                      <i className={`fa-solid ${detail.icon} text-lg text-[#036e8d]`}></i>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800">{detail.title}</h4>
                    <p className="text-sm text-gray-600">{detail.value}</p>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { title: "Duration", icon: "fa-calendar-days", value: programDetails.duration },
                  { title: "Format", icon: "fa-laptop-house", value: programDetails.format },
                  { title: "Tuition", icon: "fa-money-bill-wave", value: programDetails.tuition },
                  { title: "Certification", icon: "fa-certificate", value: programDetails.certification },
                ].map((detail, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center border border-[#036e8d]/10 hover:border-[#d2a763] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#036e8d]/10 rounded-full flex items-center justify-center mb-2">
                      <i className={`fa-solid ${detail.icon} text-lg text-[#036e8d]`}></i>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800">{detail.title}</h4>
                    <p className="text-sm text-gray-600">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Start Dates Accordion */}
          <div>
            <h3 className="text-2xl font-bold text-[#036e8d] text-center mb-6">Upcoming Start Dates</h3>
            <div className="space-y-2">
              {programDetails.startDates.map((date, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-[#036e8d]/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center p-4 text-left hover:bg-[#036e8d]/5 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-[#d2a763]/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="fa-solid fa-flag-checkered text-[#036e8d]"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{date}</h4>
                    </div>
                    <i
                      className={`fa-solid fa-chevron-down text-[#036e8d] transition-transform duration-200 ${activeAccordion === index ? 'rotate-180' : ''}`}
                    ></i>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-40' : 'max-h-0'}`}
                  >
                    <div className="p-4 pt-0">
                      <p className="text-sm text-gray-600 mb-2">
                        {index === 0 ? "Application deadline: December 1, 2025" : index === 1 ? "Application deadline: May 1, 2026" : "Application deadline: August 1, 2026"}
                      </p>
                      <Link
                        to="/apply"
                        className="inline-block bg-[#036e8d] text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-[#d2a763] transition-colors duration-200"
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/calendar"
                className="text-[#036e8d] hover:text-[#d2a763] font-medium text-sm md:text-base"
              >
                View Full Academic Calendar <i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-768px); }
        }
        .animate-carousel {
          animation: carousel 20s linear infinite;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
        @keyframes cloudFade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.1; }
        }
        .animate-cloudFade {
          animation: cloudFade 8s ease-in-out infinite;
        }
        .animate-cloudFadeReverse {
          animation: cloudFade 8s ease-in-out infinite reverse;
        }
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-wave {
          animation: wave 10s linear infinite;
        }
        .animate-waveReverse {
          animation: wave 10s linear infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default ProgramInformation;