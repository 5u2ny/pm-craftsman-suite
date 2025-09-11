import ProjectCard from "./ProjectCard";
import aiTravelImage from "@/assets/project-ai-travel.jpg";
import linkedinImage from "@/assets/project-linkedin.jpg";
import cybersecurityImage from "@/assets/project-cybersecurity.jpg";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "AI Travel Planner MVP",
      tagline: "Cavo - Personalized Trip Planning",
      description: "Led product strategy for AI-powered travel planning platform, conducting user research and designing MVP that validates product-market fit.",
      image: aiTravelImage,
      metrics: [
        "85% user satisfaction in beta testing",
        "23% increase in trip booking completion",
        "40% reduction in planning time"
      ],
      tags: ["AI/ML", "MVP Design", "User Research", "Product Strategy"],
      slug: "ai-travel-planner",
      featured: true,
    },
    {
      title: "LinkedIn Product Teardown",
      tagline: "UX Analysis & Competitive Intelligence",
      description: "Comprehensive analysis of LinkedIn's feed algorithm and engagement patterns, identifying key improvement opportunities.",
      image: linkedinImage,
      metrics: [
        "15+ UX improvement recommendations",
        "Competitive analysis across 5 platforms",
        "3 prototype concepts validated"
      ],
      tags: ["Product Analysis", "UX Research", "Competitive Intelligence"],
      slug: "linkedin-analysis",
    },
    {
      title: "Cybersecurity Dashboard",
      tagline: "Risk Assessment Analytics Platform",
      description: "Designed and launched security analytics dashboard for enterprise risk assessment, focusing on data visualization and user experience.",
      image: cybersecurityImage,
      metrics: [
        "60% faster threat identification",
        "35% improvement in analyst efficiency",
        "92% user adoption rate"
      ],
      tags: ["Data Visualization", "Enterprise UX", "Analytics"],
      slug: "cybersecurity-dashboard",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Product management work spanning AI/ML products, UX research, 
            and data-driven growth initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <p className="text-muted-foreground mb-4">
            Want to see more detailed case studies?
          </p>
          <a
            href="/projects"
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View All Projects
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;