import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Target, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiTravelImage from "@/assets/project-ai-travel.jpg";
import linkedinImage from "@/assets/project-linkedin.jpg";
import cybersecurityImage from "@/assets/project-cybersecurity.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "linkedin-product-analysis",
      title: "LinkedIn's Unmet Feature Landscape",
      subtitle: "User-Driven Demand vs. Strategic Non-Implementation (2018-2025)",
      description: "Comprehensive 7-year analysis of LinkedIn's product strategy, synthesizing 164+ data points from user feedback, competitive analysis, and market research to identify critical feature gaps and business model conflicts.",
      image: linkedinImage,
      duration: "2018 - 2025",
      team: "Individual research",
      role: "Product Research Analyst",
      tags: ["Product Analysis", "UX Research", "Data Analysis", "Strategy"],
      keyMetrics: [
        { label: "Data Points", value: "164+" },
        { label: "Research Scope", value: "7 years" },
        { label: "Feature Recommendations", value: "20+" }
      ]
    },
    {
      id: "ai-travel-planner",
      title: "AI Travel Planner MVP",
      subtitle: "Building Personalized Trip Planning from 0 to 1",
      description: "Led end-to-end product development of an AI-powered travel planning platform, achieving 85% user satisfaction and 40% reduction in planning time.",
      image: aiTravelImage,
      duration: "8 months",
      team: "Cross-functional team of 6",
      role: "Senior Product Manager",
      tags: ["AI/ML", "MVP Design", "User Research", "Product Strategy"],
      keyMetrics: [
        { label: "User Satisfaction", value: "85%" },
        { label: "Planning Time Reduction", value: "40%" },
        { label: "Booking Conversion", value: "+23%" }
      ]
    },
    {
      id: "linkedin-analysis",
      title: "LinkedIn Product Teardown",
      subtitle: "Comprehensive UX Analysis & Competitive Intelligence",
      description: "Conducted in-depth analysis of LinkedIn's product strategy, identifying 15+ improvement opportunities and validating solutions with user research.",
      image: linkedinImage,
      duration: "6 weeks",
      team: "Individual analysis",
      role: "Product Analyst",
      tags: ["Product Analysis", "UX Research", "Competitive Intelligence"],
      keyMetrics: [
        { label: "Recommendations", value: "15+" },
        { label: "Prototype Concepts", value: "3" },
        { label: "Stakeholder Buy-in", value: "90%" }
      ]
    },
    {
      id: "cybersecurity-dashboard",
      title: "Cybersecurity Analytics Dashboard",
      subtitle: "Enterprise Risk Assessment Platform",
      description: "Built intuitive analytics platform for Fortune 500 security teams, achieving 60% faster threat detection and $500K annual cost savings.",
      image: cybersecurityImage,
      duration: "12 months",
      team: "8 engineers, 2 designers",
      role: "Lead Product Manager",
      tags: ["Data Visualization", "Enterprise UX", "Analytics"],
      keyMetrics: [
        { label: "Threat Detection", value: "60% faster" },
        { label: "Productivity", value: "+35%" },
        { label: "Cost Savings", value: "$500K" }
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20 pb-12">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Deep dives into product challenges, solutions, and measurable outcomes. 
              Each case study showcases my approach to <span className="text-primary font-medium">problem-solving, user research, and data-driven product decisions</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.id} 
                className="card-gradient hover-lift overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                        {study.title}
                      </h2>
                      <p className="text-lg text-primary font-medium mb-4">
                        {study.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {study.team}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Target className="h-4 w-4 mr-2 text-primary" />
                        {study.role}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {study.keyMetrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button asChild className="button-glow group">
                        <Link to={`/case-studies/${study.id}`}>
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:order-last">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="card-gradient p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to discuss these projects in detail?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'd love to share more insights about my product management approach, 
              challenges faced, and lessons learned from each project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="button-glow">
                <Link to="/contact">
                  Let's Connect
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  View All Projects
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;