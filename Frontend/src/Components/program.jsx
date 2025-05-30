// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import "../App.css";
// import collabWorkImg from "../assets/Group work in the classroom.jpeg"

// const modules = [
//   { id: 1, title: "Foundations of Humanism", subtitle: "Core values for a balanced life", icon: "fa-seedling", color: "green" },
//   { id: 2, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
//   { id: 3, title: "Life Skills", subtitle: "Practical tools for life", icon: "fa-toolbox", color: "blue" },
//   { id: 4, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
//   { id: 5, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
//   { id: 6, title: "Self-Awareness & Emotional Intelligence", subtitle: "Master your emotions", icon: "fa-brain", color: "indigo" },
//   { id: 7, title: "Critical Thinking & Problem-Solving", subtitle: "Sharpen your mind", icon: "fa-lightbulb", color: "teal" },
//   { id: 8, title: "Humanistic Leadership", subtitle: "Lead with purpose", icon: "fa-users", color: "orange" },
//   { id: 9, title: "Financial Literacy", subtitle: "Master your finances", icon: "fa-piggy-bank", color: "pink" },
//   { id: 10, title: "Diversity, Culture & Ethics", subtitle: "Embrace inclusivity", icon: "fa-globe", color: "cyan" }
// ];

// const programDetails = {
//   duration: "1 Year",
//   format: "Hybrid (Online & In-person)",
//   startDates: ["January 15, 2026", "June 10, 2026", "September 5, 2026"],
//   tuition: "$4,800 (Scholarships available)",
//   certification: "IIHH Certificate in Humanistic Development"
// };

// const faqs = [
//   { question: "Who is this program designed for?", answer: "Our program is designed for educators, professionals, students, and anyone interested in personal growth, humanistic education, and holistic development." },
//   { question: "What is the time commitment?", answer: "The program requires approximately 10 hours per week, including coursework, practical assignments, and collaborative projects." },
//   { question: "Are there any prerequisites?", answer: "No formal prerequisites are required. We welcome individuals from diverse backgrounds with a passion for personal and professional growth." },
//   { question: "Is financial aid available?", answer: "Yes, we offer scholarships and payment plans. Please contact our admissions office for more information." }
// ];

// function Program() {
//   const [activeModule, setActiveModule] = useState(null);
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index);
//   };

//   const getColorClass = (type, color, intensity) => {
//     const colorMap = { green: "green", purple: "purple", blue: "blue", yellow: "yellow", red: "red", indigo: "indigo", teal: "teal", orange: "orange", pink: "pink", cyan: "cyan" };
//     return `${type}-${colorMap[color]}-${intensity}`;
//   };

//   return (
//     <main className="pt-20">
//     <section 
//       id="hero" 
//       className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center overflow-hidden"
//       style={{ backgroundImage: 'url(https://i.pinimg.com/736x/59/92/a8/5992a8fb95d0ed107599aa4384fc914b.jpg)' }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-indigo-600/70 to-pink-500/60 z-0"></div>

//       {/* Content */}
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-3xl text-center mx-auto">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
//             IIHH – <span className="block md:inline">International Institute of Horizon Humanism</span>
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
//             A pioneering school fostering humanism, holistic development, and life skills for students, educators, and professionals.
//           </p>
//           <div className="flex justify-center">
//             <Link 
//               to="/apply" 
//               className="relative bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
//             >
//               <span className="relative z-10">Explore Our Programs</span>
//               <span className="absolute inset-0 bg-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
//         <a href="#our-programs" className="text-white">
//           <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
//         </a>
//       </div>

//       {/* Subtle Background Enhancement */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="w-48 h-48 bg-purple-400/20 rounded-full absolute top-10 left-10 animate-pulse"></div>
//         <div className="w-64 h-64 bg-indigo-400/20 rounded-full absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
//       </div>
//     </section>

//       <section id="our-programs" className="container mx-auto px-6 relative z-10 py-20 bg-white">
//         <div className="max-w-3xl mx-auto text-center mb-4 py-2">
//           <h4 className="text-purple-600 font-semibold tracking-wider mb-4 uppercase">Our Programs</h4>
//           <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
//             Transformative Education with a <span className="relative">
//               <span className="relative z-10 text-purple-600">Humanistic Core</span>
//               <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Our one-year program integrates humanism, emotional intelligence, and practical skills to nurture self-aware, resilient, and socially responsible individuals. Explore our comprehensive learning path designed to foster holistic growth and development.
//           </p>
//         </div>
//       </section>


//     <section id="program-modules" className=" bg-gradient-to-b from-blue-50 to-gray-100 relative">
//       <div className="container mx-auto px-6">
//         <h3 className="text-3xl sm:text-3xl font-bold text-gray-800 font-bold text-center mb-20 pt-8">Program Modules</h3>
//         <div className="flex flex-col items-center relative">
//           <div className="w-1 bg-gradient-to-b from-blue-300 to-purple-500 absolute top-0 bottom-28 left-1/2 transform -translate-x-1/2 rounded-full md:block hidden"></div>
//           {modules.map((module, index) => {
//             const isActive = activeModule === index;
//             const isLeft = index % 2 === 0;
//             return (
//               <div key={module.id} className="relative w-full max-w-4xl mb-12 px-4">
//                 {/* Circle Number - Hidden on mobile */}
//                 <div className="text-center w-12 h-12 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-lg font-bold bg-white border-4 border-gray-300 text-gray-700 md:flex hidden ">
//                   {module.id}
//                 </div>

//                 {/* Desktop View */}
//                 <div
//                   className={`transform hidden md:flex transition-all duration-300 ${isLeft ? "ml-auto" : "mr-auto"}`}
//                   style={{ width: "calc(50% - 2rem)" }}
//                 >
//                   <Link to={`/module/${module.id}`} className="block w-full">
//                     <div
//                       className={`bg-white p-6 rounded-xl shadow-lg border-l-4 flex items-center w-full cursor-pointer transition-all duration-300 ${
//                         isActive ? `border-${module.color}-500 shadow-xl` : "border-gray-300 hover:border-gray-400 hover:shadow-md"
//                       }`}
//                       onMouseEnter={() => setActiveModule(index)}
//                       onMouseLeave={() => setActiveModule(null)}
//                     >
//                       <div className="text-3xl mr-4 flex-shrink-0">
//                         <i className={`fa-solid ${module.icon} text-3xl text-${module.color}-600`}></i>
//                       </div>
//                       <div className="overflow-hidden">
//                         <h3 className={`text-xl font-bold ${isActive ? `text-${module.color}-700` : "text-gray-800"}`}>
//                           {module.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm mt-1">
//                           {module.subtitle}
//                         </p>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>

//                 {/* Mobile View */}
//                 <div className="md:hidden w-full">
//                   <Link to={`/module/${module.id}`} className="block w-full">
//                     <div
//                       className={`bg-white rounded-xl shadow-lg border-${module.color}-500 w-full cursor-pointer transition-all duration-300 relative`}
//                       onMouseEnter={() => setActiveModule(index)}
//                       onMouseLeave={() => setActiveModule(null)}
//                     >
//                       <div className="relative flex justify-center">
//                         <div className={`absolute -top-16 w-16 h-16 rounded-full bg-${module.color}-100 flex items-center justify-center transform translate-y-1/2`}>
//                           <i className={`fa-solid ${module.icon} text-3xl text-${module.color}-600`}></i>
//                         </div>
//                       </div>
//                       <div className="pt-10 pb-6 px-4 text-center">
//                         <h3 className={`text-lg font-bold ${isActive ? `text-${module.color}-700` : "text-gray-800"} whitespace-nowrap overflow-hidden text-ellipsis`}>
//                           {module.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
//                           {module.subtitle}
//                         </p>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>

    
//     <section id="curriculum" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Curriculum Overview</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4"><div className="bg-blue-100 p-3 rounded-full mr-3"><i className="fa-solid fa-book-open text-blue-600"></i></div><h3 className="text-xl font-bold">Term 1: Foundations</h3></div>
//               <ul className="space-y-3">{["Humanistic Philosophy & Values", "Self-Awareness & Emotional Intelligence", "Critical Thinking Fundamentals", "Personal Development Planning"].map((item, i) => (<li key={i} className="flex items-start"><i className="fa-solid fa-circle-check text-green-500 mt-1 mr-2"></i><span>{item}</span></li>))}</ul>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4"><div className="bg-purple-100 p-3 rounded-full mr-3"><i className="fa-solid fa-brain text-purple-600"></i></div><h3 className="text-xl font-bold">Term 2: Development</h3></div>
//               <ul className="space-y-3">{["Advanced Communication Skills", "Problem-Solving Methodologies", "Financial Literacy & Planning", "Cultural Competence & Ethics"].map((item, i) => (<li key={i} className="flex items-start"><i className="fa-solid fa-circle-check text-green-500 mt-1 mr-2"></i><span>{item}</span></li>))}</ul>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
//               <div className="flex items-center mb-4"><div className="bg-pink-100 p-3 rounded-full mr-3"><i className="fa-solid fa-users text-pink-600"></i></div><h3 className="text-xl font-bold">Term 3: Application</h3></div>
//               <ul className="space-y-3">{["Leadership & Social Impact", "Community Engagement Project", "Holistic Well-being Practices", "Capstone Integration Project"].map((item, i) => (<li key={i} className="flex items-start"><i className="fa-solid fa-circle-check text-green-500 mt-1 mr-2"></i><span>{item}</span></li>))}</ul>
//             </div>
//           </div>
//           <div className="text-center">
//             <Link to="/curriculum" className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"><span>Download Full Curriculum</span><i className="fa-solid fa-download ml-2"></i></Link>
//           </div>
//         </div>
//     </section>

    
//     <section id="learning-showcase" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Learning in Action</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             {["Collaborative Learning", "Outdoor Team Building", "Project Presentations"].map((title, index) => (
//               <div key={index} className="rounded-xl overflow-hidden shadow-lg group relative">
//                 <img className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src={collabWorkImg} alt={`${title.toLowerCase()}`} />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"><h3 className="text-white font-bold">{title}</h3></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>



//       <section id="benefits" className="py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Program Benefits</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[{ icon: "fa-brain", color: "blue", title: "Resilience", desc: "Navigate life's challenges with confidence" }, { icon: "fa-heart-pulse", color: "green", title: "Well-Being", desc: "Balance mental, emotional, and physical health" }, { icon: "fa-lightbulb", color: "purple", title: "Ethical Leadership", desc: "Lead with compassion and integrity" }, { icon: "fa-users", color: "yellow", title: "Global Citizenship", desc: "Contribute to an inclusive, just world" }].map((benefit, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
//                 <div className={`bg-${benefit.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}><i className={`fa-solid ${benefit.icon} text-2xl text-${benefit.color}-600`}></i></div>
//                 <h3 className="font-semibold mb-2">{benefit.title}</h3><p className="text-gray-600">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//       <section id="faculty" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Faculty</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[{ name: "Dr. Elena Rodriguez", role: "Program Director", specialty: "Humanistic Philosophy", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" }, { name: "Prof. Michael Chen", role: "Lead Instructor", specialty: "Emotional Intelligence", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" }, { name: "Dr. Amara Okafor", role: "Curriculum Designer", specialty: "Critical Thinking", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" }, { name: "Prof. James Wilson", role: "Research Lead", specialty: "Social Ethics", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" }].map((faculty, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
//                 <img src={faculty.img} alt={faculty.name} className="w-full h-64 object-cover" />
//                 <div className="p-6"><h3 className="font-bold text-xl mb-1">{faculty.name}</h3><p className="text-purple-600 font-medium mb-2">{faculty.role}</p><p className="text-gray-600 text-sm mb-4">Specializes in {faculty.specialty}</p><Link to={`/faculty/${index}`} className="text-purple-600 hover:text-purple-800 font-medium text-sm">View Profile <i className="fa-solid fa-arrow-right ml-1"></i></Link></div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Link to="/faculty" className="inline-block text-purple-600 hover:text-purple-800 font-semibold">View All Faculty Members <i className="fa-solid fa-arrow-right ml-1"></i></Link>
//           </div>
//         </div>
//       </section>

//       <section id="program-details" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Program Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-bold mb-6 text-purple-600">Key Details</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start"><div className="bg-purple-100 p-3 rounded-full mr-4"><i className="fa-solid fa-calendar-days text-purple-600"></i></div><div><h4 className="font-semibold">Duration</h4><p>{programDetails.duration}</p></div></div>
//                 <div className="flex items-start"><div className="bg-purple-100 p-3 rounded-full mr-4"><i className="fa-solid fa-laptop-house text-purple-600"></i></div><div><h4 className="font-semibold">Format</h4><p>{programDetails.format}</p></div></div>
//                 <div className="flex items-start"><div className="bg-purple-100 p-3 rounded-full mr-4"><i className="fa-solid fa-money-bill-wave text-purple-600"></i></div><div><h4 className="font-semibold">Tuition</h4><p>{programDetails.tuition}</p></div></div>
//                 <div className="flex items-start"><div className="bg-purple-100 p-3 rounded-full mr-4"><i className="fa-solid fa-certificate text-purple-600"></i></div><div><h4 className="font-semibold">Certification</h4><p>{programDetails.certification}</p></div></div>
//               </div>
//             </div>
//             <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
//               <h3 className="text-2xl font-bold mb-6 text-purple-600">Upcoming Start Dates</h3>
//               <div className="space-y-4">
//                 {programDetails.startDates.map((date, index) => (
//                   <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
//                     <div className="bg-pink-100 p-3 rounded-full mr-4"><i className="fa-solid fa-flag-checkered text-pink-600"></i></div>
//                     <div><h4 className="font-semibold">{date}</h4><p className="text-sm text-gray-600">{index === 0 ? "Application deadline: December 1, 2025" : index === 1 ? "Application deadline: May 1, 2026" : "Application deadline: August 1, 2026"}</p></div>
//                     <Link to="/apply" className="ml-auto bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">Apply</Link>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 text-center">
//                 <Link to="/calendar" className="text-purple-600 hover:text-purple-800 font-medium">View Full Academic Calendar <i className="fa-solid fa-arrow-right ml-1"></i></Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="application-process" className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How to Apply</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {[{ step: "Step 1", title: "Submit Application", desc: "Complete the online application form with your details.", icon: "fa-file-alt" }, { step: "Step 2", title: "Interview", desc: "Attend a short interview with our admissions team.", icon: "fa-comments" }, { step: "Step 3", title: "Review", desc: "Your application will be reviewed within 2 weeks.", icon: "fa-search" }, { step: "Step 4", title: "Enroll", desc: "Confirm your spot and start your journey!", icon: "fa-check-circle" }].map((step, index) => (
//               <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg text-center">
//                 <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><i className={`fa-solid ${step.icon} text-2xl text-purple-600`}></i></div>
//                 <h3 className="font-semibold mb-2">{step.step}: {step.title}</h3><p className="text-gray-600 text-sm">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Link to="/apply" className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"><span>Start Your Application</span><i className="fa-solid fa-arrow-right ml-2"></i></Link>
//           </div>
//         </div>
//       </section>

//       <section id="faq" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
//           <div className="max-w-3xl mx-auto">
//             {faqs.map((faq, index) => (
//               <div key={index} className="mb-4">
//                 <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full p-5 font-medium text-left bg-white rounded-lg shadow hover:shadow-md transition-shadow"><span className="font-bold">{faq.question}</span><i className={`fa-solid ${activeAccordion === index ? 'fa-minus' : 'fa-plus'} text-purple-600`}></i></button>
//                 {activeAccordion === index && (<div className="p-5 border border-t-0 border-gray-200 rounded-b-lg bg-white"><p className="text-gray-600">{faq.answer}</p></div>)}
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <p className="text-gray-600">Still have questions?</p><Link to="/contact" className="text-purple-600 font-medium hover:text-purple-800">Contact our admissions team <i className="fa-solid fa-arrow-right ml-1"></i></Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Program;







import React, { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";
import "../App.css";
import collabWorkImg from "../assets/Group work in the classroom.jpeg";
import cloudOpen from '../assets/Group 33.png';
import cloudClose from '../assets/closeCloud.png';

const modules = [
  {
    id: 1,
    title: "Foundations of Humanism in Education and Life",
    objective: "Introduce students to humanistic values and philosophies for a balanced life.",
    description: "Dive into the essence of humanism, exploring how empathy, autonomy, and purpose shape a fulfilling life. This module blends philosophy with practical application, offering a foundation for personal and educational growth.",
    topics: [
      "What is Humanism? History & Evolution",
      "Core Values of Humanism: Empathy, Autonomy, and Purpose",
      "Humanistic Psychology (Carl Rogers, Abraham Maslow)",
      "Importance of Self-Actualization and Personal Growth"
    ],
    outcomes: [
      "Understand the history and evolution of humanism.",
      "Identify and apply core humanistic values.",
      "Explain key ideas from humanistic psychology.",
      "Recognize the importance of self-actualization and personal growth.",
      "Apply humanistic principles in daily life and education."
    ],
    quote: "The good life is one inspired by love and guided by knowledge. — Bertrand Russell",
    color: "green",
    icon: "fa-seedling"
  },
  {
    id: 2,
    title: "Holistic Personal Development",
    objective: "Cultivate a balanced lifestyle integrating mental, emotional, and physical well-being.",
    description: "This module nurtures the whole self—mind, body, and soul—through practical strategies and reflective practices, fostering resilience and ethical living in a fast-paced world.",
    topics: [
      "Physical health and mental well-being",
      "Developing a growth mindset and resilience",
      "Work-life balance and time management",
      "Ethical living and decision-making"
    ],
    outcomes: [
      "Understand how stories, slogans, and history of great leaders shape values and beliefs.",
      "Cultivate gratitude, emotional intelligence, and respect for others, including young children.",
      "Explore the role of fear, self-awareness, and personal growth in life.",
      "Strengthen family values, cultural traditions, and communication skills.",
      "Develop the ability to say 'No' confidently and accept rejection gracefully.",
      "Manage academic challenges, stress, and emotional well-being effectively."
    ],
    quote: "The only journey is the one within. — Rainer Maria Rilke",
    color: "purple",
    icon: "fa-spa"
  },
  {
    id: 3,
    title: "Life Skills",
    objective: "Develop essential life skills to foster personal and social harmony.",
    description: "Master practical skills for everyday life, from building relationships to surviving challenges, all while fostering a sense of gratitude and community.",
    topics: [
      "Living harmoniously in society",
      "Showing respect to others",
      "Practicing gratitude",
      "Building meaningful relationships"
    ],
    outcomes: [
      "Develop essential life skills, including first aid, household tasks, and basic cooking.",
      "Understand safety measures for natural disasters, survival situations, and injury management.",
      "Practice etiquette, respect, and healthy social interactions in public and dining settings.",
      "Gain hands-on experience in gardening, environmental conservation, and healthy living."
    ],
    quote: "Life is a mystery which must be lived, not a problem to be solved. — Adapted from Gandhi",
    color: "blue",
    icon: "fa-toolbox"
  },
  {
    id: 4,
    title: "Personal Development",
    objective: "Help students understand life philosophy, interpersonal skills, and character-building.",
    description: "Embark on a journey of self-discovery, learning to build character, connect authentically, and navigate life’s complexities with confidence and purpose.",
    topics: [
      "Understanding life philosophy",
      "Developing interpersonal skills",
      "Building character",
      "Fostering human connections over technology"
    ],
    outcomes: [
      "Learn effective decision-making strategies using practical tips and tricks.",
      "Develop the ability to create a positive aura in any environment.",
      "Explore self-discovery to understand and define life’s purpose.",
      "Recognize the importance of valuing others and avoiding underestimation.",
      "Understand that everyone is special and unique, fostering self-confidence and respect.",
      "Cultivate self-awareness by taking responsibility instead of blaming others.",
      "Identify the risks of excessive screen time and gaming addiction and learn ways to manage them."
    ],
    quote: "Be yourself; everyone else is already taken. — Oscar Wilde",
    color: "yellow",
    icon: "fa-user"
  },
  {
    id: 5,
    title: "Traditional Values",
    objective: "Reinforce cultural values and traditions for holistic development.",
    description: "Reconnect with the roots of culture and tradition, understanding their relevance in modern life while fostering respect, adaptability, and moral integrity.",
    topics: [
      "Student-teacher relationships",
      "Family values",
      "Respect for elders",
      "Reading and learning without digital distractions"
    ],
    outcomes: [
      "Learn strategies to manage adamant and tantrum-prone children effectively.",
      "Maintain individual character and values in group settings.",
      "Understand why money and wealth should not be the sole life motive.",
      "Embrace new challenges with confidence and adaptability.",
      "Learn the importance of moral values like kindness and honesty.",
      "Promote equality and fair treatment for all."
    ],
    quote: "Tradition is not the worship of ashes, but the preservation of fire. — Gustav Mahler",
    color: "red",
    icon: "fa-home"
  },
  {
    id: 6,
    title: "Self-Awareness & Emotional Intelligence",
    objective: "Develop emotional regulation, empathy, and interpersonal skills.",
    description: "Unlock the power of emotions through mindfulness and empathy, building resilience and meaningful connections in personal and professional spheres.",
    topics: [
      "Understanding emotions and emotional regulation",
      "Growth mindset and resilience",
      "Building empathy and social skills",
      "Conflict resolution & effective communication",
      "Mindfulness and stress management"
    ],
    outcomes: [
      "Differentiate between infatuation and love for better relationships.",
      "Eliminate toxicity by cutting off bad habits and unhealthy friendships.",
      "Handle relationships wisely, showing kindness and respect.",
      "Develop resilience, patience, and a never-give-up attitude.",
      "Cultivate self-discipline, self-control, and emotional balance.",
      "Foster a love for learning and self-improvement.",
      "Manage anger effectively and navigate critical situations calmly.",
      "Help others, nurture inner talents, and become a responsible individual."
    ],
    quote: "Knowing yourself is the beginning of all wisdom. — Aristotle",
    color: "indigo",
    icon: "fa-brain"
  },
  {
    id: 7,
    title: "Critical Thinking & Problem-Solving",
    objective: "Encourage independent thought and creativity in real-world problem-solving.",
    description: "Sharpen your mind with tools for logical reasoning and innovative solutions, tackling ethical dilemmas and media challenges with confidence.",
    topics: [
      "Logical reasoning and decision-making",
      "Design thinking and innovation",
      "Ethical dilemmas and social justice issues",
      "Media literacy and fact-checking"
    ],
    outcomes: [
      "Develop resilience to handle challenges, failures, and setbacks.",
      "Enhance skills for personal growth, confidence, and success.",
      "Maintain well-being through sports, emotional balance, and stress management.",
      "Overcome self-doubt and social pressures like body shaming and social media influence.",
      "Cultivate a positive mindset to embrace success, compliments, and growth.",
      "Improve communication and public speaking skills.",
      "Adapt to life changes, including hormonal shifts and responsibilities."
    ],
    quote: "The mind is not a vessel to be filled, but a fire to be kindled. — Plutarch",
    color: "teal",
    icon: "fa-lightbulb"
  },
  {
    id: 8,
    title: "Humanistic Leadership & Social Responsibility",
    objective: "Inspire leadership with compassion, integrity, and community involvement.",
    description: "Lead with heart and purpose, blending compassion with action to drive positive change in communities and beyond.",
    topics: [
      "Leadership with compassion and integrity",
      "Building meaningful relationships",
      "Community engagement and volunteerism",
      "Sustainability and ethical responsibility"
    ],
    outcomes: [
      "Set meaningful goals and plan effectively for success.",
      "Stay focused by managing distractions and prioritizing tasks.",
      "Develop commitment and a proactive mindset.",
      "Understand success factors beyond just hard work.",
      "Adopt a growth mindset and continuously seek improvement.",
      "Balance independence with responsibilities and relationships.",
      "Maintain healthy family bonds while navigating personal growth."
    ],
    quote: "The best way to find yourself is to lose yourself in the service of others. — Mahatma Gandhi",
    color: "orange",
    icon: "fa-users"
  },
  {
    id: 9,
    title: "Financial Literacy",
    objective: "Equip students with essential financial management skills.",
    description: "Gain mastery over money matters, from budgeting to entrepreneurial thinking, while embracing sustainable living and career planning.",
    topics: [
      "Financial literacy (budgeting, saving, investing)",
      "Entrepreneurial thinking and leadership",
      "Sustainable living and environmental responsibility",
      "Health and nutrition basics",
      "Career planning and professional ethics"
    ],
    outcomes: [
      "Learn the basics of money management and responsible spending.",
      "Understand the importance of valuing everything in life, including time and resources.",
      "Develop the habit of saving money and planning for the future.",
      "Explore ways to turn hobbies into income-generating opportunities."
    ],
    quote: "Wealth is the ability to fully experience life. — Henry David Thoreau",
    color: "pink",
    icon: "fa-piggy-bank"
  },
  {
    id: 10,
    title: "Diversity, Culture & Ethics",
    objective: "Promote inclusivity, cultural understanding, and ethical behavior.",
    description: "Celebrate diversity and ethics, fostering a global mindset and moral clarity to build inclusive, equitable communities.",
    topics: [
      "Cultural intelligence and global citizenship",
      "Ethics and moral reasoning",
      "Gender equality and diversity",
      "Human rights and social responsibility"
    ],
    outcomes: [
      "Develop cultural intelligence and understand the role of global citizenship in a diverse world.",
      "Apply ethics and moral reasoning to decision-making in personal and professional life.",
      "Recognize the importance of gender equality and diversity in fostering inclusive communities.",
      "Understand human rights and embrace social responsibility to contribute to a just society."
    ],
    quote: "In diversity there is beauty and there is strength. — Maya Angelou",
    color: "cyan",
    icon: "fa-globe"
  }
];

const steps = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Complete the online form with your details.",
    icon: "fa-file-alt"
  },
  {
    step: "02",
    title: "Interview Process",
    desc: "Attend an interview with our admissions team.",
    icon: "fa-comments"
  },
  {
    step: "03",
    title: "Application Review",
    desc: "Your application will be reviewed within 2-3 weeks.",
    icon: "fa-search"
  },
  {
    step: "04",
    title: "Final Enrollment",
    desc: "Confirm acceptance and start your journey!",
    icon: "fa-check-circle"
  }
];

const programDetails = {
  duration: "1 Year",
  format: "Hybrid (Online & In-person)",
  startDates: ["January 15, 2026", "June 10, 2026", "September 5, 2026"],
  tuition: "$4,800 (Scholarships available)",
  certification: "IIHH Certificate in Humanistic Development"
};

const faqs = [
  { question: "Who is this program designed for?", answer: "Our program is designed for educators, professionals, students, and anyone interested in personal growth, humanistic education, and holistic development.",category: "Enrollment" },
  { question: "What is the time commitment?", answer: "The program requires approximately 10 hours per week, including coursework, practical assignments, and collaborative projects.",category: "Enrollment" },
  { question: "Are there any prerequisites?", answer: "No formal prerequisites are required. We welcome individuals from diverse backgrounds with a passion for personal and professional growth.",category: "Enrollment" },
  { question: "Is financial aid available?", answer: "Yes, we offer scholarships and payment plans. Please contact our admissions office for more information.",category: "Enrollment" }
];

function Program() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 15,
      y: (e.clientY - rect.top - rect.height / 2) / 15,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const [selectedModule, setSelectedModule] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  return (
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-center overflow-hidden flex items-center bg-[#223668]"
          style={{ backgroundImage: 'url("../src/assets/programs-pageHeroimg.jpg")' }}
        >
          <div className="absolute inset-0 bg-[#223668]/40 z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#ffd278] mb-6 leading-tight tracking-tight drop-shadow-lg">
                IIHH – <span className="block md:inline">International Institute of Horizon Humanism</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                A pioneering school fostering humanism, holistic development, and life skills for students, educators, and professionals.
              </p>
              <div className="flex justify-center">
                <Link
                  to="/apply"
                  className="relative bg-white text-[#036e8d] px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
                >
                  <span className="relative z-10">Explore Our Programs</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
            <a href="#our-programs" className="text-white">
              <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
            </a>
          </div>
          <svg
            className="absolute bottom-0"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#223668', width: '148%', height: 87, transform: 'rotate(180deg)' }}
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

        {/* Our Programs Section */}
        <section id="our-programs" className="container mx-auto px-6 relative z-10 py-20 bg-[#f9fcfd]">
          <div className="max-w-3xl mx-auto text-center mb-4 py-2">
            <h4 className="text-[#036e8d] font-semibold tracking-wider mb-4 uppercase">Our Programs</h4>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Transformative Education with a <span className="relative">
                <span className="relative z-10 text-[#036e8d]">Humanistic Core</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#d2a763]/20 -rotate-1 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our one-year program integrates humanism, emotional intelligence, and practical skills to nurture self-aware, resilient, and socially responsible individuals. Explore our comprehensive learning path designed to foster holistic growth and development.
            </p>
          </div>
        </section>

        {/* Program Modules Section */}
        {/* <section id="program-modules" className="py-16 bg-[#d2a763] relative">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl sm:text-3xl font-bold text-gray-800 font-bold text-center mb-20 pt-8">
              Program Modules
            </h3>
            <div className="overflow-hidden bg-white/40 backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl relative grid grid-cols-1 px-4 pb-[380px] sm:px-8 md:px-4 py-12 sm:py-24 md:py-16 md:grid-cols-3 gap-8 lg:grid-cols-4 gap-8 sm:grid-cols-2 gap-8 md:gap-12">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  id={`course-card-${module.id}`}
                  className={`relative flex flex-col items-center justify-center gap-1 md:items-start text-center md:text-left bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl hover:shadow-lg transition-all ${
                    index % 2 === 1 && "md:-translate-y-4"
                  } ${index < modules.length - 1 ? "border-b border-gray-200 md:border-b-0" : ""}`}
                >
                  <span className="absolute top-5 right-5 text-gray-600 font-bold text-2xl">
                    {module.id}
                  </span>
                  <i className={`fa-solid ${module.icon} text-xl sm:text-2xl md:text-3xl text-${module.color}-600 mr-2 sm:mr-3`}></i>
                  <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                  <p className="text-gray-600 text-sm">{module.subtitle}</p>
                  <button
                    onClick={() => setSelectedModule(module)}
                    className="text-[#036e8d] font-semibold underline"
                  >
                    View more
                  </button>
                </div>
              ))}
            </div>

            {selectedModule && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-8 relative overflow-auto max-h-[80vh]">
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                    aria-label="Close details"
                  >
                    ×
                  </button>
                  <h3 className={`text-2xl font-bold mb-4 text-${selectedModule.color}-700`}>
                    {selectedModule.title}
                  </h3>
                  <p className="mb-4">{selectedModule.description}</p>
                  <blockquote
                    className={`italic text-${selectedModule.color}-700 bg-${selectedModule.color}-100 px-4 py-2 rounded mb-6`}
                  >
                    "{selectedModule.quote}"
                  </blockquote>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Topics Covered</h4>
                    <ul className="list-disc ml-6 text-gray-700">
                      {selectedModule.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                    <ul className="list-disc ml-6 text-gray-700">
                      {selectedModule.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`mt-6 bg-${selectedModule.color}-600 hover:bg-${selectedModule.color}-700 text-white px-6 py-2 rounded-full font-semibold transition`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </section> */}

        <section id="program-modules" className="py-16 bg-gray-100 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Program Modules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className={`relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${
                    animationTrigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } border-2 border-${module.color}-200`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedModule(module)}
                >
                  <div className="absolute top-4 right-4 text-gray-500 font-semibold text-lg">
                    {module.id}
                  </div>
                  <i className={`fa-solid ${module.icon} text-4xl text-${module.color}-600 mb-4`}></i>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{module.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{module.subtitle}</p>
                  <div className="relative overflow-hidden h-0 group-hover:h-16 transition-all duration-300">
                    <p className="text-gray-500 text-xs absolute bottom-0">
                      {module.description.slice(0, 80)}...
                    </p>
                  </div>
                  <button
                    className={`mt-4 text-${module.color}-600 font-semibold hover:text-${module.color}-800 transition-colors duration-200`}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>

            {/* Modal */}
            {selectedModule && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
                <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative overflow-auto max-h-[85vh] transform transition-all duration-300 scale-100">
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="absolute top-3 right-5 text-gray-600 hover:text-gray-900 text-xl font-bold"
                    aria-label="Close details"
                  >
                    X
                  </button>
                  <h3 className={`text-2xl font-bold mb-4 text-${selectedModule.color}-700 text-center`}>
                    {selectedModule.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{selectedModule.description}</p>
                  <blockquote
                    className={`italic text-${selectedModule.color}-700 bg-${selectedModule.color}-50 px-4 py-2 rounded-lg mb-6 border-l-4 border-${selectedModule.color}-300`}
                  >
                    "{selectedModule.quote}"
                  </blockquote>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Topics Covered</h4>
                      <ul className="list-disc ml-5 text-gray-700 text-sm">
                        {selectedModule.topics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Learning Outcomes</h4>
                      <ul className="list-disc ml-5 text-gray-700 text-sm">
                        {selectedModule.outcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      className={`bg-${selectedModule.color}-600 hover:bg-${selectedModule.color}-700 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200`}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Program Benefits Section */}
          <div className="container mx-auto px-6 mt-20">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "fa-brain", color: "teal", title: "Resilience", desc: "Navigate life's challenges with confidence" },
                { icon: "fa-heart-pulse", color: "emerald", title: "Well-Being", desc: "Balance mental, emotional, and physical health" },
                { icon: "fa-lightbulb", color: "purple", title: "Ethical Leadership", desc: "Lead with compassion and integrity" },
                { icon: "fa-users", color: "amber", title: "Global Citizenship", desc: "Contribute to an inclusive, just world" }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-[#036e8d]/10">
                  <div className={`bg-[#036e8d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`fa-solid ${benefit.icon} text-2xl text-[#036e8d]`}></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Curriculum Overview Section */}
        <section id="curriculum" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Curriculum Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#036e8d]/10">
                <div className="flex items-center mb-4">
                  <div className="bg-[#036e8d]/10 p-3 rounded-full mr-3"><i className="fa-solid fa-book-open text-[#036e8d]"></i></div>
                  <h3 className="text-xl font-bold">Term 1: Foundations</h3>
                </div>
                <ul className="space-y-3">
                  {["Humanistic Philosophy & Values", "Self-Awareness & Emotional Intelligence", "Critical Thinking Fundamentals", "Personal Development Planning"].map((item, i) => (
                    <li key={i} className="flex items-start"><i className="fa-solid fa-circle-check text-[#036e8d] mt-1 mr-2"></i><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#d2a763]/20">
                <div className="flex items-center mb-4">
                  <div className="bg-[#d2a763]/20 p-3 rounded-full mr-3"><i className="fa-solid fa-brain text-[#036e8d]"></i></div>
                  <h3 className="text-xl font-bold">Term 2: Development</h3>
                </div>
                <ul className="space-y-3">
                  {["Advanced Communication Skills", "Problem-Solving Methodologies", "Financial Literacy & Planning", "Cultural Competence & Ethics"].map((item, i) => (
                    <li key={i} className="flex items-start"><i className="fa-solid fa-circle-check text-[#036e8d] mt-1 mr-2"></i><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-[#036e8d]/10">
                <div className="flex items-center mb-4">
                  <div className="bg-[#036e8d]/10 p-3 rounded-full mr-3"><i className="fa-solid fa-users text-[#036e8d]"></i></div>
                  <h3 className="text-xl font-bold">Term 3: Application</h3>
                </div>
                <ul className="space-y-3">
                  {["Leadership & Social Impact", "Community Engagement Project", "Holistic Well-being Practices", "Capstone Integration Project"].map((item, i) => (
                    <li key={i} className="flex items-start"><i className="fa-solid fa-circle-check text-[#036e8d] mt-1 mr-2"></i><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link to="/curriculum" className="inline-flex items-center bg-[#036e8d] text-white px-6 py-3 rounded-full hover:bg-[#d2a763] transition-colors shadow-lg hover:shadow-xl">
                <span>Download Full Curriculum</span><i className="fa-solid fa-download ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="py-16 bg-[#223668]/90">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Meet Our  <span className='text-[#ffd278]'>Faculty</span></h2>
            <p className="text-white/80 text-center text-xs sm:text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mt-8 mb-16">
                Meet the passionate educators and visionaries who guide IIHH’s mission. Our leadership team brings together diverse expertise and a shared commitment to nurturing holistic, humanistic education for every learner.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Dr. Elena Rodriguez", role: "Program Director", specialty: "Humanistic Philosophy", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
                { name: "Prof. Michael Chen", role: "Lead Instructor", specialty: "Emotional Intelligence", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
                { name: "Dr. Amara Okafor", role: "Curriculum Designer", specialty: "Critical Thinking", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
                { name: "Prof. James Wilson", role: "Research Lead", specialty: "Social Ethics", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" }
              ].map((faculty, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  transitionSpeed={400}
                  scale={1.05}
                  glareEnable={false}
                  perspective={1000}
                >
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <img src={faculty.img} alt={faculty.name} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-1 text-gray-800">{faculty.name}</h3>
                      <p className="text-[#036e8d] font-medium mb-2">{faculty.role}</p>
                      <p className="text-gray-600 text-sm mb-4">Specializes in {faculty.specialty}</p>
                      <Link to={`/faculty/${index}`} className="text-[#036e8d] hover:text-[#d2a763] font-medium text-sm">View Profile <i className="fa-solid fa-arrow-right ml-1"></i></Link>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/faculty" className="inline-block text-white hover:text-[#ffd278] font-semibold">View All Faculty Members <i className="fa-solid fa-arrow-right ml-1"></i></Link>
            </div>
          </div>
        </section>

        {/* Learning in Action Section */}
        <section id="learning-showcase" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Learning in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {["Collaborative Learning", "Outdoor Team Building", "Project Presentations"].map((title, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg group relative">
                  <img className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src={collabWorkImg} alt={`${title.toLowerCase()}`} />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#223668]/70 to-transparent p-4">
                    <h3 className="text-white font-bold">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Information Section */}
        <section id="program-details" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Program Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="rounded-xl overflow-hidden relative">
              {/* Half Circle Background */}
              <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <div className="w-[60vw] h-[60vh] lg:w-[60vw] h-[75vh] bg-[#036e8d] rounded-full"></div>
              </div>
              
              <div className="relative z-10 p-8 h-[75vh] flex items-center justify-center">
                {/* Left Section with Heading */}
                <div className="block flex-shrink-0 w-1/3 pr-8">
                  <h3 className="text-5xl font-bold text-[white] leading-tight">
                    Key<br /><span className="text-[#d2a763]">Details</span>
                  </h3>
                </div>
                
                <div className="flex-1 relative p-4 bg-white/60 backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl">

                  <div className="flex items-center mb-2">
                    <div className="mr-6">
                      <i className="fa-solid fa-calendar-days text-black"></i>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-2 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-800 text-sm">Duration</h4>
                      <p className="text-gray-600 text-sm">{programDetails.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    <div className=" mr-4">
                      <i className="fa-solid fa-laptop-house text-balck text-lg"></i>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-2 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-800 text-sm">Format</h4>
                      <p className="text-gray-600 text-sm">{programDetails.format}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    <div className="mr-4">
                      <i className="fa-solid fa-money-bill-wave text-balck text-lg"></i>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-2 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-800 text-sm">Tuition</h4>
                      <p className="text-gray-600 text-sm">{programDetails.tuition}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    <div className="mr-4">
                      <i className="fa-solid fa-certificate text-balck text-lg"></i>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-2 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-800 text-sm">Certification</h4>
                      <p className="text-gray-600 text-sm">{programDetails.certification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <div className="p-8 w-full flex-col align-center justify-center items-center">
                <h3 className="text-2xl font-bold mb-6 text-[#036e8d]">Upcoming Start Dates</h3>
                <div className="space-y-4 w-full">
                  {programDetails.startDates.map((date, index) => (
                    <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow border border-[#036e8d]/10">
                      <div className="bg-[#d2a763]/20 p-3 rounded-full mr-4"><i className="fa-solid fa-flag-checkered text-[#036e8d]"></i></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{date}</h4>
                        <p className="text-sm text-gray-600">{index === 0 ? "Application deadline: December 1, 2025" : index === 1 ? "Application deadline: May 1, 2026" : "Application deadline: August 1, 2026"}</p>
                      </div>
                      <Link to="/apply" className="ml-auto bg-[#036e8d] text-white px-4 py-2 rounded-full hover:bg-[#d2a763] transition-colors shadow-lg">Apply</Link>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to="/calendar" className="text-[#036e8d] hover:text-[#d2a763] font-medium">View Full Academic Calendar <i className="fa-solid fa-arrow-right ml-1"></i></Link>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Application Process Section */}
        <section id="application-process" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Get amazing education in 4<br />
                  <span className="text-[#036e8d]">simple steps</span>
                </h2>
                <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto px-4">
                  Join our transformative program through our streamlined application process.
                </p>
              </div>

              {/* Main Content */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div
                  className="relative w-2/3 max-w-lg mx-auto"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Floating Wrapper */}
                  <div
                    className="relative w-full aspect-square rounded-2xl border border-white/30 backdrop-blur-md"
                    style={{
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    {/* Large Main Image */}
                    <div className="w-full h-full rounded-full bg-white overflow-hidden border-[1.5px] bg-gradient-to-r from-[#036e8d] to-[#036e8d]">
                      <img
                        src="../src/assets/programpageImg1.png"
                        alt="Main Image"
                        className="w-full h-full object-cover mt-4"
                        style={{
                          animation: "gentleFloat 6s ease-in-out infinite",
                        }}
                      />
                    </div>

                  </div>

                  {/* Overlay Small Image */}
                  <div className="absolute top-12 -right-8 z-10 w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white group">
                    <img
                      src="../src/assets/academicLogoProgrampg.png"
                      alt="Overlay Image"
                      className="w-full h-full mt-1 p-2 object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        animation: "gentleFloat 5s ease-in-out infinite 1s",
                      }}
                    />
                  </div>

                  {/* Floating Animation Keyframes */}
                  <style jsx>{`
                    @keyframes gentleFloat {
                      0%,
                      100% {
                        transform: translateY(0);
                      }
                      50% {
                        transform: translateY(-8px);
                      }
                    }
                  `}</style>
                </div>
                </div>


                {/* Right Side - Steps */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
                  {/* Connecting Line - Only show on larger screens and stop before last step */}
                  <div className="absolute left-7 top-8 h-[calc(82%-2rem)] w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 hidden lg:block"></div>
                  
                  <div className="space-y-6 lg:space-y-8">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 lg:gap-6 relative">
                        {/* Step Number Circle */}
                        <div className="group relative w-14 h-14 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300"></div>
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 group-hover:scale-110 transition-transform duration-300">
                            {step.step}
                          </div>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                          <div className="flex items-start gap-3 lg:gap-4">
                            <div className="bg-[#036e8d]/10 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                              <i className={`fa-solid ${step.icon} text-lg lg:text-xl text-[#036e8d]`}></i>
                            </div>
                            <div>
                              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">
                                Step {step.step.replace('0', '')}: {step.title}
                              </h3>
                              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12 lg:mt-16">
                <button className="inline-flex items-center bg-gradient-to-r from-[#036e8d] to-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:from-[#025a75] hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="text-base lg:text-lg font-semibold">Start Your Application</span>
                  <i className="fa-solid fa-arrow-right ml-2 lg:ml-3"></i>
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about our humanistic education programs and how they can benefit you.
                </p>
              </div>
              
              {/* Two Column FAQ Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-fit">
                    <details className="group/details">
                      <summary className="flex justify-between items-start p-6 cursor-pointer hover:bg-gray-50 rounded-t-2xl transition-colors duration-200">
                        <div className="flex-1 pr-4">
                          <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                            {faq.question}
                          </h3>
                          <div className="flex items-center">
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                            <span className="transform group-open/details:rotate-180 transition-transform duration-300">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="text-center mt-16">
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#025a75] hover:translate-x-1 transition-all duration-300 shadow-lg group text-base"
                >
                  View all FAQ
                  <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Program;





