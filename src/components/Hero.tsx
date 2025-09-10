import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Black space background with subtle texture */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-black to-slate-900/10" />
        
        {/* Subtle star field */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white/20 rounded-full animate-twinkle" />
          <div className="absolute top-32 right-32 w-1 h-1 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white/25 rounded-full animate-twinkle" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 right-20 w-1 h-1 bg-white/35 rounded-full animate-twinkle" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-twinkle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-80 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: "2.5s" }} />
          <div className="absolute bottom-60 left-1/5 w-1 h-1 bg-white/25 rounded-full animate-twinkle" style={{ animationDelay: "4s" }} />
          <div className="absolute top-1/3 left-10 w-1 h-1 bg-white/15 rounded-full animate-twinkle" style={{ animationDelay: "3.5s" }} />
          <div className="absolute bottom-1/4 right-10 w-1 h-1 bg-white/35 rounded-full animate-twinkle" style={{ animationDelay: "2.8s" }} />
        </div>
        
        {/* Orbital Planet Element */}
        <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Central Black Hole/Planet */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full border-4 border-orange-400/30 shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
            </div>
            
            {/* Orbital Ring */}
            <div className="absolute inset-0 animate-orbital-rotation">
              <div className="relative w-full h-full">
                {/* Main orbital ring */}
                <div className="absolute inset-0 rounded-full border-8 border-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 p-1">
                  <div className="w-full h-full rounded-full bg-transparent border-4 border-transparent bg-gradient-to-r from-transparent via-orange-200/50 to-transparent"></div>
                </div>
                
                {/* Inner glow effect */}
                <div className="absolute inset-4 rounded-full border-2 border-orange-300/40 animate-pulse"></div>
                
                {/* Outer glow effect */}
                <div className="absolute -inset-2 rounded-full border border-orange-400/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
            
            {/* Trailing effect */}
            <div className="absolute inset-0 animate-orbital-trail">
              <div className="absolute top-1/2 right-0 w-24 h-2 bg-gradient-to-r from-orange-400/60 to-transparent rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative profile-frame">
              <img
                src="/lovable-uploads/0f13ee40-077e-4d69-89e9-bd5ad2a19290.png"
                alt="Sunny Soni - AI Product Manager"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-glow"></div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2 animate-slide-up">Sunny Soni</span>
            <span className="text-white animate-fade-in" style={{ animationDelay: "0.5s" }}>AI Product Manager</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            MBA candidate at William & Mary specializing in Business Analytics & Marketing. 
            <span className="text-primary font-medium"> AI Product Manager</span> with experience building 
            0-to-1 products and driving growth through data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="button-glow group">
              <Link to="/about">
                View Experience
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link to="/case-studies">
                Case Studies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link to="/projects">
                Projects
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a href="mailto:sunny.mba@proton.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a href="https://linkedin.com/in/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary transition-colors"
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