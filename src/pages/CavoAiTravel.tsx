import { ArrowLeft, Calendar, Users, Briefcase, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import cavoHeroImage from "@/assets/cavo-hero.jpg";
import cavoWelcomeImage from "@/assets/cavo-welcome-ui.png";
import cavoChatImage from "@/assets/cavo-chat-ui.png";
import cavoEnergyImage from "@/assets/cavo-energy-modal.png";
import cavoItineraryImage from "@/assets/cavo-itinerary-real.png";

const CavoAiTravel = () => {
  const tags = ["AI Product Management", "UX Strategy", "Prompt Engineering", "Product Development"];
  
  const features = [
    "Adaptive Itinerary Builder using contextual prompts and LLM reasoning",
    "Emotional Safety Modes tuned to user mood and travel context",
    "Offline Memory Layer for persistent, low-latency responses",
    "Zero-Budget MVP Architecture using LangChain and modular systems"
  ];

  const differentiators = [
    { title: "Human-AI Co-travel Design", desc: "Built around emotional intelligence, not just itinerary generation" },
    { title: "Scalable Multi-Modal Framework", desc: "Integrates APIs, RAG pipelines, and voice-to-intent mapping" },
    { title: "Data-Driven PM Workflow", desc: "RICE prioritization and sprint cycles optimized for speed" }
  ];

  const roadmap = [
    { phase: "MVP Development", timeline: "May - Aug 2025", status: "In Progress" },
    { phase: "User Testing", timeline: "Sep 2025", status: "Planned" },
    { phase: "Beta Launch", timeline: "Oct - Dec 2025", status: "Planned" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Button variant="ghost" asChild className="group hover:bg-muted/50 transition-all duration-300">
          <Link to="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </Button>
      </div>

      {/* Hero Section - Full Width Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img
            src={cavoHeroImage}
            alt="Cavo AI Travel Companion"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          
          {/* Floating gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
          <div className="max-w-5xl animate-slide-up">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-sm font-semibold text-primary">AI Product Case Study</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 text-foreground tracking-tight">
              Cavo
            </h1>
            <p className="text-3xl sm:text-4xl text-gradient font-semibold mb-8">
              AI Travel Companion
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-sm px-5 py-2 hover-scale cursor-default backdrop-blur-sm bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
            <div className="group cursor-default">
              <div className="flex items-center gap-3 text-muted-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider">Timeline</span>
              </div>
              <p className="text-xl text-foreground font-medium">May 2025 - Ongoing</p>
            </div>
            <div className="group cursor-default">
              <div className="flex items-center gap-3 text-muted-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Briefcase className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider">Organization</span>
              </div>
              <p className="text-xl text-foreground font-medium">IpserLab</p>
            </div>
            <div className="group cursor-default">
              <div className="flex items-center gap-3 text-muted-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider">Role</span>
              </div>
              <p className="text-xl text-foreground font-medium">Lead AI Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Overview</h2>
            </div>
          </div>
          <h3 className="group cursor-default text-center text-5xl sm:text-6xl lg:text-7xl font-hero font-black text-foreground mb-12 leading-[1.1] tracking-tight hover:tracking-normal transition-all duration-500 px-4">
            <span className="text-gradient block w-full transform hover:scale-105 hover:animate-glow-pulse transition-all duration-300">
              Emotionally Intelligent Travel Companion
            </span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed text-center font-sans">
              Cavo redefines how travelers plan and emotionally navigate trips. As Lead AI Product Manager, 
              I'm driving the 0-to-1 product vision, combining AI, design, and user empathy to create a 
              context-aware travel assistant that adapts to mood, intent, and location. The product integrates 
              multi-agent LLMs, emotional-safety logic, and dynamic itinerary generation to deliver real-time, 
              adaptive experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-delay"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
              <Sparkles className="h-7 w-7 text-primary animate-pulse" />
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Vision</h2>
              <Sparkles className="h-7 w-7 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            
            <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/20 rounded-3xl p-12 sm:p-16 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-default animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <p className="relative text-3xl sm:text-4xl lg:text-5xl font-hero font-bold text-foreground leading-tight text-center">
                Reimagining travel through{" "}
                <span className="text-gradient inline-block transform group-hover:scale-105 transition-transform duration-300">
                  AI-powered empathy
                </span>
                {" "}and{" "}
                <span className="text-gradient inline-block transform group-hover:scale-105 transition-transform duration-300">
                  contextual intelligence
                </span>
              </p>
              
              <div className="mt-8 flex justify-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Personalized</span>
                </div>
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300" style={{ animationDelay: "0.2s" }}>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Adaptive</span>
                </div>
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300" style={{ animationDelay: "0.4s" }}>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Intelligent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Interface - Image Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-primary"></div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Product Interface</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="group animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 bg-muted/20 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={cavoWelcomeImage} 
                  alt="Mode Selection" 
                  className="w-full transform transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Welcome & Mode Selection
              </p>
            </div>
            <div className="group animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 bg-muted/20 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={cavoChatImage} 
                  alt="Conversational Planning" 
                  className="w-full transform transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Conversational Planning
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 bg-muted/20 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={cavoEnergyImage} 
                  alt="Energy Adaptation" 
                  className="w-full transform transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Energy Level Adaptation
              </p>
            </div>
            <div className="group animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6 bg-muted/20 hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={cavoItineraryImage} 
                  alt="Daily Itinerary" 
                  className="w-full transform transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Daily Itinerary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">
                Key Features <span className="text-muted-foreground font-normal">(In Development)</span>
              </h2>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-6 py-8 border-b border-border/50 last:border-0 hover:bg-card/50 px-6 -mx-6 rounded-lg transition-all duration-300 cursor-default animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-xl text-foreground leading-relaxed flex-1 pt-2">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Product Roadmap</h2>
            </div>
            <div className="space-y-8">
              {roadmap.map((item, index) => (
                <Card 
                  key={index} 
                  className="group p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary hover:border-l-accent bg-gradient-to-r from-card to-transparent hover:from-card/80 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.phase}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">{item.timeline}</p>
                    </div>
                    <Badge 
                      variant={item.status === "In Progress" ? "default" : "secondary"}
                      className="text-sm px-4 py-2 group-hover:scale-110 transition-transform duration-300"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Strategic Differentiators</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <Card 
                  key={index} 
                  className="group p-8 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 hover:from-card hover:to-card/80 border-2 border-border hover:border-primary/30 cursor-default animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Current Status</h2>
            </div>
            <Card className="p-10 bg-gradient-to-br from-primary/10 via-card to-accent/10 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/20 rounded-full animate-pulse">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <p className="text-2xl text-foreground leading-relaxed flex-1">
                  Cavo is in active development, progressing through MVP build and internal prototype testing. 
                  Early user flows, design prototypes, and backend prompt logic have been finalized. Next milestones 
                  include UI integration, travel dataset ingestion, and user feedback collection.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-foreground mb-4">Want to discuss this project?</h2>
                <p className="text-xl text-muted-foreground">
                  Let's talk about the product strategy, technical implementation, and design decisions behind Cavo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group text-lg px-8 py-6 hover-scale hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group text-lg px-8 py-6 hover-scale border-2 hover:border-primary/50 transition-all duration-300">
                  <Link to="/projects">
                    All Projects
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CavoAiTravel;
