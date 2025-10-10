import { ArrowRight, Github, Linkedin, Send, FileDown, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large gradient orbs with floating animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/[0.04] rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/[0.02] rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Rotating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-accent/15 rounded-full animate-spin-reverse"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-primary/8 rotate-12 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
        <div className="absolute top-60 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary/50 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 right-1/2 w-3 h-3 bg-primary/35 rounded-full animate-float-delay"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-fade-in-out"></div>
        <div className="absolute bottom-1/4 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-accent/25 to-transparent animate-fade-in-out-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-fade-in-out"></div>
        
        {/* Pulsing rings */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-primary/5 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-accent/8 rounded-full animate-ping-slower"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] animate-grid-move"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* 4D Profile Picture */}
          <div className="mb-8 flex justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <Profile4D />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-foreground mb-2 font-display font-semibold tracking-tight animate-name-reveal" style={{ animationDelay: "0.4s" }}>
              {"Sunny Soni".split("").map((letter, index) => (
                <span 
                  key={index}
                  className="inline-block animate-letter-drop"
                  style={{ 
                    animationDelay: `${0.5 + index * 0.08}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
            <span className="text-gradient font-mono font-medium tracking-wider text-2xl sm:text-3xl lg:text-4xl animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-accent" style={{ animationDelay: "1.2s" }}>
              <span className="typewriter-text">AI Product Manager</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.8s" }}>
            MBA candidate at William & Mary specializing in Business Analytics & Marketing. 
            AI Product Manager with experience building 0-to-1 products and driving growth through data-driven strategies.
          </p>

          <div className="flex flex-col items-center gap-6 mb-12">
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
              <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 font-medium">
                <Link to="/about" className="flex items-center gap-3">
                  <Eye className="h-5 w-5 transition-transform group-hover:scale-110" />
                  View Experience
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 px-8 py-3 font-medium"
                asChild
              >
                <a href="/Sunny_Soni_Resume.pdf" download="Sunny_Soni_Resume.pdf">
                  <FileDown className="h-5 w-5 mr-3 transition-transform group-hover:scale-110" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: "1.4s" }}>
            <div className="flex items-center gap-4 p-4 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg">
              {/* Email Button */}
              <div className="group/social relative">
                <Button
                  variant="ghost"
                  size="lg"
                  className="relative h-16 w-16 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary hover:from-primary/10 hover:to-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 p-0 hover:scale-110 hover:-translate-y-1"
                  asChild
                >
                  <a href="mailto:sunnysoni.mba@proton.me" aria-label="Email">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover/social:from-primary/20 group-hover/social:to-transparent rounded-xl transition-all duration-500 animate-pulse-slow"></div>
                    <Send className="h-6 w-6 text-muted-foreground group-hover/social:text-primary transition-all duration-300 relative z-10 group-hover/social:rotate-12 group-hover/social:scale-110" />
                  </a>
                </Button>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/social:opacity-100 group-hover/social:-translate-y-1 transition-all duration-300">
                  <span className="text-xs text-foreground font-semibold bg-primary/10 px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap">Email Me</span>
                </div>
              </div>

              {/* Animated Divider */}
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent animate-pulse"></div>

              {/* LinkedIn Button */}
              <div className="group/social relative">
                <Button
                  variant="ghost"
                  size="lg"
                  className="relative h-16 w-16 rounded-xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent hover:from-accent/10 hover:to-accent/5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 p-0 hover:scale-110 hover:-translate-y-1"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/sunnysonimba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover/social:from-accent/20 group-hover/social:to-transparent rounded-xl transition-all duration-500 animate-pulse-slow"></div>
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover/social:text-accent transition-all duration-300 relative z-10 group-hover/social:scale-110 group-hover/social:rotate-6" />
                  </a>
                </Button>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/social:opacity-100 group-hover/social:-translate-y-1 transition-all duration-300">
                  <span className="text-xs text-foreground font-semibold bg-accent/10 px-3 py-1 rounded-full border border-accent/20 whitespace-nowrap">Connect</span>
                </div>
              </div>

              {/* Animated Divider */}
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent animate-pulse"></div>

              {/* GitHub Button */}
              <div className="group/social relative">
                <Button
                  variant="ghost"
                  size="lg"
                  className="relative h-16 w-16 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary hover:from-primary/10 hover:to-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 p-0 hover:scale-110 hover:-translate-y-1"
                  asChild
                >
                  <a href="https://github.com/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover/social:from-primary/20 group-hover/social:to-transparent rounded-xl transition-all duration-500 animate-pulse-slow"></div>
                    <Github className="h-6 w-6 text-muted-foreground group-hover/social:text-primary transition-all duration-300 relative z-10 group-hover/social:scale-110 group-hover/social:-rotate-12" />
                  </a>
                </Button>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/social:opacity-100 group-hover/social:-translate-y-1 transition-all duration-300">
                  <span className="text-xs text-foreground font-semibold bg-primary/10 px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap">View Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;