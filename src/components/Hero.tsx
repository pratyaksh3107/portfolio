import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, MessageCircle } from 'lucide-react';
import pratyakshImg from '../assets/pratyaksh.jpg';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = ['C++ Developer', 'DSA in Java', 'AI Builder', 'Team Leader'];

  useEffect(() => {
    const currentSkill = skills[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentSkill.length) {
          setDisplayText(currentSkill.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, skills]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${isDarkMode ? 'bg-[#64FFDA]' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${isDarkMode ? 'bg-[#C792EA]' : 'bg-purple-400'}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse delay-500 ${isDarkMode ? 'bg-[#64FFDA]' : 'bg-green-400'}`}></div>
      </div>

      {/* Logo */}
      <div className={`absolute top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl border-2 ${isDarkMode ? 'bg-[#0A0E17] border-[#64FFDA] text-[#64FFDA]' : 'bg-white border-blue-500 text-blue-500'} shadow-lg`}>
        PM
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <img
          src={pratyakshImg}
          alt="Pratyaksh Mathur"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-xl"
        />
        {/* <div className={`mb-8 w-24 h-24 rounded-full mx-auto flex items-center justify-center text-3xl font-bold border-4 animate-bounce ${isDarkMode ? 'bg-[#0A0E17] border-[#64FFDA] text-[#64FFDA]' : 'bg-white border-blue-500 text-blue-500'} shadow-2xl`}>PM</div> */}
        
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>
          Hi, I'm{' '}
          <span className={`${isDarkMode ? 'text-[#64FFDA]' : 'text-blue-600'} animate-pulse`}>
            Pratyaksh Mathur
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-700'}`}>
          I Build Smart Things with AI, Code & Passion
        </p>
        
        <div className={`text-lg md:text-xl mb-12 h-8 ${isDarkMode ? 'text-[#C792EA]' : 'text-purple-600'}`}>
          <span className="font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={scrollToContact}
            className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-[#64FFDA] text-[#0A0E17] hover:shadow-[0_0_30px_#64FFDA]' : 'bg-blue-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'}`}
          >
            <MessageCircle className="inline-block mr-2 w-5 h-5" />
            Let's Connect
          </button>
          
          <a
            href="#"
            className={`group relative px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'border-[#C792EA] text-[#C792EA] hover:bg-[#C792EA] hover:text-[#0A0E17] hover:shadow-[0_0_30px_#C792EA]' : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]'}`}
          >
            <Download className="inline-block mr-2 w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className={`w-8 h-8 ${isDarkMode ? 'text-[#64FFDA]' : 'text-blue-600'}`} />
      </div>
    </section>
  );
};

export default Hero;