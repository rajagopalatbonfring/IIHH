import React from 'react';
import "../App.css";
import { Link } from "react-router-dom";
import rectangle from '../assets/Group 82.png'
import cloudOpen from '../assets/Group 33.png'
import cloudClose from '../assets/closeCloud.png'
import { ChevronRight } from "lucide-react";
import { PhoneCall } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

function Home() {
  return (
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen"
      >
      <section 
        id="hero" 
        className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-center overflow-hidden flex items-center bg-[#d2a763]/90"
        style={{ backgroundImage: `url(${rectangle})` }}
      >

          {/* Content Wrapper */}
          <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10">
            
            {/* Content on the left */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#ffd278] mb-6 leading-tight tracking-tight drop-shadow-lg">
                IIHH - <span className="block md:inline">International Institute of Horizon Humanism</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                A transformative educational experience fostering humanism, resilience, and purpose for all learners.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <Link 
                  to="/programs" 
                  className="relative bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-xl"
                >
                  <span className="relative z-10 text-[#036e8d]">Explore Programs</span>
                </Link>
                <a
                  href="#testimonials"
                  className="bg-transparent border-2 border-transparent text-white px-5 py-3 rounded-full text-lg font-semibold hover:bg-white/10 hover: transition-all duration-300 flex items-center justify-center relative rotate-dashed-border"
                >
                  <i className="fa-solid fa-play text-[#d2a763]"></i>
                </a>
              </div>
            </div>

            {/* Image on the right */}
            {/* <div className="w-full lg:w-1/2 flex justify-center">
              <img 
                src="src/assets/kids-gesturing-thumbs-up.png" 
                alt="IIHH Community" 
                className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
              />
            </div> */}

          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
            <a href="#what-we-offer" className="text-white">
              <i className="fa-solid fa-chevron-down text-2xl drop-shadow-md"></i>
            </a>
          </div>
        </section>

        {/* About Us section - New addition */}
        <section id="about-us" className="py-24 pb-36 px-8 bg-[#d2a763]/90">

          <div className="container py-10 px-6 mx-auto bg-white border rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-12 px-6">
              <div className="md:w-1/2">
                <h4 className="text-[#036e8d] font-semibold tracking-wider mb-3">OUR STORY</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Top <span className="text-[#036e8d]">Choice</span> For Children</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2018, IIHH has been at the forefront of integrating humanistic principles into education. 
                  We believe that learning should nurture not just the mind, but also the heart and spirit.
                </p>
                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {['Empathy', 'Leadership', 'Humanism', 'Board Mind'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                      </div>
                      <span className="text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a href="#" className="bg-[#d2a763] hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-full flex items-center transition duration-300">
                    See More
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#d2a763] rounded-full flex items-center justify-center mr-3">
                      <PhoneCall className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-600 text-sm">Call Us Now</div>
                      <div className="text-slate-600 font-bold">+108-885-0212</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Left section with images */}
              <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative">
                  {/* Dotted border */}
                  <div className="absolute -top-4 -right-4 -left-4 -bottom-4 border-2 border-dashed border-[#036e8d] rounded-full"></div>
                  
                  {/* Main image container */}
                  <div className="relative bg-[#223668] rounded-full p-6">
                    {/* Main image */}
                    <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                      <img 
                        src="src/assets/front-view-smiley-teacher-explaining-kids.jpg" 
                        alt="Teacher helping student" 
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Small image overlay */}
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3">
                      <img 
                        src="src/assets/mother-helping-daughters-with-drawings.jpg" 
                        alt="Children doing activities" 
                        className="rounded-full border-4 border-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>



{/* //important this */}
        

        <section id="what-we-offer" className="py-24 relative">
          <img src={cloudOpen} className='w-100 absolute -top-16 p-0 m-0' />

          {/* Abstract background with animated elements */}
          <div className="absolute inset-0 bg-[#f9fcfd] overflow-hidden">
            <div className="absolute w-full h-full opacity-100">
              <div className="absolute top-1/4 left-4 w-96 h-96 bg-[#d2a763]/80 rounded-full mix-blend-multiply float"></div>
              <div
                className="absolute top-3/4 left-2/3 w-64 h-64 bg-[#036e8d]/70 rounded-full mix-blend-multiply float"
                style={{ animationDelay: "2s", animationDuration: "5s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#223668]/70 rounded-full mix-blend-multiply float"
                style={{ animationDelay: "3s", animationDuration: "8s" }}
              ></div>
            </div>
          </div>



          <div className="container mx-auto px-8 md:px-14 relative z-10 bg-transparent">
              {/* Section header with creative typography */}
              <div className="max-w-3xl mx-auto text-center mb-24">
                <h4 className="text-[#036e8d] font-semibold tracking-wider mb-3">OUR EXPERTISE</h4>
                <h2 className="text-4xl md:text-6xl font-extrabold text-black-800 mb-6 leading-tight">Transform Your <span className="relative">
                  <span className="relative z-10 text-[#036e8d]">Potential</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-purple-100 -rotate-1 -z-10"></span>
                </span></h2>
                <p className="text-lg text-gray-600 leading-relaxed">We offer comprehensive programs designed to develop the essential skills needed for success in today's complex world.</p>
              </div>


    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-transparent  text-center">
                
              {/* Card 1: Emotional Intelligence */}
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  transitionSpeed={400}
                  scale={1.01}
                  glareEnable={false}
                  perspective={600}
                >
                  <div className="group relative">
                    {/* bg-white/5 backdrop-blur-lg border border-white/30 rounded-lg shadow-2xl */}
                    <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-br from-purple-400/70 to-indigo-600/80 rounded-xl transform transition-all duration-500 scale-105 rotate-2 shadow-2xl"></div>
                    <div className="relative bg-white rounded-xl p-4 transform transition-all duration-300 h-full flex flex-col group-hover:translate-x-2 group-hover:-translate-y-2">
                      <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-brain text-4xl text-purple-600"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Emotional Intelligence</h3>
                      <p className="text-gray-600 flex-grow">Cultivate self-awareness and empathy through reflective practices.</p>
                      <div className="mt-6 group-hover:opacity-100 transition-opacity duration-300">
                        <Link to="/programs/emotional-intelligence" className="text-purple-600 font-medium flex items-center justify-center">
                          Learn more <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tilt>

                {/* Card 2: Social Responsibility */}
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  transitionSpeed={400}
                  scale={1.01}
                  glareEnable={false}
                  perspective={600}
                >
                  <div className="group relative mt-10 md:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/70 to-purple-600/80 rounded-xl transform transition-all duration-500 scale-105 rotate-2 shadow-2xl"></div>
                    <div className="relative bg-white rounded-xl p-4 transform transition-all duration-300 h-full flex flex-col group-hover:translate-x-2 group-hover:-translate-y-2">
                      <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-hands-helping text-4xl text-pink-600"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Responsibility</h3>
                      <p className="text-gray-600 flex-grow">Develop leadership and community engagement skills.</p>
                      <div className="mt-6 group-hover:opacity-100 transition-opacity duration-300">
                        <Link to="/programs/social-responsibility" className="text-pink-600 font-medium flex items-center justify-center">
                          Learn more <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tilt>

                {/* Card 3: Critical Thinking */}
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  transitionSpeed={400}
                  scale={1.01}
                  glareEnable={false}
                  perspective={600}
                >
                  <div className="group relative mt-10 md:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/70 to-cyan-600/80 rounded-xl transform transition-all duration-500 scale-105 rotate-2 shadow-2xl"></div>
                    <div className="relative bg-white rounded-xl p-4 transform transition-all duration-300 h-full flex flex-col group-hover:translate-x-2 group-hover:-translate-y-2">
                      <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-lightbulb text-4xl text-blue-600"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Critical Thinking</h3>
                      <p className="text-gray-600 flex-grow">Enhance problem-solving and ethical reasoning abilities.</p>
                      <div className="mt-6 group-hover:opacity-100 transition-opacity duration-300">
                        <Link to="/programs/critical-thinking" className="text-blue-600 font-medium flex items-center justify-center">
                          Learn more <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>

              <div className="container px-6 py-14">
                <div className="bg-white/5 backdrop-blur-lg border border-white/50 rounded-lg shadow-2xl">
                  <div className="flex flex-col lg:flex-row gap-8 p-6">
                    {/* Left Section - Heading and Description */}
                    <div className="lg:w-1/3 flex flex-col justify-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our Featured <br /> <span className='text-[#036e8d]'>Modules!</span>
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Discover the tools and skills you need to excel, grow, and thrive.
                      </p>
                    </div>

                    {/* Right Section - Cards */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Card 1 */}
                      <div
                        id="course-card-1"
                        className="flex flex-col justify-center rounded-2xl p-6 bg-yellow-200 hover:shadow-lg transition-all"
                      >
                        <i className="fa-solid fa-seedling text-4xl text-green-500 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Foundations of Humanism</h3>
                        <p className="text-gray-600 text-sm">
                          Discover values of empathy, autonomy, and purpose.
                        </p>
                      </div>

                      {/* Card 2 */}
                      <div
                        id="course-card-2"
                        className="flex flex-col justify-center rounded-2xl p-6 bg-orange-300 hover:shadow-lg transition-all"
                      >
                        <i className="fa-solid fa-toolbox text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Life Skills</h3>
                        <p className="text-gray-600 text-sm">
                          Master practical skills for personal and social success.
                        </p>
                      </div>

                      {/* Card 3 */}
                      <div
                        id="course-card-3"
                        className="flex flex-col justify-center rounded-2xl p-6 bg-blue-200 hover:shadow-lg transition-all"
                      >
                        <i className="fa-solid fa-users text-4xl text-orange-500 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Humanistic Leadership</h3>
                        <p className="text-gray-600 text-sm">
                          Inspire with compassion and integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Call to action */}
              <div className="mt-8 text-center">
                <Link to="/programs" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Explore Our Programs
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>

            </div>
          </section>

        <section id="whychooseus" className="relative py-16 md:py-24 bg-[#036e8d]/70 overflow-hidden">

          <img src={cloudClose} className='w-100 absolute -top-12 p-0 m-0' />

          <div className="container mx-auto mt-24 px-4 sm:px-6 lg:px-8">
            {/* Top Section: Image and Text */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 mb-20">
              
              {/* Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500">
                <img
                  src="src/assets/thinkingImg.png"
                  alt="IIHH Transformation"
                  className="w-full h-full object-cover bg-[#223668]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
              </div>

              {/* Text Content */}
              <div className="w-full text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">
                  Why Choose{" "}
                  <span className="text-[#d2a763] relative inline-block">
                    IIHH
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#d2a763] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </span>
                  ?
                </h2>
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#036e8d] mb-6 animate-fade-in-delayed">
                  Because Real Transformation Starts Here
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-delayed">
                  We deliver more than education—we foster profound personal growth through our uniquely humanistic approach that nurtures resilience, empathy, and purpose.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 text-left max-w-xl mx-auto lg:mx-0">
                  {[
                    "Holistic development for students, educators & professionals",
                    "Evidence-based methodologies with measurable outcomes",
                    "Community-centered learning that creates lasting change",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="flex items-center group animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                      <ChevronRight
                        className="text-blue-500 mr-3 group-hover:translate-x-1 transition-transform duration-300"
                        size={20}
                      />
                      <span className="text-gray-700 text-base sm:text-lg">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="w-full flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  icon: "fa-solid fa-heart",
                  title: "Humanistic Focus",
                  color: "bg-blue-500",
                },
                {
                  icon: "fa-solid fa-brain",
                  title: "Emotional Intelligence",
                  color: "bg-purple-500",
                },
                {
                  icon: "fa-solid fa-hands-helping",
                  title: "Social Responsibility",
                  color: "bg-green-500",
                },
                {
                  icon: "fa-solid fa-globe",
                  title: "Global Perspective",
                  color: "bg-yellow-500",
                },
              ].map((item, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  transitionSpeed={400}
                  scale={1.05}
                  glareEnable={false}
                  perspective={1000}
                >
                  <div
                    className={`bg-white px-4 py-2 rounded-full shadow-md hover:shadow-xl transition-all duration-500 flex items-center w-fit max-w-full border border-gray-200 group animate-fade-in-up`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Icon */}
                    <div
                      className={`rounded-full w-12 h-12 flex items-center justify-center text-white text-xl ${item.color} shadow-md group-hover:shadow-xl transition-shadow duration-300 mr-3`}
                    >
                      <i className={item.icon}></i>
                    </div>
                    {/* Title */}
                    <h3 className="text-sm lg:text-base font-semibold text-gray-800 pr-2">
                      {item.title}
                    </h3>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>

        </section>
    

        {/* FAQ Section - New addition */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
              
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
                <div key={index} className="mb-6 bg-white rounded-xl shadow-md overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
                      <span className="transform group-open:rotate-180 transition-transform duration-200">
                        <i className="fa-solid fa-chevron-down text-purple-600"></i>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
              
              <div className="text-center mt-10">
                <Link to="/faq" className="text-purple-600 font-semibold flex items-center justify-center">
                  View all FAQs <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>


        
        {/* Testimonials Section - Enhanced */}
        <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl text-center font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Real stories from students, educators, and parents who experienced the IIHH difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
              {[
                {
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
                  name: "Priya Sharma",
                  desc: '"IIHH has transformed how I teach, making me more empathetic and effective in the classroom."',
                  role: "Educator",
                  stars: 5,
                },
                {
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
                  name: "Aarav Patel",
                  desc: '"The program helped me manage stress and discover my purpose—its been life-changing!"',
                  role: "College Student",
                  stars: 5,
                },
                {
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
                  name: "Neha Gupta",
                  desc: '"My daughters confidence and problem-solving skills have soared thanks to IIHH."',
                  role: "Parent of Riya, Age 12",
                  stars: 5,
                },
              ].map((testimonial, index) => (
                <Tilt
                  key={index}
                  className="tilt-card"
                  tiltMaxAngleX={15} // Max tilt angle for X
                  tiltMaxAngleY={15} // Max tilt angle for Y
                  transitionSpeed={400} // Speed of the tilt transition (ms)
                  scale={1.05} // Slight scale-up on hover
                  glareEnable={false} // Disable glare for a cleaner look
                  perspective={1000} // Perspective for 3D effect
                >
                  <div
                    className={` mt-6 p-6 rounded-xl shadow-lg text-center relative ${
                      index % 2 === 0 ? "bg-[#036e8d] inset-0 backdrop-blur-lg border-[2px] border-white/30" : "bg-[#d2a763] inset-0 backdrop-blur-lg border-[2px] border-white/30"
                    } text-white`}
                  >
                    {/* Avatar positioned above the card */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-yellow-400 bg-yellow-400"
                      />
                    </div>
                    {/* Card content */}
                    <div className="pt-12">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm opacity-80">{testimonial.role}</p>
                      <p className="text-sm italic my-4">{testimonial.desc}</p>
                      <div className="flex justify-center text-yellow-400 mb-3">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/testimonials"
                className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 text-purple-600 font-semibold hover:bg-purple-200 transition-all"
              >
                Read More Success Stories
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </section>



        

        {/* Newsletter Section - New addition */}
        <section className="w-full overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Yellow background with text and form */}
            <div className="bg-yellow-300 md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Better Future for Your Kids</h2>
              <p className="text-gray-800 mb-6">Get our free E-book</p>
              
              <div className="relative max-w-md">
                <input
                  type="email"
                  placeholder="Your E-mail"
                  className="w-full px-4 py-3 rounded-full bg-white border-0 shadow-md focus:outline-none"
                />
                <button 
                  className="absolute right-1 top-1 bg-[#036e8d] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right side - Green background with children image */}
            <div className="bg-emerald-400 md:w-full flex items-center justify-center">
                <img  className="flex items-end" src="src/assets/freepik__adjust__81086.png" alt="" />
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section id="join-cta" className="py-10 bg-[#d2a763]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Join IIHH – Shape the Future</h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              Embark on a humanistic journey that empowers learners of all ages. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all">
                Enroll Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all">
                Request Information
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;








// import '../App.css';
// import heroImg from '../assets/kids-gesturing-thumbs-up.png'
// import rocket from '../assets/airplane.png'
// import bgImg from '../assets/portrait-smiley-little-kid2.jpg'
// import stryImg from '../assets/smiley-childrens-book-day-event.jpg'
// import React, { useEffect } from 'react';
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";


// function Home() {
//   useEffect(() => {
//     const elements = document.querySelectorAll('.scroll-animate');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => elements.forEach((el) => observer.unobserve(el));
//   }, []);

//   return (
//     <div className="h-full text-[#036e8d] ">
//       <main className="pt-20 min-h-screen">
//         <section
//           id="hero"
//           className="relative h-auto min-h-[600px] md:min-h-[700px] overflow-hidden flex items-center scroll-animate"
//           style={{ backgroundImage:`url('../assets/Rectangle 7.png')`,
//             backgroundSize: 'cover',          
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'right',
//             width: '100%',
//             height: '400px',
//           }}
//         >
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-[#036e8d]/10 z-0"></div>
//           {/* <motion.img
//                 src={rocket}
//                 alt="rocket"
//                 className="absolute w-14 md:w-16 top-[25%] left-[100px] z-20"
//                 animate={{
//                   x: ["-100px","1200px"], // curve-like x steps
//                   y: ["-50%", "30%", "60%", "30%", "0%"],               // mimics arc motion
//                   rotate: [60,50,40,30,20,10],                         // synced with the arc
//                 }}
//                 transition={{
//                   duration: 12,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//             /> */}
//           {/* Content Wrapper */}
//           <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
//             {/* Content on the left */}
//             <div className="w-full lg:w-1/2 text-center lg:text-left scroll-animate">
//               <h1 className="text-5xl md:text-7xl font-bubblegum text-[#ffffff] mb-6 leading-tight tracking-tight drop-shadow-lg bg-[#ffcd80] bg-clip-text text-transparent">
//                 IIHH - Internation Institute of Horizon Humanism
//               </h1>
//               <p className="text-xl md:text-2xl text-[#ffffff] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md font-comic">
//                 Transformative education fostering resilience, empathy, and purpose for all learners.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 scroll-animate">
//                 <Link
//                   to="/programs"
//                   className="relative bg-[#f39f5f] text-[#ffffff] px-8 py-4 rounded-full text-xl font-bubblegum overflow-hidden group transition-all duration-500 hover:bg-[#036e8d] hover:shadow-lg"
//                 >
//                   <span className="relative z-10">Explore Programs</span>
//                 </Link>
//                 <a
//                   href="#testimonials"
//                   className="bg-transparent border-2 border-[#ffffff] text-[#ffffff] px-8 py-4 rounded-full text-xl font-bubblegum hover:bg-[#d2a763]/20 hover:border-[#d2a763] transition-all duration-500"
//                 >
//                   See Success Stories
//                 </a>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 flex justify-center">
//                <img 
//                  src={heroImg}
//                  alt="IIHH Community" 
//                  className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
//                />
//              </div> 


//           </div>

//           {/* Scroll Indicator */}
//           <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse z-10">
//             <a href="#about-us" className="text-[#ffffff]">
//               <i className="fa-solid fa-chevron-down text-3xl drop-shadow-md"></i>
//             </a>
//           </div>
//         </section>
//         {/* About Us Section with Parallax Background */}
//         <section 
//           id="about-us" 
//           className="py-20 px-8 bg-cover bg-[#ffffff] bg-fixed bg-center scroll-animate"
//         >
//           {/* <div className="mx-auto px-6 py-12 bg-[#ffffff]/0 border border-black border-dotted"> */}
//             <div className="container mx-auto px-6 bg-[#1f3e59]/90 rounded-lg py-12">
//               <div className="flex flex-col md:flex-row items-center gap-12">
//                 <div className="md:w-1/2 scroll-animate">
//                   <h4 className="text-[#f8c575] font-bubblegum tracking-wider mb-3 text-lg">OUR STORY</h4>
//                   <h2 className="text-4xl md:text-5xl font-bubblegum text-[#1f3e59] mb-6 leading-tight bg-[#ffffff] bg-clip-text text-transparent">
//                     Pioneering Humanistic Education
//                   </h2>
//                   <p className="text-[#ffffff] mb-6 font-comic text-lg leading-relaxed">
//                     Founded in 2018, IIHH leads in integrating humanistic principles into education, nurturing the mind, heart, and spirit.
//                   </p>
//                 </div>
//                 <div className="md:w-1/2 relative scroll-animate">
//                   <div className="w-full h-80 md:h-96 bg-[#d2a763]/20 rounded-lg relative z-10 overflow-hidden shadow-lg">
//                     <img 
//                       src={stryImg} 
//                       alt="Students engaged in learning" 
//                       className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           {/* </div> */}
//         </section>

//         {/* What We Offer Section */}
//         <section id="what-we-offer" className="py-24 bg-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6 md:px-12 relative z-10">
//             <div className="max-w-3xl mx-auto text-center mb-24 scroll-animate">
//               <h4 className="text-[#d2a763] font-bubblegum tracking-wider mb-3 text-lg">OUR EXPERTISE</h4>
//               <h2 className="text-5xl md:text-6xl font-bubblegum text-[#1f3e59] mb-6 leading-tight bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">
//                 Transform Your Potential
//               </h2>
//               <p className="text-xl text-[#036e8d] leading-relaxed font-comic">Comprehensive programs to develop essential skills for success in today's world.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: "fa-solid fa-brain",
//                   title: "Emotional Intelligence",
//                   desc: "Cultivate self-awareness and empathy through reflective practices.",
//                   color: "from-[#036e8d] to-[#d2a763]"
//                 },
//                 {
//                   icon: "fa-solid fa-hands-helping",
//                   title: "Social Responsibility",
//                   desc: "Develop leadership and community engagement skills.",
//                   color: "from-[#d2a763] to-[#036e8d]"
//                 },
//                 {
//                   icon: "fa-solid fa-lightbulb",
//                   title: "Critical Thinking",
//                   desc: "Enhance problem-solving and ethical reasoning abilities.",
//                   color: "from-[#036e8d] to-[#d2a763]"
//                 },
//               ].map((item, index) => (
//                 <div key={index} className="group relative scroll-animate">
//                   <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl transition-all duration-500 group-hover:shadow-lg`}></div>
//                   <div className="relative bg-[#ffffff] rounded-xl p-8 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2 shadow-lg">
//                     <div className="bg-[#d2a763]/20 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto transition-transform duration-500 group-hover:scale-105">
//                       <i className={`${item.icon} text-4xl text-[#036e8d]`}></i>
//                     </div>
//                     <h3 className="text-2xl font-bubblegum text-[#036e8d] mb-4 transition-transform duration-500 group-hover:scale-105">{item.title}</h3>
//                     <p className="text-[#036e8d] flex-grow font-comic text-lg">{item.desc}</p>
//                     <div className="mt-6 transition-opacity duration-500 group-hover:opacity-100">
//                       <Link to={`/programs/${item.title.toLowerCase().replace(' ', '-')}`} className="text-[#d2a763] font-comic flex items-center justify-center transition-transform duration-500 hover:scale-105">
//                         Learn more <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="container mx-auto px-6 py-20 pb-0 scroll-animate">
//               <h2 className="text-4xl font-bubblegum text-[#036e8d] mb-16 text-center bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">Our Featured Modules</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {[
//                   {
//                     icon: "fa-solid fa-seedling",
//                     title: "Foundations of Humanism",
//                     desc: "Discover values of empathy, autonomy, and purpose.",
//                     color: "text-[#d2a763]"
//                   },
//                   {
//                     icon: "fa-solid fa-toolbox",
//                     title: "Life Skills",
//                     desc: "Master practical skills for personal and social success.",
//                     color: "text-[#036e8d]"
//                   },
//                   {
//                     icon: "fa-solid fa-users",
//                     title: "Humanistic Leadership",
//                     desc: "Inspire with compassion and integrity.",
//                     color: "text-[#d2a763]"
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="flex flex-col justify-center bg-[#ffffff] rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl scroll-animate">
//                     <i className={`${item.icon} text-4xl ${item.color} mb-6 transition-transform duration-500 hover:scale-110`}></i>
//                     <h3 className="text-2xl font-bubblegum text-[#036e8d] mb-4 transition-transform duration-500 hover:scale-105">{item.title}</h3>
//                     <p className="text-[#036e8d] mb-6 font-comic text-lg">{item.desc}</p>
//                     <div>
//                       <Link to="/programs" className={`text-${item.color} font-comic flex items-center transition-transform duration-500 hover:scale-105`}>
//                         Explore module <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-20 text-center scroll-animate">
//               <Link to="/programs" className="inline-flex items-center px-8 py-4 rounded-full bg-[#d2a763] text-[#ffffff] font-bubblegum text-xl transition-all duration-500 hover:bg-[#036e8d] hover:shadow-lg">
//                 Explore Our Programs
//                 <i className="fa-solid fa-arrow-right ml-2"></i>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Video Section */}
//         <section id="video-showcase" className="py-20 bg-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto text-center mb-12 scroll-animate">
//               <h2 className="text-5xl font-bubblegum text-[#036e8d] mb-6 bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">See IIHH in Action</h2>
//               <p className="text-xl text-[#036e8d] font-comic">Discover how our humanistic approach transforms education and empowers learners.</p>
//             </div>
//             <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#036e8d] flex items-center justify-center scroll-animate">
//               <img 
//                 src="/api/placeholder/1280/720" 
//                 alt="Video thumbnail" 
//                 className="w-full h-full object-cover opacity-75 rounded-lg transition-transform duration-500"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="w-20 h-20 bg-[#d2a763] bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-500">
//                   <i className="fa-solid fa-play text-[#ffffff] text-2xl ml-1"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Section */}
//         <section id="why-choose" className="relative h-auto md:h-[350px] bg-gradient-to-r from-[#036e8d]/20 to-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6 py-16 md:py-20">
//             <div className="flex flex-col items-center text-center scroll-animate">
//               <h2 className="text-5xl md:text-6xl font-bubblegum text-[#1f3e59] mb-6 transition-transform duration-500">
//                 Why Choose IIHH?
//               </h2>
//               <p className="text-xl md:text-2xl text-[#036e8d] max-w-2xl font-comic">
//                 Unique humanistic education fostering resilience, empathy, and purpose for all.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section id="benefits" className="py-20 bg-[#ffffff] scroll-animate">
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   icon: "fa-solid fa-heart",
//                   title: "Humanistic Focus",
//                   desc: "Education rooted in empathy, autonomy, and purpose.",
//                   color: "text-[#d2a763] bg-[#d2a763]/10"
//                 },
//                 {
//                   icon: "fa-solid fa-brain",
//                   title: "Emotional Intelligence",
//                   desc: "Developing self-awareness and resilience.",
//                   color: "text-[#036e8d] bg-[#036e8d]/10"
//                 },
//                 {
//                   icon: "fa-solid fa-hands-helping",
//                   title: "Social Responsibility",
//                   desc: "Fostering ethical leadership and engagement.",
//                   color: "text-[#d2a763] bg-[#d2a763]/10"
//                 },
//                 {
//                   icon: "fa-solid fa-globe",
//                   title: "Global Perspective",
//                   desc: "Building cultural intelligence and inclusivity.",
//                   color: "text-[#036e8d] bg-[#036e8d]/10"
//                 },
//               ].map((item, index) => (
//                 <div key={index} className={`rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl ${item.color} scroll-animate`}>
//                   <div className={`text-4xl mb-4 ${item.color} transition-transform duration-500`}>
//                     <i className={item.icon}></i>
//                   </div>
//                   <h3 className="text-xl font-bubblegum text-[#036e8d] mb-4 transition-transform duration-500">{item.title}</h3>
//                   <p className="text-[#036e8d] font-comic text-lg">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section with Parallax Background */}
//         <section 
//           id="testimonials" 
//           className="py-20 bg-[#ffffff] bg-cover bg-fixed bg-center scroll-animate"
//           style={{ backgroundImage: "url('/api/placeholder/1920/1080?text=Community+Moments')" }}
//         >
//           <div className="container mx-auto px-6 bg-[#ffffff]/90 rounded-lg py-12">
//             <h2 className="text-5xl font-bubblegum text-[#036e8d] mb-4 text-center bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500 scroll-animate">What Our Community Says</h2>
//             <p className="text-xl text-center text-[#036e8d] mb-12 max-w-2xl mx-auto font-comic scroll-animate">
//               Real stories from students, educators, and parents who experienced the IIHH difference.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
//               {[
//                 {
//                   img: "/api/placeholder/80/80",
//                   name: "Priya Sharma",
//                   desc: '"IIHH transformed how I teach, making me more empathetic."',
//                   role: "Educator",
//                   stars: 5
//                 },
//                 {
//                   img: "/api/placeholder/80/80",
//                   name: "Aarav Patel",
//                   desc: '"The program helped me find my purpose—life-changing!"',
//                   role: "College Student",
//                   stars: 5
//                 },
//                 {
//                   img: "/api/placeholder/80/80",
//                   name: "Neha Gupta",
//                   desc: '"My daughter’s confidence soared thanks to IIHH."',
//                   role: "Parent of Riya, Age 12",
//                   stars: 5
//                 },
//               ].map((testimonial, index) => (
//                 <div key={index} className="bg-[#ffffff] p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl scroll-animate">
//                   <div className="absolute -top-4 -left-4 text-[#d2a763] text-6xl opacity-40">
//                     <i className="fa-solid fa-quote-left"></i>
//                   </div>
//                   <div className="flex items-center mb-4">
//                     <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
//                     <div>
//                       <h3 className="font-bubblegum text-[#036e8d] text-lg">{testimonial.name}</h3>
//                       <p className="text-[#036e8d] font-comic">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <div className="flex text-[#d2a763] mb-3">
//                     {[...Array(testimonial.stars)].map((_, i) => (
//                       <i key={i} className="fa-solid fa-star"></i>
//                     ))}
//                   </div>
//                   <p className="text-[#036e8d] italic font-comic text-lg">{testimonial.desc}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="text-center mt-12 scroll-animate">
//               <Link to="/testimonials" className="inline-flex items-center px-6 py-3 rounded-full bg-[#d2a763] text-[#ffffff] font-bubblegum text-lg hover:bg-[#036e8d] transition-all duration-500">
//                 Read More Success Stories
//                 <i className="fa-solid fa-arrow-right ml-2"></i>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Newsletter Section */}
//         <section id="newsletter" className="py-20 bg-[#036e8d]/90 scroll-animate">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto bg-[#ffffff]/10 rounded-2xl p-10 shadow-xl scroll-animate">
//               <div className="flex flex-col md:flex-row items-center">
//                 <div className="md:w-2/3 mb-8 md:mb-0 scroll-animate">
//                   <h2 className="text-4xl font-bubblegum text-[#ffffff] mb-4 bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500">Stay Updated with IIHH</h2>
//                   <p className="text-[#ffffff] text-opacity-90 font-comic text-lg">
//                     Get insights on humanistic education, event invitations, and exclusive resources.
//                   </p>
//                 </div>
//                 <div className="md:w-1/3 w-full scroll-animate">
//                   <form className="flex flex-col space-y-3">
//                     <input 
//                       type="email" 
//                       placeholder="Your email address" 
//                       className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d2a763] font-comic text-[#036e8d]"
//                     />
//                     <button 
//                       type="submit" 
//                       className="bg-[#d2a763] text-[#ffffff] px-4 py-3 rounded-lg font-bubblegum text-lg hover:bg-[#ffffff] hover:text-[#036e8d] transition-all duration-500"
//                     >
//                       Subscribe Now
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section id="join-cta" className="py-20 bg-gradient-to-r from-[#036e8d] to-[#d2a763] scroll-animate">
//           <div className="container mx-auto px-6 text-center">
//             <h2 className="text-5xl font-bubblegum text-[#ffffff] mb-8 bg-[#1f3e59] bg-clip-text text-transparent transition-transform duration-500 hover: scroll-animate">Join IIHH – Shape the Future</h2>
//             <p className="text-2xl text-[#ffffff] mb-12 max-w-2xl mx-auto font-comic scroll-animate">
//               Embark on a humanistic journey that empowers learners of all ages.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-6 scroll-animate">
//               <button className="bg-[#ffffff] text-[#036e8d] px-12 py-4 rounded-full text-xl font-bubblegum hover:bg-[#d2a763] hover:text-[#ffffff] transition-all duration-500 hover:shadow-xl">
//                 Enroll Now
//               </button>
//               <button className="bg-transparent border-2 border-[#ffffff] text-[#ffffff] px-12 py-4 rounded-full text-xl font-bubblegum hover:bg-[#d2a763] hover:border-[#d2a763] transition-all duration-500">
//                 Request Information
//               </button>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Home;
