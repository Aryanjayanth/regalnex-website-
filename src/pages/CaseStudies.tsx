
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudiesSection from "../components/CaseStudiesSection";
import StarDecorations from "../components/StarDecorations";

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <StarDecorations />
      </div>
      <Navbar />
      <main className="flex-grow relative z-10">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-black/30 border border-gray-800 rounded-full mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2 animate-pulse" stroke="white" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.5L13.5 10.5H18L14.5 13L16 17L12 14.5L8 17L9.5 13L6 10.5H10.5L12 6.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Success stories</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Our Client <span className="text-regal-green">Success Stories</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
                See how our AI automation solutions have transformed businesses across industries.
              </p>
            </div>
          </div>
        </div>
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
