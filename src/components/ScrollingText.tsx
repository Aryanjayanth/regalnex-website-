import React from 'react';
import { Brain } from 'lucide-react';

const ScrollingText = () => {
  const messages = [
    'Living with AI',
    'Sell AI Solutions',
    'Make $ with AI',
    'How to sell AI',
    'AI + you = $',
    'Make $ with AI',
    'AI $ for a Living',
    'Sell AI'
  ];

  return (
    <div className="w-full bg-regal-black overflow-hidden relative">
      {/* Top glowing border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-regal-green/30 to-transparent animate-pulse-glow" />
      <div className="py-4">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Duplicate messages for seamless loop */}
          {[...messages, ...messages].map((message, index) => (
            <React.Fragment key={index}>
              <div className="mx-4 text-xl font-medium text-regal-green/80 hover:text-regal-green hover:scale-105 transition-all duration-300 glow-hover">
                {message}
              </div>
              <Brain className="w-8 h-8 mx-4 text-regal-green/80 hover:text-regal-green animate-float" />
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* Bottom glowing border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-regal-green/30 to-transparent animate-pulse-glow" />
    </div>
  );
};

export default ScrollingText;