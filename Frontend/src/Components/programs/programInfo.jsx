import React from 'react'
import { Link } from "react-router-dom";

const programDetails = {
  duration: "1 Year",
  format: "Hybrid (Online & In-person)",
  startDates: ["January 15, 2026", "June 10, 2026", "September 5, 2026"],
  tuition: "$4,800 (Scholarships available)",
  certification: "IIHH Certificate in Humanistic Development"
};

const programInfo = () => {

  return (
    <>

    
        {/* Program Information Section */}
        <section id="program-details" className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Centered Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-gray-800">
                Program <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Information</span>
              </h2>
              <p className="text-gray-600 mt-2 text-base lg:text-lg max-w-2xl mx-auto">
                Essential details and schedules for IIHH's one-year program.
              </p>
            </div>

            {/* Side-by-Side Cards */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
              {/* Key Details Card (Enhanced) */}
              <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Key Details</h3>
                </div>
                
                <div className="space-y-1">
                  {[
                    { title: "Duration", icon: "fa-calendar-days", value: programDetails.duration, color: "bg-blue-50 text-blue-700 border-blue-200" },
                    { title: "Format", icon: "fa-laptop-house", value: programDetails.format, color: "bg-green-50 text-green-700 border-green-200" },
                    { title: "Tuition", icon: "fa-money-bill-wave", value: programDetails.tuition, color: "bg-amber-50 text-amber-700 border-amber-200" },
                    { title: "Certification", icon: "fa-certificate", value: programDetails.certification, color: "bg-purple-50 text-purple-700 border-purple-200" },
                  ].map((detail, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 px-3 rounded-lg shadow-sm">
                          <i className={`fa-solid ${detail.icon} text-lg text-[#036e8d]`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex-col items-center gap-3">
                            <p className="text-base font-bold text-gray-700">{detail.value}</p>
                            <span className={`inline-block px-2 rounded-full text-sm font-semibold border ${detail.color}`}>
                              {detail.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Start Dates Card (Smaller, Transparent) */}
              <div className="w-full md:w-2/5 bg-transparent p-4">
                <h3 className="text-lg font-bold text-[#036e8d] mb-3">Upcoming Schedules</h3>
                <div className="space-y-2">
                  {programDetails.startDates.map((date, index) => (
                    <div key={index} className="flex items-center gap-3 pb-2 border-b border-[#036e8d]/10 last:border-b-0">
                      <i className="fa-solid fa-flag-checkered text-lg text-[#036e8d] flex-shrink-0"></i>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-800">{date}</h4>
                        <p className="text-sm text-gray-600">
                          {index === 0 ? "Deadline: Dec 1, 2025" : index === 1 ? "Deadline: May 1, 2026" : "Deadline: Aug 1, 2026"}
                        </p>
                      </div>
                      <Link
                        to="/apply"
                        className="bg-[#036e8d] text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#d2a763] transition-colors duration-200"
                      >
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Link
                    to="/calendar"
                    className="text-[#036e8d] hover:text-[#d2a763] font-medium text-sm"
                  >
                    View Calendar <i className="fa-solid fa-arrow-right ml-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  )
}

export default programInfo
