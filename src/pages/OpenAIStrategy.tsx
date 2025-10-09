import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, FileDown, Calendar, Target, TrendingUp, Shield, Users } from "lucide-react";
import openaiStrategyImage from "@/assets/openai-strategy.jpg";

const OpenAIStrategy = () => {
  const pdfs = [
    { name: "Phase 1: External & Internal Analysis", url: "/projects/GP1.pdf", description: "PESTEL, Porter's Five Forces, VRIO Analysis, SWOT Matrix" },
    { name: "Phase 2: Strategy Development", url: "/projects/GP2.pdf", description: "Strategic positioning and competitive strategy recommendations" },
    { name: "Phase 3: Implementation Plan", url: "/projects/GP3.pdf", description: "Organizational design, execution roadmap, and obstacle mitigation" }
  ];

  const frameworks = [
    { name: "PESTEL Analysis", description: "Macro-environmental factors affecting ChatGPT's competitive landscape" },
    { name: "Porter's Five Forces", description: "Industry profitability and competitive dynamics assessment" },
    { name: "Strategic Group Mapping", description: "Competitive positioning vs. Anthropic, Google DeepMind, Mistral" },
    { name: "VRIO Framework", description: "Resource evaluation for sustainable competitive advantage" },
    { name: "SWOT Matrix", description: "Strategic opportunities and threat mitigation strategies" },
    { name: "EFE & CPM Matrices", description: "Quantitative external factor and competitive profile evaluation" },
    { name: "Strategy Canvas", description: "Value innovation and differentiation assessment" },
    { name: "Balanced Scorecard", description: "Multi-layered implementation roadmap" }
  ];

  const keyFindings = [
    "Led external and internal analysis using PESTEL, Porter's Five Forces, Strategic Group Mapping, VRIO, and SWOT frameworks",
    "Built EFE Matrix, Competitive Profile Matrix, SPACE Matrix, and Strategy Canvas to assess OpenAI's competitive position",
    "Recommended dominant strategy focused on plugin infrastructure extensibility and ethical AI trust leadership",
    "Integrated ERRC Grid and Balanced Scorecard into multi-layered implementation roadmap across corporate, business, and functional levels",
    "Evaluated barriers to execution and proposed mitigation strategies for organizational, technical, and market-level risks"
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-card/30 to-background">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="default" className="px-4 py-2">MBA Competitive Strategy</Badge>
                <Badge variant="outline" className="px-4 py-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  Mar - May 2025
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                OpenAI ChatGPT
                <br />
                <span className="text-gradient">Competitive Strategy Analysis</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive strategic analysis and implementation plan for OpenAI's ChatGPT Strategic Business Unit across three phases.
              </p>
            </div>

            <div className="flex justify-center">
              <img src={openaiStrategyImage} alt="OpenAI ChatGPT Strategy" className="w-full h-auto rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Project PDFs */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Project <span className="text-gradient">Documentation</span></h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pdfs.map((pdf, index) => (
              <Card key={index} className="p-6 hover-lift transition-all duration-300 bg-card/60 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-4 mb-4">
                  <FileDown className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{pdf.name}</h3>
                    <p className="text-sm text-muted-foreground">{pdf.description}</p>
                  </div>
                </div>
                <Button asChild className="w-full" size="sm">
                  <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                    Download PDF
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Key Contributions
              </h3>
              <ul className="space-y-3">
                {keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-accent" />
                Strategic Recommendation
              </h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Dominant Strategy:</strong> Focus on plugin infrastructure extensibility and ethical AI trust leadership
              </p>
              <p className="text-muted-foreground">
                Integrated ERRC Grid and Balanced Scorecard into a multi-layered implementation roadmap addressing corporate, business, and functional organizational levels with comprehensive risk mitigation strategies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Frameworks Used */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Strategic <span className="text-gradient">Frameworks</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => (
              <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover-lift transition-all duration-300">
                <h4 className="font-bold mb-2 text-foreground">{framework.name}</h4>
                <p className="text-sm text-muted-foreground">{framework.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Team 10</h3>
                <p className="text-muted-foreground mb-4">William & Mary - Raymond A. Mason School of Business</p>
                <div className="flex flex-wrap gap-3">
                  {["Sunny Soni", "Lucia García-Moreno González", "Satta Sherif", "Ben Maura", "Daniel Nelson"].map((member, index) => (
                    <Badge key={index} variant="secondary">{member}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Interested in Strategic Analysis?</h2>
          <p className="text-lg text-muted-foreground mb-8">Let's discuss how I can apply these frameworks to your business challenges</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link to="/contact">Get In Touch</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/projects">View More Projects</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OpenAIStrategy;
