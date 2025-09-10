import { Award, Calendar, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Product Manager",
      company: "Cavo (Stealth AI Startup)",
      period: "2023 - Present",
      description: "Leading AI-powered travel planning product from 0 to 1, conducting extensive user research and building MVP with 85% user satisfaction rate.",
      achievements: [
        "Launched MVP with 85% user satisfaction",
        "Led cross-functional team of 12",
        "Implemented AI-first product strategy"
      ]
    },
    {
      role: "Product Manager",
      company: "Risk Analytics Firm",
      period: "2022 - 2023",
      description: "Launched cybersecurity dashboard increasing analyst efficiency by 35%. Led cross-functional team of 8 engineers and designers.",
      achievements: [
        "35% increase in analyst efficiency",
        "Led team of 8 professionals",
        "Delivered on-time and under budget"
      ]
    },
    {
      role: "Associate Product Manager",
      company: "Growth Tech Inc",
      period: "2021 - 2022",
      description: "Drove growth experiments resulting in 23% increase in user activation. Specialized in B2B SaaS optimization and user onboarding.",
      achievements: [
        "23% increase in user activation",
        "Optimized B2B SaaS workflows",
        "Implemented data-driven decisions"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building products that create value through strategic thinking and user-centered design
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="flex items-center mb-2">
                    <Building className="h-5 w-5 text-primary mr-2" />
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-1 flex justify-center md:justify-end">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;