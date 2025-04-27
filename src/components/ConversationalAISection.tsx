
import React from "react";
import { CircleDollarSign, Clock3, Building } from "lucide-react";

const ConversationalAISection = () => {
  return (
    <section className="relative py-24 bg-regal-black overflow-hidden">
      {/* Semi-circle decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-regal-green/10 to-transparent rounded-b-[400px] blur-xl opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-regal-green/20 to-transparent rounded-b-[300px] blur-lg"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 border-t border-green-900/20">
          <div className="h-full w-full max-w-5xl mx-auto border-l border-r border-green-900/10"></div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 w-full h-[1px] bg-green-900/20 transform -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in relative">
          {/* Decorative circle above the heading */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-regal-green/20 animate-pulse-slow shadow-[0_0_15px_rgba(74,222,128,0.4)] border border-regal-green/30 z-10"></div>
          
          <div className="inline-flex items-center px-4 py-2 bg-black/30 border border-gray-800 rounded-full mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2 animate-pulse" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8l10 5l10 -5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12l10 5l10 -5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              <path d="M2 16l10 5l10 -5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2"/>
            </svg>
            <span>Based on customers' data</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold">
            We'll build <span className="text-regal-green">your own</span> <br />
            Conversational <span className="text-regal-green">AI</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4 relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-regal-dark w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
              <CircleDollarSign className="h-6 w-6 text-regal-green" />
            </div>
            <h3 className="text-2xl font-bold">60-80% Open Rate</h3>
            <p className="text-gray-400">
              Our AI-driven approach ensures your emails stand out, capturing attention and significantly boosting open rates. 
              By tailoring each message to the recipient's interests and needs, we make every email feel personal and relevant.
            </p>
          </div>

          <div className="space-y-4 relative animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-regal-dark w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
              <Clock3 className="h-6 w-6 text-regal-green" />
            </div>
            <h3 className="text-2xl font-bold">4-9% Reply Rate</h3>
            <p className="text-gray-400">
              Experience a notable increase in engagement with reply rates that far exceed industry averages. 
              Our AI personalization crafts conversations that invite responses, turning cold contacts into warm leads.
            </p>
          </div>

          <div className="space-y-4 relative animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-regal-dark w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
              <Building className="h-6 w-6 text-regal-green" />
            </div>
            <h3 className="text-2xl font-bold">20-50 Qualified Leads per month</h3>
            <p className="text-gray-400">
              Transform your prospecting efforts with a steady stream of qualified leads. 
              Our AI sifts through your prospects, engaging and nurturing them until they're ready to talk business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationalAISection;
