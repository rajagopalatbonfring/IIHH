import React from 'react'
import { Link } from "react-router-dom"; 

import FAQGrid from "../../Components/reUsables/faqGrid"   

import AnimatedButton from '../reUsables/reUseBtn';

const faqs = [
  {
    question: "Who can enroll in IIHH programs?",
    answer: "Our programs are designed for diverse audiences including students (K-12 and college), educators, professionals, and lifelong learners. We have specialized tracks for different age groups and experience levels.",
    category: "Enrollment"
  },
  {
    question: "How are courses delivered?",
    answer: "We offer flexible learning formats including in-person workshops, online courses, blended learning programs, and intensive retreats. All formats emphasize experiential learning and practical application.",
    category: "Learning Format"
  },
  {
    question: "What is the duration of IIHH programs?",
    answer: "Program duration varies based on the course type. Short workshops range from 2-5 days, certificate programs span 3-6 months, and comprehensive diploma courses take 12-18 months to complete.",
    category: "Duration"
  },
  {
    question: "Do you offer corporate training programs?",
    answer: "Yes, we provide customized corporate training programs focusing on emotional intelligence, leadership development, team building, and workplace wellness. Programs can be tailored to your organization's specific needs.",
    category: "Corporate"
  },
  {
    question: "What qualifications do instructors have?",
    answer: "Our instructors are certified professionals with advanced degrees in psychology, education, or related fields. They have extensive experience in humanistic approaches and undergo continuous professional development.",
    category: "Faculty"
  },
  {
    question: "Can I get continuing education credits?",
    answer: "Many of our programs offer continuing education units (CEUs) for professionals in education, healthcare, and counseling. Check with your professional board for specific accreditation requirements.",
    category: "Certification"
  }
];

const faqSection = () => {
  return (
    <>
        {/* FAQ Section - New addition */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-8">
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
