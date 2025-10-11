import { Code2, Database, BarChart3, Users2, Zap, Brain, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
const ToolsSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const skillCategories = [{
    title: "Product Management",
    icon: Brain,
    skills: ["Product Strategy & Roadmap", "User Growth", "E-commerce Funnel Optimization", "A/B Testing", "Data-Driven Decision Making", "CRO", "UI/UX Optimization"]
  }, {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: ["SQL", "Python (Pandas, NumPy)", "Tableau", "Power BI", "Excel", "Amplitude", "Google Analytics", "JASP"]
  }, {
    title: "Technical & AI",
    icon: Zap,
    skills: ["LLMs", "Generative AI", "RAG", "LangChain", "Prompt Engineering", "AI Product Strategy", "APIs", "Lovable.dev"]
  }, {
    title: "Development & Tools",
    icon: Code2,
    skills: ["Python", "DBMS", "Data Warehouse & Data Mining", "Mobile Application Development", "Git/GitHub", "JIRA"]
  }, {
    title: "Design & Collaboration",
    icon: Database,
    skills: ["Figma", "Notion", "Trello", "NotebookLM", "Miro", "Slack", "ClickUp", "Wireframing"]
  }, {
    title: "Frameworks & Methodologies",
    icon: Users2,
    skills: ["Agile & Scrum", "Product Lifecycle Management", "User Research", "RICE & OKR Frameworks", "GTM Strategy", "Stakeholder Communication"]
  }];
  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };
  const handleCategoryClick = (categoryTitle: string) => {
    setActiveCategory(prev => prev === categoryTitle ? null : categoryTitle);
  };
  return <section className="py-12 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Motion Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-2xl animate-pulse-glow"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 bg-gradient-to-tl from-accent/4 to-transparent rounded-full blur-3xl animate-drift"></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 border border-primary/10 rounded-lg animate-float transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-20 w-28 h-28 border border-accent/8 rounded-full animate-orbital-rotation"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-primary/15 via-transparent to-accent/10 animate-twinkle"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Tools & Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and expertise I use to bring products to life
          </p>
          
          
          {selectedSkills.length > 0 && <div className="mt-4 animate-fade-in">
              <Badge variant="default" className="text-sm px-4 py-2 animate-scale-in">
                ✨ {selectedSkills.length} skill{selectedSkills.length > 1 ? 's' : ''} selected
              </Badge>
            </div>}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          const isActive = activeCategory === category.title;
          return <Card key={category.title} className={`card-gradient p-6 animate-slide-up transition-all duration-500 cursor-pointer group relative overflow-hidden ${isActive ? 'ring-2 ring-primary shadow-2xl scale-[1.02] border-primary/50' : 'hover-lift hover:shadow-xl hover:border-primary/20 hover:scale-[1.01]'}`} style={{
            animationDelay: `${index * 0.15}s`
          }} onClick={() => handleCategoryClick(category.title)}>
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-3 transition-all duration-500 ${isActive ? 'bg-primary text-primary-foreground scale-110 rotate-12' : 'bg-primary/10 group-hover:scale-110 group-hover:rotate-6'}`}>
                      <IconComponent className={`h-6 w-6 transition-all duration-300 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                  const isSelected = selectedSkills.includes(skill);
                  return <Badge key={skill} variant={isSelected ? "default" : "secondary"} className={`text-xs transition-all duration-300 cursor-pointer relative ${isSelected ? 'ring-2 ring-primary/50 scale-105 shadow-lg animate-bounce-once' : 'hover:scale-110 hover:bg-primary/30 hover:shadow-md'}`} style={{
                    animationDelay: `${index * 0.15 + skillIndex * 0.05}s`
                  }} onClick={e => {
                    e.stopPropagation();
                    toggleSkill(skill);
                  }}>
                          {isSelected && <span className="mr-1">✓</span>}
                          {skill}
                        </Badge>;
                })}
                  </div>
                </div>
              </Card>;
        })}
        </div>

        {/* Selected Skills Summary */}
        {selectedSkills.length > 0 && <Card className="card-gradient p-6 animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Your Selected Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill, idx) => <Badge key={skill} variant="default" className="text-sm animate-slide-up cursor-pointer hover:scale-105 transition-transform" style={{
            animationDelay: `${idx * 0.05}s`
          }} onClick={() => toggleSkill(skill)}>
                  {skill} ✕
                </Badge>)}
            </div>
          </Card>}
      </div>
    </section>;
};
export default ToolsSkills;