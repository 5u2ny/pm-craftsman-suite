import { ArrowLeft, Calendar, Users, Briefcase, Target, Lightbulb, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import cavoHeroImage from "@/assets/cavo-hero.jpg";
import cavoWelcomeImage from "@/assets/cavo-welcome-ui.png";
import cavoChatImage from "@/assets/cavo-chat-ui.png";
import cavoEnergyImage from "@/assets/cavo-energy-modal.png";
import cavoItineraryImage from "@/assets/cavo-itinerary-ui.png";
import cavoActivitiesImage from "@/assets/cavo-activities-ui.png";

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
      title: "Collaborative Planning",
      description: "Real-time co-planning between friends using AI suggestions and preference matching"
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
        <div className="animate-slide-up mb-12">
          <img
            src={cavoHeroImage}
            alt="Cavo AI Travel Companion"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>

        <div className="border-t border-border my-12"></div>

        {/* Project Overview */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-4">
              Cavo is an AI-powered travel companion being developed to redefine how travelers plan, personalize, 
              and emotionally navigate trips. As Lead AI Product Manager, I am driving the 0-to-1 product vision, 
              strategy, and build execution combining AI, design, and user empathy to create a context-aware travel 
              assistant that adapts to user mood, intent, and location.
            </p>
            <p className="text-lg leading-relaxed">
              The product integrates multi-agent LLMs, emotional-safety logic, and dynamic itinerary generation to 
              deliver real-time, adaptive experiences. My focus spans across user research, system prompt design, 
              and cross-functional coordination to convert abstract travel goals into actionable design, data, and 
              engineering workflows.
            </p>
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Product Vision */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            Product Vision & Goal
          </h2>
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-xl font-medium text-foreground leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden hover-lift transition-all duration-300">
              <img src={cavoWelcomeImage} alt="Cavo Welcome Screen" className="w-full h-auto" />
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">Welcome & Mode Selection</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover-lift transition-all duration-300">
              <img src={cavoChatImage} alt="Cavo Chat Interface" className="w-full h-auto" />
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">Conversational Planning</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover-lift transition-all duration-300">
              <img src={cavoEnergyImage} alt="Cavo Energy Modal" className="w-full h-auto" />
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">Energy Level Adaptation</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover-lift transition-all duration-300">
              <img src={cavoItineraryImage} alt="Cavo Itinerary View" className="w-full h-auto" />
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">Daily Itinerary</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover-lift transition-all duration-300">
              <img src={cavoActivitiesImage} alt="Cavo Activities" className="w-full h-auto" />
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground text-center">Activity Recommendations</p>
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
              <Card key={index} className="hover-lift transition-all duration-300 border-border hover:border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Product Strategy & Roadmap */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            Product Strategy & Roadmap
          </h2>
          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover-lift transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{item.phase}</h3>
                    <Badge variant="outline" className="mt-2 md:mt-0">{item.timeline}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="border-t border-border my-12"></div>

        {/* Strategic Differentiators */}
        <section className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            Strategic Differentiators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary/5 to-transparent hover-lift transition-all duration-300 border-border hover:border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
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
          <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cavo is in active development, progressing through its MVP build and internal prototype testing stages. 
                Early user flows, design prototypes, and backend prompt logic have been finalized. Next milestones include 
                UI integration, travel dataset ingestion, and user feedback collection.
              </p>
            </CardContent>
          </Card>
        </section>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Want to Discuss This Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'd love to share more details about the product strategy, technical implementation, and design decisions behind Cavo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="hover-scale">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale">
              <Link to="/projects">View Other Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CavoAiTravel;