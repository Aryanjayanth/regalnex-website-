import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// Initialize queryClient at the module level
const queryClient = new QueryClient();

const AppContent = () => {
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
