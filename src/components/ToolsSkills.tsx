import { Code, Database, BarChart3, Users, Zap, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ToolsSkills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Brain,
      skills: ["Product Strategy & Roadmap", "User Growth", "E-commerce Funnel Optimization", "A/B Testing", "Data-Driven Decision Making", "CRO", "UI/UX Optimization"]
    },
    {
      title: "Data & Analytics", 
      icon: BarChart3,
      skills: ["SQL", "Python (Pandas, NumPy)", "Tableau", "Power BI", "Excel", "Amplitude", "Google Analytics", "JASP"]
    },
    {
      title: "Technical & AI",
      icon: Zap,
      skills: ["LLMs", "Generative AI", "RAG", "LangChain", "Prompt Engineering", "AI Product Strategy", "APIs", "Lovable.dev"]
    },
    {
      title: "Development & Tools",
      icon: Code,
      skills: ["Python", "DBMS", "Data Warehouse & Data Mining", "Mobile Application Development", "Git/GitHub", "JIRA"]
    },
    {
      title: "Design & Collaboration",
      icon: Database,
      skills: ["Figma", "Notion", "Trello", "NotebookLM", "Miro", "Slack", "ClickUp", "Wireframing"]
    },
    {
      title: "Frameworks & Methodologies",
      icon: Users,
      skills: ["Agile & Scrum", "Product Lifecycle Management", "User Research", "RICE & OKR Frameworks", "GTM Strategy", "Stakeholder Communication"]
    }
  ];

  const certifications = [
    "Certified Scrum Product Owner (CSPO)",
    "MBA in Business Analytics & Marketing (In Progress)",
    "BTech in Computer Science Engineering",
    "Data Analysis & IT Transformation Specialist"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Motion Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-2xl animate-pulse-glow"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 bg-gradient-to-tl from-accent/4 to-transparent rounded-full blur-3xl animate-drift"></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 border border-primary/10 rounded-lg animate-float transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-20 w-28 h-28 border border-accent/8 rounded-full animate-orbital-rotation"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-primary/15 via-transparent to-accent/10 animate-twinkle"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Tools & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and scaling successful products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 hover-scale transition-all duration-300">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover-scale transition-all duration-300"
                      style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <Card className="card-gradient p-8 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: "0.9s" }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications & Credentials</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={cert} 
                  variant="outline" 
                  className="px-4 py-2 hover-scale transition-all duration-300"
                  style={{ animationDelay: `${0.9 + (index * 0.1)}s` }}
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ToolsSkills;