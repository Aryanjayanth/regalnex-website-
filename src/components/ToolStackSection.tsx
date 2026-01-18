import { Card, CardContent } from "./ui/card";
import { ArrowUpRight } from "lucide-react";

const ToolStackSection = () => {
  const tools = [
    {
      icon: "💬",
      title: "AI Sales Assistant",
      description: "Enhance customer service with AI-powered sales assistance.",
      tag: "Sales",
      image: "/lovable-uploads/AI Sales Assistant.jpg"
    },
    {
      icon: "✨",
      title: "AI Product Recommender",
      description: "Personalized product suggestions to boost engagement.",
      tag: "Marketing",
      image: "/lovable-uploads/ai-lead-generation-hero.jpg"
    },
    {
      icon: "🤖",
      title: "AI Community Manager",
      description: "Automate social media interactions seamlessly.",
      tag: "Social Media",
      image: "/lovable-uploads/chatbots.jpg"
    },
    {
      icon: "⚡",
      title: "AI Integration",
      description: "Expert AI implementation and training.",
      tag: "Consulting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  return (
    <section className="py-16 bg-regal-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-regal-green/10 text-regal-green mb-4 border border-regal-green/20">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-regal-green mb-4">
            AI Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-regal-green to-emerald-400">Your Business</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-regal-green to-transparent mx-auto mb-6"></div>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Discover our suite of AI-powered tools designed to streamline operations and drive growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-regal-green/50 hover:shadow-lg hover:shadow-regal-green/10 transition-all duration-300 transform hover:-translate-y-1">
              {/* Image with Gradient Overlay */}
              <div className="relative h-40 overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img 
                  src={tool.image} 
                  alt={tool.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22320%22%20height%3D%22160%22%20fill%3D%22111%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20fill%3D%22%23666%22%3E' + 
                    encodeURIComponent(tool.title) + 
                    '%3C%2Ftext%3E%3C%2Fsvg%3E';
                  }}
                />
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-lg bg-gradient-to-br from-regal-green to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg">{tool.icon}</span>
                </div>
                {/* Tag */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-block bg-regal-green/20 text-regal-green text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {tool.tag}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-regal-green mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Learn more</span>
                  <button 
                    className="w-8 h-8 rounded-full bg-gray-800 hover:bg-regal-green/20 text-gray-400 hover:text-regal-green flex items-center justify-center transition-all duration-300 group-hover:rotate-45"
                    aria-label={`Learn more about ${tool.title}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;