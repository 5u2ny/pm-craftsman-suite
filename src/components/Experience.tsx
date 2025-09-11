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
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            My professional journey and key roles. Click on a card to learn more about each position.
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Date */}
              <div className="text-sm text-muted-foreground mb-2">
                {exp.period}
              </div>
              
              {/* Company Website Link */}
              <div className="mb-4">
                <a 
                  href={exp.website}
                  className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors w-fit"
                >
                  Visit {exp.company} website
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Job Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {exp.role}
              </h3>
              
              {/* Company */}
              <p className="text-lg text-primary font-medium mb-4">
                {exp.company}
              </p>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>
              
              {/* Tech Stack */}
              <div className="space-y-2 mb-6">
                {exp.techStack.map((tech, i) => (
                  <div key={i} className="inline-block mr-4 mb-2 text-sm text-foreground">
                    {tech}
                  </div>
                ))}
              </div>
              
              {/* View Details */}
              <button className="text-primary hover:text-primary/80 text-sm flex items-center gap-1 transition-colors">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;