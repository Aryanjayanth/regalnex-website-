import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-regal-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a3c34,#0c1413,#000000)] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <div className="relative min-h-[400px] flex items-center justify-center flex-col">
          <div className="inline-flex items-center px-4 py-2 bg-black/30 border border-gray-800 rounded-full mb-6">
            <span className="text-gray-300">We'll build your next employee</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We like to<br />
            <span className="text-regal-green relative inline-block">
              Automate
              <span className="absolute inset-0 blur-md bg-regal-green/20 -z-10 rounded-xl animate-pulse-glow"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Powering Business Efficiency with Smart Automation Solutions
          </p>
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.15}s`,
                transform: `scale(${0.5 + Math.random() * 0.5})`,
                opacity: Math.random() * 0.6 + 0.4
              }}
            >
              <svg
                className="w-4 h-4 text-regal-green filter drop-shadow-[0_0_16px_rgba(52,211,153,0.8)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          ))}

          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link
              to="/schedule"
              className="inline-flex items-center bg-regal-green hover:bg-regal-green/90 text-black px-6 py-3 rounded-full text-sm font-medium transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">Schedule a call</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-3 blur-xl bg-regal-green/30 -z-10 animate-pulse-glow"></span>
            </Link>
          </div>
        </div>

        <div className="relative mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <img
            src="/lovable-uploads/195efd3d-c151-4a7f-966f-d3c112cd0a4e.png"
            alt="Tech Stack Integration"
            className="w-full h-full object-cover animate-pulse-subtle animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;