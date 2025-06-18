import React from 'react';

const FAQGrid = ({ faqs }) => {
  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-8">
        {leftFaqs.map((faq, index) => (
          <div
            key={`left-${index}`}
            className="bg-white hover:bg-gray-50 rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 group h-fit"
          >
            <details className="group/details">
              <summary className="flex justify-between items-start p-6 cursor-pointer rounded-t-2xl transition-colors duration-200">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                    {faq.question}
                  </h3>
                  <div className="flex items-center">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                    <span className="transform group-open/details:rotate-180 transition-transform duration-300">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </details>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-8">
        {rightFaqs.map((faq, index) => (
          <div
            key={`right-${index}`}
            className="bg-white hover:bg-gray-50 rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 group h-fit"
          >
            <details className="group/details">
              <summary className="flex justify-between items-start p-6 cursor-pointer rounded-t-2xl transition-colors duration-200">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                    {faq.question}
                  </h3>
                  <div className="flex items-center">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
                    <span className="transform group-open/details:rotate-180 transition-transform duration-300">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQGrid;