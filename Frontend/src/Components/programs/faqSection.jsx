import React from 'react'
import { Link } from "react-router-dom";

import FAQGrid from "../../Components/reUsables/faqGrid"  

import AnimatedButton from '../reUsables/reUseBtn';

const faqs = [
  { question: "Who is this program designed for?", answer: "Our program is designed for educators, professionals, students, and anyone interested in personal growth, humanistic education, and holistic development.",category: "Enrollment" },
  { question: "What is the time commitment?", answer: "The program requires approximately 10 hours per week, including coursework, practical assignments, and collaborative projects.",category: "Enrollment" },
  { question: "Are there any prerequisites?", answer: "No formal prerequisites are required. We welcome individuals from diverse backgrounds with a passion for personal and professional growth.",category: "Enrollment" },
  { question: "Is financial aid available?", answer: "Yes, we offer scholarships and payment plans. Please contact our admissions office for more information.",category: "Enrollment" },
];


const faqSection = () => {


  return (
    <>
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

              <FAQGrid faqs={faqs} shadow={"white"} drop={false} />
              
              {/* Call to Action */}
              <div className="text-center mt-16">
                <p className="text-gray-600 mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <AnimatedButton to="/contact" text="Ask Questions" bg="bg-[#036e8d]" color="text-white" hoverBg="hover:bg-[#025a75]" hoverAnimation="hover:translate-x-1" />
              </div>
              
            </div>
          </div>
        </section>
    </>
  )
}

export default faqSection
