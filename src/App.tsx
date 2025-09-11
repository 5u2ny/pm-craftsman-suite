import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global Background with Liquid Blobs */}
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          {/* SVG Filter for Gooey Effect */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="gooey-filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="gooey"
                />
                <feBlend in="SourceGraphic" in2="gooey" />
              </filter>
            </defs>
          </svg>

          {/* Animated Background Blobs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="liquid-blobs-container">
              {/* Blue Blob */}
              <div className="liquid-blob liquid-blob-blue animate-float-1" style={{ top: '10%', left: '5%' }}></div>
              
              {/* Green Blob */}
              <div className="liquid-blob liquid-blob-green animate-float-2" style={{ top: '40%', right: '10%' }}></div>
              
              {/* Orange Blob */}
              <div className="liquid-blob liquid-blob-orange animate-float-3" style={{ bottom: '20%', left: '15%' }}></div>
              
              {/* Purple Blob */}
              <div className="liquid-blob liquid-blob-purple animate-float-4" style={{ top: '60%', right: '20%' }}></div>
              
              {/* Additional blobs for coverage */}
              <div className="liquid-blob liquid-blob-blue animate-float-1" style={{ top: '80%', left: '60%', animationDelay: '-3s' }}></div>
              <div className="liquid-blob liquid-blob-green animate-float-2" style={{ top: '20%', left: '70%', animationDelay: '-5s' }}></div>
            </div>
          </div>

          <Navigation />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="/projects/:slug" element={<CaseStudy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
