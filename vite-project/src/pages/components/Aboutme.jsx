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
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden max-w-6xl mx-auto pt-16">
      {/* Left side - Image */}
      <div className="md:w-2/5 relative h-auto">
        <img 
          src={aditya2nd}
          alt="Profile" 
          className="w-full h-[500px] object-cover object-top"
        />
      </div>
      
      {/* Right side - Content */}
      <div className="md:w-3/5 p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">About Me</h1>
        
        <p className="text-gray-600 mb-8">
          There are many variations of passages of Lorem Ipsum available, but the 
          majority have suffered <a href="#" className="text-pink-500">alteration</a> in some form, by injected 
          humour, or randomised words which dont look even slightly believable. If you 
          are going to use a passage of Lorem Ipsum,
        </p>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 font-medium text-sm ${
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
        <div className="space-y-6">
          {tabContent[activeTab].map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-gray-700 font-medium">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Scroll to top button - bottom right */}
        <button 
          className="fixed bottom-6 right-6 bg-white rounded-full p-2 shadow-md"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-500" 
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