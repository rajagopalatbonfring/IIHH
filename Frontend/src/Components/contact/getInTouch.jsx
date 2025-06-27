import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';

import email from '../../assets/lottie/Mail.json'; 
import phone from '../../assets/lottie/phone.json'; 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getInTouch = () => {

  
  // State to track hover for each card
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);


  // Refs to control Lottie animations
  const emailLottieRef = useRef(null);
  const phoneLottieRef = useRef(null);


  // Functions to restart animations on hover
  const playEmailAnimation = () => {
    setIsEmailHovered(true);
    if (emailLottieRef.current) {
      emailLottieRef.current.goToAndPlay(0); 
    }
  };

  const playPhoneAnimation = () => {
    setIsPhoneHovered(true);
    if (phoneLottieRef.current) {
      phoneLottieRef.current.goToAndPlay(0); // Start from first frame
    }
  };



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <section className="py-16 lg:pb-40 bg-[#d2a763]" id="contact-form">
        <div className="container relative mx-auto px-8 md:px-14 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h4 className="text-gray-800 font-semibold tracking-wider mb-3 text-sm uppercase">CONTACT</h4>
                <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-6 leading-tight">
                  Get In <span className='text-[#036e8d] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>Touch</span>
                </h1>
                <div className='bg-white backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700'>
                  <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl hover:shadow-sm transition-all duration-300">
                      At IIHH, every question opens new possibilities.
                      Want to learn more about our modules or activities?
                      Contact us—our team is here to help!
                  </p>
                  <div className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-4 mb-4 mt-4">
                    
                    <div 
                      className="flex items-center"
                      onMouseEnter={playEmailAnimation}
                      onMouseLeave={() => setIsEmailHovered(false)}
                    >
                      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <Lottie
                          lottieRef={emailLottieRef}
                          animationData={email}
                          loop={false}
                          autoplay={false}
                          style={{ width: 40, height: 40,}}
                        />
                      </div>
                      <div>
                        <span className="text-[#d2a763] font-bold">Email</span>
                        <p className="text-gray-800 font-bold text-sm">contact@iihh.org</p>
                      </div>
                    </div>

                    <div 
                      className="flex items-center"
                      onMouseEnter={playPhoneAnimation}
                      onMouseLeave={() => setIsPhoneHovered(false)}
                    >
                      <div 
                        className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        <Lottie
                          lottieRef={phoneLottieRef}
                          animationData={phone}
                          loop={false}
                          autoplay={false}
                          style={{ width: 40, height: 40,}}
                        />
                      </div>
                      <div>
                        <span className="text-[#d2a763] font-bold">Phone</span>
                        <p className="text-gray-800 font-bold text-sm">(855) 100-4444</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 bg-gray-50 text-sm transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 bg-gray-50 text-sm transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 bg-gray-50 text-sm transition-all duration-300"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] h-24 text-gray-700 bg-gray-50 text-sm transition-all duration-300 resize-none"
                  placeholder="Your Message"
                  required
                />
                <button
                  type="submit"
                  className="max-w-[200px] bg-[#d2a763]/90 text-white px-6 py-2 rounded-full font-semibold tracking-wider  hover:bg-[#d2a763] hover:shadow-md transition-all duration-300 flex items-center self-end justify-center text-sm"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loader border-2 border-[#036e8d] border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                  ) : (
                    <>
                      SUBMIT
                      <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      
    </>
  )
}

export default getInTouch
