// import React from 'react';
// import "../App.css";

// function ContactUs() {
//   return (
//     <main className="pt-20">
//       <section id="contact-hero" className="bg-gradient-to-r from-blue-50 to-purple-300 h-[400px] flex items-center">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact IIHH – Let’s Connect!</h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">Have questions about our humanistic education program? We’re here to support students, educators, and professionals on their journey.</p>
//         </div>
//       </section>

//       <section id="contact-main" className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-lg">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
//               <form>
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-gray-700 mb-2" htmlFor="full-name">Full Name</label>
//                     <input type="text" id="full-name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Enter your name" />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
//                     <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Enter your email" />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
//                     <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="What is this about?" />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
//                     <textarea id="message" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32" placeholder="Your message here..."></textarea>
//                   </div>
//                   <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">Send Message</button>
//                 </div>
//               </form>
//             </div>

//             <div id="contact-info" className="space-y-8">
//               <div className="bg-white p-8 rounded-2xl shadow-lg">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Reach Out to IIHH</h2>
//                 <div className="bg-gray-100 rounded-xl h-64 mb-6">
//                   <img className="w-full h-full object-cover rounded-xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ced713da7b-8d06baa7578bf161fe98.png" alt="Map showing IIHH location" />
//                 </div>
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-4">
//                     <i className="fa-solid fa-location-dot text-blue-500 text-xl"></i>
//                     <p className="text-gray-600">456 Horizon Avenue, Humanism City, HC 67890</p>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <i className="fa-solid fa-phone text-blue-500 text-xl"></i>
//                     <p className="text-gray-600">(555) 987-6543</p>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <i className="fa-solid fa-envelope text-blue-500 text-xl"></i>
//                     <p className="text-gray-600">contact@iihh.org</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-8 rounded-2xl shadow-lg">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow IIHH</h2>
//                 <div className="flex space-x-6">
//                   <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
//                     <i className="fa-brands fa-facebook text-3xl"></i>
//                   </a>
//                   <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
//                     <i className="fa-brands fa-instagram text-3xl"></i>
//                   </a>
//                   <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
//                     <i className="fa-brands fa-linkedin text-3xl"></i>
//                   </a>
//                   <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
//                     <i className="fa-brands fa-youtube text-3xl"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="faqs" className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
//           <div className="max-w-3xl mx-auto space-y-4">
//           {[
//                       {
//                         question: "Who can enroll in IIHH programs?",
//                         answer: "Our programs are designed for diverse audiences including students (K-12 and college), educators, professionals, and lifelong learners. We have specialized tracks for different age groups and experience levels."
//                       },
//                       {
//                         question: "How are courses delivered?",
//                         answer: "We offer flexible learning formats including in-person workshops, online courses, blended learning programs, and intensive retreats. All formats emphasize experiential learning and practical application."
//                       },
//                       {
//                         question: "Are there scholarships available?",
//                         answer: "Yes! We're committed to making humanistic education accessible. We offer need-based scholarships, community grants, and payment plans. Contact our admissions office to learn more."
//                       },
//                       {
//                         question: "How do I measure progress in these programs?",
//                         answer: "Our programs include comprehensive assessments including self-reflection tools, practical application projects, peer feedback, and mentorship opportunities. Progress is measured against personal growth goals."
//                       }
//                     ].map((item, index) => (
//                       <div key={index} className="mb-6 bg-white rounded-xl shadow-md overflow-hidden">
//                         <details className="group">
//                           <summary className="flex justify-between items-center p-6 cursor-pointer">
//                             <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
//                             <span className="transform group-open:rotate-180 transition-transform duration-200">
//                               <i className="fa-solid fa-chevron-down text-purple-600"></i>
//                             </span>
//                           </summary>
//                           <div className="px-6 pb-6 text-gray-600">
//                             <p>{item.answer}</p>
//                           </div>
//                         </details>
//                       </div>
//                     ))}
//           </div>
//         </div>
//       </section>


//     </main>
//   );
// }

// export default ContactUs;






import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";

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

      console.log(response);

  
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
    <main className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section 
      id="contact-hero" 
      className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-indigo-600/70 to-pink-500/60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Contact IIHH – <span className="block md:inline">Let’s Connect!</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Have questions about our humanistic education program? We’re here to support students, educators, and professionals on their journey.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
        <a href="#intro" className="text-white">
          <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
        </a>
      </div>

      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-48 h-48 bg-purple-400/20 rounded-full absolute top-10 left-10 animate-pulse"></div>
        <div className="w-64 h-64 bg-indigo-400/20 rounded-full absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
    </section>

      {/* New Intro Section */}
      <section id="intro" className="py-24 relative z-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-purple-600 font-semibold tracking-wider mb-4 uppercase">Get in Touch</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              We’re Here to <span className="relative">
                <span className="relative z-10 text-purple-600">Support You</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you’re curious about our programs, need assistance, or want to collaborate, our team is ready to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Main Section */}
      <section id="contact-main" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div id="contact-form" className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">Full Name</label>
                    <input 
                      name="name" 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" 
                      placeholder="Enter your name" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">Email Address</label>
                    <input 
                      name="email" 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" 
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="subject">Subject</label>
                    <input 
                      name="subject" 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200" 
                      placeholder="What is this about?" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">Message</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 transition-all duration-200" 
                      placeholder="Your message here..." 
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold flex justify-center items-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loader border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div id="contact-info" className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Reach Out to IIHH</h2>
                <div className="bg-gray-100 rounded-xl h-64 mb-6 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ced713da7b-8d06baa7578bf161fe98.png" 
                    alt="Map showing IIHH location" 
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-location-dot text-purple-600 text-xl"></i>
                    <p className="text-gray-600">456 Horizon Avenue, Humanism City, HC 67890</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-phone text-purple-600 text-xl"></i>
                    <p className="text-gray-600">(555) 987-6543</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-envelope text-purple-600 text-xl"></i>
                    <p className="text-gray-600">contact@iihh.org</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow IIHH</h2>
                <div className="flex space-x-6 justify-start">
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <i className="fa-brands fa-facebook text-3xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <i className="fa-brands fa-instagram text-3xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <i className="fa-brands fa-linkedin text-3xl"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    <i className="fa-brands fa-youtube text-3xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-12">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Who can enroll in IIHH programs?",
                answer: "Our programs are designed for diverse audiences including students (K-12 and college), educators, professionals, and lifelong learners. We have specialized tracks for different age groups and experience levels."
              },
              {
                question: "How are courses delivered?",
                answer: "We offer flexible learning formats including in-person workshops, online courses, blended learning programs, and intensive retreats. All formats emphasize experiential learning and practical application."
              },
              {
                question: "Are there scholarships available?",
                answer: "Yes! We're committed to making humanistic education accessible. We offer need-based scholarships, community grants, and payment plans. Contact our admissions office to learn more."
              },
              {
                question: "How do I measure progress in these programs?",
                answer: "Our programs include comprehensive assessments including self-reflection tools, practical application projects, peer feedback, and mentorship opportunities. Progress is measured against personal growth goals."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer group-hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
                    <span className="transform group-open:rotate-180 transition-transform duration-200">
                      <i className="fa-solid fa-chevron-down text-purple-600"></i>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 bg-gray-50">
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}

export default ContactUs;