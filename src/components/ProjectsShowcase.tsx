import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import openaiStrategyImage from "@/assets/openai-strategy.jpg";
import brewscoveryImage from "@/assets/brewscovery-project.jpg";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "Brewscovery – Craft Beer Subscription Model",
      tagline: "MBA Sprint Week, Fall 2024",
      description: "Designed investor-ready craft beer subscription with financial projections of $4.8M revenue and $1.5M Year 1 profit. Top 4 team selected to present to Domino's Chief.",
      image: brewscoveryImage,
      metrics: [
        "Built forecast model for 10K subscribers and $1.5M profit in Year 1",
        "Led scenario planning with upside projections up to $9.6M",
        "Selected as Top 4 team for final pitch to Domino's Global Strategy Chief"
      ],
      tags: ["Marketing Strategy", "Financial Modeling", "GTM Strategy", "Subscription Business"],
      slug: "brewscovery-subscription",
      featured: true,
    },
    {
      title: "OpenAI ChatGPT Competitive Strategy",
      tagline: "MBA Global Competitive Strategy, Spring 2025",
      description: "Three-phase strategic analysis using PESTEL, Porter's Five Forces, VRIO, and SWOT. Developed implementation roadmap focused on plugin infrastructure and ethical AI leadership.",
      image: openaiStrategyImage,
      metrics: [
        "Multi-framework strategic analysis",
        "Competitive positioning assessment",
        "Implementation roadmap developed"
      ],
      tags: ["Business Frameworks", "Competitive Strategy", "Market Positioning", "Strategic Planning"],
      slug: "openai-competitive-strategy",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Motion Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-8 w-36 h-36 border border-primary/6 rounded-full animate-drift"></div>
        <div className="absolute bottom-32 right-12 w-24 h-24 border border-accent/12 rounded-lg animate-float transform rotate-12"></div>
        <div className="absolute top-1/2 right-8 w-32 h-32 bg-gradient-to-br from-primary/4 to-transparent rounded-full blur-xl animate-pulse-glow"></div>
        <div className="absolute top-40 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-slide-up" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 right-1/4 w-px h-28 bg-gradient-to-t from-transparent via-primary/15 to-transparent animate-fade-in" style={{ animationDelay: "3s" }}></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of academic research projects and strategic analyses 
            from my MBA program demonstrating analytical and strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group hover-scale" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;