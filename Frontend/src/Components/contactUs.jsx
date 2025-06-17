import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import { toast, ToastContainer } from 'react-toastify';
import { ChevronDown } from "lucide-react";
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import heroImg from '../assets/contact-us-pg-hero.jpg';
import ctaImgContact from '../assets/contactCtaImg.jpg';

import cloudOpen from '../assets/Group 33.png';
import cloudClose from '../assets/closeCloud.png';

import email from '../assets/lottie/Mail.json'; 
import phone from '../assets/lottie/phone.json'; 
import location from '../assets/lottie/Location.json';

function ContactUs() {

  // State to track hover for each card
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [isAddressHovered, setIsAddressHovered] = useState(false);

  // Refs to control Lottie animations
  const emailLottieRef = useRef(null);
  const phoneLottieRef = useRef(null);
  const addressLottieRef = useRef(null);

  // Functions to restart animations on hover
  const playEmailAnimation = () => {
    setIsEmailHovered(true);
    if (emailLottieRef.current) {
      emailLottieRef.current.goToAndPlay(0); // Start from first frame
    }
  };

  const playPhoneAnimation = () => {
    setIsPhoneHovered(true);
    if (phoneLottieRef.current) {
      phoneLottieRef.current.goToAndPlay(0); // Start from first frame
    }
  };

  const playAddressAnimation = () => {
    setIsAddressHovered(true);
    if (addressLottieRef.current) {
      addressLottieRef.current.goToAndPlay(0); // Start from first frame
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

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

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "WHAT IS PERFORMANCE UNDER GROUP",
      answer: "Our institute follows the highest standards as a recognized institution with comprehensive programs designed to foster human development."
    },
    {
      question: "UNIQUE LEARNING EXPERIENCE STRUCTURE",
      answer: "We offer innovative learning methodologies that combine traditional wisdom with modern educational approaches."
    },
    {
      question: "IS THERE AN ONLINE VERSION",
      answer: "Yes, we provide online courses and virtual learning opportunities for remote students worldwide."
    },
    {
      question: "IS THERE ANY KIT AVAILABLE IN PARTS",
      answer: "We offer comprehensive learning kits that can be accessed in modular parts based on your learning pace."
    },
    {
      question: "WHICH SPECIFIC TRAINING ARE AVAILABLE",
      answer: "We provide specialized training programs in various areas of humanistic studies and personal development."
    },
    {
      question: "IS THERE ANY KIT AVAILABLE IN PARTS",
      answer: "Yes, our educational materials are available in segmented modules for flexible learning experiences."
    },
    {
      question: "WHAT IS PERFORMANCE UNDER GROUP",
      answer: "Group performance metrics are evaluated through comprehensive assessment methods and peer collaboration."
    }
  ];

  return (
    <main className="pt-20 min-h-screen font-comic text-base-content bg-[#f9fcfd] overflow-hidden">
      <section
        id="hero"
        className="relative h-auto min-h-[500px] md:min-h-[600px] 2xl:h-[800px] py-20 bg-cover bg-top flex items-center bg-[#223668]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="container mx-auto px-8 md:px-14 relative z-10 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#ffd278] mb-6 leading-tight tracking-tight drop-shadow-lg">
              Connect with IIHH
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Reach out to begin your journey with the International Institute of Horizon Humanism. Whether you’re a parent, student, or educator, we’re here to answer your questions about our transformative, humanistic education and guide you every step of the way.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#025a75] hover:shadow-xl transition-all duration-300 shadow-lg group text-base"
            >
              Get in Touch
              <svg
                className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Decorative Wave */}
        <svg
          className="absolute bottom-0"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#d2a763', width: '148%', height: 90, transform: 'rotate(180deg)' }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
            style={{ fill: '#ffffff' }}
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
            style={{ fill: '#ffffff' }}
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
        <div className='absolute -bottom-0.5 bg-[#d2a763] w-full h-1'></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#d2a763]" id="contact-form">
        <div className="container relative mx-auto px-8 md:px-14 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h4 className="text-gray-800 font-semibold tracking-wider mb-3 text-sm uppercase">CONTACT</h4>
                <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-6 leading-tight">
                  Get In <span className='text-[#036e8d] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>Touch</span>
                </h1>
                <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700">
                  At IIHH, we believe every question is the start of a new horizon. Whether you want to know more about our signature modules, our hands-on activities, or how your child can benefit from our humanistic approach, our team is ready to help. Fill out the form, call, or email us—we look forward to connecting with you!
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Email Card */}
                <div
                  className="relative flex-col items-center"
                >
                  <div 
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 py-4 hover:shadow-xl transition-shadow duration-300"
                    onMouseEnter={playEmailAnimation}
                    onMouseLeave={() => setIsEmailHovered(false)}
                  >
                    <div>
                      <div className="w-12 h-12 flex items-center justify-center transform -translate-x-1">
                        <Lottie
                          lottieRef={emailLottieRef}
                          animationData={email}
                          loop={false}
                          isPaused={!isEmailHovered}
                          autoplay={false}
                          style={{ width: 48, height: 48,}}
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 text-base mb-1">Email</h3>
                    </div>
                    <p className="text-[#036e8d] text-sm font-medium">contact@iihh.org</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div
                  className="relative flex-col items-center"
                >
                  <div 
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 py-4 hover:shadow-xl transition-shadow duration-300"
                    onMouseEnter={playPhoneAnimation}
                    onMouseLeave={() => setIsPhoneHovered(false)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center transform">
                      <Lottie
                        lottieRef={phoneLottieRef}
                        animationData={phone}
                        loop={false}
                        isPaused={!isPhoneHovered}
                        autoplay={false}
                        style={{ width: 48, height: 48 }}
                      />
                    </div>
                    <h3 className="font-bold text-gray-800 text-base mb-1">Phone</h3>
                    <p className="text-[#036e8d] text-sm font-medium">(855) 100-4444</p>
                  </div>
                </div>

                {/* Address Card */}
                <div
                  className="relative flex-col items-center"
                >
                  <div 
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 py-4 hover:shadow-xl transition-shadow duration-300"
                    onMouseEnter={playAddressAnimation}
                    onMouseLeave={() => setIsAddressHovered(false)}
                  >
                    <div className="w-12 h-12 flex items-center justify-center transform translate-x-0.5">
                      <Lottie
                        lottieRef={addressLottieRef}
                        animationData={location}
                        loop={false}
                        isPaused={!isAddressHovered}
                        autoplay={false}
                        style={{ width: 48, height: 48 }}
                      />
                    </div>
                    <h3 className="font-bold text-gray-800 text-base mb-1">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      456 Hainesh Street<br />San Francisco, CA 94102
                    </p>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 transition-all duration-300 bg-[#f8f9fa] text-sm"
                  placeholder="Your Name"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 transition-all duration-300 bg-[#f8f9fa] text-sm"
                  placeholder="Your Email"
                  required
                />
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 transition-all duration-300 bg-[#f8f9fa] text-sm"
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] h-24 transition-all duration-300 resize-none text-gray-700 bg-[#f8f9fa] text-sm"
                  placeholder="Message"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#d2a763] text-white px-6 py-2 rounded-full font-semibold tracking-wider hover:bg-[#c19653] hover:shadow-xl transition-all duration-300 flex items-center justify-center text-sm"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                  ) : (
                    'SUBMIT'
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Visit Our Office Section */}
      <section className="relative pt-20 bg-[#f9fcfd]">
        <img 
          src={cloudOpen}
          alt="Cloud decoration" 
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}}
        />
        <div className="container mx-auto px-8 md:px-14 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Visit Our <span className='text-[#036e8d] relative inline-block transform hover:scale-x-105 transition-transform duration-300'>Office!</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Experience the IIHH community in person. Our doors are open for you to visit, ask questions, and see how we’re shaping the next generation with compassion and creativity. Schedule an appointment or drop by during business hours.
                </p>
                <button className="bg-[#d2a763] text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:bg-[#c19653] hover:shadow-xl transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Right Side - Hours Card */}
            <div className="bg-[#223668] rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Monday - Friday</h3>
                  <p className="text-white/80">9am - 8pm</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Saturdays</h4>
                    <p className="text-white/80 text-sm">9am - 6pm</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Sundays</h4>
                    <p className="text-white/80 text-sm">9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-14 max-w-7xl">
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

      {/* FAQ Section */}
      <section className="py-16 bg-[#f9fcfd]">
        <div className="container mx-auto px-8 md:px-14 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">Frequently Asked <span className="text-[#036e8d] transform inline-block hover:scale-x-105 duration-300">Questions</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore answers to common questions about IIHH’s programs, learning structure, and unique approach. If you don’t find what you’re looking for, don’t hesitate to contact us directly.
            </p>
          </div>
            {/* Left Side - FAQ */}
            <div>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-gray-800 text-sm">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-[#d2a763] transition-transform duration-200 ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Bottom CTA Section */}
      <section
        id="cta"
        className='relative h-80 bg-[#036e8d]' 
      >
        <img 
          src={cloudClose}           
          alt="Cloud decoration" 
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}} 
        /> 
      </section>

      {/* CTA Section Img*/}
      <section 
        className="relative py-16 bg-[#d2a763] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage:`url(${ctaImgContact})` }}
      >
        <div className="container mx-auto px-8 md:px-14 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of the IIHH Journey.<br />
            <span className='text-[#d2a763]'>Empower. Inspire. Transform.</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mt-4 mb-8">
            Whether you’re a parent, student, educator, or advocate for humanistic education, your involvement helps shape the future. Connect with us to join IIHH, support our mission, or learn how you can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <p className="text-white/80">
              <span className="font-semibold">Email:</span> contact@iihh.org
            </p>
            <p className="text-white/80">
              <span className="font-semibold">Call:</span> (855) 100-4444
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-[#d2a763] text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:bg-[#c19653] hover:shadow-xl transition-all duration-300">
              Join IIHH
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:bg-white hover:text-[#223668] transition-all duration-300">
              Download Program Guide
            </button>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}

export default ContactUs;