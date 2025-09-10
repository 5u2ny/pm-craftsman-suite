import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [sparks, setSparks] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    // Generate shooting stars - 5x more quantity
    const generateStars = () => {
      const newStars = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2 // 5x faster cycle
      }));
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 2000); // 5x faster regeneration

    return () => clearInterval(interval);
  }, []);

  const handleStarHit = (starId: number) => {
    // Create spark effect at profile picture location
    const newSparks = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: 50 + (Math.random() - 0.5) * 20, // Around center
      y: 25 + (Math.random() - 0.5) * 10  // Around profile picture area
    }));
    
    setSparks(prev => [...prev, ...newSparks]);

    // Remove sparks after animation
    setTimeout(() => {
      setSparks(prev => prev.filter(spark => !newSparks.find(ns => ns.id === spark.id)));
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Black background with subtle texture */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-black to-slate-900/20" />
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

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.6)'
            }}
            onAnimationIteration={() => {
              // Check if star is near profile picture area (roughly center)
              if (star.x > 35 && star.x < 65 && star.y > 15 && star.y < 45) {
                handleStarHit(star.id);
              }
            }}
          />
        ))}

        {/* Spark Effects */}
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-spark"
            style={{
              left: `${spark.x}%`,
              top: `${spark.y}%`,
              boxShadow: '0 0 8px 2px rgba(255, 215, 0, 0.8)'
            }}
          />
        ))}

        {/* Background stars */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white/40 rounded-full animate-twinkle" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white/50 rounded-full animate-twinkle" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-white/35 rounded-full animate-twinkle" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white/45 rounded-full animate-twinkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-40 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-60 right-40 w-1 h-1 bg-white/30 rounded-full animate-twinkle" style={{ animationDelay: "2.5s" }} />
        <div className="absolute bottom-60 left-20 w-1 h-1 bg-white/50 rounded-full animate-twinkle" style={{ animationDelay: "4s" }} />
      </div>
    </section>
  );
};

export default Hero;