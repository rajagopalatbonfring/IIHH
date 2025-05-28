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







import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import collabWorkImg from "../assets/Group work in the classroom.jpeg";

const modules = [
  { id: 1, title: "Foundations of Humanism", subtitle: "Core values for a balanced life", icon: "fa-seedling", color: "green" },
  { id: 2, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
  { id: 3, title: "Life Skills", subtitle: "Practical tools for life", icon: "fa-toolbox", color: "blue" },
  { id: 4, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
  { id: 5, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
  { id: 6, title: "Self-Awareness & Emotional Intelligence", subtitle: "Master your emotions", icon: "fa-brain", color: "indigo" },
  { id: 7, title: "Critical Thinking & Problem-Solving", subtitle: "Sharpen your mind", icon: "fa-lightbulb", color: "teal" },
  { id: 8, title: "Humanistic Leadership", subtitle: "Lead with purpose", icon: "fa-users", color: "orange" },
  { id: 9, title: "Financial Literacy", subtitle: "Master your finances", icon: "fa-piggy-bank", color: "pink" },
  { id: 10, title: "Diversity, Culture & Ethics", subtitle: "Embrace inclusivity", icon: "fa-globe", color: "cyan" }
];

const programDetails = {
  duration: "1 Year",
  format: "Hybrid (Online & In-person)",
  startDates: ["January 15, 2026", "June 10, 2026", "September 5, 2026"],
  tuition: "$4,800 (Scholarships available)",
  certification: "IIHH Certificate in Humanistic Development"
};

const faqs = [
  { question: "Who is this program designed for?", answer: "Our program is designed for educators, professionals, students, and anyone interested in personal growth, humanistic education, and holistic development." },
  { question: "What is the time commitment?", answer: "The program requires approximately 10 hours per week, including coursework, practical assignments, and collaborative projects." },
  { question: "Are there any prerequisites?", answer: "No formal prerequisites are required. We welcome individuals from diverse backgrounds with a passion for personal and professional growth." },
  { question: "Is financial aid available?", answer: "Yes, we offer scholarships and payment plans. Please contact our admissions office for more information." }
];

function Program() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const getColorClass = (type, color, intensity) => {
    const colorMap = {
      green: "emerald",
      purple: "purple",
      blue: "blue",
      yellow: "amber",
      red: "red",
      indigo: "indigo",
      teal: "teal",
      orange: "orange",
      pink: "pink",
      cyan: "cyan"
    };
    return `${type}-${colorMap[color]}-${intensity}`;
  };

  return (
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-center overflow-hidden flex items-center bg-[#223668]"
          style={{ backgroundImage: 'url(https://i.pinimg.com/736x/59/92/a8/5992a8fb95d0ed107599aa4384fc914b.jpg)' }}
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
        <section id="program-modules" className="py-16 bg-[#d2a763] relative">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl sm:text-3xl font-bold text-gray-800 font-bold text-center mb-20 pt-8">Program Modules</h3>
            <div className="flex flex-col items-center relative">
              <div className="w-1 bg-gradient-to-b from-[#036e8d] to-[#d2a763] absolute top-0 bottom-28 left-1/2 transform -translate-x-1/2 rounded-full md:block hidden"></div>
              {modules.map((module, index) => {
                const isActive = activeModule === index;
                const isLeft = index % 2 === 0;
                return (
                  <div key={module.id} className="relative w-full max-w-4xl mb-12 px-4">
                    <div className="text-center w-12 h-12 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-lg font-bold bg-white border-4 border-[#036e8d] text-[#036e8d] md:flex hidden">
                      {module.id}
                    </div>
                    <div
                      className={`transform hidden md:flex transition-all duration-300 ${isLeft ? "ml-auto" : "mr-auto"}`}
                      style={{ width: "calc(50% - 2rem)" }}
                    >
                      <Link to={`/module/${module.id}`} className="block w-full">
                        <div
                          className={`bg-white p-6 rounded-xl shadow-lg border-l-4 flex items-center w-full cursor-pointer transition-all duration-300 ${
                            isActive ? `border-[#036e8d]` : "border-gray-200 hover:border-[#d2a763] hover:shadow-xl"
                          }`}
                          onMouseEnter={() => setActiveModule(index)}
                          onMouseLeave={() => setActiveModule(null)}
                        >
                          <div className="text-3xl mr-4 flex-shrink-0">
                            <i className={`fa-solid ${module.icon} text-3xl text-[#036e8d]`}></i>
                          </div>
                          <div className="overflow-hidden">
                            <h3 className={`text-xl font-bold ${isActive ? `text-[#036e8d]` : "text-gray-800"}`}>
                              {module.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {module.subtitle}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="md:hidden w-full">
                      <Link to={`/module/${module.id}`} className="block w-full">
                        <div
                          className={`bg-white rounded-xl shadow-lg border-[#036e8d] w-full cursor-pointer transition-all duration-300 relative`}
                          onMouseEnter={() => setActiveModule(index)}
                          onMouseLeave={() => setActiveModule(null)}
                        >
                          <div className="relative flex justify-center">
                            <div className={`absolute -top-16 w-16 h-16 rounded-full bg-[#d2a763]/20 flex items-center justify-center transform translate-y-1/2`}>
                              <i className={`fa-solid ${module.icon} text-3xl text-[#036e8d]`}></i>
                            </div>
                          </div>
                          <div className="pt-10 pb-6 px-4 text-center">
                            <h3 className={`text-lg font-bold ${isActive ? `text-[#036e8d]` : "text-gray-800"} whitespace-nowrap overflow-hidden text-ellipsis`}>
                              {module.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                              {module.subtitle}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
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

        {/* Program Benefits Section */}
        <section id="benefits" className="py-16 bg-[#d2a763]">
          <div className="container mx-auto px-6">
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

        {/* Faculty Section */}
        <section id="faculty" className="py-16 bg-[#223668]/90">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Meet Our <span className="text-[#ffd278]">Faculty</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Dr. Elena Rodriguez", role: "Program Director", specialty: "Humanistic Philosophy", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
                { name: "Prof. Michael Chen", role: "Lead Instructor", specialty: "Emotional Intelligence", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
                { name: "Dr. Amara Okafor", role: "Curriculum Designer", specialty: "Critical Thinking", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" },
                { name: "Prof. James Wilson", role: "Research Lead", specialty: "Social Ethics", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" }
              ].map((faculty, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
                  <img src={faculty.img} alt={faculty.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1 text-gray-800">{faculty.name}</h3>
                    <p className="text-[#036e8d] font-medium mb-2">{faculty.role}</p>
                    <p className="text-gray-600 text-sm mb-4">Specializes in {faculty.specialty}</p>
                    <Link to={`/faculty/${index}`} className="text-[#036e8d] hover:text-[#d2a763] font-medium text-sm">View Profile <i className="fa-solid fa-arrow-right ml-1"></i></Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/faculty" className="inline-block text-white hover:text-[#ffd278] font-semibold">View All Faculty Members <i className="fa-solid fa-arrow-right ml-1"></i></Link>
            </div>
          </div>
        </section>

        {/* Program Information Section */}
        <section id="program-details" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Program Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#036e8d]/10">
                <h3 className="text-2xl font-bold mb-6 text-[#036e8d]">Key Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#036e8d]/10 p-3 rounded-full mr-4"><i className="fa-solid fa-calendar-days text-[#036e8d]"></i></div>
                    <div><h4 className="font-semibold text-gray-800">Duration</h4><p>{programDetails.duration}</p></div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#036e8d]/10 p-3 rounded-full mr-4"><i className="fa-solid fa-laptop-house text-[#036e8d]"></i></div>
                    <div><h4 className="font-semibold text-gray-800">Format</h4><p>{programDetails.format}</p></div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#036e8d]/10 p-3 rounded-full mr-4"><i className="fa-solid fa-money-bill-wave text-[#036e8d]"></i></div>
                    <div><h4 className="font-semibold text-gray-800">Tuition</h4><p>{programDetails.tuition}</p></div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#036e8d]/10 p-3 rounded-full mr-4"><i className="fa-solid fa-certificate text-[#036e8d]"></i></div>
                    <div><h4 className="font-semibold text-gray-800">Certification</h4><p>{programDetails.certification}</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-[#d2a763]/20">
                <h3 className="text-2xl font-bold mb-6 text-[#036e8d]">Upcoming Start Dates</h3>
                <div className="space-y-4">
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
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How to Apply</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "Step 1", title: "Submit Application", desc: "Complete the online application form with your details.", icon: "fa-file-alt" },
                { step: "Step 2", title: "Interview", desc: "Attend a short interview with our admissions team.", icon: "fa-comments" },
                { step: "Step 3", title: "Review", desc: "Your application will be reviewed within 2 weeks.", icon: "fa-search" },
                { step: "Step 4", title: "Enroll", desc: "Confirm your spot and start your journey!", icon: "fa-check-circle" }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-[#036e8d]/10">
                  <div className="bg-[#036e8d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`fa-solid ${step.icon} text-2xl text-[#036e8d]`}></i>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800">{step.step}: {step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/apply" className="inline-flex items-center bg-[#036e8d] text-white px-6 py-3 rounded-full hover:bg-[#d2a763] transition-colors shadow-lg hover:shadow-xl">
                <span>Start Your Application</span><i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-[#d2a763]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full p-5 font-medium text-left bg-white rounded-lg shadow hover:shadow-xl transition-shadow border border-[#036e8d]/10">
                    <span className="font-bold text-gray-800">{faq.question}</span>
                    <i className={`fa-solid ${activeAccordion === index ? 'fa-minus' : 'fa-plus'} text-[#036e8d]`}></i>
                  </button>
                  {activeAccordion === index && (
                    <div className="p-5 border border-t-0 border-[#036e8d]/10 rounded-b-lg bg-white">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-800">Still have questions?</p>
              <Link to="/contact" className="text-[#036e8d] font-medium hover:text-[#ffd278]">Contact our admissions team <i className="fa-solid fa-arrow-right ml-1"></i></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Program;





