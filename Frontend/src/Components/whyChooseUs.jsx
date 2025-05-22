import React from 'react';
import "../App.css";

function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative pt-10 h-auto md:h-[500px] bg-gradient-to-r from-blue-50 to-purple-300">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose IIHH? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Because Transformation Starts Here!
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                We offer a unique humanistic education that fosters resilience, empathy, and purpose for students, educators, and professionals alike.
              </p>
            </div>
          </div>

          {/* Background Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "fa-solid fa-heart",
                  title: "Humanistic Focus",
                  desc: "Education rooted in empathy, autonomy, and purpose for holistic growth.",
                  color: "text-blue-500 bg-blue-50"
                },
                {
                  icon: "fa-solid fa-brain",
                  title: "Emotional Intelligence",
                  desc: "Developing self-awareness and resilience for life’s challenges.",
                  color: "text-purple-500 bg-purple-50"
                },
                {
                  icon: "fa-solid fa-hands-helping",
                  title: "Social Responsibility",
                  desc: "Fostering ethical leadership and community engagement.",
                  color: "text-green-500 bg-green-50"
                },
                {
                  icon: "fa-solid fa-globe",
                  title: "Global Perspective",
                  desc: "Building cultural intelligence and inclusivity for a better world.",
                  color: "text-yellow-500 bg-yellow-50"
                }
              ].map((item, index) => (
                <div key={index} className={`rounded-xl p-8 hover:shadow-xl transition-all ${item.color}`}>
                  <div className={`text-4xl mb-4 ${item.color}`}>
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Community Says</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
                  name: "Priya Sharma",
                  desc: '"IIHH has transformed how I teach, making me more empathetic and effective in the classroom."',
                  role: "Educator"
                },
                {
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
                  name: "Aarav Patel",
                  desc: '"The program helped me manage stress and discover my purpose—it’s been life-changing!"',
                  role: "College Student"
                },
                {
                  img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
                  name: "Neha Gupta",
                  desc: '"My daughter’s confidence and problem-solving skills have soared thanks to IIHH."',
                  role: "Parent of Riya, Age 12"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default WhyChooseUs;