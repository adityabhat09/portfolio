import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className=" rounded-b-2xl fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-xs shadow-md">
      <div className="w-full flex justify-between items-center px-8 py-4">
        
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
            <Link to="/" className="font-medium">Home</Link>
            <Link to="/service" className="font-medium">Service</Link>
            <Link to="/about" className="font-medium">About</Link>
            <Link to="/pages" className="font-medium">Pages</Link>
            <Link to="/blocks" className="font-medium">Blocks</Link>
            <Link to="/contact" className="font-medium">Contact</Link>
          </nav>
        </div>

        {/* Right Side - Social & CTA */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
          <button className="border border-gray-300 border-2 px-4 py-2 rounded text-white">BUY NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
