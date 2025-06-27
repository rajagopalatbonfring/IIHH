import React from 'react'

const signatureModules = () => {
  return (
    <>

          {/* Signature Modules */}
      <section id="modules" className="pt-16 pb-0 bg-[#f9fcfd] font-comic">
        <div className="container mx-auto px-8 md:px-14 pt-14 pb-8 max-w-8xl flex flex-col items-center">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Signature <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Modules!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl text-center leading-relaxed mb-10">
            Foundations of Humanism, Life Skills, and Humanistic Leadership are exclusive to IIHH—designed to ignite empathy, ethical reasoning, and a global mindset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"> 
            {/* Card 1 */}
            <div
              id="course-card-1"
              className="flex flex-col shadow-xl justify-center rounded-2xl p-10 bg-yellow-200 transform hover:scale-105 duration-300 hover:shadow-none"
            >
              <i className="fa-solid fa-brain text-4xl text-[#ffffff] mb-4 self-center"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Foundations of Humanism</h3>
              <p className="text-gray-600 text-sm text-center">
                Build empathy, autonomy, and purpose—skills rarely taught elsewhere.
              </p>
            </div>

            {/* Card 2 */}
            <div
              id="course-card-2"
              className="flex flex-col shadow-xl justify-center rounded-2xl p-6 bg-orange-300 transform hover:scale-105 duration-300 hover:shadow-none"
            >
              <i className="fa-solid fa-toolbox text-4xl text-[#ffffff] mb-4 self-center"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Life Skills</h3>
              <p className="text-gray-600 text-sm text-center">
                Develop essential life skills to foster personal and social harmony.
              </p>
            </div>

            {/* Card 3 */}
            <div
              id="course-card-3"
              className="flex flex-col shadow-xl justify-center rounded-2xl p-6 bg-blue-200 transform hover:scale-105 duration-300 hover:shadow-none"
            >
              <i className="fa-solid fa-globe text-4xl text-[#ffffff] mb-4 self-center"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Humanistic Leadership</h3>
              <p className="text-gray-600 text-sm text-center">
                Inspire leadership with compassion, integrity, and community involvement.
              </p>
            </div>
          </div>
          <p className="text-center text-[#036e8d] font-medium text-base mt-10">
            These modules are exclusive to IIHH and cannot be learned anywhere else.
          </p>
        </div>
      </section>
      
    </>
  )
}

export default signatureModules
