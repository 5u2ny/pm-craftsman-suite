import { Brain, Target, Users, TrendingUp, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    {
      category: "Product Strategy",
      items: ["Product-Market Fit", "MVP Development", "Go-to-Market Strategy", "Roadmap Planning"]
    },
    {
      category: "Research & Analytics",
      items: ["User Research", "A/B Testing", "Data Analysis", "Behavioral Analytics"]
    },
    {
      category: "AI/ML Product Management",
      items: ["Machine Learning", "AI Ethics", "Model Evaluation", "AI Product Design"]
    },
    {
      category: "Leadership",
      items: ["Cross-functional Teams", "Stakeholder Management", "Agile Methodology", "OKRs"]
    }
  ];

  const experience = [
    {
      role: "Senior Product Manager",
      company: "Cavo (Stealth AI Startup)",
      period: "2023 - Present",
      description: "Leading AI-powered travel planning product from 0 to 1, conducting extensive user research and building MVP with 85% user satisfaction rate."
    },
    {
      role: "Product Manager",
      company: "Risk Analytics Firm",
      period: "2022 - 2023",
      description: "Launched cybersecurity dashboard increasing analyst efficiency by 35%. Led cross-functional team of 8 engineers and designers."
    },
    {
      role: "Associate Product Manager",
      company: "Growth Tech Inc",
      period: "2021 - 2022",
      description: "Drove growth experiments resulting in 23% increase in user activation. Specialized in B2B SaaS optimization and user onboarding."
    }
  ];

  const achievements = [
    "MBA from Top Business School (2023)",
    "Increased product adoption by 40% across 3 different products",
    "Led 5+ successful product launches from concept to market",
    "Managed budgets totaling $2M+ in product development"
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
            I'm a product manager who thrives at the intersection of technology, user experience, 
            and business strategy. With a focus on AI-first products, I help companies build 
            solutions that create genuine value for users and sustainable growth for businesses.
          </p>
        </div>

        {/* Philosophy */}
        <Card className="card-gradient p-8 mb-12 animate-slide-up">
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
              <Card key={skillSet.category} className="card-gradient p-6">
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
              <Card key={index} className="card-gradient p-6">
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
          <Card className="card-gradient p-6">
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