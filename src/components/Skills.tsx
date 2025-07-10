import React from 'react';
import { Code, Database, Brain, Users, Zap, Cpu } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const skills = [
    { name: 'C++', icon: Code, level: 90 },
    { name: 'Java DSA', icon: Database, level: 85 },
    { name: 'Python', icon: Cpu, level: 80 },
    { name: 'AI/ML', icon: Brain, level: 75 },
    { name: 'Leadership', icon: Users, level: 90 },
    { name: 'Problem Solving', icon: Zap, level: 95 },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>
          My <span className={`${isDarkMode ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isDarkMode ? 'bg-[#0A0E17] border-[#64FFDA] hover:shadow-[0_0_30px_#64FFDA]' : 'bg-white border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${isDarkMode ? 'bg-[#64FFDA] text-[#0A0E17]' : 'bg-blue-600 text-white'}`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>{skill.name}</h3>
              </div>
              
              <div className={`w-full bg-gray-700 rounded-full h-2 mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${isDarkMode ? 'bg-[#64FFDA]' : 'bg-blue-600'}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <p className={`text-sm ${isDarkMode ? 'text-[#C792EA]' : 'text-purple-600'}`}>
                {skill.level}% Proficiency
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;