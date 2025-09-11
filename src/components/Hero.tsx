import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";
import AIMotionBackground from "@/components/AIMotionBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* AI Neural Network Background */}
      <AIMotionBackground />
      
      {/* Holographic Data Layers */}
      <div className="absolute inset-0 z-1">
        {/* Scanning lines */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scanning-line top-1/4"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-scanning-line top-2/3" style={{ animationDelay: "3s" }}></div>
        
        {/* Data grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
        
        {/* AI Processing indicators */}
        <div className="absolute top-20 right-20">
          <div className="flex items-center space-x-2 text-xs font-mono text-primary/60">
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
            <span>AI_PROCESSING...</span>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-20">
          <div className="flex items-center space-x-2 text-xs font-mono text-accent/60">
            <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            <span>NEURAL_SYNC: 98.7%</span>
          </div>
        </div>
        
        {/* Floating code snippets */}
        <div className="absolute top-32 left-16 font-mono text-xs text-primary/20 animate-float">
          <div>def predict_user_intent():</div>
          <div className="ml-4">return model.inference()</div>
        </div>
        
        <div className="absolute bottom-32 right-16 font-mono text-xs text-accent/20 animate-drift">
          <div>{"{ accuracy: 0.94,"}</div>
          <div>{"  confidence: 0.89 }"}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* 4D Profile Picture */}
          <div className="mb-8 flex justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <Profile4D />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-foreground mb-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Sunny Soni
            </span>
            <span className="text-gradient animate-fade-in hover-scale" style={{ animationDelay: "0.6s" }}>
              AI Product Manager
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-medium animate-slide-up" style={{ animationDelay: "0.8s" }}>
            MBA candidate at William & Mary specializing in Business Analytics & Marketing. 
            <span className="text-accent font-semibold"> AI Product Manager</span> with experience building 
            0-to-1 products and driving growth through data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button asChild size="lg" className="bg-gradient-accent text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-3 hover-scale">
              <Link to="/about">
                View Experience
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 hover:bg-accent hover:text-white transition-all duration-300 hover-scale">
              <Link to="/case-studies">
                Case Studies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 hover:bg-primary hover:text-white transition-all duration-300 hover-scale">
              <Link to="/projects">
                Projects
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-accent text-white hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-3 hover-scale"
              onClick={() => {
                // This would trigger a resume download
                console.log("Download resume clicked");
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: "1.2s" }}>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-full p-3 hover-scale"
              asChild
            >
              <a href="mailto:sunny.mba@proton.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-full p-3 hover-scale"
              asChild
            >
              <a href="https://linkedin.com/in/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-full p-3 hover-scale"
              asChild
            >
              <a href="https://github.com/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;