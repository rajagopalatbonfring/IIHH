import React from 'react';

import HeroSection from '../Components/about/heroSection';
import WhoWeAre from '../Components/about/whoWeAre';
import ProgramSection from '../Components/about/programSection';
import TeamSection from '../Components/about/teamSection';
import TrustAndVentures from '../Components/about/trustAndVentures';
import CtaSection from '../Components/about/ctaSection';

function AboutUs() {
  return (
    <div className="h-full text-base-content font-comic">
      <main className="pt-20 min-h-screen overflow-hidden ">

        <HeroSection/>

        <WhoWeAre/>

        <ProgramSection/>

        <TeamSection/>

        <TrustAndVentures/>

        <CtaSection/>

      </main>
    </div>
  );
}

export default AboutUs;