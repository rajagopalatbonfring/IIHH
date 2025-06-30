import React from 'react'
import { Link } from "react-router-dom";

import { ChevronRight } from 'lucide-react';

import HowWorkBgImage from '../../assets/Howitworks-heroimg.jpg';

const heroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-auto min-h-[500px] md:min-h-[600px] 2xl:h-[800px]  bg-cover bg-center flex items-center justify-center bg-[#223668]"
        style={{ backgroundImage: `url(${HowWorkBgImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10 flex-col align-center justify-center ">
          <h1 className="text-4xl text-[#ffd278] text-center md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            How IIHH Works
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover our unique, practical approach to humanistic learning—empowering the next generation through real-world experiences.
          </p>
          <p className='text-center'>
          <div className="flex justify-center">
            <Link
              to="/apply"
              className="relative inline-flex items-center justify-center bg-white text-[#036e8d] px-8 py-3 rounded-full text-lg font-semibold overflow-hidden transform hover:scale-105 group transition-all duration-300 hover:shadow-xl"
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          </p>
        </div>
        <svg
          className="absolute bottom-0"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#d2a763', width: '148%', height: 90, transform: 'rotate(180deg)' }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
            style={{ fill: '#ffffff' }}
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
            style={{ fill: '#ffffff' }}
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
        <div className='absolute -bottom-0.5 bg-[#d2a763] w-full h-1'></div>
      </section>
    </>
  )
}

export default heroSection
