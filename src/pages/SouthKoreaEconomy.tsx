import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, FileDown, Calendar, TrendingDown, Users, BarChart3, Target } from "lucide-react";
import southKoreaEconomy from "@/assets/south-korea-economy.jpg";

const SouthKoreaEconomy = () => {
  const researchAreas = [
    {
      title: "Demographic Analysis",
      icon: Users,
      description: "Analysis of South Korea's aging population trends and labor force composition",
      findings: [
        "Rapid population stabilization post-2020",
        "Increasing elderly dependency ratio",
        "Labor shortage challenges identified"
      ]
    },
    {
      title: "Economic Impact Assessment",
      icon: TrendingDown,
      description: "Evaluation of aging demographics on labor share, productivity, and GDP growth",
      findings: [
        "Labor share growth trends analyzed",
        "Total Factor Productivity (TFP) dynamics studied",
        "GDP growth implications measured"
      ]
    },
    {
      title: "Policy Evaluation",
      icon: Target,
      description: "Assessment of retirement age reforms and pension policy impacts",
      findings: [
        "Minimal long-term gains from current reforms",
        "Trade-offs between older workforce retention and youth hiring",
        "MRA extensions and hiring incentives evaluated"
      ]
    }
  ];

  const methodology = [
    {
      source: "KOSIS (Korean Statistical Information Service)",
      data: "Population demographics and labor force statistics"
    },
    {
      source: "KOSTAT (Statistics Korea)",
      data: "Employment data and economic indicators"
    },
    {
      source: "World Bank",
      data: "International comparative economic metrics"
    },
    {
      source: "WHO (World Health Organization)",
      data: "Health and aging population data"
    }
  ];

  const keyContributions = [
    "Analyzed demographic and labor data from KOSIS, KOSTAT, World Bank, and WHO",
    "Built regression models and ran t-tests to explore aging vs productivity dynamics",
    "Found minimal long-term gains from current retirement age reforms",
    "Identified policy trade-offs between older workforce retention and youth hiring incentives",
    "Recommended policy actions including MRA extensions, hiring incentives, and cost mitigation strategies",
    "Designed and delivered final presentation deck with data visualizations"
  ];

  const policyRecommendations = [
    {
      title: "Mandatory Retirement Age (MRA) Extensions",
      description: "Gradual increase in retirement age to maintain workforce participation"
    },
    {
      title: "Youth Hiring Incentives",
      description: "Programs to balance older worker retention with opportunities for younger generations"
    },
    {
      title: "Cost Mitigation Strategies",
      description: "Economic measures to offset increased labor costs from aging workforce"
    },
    {
      title: "Productivity Enhancement",
      description: "Training and technology adoption to improve efficiency of older workers"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={southKoreaEconomy} 
            alt="South Korea Economic Analysis"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="default" className="px-4 py-2">
                MBA Business, Govt & Global Economy
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                Jan 2025 - Mar 2025
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              South Korea
              <br />
              <span className="text-gradient">Demographic Transition & Economic Policy</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Analytics-driven policy research assessing the economic impacts of South Korea's aging population on labor markets, productivity, and GDP growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="/projects/Econ.pdf" target="_blank" rel="noopener noreferrer" download>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Full Report (PDF)
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Discuss This Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Context */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Research Questions</h2>
              <div className="space-y-4">
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
                  <p className="text-foreground font-semibold mb-2">Question 1</p>
                  <p className="text-muted-foreground">
                    How does South Korea's aging population affect labor share growth, total factor productivity (TFP), and economic growth?
                  </p>
                </Card>
                <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
                  <p className="text-foreground font-semibold mb-2">Question 2</p>
                  <p className="text-muted-foreground">
                    How have government policies—such as raising the retirement age and pension reforms—mitigated or exacerbated these effects?
                  </p>
                </Card>
              </div>
            </div>

            <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                Key Contributions
              </h3>
              <ul className="space-y-3">
                {keyContributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Research <span className="text-gradient">Framework</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-dimensional analysis of demographic shifts, economic impacts, and policy effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift transition-all duration-300 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30"
              >
                <div className="mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                </div>

                <div className="space-y-2">
                  {area.findings.map((finding, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{finding}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Data <span className="text-gradient">Sources</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis using authoritative demographic and economic databases
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {methodology.map((item, index) => (
              <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
                <h4 className="font-bold text-lg mb-2 text-foreground">{item.source}</h4>
                <p className="text-sm text-muted-foreground">{item.data}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <h4 className="font-bold text-lg mb-3 text-foreground">Analytical Methods</h4>
            <div className="flex flex-wrap gap-3">
              {["Regression Models", "T-Tests", "Time Series Analysis", "Comparative Analysis", "Policy Impact Assessment"].map((method, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {method}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Policy Recommendations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Policy <span className="text-gradient">Recommendations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic interventions to address demographic challenges and promote sustainable economic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {policyRecommendations.map((rec, index) => (
              <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover-lift transition-all duration-300">
                <h4 className="font-bold text-lg mb-2 text-foreground">{rec.title}</h4>
                <p className="text-muted-foreground">{rec.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Team 10</h3>
                <p className="text-muted-foreground mb-4">William & Mary - Raymond A. Mason School of Business</p>
                <div className="flex flex-wrap gap-3">
                  {["Sunny Soni", "Abraham Asmah", "Garrett Anthony", "Taehoo Kim", "Rachel Yim"].map((member, index) => (
                    <Badge key={index} variant="secondary">{member}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Interested in Economic Policy Research?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how I can apply data-driven analysis to your organization's challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link to="/contact">Get In Touch</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/projects">View More Projects</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SouthKoreaEconomy;
