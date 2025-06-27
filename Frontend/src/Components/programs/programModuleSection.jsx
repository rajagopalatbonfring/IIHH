import React, { useState, useEffect } from "react";

import cloudOpen from '../../assets/Group 33.png';



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

const programModuleSection = () => {


  const [selectedModule, setSelectedModule] = useState(null);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setAnimationTrigger(true);
  }, []);

  return (
    <>

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
      
    </>
  )
}

export default programModuleSection
