
import React from "react";

interface StarProps {
  color?: string;
  className?: string;
  size?: number;
  delay?: string;
}

export const Star = ({ color = "#35D03B", className = "", size = 16, delay = "0s" }: StarProps) => {
  return (
    <div className={`absolute ${className}`} style={{ animationDelay: delay }}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-star-pulse animate-star">
        <path
          d="M8 0L10.2 5.8L16 8L10.2 10.2L8 16L5.8 10.2L0 8L5.8 5.8L8 0Z"
          fill={color}
          filter="drop-shadow(0 0 5px rgba(255,255,255,0.7))"
        />
      </svg>
    </div>
  );
};

// Base64 encoded images - stored directly in the file
// These are small sample stars as base64 strings
const starImages = {
  greenStar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAwTDEwLjIgNS44TDE2IDhMMTAuMiAxMC4yTDggMTZMNS44IDEwLjJMMCA4TDUuOCA1LjhMOCAwWiIgZmlsbD0iIzM1RDAzQiIgZmlsdGVyPSJkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSkiLz48L3N2Zz4=",
  purpleStar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAwTDEwLjIgNS44TDE2IDhMMTAuMiAxMC4yTDggMTZMNS44IDEwLjJMMCA4TDUuOCA1LjhMOCAwWiIgZmlsbD0iI0M1OTBFMSIgZmlsdGVyPSJkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSkiLz48L3N2Zz4=",
  yellowStar: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAwTDEwLjIgNS44TDE2IDhMMTAuMiAxMC4yTDggMTZMNS44IDEwLjJMMCA4TDUuOCA1LjhMOCAwWiIgZmlsbD0iI0Y3Qjk1NSIgZmlsdGVyPSJkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSkiLz48L3N2Zz4="
};

interface ImageStarProps {
  imageType: keyof typeof starImages;
  className?: string;
  size?: number;
  delay?: string;
}

export const ImageStar = ({ imageType, className = "", size = 16, delay = "0s" }: ImageStarProps) => {
  return (
    <div className={`absolute ${className}`} style={{ animationDelay: delay }}>
      <img 
        src={starImages[imageType]} 
        alt="Decorative star"
        width={size}
        height={size}
        className="animate-star-pulse animate-star"
      />
    </div>
  );
};

const StarDecorations = () => {
  return (
    <>
      {/* More visible line at the top with stronger glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-regal-green shadow-[0_0_15px_rgba(48,189,54,0.9)] opacity-80"></div>
      
      {/* Regular SVG stars */}
      <Star className="top-[110px] right-[25%]" color="#F7B955" size={20} delay="0.3s" />
      <Star className="top-[180px] left-[10%]" color="#35D03B" size={18} delay="0.5s" />
      <Star className="top-[280px] left-[20%]" color="#C590E1" size={24} delay="1.2s" />
      <Star className="top-[320px] right-[8%]" color="#F7B955" size={16} delay="1.8s" />
      <Star className="top-[380px] right-[15%]" color="#35D03B" size={22} delay="0.7s" />
      <Star className="top-[450px] left-[5%]" color="#C590E1" size={20} delay="1.0s" />
      <Star className="top-[500px] left-[15%]" color="#F7B955" size={18} delay="1.5s" />
      <Star className="top-[550px] right-[10%]" color="#35D03B" size={14} delay="0.9s" />
      <Star className="top-[650px] right-[20%]" color="#C590E1" size={16} delay="2s" />
      <Star className="top-[700px] left-[25%]" color="#F7B955" size={22} delay="1.7s" />
      <Star className="top-[800px] right-[30%]" color="#35D03B" size={18} delay="1.3s" />
      <Star className="top-[880px] left-[18%]" color="#C590E1" size={16} delay="0.8s" />
      
      {/* Base64 encoded image stars */}
      <ImageStar imageType="greenStar" className="top-[150px] right-[15%]" size={22} delay="1.1s" />
      <ImageStar imageType="purpleStar" className="top-[250px] left-[25%]" size={18} delay="0.6s" />
      <ImageStar imageType="yellowStar" className="top-[600px] right-[22%]" size={24} delay="1.4s" />
      <ImageStar imageType="yellowStar" className="top-[750px] left-[12%]" size={20} delay="0.2s" />
    </>
  );
};

export default StarDecorations;
