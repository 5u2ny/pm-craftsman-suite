import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Briefcase, TrendingUp, CheckCircle2, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiTravelImage from "@/assets/project-ai-travel.jpg";
import linkedinImage from "@/assets/project-linkedin.jpg";
import cybersecurityImage from "@/assets/project-cybersecurity.jpg";
import seismixImage from "@/assets/seismix-project.jpg";
import retailSegmentationImage from "@/assets/retail-segmentation-ml.jpg";

const CaseStudy = () => {
  const { slug } = useParams();

  const caseStudies = {
    "ai-travel-planner": {
      title: "AI Travel Planner MVP",
      subtitle: "Cavo - Building Personalized Trip Planning from 0 to 1",
      image: aiTravelImage,
      duration: "8 months",
      team: "Cross-functional team of 6",
      role: "Senior Product Manager",
      tags: ["AI/ML", "MVP Design", "User Research", "Product Strategy"],
      overview: "Led the end-to-end product development of an AI-powered travel planning platform, from initial concept through beta launch. The challenge was creating a personalized travel experience that could compete with established players while leveraging AI to provide unique value.",
      problem: {
        title: "The Challenge",
        content: "Travel planning is fragmented, time-consuming, and often results in generic recommendations. Existing solutions either focus on booking (like Expedia) or inspiration (like Pinterest) but don't provide personalized, actionable itineraries based on individual preferences and constraints."
      },
      research: {
        title: "Research & Discovery",
        methods: ["20+ user interviews", "Competitive analysis of 8 platforms", "Survey of 150 potential users", "Journey mapping workshops"],
        insights: [
          "73% of users spend 3+ hours researching a single trip",
          "Most frustrating aspect: conflicting recommendations across platforms", 
          "Users want personalization but don't want to input extensive preferences",
          "Trust in AI recommendations increases with explanation of reasoning"
        ]
      },
      solution: {
        title: "Solution Design",
        content: "Designed an AI-first travel planner that learns from minimal user input to generate personalized itineraries. Key features included smart questionnaires, real-time itinerary optimization, and explainable AI recommendations.",
        features: [
          "5-question preference capture vs. 20+ question competitors",
          "Real-time itinerary adjustments based on weather/events",
          "Transparent AI reasoning for each recommendation",
          "Collaborative planning for group trips"
        ]
      },
      impact: {
        title: "Results & Impact",
        metrics: [
          { label: "User Satisfaction", value: "85%", description: "in beta testing" },
          { label: "Planning Time Reduction", value: "40%", description: "vs. traditional methods" },
          { label: "Booking Completion", value: "+23%", description: "increase in conversion" },
          { label: "Free to Paid", value: "12%", description: "conversion rate" }
        ]
      },
      learnings: {
        title: "Key Learnings",
        items: [
          "AI explanations significantly increased user trust and adoption",
          "Minimal input collection led to higher completion rates than extensive onboarding",
          "Real-time collaboration features became the most requested feature post-launch",
          "Weather integration was initially deprioritized but became critical for user satisfaction"
        ]
      }
    },
    "linkedin-analysis": {
      title: "LinkedIn Product Teardown",
      subtitle: "Comprehensive UX Analysis & Competitive Intelligence",
      image: linkedinImage,
      duration: "6 weeks",
      team: "Individual analysis",
      role: "Product Analyst",
      tags: ["Product Analysis", "UX Research", "Competitive Intelligence"],
      overview: "Conducted comprehensive analysis of LinkedIn's feed algorithm, engagement patterns, and user experience to identify improvement opportunities and competitive advantages.",
      problem: {
        title: "The Challenge",
        content: "Understanding how LinkedIn's product decisions impact user engagement and identifying areas where the platform could better serve professional networking needs, particularly for job seekers and content creators."
      },
      research: {
        title: "Analysis Methodology",
        methods: ["Feature audit across 5 platforms", "User behavior analysis", "Algorithm reverse engineering", "Content performance tracking"],
        insights: [
          "Feed algorithm heavily favors video content over text posts",
          "Professional vs. personal content balance affects engagement",
          "Job seekers face discovery issues with current search functionality",
          "Creator tools lag behind other social platforms"
        ]
      },
      solution: {
        title: "Recommendations",
        content: "Developed 15+ actionable recommendations spanning feed optimization, content discovery, and professional networking enhancements.",
        features: [
          "Industry-specific feed filtering",
          "Enhanced job discovery through social signals", 
          "Creator analytics dashboard improvements",
          "Professional relationship strength indicators"
        ]
      },
      impact: {
        title: "Validation & Outcomes",
        metrics: [
          { label: "Recommendations", value: "15+", description: "actionable improvements" },
          { label: "Prototype Concepts", value: "3", description: "validated with users" },
          { label: "Stakeholder Buy-in", value: "90%", description: "positive reception" },
          { label: "Platform Coverage", value: "5", description: "competitive platforms analyzed" }
        ]
      },
      learnings: {
        title: "Key Insights",
        items: [
          "Professional networks require different engagement patterns than consumer social",
          "Algorithm transparency could be a competitive advantage in B2B",
          "Job discovery is significantly underoptimized on current platform",
          "Creator economy features lag 2-3 years behind consumer platforms"
        ]
      }
    },
    "cybersecurity-dashboard": {
      title: "Cybersecurity Analytics Dashboard", 
      subtitle: "Enterprise Risk Assessment Platform",
      image: cybersecurityImage,
      duration: "12 months",
      team: "8 engineers, 2 designers",
      role: "Lead Product Manager",
      tags: ["Data Visualization", "Enterprise UX", "Analytics"],
      overview: "Led development of enterprise cybersecurity analytics dashboard focused on threat identification and risk assessment, serving security analysts at Fortune 500 companies.",
      problem: {
        title: "The Challenge", 
        content: "Security analysts were drowning in data from multiple sources with no unified view of threats. Existing tools required extensive training and provided poor user experience, leading to delayed threat response and analyst burnout."
      },
      research: {
        title: "User Research",
        methods: ["Shadowing 12 security analysts", "Task analysis studies", "Workflow mapping", "Tool evaluation sessions"],
        insights: [
          "Analysts spend 60% of time on data correlation vs. analysis",
          "Alert fatigue leads to critical threats being missed",
          "Existing dashboards require 15+ clicks for common tasks",
          "Visual pattern recognition more effective than text-based alerts"
        ]
      },
      solution: {
        title: "Platform Design",
        content: "Built intuitive analytics platform with automated threat correlation, visual pattern detection, and streamlined investigation workflows.",
        features: [
          "Single-click threat investigation workflows",
          "AI-powered alert prioritization and correlation",
          "Customizable visual dashboards for different analyst roles",
          "Automated reporting and stakeholder communication"
        ]
      },
      impact: {
        title: "Business Results",
        metrics: [
          { label: "Threat Identification", value: "60%", description: "faster detection" },
          { label: "Analyst Efficiency", value: "+35%", description: "productivity improvement" },
          { label: "User Adoption", value: "92%", description: "within 6 months" },
          { label: "Cost Savings", value: "$500K", description: "annual identified savings" }
        ]
      },
      learnings: {
        title: "Product Lessons",
        items: [
          "Enterprise users prefer powerful customization over simplified interfaces",
          "Data visualization choices significantly impact decision-making speed",
          "Analyst workflow varies greatly between organizations and requires flexibility",
          "Automated reporting became the most valued feature for management buy-in"
        ]
      }
    },
    "seismix-earthquake-detection": {
      title: "Seismix – Earthquake Detection MVP",
      subtitle: "IoT-Based Early Warning System",
      image: seismixImage,
      duration: "5 months",
      team: "5-member student team",
      role: "Team Lead & Hardware Integration",
      tags: ["IoT", "Arduino", "Hardware", "Data Visualization"],
      overview: "Led development of an earthquake detection system using Arduino-based accelerometer sensors, real-time data processing, and visual tremor plotting. Project won 1st prize among 60+ competing teams for innovation and technical execution.",
      problem: {
        title: "The Challenge",
        content: "Early earthquake detection systems are expensive and inaccessible to most communities. The challenge was to build a low-cost, accurate detection system using readily available hardware components that could provide real-time alerts and tremor visualization."
      },
      research: {
        title: "Research & Development",
        methods: ["Sensor calibration testing", "Accelerometer threshold analysis", "Data processing optimization", "Visualization framework evaluation"],
        insights: [
          "Accelerometer sensitivity required precise calibration for accuracy",
          "Real-time data processing needed optimization for alert speed",
          "Visual representation critical for non-technical users",
          "Alert threshold tuning essential to minimize false positives"
        ]
      },
      solution: {
        title: "System Design",
        content: "Developed integrated hardware-software system combining Arduino sensors, Java/C++ backend for data processing, and Processing IDE for real-time visualization of seismic activity across x-y-z axes.",
        features: [
          "Accelerometer-based tremor detection with tunable thresholds",
          "Real-time x-y-z axis tremor visualization using Processing IDE",
          "Arduino-based sensor array for multi-point monitoring",
          "Alert system triggered by magnitude thresholds"
        ]
      },
      impact: {
        title: "Project Outcomes",
        metrics: [
          { label: "Competition Result", value: "1st", description: "place among 60+ teams" },
          { label: "Detection Accuracy", value: "87%", description: "threshold accuracy" },
          { label: "Alert Speed", value: "<2s", description: "real-time processing" },
          { label: "Cost Reduction", value: "90%", description: "vs. commercial systems" }
        ]
      },
      learnings: {
        title: "Technical Learnings",
        items: [
          "Hardware-software integration requires careful consideration of latency and data throughput",
          "Sensor calibration is critical for accurate environmental monitoring",
          "Visual feedback significantly improves user understanding of complex data",
          "Low-cost IoT solutions can achieve comparable results to expensive commercial systems"
        ]
      }
    },
    "retail-customer-segmentation": {
      title: "Retail Customer Segmentation using ML",
      subtitle: "K-Means Clustering for Targeted Marketing",
      image: retailSegmentationImage,
      duration: "4 months",
      team: "Individual research project",
      role: "Data Analyst & ML Engineer",
      tags: ["Machine Learning", "Python", "K-Means", "Customer Analytics"],
      overview: "Applied k-Means clustering algorithm to segment 8,950 retail customer records into seven distinct behavioral groups, enabling targeted marketing strategies and identifying high-value customer segments including VIPs and Revolvers.",
      problem: {
        title: "The Challenge",
        content: "Retail businesses struggle to create effective targeted marketing campaigns without clear customer segmentation. Generic marketing approaches result in wasted resources and missed opportunities to engage high-value customer segments."
      },
      research: {
        title: "Data Analysis Process",
        methods: ["Exploratory data analysis on 8,950 records", "Feature engineering and selection", "K-Means clustering implementation", "Segment validation and profiling"],
        insights: [
          "Customer behavior shows distinct clustering patterns across purchase history",
          "Credit utilization and tenure are strong differentiators",
          "Seven segments emerged as optimal cluster count",
          "VIP and Revolver segments showed highest marketing potential"
        ]
      },
      solution: {
        title: "ML Implementation",
        content: "Implemented Python-based k-Means clustering model to identify seven customer behavioral segments. Analysis revealed two high-credit segments (VIPs and Revolvers) ideal for premium product targeting and retention campaigns.",
        features: [
          "Python k-Means clustering model with 7 behavioral clusters",
          "Customer segments: Revolvers, VIPs, Low-Tenure, and others",
          "Feature analysis identifying credit and tenure as key differentiators",
          "Segment profiling for targeted marketing recommendations"
        ]
      },
      impact: {
        title: "Analysis Results",
        metrics: [
          { label: "Customer Records", value: "8,950", description: "analyzed and segmented" },
          { label: "Segments Identified", value: "7", description: "distinct behavioral groups" },
          { label: "High-Value Segments", value: "2", description: "VIPs and Revolvers" },
          { label: "Model Accuracy", value: "82%", description: "clustering validation" }
        ]
      },
      learnings: {
        title: "Key Insights",
        items: [
          "K-Means clustering effectively reveals hidden customer behavior patterns",
          "Feature selection significantly impacts segmentation quality and interpretability",
          "High-credit segments require different engagement strategies than price-sensitive groups",
          "Customer tenure and credit utilization are stronger predictors than demographic data alone"
        ]
      }
    }
  };

  const study = caseStudies[slug as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Button variant="ghost" asChild className="group hover:bg-muted/50 transition-all duration-300">
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
        </Button>
      </div>

      {/* Hero Section with Full Width Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          
          {/* Floating gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
          <div className="max-w-5xl animate-slide-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
              {study.title}
            </h1>
            <p className="text-2xl sm:text-3xl text-gradient font-semibold mb-8">
              {study.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {study.tags.map((tag, index) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-sm px-5 py-2 hover-scale cursor-default backdrop-blur-sm bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="border-y border-border/50 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-default animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300">Timeline</span>
                </div>
                <p className="text-2xl text-foreground font-bold">{study.duration}</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-default animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors duration-300">Team</span>
                </div>
                <p className="text-2xl text-foreground font-bold">{study.team}</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-default animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300">Role</span>
                </div>
                <p className="text-2xl text-foreground font-bold">{study.role}</p>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">Overview</h2>
            </div>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              {study.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">{study.problem.title}</h2>
            </div>
            <Card className="card-gradient p-8 sm:p-12 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <p className="text-lg text-muted-foreground leading-relaxed">{study.problem.content}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">{study.research.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-gradient p-8 border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Research Methods</h3>
                </div>
                <div className="space-y-4">
                  {study.research.methods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{method}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="card-gradient p-8 border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">Key Insights</h3>
                </div>
                <div className="space-y-4">
                  {study.research.insights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{insight}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">{study.solution.title}</h2>
            </div>
            <Card className="card-gradient p-8 sm:p-12 mb-8 border-2 border-primary/20">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{study.solution.content}</p>
              <div className="grid md:grid-cols-2 gap-6">
                {study.solution.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-all duration-300"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {study.impact.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {study.impact.metrics.map((metric, index) => (
                <Card 
                  key={index} 
                  className="card-gradient p-8 text-center border-2 border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-default group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                  <div className="font-semibold text-foreground mb-2">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest">{study.learnings.title}</h2>
            </div>
            <Card className="card-gradient p-8 sm:p-12 border-2 border-primary/20">
              <div className="space-y-6">
                {study.learnings.items.map((learning, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-6 bg-background/50 rounded-lg hover:bg-background/70 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground text-lg">{learning}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-gradient p-12 text-center max-w-4xl mx-auto border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Interested in learning more about this project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'd love to discuss the details, challenges, and lessons learned in more depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-scale hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <Link to="/contact">
                  Let's discuss this project
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale hover:shadow-lg transition-all duration-300">
                <Link to="/projects">
                  View other projects
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;