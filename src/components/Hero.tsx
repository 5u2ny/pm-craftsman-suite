import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-sans">
      {/* Exact Kaisermann background recreation */}
      <div className="absolute inset-0 z-0">
        {/* Deep black base */}
        <div className="absolute inset-0 bg-gray-950" />
        
        {/* Large colored blurs exactly like kaisermann.me */}
        <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-purple-500/8 rounded-full blur-[120px] transform -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[800px] bg-cyan-400/6 rounded-full blur-[100px] transform translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[500px] bg-pink-400/5 rounded-full blur-[110px] transform translate-y-1/4" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[600px] bg-blue-500/7 rounded-full blur-[90px]" />
        
        {/* Fine grain texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Apple liquid glass content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main glass card */}
        <div className="liquid-glass-card p-8 sm:p-12 lg:p-16 rounded-3xl animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="liquid-glass-frame p-2 rounded-full">
              <Profile4D />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light mb-6 tracking-tight leading-tight">
            <span className="block text-white mb-2 animate-slide-up">Sunny Soni</span>
            <span className="text-white/80 animate-fade-in font-normal text-3xl sm:text-4xl lg:text-5xl" style={{ animationDelay: "0.5s" }}>AI Product Manager</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            MBA candidate at William & Mary specializing in Business Analytics & Marketing. 
            <span className="text-white/90 font-medium"> AI Product Manager</span> with experience building 
            0-to-1 products and driving growth through data-driven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="liquid-glass-button group">
              <Link to="/about">
                View Experience
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="liquid-glass-button-outline">
              <Link to="/case-studies">
                Case Studies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="liquid-glass-button-outline">
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
              className="hover:bg-white/5 transition-colors text-white/60 hover:text-white/90 rounded-full"
              asChild
            >
              <a href="mailto:sunny.mba@proton.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-white/5 transition-colors text-white/60 hover:text-white/90 rounded-full"
              asChild
            >
              <a href="https://linkedin.com/in/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-white/5 transition-colors text-white/60 hover:text-white/90 rounded-full"
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