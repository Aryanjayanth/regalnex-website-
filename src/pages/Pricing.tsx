
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check, Sparkles, Zap, Users, ShoppingBag, BarChart, MessageSquare, Search, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import StarDecorations from "../components/StarDecorations";
import { motion } from "framer-motion";

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCategoryProps {
  title: string;
  services: Service[];
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ title, services }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12 bg-regal-dark/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-colors">
      <h3 className="text-2xl font-bold mb-6 text-regal-green">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="py-4 px-6 text-left bg-regal-dark/50 rounded-tl-lg">Features</th>
              {['AILeadGen', 'AIChatbot', 'AISalesAssistant'].map((service, index) => (
                <th key={service} className={`py-4 px-6 text-center bg-regal-dark/50 ${index === 2 ? 'rounded-tr-lg' : ''}`}>{service}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className="border-b border-gray-800/50 hover:bg-regal-dark/40 transition-colors">
                <td className="py-4 px-6">{service.name}</td>
                <td className="py-4 px-6 text-center">
                  <Check className="h-5 w-5 text-regal-green mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  {index < 3 && <Check className="h-5 w-5 text-regal-green mx-auto" />}
                </td>
                <td className="py-4 px-6 text-center">
                  {index < 2 && <Check className="h-5 w-5 text-regal-green mx-auto" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

interface ServiceCardProps {
  name: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, features, isPopular = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-regal-dark rounded-xl ${isPopular ? 'border-2 border-regal-green relative transform hover:-translate-y-2' : 'border border-gray-800 hover:-translate-y-1'} transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-regal-green text-black px-4 py-1 text-xs font-semibold rounded-tr-xl rounded-bl-xl flex items-center gap-1">
          <Sparkles className="h-3 w-3" />
          Featured
        </div>
      )}
      <div className={`p-6 ${isPopular ? 'pt-8' : ''}`}>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <Link
          to="/schedule"
          className={`block w-full text-center py-3 px-4 rounded-lg mb-8 font-medium transition-all ${
            isPopular 
              ? 'bg-regal-green text-black hover:bg-regal-green/90 animate-pulse-glow' 
              : 'bg-gray-800 hover:bg-gray-700 text-white'
          }`}
        >
          Learn More
        </Link>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start group">
              <div className="rounded-full bg-regal-green/10 p-1 mr-3 group-hover:bg-regal-green/20 transition-colors">
                <Check className="h-4 w-4 text-regal-green" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const serviceCategories = [
    {
      title: "Lead Generation & Sales",
      services: [
        {
          name: "Lead Generation",
          description: "Advanced AI-driven lead generation system that identifies, scores, and qualifies high-value prospects using machine learning algorithms and predictive analytics.",
          icon: <Search className="h-5 w-5 text-regal-green" />
        },
        {
          name: "AI Chatbot",
          description: "24/7 intelligent conversation system with natural language processing capabilities for lead qualification, meeting scheduling, and personalized customer engagement.",
          icon: <MessageSquare className="h-5 w-5 text-regal-green" />
        },
        {
          name: "SalesAssistant",
          description: "Smart sales automation platform that manages lead nurturing, provides real-time insights, and optimizes the entire sales funnel with predictive analytics.",
          icon: <Users className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Intelligent Revenue Optimization",
          description: "AI-powered system that analyzes customer behavior patterns to maximize revenue through strategic upselling, cross-selling, and dynamic pricing optimization.",
          icon: <ShoppingBag className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Predictive Sales Analytics",
          description: "Comprehensive sales intelligence platform that leverages machine learning for accurate forecasting, trend analysis, and data-driven strategy optimization.",
          icon: <BarChart className="h-5 w-5 text-regal-green" />
        }
      ]
    },
    {
      title: "Customer Experience",
      services: [
        {
          name: "Product Recommender",
          description: "AI-driven product recommendations based on customer behavior, preferences, and purchase history.",
          icon: <Zap className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Personalized Customer Interactions",
          description: "Tailored communication that adapts to individual customer preferences and history.",
          icon: <Users className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Customer Support Automation",
          description: "24/7 automated support that resolves common issues and escalates complex ones to human agents.",
          icon: <MessageSquare className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Engagement Through QR Codes",
          description: "Interactive QR experiences that connect physical products to digital content and promotions.",
          icon: <Zap className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Brand Ambassador Program",
          description: "Automated management of brand advocates to amplify your marketing reach organically.",
          icon: <Users className="h-5 w-5 text-regal-green" />
        }
      ]
    },
    {
      title: "Business Operations",
      services: [
        {
          name: "Marketing Strategy Development",
          description: "Data-driven marketing plans tailored to your business goals and target audience.",
          icon: <BarChart className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Real-Time Inventory Updates",
          description: "Automated inventory management that prevents stockouts and optimizes ordering.",
          icon: <RefreshCw className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Dynamic Pricing",
          description: "Intelligent pricing algorithms that adjust based on demand, competition, and market conditions.",
          icon: <ShoppingBag className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Order Tracking",
          description: "Automated order status updates that keep customers informed throughout the fulfillment process.",
          icon: <Search className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Deals and Promotions",
          description: "Targeted promotional campaigns that maximize conversion while protecting margins.",
          icon: <Zap className="h-5 w-5 text-regal-green" />
        }
      ]
    },
    {
      title: "Content & Support",
      services: [
        {
          name: "Content Creation and Management",
          description: "AI-assisted content generation and scheduling for blogs, social media, and marketing materials.",
          icon: <MessageSquare className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Technical Support for Products",
          description: "Automated troubleshooting and guidance for customer product issues.",
          icon: <Zap className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Business Insights",
          description: "Comprehensive analytics dashboards that visualize key performance indicators.",
          icon: <BarChart className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Reporting",
          description: "Automated report generation that delivers actionable insights to stakeholders.",
          icon: <BarChart className="h-5 w-5 text-regal-green" />
        },
        {
          name: "Refund and Returns Management",
          description: "Streamlined processing of refunds and returns to enhance customer satisfaction.",
          icon: <RefreshCw className="h-5 w-5 text-regal-green" />
        }
      ]
    }
  ];

  const services = [
    {
      name: "AILeadGen",
      description: "Core AI automation features for small businesses",
      features: [
        "Select AI services from any category",
        "Basic analytics dashboard",
        "Standard support",
        "Monthly performance insights",
        "Email assistance",
        "Regular updates"
      ]
    },
    {
      name: "AIChatbot",
      description: "Advanced AI solutions for growing companies",
      features: [
        "Extended AI service selection",
        "Advanced analytics & insights",
        "Priority support",
        "Weekly performance tracking",
        "Dedicated support team",
        "Custom configurations"
      ],
      isPopular: true
    },
    {
      name: "AISalesAssistant",
      description: "Complete AI ecosystem for large organizations",
      features: [
        "Full suite of AI services",
        "Custom AI model development",
        "Real-time analytics",
        "24/7 premium support",
        "Dedicated success team",
        "White-label solutions",
        "System integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <StarDecorations />
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-black/30 border border-gray-800 rounded-full mb-6 animate-fade-in">
                <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2 animate-pulse" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v4m0 0a6 6 0 0 1 6 6c0 3.31-4 6-6 8.5C10 18 6 15.31 6 12a6 6 0 0 1 6-6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>AI Automation Services</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Powerful <span className="text-regal-green">AI Solutions</span> for Your Business
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Transform your operations with our comprehensive suite of AI automation services.
              </p>
            </div>

            <div className="mb-24 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {serviceCategories.map((category) => (
                <ServiceCategory key={category.title} title={category.title} services={category.services} />
              ))}
            </div>
            
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-black/30 border border-gray-800 rounded-full mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2 animate-pulse" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="1" result="blur" />
                      <feFlood floodColor="#10B981" floodOpacity="0.5" />
                      <feComposite in2="blur" operator="in" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <path d="M12 2v4m0 0a6 6 0 0 1 6 6c0 3.31-4 6-6 8.5C10 18 6 15.31 6 12a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
                </svg>
                <span>AI Solutions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Powerful <span className="text-regal-green">AI Services</span> for Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in">
                Choose the perfect solution to transform your business processes and scale efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div className="animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.2}s` }} key={index}>
                  <ServiceCard
                    {...service}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <p className="text-xl mb-4">Need a custom solution?</p>
              <Link
                to="/contact"
                className="inline-flex items-center border border-regal-green text-regal-green hover:bg-regal-green/10 px-6 py-3 rounded-full text-sm font-medium transition-all"
              >
                Contact us to learn more
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
