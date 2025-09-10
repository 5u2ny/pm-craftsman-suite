import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/0f13ee40-077e-4d69-89e9-bd5ad2a19290.png"
                alt="Sunny Soni - AI Product Manager"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-primary/20 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-glow"></div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Sunny Soni</span>
            <span className="text-gradient">AI Product Manager</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            MBA candidate at William & Mary specializing in Business Analytics & Marketing. 
            <span className="text-primary font-medium"> AI Product Manager</span> with experience building 
            0-to-1 products and driving growth through data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="button-glow group">
              <Link to="/case-studies">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link to="/projects">
                Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link to="/about">
                About Me
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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Drifting elements */}
        <div className="absolute top-20 right-1/4 w-8 h-8 bg-primary/15 rotate-45 animate-drift" />
        <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-accent/15 rounded-full animate-drift" style={{ animationDelay: "3s" }} />
        <div className="absolute top-2/3 right-10 w-10 h-10 bg-primary-glow/10 rotate-12 animate-drift" style={{ animationDelay: "1.5s" }} />
        
        {/* Pulsing glow effects */}
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        
        {/* Moving gradient orbs */}
        <div className="absolute top-10 left-1/2 w-40 h-40 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl animate-drift" />
        <div className="absolute bottom-10 right-1/2 w-36 h-36 bg-gradient-to-tl from-accent/8 to-transparent rounded-full blur-2xl animate-drift" style={{ animationDelay: "4s" }} />
      </div>
    </section>
  );
};

export default Hero;