import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background pattern similar to reference */}
      <div className="absolute inset-0 z-0">
        {/* Animated lines pattern */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary"/>
        </svg>
        
        {/* Floating animated elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent/30 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-primary/20 rounded-full animate-drift" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-accent/20 rounded-full animate-drift" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Remove 4D Profile Picture for cleaner look like reference */}
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
            <span className="block text-foreground mb-4 animate-slide-up">
              AI Product Manager
            </span>
            <span className="text-foreground/80 animate-fade-in text-5xl sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.5s" }}>
              & Full Stack Strategist
            </span>
          </h1>
          <div className="mb-8">
            <p className="text-xl sm:text-2xl text-accent font-medium mb-2">
              Building Intelligent, Scalable Products with AI
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Hi! I'm <span className="text-foreground font-semibold">Sunny Soni</span>, a passionate AI Product Manager crafting the future of 
            business applications with cutting-edge AI technology and data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 group">
              <Link to="/about">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-full p-3"
              asChild
            >
              <a href="mailto:sunny.mba@proton.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-full p-3"
              asChild
            >
              <a href="https://linkedin.com/in/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-accent hover:bg-accent/10 transition-all duration-300 rounded-full p-3"
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