import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'ATM Machine',
      description: 'A comprehensive ATM simulation with user authentication, balance inquiry, and transaction history.',
      tech: ['C++', 'OOP', 'File Handling'],
      featured: true,
    },
    {
      title: 'Library Management',
      description: 'Full-featured library system with book management, member registration, and issue tracking.',
      tech: ['Java', 'Data Structures', 'Database'],
      featured: false,
    },
    {
      title: 'Hospital Management',
      description: 'Patient management system with appointment scheduling and medical record keeping.',
      tech: ['Python', 'GUI', 'Database'],
      featured: true,
    },
    {
      title: 'College Management',
      description: 'Student information system with course management and grade tracking.',
      tech: ['Java', 'Swing', 'MySQL'],
      featured: false,
    },
    {
      title: 'Currency Converter',
      description: 'Real-time currency conversion with live exchange rates and historical data.',
      tech: ['Python', 'API', 'GUI'],
      featured: false,
    },
    {
      title: 'AI Project (ML)',
      description: 'Machine learning project with predictive analytics and data visualization.',
      tech: ['Python', 'ML', 'TensorFlow'],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>
          My <span className={`${isDarkMode ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isDarkMode ? 'bg-[#0A0E17] border-[#C792EA] hover:shadow-[0_0_30px_#C792EA]' : 'bg-white border-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]'} ${project.featured ? 'ring-2 ring-offset-2 ring-offset-transparent' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className={`absolute -top-3 -right-3 p-2 rounded-full ${isDarkMode ? 'bg-[#64FFDA] text-[#0A0E17]' : 'bg-blue-600 text-white'}`}>
                  <Zap className="w-4 h-4" />
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>{project.title}</h3>
                <div className="flex gap-2">
                  <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#64FFDA] hover:text-[#0A0E17]' : 'hover:bg-blue-600 hover:text-white'}`}>
                    <Github className="w-4 h-4" />
                  </button>
                  <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#C792EA] hover:text-[#0A0E17]' : 'hover:bg-purple-600 hover:text-white'}`}>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-600'} opacity-80`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-[#64FFDA] text-[#0A0E17]' : 'bg-blue-100 text-blue-800'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;