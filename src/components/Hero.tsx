import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden kaisermann-bg font-sans">
      {/* Kaisermann-style background */}
      <div className="absolute inset-0 z-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply kaisermann-noise" />
        
        {/* Color gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/30 via-transparent to-blue-950/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-red-950/10 via-transparent to-green-950/10" />
        
        {/* Animated grain effect */}
        <div className="absolute inset-0 opacity-20 animate-grain" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* 4D Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Profile4D />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-white mb-2 animate-slide-up font-mono">SUNNY SONI</span>
            <span className="text-white animate-fade-in font-light tracking-wider" style={{ animationDelay: "0.5s" }}>AI PRODUCT MANAGER</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-mono font-light">
            MBA CANDIDATE AT WILLIAM & MARY SPECIALIZING IN BUSINESS ANALYTICS & MARKETING. 
            <span className="text-primary font-medium"> AI PRODUCT MANAGER</span> WITH EXPERIENCE BUILDING 
            0-TO-1 PRODUCTS AND DRIVING GROWTH THROUGH DATA-DRIVEN STRATEGIES.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="button-glow group font-mono">
              <Link to="/about">
                VIEW EXPERIENCE
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift font-mono">
              <Link to="/case-studies">
                CASE STUDIES
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift font-mono">
              <Link to="/projects">
                PROJECTS
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