// import React from 'react';
// import { useParams, Link } from "react-router-dom";
// import "../App.css";

// const moduleDetails = [
//   {
//     id: 1,
//     title: "Foundations of Humanism in Education and Life",
//     objective: "Introduce students to humanistic values and philosophies for a balanced life.",
//     topics: [
//       "What is Humanism? History & Evolution",
//       "Core Values of Humanism: Empathy, Autonomy, and Purpose",
//       "Humanistic Psychology (Carl Rogers, Abraham Maslow)",
//       "Importance of Self-Actualization and Personal Growth"
//     ],
//     outcomes: [
//       "Understand the history and evolution of humanism.",
//       "Identify and apply core humanistic values.",
//       "Explain key ideas from humanistic psychology.",
//       "Recognize the importance of self-actualization and personal growth.",
//       "Apply humanistic principles in daily life and education."
//     ],
//     color: "green"
//   },
//   {
//     id: 2,
//     title: "Holistic Personal Development",
//     objective: "Cultivate a balanced lifestyle integrating mental, emotional, and physical well-being.",
//     topics: [
//       "Physical health and mental well-being",
//       "Developing a growth mindset and resilience",
//       "Work-life balance and time management",
//       "Ethical living and decision-making"
//     ],
//     outcomes: [
//       "Understand how stories, slogans, and history of great leaders shape values and beliefs.",
//       "Cultivate gratitude, emotional intelligence, and respect for others, including young children.",
//       "Explore the role of fear, self-awareness, and personal growth in life.",
//       "Strengthen family values, cultural traditions, and communication skills.",
//       "Develop the ability to say 'No' confidently and accept rejection gracefully.",
//       "Manage academic challenges, stress, and emotional well-being effectively."
//     ],
//     color: "purple"
//   },
//   {
//     id: 3,
//     title: "Life Skills",
//     objective: "Develop essential life skills to foster personal and social harmony.",
//     topics: [
//       "Living harmoniously in society",
//       "Showing respect to others",
//       "Practicing gratitude",
//       "Building meaningful relationships"
//     ],
//     outcomes: [
//       "Develop essential life skills, including first aid, household tasks, and basic cooking.",
//       "Understand safety measures for natural disasters, survival situations, and injury management.",
//       "Practice etiquette, respect, and healthy social interactions in public and dining settings.",
//       "Gain hands-on experience in gardening, environmental conservation, and healthy living."
//     ],
//     color: "blue"
//   },
//   {
//     id: 4,
//     title: "Personal Development",
//     objective: "Help students understand life philosophy, interpersonal skills, and character-building.",
//     topics: [
//       "Understanding life philosophy",
//       "Developing interpersonal skills",
//       "Building character",
//       "Fostering human connections over technology"
//     ],
//     outcomes: [
//       "Learn effective decision-making strategies using practical tips and tricks.",
//       "Develop the ability to create a positive aura in any environment.",
//       "Explore self-discovery to understand and define life’s purpose.",
//       "Recognize the importance of valuing others and avoiding underestimation.",
//       "Understand that everyone is special and unique, fostering self-confidence and respect.",
//       "Cultivate self-awareness by taking responsibility instead of blaming others.",
//       "Identify the risks of excessive screen time and gaming addiction and learn ways to manage them."
//     ],
//     color: "yellow"
//   },
//   {
//     id: 5,
//     title: "Traditional Values",
//     objective: "Reinforce cultural values and traditions for holistic development.",
//     topics: [
//       "Student-teacher relationships",
//       "Family values",
//       "Respect for elders",
//       "Reading and learning without digital distractions"
//     ],
//     outcomes: [
//       "Learn strategies to manage adamant and tantrum-prone children effectively.",
//       "Maintain individual character and values in group settings.",
//       "Understand why money and wealth should not be the sole life motive.",
//       "Embrace new challenges with confidence and adaptability.",
//       "Learn the importance of moral values like kindness and honesty.",
//       "Promote equality and fair treatment for all."
//     ],
//     color: "red"
//   },
//   {
//     id: 6,
//     title: "Self-Awareness & Emotional Intelligence",
//     objective: "Develop emotional regulation, empathy, and interpersonal skills.",
//     topics: [
//       "Understanding emotions and emotional regulation",
//       "Growth mindset and resilience",
//       "Building empathy and social skills",
//       "Conflict resolution & effective communication",
//       "Mindfulness and stress management"
//     ],
//     outcomes: [
//       "Differentiate between infatuation and love for better relationships.",
//       "Eliminate toxicity by cutting off bad habits and unhealthy friendships.",
//       "Handle relationships wisely, showing kindness and respect.",
//       "Develop resilience, patience, and a never-give-up attitude.",
//       "Cultivate self-discipline, self-control, and emotional balance.",
//       "Foster a love for learning and self-improvement.",
//       "Manage anger effectively and navigate critical situations calmly.",
//       "Help others, nurture inner talents, and become a responsible individual."
//     ],
//     color: "indigo"
//   },
//   {
//     id: 7,
//     title: "Critical Thinking & Problem-Solving",
//     objective: "Encourage independent thought and creativity in real-world problem-solving.",
//     topics: [
//       "Logical reasoning and decision-making",
//       "Design thinking and innovation",
//       "Ethical dilemmas and social justice issues",
//       "Media literacy and fact-checking"
//     ],
//     outcomes: [
//       "Develop resilience to handle challenges, failures, and setbacks.",
//       "Enhance skills for personal growth, confidence, and success.",
//       "Maintain well-being through sports, emotional balance, and stress management.",
//       "Overcome self-doubt and social pressures like body shaming and social media influence.",
//       "Cultivate a positive mindset to embrace success, compliments, and growth.",
//       "Improve communication and public speaking skills.",
//       "Adapt to life changes, including hormonal shifts and responsibilities."
//     ],
//     color: "teal"
//   },
//   {
//     id: 8,
//     title: "Humanistic Leadership & Social Responsibility",
//     objective: "Inspire leadership with compassion, integrity, and community involvement.",
//     topics: [
//       "Leadership with compassion and integrity",
//       "Building meaningful relationships",
//       "Community engagement and volunteerism",
//       "Sustainability and ethical responsibility"
//     ],
//     outcomes: [
//       "Set meaningful goals and plan effectively for success.",
//       "Stay focused by managing distractions and prioritizing tasks.",
//       "Develop commitment and a proactive mindset.",
//       "Understand success factors beyond just hard work.",
//       "Adopt a growth mindset and continuously seek improvement.",
//       "Balance independence with responsibilities and relationships.",
//       "Maintain healthy family bonds while navigating personal growth."
//     ],
//     color: "orange"
//   },
//   {
//     id: 9,
//     title: "Financial Literacy",
//     objective: "Equip students with essential financial management skills.",
//     topics: [
//       "Financial literacy (budgeting, saving, investing)",
//       "Entrepreneurial thinking and leadership",
//       "Sustainable living and environmental responsibility",
//       "Health and nutrition basics",
//       "Career planning and professional ethics"
//     ],
//     outcomes: [
//       "Learn the basics of money management and responsible spending.",
//       "Understand the importance of valuing everything in life, including time and resources.",
//       "Develop the habit of saving money and planning for the future.",
//       "Explore ways to turn hobbies into income-generating opportunities."
//     ],
//     color: "pink"
//   },
//   {
//     id: 10,
//     title: "Diversity, Culture & Ethics",
//     objective: "Promote inclusivity, cultural understanding, and ethical behavior.",
//     topics: [
//       "Cultural intelligence and global citizenship",
//       "Ethics and moral reasoning",
//       "Gender equality and diversity",
//       "Human rights and social responsibility"
//     ],
//     outcomes: [
//       "Develop cultural intelligence and understand the role of global citizenship in a diverse world.",
//       "Apply ethics and moral reasoning to decision-making in personal and professional life.",
//       "Recognize the importance of gender equality and diversity in fostering inclusive communities.",
//       "Understand human rights and embrace social responsibility to contribute to a just society."
//     ],
//     color: "cyan"
//   }
// ];

// function ModuleDetail() {
//   const { id } = useParams();
//   const module = moduleDetails.find(m => m.id === parseInt(id));

//   if (!module) {
//     return (
//       <div className="container mx-auto px-6 py-16 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Module Not Found</h2>
//         <p className="text-gray-600">The module you're looking for doesn't exist.</p>
//         <Link to="/programs" className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">Back to Program</Link>
//       </div>
//     );
//   }

//   return (
//     <main className="pt-20 bg-gray-50 min-h-screen">
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto">
//             <Link to="/programs" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6">
//               <i className="fa-solid fa-arrow-left mr-2"></i> Back to Program
//             </Link>
//             <h1 className={`text-4xl font-bold mb-4 text-${module.color}-700`}>{module.title}</h1>
//             <p className="text-lg text-gray-600 mb-8">{module.objective}</p>

//             <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
//               <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
//               <ul className="space-y-3">
//                 {module.topics.map((topic, index) => (
//                   <li key={index} className="flex items-start">
//                     <i className={`fa-solid fa-circle-check text-${module.color}-500 mt-1 mr-2`}></i>
//                     <span>{topic}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <h2 className="text-2xl font-semibold mb-4">Learning Outcomes</h2>
//               <ul className="space-y-3">
//                 {module.outcomes.map((outcome, index) => (
//                   <li key={index} className="flex items-start">
//                     <i className={`fa-solid fa-circle-check text-${module.color}-500 mt-1 mr-2`}></i>
//                     <span>{outcome}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default ModuleDetail;



import React from 'react';
import { useParams, Link } from "react-router-dom";
import "../App.css";

const moduleDetails = [
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
    color: "green"
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
    color: "purple"
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
    color: "blue"
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
    color: "yellow"
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
    color: "red"
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
    color: "indigo"
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
    color: "teal"
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
    color: "orange"
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
    color: "pink"
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
    color: "cyan"
  }
];

function ModuleDetail() {
  const { id } = useParams();
  const module = moduleDetails.find(m => m.id === parseInt(id));

  if (!module) {
    return (
      <div className="container mx-auto px-6 py-16 text-center bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fade-in">Module Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">The module you're looking for doesn't exist. Let’s get you back on track!</p>
        <Link to="/programs" className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg transform hover:scale-105">
          <i className="fa-solid fa-arrow-left mr-2"></i> Back to Program
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <Link to="/programs" className={`inline-flex items-center text-${module.color}-600 hover:text-${module.color}-800 transition-colors transform hover:scale-105`}>
                <i className="fa-solid fa-arrow-left mr-2"></i> Back to Program
              </Link>
              <div className={`w-12 h-12 rounded-full bg-${module.color}-100 flex items-center justify-center text-${module.color}-600 text-xl font-bold shadow-md`}>
                {module.id}
              </div>
            </div>

            {/* Title and Objective */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8 transform hover:scale-[1.02] transition-transform">
              <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 text-${module.color}-700 animate-fade-in`}>{module.title}</h1>
              <p className="text-lg text-gray-600 mb-4 italic">{module.objective}</p>
              <p className="text-gray-700 leading-relaxed">{module.description}</p>
            </div>

            {/* Quote Section */}
            <div className={`bg-${module.color}-50 p-6 rounded-xl mb-8 flex items-center justify-center text-center transform hover:scale-[1.02] transition-transform`}>
              <blockquote className={`text-xl italic text-${module.color}-800 font-medium`}>{module.quote}</blockquote>
            </div>

            {/* Topics and Outcomes */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
                <h2 className={`text-2xl font-semibold mb-4 text-${module.color}-600 border-b-2 border-${module.color}-200 pb-2`}>Topics Covered</h2>
                <ul className="space-y-4">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <i className={`fa-solid fa-circle-check text-${module.color}-500 mt-1 mr-3`}></i>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
                <h2 className={`text-2xl font-semibold mb-4 text-${module.color}-600 border-b-2 border-${module.color}-200 pb-2`}>Learning Outcomes</h2>
                <ul className="space-y-4">
                  {module.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <i className={`fa-solid fa-circle-check text-${module.color}-500 mt-1 mr-3`}></i>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Link to="/apply" className={`inline-flex items-center bg-${module.color}-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-${module.color}-700 transition-colors shadow-lg transform hover:scale-105`}>
                Enroll Now <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
}

export default ModuleDetail;