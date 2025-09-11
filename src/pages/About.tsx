import { Brain, Target, Users, TrendingUp, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    {
      category: "Product Management",
      items: ["Product Strategy & Roadmap", "User Growth", "E-commerce Funnel Optimization", "A/B Testing", "Data-Driven Decision Making", "CRO", "UI/UX Optimization", "Agile & Scrum"]
    },
    {
      category: "Technical & AI",
      items: ["LLMs", "Generative AI", "RAG", "LangChain", "Prompt Engineering", "AI Product Strategy", "APIs", "JIRA", "Figma"]
    },
    {
      category: "Data & Analytics", 
      items: ["SQL", "Python (Pandas, NumPy)", "Tableau", "Power BI", "Excel", "Amplitude", "Google Analytics", "JASP"]
    },
    {
      category: "Leadership & Communication",
      items: ["Product Lifecycle Management", "User Research", "RICE & OKR Frameworks", "GTM Strategy", "Stakeholder Communication", "Cross-functional Teams"]
    }
  ];

  const experience = [
    {
      role: "Lead AI Product Manager Intern",
      company: "IPSERLAB (Stealth AI Startup)",
      period: "May 2025 - Ongoing",
      description: "Leading AI-powered travel planning platform development from 0-to-1, architecting multi-disciplinary teams and ownership models while earning promotion in 4 weeks."
    },
    {
      role: "Product Analyst (Growth Marketing Specialist)",
      company: "ASANIFY",
      period: "Sep 2022 - Aug 2023",
      description: "Spearheaded CRM automation and audience segmentation strategy driving 18% revenue efficiency increase and 27% boost in lead conversion for HR and Payroll automation software."
    },
    {
      role: "Business Development Associate",
      company: "YOCKET",
      period: "Mar 2022 - Sep 2022",
      description: "Collaborated with product team to redesign user qualification journeys, optimizing conversion funnel and improving conversion efficiency by 35% for study-abroad platform."
    },
    {
      role: "Product-led Growth Analyst",
      company: "LEADLE",
      period: "Oct 2021 - Mar 2022",
      description: "Optimized user activation paths analyzing churn signals and MVP-stage feedback, boosting SQL volume by 20% and cutting churn by 17% for B2B SaaS growth platform."
    }
  ];

  const achievements = [
    "MBA in Business Analytics & Marketing from William & Mary (Expected May 2026)",
    "BTech in Computer Science Engineering from Karunya Institute (2017-2021)",
    "Certified Scrum Product Owner (CSPO)",
    "Drove 35% improvement in conversion efficiency across multiple platforms",
    "Engineered automated systems reducing onboarding time by 3.5 days",
    "Generated over $700K in revenue through data-driven activation strategies"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an AI Product Manager and MBA candidate specializing in Business Analytics & Marketing. 
            With experience spanning stealth AI startups to established SaaS platforms, I excel at 
            building data-driven products that drive measurable growth and user engagement.
          </p>
        </div>

        {/* Philosophy */}
        <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-8 mb-12 animate-slide-up">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Data-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Every decision backed by user research and quantitative analysis
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">User-Centric</h3>
              <p className="text-sm text-muted-foreground">
                Building with empathy and deep understanding of user needs
              </p>
            </div>
            <div>
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Impact-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Measuring success through meaningful business and user outcomes
              </p>
            </div>
          </div>
        </Card>

        {/* Skills */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillSet, index) => (
              <Card key={skillSet.category} className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
                <h3 className="font-semibold text-foreground mb-4">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Award className="h-6 w-6 text-primary mr-2" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    {job.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <BookOpen className="h-6 w-6 text-primary mr-2" />
            Key Achievements
          </h2>
          <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Let's connect
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;