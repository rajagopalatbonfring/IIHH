import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { PhoneCall } from "lucide-react";
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import heroImg from '../assets/contact-us-pg-hero.jpg';

function ContactUs() {
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
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (err) {
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20 min-h-screen font-comic text-base-content bg-[#f9fcfd]">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-top overflow-hidden flex items-center bg-[#223668]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="container mx-auto px-8 md:px-14 relative z-10 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#ffd278] mb-6 leading-tight tracking-tight drop-shadow-lg">
              Connect with IIHH
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Reach out to start your journey with the International Institute of Horizon Humanism. We’re here to answer your questions and guide you every step of the way.
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
          style={{ fill: '#f9fcfd', width: '148%', height: 87, transform: 'rotate(180deg)' }}
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
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="relative pb-24">
        <div className="container mx-auto px-8 md:px-14 relative z-10 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-24">
            <h4 className="text-[#036e8d] font-semibold tracking-wider mb-3">GET IN TOUCH</h4>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We’re here to answer your questions and help you embark on your humanistic journey. Reach out to us for more information about our programs or to schedule a visit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Contact Form and Details */}
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      name="name"
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 transition-all duration-300"
                      placeholder="Your Name*"
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 transition-all duration-300"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] text-gray-700 transition-all duration-300"
                    placeholder="Subject*"
                    required
                  />
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#036e8d] h-32 transition-all duration-300 resize-none text-gray-700"
                    placeholder="Your Message*"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#036e8d] text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:bg-[#025a75] hover:shadow-xl transition-all duration-300 flex items-center justify-center min-w-[120px]"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loader border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
                    ) : (
                      'SUBMIT'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#036e8d] rounded-full flex items-center justify-center">
                      <PhoneCall className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">CALL US NOW</h3>
                      <p className="text-gray-600 text-sm">+108-885-0212</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#036e8d] rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-envelope text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">EMAIL</h3>
                      <p className="text-gray-600 text-sm">contact@iihh.org</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#036e8d] rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-fax text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wider">FAX</h3>
                      <p className="text-gray-600 text-sm">(48) 12 3456 9870</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wider mb-2">ADDRESS</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      456 Horizon Avenue, Humanism City, HC 67890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Google Maps Location */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
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
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Bonfring Technology Solutions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our office is conveniently located in Coimbatore. Feel free to visit us during business hours or schedule an appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}

export default ContactUs;