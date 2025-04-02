import React, { useState } from 'react';
import aditya2nd from "../../assets/aditya2nd.jpeg";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('Main skills');

  const tabs = [
    'Main skills',
    'Awards',
    'Experience',
    'Education & Certification'
  ];

  const tabContent = {
    'Main skills': [
      {
        title: 'User experience design - UI/UX',
        description: 'Delight the user and make it work.'
      },
      {
        title: 'Web and user interface design - Development',
        description: 'Websites, web experiences, ...'
      },
      {
        title: 'Interaction design - Animation',
        description: 'I like to move it move it.'
      }
    ],
    'Awards': [
      {
        title: 'Design Excellence Award 2023',
        description: 'Recognized for outstanding UI/UX solutions.'
      },
      {
        title: 'Web Innovation Prize',
        description: 'For creating intuitive digital experiences.'
      }
    ],
    'Experience': [
      {
        title: 'Senior UX Designer - TechCorp',
        description: '2020 - Present: Leading design solutions across products.'
      },
      {
        title: 'UI Developer - DesignStudio',
        description: '2017 - 2020: Implemented responsive web designs.'
      }
    ],
    'Education & Certification': [
      {
        title: 'Master of Design - Design University',
        description: 'Specialized in Human-Computer Interaction'
      },
      {
        title: 'Certified UX Professional',
        description: 'Nielsen Norman Group, 2019'
      }
    ]
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden max-w-7xl mx-auto pt-4 sm:pt-8 md:pt-16 px-4 sm:px-6 md:px-6 md:gap-8 lg:gap-12">
      {/* Left side - Image */}
      <div className="w-full md:w-6/12 lg:w-1/2 relative shadown-lg ">
        <img 
          src={aditya2nd}
          alt="Profile" 
          className="rounded-lg sm:rounded-xl md:rounded-2xl w-full h-[250px] sm:h-[350px] md:h-[600px] object-cover object-center shadow-lg "
        />
      </div>
      
      {/* Right side - Content */}
      <div className="w-full md:w-6/12 lg:w-1/2 p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">About Me</h1>
        
        <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 md:mb-8">
          There are many variations of passages of Lorem Ipsum available, but the 
          majority have suffered <a href="#" className="text-pink-500">alteration</a> in some form, by injected 
          humour, or randomised words which dont look even slightly believable. If you 
          are going to use a passage of Lorem Ipsum,
        </p>
        
        {/* Tabs - Scrollable on mobile */}
        <div className="border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
          <div className="flex whitespace-nowrap min-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-3 sm:px-4 font-medium text-sm sm:text-base ${
                  activeTab === tab
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="space-y-4 sm:space-y-6">
          {tabContent[activeTab].map((item, index) => (
            <div key={index} className="mb-3 sm:mb-4">
              <h3 className="text-gray-700 font-medium text-base sm:text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Scroll to top button - bottom right, hidden on small screens when not needed */}
        <button 
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;