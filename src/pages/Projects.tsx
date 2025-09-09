import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import aiTravelImage from "@/assets/project-ai-travel.jpg";
import linkedinImage from "@/assets/project-linkedin.jpg";
import cybersecurityImage from "@/assets/project-cybersecurity.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI Travel Planner MVP",
      tagline: "Cavo - Personalized Trip Planning",
      description: "Led end-to-end product development for AI-powered travel planning platform. Conducted extensive user research, defined MVP scope, and launched with 85% user satisfaction rate in beta testing.",
      image: aiTravelImage,
      metrics: [
        "85% user satisfaction in beta testing",
        "23% increase in trip booking completion",
        "40% reduction in planning time",
        "12% conversion from free to paid plans"
      ],
      tags: ["AI/ML", "MVP Design", "User Research", "Product Strategy", "Growth"],
      slug: "ai-travel-planner",
      featured: true,
    },
    {
      title: "LinkedIn Product Teardown",
      tagline: "UX Analysis & Competitive Intelligence",
      description: "Comprehensive product analysis of LinkedIn's feed algorithm, engagement patterns, and user experience. Identified key improvement opportunities and validated prototype concepts.",
      image: linkedinImage,
      metrics: [
        "15+ UX improvement recommendations",
        "Competitive analysis across 5 platforms",
        "3 prototype concepts validated",
        "90% stakeholder buy-in on recommendations"
      ],
      tags: ["Product Analysis", "UX Research", "Competitive Intelligence", "Prototyping"],
      slug: "linkedin-analysis",
    },
    {
      title: "Cybersecurity Analytics Dashboard",
      tagline: "Risk Assessment Platform",
      description: "Designed and launched enterprise security analytics dashboard focused on threat identification and risk assessment. Led cross-functional team to deliver intuitive data visualization.",
      image: cybersecurityImage,
      metrics: [
        "60% faster threat identification",
        "35% improvement in analyst efficiency", 
        "92% user adoption rate",
        "$500K annual cost savings identified"
      ],
      tags: ["Data Visualization", "Enterprise UX", "Analytics", "B2B SaaS"],
      slug: "cybersecurity-dashboard",
    },
  ];

  const categories = [
    "All Projects",
    "AI/ML",
    "Product Analysis", 
    "Enterprise UX",
    "MVP Design",
    "Data Visualization"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Deep dives into product management work spanning AI/ML products, 
            UX research, analytics platforms, and growth initiatives. Each case 
            study follows a structured approach: Problem → Research → Solution → Impact.
          </p>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "All Projects" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
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

        {/* Process Overview */}
        <div className="bg-gradient-card rounded-2xl p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            My Product Management Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Problem Discovery</h3>
              <p className="text-sm text-muted-foreground">
                User research, market analysis, and stakeholder interviews
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Research & Validation</h3>
              <p className="text-sm text-muted-foreground">
                Hypothesis testing, prototype validation, and data analysis
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Solution Design</h3>
              <p className="text-sm text-muted-foreground">
                MVP scoping, technical requirements, and go-to-market strategy
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Measure & Iterate</h3>
              <p className="text-sm text-muted-foreground">
                KPI tracking, user feedback analysis, and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;