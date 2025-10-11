import { ArrowLeft, Calendar, Users, Briefcase, ArrowRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import cavoHeroImage from "@/assets/cavo-hero.jpg";
import cavoWelcomeImage from "@/assets/cavo-welcome-ui.png";
import cavoChatImage from "@/assets/cavo-chat-ui.png";
import cavoEnergyImage from "@/assets/cavo-energy-modal.png";
import cavoItineraryImage from "@/assets/cavo-itinerary-real.png";

const CavoAiTravel = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Nav */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <Button variant="ghost" asChild className="hover:bg-transparent group">
            <Link to="/projects" className="flex items-center gap-2 text-sm font-medium">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Projects
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-12 pt-20 pb-32">
        <div className="max-w-6xl">
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-xs font-semibold tracking-wide">
            PRODUCT CASE STUDY
          </Badge>
          
          <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8">
            Cavo
          </h1>
          
          <p className="text-3xl lg:text-4xl text-muted-foreground font-light mb-16 max-w-3xl leading-relaxed">
            AI-powered travel companion that adapts to your mood, context, and preferences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Timeline</p>
              <p className="text-base font-medium">May 2025 - Present</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Role</p>
              <p className="text-base font-medium">Lead AI Product Manager</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Company</p>
              <p className="text-base font-medium">IpserLab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-muted">
          <img 
            src={cavoHeroImage} 
            alt="Cavo AI Travel Companion" 
            className="w-full h-[70vh] object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Overview
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-3xl lg:text-4xl font-light leading-relaxed text-foreground">
              Redefining travel planning through emotional intelligence and contextual AI—building a companion 
              that truly understands how you feel and what you need.
            </p>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                As Lead AI Product Manager, I'm driving the complete 0-to-1 product vision and execution for Cavo—an 
                AI travel companion that goes beyond basic itinerary generation. The product combines multi-agent LLMs, 
                emotional-safety logic, and real-time context to create truly adaptive travel experiences.
              </p>
              <p>
                My work spans user research, system prompt engineering, product strategy, and cross-functional coordination 
                to transform abstract travel goals into intelligent, empathetic design and engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="bg-muted/50 rounded-3xl p-12 lg:p-16">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Vision
          </p>
          <p className="text-4xl lg:text-5xl font-light leading-tight max-w-5xl">
            Create a personalized AI travel partner that offers emotional and contextual assistance—helping 
            users plan, discover, and adapt trips with intelligence, empathy, and precision.
          </p>
        </div>
      </section>

      {/* Product Screens */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Interface
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl text-muted-foreground leading-relaxed">
              A clean, intuitive interface that adapts to user emotions and travel preferences in real-time.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-2xl bg-muted mb-6">
                <img 
                  src={cavoWelcomeImage} 
                  alt="Welcome Screen" 
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Welcome & Mode Selection</p>
            </div>
            <div className="group">
              <div className="overflow-hidden rounded-2xl bg-muted mb-6">
                <img 
                  src={cavoChatImage} 
                  alt="Chat Interface" 
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Conversational Planning</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-2xl bg-muted mb-6">
                <img 
                  src={cavoEnergyImage} 
                  alt="Energy Modal" 
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Energy Level Adaptation</p>
            </div>
            <div className="group">
              <div className="overflow-hidden rounded-2xl bg-muted mb-6">
                <img 
                  src={cavoItineraryImage} 
                  alt="Itinerary" 
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Daily Itinerary Builder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Key Features
            </h2>
            <p className="text-sm text-muted-foreground">In Development</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          <div className="group cursor-default">
            <div className="flex items-start gap-4 mb-4">
              <Circle className="h-2 w-2 mt-2 text-primary fill-primary" />
              <h3 className="text-xl font-medium">Adaptive Itinerary Builder</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed ml-6">
              Uses contextual prompts, local data, and LLM reasoning to personalize plans on-the-go
            </p>
          </div>

          <div className="group cursor-default">
            <div className="flex items-start gap-4 mb-4">
              <Circle className="h-2 w-2 mt-2 text-primary fill-primary" />
              <h3 className="text-xl font-medium">Emotional Safety Modes</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed ml-6">
              Custom modes tuned to user mood and travel context for personalized assistance
            </p>
          </div>

          <div className="group cursor-default">
            <div className="flex items-start gap-4 mb-4">
              <Circle className="h-2 w-2 mt-2 text-primary fill-primary" />
              <h3 className="text-xl font-medium">Offline Memory Layer</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed ml-6">
              Stores local trip context for persistent, low-latency responses
            </p>
          </div>

          <div className="group cursor-default">
            <div className="flex items-start gap-4 mb-4">
              <Circle className="h-2 w-2 mt-2 text-primary fill-primary" />
              <h3 className="text-xl font-medium">Zero-Budget MVP Architecture</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed ml-6">
              Built using LangChain, open APIs, and modular prompt systems for scalable iteration
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Roadmap
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-border/50">
            <div className="lg:col-span-3">
              <p className="text-sm font-medium">May - Aug 2025</p>
            </div>
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-medium mb-3">MVP Development</h3>
              <p className="text-base text-muted-foreground">
                Core conversational logic, emotion modes, and prototype UI
              </p>
            </div>
            <div className="lg:col-span-3 flex items-start justify-end">
              <Badge variant="default" className="px-4 py-1.5">In Progress</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-border/50">
            <div className="lg:col-span-3">
              <p className="text-sm font-medium">Sep 2025</p>
            </div>
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-medium mb-3">User Testing</h3>
              <p className="text-base text-muted-foreground">
                Feedback collection from 20 early adopters to refine flow and tone
              </p>
            </div>
            <div className="lg:col-span-3 flex items-start justify-end">
              <Badge variant="secondary" className="px-4 py-1.5">Planned</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8">
            <div className="lg:col-span-3">
              <p className="text-sm font-medium">Oct - Dec 2025</p>
            </div>
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-medium mb-3">Beta Launch</h3>
              <p className="text-base text-muted-foreground">
                Web interface + AI-assisted trip planning demo for early partners
              </p>
            </div>
            <div className="lg:col-span-3 flex items-start justify-end">
              <Badge variant="secondary" className="px-4 py-1.5">Planned</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Strategic Differentiators
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Human-AI Co-travel Design</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Built around emotional intelligence, not just itinerary generation
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Scalable Multi-Modal Framework</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Integrates APIs, RAG pipelines, and voice-to-intent mapping
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Data-Driven PM Workflow</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              RICE prioritization and sprint cycles optimized for speed under zero-budget constraints
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="bg-muted/50 rounded-3xl p-12 lg:p-16">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Current Status
          </p>
          <p className="text-2xl leading-relaxed max-w-4xl">
            Cavo is in active development, progressing through MVP build and internal prototype testing. 
            Early user flows, design prototypes, and backend prompt logic have been finalized. Next milestones 
            include UI integration, travel dataset ingestion, and user feedback collection.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-12 pb-32">
        <div className="border-t border-border/50 pt-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-light mb-6">
                Interested in learning more?
              </h2>
              <p className="text-xl text-muted-foreground">
                I'd love to discuss the product strategy, technical decisions, and design process behind Cavo.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg" className="px-8 h-12 text-base">
                <Link to="/contact" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base">
                <Link to="/projects">
                  All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CavoAiTravel;
