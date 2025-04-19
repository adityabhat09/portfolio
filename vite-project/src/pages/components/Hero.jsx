import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import adityaimg111 from '../../assets/adityaimg111.png';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-cover bg-right-top sm:bg-center"
      style={{ backgroundImage: `url(${adityaimg111})` }}
    >
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32 pt-16 sm:pt-0">
        <div className="max-w-4xl">
          <div className="uppercase tracking-wider text-lg sm:text-base md:text-xl font-medium mb-4">
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
