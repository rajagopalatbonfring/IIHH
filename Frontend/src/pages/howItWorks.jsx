import React from 'react';

import HeroSection from '../Components/howItWorks/heroSection';
import IntroductionSection from '../Components/howItWorks/introductionSection';
import FoundationSection from '../Components/howItWorks/foundationSection';
import FourStepJourney from '../Components/howItWorks/fourStepJourney';
import SignatureModules from '../Components/howItWorks/signatureModules';
import SignatureAct from '../Components/howItWorks/signatureAct';
import WhatToExpect from '../Components/howItWorks/whatToExpect';
import ProgramBenefit from '../Components/howItWorks/programBenefit';
import CtaSection from '../Components/howItWorks/ctaSection';

export default function HowItWorks() {
  return (
    <main className="min-h-screen pt-20 bg-[#f9fcfd] font-comic text-base-content overflow-hidden">

      <HeroSection/>

      <IntroductionSection/>

      <FoundationSection/>
        {/* <JourneySteps steps={steps} /> */}
      <FourStepJourney/>

      <SignatureModules/>

      <SignatureAct/>

      <WhatToExpect/>

      <ProgramBenefit/>

      <CtaSection/>

    </main>
  );
}