import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
        
        {/* Subtle star field - exactly like abirthakur.com */}
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
          <div className="absolute top-16 left-1/2 w-1 h-1 bg-white/25 rounded-full animate-twinkle" style={{ animationDelay: "1.2s" }} />
          <div className="absolute bottom-16 left-16 w-1 h-1 bg-white/20 rounded-full animate-twinkle" style={{ animationDelay: "3.2s" }} />
          <div className="absolute top-40 right-16 w-1 h-1 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: "0.8s" }} />
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/15 rounded-full animate-twinkle" style={{ animationDelay: "4.5s" }} />
          <div className="absolute top-24 left-1/5 w-1 h-1 bg-white/40 rounded-full animate-twinkle" style={{ animationDelay: "2.2s" }} />
          <div className="absolute bottom-24 right-1/5 w-1 h-1 bg-white/25 rounded-full animate-twinkle" style={{ animationDelay: "1.8s" }} />
          <div className="absolute top-2/3 left-20 w-1 h-1 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: "3.8s" }} />
          <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-white/20 rounded-full animate-twinkle" style={{ animationDelay: "0.3s" }} />
          <div className="absolute bottom-2/3 right-24 w-1 h-1 bg-white/35 rounded-full animate-twinkle" style={{ animationDelay: "4.2s" }} />
          <div className="absolute top-48 left-3/4 w-1 h-1 bg-white/15 rounded-full animate-twinkle" style={{ animationDelay: "2.7s" }} />
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