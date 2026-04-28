
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ConversationalAISection from "../components/ConversationalAISection";
import ToolStackSection from "../components/ToolStackSection";
import Footer from "../components/Footer";
import StarDecorations from "../components/StarDecorations";
import Newsletter from "../components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow relative z-10">
        <StarDecorations />
        <HeroSection />
        <ConversationalAISection />
        <ToolStackSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
