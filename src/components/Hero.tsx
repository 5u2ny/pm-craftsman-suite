import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0e1a' }}>
      {/* Animated background pattern exactly like reference */}
      <div className="absolute inset-0 z-0">
        {/* Diagonal lines pattern */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.03 }}>
          <defs>
            <pattern id="diagonalLines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)"/>
        </svg>
      </div>

      {/* Content - exactly matching reference layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 tracking-tight leading-none text-white">
            <span className="block mb-2">
              AI Product Manager
            </span>
            <span className="block text-gray-300">
              & Full Stack Strategist
            </span>
          </h1>
          
          <div className="mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide">
              Building <span className="text-white">Intelligent</span>, <span className="text-white">Scalable</span> <span className="text-green-400">Products</span> with AI
            </p>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-500 mb-16 max-w-3xl mx-auto leading-relaxed">
            Hi! I'm <span className="text-white font-medium">Sunny Soni</span>, a passionate AI Product Manager crafting the future of web applications with cutting-edge AI technology.
          </p>

          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-transparent border border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium transition-all duration-300 group rounded-lg">
              <Link to="/about">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;