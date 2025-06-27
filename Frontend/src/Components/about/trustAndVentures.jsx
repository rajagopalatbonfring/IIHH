import React from 'react'

const trustAndVentures = () => {
  return (
    <>

        <section id="trust-ventures" className="py-16 bg-[#f9fcfd]">
          <div className="container mx-auto px-8 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              Our Trust & Ventures
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
              IIHH is governed by the <strong>Horizon Humanism Educational Trust</strong>, a registered non-profit dedicated to advancing education and humanistic values. Our CEO, Mr. Ravi Kumar, also leads innovative ventures in technology and academic publishing, expanding our impact in the education sector.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trust Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                <div className="mb-4">
                  <i className="fa-solid fa-handshake-angle text-4xl text-[#036e8d]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Horizon Humanism Educational Trust</h3>
                <p className="text-gray-600 mb-4">
                  The registered trust behind IIHH, committed to non-profit service, transparent governance, and the advancement of holistic education.<br/>
                  <span className="text-xs text-gray-500">Registered under Indian Trusts Act, 1882</span>
                </p>
                {/* Optional: Add a link to trust's official site or documents */}
              </div>
              {/* Bonfring Technology Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                <div className="mb-4">
                  <img src="https://dummyimage.com/80x80/036e8d/fff&text=BT" alt="Bonfring Technology" className="rounded-full mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bonfring Technology</h3>
                <p className="text-gray-600 mb-4">
                  An IT solutions company led by our CEO, specializing in digital transformation and innovative technology for education and businesses.
                </p>
                <a
                  href="https://www.bonfring.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#036e8d] font-medium underline"
                >
                  Visit Bonfring Technology
                </a>
              </div>
              {/* Bonfring Publications Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
                <div className="mb-4">
                  <img src="https://dummyimage.com/80x80/d2a763/fff&text=BP" alt="Bonfring Publications" className="rounded-full mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Bonfring Publications</h3>
                <p className="text-gray-600 mb-4">
                  Our own publishing house, offering academic and professional publishing services, including paper publication and editorial support.
                </p>
                <a
                  href="https://www.bonfring.org/publications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#036e8d] font-medium underline"
                >
                  Explore Bonfring Publications
                </a>
              </div>
            </div>
          </div>
        </section>
      
    </>
  )
}

export default trustAndVentures
