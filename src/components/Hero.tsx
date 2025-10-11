import { ArrowRight, Github, Linkedin, Send, FileDown, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Profile4D from "@/components/Profile4D";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
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
          <div className="mb-8 flex justify-center animate-scale-in" style={{
          animationDelay: "0.2s"
        }}>
            <Profile4D />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3 tracking-tight">
            <span className="block text-foreground mb-2 font-hero font-extrabold tracking-tight" style={{
            animationDelay: "0.4s"
          }}>
              {"Sunny Soni".split("").map((letter, index) => <span key={index} className="inline-block cursor-pointer transition-all duration-300 hover:text-primary hover:scale-125 hover:-translate-y-2 hover:animate-glow-pulse hover:drop-shadow-[0_0_15px_hsl(var(--primary))]" onMouseEnter={e => {
              e.currentTarget.classList.add('animate-letter-bounce');
            }} onAnimationEnd={e => {
              if (e.animationName.includes('bounce')) {
                e.currentTarget.classList.remove('animate-letter-bounce');
              }
            }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>)}
            </span>
          </h1>
          
          <div className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            <div className="relative group">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
              
              <div className="relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 sm:p-10 group-hover:border-primary/20 transition-all duration-500 animate-fade-in" style={{
                animationDelay: "0.8s"
              }}>
                <p className="text-foreground/90 leading-relaxed mb-6">
                  <span className="font-bold text-primary">AI Product Manager</span> blending technical depth with business insight to craft intelligent, user-centric products. Currently pursuing an <span className="font-semibold text-accent">MBA in Business Analytics</span> at <span className="font-semibold text-primary">William & Mary</span>, with a foundation in <span className="font-semibold text-accent">Computer Science</span>.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  I focus on building purposeful <span className="font-semibold text-accent">AI experiences</span> that connect <span className="font-semibold text-primary">data, design, and impact</span> — turning <span className="font-semibold text-accent">complex problems</span> into <span className="font-semibold text-primary">simple, scalable solutions</span> people genuinely value.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mb-12">
            {/* Primary Actions */}
          </div>

          {/* Redesigned Interactive Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{
          animationDelay: "1.4s"
        }}>
            {/* Email Button */}
            <div className="group/social relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover/social:opacity-100 blur-xl transition-all duration-500"></div>
              <Button variant="ghost" size="lg" className="relative h-14 px-6 rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group" asChild>
                <a href="mailto:sunnysoni.mba@proton.me" className="flex items-center gap-3">
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl animate-spin-slow blur-sm"></div>
                  </div>
                  
                  <Send className="h-5 w-5 text-muted-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-12" />
                  <span className="relative z-10 font-medium text-muted-foreground group-hover:text-white transition-all duration-300">Email Me</span>
                </a>
              </Button>
            </div>

            {/* LinkedIn Button */}
            <div className="group/social relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-0 group-hover/social:opacity-100 blur-xl transition-all duration-500"></div>
              <Button variant="ghost" size="lg" className="relative h-14 px-6 rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-accent hover:to-primary hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group" asChild>
                <a href="https://www.linkedin.com/in/sunnysonimba/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-accent via-primary to-accent rounded-2xl animate-spin-slow blur-sm"></div>
                  </div>
                  
                  <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-6" />
                  <span className="relative z-10 font-medium text-muted-foreground group-hover:text-white transition-all duration-300">LinkedIn</span>
                </a>
              </Button>
            </div>

            {/* GitHub Button */}
            <div className="group/social relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover/social:opacity-100 blur-xl transition-all duration-500"></div>
              <Button variant="ghost" size="lg" className="relative h-14 px-6 rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group" asChild>
                <a href="https://github.com/sunnysoni" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl animate-spin-slow blur-sm"></div>
                  </div>
                  
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:-rotate-12" />
                  <span className="relative z-10 font-medium text-muted-foreground group-hover:text-white transition-all duration-300">GitHub</span>
                </a>
              </Button>
            </div>

            {/* Download Resume Button */}
            <div className="group/social relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-0 group-hover/social:opacity-100 blur-xl transition-all duration-500"></div>
              <Button variant="ghost" size="lg" className="relative h-14 px-6 rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-accent hover:to-primary hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group" asChild>
                <a href="/Sunny_Soni_Resume.pdf" download="Sunny_Soni_Resume.pdf" className="flex items-center gap-3">
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-accent via-primary to-accent rounded-2xl animate-spin-slow blur-sm"></div>
                  </div>
                  
                  <FileDown className="h-5 w-5 text-muted-foreground group-hover:text-white transition-all duration-300 relative z-10 group-hover:rotate-12" />
                  <span className="relative z-10 font-medium text-muted-foreground group-hover:text-white transition-all duration-300">Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;