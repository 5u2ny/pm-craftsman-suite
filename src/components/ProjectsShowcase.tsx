import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cavoHeroImage from "@/assets/cavo-hero.jpg";
import brewscoveryImage from "@/assets/brewscovery-project.jpg";

const ProjectsShowcase = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Cavo – AI Travel Companion",
      tagline: "AI Product Management | IpserLab, May 2025 – Ongoing",
      description: "Leading 0-to-1 development of an AI-powered travel companion that personalizes trips using emotional-safety logic, multi-agent LLMs, and dynamic itinerary generation.",
      image: cavoHeroImage,
      metrics: [
        "Designed adaptive itinerary builder with contextual AI reasoning",
        "Built emotional safety modes tuned to user mood and context",
        "Architected zero-budget MVP using LangChain and modular prompts"
      ],
      tags: ["AI Product Management", "LLM Systems", "UX Design", "Product Strategy"],
      slug: "cavo-ai-travel",
      featured: true,
    },
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
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of product builds, strategic analyses, and academic research 
            demonstrating hands-on AI product management and strategic thinking.
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

        <div className="text-center mt-12 relative z-20">
          <Button 
            size="lg" 
            className="group hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => navigate('/projects')}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;