import React from 'react';
import { Award, Users, Trophy, CheckCircle } from 'lucide-react';

interface AchievementsProps {
  isDarkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ isDarkMode }) => {
  const achievements = [
    {
      title: 'JECC Volunteer',
      description: 'Active volunteer contributing to community development and leadership programs.',
      icon: Users,
      year: '2023',
      color: isDarkMode ? '#64FFDA' : '#3B82F6',
    },
    {
      title: 'Be10x AI Tools Certified',
      description: 'Certified in advanced AI tools and automation technologies.',
      icon: Award,
      year: '2024',
      color: isDarkMode ? '#C792EA' : '#8B5CF6',
    },
    {
      title: '3rd Place in Robo Soccer',
      description: 'Achieved third position in inter-college robotics competition.',
      icon: Trophy,
      year: '2023',
      color: isDarkMode ? '#64FFDA' : '#10B981',
    },
    {
      title: 'BTech CSE (AI & Data Science)',
      description: 'Maintaining 9.0 CGPA in Computer Science with AI specialization.',
      icon: CheckCircle,
      year: '2022-2026',
      color: isDarkMode ? '#C792EA' : '#F59E0B',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>
          My <span className={`${isDarkMode ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Achievements</span>
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDarkMode ? 'bg-[#64FFDA]' : 'bg-blue-600'} opacity-30`}></div>
          
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${isDarkMode ? 'bg-[#0A0E17] border-[#64FFDA]' : 'bg-white border-blue-600'} shadow-lg`}
                style={{ backgroundColor: achievement.color }}
              ></div>
              
              {/* Achievement Card */}
              <div
                className={`w-5/12 p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${isDarkMode ? 'bg-[#0A0E17] border-[#C792EA] hover:shadow-[0_0_30px_#C792EA]' : 'bg-white border-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full mr-4`}
                    style={{ backgroundColor: achievement.color, color: isDarkMode ? '#0A0E17' : 'white' }}
                  >
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>{achievement.title}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-[#C792EA]' : 'text-purple-600'}`}>{achievement.year}</p>
                  </div>
                </div>
                
                <p className={`text-sm ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-600'} opacity-80`}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;