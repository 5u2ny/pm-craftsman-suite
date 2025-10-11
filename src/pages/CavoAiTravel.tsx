import { ArrowLeft, Calendar, Users, Briefcase, Target, Lightbulb, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import cavoHeroImage from "@/assets/cavo-hero.jpg";
import cavoWelcomeImage from "@/assets/cavo-welcome-ui.png";
import cavoChatImage from "@/assets/cavo-chat-ui.png";
import cavoEnergyImage from "@/assets/cavo-energy-modal.png";
import cavoItineraryImage from "@/assets/cavo-itinerary-real.png";

const CavoAiTravel = () => {
  const tags = ["AI Product Management", "UX Strategy", "Prompt Engineering", "Product Development"];
  
  const features = [
    {
      title: "Adaptive Itinerary Builder",
      description: "Uses contextual prompts, local data, and LLM reasoning to personalize plans on-the-go"
    },
    {
      title: "Emotional Safety Modes",
      description: "Custom modes (Calm, Curious, Connected, Confident) tuned to user mood and travel context"
    },
    {
      title: "Offline Memory Layer",
      description: "Stores local trip context for persistent, low-latency responses"
    },
    {
      title: "Zero-Budget MVP Architecture",
      description: "Built using LangChain, open APIs, and modular prompt systems for scalable iteration"
    }
  ];

  const differentiators = [
    {
      title: "Human-AI Co-travel Design",
      description: "Built around emotional intelligence, not just itinerary generation"
    },
    {
      title: "Scalable Multi-Modal Framework",
      description: "Integrates APIs, RAG pipelines, and voice-to-intent mapping"
    },
    {
      title: "Data-Driven PM Workflow",
      description: "RICE prioritization and sprint cycles optimized for speed under zero-budget constraints"
    }
  ];

  const roadmap = [
    {
      phase: "Phase 1: MVP Development",
      timeline: "May - Aug 2025",
      description: "Core conversational logic, emotion modes, and prototype UI"
    },
    {
      phase: "Phase 2: User Testing",
      timeline: "Sep 2025",
      description: "Feedback collection from 20 early adopters to refine flow and tone"
    },
    {
      phase: "Phase 3: Beta Launch",
      timeline: "Oct - Dec 2025",
      description: "Web interface + AI-assisted trip planning demo for early partners"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Button variant="ghost" asChild className="group animate-fade-in">
          <Link to="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Cavo <span className="text-gradient">AI Travel Companion</span>
          </h1>
          <p className="text-xl text-primary mb-6 font-medium">
            AI Product Management • UX Strategy • Prompt Engineering • Product Development
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>May 2025 – Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span>IpserLab</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Lead AI Product Manager</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="animate-slide-up mb-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
          <img
            src={cavoHeroImage}
            alt="Cavo AI Travel Companion"
            className="relative w-full h-auto rounded-lg shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl"
          />
        </div>

        <div className="border-t border-border my-12"></div>

        {/* Project Overview */}
        <section className="mb-16 animate-slide-up relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
              <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Project Overview
            </span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <Card className="border-l-4 border-l-primary bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4 text-muted-foreground">
                  Cavo is an AI-powered travel companion being developed to redefine how travelers plan, personalize, 
                  and emotionally navigate trips. As Lead AI Product Manager, I am driving the 0-to-1 product vision, 
                  strategy, and build execution combining AI, design, and user empathy to create a context-aware travel 
                  assistant that adapts to user mood, intent, and location.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The product integrates multi-agent LLMs, emotional-safety logic, and dynamic itinerary generation to 
                  deliver real-time, adaptive experiences. My focus spans across user research, system prompt design, 
                  and cross-functional coordination to convert abstract travel goals into actionable design, data, and 
                  engineering workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Product Vision */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3 group">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
              <Sparkles className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Product Vision & Goal
            </span>
          </h2>
          <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <CardContent className="pt-8 pb-8 relative z-10">
              <p className="text-xl font-medium text-foreground leading-relaxed text-center">
                To create a personalized AI travel partner that offers emotional and contextual assistance helping 
                users plan, discover, and adapt trips with intelligence, empathy, and precision.
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Product Screenshots */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Product Interface</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img src={cavoWelcomeImage} alt="Cavo Welcome Screen" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="pt-4 relative z-10">
                <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">Welcome & Mode Selection</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-accent/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img src={cavoChatImage} alt="Cavo Chat Interface" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="pt-4 relative z-10">
                <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">Conversational Planning</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img src={cavoEnergyImage} alt="Cavo Energy Modal" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="pt-4 relative z-10">
                <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">Energy Level Adaptation</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-accent/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden">
                <img src={cavoItineraryImage} alt="Cavo Itinerary View" className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="pt-4 relative z-10">
                <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">Daily Itinerary</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Key Features */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Key Features <span className="text-muted-foreground text-xl font-normal">(In Development)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover-lift transition-all duration-500 border-2 border-border hover:border-primary/50 bg-gradient-to-br from-card to-card/80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="pt-6 pb-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Product Strategy & Roadmap */}
        <section className="mb-16 animate-slide-up relative">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
              <TrendingUp className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Product Strategy & Roadmap
            </span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {roadmap.map((item, index) => (
                <Card 
                  key={index} 
                  className="relative group hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary hover:border-l-accent ml-0 md:ml-16 bg-gradient-to-br from-card to-card/50"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-8 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="pt-6 pb-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.phase}</h3>
                      <Badge variant="outline" className="mt-2 md:mt-0 bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors duration-300">
                        {item.timeline}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Strategic Differentiators */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3 group">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
              <Lightbulb className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Strategic Differentiators
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-gradient-to-br from-primary/10 via-card to-accent/10 hover-lift transition-all duration-500 border-2 border-transparent hover:border-primary/30 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                <CardContent className="pt-6 pb-6 relative z-10">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Current Status */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Current Status</h2>
          <Card className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-card to-primary/10 border-2 border-accent/30 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardContent className="pt-8 pb-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                  Cavo is in active development, progressing through its MVP build and internal prototype testing stages. 
                  Early user flows, design prototypes, and backend prompt logic have been finalized. Next milestones include 
                  UI integration, travel dataset ingestion, and user feedback collection.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 p-4 bg-primary/10 rounded-full animate-bounce">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Want to Discuss This Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'd love to share more details about the product strategy, technical implementation, and design decisions behind Cavo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group hover-scale hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
              <Link to="/contact">
                Get In Touch
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group hover-scale hover:shadow-lg border-2 hover:border-primary/50 transition-all duration-300">
              <Link to="/projects">
                View Other Projects
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CavoAiTravel;