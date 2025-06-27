import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';

import location from '../../assets/lottie/Location.json';
import cloudOpen from '../../assets/Group 33.png';

import WorkingHours from '../../Components/contact/workingHours'

const visitOurOffice = () => {

  const [isAddressHovered, setIsAddressHovered] = useState(false);
  const addressLottieRef = useRef(null);

  const playAddressAnimation = () => {
    setIsAddressHovered(true);
    if (addressLottieRef.current) {
      addressLottieRef.current.goToAndPlay(0); // Start from first frame
    }
  };

  return (
    <>

      {/* Visit Our Office Section */}
      <section className="relative pt-20 pb-20 bg-[#f9fcfd]">
        <img 
          src={cloudOpen}
          alt="Cloud decoration" 
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}}
        />
        <div className="container mx-auto px-8 md:px-14 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div 
              className="space-y-8"  
              onMouseEnter={playAddressAnimation}
              onMouseLeave={() => setIsAddressHovered(false)}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Visit Our <span className='text-[#036e8d] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>Office!</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Experience the IIHH community in person. Our doors are open for you to visit, ask questions, and see how we’re shaping the next generation with compassion and creativity. Schedule an appointment or drop by during business hours.
                </p>
                <div className="flex items-center gap-2">
                  <div className="max-w-16 max-h-16 p-2 rounded-full bg-[#d2a763] flex items-center justify-center">
                    <Lottie
                      lottieRef={addressLottieRef}
                      animationData={location}
                      loop={false}
                      autoplay={false}
                      style={{ width: 40, height: 40}}
                    />
                  </div>
                  <div>
                    <span className="text-[#d2a763] font-bold">Address</span>
                    <p className="text-gray-800 font-bold text-sm">456 Hainesh Street San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Hours Card */}
            <WorkingHours/>
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-14 max-w-8xl">
          <div className="py-8 px-1">
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">Our Location</h2>
              <h3 className="font-bold text-gray-800 mb-2">International Institute of Horizon Humanism</h3>
              <p className="text-gray-600 text-sm leading solving-relaxed">
                Our office is conveniently located in Coimbatore. Feel free to visit us during business hours or schedule an appointment.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8188449153563!2d76.9914145735771!3d11.05220485404936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85856582a506f%3A0x93184a31dbc78579!2sBonfring%20Technology%20Solutions!5e0!3m2!1sen!2sin!4v1748927450366!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default visitOurOffice
