
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-8 py-5 border-b border-green-900/30 fixed top-0 left-0 bg-regal-black/95 backdrop-blur-md z-[9999] shadow-lg shadow-regal-green/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold text-white relative group">
            <span className="absolute inset-0 blur-lg bg-regal-green/20 opacity-60 group-hover:opacity-90 transition-opacity duration-300 rounded-full -z-10 animate-pulse-glow"></span>
            <span className="relative z-10 glow-hover inline-flex">
              <span className="text-white">Regal </span>
              <span className="text-regal-green">Nex</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-white hover:text-regal-green transition-colors relative group">
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/case-studies" className="text-white hover:text-regal-green transition-colors relative group">
            <span>Case Studies</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/pricing" className="text-white hover:text-regal-green transition-colors relative group">
            <span>Pricing</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/contact" className="text-white hover:text-regal-green transition-colors relative group">
            <span>Contact Us</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/70 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            to="/schedule"
            className="bg-transparent text-white border border-gray-700 hover:border-regal-green px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-regal-green/10 hover:shadow-[0_0_15px_rgba(48,189,54,0.3)] animate-pulse-glow"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-regal-green transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-regal-black/95 backdrop-blur-md border-b border-green-900/30 py-4 px-8 md:hidden z-50 animate-fade-in shadow-lg shadow-regal-green/5">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-regal-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/case-studies" 
              className="text-white hover:text-regal-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-regal-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-regal-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/schedule"
              className="bg-transparent text-white border border-gray-700 hover:border-regal-green px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-regal-green/10 text-center hover:shadow-[0_0_15px_rgba(48,189,54,0.3)] animate-pulse-glow"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
