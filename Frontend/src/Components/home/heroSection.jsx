import React from 'react'
import { Link } from "react-router-dom";
import rectangle from '../../assets/home-storySectionImg.jpg';
import logoAlone from '../../assets/IIHH_OnlyLogo.png'

import RippleButton from './rippleVideoBtn'

const heroSection = () => {
  return (
    <>
        <section
          id="hero"
          className="relative h-auto min-h-[500px] md:min-h-[600px] 2xl:h-[800px] bg-cover bg-center flex items-center justify-center bg-[#223668]"
          style={{ backgroundImage: `url(${rectangle})` }}
        >
          <div className="absolute inset-0 bg-black/20 z-0" />

          {/* Content Wrapper */}
          <div className="py-4 w-full container px-6 relative z-10 flex flex-col items-center justify-start md:flex-row md:items-start md:justify-start gap-10">
            <div className="w-full flex flex-col items-center md:items-start md:text-left">
              
              {/* Logo + Heading */}
              <div className="w-full flex flex-col text-center items-center mt-4 gap-4 md:flex-row md:items-start md:text-left md:justify-start">
                <img
                  src={logoAlone}
                  alt="Logo"
                  className="align-center h-auto object-contain transform hover:scale-105 duration-300"
                  width="200px"
                />
                <h1 className="block text-5xl md:text-6xl font-extrabold text-[#ffd278] mb-4 leading-tight tracking-tight drop-shadow-lg">
                    International <br /> Institute 
                    of <br />Horizon Humanism
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-center text-lg md:text-xl text-white/90 mb-10 max-w-lg md:mx-0 leading-relaxed drop-shadow-md md:text-left">
                A transformative educational experience fostering humanism, resilience,
                and purpose for all learners.
              </p>

              {/* Buttons */}
              <div className="pb-20 flex flex-row justify-center md:justify-start gap-6 md:pb-0">
                <Link
                  to="/programs"
                  className="sm:text-lg bg-white text-purple-700 px-8 py-3 rounded-full font-semibold overflow-hidden transform hover:scale-105 group transition-all duration-300 hover:shadow-xl"
                >
                  <span className="text-[#036e8d]">Explore Programs</span>
                </Link>
                <RippleButton/>
              </div>
            </div>
          </div>

          {/* SVG Wave */}
          <svg
            className="absolute bottom-0"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "#d2a763",
              width: "148%",
              height: 90,
              transform: "rotate(180deg)",
            }}
          >
            <path
              d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
              opacity=".25"
              style={{ fill: "#ffffff" }}
            />
            <path
              d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
              opacity=".5"
              style={{ fill: "#ffffff",}}
            />
            <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
          </svg>
          <div className='absolute -bottom-0.5 bg-[#d2a763] w-full h-1'></div>
        </section>
    </>
  )
}

export default heroSection
