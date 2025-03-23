import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import adityaimg11 from '../../assets/adityaimg11.jpeg';
import adityaimg2 from '../../assets/adityaimg2.jpeg';

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${adityaimg11})`,
        }}>
      </div>
      
      {/* Light overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-20"></div> */}
      
      {/* Header/Navigation */}
      <div className="relative z-10 w-full flex justify-between items-center px-8 py-4">
        {/* Logo */}
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
        
        {/* Right Side - Social & CTA */}
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
          <button className="border border-gray-300 px-4 py-2 rounded">BUY NOW</button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center h-[calc(100vh-120px)] px-8">
        <div className="max-w-3xl">
          <div className="uppercase tracking-wider text-sm font-medium mb-4">FREELANCE DIGITAL DESIGNER</div>
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="text-pink-600">Nancy</span> Welcome to my World.
          </h1>
        </div>
      </div>
      
      {/* White box with image - positioned to overlap bottom edge */}
      <div className="relative z-20 ml-28" style={{ marginTop: "-120px" }}>
        <div className="bg-white w-120 h-160 rounded-2xl shadow-lg overflow-hidden">
          {/* Replace with your actual image */}
          <img 
            src={adityaimg2} 
            alt="Portfolio preview" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;