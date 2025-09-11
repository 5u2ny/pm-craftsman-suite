import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* 4D Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Profile4D />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-gradient-hero mb-2 animate-slide-up">Sunny Soni</span>
            <span className="text-white/90 animate-fade-in font-light tracking-wide" style={{ animationDelay: "0.5s" }}>AI Product Manager</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            MBA candidate at William & Mary specializing in Business Analytics & Marketing. 
            <span className="text-gradient-primary font-medium"> AI Product Manager</span> with experience building 
            0-to-1 products and driving growth through data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="btn-glass btn-glow group">
              <Link to="/about">
                View Experience
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-glass hover-lift">
              <Link to="/case-studies">
                Case Studies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-glass hover-lift">
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
              className="hover:text-primary-glow transition-colors hover-scale"
              asChild
            >
              <a href="mailto:sunny.mba@proton.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary-glow transition-colors hover-scale"
              asChild
            >
              <a href="https://linkedin.com/in/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary-glow transition-colors hover-scale"
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