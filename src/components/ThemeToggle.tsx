import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-40 p-3 rounded-full border-2 transition-all duration-300 ${isDarkMode ? 'bg-[#0A0E17] border-[#64FFDA] text-[#64FFDA] hover:shadow-[0_0_20px_#64FFDA]' : 'bg-white border-gray-300 text-gray-700 hover:shadow-lg'}`}
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;