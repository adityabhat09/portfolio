import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 p-20 md:p-32 rounded-r-4xl">
            <div className="max-w-md">
              <p className="text-sm tracking-wider mb-4">READY TO DO THIS</p>
              <h2 className="text-6xl font-bold text-white mb-8 leading-tight">Let's get<br />to work</h2>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-red-500 transition duration-300">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-20 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-semibold mb-8">Quick Link</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Work</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Let's Talk</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-8">Say Hello</h3>
                <ul className="space-y-4">
                  <li><a href="mailto:admin@example.com" className="text-red-500 hover:text-red-400 transition duration-300">admin@example.com</a></li>
                  <li><a href="mailto:hr@example.com" className="text-red-500 hover:text-red-400 transition duration-300">hr@example.com</a></li>
                  <li className="flex space-x-6 pt-6">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                      <Twitter size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright moved to bottom of the blue/dark box */}
            <div className="absolute bottom-0 left-12 right-0 p-4 text-left pb-9">
              <p className="text-gray-400 text-sm">Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;