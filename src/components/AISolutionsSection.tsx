import React from "react";
import { motion } from "framer-motion";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  image: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon, delay, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 157, 0.5)' }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-black/30 border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-regal-green/10"
  >
    <div className="mb-6 rounded-xl overflow-hidden">
      <motion.img 
        src={image} 
        alt={title} 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-full h-48 object-cover rounded-lg" 
      />
    </div>
    <motion.div 
      className="h-12 w-12 bg-regal-green/20 rounded-xl flex items-center justify-center mb-4"
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 255, 157, 0.3)' }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const AISolutionsSection = () => {
  const solutions = [
    {
      title: "AI Lead Generation",
      description: "Automate your lead generation process with AI-powered tools that identify and qualify potential customers.",
      image: "/lovable-uploads/ai-lead-generation-hero.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-regal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "AI Chatbot",
      description: "Engage with your customers 24/7 using our intelligent chatbot that understands and responds naturally.",
      image: "/lovable-uploads/chatbots.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-regal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "AI Sales Assistant",
      description: "Boost your sales team's efficiency with AI-powered insights, recommendations, and automation.",
      image: "/lovable-uploads/AI Sales Assistant.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-regal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-regal-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            AI Solutions for
            <span className="text-regal-green"> Your Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Discover our suite of AI solutions designed to streamline your operations,
            enhance customer engagement, and drive business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;