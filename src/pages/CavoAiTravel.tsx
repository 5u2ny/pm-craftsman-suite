import { ArrowLeft, Calendar, Users, Briefcase, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Button variant="ghost" asChild>
          <Link to="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Section - Full Width Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cavoHeroImage}
            alt="Cavo AI Travel Companion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
              Cavo
            </h1>
            <p className="text-2xl sm:text-3xl text-primary font-medium mb-6">
              AI Travel Companion
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-4 py-1.5">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">Timeline</span>
              </div>
              <p className="text-foreground font-medium">May 2025 - Ongoing</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm font-medium">Organization</span>
              </div>
              <p className="text-foreground font-medium">IpserLab</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Role</span>
              </div>
              <p className="text-foreground font-medium">Lead AI Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Overview</h2>
            <p className="text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-tight">
              An AI-powered travel companion that personalizes trips using emotional intelligence and adaptive reasoning
            </p>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Cavo redefines how travelers plan, personalize, and emotionally navigate trips. As Lead AI Product Manager, 
                I'm driving the 0-to-1 product vision, strategy, and build execution—combining AI, design, and user empathy 
                to create a context-aware travel assistant that adapts to user mood, intent, and location.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The product integrates multi-agent LLMs, emotional-safety logic, and dynamic itinerary generation to deliver 
                real-time, adaptive experiences. My focus spans user research, system prompt design, and cross-functional 
                coordination to convert abstract travel goals into actionable workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Vision</h2>
            <p className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              To create a personalized AI travel partner that offers emotional and contextual assistance—helping users plan, 
              discover, and adapt trips with intelligence, empathy, and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Product Interface - Image Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-primary mb-8 uppercase tracking-wider">Product Interface</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <img src={cavoWelcomeImage} alt="Mode Selection" className="w-full rounded-lg shadow-lg" />
              <p className="text-sm text-muted-foreground">Welcome & Mode Selection</p>
            </div>
            <div className="space-y-4">
              <img src={cavoChatImage} alt="Conversational Planning" className="w-full rounded-lg shadow-lg" />
              <p className="text-sm text-muted-foreground">Conversational Planning</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img src={cavoEnergyImage} alt="Energy Adaptation" className="w-full rounded-lg shadow-lg" />
              <p className="text-sm text-muted-foreground">Energy Level Adaptation</p>
            </div>
            <div className="space-y-4">
              <img src={cavoItineraryImage} alt="Daily Itinerary" className="w-full rounded-lg shadow-lg" />
              <p className="text-sm text-muted-foreground">Daily Itinerary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold text-primary mb-8 uppercase tracking-wider">
              Key Features <span className="text-muted-foreground normal-case">(In Development)</span>
            </h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold text-primary mb-8 uppercase tracking-wider">Product Roadmap</h2>
            <div className="space-y-6">
              {roadmap.map((item, index) => (
                <div key={index} className="flex items-start justify-between py-6 border-b border-border last:border-0">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.phase}</h3>
                    <p className="text-muted-foreground">{item.timeline}</p>
                  </div>
                  <Badge variant={item.status === "In Progress" ? "default" : "secondary"}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold text-primary mb-8 uppercase tracking-wider">Strategic Differentiators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-sm font-semibold text-primary mb-6 uppercase tracking-wider">Current Status</h2>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Cavo is in active development, progressing through MVP build and internal prototype testing. 
                Early user flows, design prototypes, and backend prompt logic have been finalized. Next milestones 
                include UI integration, travel dataset ingestion, and user feedback collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Want to discuss this project?</h2>
              <p className="text-muted-foreground">Let's talk about the product strategy and technical decisions</p>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CavoAiTravel;
