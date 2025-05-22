// import React from 'react';
// import { Link } from "react-router-dom";
// import "../App.css";

// const modules = [
//   { id: 1, title: "Foundations of Humanism", subtitle: "Core values for a balanced life", icon: "fa-seedling", color: "green" },
//   { id: 2, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
//   { id: 3, title: "Life Skills", subtitle: "Practical tools for life", icon: "fa-toolbox", color: "blue" },
//   { id: 4, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
//   { id: 5, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
//   { id: 6, title: "Self-Awareness & Emotional Intelligence", subtitle: "Master your emotions", icon: "fa-brain", color: "indigo" },
//   { id: 7, title: "Critical Thinking & Problem-Solving", subtitle: "Sharpen your mind", icon: "fa-lightbulb", color: "teal" },
//   { id: 8, title: "Humanistic Leadership", subtitle: "Lead with purpose", icon: "fa-users", color: "orange" },
//   { id: 9, title: "Financial Literacy", subtitle: "Master your finances", icon: "fa-piggy-bank", color: "pink" },
//   { id: 10, title: "Diversity, Culture & Ethics", subtitle: "Embrace inclusivity", icon: "fa-globe", color: "cyan" }
// ];

// function ProgramModulesTree({ activeModule, setActiveModule }) {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">

//           <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
//             <div className="absolute w-full h-full opacity-20">
//               <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply animate-pulse"></div>
//               <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1s"}}></div>
//               <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2s"}}></div>
//             </div>
//           </div>


//       <div className="container mx-auto px-6">
//         <h3 className="text-3xl sm:text-3xl font-extrabold text-center mb-4">
//           Program Modules Tree
//         </h3>
//         <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
//           Explore our comprehensive learning path designed to nurture holistic growth and development.
//         </p>

//         <div className="flex flex-col items-center relative">
//           <div className="w-1 bg-gradient-to-b from-blue-300 to-purple-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>
//           {modules.map((module, index) => {
//             const isActive = activeModule === index;
//             const isLeft = index % 2 === 0;
//             return (
//               <div key={module.id} className="relative w-full max-w-4xl mb-12 px-4">
//                 <div
//                   className="w-12 h-12 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-lg font-bold bg-white border-4 border-gray-300 text-gray-700"
//                 >
//                   {module.id}
//                 </div>

//                 <div
//                   className={`transform flex transition-all duration-300 ${isLeft ? "ml-auto" : "mr-auto"}`}
//                   style={{ width: "calc(50% - 2rem)" }}
//                 >
//                   <div
//                     className={`bg-white p-6 rounded-xl shadow-lg border-l-4 flex items-center justify-between w-full cursor-pointer transition-all duration-300 relative ${
//                       isActive ? `border-${module.color}-500 shadow-xl` : "border-gray-300 hover:border-gray-400 hover:shadow-md"
//                     }`}
//                     onMouseEnter={() => setActiveModule(index)}
//                     onMouseLeave={() => setActiveModule(null)}
//                   >
//                     <div className="flex items-center">
//                       <div className="text-3xl mr-4">
//                         <i className={`fa-solid ${module.icon} text-3xl text-${module.color}-600`}></i>
//                       </div>
//                       <div>
//                         <h3 className={`text-xl font-bold ${isActive ? `text-${module.color}-700` : "text-gray-800"}`}>
//                           {module.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm mt-1">{module.subtitle}</p>
//                       </div>
//                     </div>
//                     <Link
//                       to={`/module/${module.id}`}
//                       className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-6 top-1/2 transform -translate-y-1/2 ${
//                         isActive ? `text-${module.color}-700` : "text-gray-600"
//                       } hover:text-${module.color}-900`}
//                     >
//                       <i className="fa-solid fa-arrow-right text-2xl"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <style jsx>{`
//         .group-hover\:opacity-100 {
//           opacity: 0;
//         }
//         .group:hover .group-hover\:opacity-100 {
//           opacity: 1;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default ProgramModulesTree;



import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

const modules = [
  { id: 1, title: "Foundations of Humanism", subtitle: "Core values for a balanced life", icon: "fa-seedling", color: "green" },
  { id: 2, title: "Holistic Personal Development", subtitle: "Mind, body, and soul", icon: "fa-spa", color: "purple" },
  { id: 3, title: "Life Skills", subtitle: "Practical tools for life", icon: "fa-toolbox", color: "blue" },
  { id: 4, title: "Personal Development", subtitle: "Grow your character", icon: "fa-user", color: "yellow" },
  { id: 5, title: "Traditional Values", subtitle: "Roots of culture", icon: "fa-home", color: "red" },
  { id: 6, title: "Self-Awareness & Emotional Intelligence", subtitle: "Master your emotions", icon: "fa-brain", color: "indigo" },
  { id: 7, title: "Critical Thinking & Problem-Solving", subtitle: "Sharpen your mind", icon: "fa-lightbulb", color: "teal" },
  { id: 8, title: "Humanistic Leadership", subtitle: "Lead with purpose", icon: "fa-users", color: "orange" },
  { id: 9, title: "Financial Literacy", subtitle: "Master your finances", icon: "fa-piggy-bank", color: "pink" },
  { id: 10, title: "Diversity, Culture & Ethics", subtitle: "Embrace inclusivity", icon: "fa-globe", color: "cyan" }
];

function ProgramModulesTree({ activeModule, setActiveModule }) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-3/4 left-2/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <h3 className="text-3xl sm:text-3xl font-extrabold text-center mb-4">
          Program Modules Tree
        </h3>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Explore our comprehensive learning path designed to nurture holistic growth and development.
        </p>

        <div className="flex flex-col items-center relative">
          <div className="w-1 bg-gradient-to-b from-blue-300 to-purple-500 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full md:block hidden"></div>
          {modules.map((module, index) => {
            const isActive = activeModule === index;
            const isLeft = index % 2 === 0;
            return (
              <div key={module.id} className="relative w-full max-w-4xl mb-12 px-4">
                {/* Circle Number - Hidden on mobile */}
                <div
                  className="w-12 h-12 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center text-lg font-bold bg-white border-4 border-gray-300 text-gray-700 md:block hidden"
                >
                  {module.id}
                </div>

                {/* Desktop View */}
                <div
                  className={`transform hidden md:flex transition-all duration-300 ${isLeft ? "ml-auto" : "mr-auto"}`}
                  style={{ width: "calc(50% - 2rem)" }}
                >
                  <div
                    className={`group bg-white p-6 rounded-xl shadow-lg border-l-4 flex items-center justify-between w-full cursor-pointer transition-all duration-300 relative overflow-hidden ${
                      isActive ? `border-${module.color}-500 shadow-xl` : "border-gray-300 hover:border-gray-400 hover:shadow-md"
                    }`}
                    onMouseEnter={() => setActiveModule(index)}
                    onMouseLeave={() => setActiveModule(null)}
                  >
                    <div className="flex items-center">
                      <div className="text-3xl mr-4 flex-shrink-0">
                        <i className={`fa-solid ${module.icon} text-3xl text-${module.color}-600`}></i>
                      </div>
                      <div className="overflow-hidden">
                        <h3 className={`text-xl font-bold ${isActive ? `text-${module.color}-700` : "text-gray-800"} whitespace-nowrap overflow-hidden text-ellipsis`}>
                          {module.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/module/${module.id}`}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-6 top-1/2 transform -translate-y-1/2 ${
                        isActive ? `text-${module.color}-700` : "text-gray-600"
                      } hover:text-${module.color}-900`}
                    >
                      <i className="fa-solid fa-arrow-right text-2xl"></i>
                    </Link>
                  </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden w-full">
                  <div
                    className={`group bg-white rounded-xl shadow-lg border-${module.color}-500 w-full cursor-pointer transition-all duration-300 relative overflow`}
                    onMouseEnter={() => setActiveModule(index)}
                    onMouseLeave={() => setActiveModule(null)}
                  >
                    <div className="relative flex justify-center">
                      <div className={`absolute -top-16 w-16 h-16 rounded-full bg-${module.color}-100 flex items-center justify-center transform translate-y-1/2`}>
                        <i className={`fa-solid ${module.icon} text-3xl text-${module.color}-600`}></i>
                      </div>
                    </div>
                    <div className="pt-10 pb-6 px-4 text-center">
                      <h3 className={`text-lg font-bold ${isActive ? `text-${module.color}-700` : "text-gray-800"} whitespace-nowrap overflow-hidden text-ellipsis`}>
                        {module.id}.{module.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {module.subtitle}
                      </p>
                    </div>
                    <Link
                      to={`/module/${module.id}`}
                      className={`block mt-2 pb-4 text-center ${isActive ? `text-${module.color}-700` : "text-gray-600"} hover:text-${module.color}-900`}
                    >
                      <i className="fa-solid fa-arrow-right text-xl"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProgramModulesTree;