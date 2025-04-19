import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

import adityaimg111 from '../../assets/adityaimg111.png';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-contain sm:bg-cover"
        style={{
          backgroundImage: `url(${adityaimg111})`,
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl">
          <div className="uppercase tracking-wider text-base sm:text-lg md:text-xl font-medium mb-4">
            FREELANCE DIGITAL DESIGNER
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-5xl lg:text-7xl font-bold mb-6 leading-snug">
            Hello I'm <span className="text-pink-600">Aditya,</span>
            <span className="block mt-2">Welcome to my World.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
