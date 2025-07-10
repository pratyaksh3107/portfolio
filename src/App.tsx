import React, { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import AvailabilityBox from './components/AvailabilityBox';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-[#0A0E17] text-[#ECEFF4]' : 'bg-gray-100 text-gray-900'}`}>
      <CustomCursor />
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <AvailabilityBox />
      
      <Hero isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Achievements isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;