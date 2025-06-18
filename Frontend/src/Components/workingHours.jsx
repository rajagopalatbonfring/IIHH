import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import Calendar from '../assets/lottie/calendar.json';
import Clock from '../assets/lottie/clock.json';

// Component for each schedule row to manage its own calendar animation
function ScheduleRow({ item }) {
  const [isCalenderHovered, setIsCalenderHovered] = useState(false);
  const calenderLottieRef = useRef(null);

  const playCalenderAnimation = () => {
    setIsCalenderHovered(true);
    if (calenderLottieRef.current) {
      calenderLottieRef.current.goToAndPlay(0);
    }
  };

  return (
    <div 
      className={`px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between hover:bg-gray-100 transition-colors ${
        item.primary ? 'bg-[#d2a763]/10' : 'bg-white'
      }`}
      onMouseEnter={playCalenderAnimation}
      onMouseLeave={() => setIsCalenderHovered(false)}
    >
      <div className="flex items-center gap-2">
        <Lottie
          lottieRef={calenderLottieRef}
          animationData={Calendar}
          loop={false}
          isPaused={!isCalenderHovered}
          autoplay={false}
          style={{ width: 30, height: 30 }}
        />
        <span className={`font-semibold text-xs sm:text-sm ${item.primary ? 'text-[#036e8d]' : 'text-gray-700'}`}>
          {item.days}
        </span>
      </div>
      <div className="text-right">
        <span className={`font-mono text-xs font-medium ${item.primary ? 'text-[#036e8d]' : 'text-gray-600'}`}>
          {item.hours}
        </span>
      </div>
    </div>
  );
}

export default function ImprovedHoursCard() {
  const [isClockHovered, setIsClockHovered] = useState(false);
  const clockLottieRef = useRef(null);

  const playClockAnimation = () => {
    setIsClockHovered(true);
    if (clockLottieRef.current) {
      clockLottieRef.current.goToAndPlay(0);
    }
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    let isOpen = false;
    let nextChange = '';
    
    if (currentDay >= 1 && currentDay <= 5) { // Monday-Friday
      isOpen = currentHour >= 9 && currentHour < 20;
      nextChange = isOpen ? 'Closes at 8:00 PM' : 'Opens at 9:00 AM';
    } else if (currentDay === 6) { // Saturday
      isOpen = currentHour >= 9 && currentHour < 18;
      nextChange = isOpen ? 'Closes at 6:00 PM' : 'Opens at 9:00 AM';
    } else { // Sunday
      isOpen = currentHour >= 9 && currentHour < 17;
      nextChange = isOpen ? 'Closes at 5:00 PM' : 'Opens at 9:00 AM';
    }
    
    return { isOpen, nextChange };
  };
  
  const { isOpen, nextChange } = getCurrentStatus();

  return (
    <div  
      className="bg-white border-2 border-[#d2a763] rounded-lg p-4 sm:p-6 shadow-lg"
      onMouseEnter={playClockAnimation}
      onMouseLeave={() => setIsClockHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#036e8d] rounded-full flex items-center justify-center">
          <Lottie
            lottieRef={clockLottieRef}
            animationData={Clock}
            loop={false}
            isPaused={!isClockHovered}
            autoplay={false}
            style={{ width: 48, height: 48 }}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold text-[#036e8d] mb-1">IIHH Office Hours</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`text-xs sm:text-xs font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
              {isOpen ? "We're Open" : 'Currently Closed'}
            </span>
            <span className="text-gray-500 text-xs">• {nextChange}</span>
          </div>
        </div>
      </div>
      
      {/* Schedule Table */}
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="bg-[#036e8d] px-3 sm:px-4 py-2">
          <h4 className="text-white font-semibold text-center text-xs sm:text-sm">Weekly Schedule</h4>
        </div>
        
        <div className="divide-y divide-gray-200">
          {[
            {
              days: "Monday - Friday",
              hours: "9:00 AM - 8:00 PM",
              primary: true,
            },
            {
              days: "Saturday",
              hours: "9:00 AM - 6:00 PM",
              primary: false,
            },
            {
              days: "Sunday",
              hours: "9:00 AM - 5:00 PM",
              primary: false,
            },
          ].map((item, index) => (
            <ScheduleRow key={index} item={item} />
          ))}
        </div>
      </div>
      
      {/* Footer note */}
      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-xs mb-1">
            <strong>Visiting IIHH?</strong> Office hours are for student, parent, and educator support.
          </p>
          <p className="text-gray-500 text-xs">
            Hours may vary on holidays - please call ahead to confirm.
          </p>
        </div>
      </div>
    </div>
  );
}