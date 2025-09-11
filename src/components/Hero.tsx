import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-sans">
      {/* Exact Kaisermann background */}
      <div className="absolute inset-0 z-0">
        {/* Base black background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Colored gradient blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "3s" }} />
        </div>
        
        {/* Film grain/noise effect */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply kaisermann-grain" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* 4D Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Profile4D />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block mb-2 animate-slide-up ai-glitch-text" data-text="SUNNY SONI">SUNNY SONI</span>
            <span className="animate-fade-in ai-glitch-text-secondary font-normal tracking-widest" style={{ animationDelay: "0.5s" }} data-text="AI PRODUCT MANAGER">AI PRODUCT MANAGER</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-mono font-light tracking-wide">
            MBA CANDIDATE AT WILLIAM & MARY SPECIALIZING IN BUSINESS ANALYTICS & MARKETING. 
            <span className="text-cyan-400 font-medium"> AI PRODUCT MANAGER</span> WITH EXPERIENCE BUILDING 
            0-TO-1 PRODUCTS AND DRIVING GROWTH THROUGH DATA-DRIVEN STRATEGIES.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="button-glow group font-mono bg-cyan-600 hover:bg-cyan-500 border-cyan-400">
              <Link to="/about">
                VIEW EXPERIENCE
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift font-mono border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10">
              <Link to="/case-studies">
                CASE STUDIES
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift font-mono border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10">
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
              className="hover:text-cyan-400 transition-colors text-gray-400"
              asChild
            >
              <a href="mailto:sunny.mba@proton.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-cyan-400 transition-colors text-gray-400"
              asChild
            >
              <a href="https://linkedin.com/in/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-cyan-400 transition-colors text-gray-400"
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