import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Twitter, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="rounded-b-2xl fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-xs shadow-md">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-black rounded-full p-2 mr-4">
            <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full overflow-hidden">
              <div className="bg-red-500 h-4 w-1 sm:h-6 sm:w-2 mx-0.5"></div>
              <div className="bg-yellow-500 h-6 w-1 sm:h-8 sm:w-2 mx-0.5"></div>
              <div className="bg-blue-500 h-3 w-1 sm:h-4 sm:w-2 mx-0.5"></div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link to="/" className="font-medium">Home</Link>
            <Link to="/service" className="font-medium">Service</Link>
            <Link to="/about" className="font-medium">About</Link>
            <Link to="/pages" className="font-medium">Pages</Link>
            <Link to="/blocks" className="font-medium">Blocks</Link>
            <Link to="/contact" className="font-medium">Contact</Link>
          </nav>
        </div>

        {/* Right Side - Social & CTA */}
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a href="#" aria-label="Facebook"><Facebook size={18} className="hover:text-blue-600" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} className="hover:text-blue-700" /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} className="hover:text-pink-600" /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} className="hover:text-blue-400" /></a>
          </div>
          <button className="hidden sm:block border border-gray-300 border-2 px-3 py-1.5 md:px-4 md:py-2 rounded text-gray-900 hover:bg-gray-100 transition-colors">BUY NOW</button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="font-medium py-2 px-3 hover:bg-gray-100 rounded">Home</Link>
            <Link to="/service" className="font-medium py-2 px-3 hover:bg-gray-100 rounded">Service</Link>
            <Link to="/about" className="font-medium py-2 px-3 hover:bg-gray-100 rounded">About</Link>
            <Link to="/pages" className="font-medium py-2 px-3 hover:bg-gray-100 rounded">Pages</Link>
            <Link to="/blocks" className="font-medium py-2 px-3 hover:bg-gray-100 rounded">Blocks</Link>
            <Link to="/contact" className="font-medium py-2 px-3 hover:bg-gray-100 rounded">Contact</Link>
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 py-2 px-3">
              <a href="#" aria-label="Facebook"><Facebook size={20} className="hover:text-blue-600" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} className="hover:text-blue-700" /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} className="hover:text-pink-600" /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} className="hover:text-blue-400" /></a>
            </div>
            
            {/* Mobile CTA Button */}
            <button className="border border-gray-300 border-2 px-4 py-2 rounded text-gray-800 hover:bg-gray-100 transition-colors mx-3 my-2">BUY NOW</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;