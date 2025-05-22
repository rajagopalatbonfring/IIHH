// import React from 'react';
// import "../App.css";

// function Testimonial() {
//   return (
//     <main className="pt-20">
//       <section id="hero-section" className="bg-gradient-to-r from-blue-50 to-purple-300 h-[400px] flex items-center">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Hear from Parents & Students!</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover how our after-school program has made a difference in the lives of families just like yours.</p>
//         </div>
//       </section>

//       <section id="testimonial-cards" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div id="testimonial-1" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Sarah Johnson" className="w-12 h-12 rounded-full" />
//                 <div className="ml-4">
//                   <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
//                   <p className="text-gray-500">Parent</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">"The improvement in my daughter's confidence and academic performance has been remarkable. The teachers are incredibly supportive!"</p>
//               <div className="flex text-yellow-400">
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//               </div>
//             </div>

//             <div id="testimonial-2" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Michael Chen" className="w-12 h-12 rounded-full" />
//                 <div className="ml-4">
//                   <h3 className="font-semibold text-gray-800">Michael Chen</h3>
//                   <p className="text-gray-500">Student</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">"I love coming to the after-school program! The activities are fun and I've made so many new friends here."</p>
//               <div className="flex text-yellow-400">
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//               </div>
//             </div>

//             <div id="testimonial-3" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Emily Rodriguez" className="w-12 h-12 rounded-full" />
//                 <div className="ml-4">
//                   <h3 className="font-semibold text-gray-800">Emily Rodriguez</h3>
//                   <p className="text-gray-500">Parent</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">"The program offers the perfect balance of academic support and fun activities. My son's grades have improved significantly!"</p>
//               <div className="flex text-yellow-400">
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//                 <i className="fa-solid fa-star"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="video-testimonials" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Video Testimonials</h2>
//           <div className="relative">
//             <div className="flex overflow-x-auto space-x-6 pb-8 hide-scrollbar">
//               <div id="video-1" className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden">
//                 <div className="relative h-[200px] bg-gray-200">
//                   <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/23d9e5093b-b9299bca88fb452620ef.png" alt="happy parent and child smiling at camera, testimonial video thumbnail style" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <i className="fa-solid fa-play text-4xl text-white bg-blue-500 p-4 rounded-full"></i>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-gray-800">The Thompson Family Story</h3>
//                   <p className="text-gray-500 text-sm">2:45 minutes</p>
//                 </div>
//               </div>

//               <div id="video-2" className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden">
//                 <div className="relative h-[200px] bg-gray-200">
//                   <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c0b106e172-51504b73cc1890bfccae.png" alt="student showing homework success, testimonial video thumbnail style" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <i className="fa-solid fa-play text-4xl text-white bg-blue-500 p-4 rounded-full"></i>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-gray-800">Academic Success Story</h3>
//                   <p className="text-gray-500 text-sm">3:15 minutes</p>
//                 </div>
//               </div>

//               <div id="video-3" className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden">
//                 <div className="relative h-[200px] bg-gray-200">
//                   <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cb83175e5b-4073652e503256d71df4.png" alt="group of kids learning together, testimonial video thumbnail style" />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <i className="fa-solid fa-play text-4xl text-white bg-blue-500 p-4 rounded-full"></i>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-semibold text-gray-800">Community Impact</h3>
//                   <p className="text-gray-500 text-sm">4:00 minutes</p>
//                 </div>
//               </div>
//             </div>
//             <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
//               <i className="fa-solid fa-chevron-left text-gray-600"></i>
//             </button>
//             <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
//               <i className="fa-solid fa-chevron-right text-gray-600"></i>
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Testimonial;




import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <main className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section 
      id="hero-section" 
      className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-indigo-600/70 to-pink-500/60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Voices of the <span className="block md:inline">IIHH Community</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Hear how our humanistic program has transformed lives across students, educators, and professionals.
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
          <div className="max-w-3xl mx-auto text-center mb-2">
            <h4 className="text-purple-600 font-semibold tracking-wider mb-4 uppercase">Our Impact</h4>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Real Stories of <span className="relative">
                <span className="relative z-10 text-purple-600">Transformation</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the profound impact of IIHH through the authentic experiences of our community—students, educators, and families who’ve grown with us.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">What Our Community Says</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real stories from students, educators, and parents who experienced the IIHH difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
            {[
              {
                img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
                name: "Priya Sharma",
                desc: '"IIHH has transformed how I teach, making me more empathetic and effective in the classroom."',
                role: "Educator",
                stars: 5
              },
              {
                img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
                name: "Aarav Patel",
                desc: '"The program helped me manage stress and discover my purpose—it’s been life-changing!"',
                role: "College Student",
                stars: 5
              },
              {
                img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
                name: "Neha Gupta",
                desc: '"My daughter’s confidence and problem-solving skills have soared thanks to IIHH."',
                role: "Parent of Riya, Age 12",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-6 left-4 text-5xl text-purple-200 opacity-50 group-hover:text-purple-300 transition-colors duration-300">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div className="flex items-center mb-6">
                  <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-purple-100" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-sm"></i>
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed">{testimonial.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/testimonials" className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-300">
              Load More <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section id="video-testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Video Stories from IIHH</h2>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory">
              {[
                { id: "video-1", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/23d9e5093b-b9299bca88fb452620ef.png", title: "An Educator’s Journey", duration: "3:00" },
                { id: "video-2", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c0b106e172-51504b73cc1890bfccae.png", title: "A Student’s Transformation", duration: "2:50" },
                { id: "video-3", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/cb83175e5b-4073652e503256d71df4.png", title: "A Family’s Experience", duration: "3:30" }
              ].map((video) => (
                <div key={video.id} className="min-w-[320px] bg-white rounded-xl shadow-lg overflow-hidden group snap-start hover:shadow-xl transition-all duration-300">
                  <div className="relative h-[200px]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={video.img} alt={`${video.title} thumbnail`} />

                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-semibold text-gray-800 text-lg">{video.title}</h3>
                    <p className="text-gray-500 text-sm">{video.duration} minutes</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <i className="fa-solid fa-chevron-left text-gray-600"></i>
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
              <i className="fa-solid fa-chevron-right text-gray-600"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Testimonial;