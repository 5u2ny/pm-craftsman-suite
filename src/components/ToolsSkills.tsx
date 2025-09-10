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
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
              <Card key={category.title} className="card-gradient p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <Card className="card-gradient p-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications & Credentials</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <Badge key={cert} variant="outline" className="px-4 py-2">
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