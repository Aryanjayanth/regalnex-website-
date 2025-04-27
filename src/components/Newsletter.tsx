import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-regal-black relative overflow-hidden border-t border-green-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a3c34,#0c1413,#000000)] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-regal-green/20 shadow-[0_0_15px_rgba(4,255,128,0.1)] hover:shadow-[0_0_30px_rgba(4,255,128,0.2)] transition-shadow duration-300">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-regal-green/90 to-regal-green/70 bg-clip-text text-transparent">
              Get updates on the latest AI Trends in Lead Generation Industry
            </h2>
            <p className="text-gray-400 mt-4 mb-8">
              Become a part of our seller community
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/40 border border-regal-green/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-regal-green focus:ring-1 focus:ring-regal-green/50 transition-all"
              />
              <button
                type="submit"
                className="bg-regal-green text-black font-medium px-6 py-3 rounded-lg hover:bg-regal-green/90 hover:shadow-[0_0_20px_rgba(4,255,128,0.3)] transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;