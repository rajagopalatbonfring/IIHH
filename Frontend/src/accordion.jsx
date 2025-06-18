import { Clock, Calendar } from 'lucide-react';

export default function ImprovedHoursCard() {
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
    <div className="bg-white border-2 border-[#d2a763] rounded-lg p-8 shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#036e8d] rounded-full mb-4">
          <Clock className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#036e8d] mb-2">IIHH Office Hours</h3>
        <div className="flex items-center justify-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className={`text-sm font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
            {isOpen ? 'Were Open' : 'Currently Closed'}
          </span>
          <span className="text-gray-500 text-sm">• {nextChange}</span>
        </div>
      </div>
      
      {/* Schedule Table */}
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="bg-[#036e8d] px-6 py-3">
          <h4 className="text-white font-semibold text-center">Weekly Schedule</h4>
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
            <div 
              key={index}
              className={`px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors ${
                item.primary ? 'bg-[#d2a763]/10' : 'bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Calendar className={`w-5 h-5 ${item.primary ? 'text-[#d2a763]' : 'text-gray-400'}`} />
                <span className={`font-semibold ${item.primary ? 'text-[#036e8d]' : 'text-gray-700'}`}>
                  {item.days}
                </span>
              </div>
              <div className="text-right">
                <span className={`font-mono text-sm font-medium ${item.primary ? 'text-[#036e8d]' : 'text-gray-600'}`}>
                  {item.hours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer note */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-1">
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