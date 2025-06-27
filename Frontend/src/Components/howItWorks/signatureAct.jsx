import React, { useState, useEffect,} from 'react';
import Tilt from 'react-parallax-tilt';


const activities = [
  {
    title: "Mindfulness & Reflection",
    desc: "Daily practices for self-awareness and balance.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/00bfa688de-7bcf72179a6e6a2ac002.png",
  },
  {
    title: "Community Engagement",
    desc: "Service projects that foster empathy and responsibility.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/82490b4b46-3069e169415faa93f34d.png",
  },
  {
    title: "Critical Thinking Labs",
    desc: "Interactive sessions to sharpen problem-solving and ethics.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/94da3bce72-2c360a3e59e34be9feb3.png",
  },
];

const signatureAct = () => {
  return (
    <>

          {/* Signature Activities */}
      <section id="activities" className="py-16 pb-32 bg-[#f9fcfd]">
        <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learning by <span className="text-[#036e8d] inline-block transform hover:scale-x-105 duration-300">Doing</span>, <br />Not Just <span className="text-[#d2a763] inline-block transform hover:scale-x-105 duration-300">Reading</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At IIHH, learning is hands-on and practical. Students engage in real-world projects, group challenges, and creative experiments—learning by doing, not just reading.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1.05}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                  <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="font-bold text-lg text-[#036e8d] mb-2">{activity.title}</h3>
                  <p className="text-gray-700 text-sm text-left">{activity.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default signatureAct
