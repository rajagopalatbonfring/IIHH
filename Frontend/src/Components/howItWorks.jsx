// import React from 'react';
// import "../App.css";
// import { Link } from "react-router-dom";

// function HowItWorks() {
//   return (
//     <div className="min-h-screen bg-white ">
//       <main className="pt-20 min-h-screen">
//       <section 
//           id="hero" 
//           className="h-[600px] bg-cover bg-center relative flex items-center" 
//           style={{ backgroundImage: 'url(https://storage.googleapis.com/uxpilot-auth.appspot.com/94da3bce72-2c360a3e59e34be9feb3.png)' }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80"></div>

//           <div className="container mx-auto px-6 relative z-10">
//             <div className="max-w-2xl text-white">
//               <h1 className="text-5xl font-bold leading-tight mb-6">
//                 How It Works – A Fun & Easy Way to Learn!
//               </h1>
//               <p className="text-xl mb-8">
//                 Join our exciting after-school program where learning meets fun! Watch your child grow, explore, and discover their potential.
//               </p>
//               <Link 
//                 className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors"
//                 to="/programs"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//       </section>

//       <section id="process" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Learning Journey</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div id="step-1" className="bg-blue-50 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
//                 <i className="fa-solid fa-user-plus text-2xl text-white"></i>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Sign Up</h3>
//               <p className="text-gray-600">Simple registration process for parents to enroll their children.</p>
//             </div>
//             <div id="step-2" className="bg-purple-50 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
//                 <i className="fa-solid fa-list-check text-2xl text-white"></i>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Choose a Program</h3>
//               <p className="text-gray-600">Select from our variety of engaging educational programs.</p>
//             </div>
//             <div id="step-3" className="bg-green-50 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
//                 <i className="fa-solid fa-users-rectangle text-2xl text-white"></i>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Join Fun Sessions</h3>
//               <p className="text-gray-600">Participate in interactive and engaging learning sessions.</p>
//             </div>
//             <div id="step-4" className="bg-orange-50 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
//               <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
//                 <i className="fa-solid fa-chart-line text-2xl text-white"></i>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">Learn & Grow</h3>
//               <p className="text-gray-600">Watch your child develop new skills and confidence.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="activities" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Experience Learning in Action</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div id="activity-1" className="rounded-xl overflow-hidden shadow-lg">
//               <img 
//                 className="w-full h-64 object-cover" 
//                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/82490b4b46-3069e169415faa93f34d.png" 
//                 alt="kids doing science experiments in classroom, candid photography" 
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-bold mb-2">Science Exploration</h3>
//                 <p className="text-gray-600">Hands-on experiments that make learning fun</p>
//               </div>
//             </div>
//             <div id="activity-2" className="rounded-xl overflow-hidden shadow-lg">
//               <img 
//                 className="w-full h-64 object-cover" 
//                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00bfa688de-7bcf72179a6e6a2ac002.png" 
//                 alt="children coding on computers in modern classroom, educational setting" 
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-bold mb-2">Coding Adventures</h3>
//                 <p className="text-gray-600">Learning technology through creative projects</p>
//               </div>
//             </div>
//             <div id="activity-3" className="rounded-xl overflow-hidden shadow-lg">
//               <img 
//                 className="w-full h-64 object-cover" 
//                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6b6dc7db20-3c48f33b601a491c7b69.png" 
//                 alt="kids working on art projects together, colorful classroom setting" 
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-bold mb-2">Creative Arts</h3>
//                 <p className="text-gray-600">Expressing creativity through various mediums</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="benefits" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Why Our Program Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div id="benefit-1" className="text-center">
//               <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
//                 <i className="fa-solid fa-hands-holding text-3xl text-blue-500"></i>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Hands-on Learning</h3>
//               <p className="text-gray-600">Interactive activities that engage and inspire curiosity</p>
//             </div>
//             <div id="benefit-2" className="text-center">
//               <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
//                 <i className="fa-solid fa-lightbulb text-3xl text-purple-500"></i>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Real-World Skills</h3>
//               <p className="text-gray-600">Practical knowledge applicable to everyday life</p>
//             </div>
//             <div id="benefit-3" className="text-center">
//               <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
//                 <i className="fa-solid fa-user-graduate text-3xl text-green-500"></i>
//               </div>
//               <h3 className="text-xl font-bold mb-4">Personalized Attention</h3>
//               <p className="text-gray-600">Individual guidance for optimal learning outcomes</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       </main>
//     </div>
//   );
// }

// export default HowItWorks;











import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 min-h-screen">
      <section 
      id="hero" 
      className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/34/bc/39/34bc390c998681aac71ee47d64589c22.jpg)' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-indigo-600/70 to-pink-500/60 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            How It Works – <span className="block md:inline">Transformative Humanistic Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Discover a one-year journey that blends humanism, life skills, and personal growth for students, educators, and professionals.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/programs" 
              className="relative bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
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
        <section id="intro" className="py-2 relative z-10 bg-white pb-16">
          <div className="mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center my-8 py-12">
              <h4 className="text-purple-600 font-semibold tracking-wider mb-4 uppercase">Our Approach</h4>
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Your Journey to <br/> <span className="relative">
              <span className="relative z-10 text-purple-600">Humanistic Core</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
            </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At IIHH, we guide you through a transformative one-year program that integrates humanism, emotional intelligence, and practical skills, empowering you to become a resilient, ethical leader in a global society.
              </p>
            </div>
          </div>
        </section>

        <section id="process" className="bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Your Learning Journey with IIHH</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div id="step-1" className="bg-blue-50 rounded-xl p-6 transform shadow-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-user-plus text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Enroll</h3>
                <p className="text-gray-600">Easy registration for students, educators, or professionals to join our program.</p>
              </div>
              <div id="step-2" className="bg-purple-50 rounded-xl p-6 transform shadow-lg">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-list-check text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Explore Modules</h3>
                <p className="text-gray-600">Dive into our 10-module curriculum tailored for holistic growth.</p>
              </div>
              <div id="step-3" className="bg-green-50 rounded-xl p-6 transform shadow-lg">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-users-rectangle text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Engage Actively</h3>
                <p className="text-gray-600">Participate in interactive sessions and real-world activities.</p>
              </div>
              <div id="step-4" className="bg-orange-50 rounded-xl p-6 transform shadow-lg">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fa-solid fa-chart-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Thrive & Lead</h3>
                <p className="text-gray-600">Develop resilience, empathy, and leadership for life.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Experience Our Humanistic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div id="activity-1" className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  className="w-full h-64 object-cover" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/82490b4b46-3069e169415faa93f34d.png" 
                  alt="learners practicing mindfulness in a serene setting, candid photography" 
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">Mindfulness & Self-Awareness</h3>
                  <p className="text-gray-600">Activities to foster emotional intelligence and resilience</p>
                </div>
              </div>
              <div id="activity-2" className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  className="w-full h-64 object-cover" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00bfa688de-7bcf72179a6e6a2ac002.png" 
                  alt="participants collaborating on a community project, educational setting" 
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                  <p className="text-gray-600">Hands-on projects for social responsibility</p>
                </div>
              </div>
              <div id="activity-3" className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  className="w-full h-64 object-cover" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6b6dc7db20-3c48f33b601a491c7b69.png" 
                  alt="group solving real-world problems in a workshop, colorful setting" 
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">Critical Thinking Workshops</h3>
                  <p className="text-gray-600">Interactive challenges to boost problem-solving</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Why IIHH Stands Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div id="benefit-1" className="text-center">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-hands-holding text-3xl text-blue-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Holistic Development</h3>
                <p className="text-gray-600">Nurturing mental, emotional, and social well-being</p>
              </div>
              <div id="benefit-2" className="text-center">
                <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-lightbulb text-3xl text-purple-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Ethical Leadership</h3>
                <p className="text-gray-600">Building compassionate and responsible leaders</p>
              </div>
              <div id="benefit-3" className="text-center">
                <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-globe text-3xl text-green-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Global Perspective</h3>
                <p className="text-gray-600">Fostering cultural intelligence and inclusivity</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HowItWorks;