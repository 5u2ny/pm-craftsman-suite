import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="italic text-foreground">
                Building AI products that solve problems with empathy and data
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Hey there! I'm an AI Product Manager who's worked with everything from growth experiments 
              to user research—building systems that improved conversion by 40%, reduced churn 
              by 26%, and boosted engagement by 50%. Whether creating MVP strategies, 
              conducting UX research, or building growth frameworks, I turn insights into 
              products that drive measurable impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="button-glow">
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Section */}
          <div className="flex flex-col items-center lg:items-end animate-fade-in">
            <div className="relative mb-8">
              <div className="w-80 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">SS</span>
                  </div>
                  <div className="text-muted-foreground text-sm">Professional photo coming soon</div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-wider">
                AI PRODUCT MANAGER
              </h2>
              <p className="text-lg text-primary font-medium mb-6">Sunny Soni</p>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-end space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-primary hover:border-primary transition-colors"
                  asChild
                >
                  <a href="https://linkedin.com/in/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-primary hover:border-primary transition-colors"
                  asChild
                >
                  <a href="https://github.com/sunnysoni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-primary hover:border-primary transition-colors"
                  asChild
                >
                  <a href="mailto:sunny@example.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;