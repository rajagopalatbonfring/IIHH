import React from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import { ChevronRight } from 'lucide-react';
import cloudOpen from './assets/Group 33.png';
import cloudClose from './assets/closeCloud.png';

const steps = [
  {
    icon: "fa-user-plus",
    title: "Enroll",
    desc: "Join our vibrant community dedicated to humanistic growth.",
  },
  {
    icon: "fa-book-open-reader",
    title: "Explore Modules",
    desc: "Dive into transformative courses blending values, skills, and real-world application.",
  },
  {
    icon: "fa-people-group",
    title: "Engage Actively",
    desc: "Participate in workshops, group projects, and mentor-guided sessions.",
  },
  {
    icon: "fa-seedling",
    title: "Thrive & Lead",
    desc: "Apply learning to real life, build your portfolio, and lead with compassion.",
  },
];

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

const benefits = [
  {
    icon: "fa-heart-pulse",
    title: "Holistic Growth",
    desc: "Nurture balanced development of mind, body, and character.",
  },
  {
    icon: "fa-lightbulb",
    title: "Ethical Leadership",
    desc: "Lead with compassion, integrity, and positive change.",
  },
  {
    icon: "fa-globe",
    title: "Global Perspective",
    desc: "Embrace diversity and contribute to an inclusive world.",
  },
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen pt-20 bg-[#f9fcfd] font-comic text-base-content">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-auto min-h-[500px] md:min-h-[600px] bg-cover bg-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: 'url(./src/assets/Howitworks-heroimg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 flex-col align-center justify-center ">
          <h1 className="text-4xl text-center md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            How <span className="text-[#ffd278]">IIHH</span> Works
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover our unique, practical approach to humanistic learning—empowering the next generation through real-world experiences.
          </p>
          <p className='text-center'>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center bg-[#ffd278] text-[#036e8d] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-white hover:text-[#d2a763] transition-all duration-300 group"
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-20 bg-[#f9fcfd] relative">
        <img src={cloudOpen} className="w-full absolute -top-12 p-0 m-0" alt="Cloud decoration" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#036e8d] mb-6">
            Our Approach
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            IIHH redefines afterschool education by blending humanistic values, hands-on learning, and mentorship. We empower students to become compassionate, confident, and creative leaders.
          </p>
        </div>
      </section>

      {/* 4-Step Journey */}
      <section id="steps" className="py-20 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#036e8d] rounded-full"></div>
          <div className="absolute bottom-16 right-24 w-24 h-24 border-2 border-[#d2a763] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#036e8d] mb-12">
            Your IIHH Journey in 4 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1.05}>
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="w-16 h-16 bg-[#036e8d]/10 flex items-center justify-center rounded-full mb-4">
                    <i className={`fa-solid ${step.icon} text-3xl text-[#036e8d]`}></i>
                  </div>
                  <h3 className="font-bold text-lg text-[#036e8d] mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm text-center">{step.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="expect" className="py-20 bg-white relative">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d2a763] mb-6">
            What to Expect
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Experience a week of interactive workshops, collaborative projects, reflection, and community engagement—making every day meaningful.
          </p>
        </div>
      </section>

      {/* Signature Modules */}
      <section id="modules" className="py-16 bg-gradient-to-r from-[#036e8d]/10 to-[#d2a763]/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#d2a763] mb-6">
            Our Signature Modules: Uniquely IIHH
          </h2>
          <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            Foundations of Humanism, Ethics for Tomorrow, and Visionary Citizenship are exclusive to IIHH—designed to ignite empathy, ethical reasoning, and a global mindset.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#036e8d]/10 flex items-center justify-center rounded-full mb-4">
                <i className="fa-solid fa-brain text-3xl text-[#036e8d]"></i>
              </div>
              <h3 className="font-bold text-lg text-[#036e8d] mb-2">Foundations of Humanism</h3>
              <p className="text-gray-700 text-sm">
                Build empathy, autonomy, and purpose—skills rarely taught elsewhere.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#d2a763]/10 flex items-center justify-center rounded-full mb-4">
                <i className="fa-solid fa-seedling text-3xl text-[#d2a763]"></i>
              </div>
              <h3 className="font-bold text-lg text-[#d2a763] mb-2">Ethics for Tomorrow</h3>
              <p className="text-gray-700 text-sm">
                Tackle real-world dilemmas and future challenges with ethical decision-making.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#036e8d]/10 flex items-center justify-center rounded-full mb-4">
                <i className="fa-solid fa-globe text-3xl text-[#036e8d]"></i>
              </div>
              <h3 className="font-bold text-lg text-[#036e8d] mb-2">Visionary Citizenship</h3>
              <p className="text-gray-700 text-sm">
                Cultivate a global mindset and social innovation for a brighter future.
              </p>
            </div>
          </div>
          <p className="text-center text-[#036e8d] font-medium mt-10">
            These modules are exclusive to IIHH and cannot be learned anywhere else.
          </p>
        </div>
      </section>

      {/* Practical Learning */}
      <section id="practical" className="py-16 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#d2a763] mb-4">
            Learning by Doing, Not Just Reading
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At IIHH, learning is hands-on and practical. Students engage in real-world projects, group challenges, and creative experiments—learning by doing, not just reading.
          </p>
        </div>
      </section>

      {/* Signature Activities */}
      <section id="activities" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#036e8d] mb-6">
            Signature Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1.05}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                  <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="font-bold text-lg text-[#036e8d] mb-2">{activity.title}</h3>
                  <p className="text-gray-700 text-sm text-center">{activity.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship & Support */}
      <section id="mentorship" className="py-20 bg-[#f9fcfd] relative">
        <img src={cloudClose} className="w-full absolute -top-12 p-0 m-0" alt="Cloud decoration" />
        <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#036e8d] mb-6">
            Mentorship & Support
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every learner is paired with a mentor and supported by a caring community, ensuring guidance and encouragement.
          </p>
        </div>
      </section>

      {/* Generational Impact */}
      <section id="impact" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#036e8d] mb-4">
            Shaping the Future Generation
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our approach transforms not just academics, but the thought process of young learners—preparing them to shape the future as empathetic, ethical leaders.
          </p>
          <p className="text-[#d2a763] font-semibold">
            The impact of IIHH creates a ripple effect, nurturing minds that will shape communities and the world.
          </p>
        </div>
      </section>

      {/* Program Benefits */}
      <section id="benefits" className="py-20 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-12 left-12 w-32 h-32 border-2 border-[#036e8d] rounded-full"></div>
          <div className="absolute bottom-16 right-24 w-24 h-24 border-2 border-[#d2a763] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d2a763] mb-12">
            Program Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={400} scale={1.05}>
                <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="w-16 h-16 bg-[#d2a763]/10 flex items-center justify-center rounded-full mb-4">
                    <i className={`fa-solid ${benefit.icon} text-3xl text-[#d2a763]`}></i>
                  </div>
                  <h3 className="font-bold text-lg text-[#d2a763] mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm text-center">{benefit.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section id="audience" className="py-20 bg-gradient-to-r from-[#d2a763]/10 to-[#036e8d]/10 relative">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d2a763] mb-6">
            Who Is It For?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            IIHH’s program is currently for school students—the future of our country. Our priority is to nurture young minds with values and skills to lead tomorrow’s world.
          </p>
        </div>
      </section>

      {/* FAQ / Still Curious? */}
      <section id="faq" className="py-20 bg-[#f9fcfd] relative">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#036e8d] mb-6">
            Still Curious?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Have questions? Visit our <Link to="/faq" className="text-[#d2a763] hover:underline">FAQ</Link> or <Link to="/contact" className="text-[#d2a763] hover:underline">contact us</Link> for more information.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center justify-center bg-[#036e8d] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#d2a763] hover:text-[#036e8d] transition-all duration-300 group"
          >
            Apply Now
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}