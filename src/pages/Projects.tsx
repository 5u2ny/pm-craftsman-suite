import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import aiTravelImage from "@/assets/project-ai-travel.jpg";
import linkedinImage from "@/assets/project-linkedin.jpg";
import cybersecurityImage from "@/assets/project-cybersecurity.jpg";
import colonialWilliamsburgImage from "@/assets/colonial-williamsburg.jpg";
import openaiLogo from "@/assets/openai-logo.png";
import southKoreaEconomy from "@/assets/south-korea-economy.jpg";
import cyberRiskImage from "@/assets/cyber-risk-assessment.jpg";
import energyoneObImage from "@/assets/energyone-ob.jpg";
import airlinesDataImage from "@/assets/airlines-data-analysis.jpg";
import brewscoveryImage from "@/assets/brewscovery-project.jpg";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Brewscovery – Craft Beer Subscription Model",
      tagline: "MBA Sprint Week, Fall 2024",
      description: "Served as Market Strategy Designer and Presentation/Media Developer, co-owning GTM development, financial modeling, and building the final pitch deck and demo video. Co-developed a scalable, investor-ready subscription strategy for Brewscovery, targeting niche D2C beer markets with focus on GTM, influencer outreach, and financial validation.",
      image: brewscoveryImage,
      metrics: [
        "Built forecast model for 10K subscribers and $1.5M profit in Year 1",
        "Led scenario planning with upside projections up to $9.6M",
        "Selected as Top 4 team for final pitch to Domino's Global Strategy Chief"
      ],
      tags: ["Marketing Strategy", "Financial Modeling", "GTM Strategy", "Subscription Business"],
      slug: "brewscovery-subscription",
      category: "MBA Research",
      pdfLink: "/projects/BeerProject.pdf"
    },
    {
      title: "Airlines Customer Satisfaction Analysis",
      tagline: "MBA Data Analysis Project, Fall 2024",
      description: "Served as Data Analyst and Visual Storytelling Owner, performing all statistical modeling and building the insight presentation from scratch. Executed a data-driven study on airline service ratings using a Kaggle dataset with 5,000 samples to identify predictors of satisfaction and recommend quality improvements.",
      image: airlinesDataImage,
      metrics: [
        "Applied t-tests, ANOVA, and regression via JASP for hypothesis testing",
        "Identified service class as strongest predictor of check-in satisfaction",
        "Built predictive models for satisfaction across customer segments"
      ],
      tags: ["Data Analysis", "Statistical Modeling", "JASP", "Hypothesis Testing", "Predictive Analytics"],
      slug: "airlines-customer-satisfaction",
      category: "MBA Research",
      pdfLink: "/projects/DataAnalysis.pdf"
    },
    {
      title: "EnergyOne America Employee Performance & Commitment",
      tagline: "MBA Organizational Behavior, Fall 2024",
      description: "Served as Behavioral Research Contributor, conducting field interviews and OB analysis for a leading insulation contractor. Analyzed organizational behavior and employee engagement to surface insights and recommend improvement strategies.",
      image: energyoneObImage,
      metrics: [
        "Conducted qualitative employee interviews across multiple roles",
        "Applied OB frameworks at group and organizational level",
        "Developed phased rollout roadmap for satisfaction gains"
      ],
      tags: ["Organizational Behavior", "Employee Engagement", "Qualitative Research", "Change Management"],
      slug: "energyone-organizational-behavior",
      category: "MBA Research",
      pdfLink: "/projects/OB.pdf"
    },
    {
      title: "Reconnaissance Healthcare Cyber Risk Assessment",
      tagline: "MBA Sprint Week, Spring 2025",
      description: "Served as Risk Modeling Analyst and Executive Deck Developer, leading FAIR-based risk quantification and board-level presentation design. Led cyber risk modeling for a simulated healthcare provider, using FAIR to evaluate PHI/PII threats, ransomware risks, and vendor dependencies.",
      image: cyberRiskImage,
      metrics: [
        "Applied FAIR to quantify risk magnitude and breach probability",
        "Proposed a $1M investment plan with $546M protected value",
        "Projected $17M reduction in annualized cyber loss"
      ],
      tags: ["Quantitative Risk Analysis", "Cyber Risk Modeling", "FAIR Analysis", "Healthcare Security"],
      slug: "cyber-risk-assessment",
      category: "MBA Research",
      pdfLink: "/projects/Cyber_Risk_Assessment.pdf"
    },
    {
      title: "South Korea Demographic Transition & Economic Policy",
      tagline: "MBA Business, Govt & Global Economy, Spring 2025",
      description: "Served as Data & Policy Researcher and Presentation Design Lead, conducting analytics-driven policy analysis assessing South Korea's aging population and its effects on labor share, productivity, and GDP growth.",
      image: southKoreaEconomy,
      metrics: [
        "Regression models built",
        "Multi-source data analysis (KOSIS, KOSTAT, World Bank)",
        "Policy recommendations delivered"
      ],
      tags: ["Economic Analysis", "Demographic Forecasting", "Regression Analysis", "Policy Research"],
      slug: "south-korea-economic-policy",
      category: "MBA Research",
      pdfLink: "/projects/Econ.pdf"
    },
    {
      title: "OpenAI ChatGPT Competitive Strategy",
      tagline: "MBA Global Competitive Strategy, Spring 2025",
      description: "Served as Lead Strategist & Research Contributor, completing a multi-phase strategic analysis and implementation plan focused on OpenAI's ChatGPT Strategic Business Unit using PESTEL, Porter's Five Forces, VRIO, and SWOT frameworks.",
      image: openaiLogo,
      metrics: [
        "Multi-framework strategic analysis",
        "Competitive positioning assessment",
        "Implementation roadmap developed"
      ],
      tags: ["Business Frameworks", "Competitive Strategy", "Market Positioning", "Strategic Planning"],
      slug: "openai-competitive-strategy",
      category: "MBA Research",
      pdfLinks: [
        { name: "Phase 1: External & Internal Analysis", url: "/projects/GP1.pdf" },
        { name: "Phase 2: Strategy Development", url: "/projects/GP2.pdf" },
        { name: "Phase 3: Implementation Plan", url: "/projects/GP3.pdf" }
      ]
    },
    {
      title: "Colonial Williamsburg Marketing Research",
      tagline: "MBA Marketing Research, Spring 2025",
      description: "Served as Research Design Lead and Predictive Modeling Contributor, collaborating on a full-cycle marketing research plan to support visitor engagement strategy for Colonial Williamsburg. Developed 3-stage research framework and defined visitor segments to guide marketing strategy.",
      image: colonialWilliamsburgImage,
      metrics: [
        "3-stage research framework developed",
        "43 survey respondents analyzed",
        "Multiple visitor segments identified"
      ],
      tags: ["Marketing Research", "Predictive Modeling", "Survey Design", "Statistical Analysis"],
      slug: "mba-marketing-research",
      category: "MBA Research",
      pdfLink: "/projects/Marketing_Research_Project.pdf"
    },
    {
      title: "AI Travel Planner MVP",
      tagline: "Cavo - Personalized Trip Planning",
      description: "Built an AI-powered travel planning platform that creates personalized itineraries using machine learning algorithms and real-time data integration.",
      image: aiTravelImage,
      metrics: [
        "40% reduction in planning time",
        "85% user satisfaction rate",
        "150K+ itineraries generated"
      ],
      tags: ["AI/ML", "Product Management", "User Experience", "API Integration"],
      slug: "ai-travel-planner",
      category: "AI Products"
    },
    {
      title: "LinkedIn Product Analysis",
      tagline: "UX Analysis & Competitive Intelligence",
      description: "Developed a LinkedIn analytics and growth tool that helps professionals optimize their content strategy and network growth.",
      image: linkedinImage,
      metrics: [
        "300% increase in engagement",
        "50K+ active users",
        "2M+ posts analyzed"
      ],
      tags: ["Social Media", "Analytics", "Growth", "SaaS"],
      slug: "linkedin-analysis",
      category: "SaaS Products"
    },
    {
      title: "Cybersecurity Analytics Dashboard",
      tagline: "Enterprise Security Analytics Platform",
      description: "Designed and launched a comprehensive cybersecurity analytics platform for enterprise clients, focusing on threat detection and risk assessment.",
      image: cybersecurityImage,
      metrics: [
        "60% faster threat detection",
        "99.9% uptime achieved",
        "500+ enterprise users"
      ],
      tags: ["Security", "Analytics", "Enterprise", "Dashboard"],
      slug: "cybersecurity-dashboard",
      category: "Enterprise Solutions"
    },
  ];

  const categories = ["All", "MBA Research", "AI Products", "SaaS Products", "Enterprise Solutions"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.08] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/[0.06] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              A showcase of products I've built and managed, from AI-powered platforms to enterprise solutions. 
              Each project demonstrates my approach to problem-solving and product development.
            </p>
            
            <div className="flex justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">
                  View Detailed Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 hover-scale transition-all duration-300 text-sm font-medium"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities and collaborate on innovative projects. 
            Let's connect and explore how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;