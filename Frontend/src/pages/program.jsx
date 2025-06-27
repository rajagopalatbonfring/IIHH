import React from 'react';

import HeroSection from "../Components/programs/heroSection";
import IntroductionSection from "../Components/programs/introductionSection";
import ProgramModuleSection from "../Components/programs/programModuleSection";
import CurriculumSection from "../Components/programs/curriculumSection";
import ProgramBenefits from "../Components/programs/programBenefits";
import ProgramCta from "../Components/programs/programCta";
import LearningInAction from "../Components/programs/learningInAction";
import FacultyCarousel from "../Components/programs/facultyCarousel";
import ApplicationProcess from "../Components/programs/applicationProcess";
import ProgramInfo from "../Components/programs/programInfo";
import FaqSection from "../Components/programs/faqSection";
import CtaSecion from '../Components/programs/ctaSecion';

function Program() {
  return (
    <div className="h-full text-base-content font-comic overflow-hidden">
      <main className="pt-20 min-h-screen">

        <HeroSection/>

        <IntroductionSection/>

        <ProgramModuleSection/>

        <CurriculumSection/>

        <ProgramBenefits/>

        <ProgramCta/>

        <LearningInAction/>

        <FacultyCarousel/>

        <ApplicationProcess/>

        <ProgramInfo/>

        <FaqSection/>

        <CtaSecion/>

      </main>
    </div>
  );
}

export default Program;