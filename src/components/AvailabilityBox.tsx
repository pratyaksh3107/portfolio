import React from 'react';
import { MapPin, Briefcase, Users } from 'lucide-react';

const AvailabilityBox: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 bg-[#0A0E17] border-2 border-[#64FFDA] rounded-2xl p-4 shadow-[0_0_30px_#64FFDA] backdrop-blur-sm">
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
        <span className="text-[#ECEFF4] font-semibold text-sm">Available for Freelancing</span>
      </div>
      
      <div className="space-y-1 text-xs text-[#C792EA]">
        <div className="flex items-center">
          <MapPin className="w-3 h-3 mr-1" />
          <span>Jaipur, India</span>
        </div>
        <div className="flex items-center">
          <Briefcase className="w-3 h-3 mr-1" />
          <span>Interning at Linux World</span>
        </div>
        <div className="flex items-center">
          <Users className="w-3 h-3 mr-1" />
          <span>9.0 CGPA Student</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityBox;