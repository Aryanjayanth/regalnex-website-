
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ConversationalAISection from "../components/ConversationalAISection";
import TestimonialsSection from "../components/TestimonialsSection";
import AISolutionsSection from "../components/AISolutionsSection";
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
        <CaseStudiesSection />
        <ConversationalAISection />
        <TestimonialsSection />
        <AISolutionsSection />
        <ToolStackSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
