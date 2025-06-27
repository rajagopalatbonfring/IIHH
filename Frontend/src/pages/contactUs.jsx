import React from 'react';
import { ToastContainer } from 'react-toastify';

import HeroSection from '../Components/contact/heroSection';
import GetInTouch from '../Components/contact/getInTouch';
import VisitOurOffice from '../Components/contact/visitOurOffice';
import FaqSection from '../Components/contact/faqSection';
import CtaSection from '../Components/contact/ctaSection';

function ContactUs() {
  return (
    <main className="pt-20 min-h-screen font-comic text-base-content bg-[#f9fcfd] overflow-hidden">

      <HeroSection/>

      <GetInTouch/>
      <ToastContainer position="top-right" autoClose={3000} />

      <VisitOurOffice/>

      <FaqSection/>

      <CtaSection/>

    </main>
  );
}

export default ContactUs;