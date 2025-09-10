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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Alex Chen</span>
            <span className="text-gradient">AI Product Manager</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Building products that solve problems with empathy and data. 
            <span className="text-primary font-medium"> AI-first Product Manager</span> specializing in 
            strategy, UX research, and growth experimentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="button-glow group">
              <Link to="/projects">
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
              <a href="mailto:alex@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary transition-colors"
              asChild
            >
              <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full animate-glow" />
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent/10 rounded-full animate-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary-glow/20 rounded-full animate-glow" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
};

export default Hero;