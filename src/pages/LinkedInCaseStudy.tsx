import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Calendar, Users, Briefcase, TrendingUp, Target, Lightbulb } from "lucide-react";
import linkedinImage from "@/assets/linkedin-icon.png";

const LinkedInCaseStudy = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold">2018 - 2025</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Research Scope</p>
                  <p className="font-semibold">164 Data Points</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Role</p>
                  <p className="font-semibold">Product Research Analyst</p>
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

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={linkedinImage} 
            alt="LinkedIn Product Analysis"
            className="w-full h-auto"
          />
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
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "AI-Powered Inbox Management", category: "AI", pain: "Drowning in sales spam" },
              { title: "Re-Architected Messaging Inbox", category: "Non-AI", pain: "Cluttered, lacks basic features" },
              { title: "High-Relevancy Job Matching AI", category: "AI", pain: "Terrible, irrelevant job results" },
              { title: "Native Creator Analytics", category: "Non-AI", pain: "50% reach drop, no data" },
              { title: "True Opt-In AI Data Controls", category: "AI", pain: "Privacy concerns with AI training" },
              { title: "Disable Red Dots Button", category: "Non-AI", pain: "Dark patterns creating anxiety" },
              { title: "Super-Like High-Signal Interaction", category: "AI", pain: "Can't cut through noise" },
              { title: "True Anonymity for Reviews", category: "Non-AI", pain: "Need safe place for feedback" },
              { title: "Robust Customer Support", category: "Non-AI", pain: "Unresponsive support" },
              { title: "AI Writing Assistant", category: "AI", pain: "Generic, brand-damaging content" },
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={feature.category === "AI" ? "default" : "secondary"}>
                    {feature.category}
                  </Badge>
                  <span className="text-2xl font-bold text-primary/30">#{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.pain}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Insights</h2>
          
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-3">The Utility vs. Engagement Schism</h3>
              <p className="leading-relaxed">
                One user segment, "Camp Utility" (job seekers, high-level professionals), wants a clean, fast, 
                and relevant tool—like a search engine or file system. The other, "Camp Engagement" (creators, 
                sales teams), wants a high-visibility stage like a social network. LinkedIn's fundamental strategic 
                challenge is its attempt to serve both camps with a single, compromised interface.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <h3 className="text-xl font-semibold mb-3">Business Model Conflicts</h3>
              <p className="leading-relaxed">
                The platform's most significant user-facing failures are not simple oversights. They are, in many 
                cases, the calculated and accepted costs of a business model that monetizes noise, commoditizes 
                engagement, and harvests user data on an unprecedented, opt-out basis.
              </p>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-3">The Unbundling Opportunity</h3>
              <p className="leading-relaxed">
                This core conflict has opened the door for the "unbundling" of LinkedIn's features by more focused 
                competitors. Niche platforms like Polywork, Wellfound, and Discord communities are capturing specific 
                use cases that LinkedIn attempts to serve with its one-size-fits-all approach.
              </p>
            </Card>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Research Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">164</p>
              <p className="text-sm text-muted-foreground">Data Points Analyzed</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">7</p>
              <p className="text-sm text-muted-foreground">Years of Data</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">20</p>
              <p className="text-sm text-muted-foreground">Feature Recommendations</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">5+</p>
              <p className="text-sm text-muted-foreground">Data Sources</p>
            </Card>
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
