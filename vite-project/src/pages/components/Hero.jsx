import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

import adityaimg111 from '../../assets/adityaimg111.png';

const Hero = () => {
  return (
    <div className="relative h-10/12 w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${adityaimg111})`,
        }}>
      </div>
        <div className="py-8">

        </div>
      {/* Header/Navigation */}
      {/* <div className="relative z-10 w-full flex justify-between items-center px-8 py-4">
        Logo
        <div className="flex items-center">
          <div className="bg-black rounded-full p-2 mr-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden">
              <div className="bg-red-500 h-6 w-2 mx-0.5"></div>
              <div className="bg-yellow-500 h-8 w-2 mx-0.5"></div>
              <div className="bg-blue-500 h-4 w-2 mx-0.5"></div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-medium">Home</a>
            <a href="#" className="font-medium">Service</a>
            <a href="#" className="font-medium">About</a>
            <a href="#" className="font-medium">Pages</a>
            <a href="#" className="font-medium">Blocks</a>
            <a href="#" className="font-medium">Contact</a>
          </nav>
        </div>

        Right Side - Social & CTA
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
          <button className="border border-gray-300 border-2 px-4 py-2 rounded text-white">BUY NOW</button>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center h-[calc(100vh-170px)] pl-32">
        <div className="max-w-3xl">
          <div className="uppercase tracking-wider text-sm font-medium mb-4">FREELANCE DIGITAL DESIGNER</div>
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-pink-600">Aditya</span> Welcome to my World.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
