import React from 'react';

import HeroSection from '../Components/home/heroSection';
import IntroductionSection from '../Components/home/introductionSection';
import WhatWeOffer from '../Components/home/whatWeOffer';
import WhyChooseUs from '../Components/home/whyChooseUs';
import FaqSection from '../Components/home/faqSection';
import TestimonialSection from '../Components/home/testimonialSection';
import CtaSection from '../Components/home/ctaSection';


function Home() {
  return (
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen overflow-hidden">
        
        <HeroSection/>

        <IntroductionSection/>

        <WhatWeOffer/>

        <WhyChooseUs/>

        <FaqSection/>

        <TestimonialSection/>

        <CtaSection/>

      </main>
    </div>
  );
}

export default Home;