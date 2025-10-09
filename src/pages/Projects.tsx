import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import colonialWilliamsburgImage from "@/assets/colonial-williamsburg.jpg";
import openaiStrategyImage from "@/assets/openai-strategy.jpg";
import southKoreaEconomy from "@/assets/south-korea-economy.jpg";
import cyberRiskImage from "@/assets/cyber-risk-assessment.jpg";
import energyoneObImage from "@/assets/energyone-ob.jpg";
import airlinesDataImage from "@/assets/airlines-data-analysis.jpg";
import brewscoveryImage from "@/assets/brewscovery-project.jpg";
import retailSegmentationImage from "@/assets/retail-segmentation-ml.jpg";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Retail Stores Customer Segmentation using ML and K-Cluster Algorithms",
      tagline: "Undergraduate Research, Spring 2021",
      description: "Developed a machine learning customer segmentation model for retail stores using Python and k-Means clustering algorithms. Analyzed 8,950 customer records to identify seven distinct behavioral segments including high-value VIPs, revolvers, and low-tenure customers. Provided actionable insights for targeted marketing campaigns and loyalty optimization strategies based on credit behavior patterns.",
      image: retailSegmentationImage,
      metrics: [
        "Implemented Python-based k-Means model for 7 behavioral clusters",
        "Labeled segments including Revolvers, VIPs, and Low-Tenure customers",
        "Highlighted two high-credit segments ideal for targeted offers"
      ],
      tags: ["Python", "Machine Learning", "K-Means", "Customer Segmentation"],
      slug: "retail-customer-segmentation",
      category: "Undergrad"
    },
    {
      title: "Brewscovery – Craft Beer Subscription Model",
      tagline: "MBA Sprint Week, Fall 2024",
      description: "Created a comprehensive business strategy for a craft beer subscription service targeting D2C markets. Led market strategy design, financial modeling, and GTM development including influencer partnerships and regional growth playbooks. Built complete financial forecasts projecting $4.8M revenue and $1.5M profit in Year 1 with 10,000 subscribers. Selected as Top 4 team to pitch to Domino's Global Strategy Chief.",
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
      description: "Conducted comprehensive statistical analysis on airline customer satisfaction using a Kaggle dataset of 5,000 samples from 129,880 records. Applied t-tests, ANOVA, and regression analysis via JASP to test four hypotheses about factors affecting satisfaction. Identified service class as the strongest predictor of check-in satisfaction and developed actionable recommendations for improving economy class experience.",
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
      description: "Conducted organizational behavior research for EnergyOne America, a leading insulation contractor, focusing on employee performance and commitment. Performed qualitative field interviews across multiple roles and applied OB frameworks at group and organizational levels. Developed a phased implementation roadmap with recommendations for improving employee satisfaction, engagement, and retention based on behavioral insights.",
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
      description: "Led comprehensive cyber risk assessment for a simulated healthcare provider using FAIR (Factor Analysis of Information Risk) methodology. Quantified risks related to PHI/PII breaches, ransomware attacks, and third-party vendor dependencies. Developed board-level executive presentation proposing $1M security investment with projected $17M reduction in annualized cyber loss and $546M in protected value.",
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
      description: "Analyzed South Korea's demographic transition and its economic implications using multi-source data from KOSIS, KOSTAT, and World Bank. Built regression models to assess impacts on labor share, productivity, and GDP growth. Developed comprehensive policy recommendations addressing aging population challenges including workforce development, immigration reform, and social support systems to sustain economic growth.",
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
      description: "Developed comprehensive three-phase strategic analysis for OpenAI's ChatGPT business unit using multiple business frameworks. Conducted external analysis with PESTEL and Porter's Five Forces, internal assessment with VRIO framework, and SWOT analysis. Created detailed strategy development plan and implementation roadmap addressing competitive positioning, market opportunities, and sustainable competitive advantages in the AI industry.",
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
      description: "Designed and executed full-cycle marketing research project for Colonial Williamsburg to enhance visitor engagement. Developed three-stage research framework combining qualitative and quantitative methods, analyzed 43 survey respondents, and applied predictive modeling to identify distinct visitor segments. Delivered actionable insights and strategic recommendations for targeted marketing campaigns and visitor experience optimization.",
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

  const categories = ["All", "MBA", "Undergrad"];

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
              A showcase of research projects and academic work from my MBA and undergraduate studies. 
              Each project demonstrates analytical thinking, strategic planning, and data-driven problem-solving.
            </p>
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