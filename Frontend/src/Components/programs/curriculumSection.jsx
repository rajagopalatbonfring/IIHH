import React from 'react'

const curriculumSection = () => {
  return (
    <>

            {/* Curriculum Overview Section */}
        <section id="curriculum-pathway" className="py-16 bg-[#f9fcfd] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-20 w-24 h-24 border-2 border-[#036e8d] rounded-full"></div>
            <div className="absolute bottom-20 right-16 w-20 h-20 border-2 border-[#d2a763] rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#036e8d] rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                Curriculum <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Pathway</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Navigate through interconnected learning modules designed for holistic development
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="max-w-6xl mx-auto">

              {/* Desktop Timeline */}
              <div className="hidden md:block">
                <div className="relative">
                  {/* Horizontal Line */}
                  <div className="absolute top-10 left-36 right-36 h-1 bg-[#036e8d] rounded-full transform -translate-y-1/2"></div>
                  
                  {/* Timeline Items */}
                  <div className="flex justify-between items-center">
                    {/* Term 1 */}
                    <div className="flex-1 text-center relative group hover:scale-105 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#036e8d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white z-10 relative">
                        <i className="fa-solid fa-book-open text-white text-xl"></i>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-800">Term 1: Foundation</h3>
                        <p className="text-sm text-gray-600 mb-4">Building Your Core</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Values & Self-Discovery</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Critical Thinking</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Emotional Intelligence</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Term 2 */}
                    <div className="flex-1 text-center relative mx-8 group hover:scale-105 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#d2a763] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white z-10 relative">
                        <i className="fa-solid fa-rocket text-white text-xl"></i>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#d2a763] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-800">Term 2: Development</h3>
                        <p className="text-sm text-gray-600 mb-4">Expanding Skills</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check  text-[#d2a763] mr-2"></i>
                            <span>Advanced Communication</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check  text-[#d2a763] mr-2"></i>
                            <span>Problem Solving</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check  text-[#d2a763] mr-2"></i>
                            <span>Financial Literacy</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Term 3 */}
                    <div className="flex-1 text-center relative group hover:scale-105 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#036e8d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white z-10 relative">
                        <i className="fa-solid fa-trophy text-white text-xl"></i>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-800">Term 3: Mastery</h3>
                        <p className="text-sm text-gray-600 mb-4">Leading Impact</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Ethical Leadership</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Community Impact</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Capstone Project</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden space-y-6 relative">
                {/* Vertical Connecting Line */}
                <div className="absolute left-[25px] top-[100px] h-[calc(98%-12rem)] w-1 bg-[#036e8d] rounded-full z-0"></div>

                {/* Term 1 */}
                <div className="flex items-center relative ">
                  <div className="w-14 h-14 bg-[#036e8d] rounded-full flex items-center justify-center mr-2 shadow-lg border-4 border-white flex-shrink-0 z-10 hover:scale-110 transition-all duration-300">
                    <i className="fa-solid fa-book-open text-white text-sm"></i>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-2">Term 1: Foundation</h3>
                    <p className="text-sm text-gray-600 mb-3">Building Your Core</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Values & Self-Discovery</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Critical Thinking</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Emotional Intelligence</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Term 2 */}
                <div className="flex items-center relative">
                  <div className="w-14 h-14 bg-[#d2a763] rounded-full flex items-center justify-center mr-2 shadow-lg border-4 border-white flex-shrink-0 z-10 hover:scale-110 transition-all duration-300">
                    <i className="fa-solid fa-rocket text-white text-sm"></i>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#d2a763] flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-2">Term 2: Development</h3>
                    <p className="text-sm text-gray-600 mb-3">Expanding Skills</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#d2a763] mr-2"></i>
                        <span>Advanced Communication</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#d2a763] mr-2"></i>
                        <span>Problem Solving</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#d2a763] mr-2"></i>
                        <span>Financial Literacy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Term 3 */}
                <div className="flex items-center relative">
                  <div className="w-14 h-14 bg-[#036e8d] rounded-full flex items-center justify-center mr-2 shadow-lg border-4 border-white flex-shrink-0 z-10 hover:scale-110 transition-all duration-300">
                    <i className="fa-solid fa-trophy text-white text-sm"></i>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-2">Term 3: Mastery</h3>
                    <p className="text-sm text-gray-600 mb-3">Leading Impact</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Ethical Leadership</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Community Impact</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Capstone Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      
    </>
  )
}

export default curriculumSection
