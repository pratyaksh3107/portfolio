import React from 'react';
import { Phone, Mail, Linkedin, Instagram, MapPin } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8000971969',
      link: 'tel:+918000971969',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mathurpratyaksh2006@gmail.com',
      link: 'mailto:mathurpratyaksh2006@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/pratyaksh-mathur',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'Follow on Instagram',
      link: 'https://instagram.com/pratyaksh.mathur',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>
          Get In <span className={`${isDarkMode ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.link}
              className={`group p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${isDarkMode ? 'bg-[#0A0E17] border-[#64FFDA] hover:shadow-[0_0_30px_#64FFDA]' : 'bg-white border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-4 rounded-full mb-4 mx-auto w-fit ${isDarkMode ? 'bg-[#64FFDA] text-[#0A0E17]' : 'bg-blue-600 text-white'} group-hover:scale-110 transition-transform`}>
                <contact.icon className="w-6 h-6" />
              </div>
              
              <h3 className={`text-lg font-semibold text-center mb-2 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>{contact.label}</h3>
              <p className={`text-sm text-center ${isDarkMode ? 'text-[#C792EA]' : 'text-purple-600'}`}>{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Location Info */}
        <div className={`mt-12 p-8 rounded-2xl border-2 text-center ${isDarkMode ? 'bg-[#0A0E17] border-[#C792EA]' : 'bg-white border-purple-500'}`}>
          <div className={`p-4 rounded-full mb-4 mx-auto w-fit ${isDarkMode ? 'bg-[#C792EA] text-[#0A0E17]' : 'bg-purple-600 text-white'}`}>
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-[#ECEFF4]' : 'text-gray-900'}`}>Based in Jaipur, India</h3>
          <p className={`${isDarkMode ? 'text-[#C792EA]' : 'text-purple-600'}`}>Available for freelance projects and collaborations</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;