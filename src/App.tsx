
// Extend the Window interface
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize queryClient at the module level
const queryClient = new QueryClient();

import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Initialize Google Analytics
const initGoogleAnalytics = () => {
  // Only run in production
  if (process.env.NODE_ENV !== 'production') return;

  // Add the GA script to the document
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function with proper typing
  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: any[]) => {
    window.dataLayer.push(args);
  };
  window.gtag = gtag;
  
  // Initialize GA
  gtag('js', new Date());
  gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID as string);
};

// Track page views
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID as string, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

const AppContent = () => {
  usePageTracking();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/report-vulnerability" element={<Contact />} />
      <Route path="/data-processing" element={<NotFound />} />
      <Route path="/privacy" element={<NotFound />} />
      <Route path="/terms" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
