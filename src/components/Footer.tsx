
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-regal-black border-t border-green-900/30 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white glow-hover inline-block relative group">
              <span className="relative z-10">Regal Nex</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green group-hover:w-full transition-all duration-300"></span>
            </Link>
            <p className="text-gray-400">
              Advanced AI Solutions for businesses and corporations.
            </p>
            <div className="space-y-2 mt-6">
              <p className="text-regal-green animate-glow-pulse flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                likithlikithsd@gmail.com
              </p>
              <p className="text-gray-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7483609720
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-4 -mt-4 rounded-lg hover:bg-regal-green/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(48,189,54,0.1)]">
            <h3 className="text-lg font-semibold mb-4 text-white text-glow relative inline-block">
              <span>Navigation</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-regal-green/30"></span>
            </h3>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-400 hover:text-regal-green transition-colors block relative group">
                <span className="relative z-10">Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/case-studies" className="text-gray-400 hover:text-regal-green transition-colors block relative group">
                <span className="relative z-10">Case Studies</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/pricing" className="text-gray-400 hover:text-regal-green transition-colors block relative group">
                <span className="relative z-10">Pricing</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-regal-green transition-colors block relative group">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="p-4 -mt-4 rounded-lg hover:bg-regal-green/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(48,189,54,0.1)]">
            <h3 className="text-lg font-semibold mb-4 text-white text-glow relative inline-block">
              <span>Resources</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-regal-green/30"></span>
            </h3>
            <nav className="space-y-3">
              <Link to="/report-vulnerability" className="text-gray-400 hover:text-regal-green transition-colors block glow-hover relative group inline-flex items-center">
                <span className="relative z-10">Report a Vulnerability</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/data-processing" className="text-gray-400 hover:text-regal-green transition-colors block glow-hover relative group inline-flex items-center">
                <span className="relative z-10">Data Processing Agreement</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-regal-green transition-colors block glow-hover relative group inline-flex items-center">
                <span className="relative z-10">Privacy Policy</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-regal-green transition-colors block glow-hover relative group inline-flex items-center">
                <span className="relative z-10">Terms of Service</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-regal-green/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-glow">Connect With Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400">Stay updated with our latest AI innovations and industry insights.</p>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-regal-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-regal-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-regal-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
              <Link
                to="/schedule"
                className="bg-transparent text-white border border-gray-700 hover:border-regal-green px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-regal-green/10 btn-glow animate-border-glow inline-block mt-2"
              >
                <span className="relative z-10">Schedule a Call</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 border-t border-green-900/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 hover:text-gray-300 transition-colors">© 2025 Regal Nex | All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/sitemap" className="text-gray-400 hover:text-regal-green transition-colors text-sm">
              Sitemap
            </Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-regal-green transition-colors text-sm">
              Accessibility
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-regal-green transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
