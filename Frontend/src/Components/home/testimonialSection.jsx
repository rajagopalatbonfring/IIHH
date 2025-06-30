import React from 'react'
import { Link } from "react-router-dom";

import TestimonialCarousel from '../../Components/home/TestimonialCarousel';
import AnimatedButton from '../reUsables/reUseBtn';

const testimonials = [
  {
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    name: "PRIYA SHARMA",
    title: "A New Perspective on Learning",
    desc: "Joining IIHH was a turning point for me. The modules on self-awareness and emotional intelligence helped me understand myself and connect better with others. I feel more confident and ready for any challenge.",
    role: "Student, Grade 10",
    stars: 5,
  },
  {
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
    name: "AARAV PATEL",
    title: "Skills for Real Life",
    desc: "IIHH taught me practical skills I never learned in regular school—like managing my finances, solving problems, and leading with empathy. I now see the world differently and feel prepared for my future.",
    role: "Student, Grade 11",
    stars: 5,
  },
  {
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    name: "NEHA GUPTA",
    title: "Holistic Growth for My Child",
    desc: "As a parent, I wanted my daughter to learn more than just academics. IIHH’s focus on values, culture, and inclusivity has made her more thoughtful and responsible. I highly recommend this program!",
    role: "Parent",
    stars: 5,
  },
  {
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    name: "VIKRAM SINGH",
    title: "Empowering Leadership",
    desc: "The leadership workshops at IIHH helped me discover my potential to inspire others. The focus on empathy and ethical decision-making has shaped me into a better leader and person.",
    role: "Student, Grade 12",
    stars: 5,
  },
  {
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    name: "ANITA DESAI",
    title: "A Supportive Community",
    desc: "IIHH’s community-driven approach made my son feel valued and supported. The program’s emphasis on collaboration and cultural understanding has been transformative for his growth.",
    role: "Parent",
    stars: 5,
  },
];

const testimonialSection = () => {
  return (
    <>
        {/* Testimonials Section - Redesigned to match image */}
        <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl lg:text-5xl font-bold mb-4 text-gray-900 animate-fade-in">What Our <span className="text-[#d2a763] transform inline-block hover:scale-x-105 duration-300">Students </span>{" "}Say</h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Hear from our learners and families about how IIHH’s afterschool program has helped them grow beyond academics—building confidence, life skills, and a humanistic outlook for the real world.
            </p>

            <TestimonialCarousel testimonials={testimonials} />
            
            {/* Read More Button */}
            <div className="text-center">
              <AnimatedButton to="#" text="Read More" bg="bg-[#036e8d]" color="text-white" hoverBg="hover:bg-[#025a75]" hoverAnimation="hover:translate-x-1" />
            </div>
          </div>
        </section>
      
    </>
  )
}

export default testimonialSection
