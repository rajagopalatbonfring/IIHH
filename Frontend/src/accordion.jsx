import React, { useState } from "react";

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

function ModuleAccordionCard() {
const [selectedModule, setSelectedModule] = useState(null);

  return (
    <section className="py-32 bg-[#d2a763]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Program Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {moduleDetails.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <i className={`fa-solid fa-seedling text-3xl text-${module.color}-600 mr-4`}></i>
                <h3 className="text-lg font-bold text-gray-800">{module.title}</h3>
              </div>
              <p className="text-gray-600 text-sm flex-grow">{module.objective}</p>
              <button
                onClick={() => setSelectedModule(module)}
                className="mt-4 text-[#036e8d] font-semibold underline self-start"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedModule && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-8 relative overflow-auto max-h-[80vh]">
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
                aria-label="Close details"
              >
                &times;
              </button>
              <h3 className={`text-2xl font-bold mb-4 text-${selectedModule.color}-700`}>
                {selectedModule.title}
              </h3>
              <p className="mb-4">{selectedModule.description}</p>
              <blockquote className={`italic text-${selectedModule.color}-700 bg-${selectedModule.color}-100 px-4 py-2 rounded mb-6`}>
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
              <button className={`mt-6 bg-${selectedModule.color}-600 hover:bg-${selectedModule.color}-700 text-white px-6 py-2 rounded-full font-semibold transition`}>
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ModuleAccordionCard;
