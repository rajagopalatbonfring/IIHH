// import React from "react";
// import { Link } from "react-router-dom";

// const steps = [
//   {
//     icon: "fa-user-plus",
//     title: "Enroll",
//     desc: "Sign up and join a community dedicated to humanistic growth.",
//   },
//   {
//     icon: "fa-book-open-reader",
//     title: "Explore Modules",
//     desc: "Dive into transformative modules blending values, skills, and real-world learning.",
//   },
//   {
//     icon: "fa-people-group",
//     title: "Engage Actively",
//     desc: "Participate in workshops, projects, and reflection sessions guided by mentors.",
//   },
//   {
//     icon: "fa-seedling",
//     title: "Thrive & Lead",
//     desc: "Apply your learning to real life, build your portfolio, and become a compassionate leader.",
//   },
// ];

// const activities = [
//   {
//     title: "Mindfulness & Reflection",
//     desc: "Daily practices to nurture self-awareness and emotional balance.",
//   },
//   {
//     title: "Community Engagement",
//     desc: "Service projects that foster empathy and social responsibility.",
//   },
//   {
//     title: "Critical Thinking Labs",
//     desc: "Interactive sessions to develop problem-solving and ethical reasoning.",
//   },
// ];

// const benefits = [
//   {
//     icon: "fa-heart-pulse",
//     title: "Holistic Growth",
//     desc: "Balanced development of mind, body, and character.",
//   },
//   {
//     icon: "fa-lightbulb",
//     title: "Ethical Leadership",
//     desc: "Lead with compassion, purpose, and responsibility.",
//   },
//   {
//     icon: "fa-globe",
//     title: "Global Perspective",
//     desc: "Embrace diversity and make a positive impact.",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <main className="bg-[#f9fcfd]">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-[#036e8d]/80 to-[#d2a763]/80 flex flex-col items-center justify-center text-center overflow-hidden">
//         <img
//           src='url(https://i.pinimg.com/736x/34/bc/39/34bc390c998681aac71ee47d64589c22.jpg)'
//           alt="How IIHH Works"
//           className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl object-cover mb-10"
//         />
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
//           How <span className="text-[#ffd278]">IIHH</span> Works
//         </h1>
//         <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
//           Discover our unique approach to afterschool humanistic learning—where values, skills, and real-world experiences come together for lasting growth.
//         </p>
//         <Link
//           to="/apply"
//           className="inline-block bg-[#ffd278] text-[#036e8d] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white transition"
//         >
//           Start Your Journey
//         </Link>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 bg-[#f9fcfd]">
//         <div className="container mx-auto px-6 text-center max-w-3xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#036e8d] mb-4">
//             Our Approach
//           </h2>
//           <p className="text-gray-700 text-lg">
//             IIHH reimagines afterschool education by blending humanistic values, experiential learning, and mentorship. Our program empowers students, educators, and professionals to grow as compassionate, confident, and purpose-driven individuals.
//           </p>
//         </div>
//       </section>

//       {/* 4-Step Journey */}
//       <section className="py-16 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-[#036e8d] mb-12">
//             Your IIHH Journey in 4 Steps
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform"
//               >
//                 <div className="w-16 h-16 bg-[#036e8d]/10 flex items-center justify-center rounded-full mb-4">
//                   <i className={`fa-solid ${step.icon} text-3xl text-[#036e8d]`}></i>
//                 </div>
//                 <h3 className="font-bold text-lg text-[#036e8d] mb-2">{step.title}</h3>
//                 <p className="text-gray-700 text-sm">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What to Expect */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6 text-center max-w-3xl">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#d2a763] mb-4">
//             What to Expect
//           </h2>
//           <p className="text-gray-700 text-lg mb-6">
//             Experience a dynamic week: workshops, collaborative projects, personal reflection, and community engagement—making every day meaningful and energizing.
//           </p>
//         </div>
//       </section>

//       {/* Signature Activities */}
//       <section className="py-16 bg-gradient-to-r from-[#036e8d]/10 to-[#d2a763]/10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-[#036e8d] mb-12">
//             Signature Activities
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {activities.map((act, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col hover:scale-105 transition-transform"
//               >
//                 <img
//                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00bfa688de-7bcf72179a6e6a2ac002.png" 
//                   alt=""
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-[#036e8d] mb-2">{act.title}</h3>
//                   <p className="text-gray-700 text-sm">{act.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mentorship & Support */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6 text-center max-w-2xl">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#036e8d] mb-4">
//             Mentorship & Support
//           </h2>
//           <p className="text-gray-700 text-lg">
//             Every learner is paired with a dedicated mentor and supported by a caring community, ensuring guidance and encouragement at every step.
//           </p>
//         </div>
//       </section>

//       {/* Program Benefits */}
//       <section className="py-16 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-[#d2a763] mb-12">
//             Program Benefits
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {benefits.map((benefit, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform"
//               >
//                 <div className="w-16 h-16 bg-[#d2a763]/10 flex items-center justify-center rounded-full mb-4">
//                   <i className={`fa-solid ${benefit.icon} text-3xl text-[#d2a763]`}></i>
//                 </div>
//                 <h3 className="font-bold text-lg text-[#d2a763] mb-2">{benefit.title}</h3>
//                 <p className="text-gray-700 text-sm">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Growth & Assessment */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6 text-center max-w-2xl">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#036e8d] mb-4">
//             Growth & Assessment
//           </h2>
//           <p className="text-gray-700 text-lg">
//             Progress is celebrated through personal portfolios, presentations, and real-world projects—valuing growth over grades.
//           </p>
//         </div>
//       </section>

//       {/* Who Is It For */}
//       <section className="py-16 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10">
//         <div className="container mx-auto px-6 text-center max-w-2xl">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#d2a763] mb-4">
//             Who Is It For?
//           </h2>
//           <p className="text-gray-700 text-lg">
//             Ideal for students, educators, and professionals seeking purpose-driven, humanistic learning beyond the classroom.
//           </p>
//         </div>
//       </section>

//       {/* FAQ / Still Curious? */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6 text-center max-w-2xl">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#036e8d] mb-4">
//             Still Curious?
//           </h2>
//           <p className="text-gray-700 text-lg mb-6">
//             Visit our <Link to="/faq" className="text-[#d2a763] underline">FAQ</Link> or <Link to="/contact" className="text-[#d2a763] underline">contact us</Link> for more information.
//           </p>
//           <Link
//             to="/apply"
//             className="inline-block bg-[#036e8d] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#d2a763] hover:text-[#036e8d] transition"
//           >
//             Apply Now
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }


export default function ProgramSection() {
  return (
    <section className="py-20 pt-40 bg-[#036e8d] relative overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-14 relative z-10">

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="relative">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 mb-8">
                <span className="text-[#d2a763] font-bold text-2xl">"</span>
                IIHH's comprehensive one-year program is built on ten transformative modules—each crafted to nurture self-awareness, resilience, and a global perspective. Discover an education that empowers you to thrive in every aspect of life.
                <span className="text-[#d2a763] font-bold text-2xl">"</span>
              </p>
              
              {/* Accent Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#d2a763] rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full"></div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-8">
              {['Self-Awareness', 'Global Mindset', 'Leadership Skills', 'Creative Thinking'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#d2a763]"></div>
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#d2a763] text-[#036e8d] font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#036e8d] transition-all duration-300 shadow-lg">
              Explore Our Modules
            </button>
          </div>

          {/* Right: Image Section */}
          <div className="flex-shrink-0 relative">
            <div className="relative group">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-6 bg-white/5 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-white/30 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"></div>
              
              {/* Main Image */}
              <img 
                src="../src/assets/aboutusintroImg.jpg" 
                alt="Students collaborating and learning together"
                className="relative w-80 h-60 lg:w-96 lg:h-72 object-cover rounded-3xl shadow-2xl border-4 border-white/20 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#d2a763] rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-white font-bold text-lg">2025</div>
              </div>
              
              {/* Stats Card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#036e8d]">10</div>
                  <div className="text-sm text-gray-600">Modules</div>
                </div>
              </div>
              
              {/* Accent Lines */}
              <div className="absolute top-4 left-4 w-8 h-1 bg-white/60 rounded-full"></div>
              <div className="absolute top-7 left-4 w-12 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
