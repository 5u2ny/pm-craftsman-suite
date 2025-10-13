import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Target, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
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
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
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
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8 animate-fade-in">
          <Button variant="ghost" asChild className="hover:bg-muted">
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{study.subtitle}</p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {study.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              {study.team}
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              {study.role}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Overview */}
        <Card className="card-gradient p-8 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
        </Card>

        {/* Problem */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">{study.problem.title}</h2>
          <Card className="card-gradient p-6">
            <p className="text-muted-foreground leading-relaxed">{study.problem.content}</p>
          </Card>
        </div>

        {/* Research */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">{study.research.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-gradient p-6">
              <h3 className="font-semibold text-foreground mb-4">Research Methods</h3>
              <div className="space-y-2">
                {study.research.methods.map((method, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{method}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="card-gradient p-6">
              <h3 className="font-semibold text-foreground mb-4">Key Insights</h3>
              <div className="space-y-3">
                {study.research.insights.map((insight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{insight}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">{study.solution.title}</h2>
          <Card className="card-gradient p-6 mb-6">
            <p className="text-muted-foreground leading-relaxed mb-6">{study.solution.content}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {study.solution.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Impact Metrics */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            {study.impact.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {study.impact.metrics.map((metric, index) => (
              <Card key={index} className="card-gradient p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold text-foreground mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.7s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">{study.learnings.title}</h2>
          <Card className="card-gradient p-6">
            <div className="space-y-4">
              {study.learnings.items.map((learning, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-accent font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{learning}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Next Steps / CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="card-gradient p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Interested in learning more about this project?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'd love to discuss the details, challenges, and lessons learned in more depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="button-glow">
                <Link to="/contact">
                  Let's discuss this project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  View other case studies
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;