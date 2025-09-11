import { ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Lead AI Product Manager Intern",
      company: "IPSERLAB",
      location: "Dallas, TX",
      period: "May 2025 - Ongoing",
      website: "#",
      description: "Leading AI-powered travel planning platform development from 0-to-1 at stealth-stage startup, architecting multi-disciplinary teams and ownership models.",
      techStack: ["Product Strategy", "AI/ML", "RICE Framework", "Team Leadership", "0-to-1 Development"]
    },
    {
      role: "Product Analyst (Growth Marketing Specialist)",
      company: "ASANIFY",
      location: "Kolkata, India", 
      period: "Sep 2022 - Aug 2023",
      website: "#",
      description: "Spearheaded CRM automation and audience segmentation strategy for HR and Payroll automation software serving small to medium-sized businesses.",
      techStack: ["CRM Automation", "Tableau", "Product-Led Growth", "Revenue Optimization", "Lead Conversion"]
    },
    {
      role: "Business Development Associate",
      company: "YOCKET", 
      location: "Mumbai, India",
      period: "Mar 2022 - Sep 2022", 
      website: "#",
      description: "Collaborated with product team to redesign user qualification journeys for India's largest community-based platform for study-abroad aspirants.",
      techStack: ["User Journey Design", "LinkedIn Analytics", "Conversion Optimization", "Data-Driven Strategy"]
    },
    {
      role: "Product-led Growth Analyst (Growth Partner)",
      company: "LEADLE",
      location: "Chennai, India",
      period: "Oct 2021 - Mar 2022",
      website: "#", 
      description: "Optimized user activation paths analyzing churn signals and MVP-stage feedback for B2B SaaS platform providing product-led growth tools and analytics.",
      techStack: ["B2B SaaS", "Churn Analysis", "Lead Capture", "Growth Analytics", "User Activation"]
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Motion Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-24 h-24 border border-primary/8 rounded-full animate-orbital-rotation"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/10 rounded-lg animate-float transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/12 rounded-full animate-drift"></div>
        <div className="absolute top-20 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-slide-up"></div>
        <div className="absolute bottom-20 right-1/3 w-px h-16 bg-gradient-to-t from-transparent via-accent/15 to-transparent animate-fade-in"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            My professional journey and key roles. Click on a card to learn more about each position.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group animate-slide-up bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:bg-card/70 transition-all duration-500 border border-border/50 hover:border-primary/20 hover:shadow-xl hover-lift" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  {/* Company and Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  {/* Company */}
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-lg text-accent font-semibold">
                      {exp.company}
                    </p>
                    <span className="text-sm text-muted-foreground">• {exp.location}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs bg-accent/10 text-accent border-accent/20 hover-scale transition-all duration-300"
                        style={{ animationDelay: `${(index * 0.2) + (i * 0.05)}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* View Details */}
                <div className="flex items-center justify-between mt-4 md:mt-0 md:flex-col md:items-end gap-2">
                  <a 
                    href={exp.website}
                    className="text-accent hover:text-accent/80 text-sm flex items-center gap-1 transition-all duration-300 hover-scale story-link"
                  >
                    Visit website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;