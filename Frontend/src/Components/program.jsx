
import React, { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";
import "../App.css";
import FacultyCarousel from "./facultyCarousel";

import programBgImage from '../assets/programspage_Intro-img.jpg';

import ourProgramImg from '../assets/programs-pageHeroimg.jpg';

import programAppBoyImg from "../assets/programpageImg1.png";

import programCta from '../assets/cta-aboutus.jpg';

import collabWorkImg from "../assets/Groupworkintheclassroom.jpeg";
import cloudOpen from '../assets/Group 33.png';
import cloudClose from '../assets/closeCloud.png';

import graduateCap from '../assets/academicLogoProgrampg.png';


const colorClassMap = {
  green: {
    text: "text-green-600",
    border: "border-green-200",
    hoverText: "hover:text-green-800",
  },
  blue: {
    text: "text-blue-600",
    border: "border-blue-200",
    hoverText: "hover:text-blue-800",
  },
  red: {
    text: "text-red-600",
    border: "border-red-200",
    hoverText: "hover:text-red-800",
  },
  yellow: {
    text: "text-yellow-600",
    border: "border-yellow-200",
    hoverText: "hover:text-yellow-800",
  },
  purple: {
    text: "text-purple-600",
    border: "border-purple-200",
    hoverText: "hover:text-purple-800",
  },
  pink: {
    text: "text-pink-600",
    border: "border-pink-200",
    hoverText: "hover:text-pink-800",
  },
  indigo: {
    text: "text-indigo-600",
    border: "border-indigo-200",
    hoverText: "hover:text-indigo-800",
  },
  orange:{
    text: "text-orange-600",
    border: "border-orange-200",
    hoverText:"hover:text-orange-800"
  },
  teal:{
    text:"text-teal-600",
    border:"border-teal-200",
    hoverText:"hover:text-teal-800"
  },
  cyan:{
    text:"text-cyan-600",
    border:"border-cyan-200",
    hoverText:"hover:text-cyan-800"
  }
};


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
  const [isHovered, setIsHovered] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  // Generate random floating elements on mount
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 4 + Math.random() * 8,
    }));
    setFloatingElements(elements);
  }, []);

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
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  // In action variables, functions and other starts here!!
   
  const learningItems = [
    "Collaborative Learning",
    "Outdoor Team Building",
    "Project Presentations",
    "Creative Problem Solving",
    "Leadership Games",
    "Fun Experiments",
    "Mind Mapping",
    "Design Thinking",
  ];

  const groupSize = 3; // 3 items per slide
  const slideGroups = Array.from({ length: Math.ceil(learningItems.length / groupSize) }, (_, i) =>
    learningItems.slice(i * groupSize, i * groupSize + groupSize)
  );

  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % slideGroups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen">

        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-auto min-h-[500px] md:min-h-[600px] 2xl:h-[800px] bg-cover bg-center overflow-hidden flex items-center bg-[#223668] pt-20 pb-24"
          style={{ backgroundImage: `url(${programBgImage})` }}
        >
          <div className="absolute inset-0 bg-[#223668]/20 z-0"></div>
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
        </section>


        {/* Our Programs Section */}
        <section className="pb-4 lg:pb-20 bg-[#d2a763] relative overflow-hidden">
          
          {/* Animated Floating Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">

            {/* Dynamic floating particles */}
            {floatingElements.map((element) => (
              <div
                key={element.id}
                className="absolute bg-white/30 rounded-full animate-float"
                style={{
                  left: `${element.x}%`,
                  top: `${element.y}%`,
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${element.duration}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto mt-10 px-4 pb-10 sm:px-8 md:px-14 relative z-10">
            
            {/* Split Layout - Adjusted grid to 5/12 and 7/12 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[500px]">

              {/* mobile heading */}
              <div className="block lg:hidden lg:col-span-7 flex items-center justify-start p-8 pl-8 animate-slideInRight">
                <div className="max-w-2xl w-full">
                  <h4 className="text-gray-900 text-left mb-4 font-bold tracking-wider text-sm md:text-base uppercase animate-fadeInDown">
                    OUR PROGRAM
                  </h4>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
                    A Year of <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Humanistic</span> <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Transformation</span> and <br />Empowered <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300"> Learning</span>
                  </h1>
                </div>
              </div>

              {/* Left Side - Interactive Image - 5/12 width */}
              <div className="pb-20 pt-10 lg:col-span-5 relative flex items-center justify-center p-6">
                <div 
                  className="relative cursor-pointer animate-slideInLeft"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Animated Background Elements */}
                  <div className={`absolute -inset-2 transition-all duration-700 ease-out animate-rotate-slow ${
                    isHovered ? 'scale-10 rotate-12' : 'scale-100 rotate-6'
                  }`}>
                    <div className="w-full h-full bg-[#036e8d] rounded-3xl opacity-80 animate-glow"></div>
                  </div>
                  
                  {/* Secondary Background Layer */}
                  <div className={`absolute -inset-2 transition-all duration-500 delay-100 ease-out animate-rotate-reverse ${
                    isHovered ? 'scale-105 -rotate-3' : 'scale-100 rotate-0'
                  }`}>
                    <div className="w-full h-full bg-white/40 rounded-3xl backdrop-blur-sm animate-shimmer"></div>
                  </div>

                  {/* Floating Orbs with continuous movement */}
                  <div className={`absolute -top-4 -right-4 w-6 h-6 bg-white rounded-full transition-all duration-1000 animate-orbit ${
                    isHovered ? 'animate-bounce scale-150' : 'scale-100'
                  }`}></div>
                  <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full transition-all duration-700 delay-200 animate-float-reverse ${
                    isHovered ? 'animate-pulse scale-125' : 'scale-100'
                  }`}></div>
                  <div className={`absolute top-1/2 -right-6 w-3 h-3 bg-white rounded-full transition-all duration-800 delay-300 animate-wiggle ${
                    isHovered ? 'animate-ping scale-200' : 'scale-100'
                  }`}></div>

                  {/* Main Image with Hover Effects */}
                  <div className={`relative transition-all duration-500 ease-out animate-gentle-sway ${
                    isHovered ? 'scale-105 rotate-2' : 'scale-100 rotate-0'
                  }`}>
                    <img
                      src={ourProgramImg}
                      alt="Students collaborating on projects"
                      className={`rounded-3xl shadow-2xl object-cover w-full max-w-sm h-72 border-4 transition-all duration-500 animate-subtle-zoom ${
                        isHovered ? 'border-[#d2a763] shadow-3xl brightness-110' : 'border-white shadow-2xl brightness-100'
                      }`}
                    />
                    
                    {/* Overlay on Hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-t from-[#223668]/60 via-transparent to-transparent transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className={`transform transition-all duration-700 ${
                          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}>
                          <h3 className="text-white font-bold text-lg mb-2 animate-typing">Transformative Learning</h3>
                          <p className="text-gray-200 text-sm animate-slideInUp">Experience hands-on education that shapes your future</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Ring Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-[#036e8d] transition-all duration-1000 animate-pulse-ring ${
                    isHovered ? 'scale-110 opacity-60' : 'scale-100 opacity-30'
                  }`}></div>
                  
                  {/* Ripple Effect */}
                  <div className={`absolute inset-0 rounded-3xl border border-white/50 transition-all duration-1200 animate-ripple ${
                    isHovered ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
                  }`}></div>

                  {/* Floating Text Badge */}
                  <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-600 animate-bob ${
                    isHovered ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-80 scale-95'
                  }`}>
                    <div className="bg-[#036e8d] text-center text-white px-10 py-2 rounded-full text-xs font-semibold shadow-lg animate-glow-soft">
                      Interactive Experience
                    </div>
                  </div>

                  {/* Side Decorative Elements with continuous animation */}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full transition-all duration-800 animate-slide-lines ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-60 -translate-x-4'
                  }`}>
                    <div className="w-12 h-1 bg-[#036e8d] rounded animate-expand"></div>
                    <div className="w-8 h-1 bg-white rounded mt-2 animate-expand" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-6 h-1 bg-[#036e8d] rounded mt-2 animate-expand" style={{animationDelay: '0.4s'}}></div>
                  </div>

                  <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full transition-all duration-800 delay-100 animate-slide-lines-reverse ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-4'
                  }`}>
                    <div className="w-12 h-1 bg-white rounded animate-expand"></div>
                    <div className="w-8 h-1 bg-[#036e8d] rounded mt-2 animate-expand" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-6 h-1 bg-white rounded mt-2 animate-expand" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>

              {/* sub para mobile view */}
              <div className="block lg:hidden lg:col-span-7 flex items-center justify-start p-8 pl-8 animate-slideInRight">
                <div className="max-w-2xl w-full">
                  <div className="animate-fadeInUp animate-subtle-float" style={{animationDelay: '0.3s'}}>
                    <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700">
                      At IIHH, education transcends traditional boundaries. Our one-year program integrates ten thoughtfully designed modules that foster empathy, resilience, and critical thinking—preparing learners to lead with compassion and creativity in a rapidly evolving world.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Content with animations - 7/12 width */}
              <div className="hidden lg:block lg:col-span-7 flex items-center justify-start p-8 pl-8 animate-slideInRight">
                <div className="max-w-2xl w-full">
                  <h4 className="text-gray-900 text-left mb-4 font-bold tracking-wider text-sm md:text-base uppercase animate-fadeInDown">
                    OUR PROGRAM
                  </h4>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
                    A Year of <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Humanistic</span> <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Transformation</span> and <br />Empowered <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300"> Learning</span>
                  </h1>
                  <div className="animate-fadeInUp animate-subtle-float" style={{animationDelay: '0.3s'}}>
                    <p className="text-gray-800 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium relative bg-white backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-sm hover:scale-105 transition-all duration-700">
                      At IIHH, education transcends traditional boundaries. Our one-year program integrates ten thoughtfully designed modules that foster empathy, resilience, and critical thinking—preparing learners to lead with compassion and creativity in a rapidly evolving world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
            
            @keyframes float-reverse {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(10px); }
            }
            
            @keyframes gentle-sway {
              0%, 100% { transform: translateX(0px) rotate(0deg); }
              25% { transform: translateX(2px) rotate(0.5deg); }
              75% { transform: translateX(-2px) rotate(-0.5deg); }
            }
            
            @keyframes rotate-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            @keyframes rotate-reverse {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(-360deg); }
            }
            
            @keyframes glow {
              0%, 100% { box-shadow: 0 0 20px rgba(210, 167, 99, 0.3); }
              50% { box-shadow: 0 0 40px rgba(210, 167, 99, 0.6); }
            }
            
            @keyframes glow-soft {
              0%, 100% { box-shadow: 0 0 10px rgba(3, 110, 141, 0.4); }
              50% { box-shadow: 0 0 20px rgba(3, 110, 141, 0.7); }
            }
            
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            
            @keyframes orbit {
              0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
              100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
            }
            
            @keyframes wiggle {
              0%, 100% { transform: rotate(-3deg); }
              50% { transform: rotate(3deg); }
            }
            
            @keyframes bob {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            
            @keyframes pulse-ring {
              0% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.05); opacity: 0.4; }
              100% { transform: scale(1); opacity: 0.8; }
            }
            
            @keyframes ripple {
              0% { transform: scale(1); opacity: 1; }
              100% { transform: scale(1.3); opacity: 0; }
            }
            
            @keyframes expand {
              0% { width: 0; }
              100% { width: var(--target-width, 100%); }
            }
            
            @keyframes text-glow {
              0%, 100% { text-shadow: 0 0 10px rgba(210, 167, 99, 0.5); }
              50% { text-shadow: 0 0 20px rgba(210, 167, 99, 0.8); }
            }
            
            @keyframes subtle-zoom {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.01); }
            }
            
            @keyframes subtle-float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes fadeInDown {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
            
            .animate-float-reverse {
              animation: float-reverse 3s ease-in-out infinite;
            }
            
            .animate-gentle-sway {
              animation: gentle-sway 6s ease-in-out infinite;
            }
            
            .animate-rotate-slow {
              animation: rotate-slow 20s linear infinite;
            }
            
            .animate-rotate-reverse {
              animation: rotate-reverse 25s linear infinite;
            }
            
            .animate-glow {
              animation: glow 3s ease-in-out infinite;
            }
            
            .animate-glow-soft {
              animation: glow-soft 2s ease-in-out infinite;
            }
            
            .animate-shimmer {
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
              background-size: 200% 100%;
              animation: shimmer 3s ease-in-out infinite;
            }
            
            .animate-orbit {
              animation: orbit 8s linear infinite;
            }
            
            .animate-wiggle {
              animation: wiggle 2s ease-in-out infinite;
            }
            
            .animate-bob {
              animation: bob 2s ease-in-out infinite;
            }
            
            .animate-pulse-ring {
              animation: pulse-ring 2s ease-in-out infinite;
            }
            
            .animate-ripple {
              animation: ripple 3s ease-out infinite;
            }
            
            .animate-expand {
              animation: expand 1s ease-out forwards;
            }
            
            .animate-text-glow {
              animation: text-glow 3s ease-in-out infinite;
            }
            
            .animate-subtle-zoom {
              animation: subtle-zoom 8s ease-in-out infinite;
            }
            
            .animate-subtle-float {
              animation: subtle-float 4s ease-in-out infinite;
            }
            
            .animate-fadeInUp {
              animation: fadeInUp 1s ease-out forwards;
            }
            
            .animate-fadeInDown {
              animation: fadeInDown 1s ease-out forwards;
            }
            
            .animate-slideInLeft {
              animation: slideInLeft 1s ease-out forwards;
            }
            
            .animate-slideInRight {
              animation: slideInRight 1s ease-out forwards;
            }
            
            .animate-slideInUp {
              animation: slideInUp 0.6s ease-out forwards;
            }
            
            .shadow-3xl {
              box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
            }
          `}</style>
        </section>


        {/* Program Modules Section */}
        <section id="program-modules" className="py-16 relative bg-[#f9fcfd]">
          <img src={cloudOpen} 
            alt="Cloud decoration" 
            className="w-full absolute top-0 left-0 object-cover object-top" 
            style={{ transform: 'translateY(-50%)'}}
          />
          <div className="container mx-auto sm:px-6 relative">
            <div className="absolute inset-0 opacity-5 z-[-1]">
              <div className="absolute top-10 left-20 w-24 h-24 border-2 border-[#036e8d] rounded-full"></div>
              <div className="absolute bottom-20 right-16 w-20 h-20 border-2 border-[#d2a763] rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#036e8d] rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-3">
              Program <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Modules</span>
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-12">
              Explore our ten transformative modules, each designed to nurture essential skills, values, and holistic growth
            </p>
            
            <div className={`grid grid-cols-1 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${showAll ? 'auto-rows-fr' : ''}`}>
              {modules.slice(0, showAll ? 10 : 8).map((module, index) => {
                const colorClasses = colorClassMap[module.color] || {
                  text: "text-gray-600",
                  border: "border-gray-200",
                  hoverText: "hover:text-gray-800"
                };

                return (
                  <div
                    key={module.id}
                    className={`relative bg-white border-2 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${animationTrigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${colorClasses.border}
                    ${showAll && index === 8 ? 'lg:col-start-2' : ''}
                    ${showAll && index === 9 ? 'lg:col-start-3' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedModule(module)}
                  >
                    <div className="absolute top-4 right-4 text-gray-500 font-semibold text-lg">
                      {module.id}
                    </div>
                    <i className={`fa-solid ${module.icon} text-4xl mb-4 ${colorClasses.text}`}></i>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{module.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{module.subtitle}</p>
                    <div className="relative overflow-hidden h-0 group-hover:h-16 transition-all duration-300">
                      <p className="text-gray-500 text-xs absolute bottom-0">
                        {module.description.slice(0, 80)}...
                      </p>
                    </div>
                    <button
                      className={`mt-4 bg-none font-semibold transition-colors duration-200 ${colorClasses.text} ${colorClasses.hoverText}`}
                    >
                      View Details
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center mt-8 relative z-10">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="flex items-center gap-2 text-[#036e8d] hover:underline font-semibold transition-all duration-200"
            >
              {showAll ? 'Show Less' : 'View All Modules'}
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
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
        </section>


        {/* Curriculum Overview Section */}
        <section id="curriculum-pathway" className="py-16 bg-[#f9fcfd] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-20 w-24 h-24 border-2 border-[#036e8d] rounded-full"></div>
            <div className="absolute bottom-20 right-16 w-20 h-20 border-2 border-[#d2a763] rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#036e8d] rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                Curriculum <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Pathway</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Navigate through interconnected learning modules designed for holistic development
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="max-w-6xl mx-auto">

              {/* Desktop Timeline */}
              <div className="hidden md:block">
                <div className="relative">
                  {/* Horizontal Line */}
                  <div className="absolute top-10 left-36 right-36 h-1 bg-[#036e8d] rounded-full transform -translate-y-1/2"></div>
                  
                  {/* Timeline Items */}
                  <div className="flex justify-between items-center">
                    {/* Term 1 */}
                    <div className="flex-1 text-center relative group hover:scale-105 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#036e8d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white z-10 relative">
                        <i className="fa-solid fa-book-open text-white text-xl"></i>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-800">Term 1: Foundation</h3>
                        <p className="text-sm text-gray-600 mb-4">Building Your Core</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Values & Self-Discovery</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Critical Thinking</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Emotional Intelligence</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Term 2 */}
                    <div className="flex-1 text-center relative mx-8 group hover:scale-105 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#d2a763] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white z-10 relative">
                        <i className="fa-solid fa-rocket text-white text-xl"></i>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#d2a763] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-800">Term 2: Development</h3>
                        <p className="text-sm text-gray-600 mb-4">Expanding Skills</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check  text-[#d2a763] mr-2"></i>
                            <span>Advanced Communication</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check  text-[#d2a763] mr-2"></i>
                            <span>Problem Solving</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check  text-[#d2a763] mr-2"></i>
                            <span>Financial Literacy</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Term 3 */}
                    <div className="flex-1 text-center relative group hover:scale-105 transition-transform duration-300">
                      <div className="w-20 h-20 bg-[#036e8d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white z-10 relative">
                        <i className="fa-solid fa-trophy text-white text-xl"></i>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-800">Term 3: Mastery</h3>
                        <p className="text-sm text-gray-600 mb-4">Leading Impact</p>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Ethical Leadership</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Community Impact</span>
                          </div>
                          <div className="flex items-center">
                            <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                            <span>Capstone Project</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden space-y-6 relative">
                {/* Vertical Connecting Line */}
                <div className="absolute left-[25px] top-[100px] h-[calc(98%-12rem)] w-1 bg-[#036e8d] rounded-full z-0"></div>

                {/* Term 1 */}
                <div className="flex items-center relative ">
                  <div className="w-14 h-14 bg-[#036e8d] rounded-full flex items-center justify-center mr-2 shadow-lg border-4 border-white flex-shrink-0 z-10 hover:scale-110 transition-all duration-300">
                    <i className="fa-solid fa-book-open text-white text-sm"></i>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-2">Term 1: Foundation</h3>
                    <p className="text-sm text-gray-600 mb-3">Building Your Core</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Values & Self-Discovery</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Critical Thinking</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Emotional Intelligence</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Term 2 */}
                <div className="flex items-center relative">
                  <div className="w-14 h-14 bg-[#d2a763] rounded-full flex items-center justify-center mr-2 shadow-lg border-4 border-white flex-shrink-0 z-10 hover:scale-110 transition-all duration-300">
                    <i className="fa-solid fa-rocket text-white text-sm"></i>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#d2a763] flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-2">Term 2: Development</h3>
                    <p className="text-sm text-gray-600 mb-3">Expanding Skills</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#d2a763] mr-2"></i>
                        <span>Advanced Communication</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#d2a763] mr-2"></i>
                        <span>Problem Solving</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#d2a763] mr-2"></i>
                        <span>Financial Literacy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Term 3 */}
                <div className="flex items-center relative">
                  <div className="w-14 h-14 bg-[#036e8d] rounded-full flex items-center justify-center mr-2 shadow-lg border-4 border-white flex-shrink-0 z-10 hover:scale-110 transition-all duration-300">
                    <i className="fa-solid fa-trophy text-white text-sm"></i>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#036e8d] flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-2">Term 3: Mastery</h3>
                    <p className="text-sm text-gray-600 mb-3">Leading Impact</p>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Ethical Leadership</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Community Impact</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-circle-check text-[#036e8d] mr-2"></i>
                        <span>Capstone Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* Program Benefits Section */}
        <section id="program-benefits" className="pb-6 pt-4 bg-[#f9fcfd] relative overflow-hidden">
          {/* Decorative Background Circles */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#036e8d] rounded-full"></div>
            <div className="absolute bottom-16 right-24 w-24 h-24 border-2 border-[#d2a763] rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#d2a763] rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-8 md:px-14 relative z-10 flex flex-col items-center">
            {/* Floating Card */}
            <div className="bg-[#036e8d] rounded-3xl py-10 px-6 sm:px-12 shadow-2xl max-w-4xl w-full relative mb-8">
              <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-3">
                Program <span className="text-[#d2a763] inline-block transform hover:scale-x-105 duration-300">Benefits</span>
              </h2>
              <p className="text-lg text-center text-white max-w-2xl mx-auto leading-relaxed mb-16">
                IIHH’s program empowers you with more than knowledge—gain the resilience, well-being, and leadership skills to thrive in every aspect of life.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center">
                {[
                  { title: "Resilience", icon: "fa-shield-alt", description: "Navigate challenges with confidence" },
                  { title: "Well-Being", icon: "fa-heart-pulse", description: "Balance mind, body, and emotions" },
                  { title: "Ethical Leadership", icon: "fa-lightbulb", description: "Lead with compassion and integrity" },
                  { title: "Global Citizenship", icon: "fa-globe", description: "Embrace diversity and make an impact" },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors duration-300 shadow-lg">
                      <i className={`fa-solid ${benefit.icon} text-2xl sm:text-3xl text-white`}></i>
                    </div>
                    <span className="text-white font-semibold text-base mb-1">
                      {benefit.title}
                    </span>
                    <span className="text-white/80 text-xs md:text-sm">
                      {benefit.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section id="program-cta" className="min-w-1/2 px-4 pb-28 bg-[#f9fcfd] relative overflow-hidden">
          <div className="w-full text-center mt-12 py-16 bg-[#036e8d] rounded-full p-8 text-white shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Begin Your Transformation?</h3>
            <p className="text-sm md:text-base mb-6 text-white/90">
              Start your journey with IIHH and unlock your full potential through our transformative curriculum.
            </p>
            <div className="px-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="hidden sm:block bg-white text-[#036e8d] px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Download Curriculum Guide
                <i className="fa-solid fa-download ml-2"></i>
              </button>
              
              <button className="block sm:hidden bg-white text-[#036e8d] px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Curriculum Guide
                <i className="fa-solid fa-download ml-2"></i>
              </button>

              <button className="bg-white text-[#036e8d] px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Join IIHH
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>

            </div>
          </div>
        </section>
        

        
        {/* Learning in Action Section */}
        <section id="learning-showcase" className="relative py-16 pt-40 bg-[#036e8d]">
          <img 
            src={cloudClose} 
            alt="Cloud decoration" 
            className="w-full absolute top-0 left-0 object-cover object-top" 
            style={{ transform: 'translateY(-50%)'}}
          />

          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                <span className="text-white">Learning in </span>
                <span className="text-[#ffd278] inline-block transform hover:scale-x-105 duration-300">Action</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                See IIHH students collaborate, create, and lead through hands-on activities, building confidence and teamwork.
              </p>
            </div>

            {/* Carousel */}
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ width: `${slideGroups.length * 100}%`, transform: `translateX(-${currIndex * (100 / slideGroups.length)}%)` }}
              >
                {slideGroups.map((group, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 w-full">
                    {group.map((title, subIdx) => (
                      <div key={subIdx} className="rounded-xl overflow-hidden shadow-lg group relative">
                        <img
                          className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                          src={collabWorkImg}
                          alt={title}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#223668]/70 to-transparent p-4">
                          <h3 className="text-white text-lg font-bold">{title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {slideGroups.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currIndex ? "bg-[#ffd278]" : "bg-white/40"
                  } transition-all duration-300`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>


        {/* Faculty Section */}
        <FacultyCarousel/>


        {/* Application Process Section */}
        <section id="application-process" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                  Get amazing education in 4<br />
                  <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">simple steps</span>
                </h2>
                <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto px-4">
                  Join our transformative program through our streamlined application process.
                </p>
              </div>

              {/* Main Content */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 order-1 p-6">
                <div
                  className="relative w-full max-w-lg mx-auto"
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
                        src={programAppBoyImg}
                        alt="Main Image"
                        className="w-full h-full object-cover mt-4"
                        style={{
                          animation: "gentleFloat 3s ease-in-out infinite",
                        }}
                      />
                    </div>

                  </div>

                  {/* Overlay Small Image */}
                  <div className="absolute top-12 -right-8 z-10 w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-white group">
                    <img
                      src={graduateCap}
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
                      <div key={index} className="flex items-start gap-4 lg:gap-6 relative group">
                        {/* Step Number Circle */}
                        <div className="group relative w-14 h-14 flex items-center justify-center">
                          <div className="absolute shadow-xl inset-0 rounded-full border-4 border-gradient-to-r from-purple-400 to-blue-400 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300"></div>
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 group-hover:scale-110 transition-transform duration-300">
                            {step.step}
                          </div>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 bg-white rounded-xl p-4 lg:p-6 shadow-xl border border-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
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
                <button className="inline-flex items-center bg-[#036e8d] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:from-[#025a75] hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="text-base lg:text-lg font-semibold">Start Your Application</span>
                  <i className="fa-solid fa-arrow-right ml-2 lg:ml-3"></i>
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Program Information Section */}
        <section id="program-details" className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Centered Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-gray-800">
                Program <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Information</span>
              </h2>
              <p className="text-gray-600 mt-2 text-base lg:text-lg max-w-2xl mx-auto">
                Essential details and schedules for IIHH's one-year program.
              </p>
            </div>

            {/* Side-by-Side Cards */}
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
              {/* Key Details Card (Enhanced) */}
              <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Key Details</h3>
                </div>
                
                <div className="space-y-1">
                  {[
                    { title: "Duration", icon: "fa-calendar-days", value: programDetails.duration, color: "bg-blue-50 text-blue-700 border-blue-200" },
                    { title: "Format", icon: "fa-laptop-house", value: programDetails.format, color: "bg-green-50 text-green-700 border-green-200" },
                    { title: "Tuition", icon: "fa-money-bill-wave", value: programDetails.tuition, color: "bg-amber-50 text-amber-700 border-amber-200" },
                    { title: "Certification", icon: "fa-certificate", value: programDetails.certification, color: "bg-purple-50 text-purple-700 border-purple-200" },
                  ].map((detail, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 px-3 rounded-lg shadow-sm">
                          <i className={`fa-solid ${detail.icon} text-lg text-[#036e8d]`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex-col items-center gap-3">
                            <p className="text-base font-bold text-gray-700">{detail.value}</p>
                            <span className={`inline-block px-2 rounded-full text-sm font-semibold border ${detail.color}`}>
                              {detail.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Start Dates Card (Smaller, Transparent) */}
              <div className="w-full md:w-2/5 bg-transparent p-4">
                <h3 className="text-lg font-bold text-[#036e8d] mb-3">Upcoming Schedules</h3>
                <div className="space-y-2">
                  {programDetails.startDates.map((date, index) => (
                    <div key={index} className="flex items-center gap-3 pb-2 border-b border-[#036e8d]/10 last:border-b-0">
                      <i className="fa-solid fa-flag-checkered text-lg text-[#036e8d] flex-shrink-0"></i>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-800">{date}</h4>
                        <p className="text-sm text-gray-600">
                          {index === 0 ? "Deadline: Dec 1, 2025" : index === 1 ? "Deadline: May 1, 2026" : "Deadline: Aug 1, 2026"}
                        </p>
                      </div>
                      <Link
                        to="/apply"
                        className="bg-[#036e8d] text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#d2a763] transition-colors duration-200"
                      >
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Link
                    to="/calendar"
                    className="text-[#036e8d] hover:text-[#d2a763] font-medium text-sm"
                  >
                    View Calendar <i className="fa-solid fa-arrow-right ml-1"></i>
                  </Link>
                </div>
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
                                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">Frequently Asked <span className="text-[#036e8d] transform inline-block hover:scale-x-105 duration-300">Questions</span></h2>
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


        {/* Enhanced CTA Section */}
        <section
          id="cta"
          className="relative py-16 bg-[#d2a763] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${programCta})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-8 md:px-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join IIHH – Shape the Future</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Embark on a humanistic journey that empowers learners of all ages. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#036e8d] px-12 py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all">
                Join Our Programs
              </button>
              <button className="text-center border-2 border-white text-white hover:bg-white hover:text-[#036e8d] font-semibold py-4 px-12 rounded-full transition-all duration-300 text-base sm:text-lg">
                Newsletter Signup
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Program;