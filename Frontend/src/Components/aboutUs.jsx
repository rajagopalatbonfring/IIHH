import React from 'react';
import "../App.css";

function AboutUs() {
  return (
    <main className="pt-20 relative min-h-screen">
      {/* Enhanced abstract background with more animated balls */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2s"}}></div>
          <div className="absolute top-1/5 right-1/6 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-1/4 left-1/8 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1.5s"}}></div>
          <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-orange-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2.5s"}}></div>
          <div className="absolute bottom-1/6 left-3/4 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "0.8s"}}></div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section 
        id="hero" 
        className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: 'url(src/assets/3d-portrait-people.png)' }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-indigo-600/70 to-pink-500/60 z-0"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
              About IIHH – <span className="block md:inline">Pioneering Humanistic Education</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              We empower learners of all ages with a holistic education that integrates humanism, resilience, and global awareness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="/programs" 
                className="relative bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
              >
                <span className="relative z-10">Explore Our Programs</span>
                <span className="absolute inset-0 bg-purple-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
              <a 
                href="#team" 
                className="bg-transparent border-2 border-white/90 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
          <a href="#who-we-are" className="text-white">
            <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
          </a>
        </div>

        {/* Subtle Background Enhancement */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-48 h-48 bg-purple-400/20 rounded-full absolute top-10 left-10 animate-pulse"></div>
          <div className="w-64 h-64 bg-indigo-400/20 rounded-full absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </section>

      <section id="who-we-are" className="py-20 relative z-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h4 className="text-purple-600 font-semibold tracking-wider mb-4 uppercase">About Us</h4>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Who <span className="relative">
                <span className="relative z-10 text-purple-600">We Are</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The International Institute of Horizon Humanism (IIHH) is a trailblazing institution dedicated to blending humanistic principles with modern education, shaping compassionate, ethical leaders for a global society.
            </p>
          </div>
        </div>
      </section>

      <section id="why-we-started" className="bg-indigo-50 py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto md:max-w-none hover:shadow-2xl transition-shadow duration-300" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fc38e6bd97-7a54c23a7bb68887dbdd.png" 
                alt="IIHH community in action" 
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-6">Our Vision & Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                IIHH was founded to redefine education by prioritizing emotional intelligence, ethical reasoning, and social responsibility alongside academic rigor. We aim to create a transformative learning ecosystem for school students, college students, educators, and professionals.
              </p>
              <p className="text-gray-600 text-lg">
                Our mission is to cultivate resilient, empathetic individuals who lead with purpose and contribute positively to humanity's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-8 relative z-10 bg-white">
          <div className="container mx-auto px-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Educational Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "School Curriculum Integration", 
                  description: "Humanistic principles integrated into K-12 education, developing emotional intelligence alongside academic excellence.", 
                  icon: "fa-school", 
                  gradient: "from-purple-400 to-indigo-600", 
                  textColor: "text-purple-600", 
                  bgColor: "bg-purple-100" 
                },
                { 
                  title: "Professional Development", 
                  description: "Workshops and certification programs for educators and professionals seeking to enhance their humanistic leadership skills.", 
                  icon: "fa-briefcase", 
                  gradient: "from-pink-400 to-purple-600", 
                  textColor: "text-pink-600", 
                  bgColor: "bg-pink-100" 
                },
                { 
                  title: "Global Citizenship Program", 
                  description: "Immersive experiences fostering cross-cultural understanding and global awareness for students of all ages.", 
                  icon: "fa-globe", 
                  gradient: "from-blue-400 to-cyan-600", 
                  textColor: "text-blue-600", 
                  bgColor: "bg-blue-100" 
                }
              ].map((program, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl`}></div>
                  <div className="relative bg-white rounded-xl p-8 transform transition-all duration-300 h-full flex flex-col group-hover:translate-x-2 group-hover:-translate-y-2">
                    <div className={`${program.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fa-solid ${program.icon} text-2xl ${program.textColor}`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{program.title}</h3>
                    <p className="text-gray-600 text-center flex-grow">{program.description}</p>
                    <div className="mt-6 text-center group-hover:opacity-100 transition-opacity duration-300 opacity-75">
                      <a href="#" className={`${program.textColor} font-semibold hover:${program.textColor.replace('600', '800')} transition duration-300 flex items-center justify-center`}>
                        Learn More <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>


      <section id="team" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Anika Desai", role: "Founder & Director", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
              { name: "Prof. Rajesh Kumar", role: "Curriculum Lead", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
              { name: "Meera Patel", role: "Community Engagement Head", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-100" 
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-indigo-600 mb-3">{member.role}</p>
                <p className="text-gray-600">Committed to fostering humanistic education and personal growth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="bg-indigo-50 py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Empathy", icon: "fa-heart", desc: "Fostering understanding and connection in all interactions." },
              { title: "Resilience", icon: "fa-shield-alt", desc: "Building strength to thrive through life's challenges." },
              { title: "Inclusivity", icon: "fa-globe", desc: "Embracing diversity and global perspectives." },
              { title: "Purpose", icon: "fa-compass", desc: "Guiding learners to find meaning and direction." }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`fa-solid ${value.icon} text-2xl text-indigo-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* For Later use */}
{/*  */}
{/*  */}
      {/* <section id="impact" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "5,000+", label: "Students Impacted" },
              { number: "120+", label: "Partner Schools" },
              { number: "98%", label: "Educator Satisfaction" },
              { number: "24", label: "Countries Reached" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-purple-600 mb-2">{stat.number}</p>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">What Our Community Says</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "IIHH's approach has transformed our school culture, fostering both academic excellence and emotional intelligence among our students.", author: "Priya Sharma", role: "Principal, Delhi International School" },
              { quote: "The professional development program gave me tools to bring humanistic principles into my corporate leadership role. It's been revolutionary.", author: "Vikram Mehta", role: "Senior Manager, Tech Innovations India" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
                <div className="text-purple-200 text-6xl absolute top-4 left-4">"</div>
                <p className="text-gray-600 italic relative z-10 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="cta" className="bg-purple-600/80  text-white py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
            Become part of our growing network of educators, students, and professionals dedicated to humanistic principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Join Our Programs
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300">
              Newsletter Signup
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;











// import React from 'react';
// import "../App.css";

// function AboutUs() {
//   return (
//     <main className="pt-24 relative min-h-screen bg-stone-50">
//       {/* Enhanced abstract background with themed animated balls */}
//       <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-gray-100 overflow-hidden">
//         <div className="absolute w-full h-full opacity-20">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply animate-pulse"></div>
//           <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1s"}}></div>
//           <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-coral-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2s"}}></div>
//           <div className="absolute top-1/5 right-1/6 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "0.5s"}}></div>
//           <div className="absolute bottom-1/4 left-1/8 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1.5s"}}></div>
//           <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-orange-300 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2.5s"}}></div>
//           <div className="absolute bottom-1/6 left-3/4 w-40 h-40 bg-coral-300 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "0.8s"}}></div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section 
//         id="hero" 
//         className="h-screen md:h-[700px] bg-cover bg-center relative flex items-center rounded-b-[60px] overflow-hidden" 
//         style={{backgroundImage:'url(https://storage.googleapis.com/uxpilot-auth.appspot.com/715e11cb2e-fd89f7f75cf4fc7ebf29.png)'}}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-orange-500 opacity-85"></div>
//         <div className="container mx-auto px-6 relative z-10 max-w-7xl">
//           <div className="max-w-3xl text-white">
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
//               About IIHH – Pioneering Humanistic Education
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 leading-relaxed">
//               We empower learners of all ages with a holistic education that integrates humanism, resilience, and global awareness.
//             </p>
//             <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-full hover:bg-teal-50 hover:shadow-lg transition-all duration-300">
//               Explore Our Programs
//             </button>
//           </div>
//         </div>
//       </section>

//       <section id="who-we-are" className="py-24 relative z-10 bg-stone-50">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="max-w-3xl mx-auto text-center mb-24">
//             <h4 className="text-teal-600 font-semibold tracking-wider mb-4 uppercase">About Us</h4>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
//               Who <span className="relative">
//                 <span className="relative z-10 text-orange-500">We Are</span>
//                 <span className="absolute bottom-2 left-0 w-full h-4 bg-orange-100 -rotate-1 -z-10"></span>
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               The International Institute of Horizon Humanism (IIHH) is a trailblazing institution dedicated to blending humanistic principles with modern education, shaping compassionate, ethical leaders for a global society.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section id="why-we-started" className="bg-teal-50 py-24 relative z-10">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2">
//               <img 
//                 className="rounded-2xl shadow-xl w-full max-w-md mx-auto md:max-w-none hover:shadow-2xl transition-all duration-300 hover:scale-105" 
//                 src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fc38e6bd97-7a54c23a7bb68887dbdd.png" 
//                 alt="IIHH community in action" 
//               />
//             </div>
//             <div className="md:w-1/2">
//               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">Our Vision & Mission</h2>
//               <p className="text-gray-600 text-lg mb-6 leading-relaxed">
//                 IIHH was founded to redefine education by prioritizing emotional intelligence, ethical reasoning, and social responsibility alongside academic rigor. We aim to create a transformative learning ecosystem for school students, college students, educators, and professionals.
//               </p>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Our mission is to cultivate resilient, empathetic individuals who lead with purpose and contribute positively to humanity's future.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="programs" className="py-24 px-6 relative z-10 bg-stone-50">
//         <div className="container mx-auto max-w-7xl">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-16 leading-tight">Our Educational Programs</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {[
//               { 
//                 title: "School Curriculum Integration", 
//                 description: "Humanistic principles integrated into K-12 education, developing emotional intelligence alongside academic excellence.", 
//                 icon: "fa-school", 
//                 gradient: "from-teal-500 to-teal-700", 
//                 textColor: "text-teal-600", 
//                 bgColor: "bg-teal-100" 
//               },
//               { 
//                 title: "Professional Development", 
//                 description: "Workshops and certification programs for educators and professionals seeking to enhance their humanistic leadership skills.", 
//                 icon: "fa-briefcase", 
//                 gradient: "from-orange-400 to-orange-600", 
//                 textColor: "text-orange-500", 
//                 bgColor: "bg-orange-100" 
//               },
//               { 
//                 title: "Global Citizenship Program", 
//                 description: "Immersive experiences fostering cross-cultural understanding and global awareness for students of all ages.", 
//                 icon: "fa-globe", 
//                 gradient: "from-coral-400 to-coral-600", 
//                 textColor: "text-coral-500", 
//                 bgColor: "bg-coral-100" 
//               }
//             ].map((program, index) => (
//               <div key={index} className="group relative">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl`}></div>
//                 <div className="relative bg-white rounded-xl p-8 transform transition-all duration-300 h-full flex flex-col group-hover:translate-x-2 group-hover:-translate-y-2">
//                   <div className={`${program.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
//                     <i className={`fa-solid ${program.icon} text-2xl ${program.textColor}`}></i>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">{program.title}</h3>
//                   <p className="text-gray-600 text-center flex-grow leading-relaxed">{program.description}</p>
//                   <div className="mt-6 text-center group-hover:opacity-100 transition-opacity duration-300 opacity-75">
//                     <a href="#" className={`${program.textColor} font-semibold hover:underline transition duration-300 flex items-center justify-center`}>
//                       Learn More <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="team" className="py-24 relative z-10 bg-gray-100">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-16 leading-tight">Our Leadership Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {[
//               { name: "Dr. Anika Desai", role: "Founder & Director", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" },
//               { name: "Prof. Rajesh Kumar", role: "Curriculum Lead", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" },
//               { name: "Meera Patel", role: "Community Engagement Head", image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" }
//             ].map((member, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-100" 
//                 />
//                 <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
//                 <p className="text-teal-600 mb-3 font-semibold">{member.role}</p>
//                 <p className="text-gray-600 leading-relaxed">Committed to fostering humanistic education and personal growth.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="values" className="bg-orange-50 py-24 relative z-10">
//         <div className="container mx-auto px-6 max-w-7xl">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-16 leading-tight">Our Guiding Principles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//             {[
//               { title: "Empathy", icon: "fa-heart", desc: "Fostering understanding and connection in all interactions.", color: "text-teal-600", bg: "bg-teal-100" },
//               { title: "Resilience", icon: "fa-shield-alt", desc: "Building strength to thrive through life's challenges.", color: "text-orange-500", bg: "bg-orange-100" },
//               { title: "Inclusivity", icon: "fa-globe", desc: "Embracing diversity and global perspectives.", color: "text-coral-500", bg: "bg-coral-100" },
//               { title: "Purpose", icon: "fa-compass", desc: "Guiding learners to find meaning and direction.", color: "text-yellow-400", bg: "bg-yellow-100" }
//             ].map((value, index) => (
//               <div key={index} className={`bg-white rounded-xl p-8 text-center hover:bg-${value.bg.split('-')[1]}-50 transition-all duration-300`}>
//                 <div className={`${value.bg} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
//                   <i className={`fa-solid ${value.icon} text-2xl ${value.color}`}></i>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-800 mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="cta" className="bg-gradient-to-r from-teal-600 to-orange-500 text-white py-20 relative z-10">
//         <div className="container mx-auto px-6 text-center max-w-7xl">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Ready to Join Our Community?</h2>
//           <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Become part of our growing network of educators, students, and professionals dedicated to humanistic principles.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-full hover:bg-teal-50 hover:shadow-lg transition-all duration-300">
//               Join Our Programs
//             </button>
//             <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300">
//               Newsletter Signup
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default AboutUs;