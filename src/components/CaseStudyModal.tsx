import React from "react";
import { Check, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { Link } from "react-router-dom";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: {
    title: string;
    company: string;
    logoSrc: string;
    imageSrc: string;
    category?: string;
    date?: string;
    readTime?: string;
    challenge?: string[];
    solution?: string[];
    results?: {
      leads?: string;
      prospects?: string;
      openRate?: string;
      [key: string]: string | undefined;
    };
    services?: string[];
  };
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  caseStudy,
}) => {
  const {
    title,
    company,
    logoSrc,
    imageSrc,
    category = "Recruitment Tech",
    date = "Jun 19, 2024",
    readTime = "5 min read",
    challenge = [
      "Processing over 500 daily applications manually created significant hiring bottlenecks and delayed critical talent acquisition.",
      "Complex communication workflows and manual scheduling processes resulted in a 45% candidate drop-off rate.",
      "Time-consuming paperwork and manual onboarding procedures delayed start dates by an average of 2 weeks.",
    ],
    solution = [
      "Implemented advanced AI resume parsing technology that reduced screening time by 75% and improved match accuracy to 95%.",
      "Deployed intelligent chatbots with natural language processing, resulting in 24/7 candidate support and 90% faster response times.",
      "Streamlined onboarding with smart document processing and automated workflows, reducing paperwork time by 85%.",
    ],
    results = {
      leads: "50+",
      prospects: "12.5k",
      openRate: "72.1%",
    },
    services = [
      "AI Resume Screening",
      "Automated Interview Scheduling",
      "Chatbot-Driven Candidate Engagement",
    ],
  } = caseStudy;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-regal-dark border-gray-800 text-white max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <DialogClose className="absolute right-4 top-4 rounded-full bg-regal-dark/80 p-2 text-gray-400 hover:text-white hover:bg-regal-green/20 transition-colors">
          <X className="h-5 w-5" />
        </DialogClose>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>{category}</span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            <DialogTitle className="text-3xl font-bold text-white">
              {title}
            </DialogTitle>

            <div className="flex items-center space-x-4">
              <img
                src={logoSrc}
                alt={`${company} logo`}
                className="h-10 object-contain"
              />
              <DialogDescription className="text-lg text-gray-300">
                {company}
              </DialogDescription>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={imageSrc}
              alt={`${company} case study`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Challenge Section */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-regal-green">Challenge:</h3>
              <ul className="space-y-3">
                {challenge.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-regal-green/10 p-1 mr-3 flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-regal-green"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Solution Section */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-regal-green">Solution:</h3>
              <ul className="space-y-3">
                {solution.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-regal-green/10 p-1 mr-3 flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-regal-green"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Results Section */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-regal-green">Results:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(results).map(([key, value], index) => (
                  <div
                    key={index}
                    className="bg-regal-dark/80 border border-gray-800 rounded-lg p-4 hover:border-regal-green transition-all duration-300"
                  >
                    <div className="text-gray-400 mb-2">
                      {key === "leads"
                        ? "Leads generated within 30 days"
                        : key === "prospects"
                        ? "Prospects contacted"
                        : key === "openRate"
                        ? "Avg. open rate"
                        : key}
                    </div>
                    <div className="text-2xl font-bold text-regal-green">{value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-regal-green">
                Services Implemented:
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="rounded-full bg-regal-green/10 p-1 mr-3 group-hover:bg-regal-green/20 transition-colors">
                      <Check className="h-4 w-4 text-regal-green" />
                    </div>
                    <span className="group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="border-t border-gray-800 pt-6 mt-8">
              <p className="text-center mb-4">
                Ready to implement AI into your business?
              </p>
              <Link
                to="/schedule"
                className="block w-full text-center py-3 px-4 bg-regal-green text-black font-medium rounded-lg hover:bg-regal-green/90 transition-colors"
              >
                Schedule a Free 30-Min Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;