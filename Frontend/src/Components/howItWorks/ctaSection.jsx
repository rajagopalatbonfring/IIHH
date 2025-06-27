import React from 'react'
import { Link } from "react-router-dom";

import { ChevronRight } from 'lucide-react';

import howItWorksCta from '../../assets/cta-howitworksPage.jpg';

const ctaSection = () => {
  return (
    <>

          {/* FAQ / Still Curious? */}
      <section 
        id="faq" 
        className="py-20 bg-[#f9fcfd] relative bg-cover bg-center bg-no-repeat"
        style={
          {backgroundImage :`url(${howItWorksCta})`}
        }
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Curious?
          </h2>
          <p className="text-white/80 mb-4">
            We’re here to help you every step of the way.
          </p>
          <p className="text-white text-lg leading-relaxed mb-8">
            Have questions? Visit our <Link to="/faq" className="underline">FAQ</Link> or <Link to="/contact" className="underline">contact us</Link> for more information.
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
      
    </>
  )
}

export default ctaSection
