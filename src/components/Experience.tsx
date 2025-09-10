import { Award, Calendar, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Lead AI Product Manager Intern",
      company: "IPSERLAB (Dallas, TX)",
      period: "May 2025 - Ongoing",
      description: "Leading AI-powered travel planning platform development from 0-to-1 at stealth-stage startup, architecting multi-disciplinary teams and ownership models.",
      achievements: [
        "Promoted from AI Product Manager Intern in 4 weeks",
        "Orchestrated complete 0-to-1 product discovery process", 
        "Drove product velocity implementing RICE prioritization framework",
        "Engineered asynchronous onboarding system for 20+ contributors"
      ]
    },
    {
      role: "Product Analyst (Growth Marketing Specialist)",
      company: "ASANIFY (Kolkata, India)",
      period: "Sep 2022 - Aug 2023",
      description: "Spearheaded CRM automation and audience segmentation strategy for HR and Payroll automation software serving small to medium-sized businesses.",
      achievements: [
        "18% increase in revenue efficiency",
        "27% boost in lead conversion",
        "Engineered real-time onboarding dashboards in Tableau",
        "Pioneered Product-Led Growth (PLG) inbound funnel"
      ]
    },
    {
      role: "Business Development Associate", 
      company: "YOCKET (Mumbai, India)",
      period: "Mar 2022 - Sep 2022",
      description: "Collaborated with product team to redesign user qualification journeys for India's largest community-based platform for study-abroad aspirants.",
      achievements: [
        "35% improvement in conversion efficiency",
        "Generated over $700K in revenue across two quarters",
        "Executed data-driven activation strategies",
        "Optimized conversion funnel leveraging LinkedIn data"
      ]
    },
    {
      role: "Product-led Growth Analyst (Growth Partner)",
      company: "LEADLE (Chennai, India)", 
      period: "Oct 2021 - Mar 2022",
      description: "Optimized user activation paths analyzing churn signals and MVP-stage feedback for B2B SaaS platform providing product-led growth tools and analytics.",
      achievements: [
        "20% boost in SQL volume",
        "17% reduction in churn",
        "Engineered automated lead capture system",
        "Quadrupled booked meetings identifying top-performing channels"
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