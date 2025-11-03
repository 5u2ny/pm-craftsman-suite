import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Calendar, Users, Briefcase, TrendingUp, Target, Lightbulb, Eye } from "lucide-react";
import linkedinImage from "@/assets/linkedin-icon.png";
import linkedinInboxWireframe from "@/assets/linkedin-inbox-wireframe.png";
import linkedinJobMatchingWireframe from "@/assets/linkedin-job-matching-wireframe.png";
import linkedinPremiumWireframe from "@/assets/linkedin-premium-wireframe.png";
import linkedinAiWritingWireframe from "@/assets/linkedin-ai-writing-wireframe.png";
import linkedinAnonymityWireframe from "@/assets/linkedin-anonymity-wireframe.png";
import linkedinProfileValidationWireframe from "@/assets/linkedin-profile-validation-wireframe.png";
import linkedinFeedMutingWireframe from "@/assets/linkedin-feed-muting-wireframe.png";
import linkedinDisableRedDotsWireframe from "@/assets/linkedin-disable-red-dots-wireframe.png";
import linkedinPremiumTierWireframe from "@/assets/linkedin-premium-tier-wireframe.png";
import linkedinPortfolioShowcaseWireframe from "@/assets/linkedin-portfolio-showcase-wireframe.png";

const LinkedInCaseStudy = () => {
  const features = [
    {
      number: 1,
      title: "AI-Powered Inbox Management",
      description: "Drowning in sales spam",
      category: "AI",
      image: linkedinInboxWireframe,
    },
    {
      number: 2,
      title: "High-Relevancy Job Matching AI",
      description: "Terrible, irrelevant job results",
      category: "AI",
      image: linkedinJobMatchingWireframe,
    },
    {
      number: 3,
      title: "True Opt-In AI Data Controls",
      description: "Privacy concerns with AI training",
      category: "AI",
      image: linkedinPremiumWireframe,
    },
    {
      number: 4,
      title: "AI Writing Assistant",
      description: "Generic, brand-damaging content",
      category: "AI",
      image: linkedinAiWritingWireframe,
    },
    {
      number: 5,
      title: "Super-Like High-Signal Interaction",
      description: "Can't cut through noise",
      category: "AI",
      image: linkedinAnonymityWireframe,
    },
    {
      number: 6,
      title: "AI Profile Validation",
      description: "Fake profiles and spam accounts",
      category: "AI",
      image: linkedinProfileValidationWireframe,
    },
    {
      number: 7,
      title: "Advanced Feed Muting",
      description: "Can't filter out unwanted content",
      category: "Non-AI",
      image: linkedinFeedMutingWireframe,
    },
    {
      number: 8,
      title: "Disable Red Dots Button",
      description: "Dark patterns creating anxiety",
      category: "Non-AI",
      image: linkedinDisableRedDotsWireframe,
    },
    {
      number: 9,
      title: "Native Creator Analytics",
      description: "50% reach drop, no data",
      category: "Non-AI",
      image: linkedinPremiumTierWireframe,
    },
    {
      number: 10,
      title: "Polywork-Style Portfolio Showcase",
      description: "Text-only profiles, no visual showcase",
      category: "Non-AI",
      image: linkedinPortfolioShowcaseWireframe,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/case-studies">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">Product Analysis</Badge>
            <Badge variant="secondary">UX Research</Badge>
            <Badge variant="secondary">Data Analysis</Badge>
            <Badge variant="secondary">Strategy</Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LinkedIn's Unmet Feature Landscape
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            An Analysis of User-Driven Demand vs. Strategic Non-Implementation (2018-2025)
          </p>

          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">UX Research</p>
                  <p className="font-semibold">164 Data Points Analyzed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">User Stories</p>
                  <p className="font-semibold">10 Feature Demands</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Download Button */}
          <Button size="lg" className="gap-2" asChild>
            <a href="/projects/LinkedIn_Case_Study.pdf" download>
              <Download className="h-5 w-5" />
              Download Full Report
            </a>
          </Button>
        </div>

        {/* Executive Summary */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Executive Summary</h2>
          </div>
          
          <Card className="p-8">
            <p className="text-lg leading-relaxed mb-4">
              This report presents an exhaustive analysis of public user feedback on the LinkedIn platform, 
              synthesizing data from 2018 to 2025. The research identifies a critical and widening divergence 
              between the platform's stated mission and its practical execution.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Users, from job seekers to power users, are increasingly vocal in their demand for LinkedIn to 
              function as a high-utility, low-noise professional tool. The most persistent requests are for 
              features that filter spam, improve the relevance of core functions like job search, and restore 
              platform trust.
            </p>
            <p className="text-lg leading-relaxed">
              In stark contrast, LinkedIn's product strategy, heavily influenced by its parent company Microsoft, 
              is prioritizing engagement-based advertising and leveraging the platform as a massive, proprietary 
              data asset to train the Microsoft 365 Copilot ecosystem.
            </p>
          </Card>
        </section>

        {/* Research Methodology */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Research Methodology</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Community Forums (Reddit, Quora, Blind)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Social Media (X/Twitter)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>App Store Reviews (iOS/Android)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Power User & Influencer Feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Legal & Privacy Analysis</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>User-driven feature requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Competitive benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Microsoft ecosystem analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Utility vs. Engagement conflict</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI implementation strategy</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Top Feature Demands */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Top 10 Most Demanded Features</h2>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Hover over any feature to preview the wireframe concept
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <HoverCard key={feature.number} openDelay={200}>
                <HoverCardTrigger asChild>
                  <Card 
                    className="p-6 hover:shadow-xl transition-all hover:scale-105 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant={feature.category === "AI" ? "default" : "secondary"}>
                        {feature.category}
                      </Badge>
                      <span className="text-3xl font-bold text-primary/20">#{feature.number}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Eye className="h-4 w-4" />
                      <span>Hover to Preview</span>
                    </div>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-[600px] p-4" side="top">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={feature.category === "AI" ? "default" : "secondary"} className="text-xs">
                        {feature.category}
                      </Badge>
                      <span className="text-sm font-semibold text-muted-foreground">#{feature.number}</span>
                    </div>
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <div className="rounded-lg overflow-hidden border shadow-lg mt-2">
                      <img 
                        src={feature.image} 
                        alt={`${feature.title} Wireframe`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
          <h2 className="text-2xl font-bold mb-4">Read the Complete Analysis</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download the full 50+ page report for in-depth analysis, detailed feature breakdowns, 
            competitive benchmarking, and strategic recommendations.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="/projects/LinkedIn_Case_Study.pdf" download>
              <Download className="h-5 w-5" />
              Download Full Report (PDF)
            </a>
          </Button>
        </Card>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row gap-4 justify-between items-center">
          <Link to="/case-studies">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="gap-2">
              Discuss This Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkedInCaseStudy;
