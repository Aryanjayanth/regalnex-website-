
import React, { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudyModal from "./CaseStudyModal";

interface CaseStudyProps {
  title: string;
  company: string;
  logoSrc: string;
  imageSrc: string;
  leads: string;
  prospects: string;
  openRate: string;
  services: string[];
  delay: string;
}

interface CaseStudy extends CaseStudyProps {
  category?: string;
  date?: string;
  readTime?: string;
  challenge?: string[];
  solution?: string[];
  results?: {
    leads: string;
    prospects: string;
    openRate: string;
  };
}

const CaseStudyCard = ({ title, company, logoSrc, imageSrc, leads, prospects, openRate, services, delay, onReadFullStory }: CaseStudyProps & { onReadFullStory: (caseStudy: CaseStudy) => void }) => {
  return (
    <div className="bg-regal-dark/50 rounded-3xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all hover:transform hover:-translate-y-2 duration-300 shadow-lg hover:shadow-xl">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-200 mb-4">{title}</h3>
        <div className="h-24 w-64 mb-6 mx-auto">
          <img 
            src={logoSrc} 
            alt={`${company} logo`} 
            className="h-full w-full object-contain"
          />
        </div>
        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-6">
          <img 
            src={imageSrc}
            alt={`${company} case study`}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      <div className="bg-regal-dark p-6 border-t border-gray-800">
        <h4 className="font-medium mb-4">Results</h4>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400">Leads generated within 30 days</span>
          <span className="font-medium text-regal-green">{leads}</span>
        </div>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400">Prospects contacted</span>
          <span className="font-medium text-regal-green">{prospects}</span>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-400">Avg. open rate</span>
          <span className="font-medium text-regal-green">{openRate}</span>
        </div>
        
        <button
          onClick={() => onReadFullStory({
            title,
            company,
            logoSrc,
            imageSrc,
            leads,
            prospects,
            openRate,
            services,
            category: "Recruitment Tech",
            date: "Jun 19, 2024",
            readTime: "5 min read",
            challenge: [
              "Manual resume screening for 500+ daily applications slowed down hiring cycles.",
              "Candidate communication bottlenecks (e.g., interview scheduling, status updates) led to drop-offs and frustrated clients.",
              "Onboarding delays due to repetitive paperwork for temporary hires."
            ],
            solution: [
              "AI-Powered Resume Screening: Automatically parses resumes, scores candidates based on job criteria, and flags top 10% matches.",
              "Candidate Engagement Chatbots: Deployed chatbots to answer FAQs, schedule interviews via Calendly integration, and send automated status updates.",
              "Onboarding Workflow Automation: Digitized paperwork with e-signatures and auto-populated forms using candidate data."
            ],
            results: {
              leads,
              prospects,
              openRate
            }
          })}
          className="block w-full text-center py-3 border border-gray-700 rounded-full hover:bg-gray-800/50 transition-colors mb-6 hover:border-regal-green group"
        >
          <span className="group-hover:text-regal-green transition-colors">Read Full Story</span>
        </button>
      </div>

      <div className="p-6 border-t border-gray-800">
        <h4 className="font-medium mb-4">Services Implemented</h4>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-start group">
              <div className="rounded-full bg-regal-green/10 p-1 mr-3 group-hover:bg-regal-green/20 transition-colors">
                <Check className="h-4 w-4 text-regal-green" />
              </div>
              <span className="group-hover:text-white transition-colors">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadFullStory = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const caseStudies = [
    {
      title: "Transforming Global Talent Acquisition",
      company: "THE ADECCO GROUP",
      logoSrc: "/lovable-uploads/CaseStudy-1 logo.png",
      imageSrc: "/lovable-uploads/CaseStudy-1 Main Image.png",
      leads: "150+",
      prospects: "25.5k",
      openRate: "82.3%",
      services: [
        "Advanced AI Talent Matching Engine",
        "Intelligent Candidate Assessment System",
        "Integrated Social Media Analytics"
      ],
    },
    {
      title: "Revolutionizing Engineering Talent Acquisition",
      company: "SelectSoftware Reviews",
      logoSrc: "/lovable-uploads/CaseStudy-2 logo.png",
      imageSrc: "/lovable-uploads/CaseStudy-2 Main Image.jpg",
      leads: "120",
      prospects: "18.2k",
      openRate: "78.9%",
      services: [
        "AI-Powered Engineering Skills Assessment",
        "Smart Technical Interview Platform",
        "Automated Talent Pipeline Management"
      ],
    },
    {
      title: "Accelerating parses resumes",
      company: "Zig Saw",
      logoSrc: "/lovable-uploads/CaseStudy-3 logo.png",
      imageSrc: "/lovable-uploads/CaseStudy-3 Main Image.jpg",
      leads: "95",
      prospects: "21.3k",
      openRate: "81.2%",
      services: [
        "Global Aerospace Talent Network",
        "Advanced Skills Assessment Platform",
        "Intelligent Onboarding System"
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-regal-black via-regal-black/95 to-regal-black border-t border-green-900/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-black/30 border border-gray-800 rounded-full mb-6">
            <span>Our clients' results</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-regal-green">
            Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
              delay={`${0.2 + index * 0.2}s`}
              onReadFullStory={handleReadFullStory}
            />
          ))}
        </div>

        {selectedCaseStudy && (
          <CaseStudyModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            caseStudy={selectedCaseStudy}
          />
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
