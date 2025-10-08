import { ExternalLink, Calendar, MapPin, Building2, Briefcase, TrendingUp } from "lucide-react";
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-l from-accent/8 to-primary/8 rounded-xl rotate-45 animate-bounce"></div>
        
        {/* Orbital rings */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-primary/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 border border-accent/10 rounded-full animate-spin-reverse"></div>
        
        {/* Gradient lines */}
        <div className="absolute top-40 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-fade-in-out"></div>
        <div className="absolute bottom-40 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-accent/25 to-transparent animate-fade-in-out-delay"></div>
        
        {/* Floating dots */}
        <div className="absolute top-60 left-20 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 right-32 w-3 h-3 bg-accent/30 rounded-full animate-float-delay"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient font-display">Experience</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into reality through strategic product management and data-driven growth
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/20 via-accent/40 to-primary/20 animate-draw-line"></div>
          
          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-all duration-300 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-20"></div>
                </div>
                
                {/* Experience Card */}
                <div className="ml-20 bg-card/60 backdrop-blur-md rounded-2xl p-8 border border-border/50 group-hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:bg-card/80 group-hover:-translate-y-2">
                  
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      {/* Role Title */}
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
                        {exp.role}
                      </h3>
                      
                      {/* Company Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Building2 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-lg font-semibold text-accent">{exp.company}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-accent">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {exp.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.techStack.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="px-3 py-1 text-sm bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all duration-300 font-medium"
                        style={{ animationDelay: `${(index * 0.15) + (i * 0.05)}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Impact driven results</span>
                    </div>
                    
                    <a 
                      href={exp.website}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:text-accent/80 bg-accent/10 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-105 group/link"
                    >
                      <span>Learn more</span>
                      <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;