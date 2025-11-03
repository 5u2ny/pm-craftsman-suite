import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { toast } from "sonner";
import colonialWilliamsburgImage from "@/assets/colonial-williamsburg.jpg";
import openaiStrategyImage from "@/assets/openai-strategy.jpg";
import southKoreaEconomy from "@/assets/south-korea-economy.jpg";
import cyberRiskImage from "@/assets/cyber-risk-assessment.jpg";
import energyoneObImage from "@/assets/energyone-ob.jpg";
import airlinesDataImage from "@/assets/airlines-data-analysis.jpg";
import brewscoveryImage from "@/assets/brewscovery-project.jpg";
import retailSegmentationImage from "@/assets/retail-segmentation-ml.jpg";
import seismixImage from "@/assets/seismix-project.jpg";
import cavoHeroImage from "@/assets/cavo-hero.jpg";
import linkedinImage from "@/assets/project-linkedin.jpg";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "LinkedIn's Unmet Feature Landscape",
      tagline: "PRODUCT ANALYSIS, 2018-2025",
      description: "Comprehensive 7-year analysis synthesizing 164+ data points from user feedback and market research to identify critical feature gaps and business model conflicts",
      image: linkedinImage,
      metrics: [
        "164+ data points analyzed across multiple sources",
        "20+ feature recommendations with feasibility scoring",
        "7-year longitudinal study of platform evolution"
      ],
      tags: ["Product Analysis", "UX Research", "Data Analysis", "Strategy"],
      slug: "linkedin-product-analysis",
      category: "Case Studies",
      pdfLink: "/projects/LinkedIn_Case_Study.pdf"
    },
    {
      title: "Cavo – AI Travel Companion",
      tagline: "AI PRODUCT MANAGER, SUMMER INTERNSHIP 2025",
      description: "Leading development of an AI-powered travel companion with emotional-safety logic and dynamic itinerary generation",
      image: cavoHeroImage,
      metrics: [
        "Designed adaptive itinerary builder with contextual AI reasoning",
        "Built emotional safety modes tuned to user mood and context",
        "Architected zero-budget MVP using LangChain and modular prompts"
      ],
      tags: ["AI Product Management", "LLM Systems", "UX Design", "Product Strategy"],
      slug: "cavo-ai-travel",
      category: "Products"
    },
    {
      title: "Retail Stores Customer Segmentation using ML and K-Cluster Algorithms",
      tagline: "Undergraduate Project, Spring 2021",
      description: "Applied machine learning clustering algorithms to identify behavioral customer segments for targeted marketing strategies",
      image: retailSegmentationImage,
      metrics: [
        "Implemented Python-based k-Means model for 7 behavioral clusters",
        "Labeled segments including Revolvers, VIPs, and Low-Tenure customers",
        "Highlighted two high-credit segments ideal for targeted offers"
      ],
      tags: ["Python", "Machine Learning", "K-Means", "Customer Segmentation"],
      slug: "retail-customer-segmentation",
      category: "CS Engineering"
    },
    {
      title: "Seismix – Earthquake Detection MVP",
      tagline: "UNDERGRADUATE PROJECT, FALL 2018",
      description: "Led team developing earthquake detection MVP using Arduino hardware, sensors, and real-time data visualization",
      image: seismixImage,
      metrics: [
        "Integrated accelerometer-based detection with alert thresholds",
        "Built visualization using Processing IDE for x-y-z tremor plotting",
        "Awarded 1st prize among 60+ teams for innovation and execution"
      ],
      tags: ["IoT", "Arduino", "Python", "Hardware Integration"],
      slug: "seismix-earthquake-detection",
      category: "CS Engineering"
    },
    {
      title: "Brewscovery – Craft Beer Subscription Model",
      tagline: "MBA Sprint Week, Fall 2024",
      description: "Designed investor-ready craft beer subscription model with comprehensive financial projections and go-to-market strategy",
      image: brewscoveryImage,
      metrics: [
        "Built forecast model for 10K subscribers and $1.5M profit in Year 1",
        "Led scenario planning with upside projections up to $9.6M",
        "Selected as Top 4 team for final pitch to Domino's Global Strategy Chief"
      ],
      tags: ["Marketing Strategy", "Financial Modeling", "GTM Strategy", "Subscription Business"],
      slug: "brewscovery-subscription",
      category: "MBA",
      pdfLink: "/projects/BeerProject.pdf"
    },
    {
      title: "Airlines Customer Satisfaction Analysis",
      tagline: "MBA Data Analysis Project, Fall 2024",
      description: "Applied statistical modeling and hypothesis testing to identify key predictors of airline customer satisfaction",
      image: airlinesDataImage,
      metrics: [
        "Applied t-tests, ANOVA, and regression via JASP for hypothesis testing",
        "Identified service class as strongest predictor of check-in satisfaction",
        "Built predictive models for satisfaction across customer segments"
      ],
      tags: ["Data Analysis", "Statistical Modeling", "JASP", "Hypothesis Testing", "Predictive Analytics"],
      slug: "airlines-customer-satisfaction",
      category: "MBA",
      pdfLink: "/projects/DataAnalysis.pdf"
    },
    {
      title: "EnergyOne America Employee Performance & Commitment",
      tagline: "MBA Organizational Behavior, Fall 2024",
      description: "Conducted employee interviews and applied organizational behavior frameworks to develop phased improvement roadmap",
      image: energyoneObImage,
      metrics: [
        "Conducted qualitative employee interviews across multiple roles",
        "Applied OB frameworks at group and organizational level",
        "Developed phased rollout roadmap for satisfaction gains"
      ],
      tags: ["Organizational Behavior", "Employee Engagement", "Qualitative Research", "Change Management"],
      slug: "energyone-organizational-behavior",
      category: "MBA",
      pdfLink: "/projects/OB.pdf"
    },
    {
      title: "Reconnaissance Healthcare Cyber Risk Assessment",
      tagline: "MBA Sprint Week, Spring 2025",
      description: "Applied FAIR methodology to quantify healthcare cyber risks and propose comprehensive investment strategies",
      image: cyberRiskImage,
      metrics: [
        "Applied FAIR to quantify risk magnitude and breach probability",
        "Proposed a $1M investment plan with $546M protected value",
        "Projected $17M reduction in annualized cyber loss"
      ],
      tags: ["Quantitative Risk Analysis", "Cyber Risk Modeling", "FAIR Analysis", "Healthcare Security"],
      slug: "cyber-risk-assessment",
      category: "MBA",
      pdfLink: "/projects/Cyber_Risk_Assessment.pdf"
    },
    {
      title: "South Korea Demographic Transition & Economic Policy",
      tagline: "MBA Business, Govt & Global Economy, Spring 2025",
      description: "Built regression models analyzing demographic transition impact on GDP with policy recommendations for economic reform",
      image: southKoreaEconomy,
      metrics: [
        "Regression models built",
        "Multi-source data analysis (KOSIS, KOSTAT, World Bank)",
        "Policy recommendations delivered"
      ],
      tags: ["Economic Analysis", "Demographic Forecasting", "Regression Analysis", "Policy Research"],
      slug: "south-korea-economic-policy",
      category: "MBA",
      pdfLink: "/projects/Econ.pdf"
    },
    {
      title: "OpenAI ChatGPT Competitive Strategy",
      tagline: "MBA Global Competitive Strategy, Spring 2025",
      description: "Strategic analysis using multiple business frameworks with implementation roadmap for competitive positioning",
      image: openaiStrategyImage,
      metrics: [
        "Multi-framework strategic analysis",
        "Competitive positioning assessment",
        "Implementation roadmap developed"
      ],
      tags: ["Business Frameworks", "Competitive Strategy", "Market Positioning", "Strategic Planning"],
      slug: "openai-competitive-strategy",
      category: "MBA",
      pdfLinks: [
        { name: "Phase 1: External & Internal Analysis", url: "/projects/GP1.pdf" },
        { name: "Phase 2: Strategy Development", url: "/projects/GP2.pdf" },
        { name: "Phase 3: Implementation Plan", url: "/projects/GP3.pdf" }
      ]
    },
    {
      title: "Colonial Williamsburg Marketing Research",
      tagline: "MBA Marketing Research, Spring 2025",
      description: "Led marketing research combining qualitative and quantitative methods with predictive modeling to identify visitor segments",
      image: colonialWilliamsburgImage,
      metrics: [
        "3-stage research framework developed",
        "43 survey respondents analyzed",
        "Multiple visitor segments identified"
      ],
      tags: ["Marketing Research", "Predictive Modeling", "Survey Design", "Statistical Analysis"],
      slug: "mba-marketing-research",
      category: "MBA",
      pdfLink: "/projects/Marketing_Research_Project.pdf"
    },
  ];

  const categories = ["All", "Products", "MBA", "CS Engineering", "Case Studies"];
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Enhanced Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Floating gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.08] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/[0.06] rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/[0.04] rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 right-20 w-24 h-24 border border-primary/10 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 border border-accent/15 rounded-full animate-spin-reverse"></div>
          
          {/* Floating particles */}
          <div className="absolute top-40 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
          <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float-delay"></div>
          <div className="absolute top-60 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              My <span className="text-gradient">Projects & Case Studies</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive showcase of product management case studies, research projects, and academic work. 
              Each demonstrates analytical thinking, strategic planning, and data-driven problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up">
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              const isCaseStudies = category === "Case Studies";
              
              return (
                <div
                  key={category}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Badge
                    variant={isActive ? "default" : "outline"}
                    className={`
                      cursor-pointer px-8 py-3.5 text-base font-space-grotesk font-semibold uppercase tracking-wide
                      transition-all duration-500 ease-out
                      relative overflow-hidden
                      ${isActive 
                        ? 'shadow-2xl shadow-primary/40 scale-110 bg-gradient-to-r from-primary to-primary/80 border-primary/50' 
                        : 'hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/60 hover:-translate-y-1'
                      }
                      ${isCaseStudies ? 'border-accent/60 hover:border-accent hover:shadow-accent/20' : ''}
                    `}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {/* Shimmer effect on hover */}
                    <span className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                      -translate-x-full group-hover:translate-x-full transition-transform duration-1000
                      ${isActive ? 'animate-shimmer' : ''}
                    `} />
                    
                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      {isCaseStudies && <Sparkles className="w-4 h-4 animate-pulse" />}
                      {category}
                      {isCaseStudies && <Sparkles className="w-4 h-4 animate-pulse" />}
                    </span>
                    
                    {/* Active indicator line */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-background/30 rounded-full animate-pulse" />
                    )}
                  </Badge>
                  
                  {/* Hover glow effect */}
                  <div className={`
                    absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    ${isCaseStudies ? 'bg-accent/20' : 'bg-primary/20'}
                    -z-10
                  `} />
                </div>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.slug} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground animate-fade-in">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            I'm always excited to discuss new opportunities and collaborate on innovative projects. 
            Let's connect and explore how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="hover-scale hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-scale hover:shadow-lg transition-all duration-300">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;