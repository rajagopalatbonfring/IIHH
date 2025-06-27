import React from 'react'

import cloudClose from '../../assets/closeCloud.png';

import FAQGrid from "../../Components/reUsables/faqGrid";   


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
  ];

const faqSection = () => {
  return (
    <>
      <section className="relative py-16 pt-24 bg-[#036e8d]">
        <img 
          src={cloudClose}           
          alt="Cloud decoration" 
          className="w-full absolute top-0 left-0 object-cover object-top" 
          style={{ transform: 'translateY(-50%)'}} 
        /> 
        <div className="container mx-auto px-8 md:px-14 max-w-8xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white animate-fade-in">Frequently Asked <span className="text-[#ffd278] transform inline-block hover:scale-x-105 duration-300">Questions</span></h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Explore answers to common questions about IIHH’s programs, learning structure, and unique approach. If you don’t find what you’re looking for, don’t hesitate to contact us directly.
            </p>
          </div>
            {/* Left Side - FAQ */}
            <FAQGrid faqs={faqs} shadow={"black"} drop={true} />
          </div>
      </section>
      
    </>
  )
}

export default faqSection
