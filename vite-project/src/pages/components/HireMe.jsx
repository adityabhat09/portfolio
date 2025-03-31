import React from 'react';

const HireMe = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Hire Me.</h1>
          <p className="text-lg text-gray-700 mb-6">
            I am available for freelance work. Connect with me via phone:
            <span className="font-semibold"> 01923 088574</span> or email:{' '}
            <span className="font-semibold">admin@example.com</span>
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email *"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-400"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Write a Subject"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gray-400"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-1/2 h-auto max-h-[580px] rounded-lg overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1586232880922-25f9b9695ecb?q=80&w=3878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
                alt="Person talking on phone"
                className="w-full h-auto object-cover object-center"
            />
        </div>


      </div>
    </div>
  );
};

export default HireMe;