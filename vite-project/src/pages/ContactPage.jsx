// https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

import React from 'react';

const ContactPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section with Overlay Navigation */}
      <div className="relative bg-gray-800 h-[75vh] flex items-center justify-center">
        {/* Navigation Bar - Transparent Overlay */}
        <nav className="absolute top-0 left-0 right-0 z-20 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-10">
              <div className="h-10 w-10 bg-black rounded-md flex items-center justify-center">
                <div className="h-6 w-6 bg-red-500 rounded-md"></div>
              </div>
              <span className="ml-2 text-2xl font-bold text-white">trydo</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-red-400">Home</a>
              <a href="#" className="text-white hover:text-red-400">Service</a>
              <a href="#" className="text-white hover:text-red-400">About</a>
              <a href="#" className="text-white hover:text-red-400">Pages</a>
              <a href="#" className="text-white hover:text-red-400">Blocks</a>
              <a href="#" className="text-white hover:text-red-400">Contact</a>
            </div>
          </div>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm">
            BUY NOW
          </button>
        </nav>
        
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=4470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
            alt="Office environment"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold text-red-500 mb-4">Contact With Us</h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-red-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Contact With Phone Number</h3>
              <div className="text-gray-600 text-center text-sm">
                <p className="mb-1">+057 254 365 456</p>
                <p>+856 325 652 984</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-red-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Email Address</h3>
              <div className="text-gray-600 text-center text-sm">
                <p className="mb-1">admin@gmail.com</p>
                <p>example@gmail.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-red-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-3">Location</h3>
              <div className="text-gray-600 text-center text-sm">
                <p className="mb-1">5678 Bangla Main Road, cities 580</p>
                <p>GBangla, example 54786</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Us.</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.
              </p>
              
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className="mb-6">
                  <textarea 
                    placeholder="Your Message" 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                  ></textarea>
                </div>
                <button type="submit" className="bg-red-500 text-white py-3 px-8 rounded font-semibold hover:bg-red-600 transition duration-200">
                  SUBMIT NOW
                </button>
              </form>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="/api/placeholder/500/500" 
                alt="Customer service representative" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;