import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, FileDown, Calendar, Shield, AlertTriangle, TrendingDown, Users, DollarSign, Target } from "lucide-react";
import cyberRiskImage from "@/assets/cyber-risk-assessment.jpg";

const CyberRiskAssessment = () => {
  const riskScenarios = [
    {
      title: "Data Exfiltration",
      icon: AlertTriangle,
      description: "Analysis of PHI/PII data breach scenarios from external and insider threats",
      findings: [
        "External cybercriminal threat: $1B potential loss",
        "Malicious insider threat: $1.2B potential loss",
        "Accidental insider threat: $1B potential loss"
      ]
    },
    {
      title: "Ransomware Attacks",
      icon: Shield,
      description: "Evaluation of ransomware impact on healthcare operations and data availability",
      findings: [
        "Operational downtime costs quantified",
        "Data recovery and restoration expenses",
        "Regulatory penalties and legal costs"
      ]
    },
    {
      title: "Vendor Security Risks",
      icon: TrendingDown,
      description: "Assessment of third-party vendor security vulnerabilities and dependencies",
      findings: [
        "Supply chain risk exposure identified",
        "Vendor security control gaps analyzed",
        "Mitigation strategies proposed"
      ]
    }
  ];

  const fairPrinciples = [
    {
      component: "Threat Event Frequency (TEF)",
      description: "How often threat actors attempt to cause harm"
    },
    {
      component: "Vulnerability (Contact + Probability of Action)",
      description: "Likelihood that a threat event results in loss"
    },
    {
      component: "Loss Magnitude (Primary + Secondary)",
      description: "Expected impact in dollar terms if loss occurs"
    },
    {
      component: "Risk Calculation",
      description: "Loss Event Frequency × Loss Magnitude = Annualized Loss Expectancy"
    }
  ];

  const keyContributions = [
    "Applied FAIR methodology to quantify risk magnitude and breach probability",
    "Modeled ROI for key mitigation tools (SIEM, SOAR, DRE, threat automation)",
    "Proposed a $1M investment plan protecting $546M in potential losses",
    "Delivered executive-ready risk summary with strategic board recommendations",
    "Projected $17M reduction in annualized cyber loss through mitigation strategies",
    "Designed comprehensive presentation deck for board-level decision making"
  ];

  const mitigationStrategies = [
    {
      title: "Security Information & Event Management (SIEM)",
      investment: "$250K",
      description: "Real-time threat detection and security event monitoring"
    },
    {
      title: "Security Orchestration, Automation & Response (SOAR)",
      investment: "$200K",
      description: "Automated incident response and threat mitigation"
    },
    {
      title: "Data Recovery Environment (DRE)",
      investment: "$300K",
      description: "Backup systems and disaster recovery capabilities"
    },
    {
      title: "Threat Automation & Intelligence",
      investment: "$250K",
      description: "AI-powered threat detection and prevention systems"
    }
  ];

  const recommendations = [
    "Implement comprehensive SIEM solution for continuous monitoring",
    "Deploy SOAR platform to automate incident response workflows",
    "Establish robust data recovery environment with regular testing",
    "Enhance vendor security assessment and management processes",
    "Conduct regular employee security awareness training",
    "Develop and maintain incident response and business continuity plans"
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={cyberRiskImage} 
            alt="Cyber Risk Assessment"
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
                MBA Sprint Week
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                Mar 2025
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Reconnaissance Healthcare
              <br />
              <span className="text-gradient">Cyber Risk Assessment</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              FAIR-based quantitative risk analysis for healthcare cybersecurity, evaluating PHI/PII threats, ransomware risks, and vendor dependencies to develop high-ROI mitigation strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="/projects/Cyber_Risk_Assessment.pdf" target="_blank" rel="noopener noreferrer" download>
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

      {/* Executive Summary */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
                <p className="text-muted-foreground mb-4">
                  Served as <strong className="text-foreground">Risk Modeling Analyst and Executive Deck Developer</strong> for a comprehensive cybersecurity risk assessment of a simulated healthcare provider.
                </p>
                <p className="text-muted-foreground mb-4">
                  Led the application of Factor Analysis of Information Risk (FAIR) methodology to quantify cyber threats, evaluate financial exposure, and develop data-driven mitigation strategies.
                </p>
                <p className="text-muted-foreground">
                  Delivered board-ready recommendations with ROI analysis for security investments totaling $1M to protect $546M in potential losses.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
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

      {/* Risk Scenarios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Risk <span className="text-gradient">Scenarios</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analysis of critical cybersecurity threats facing healthcare organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {riskScenarios.map((scenario, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift transition-all duration-300 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30"
              >
                <div className="mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl inline-block mb-4">
                    <scenario.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{scenario.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{scenario.description}</p>
                </div>

                <div className="space-y-2">
                  {scenario.findings.map((finding, fIndex) => (
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

      {/* FAIR Methodology */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              FAIR <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Factor Analysis of Information Risk framework for quantitative risk assessment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fairPrinciples.map((principle, index) => (
              <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50">
                <h4 className="font-bold text-lg mb-2 text-foreground">{principle.component}</h4>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-8 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">Industry Risk Context</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Primary Threats</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Crown Jewel Protection (PHI & PII)</li>
                      <li>• Ransomware & Malware Attacks</li>
                      <li>• Third-Party Vendor Security Risks</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Compliance & Impact</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Insider Threats (Malicious & Accidental)</li>
                      <li>• Regulatory & Legal Consequences</li>
                      <li>• Business Continuity Risks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Mitigation Strategies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Mitigation <span className="text-gradient">Strategies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              $1M investment plan protecting $546M in potential losses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {mitigationStrategies.map((strategy, index) => (
              <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover-lift transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-lg text-foreground">{strategy.title}</h4>
                  <Badge variant="secondary" className="px-3 py-1">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {strategy.investment}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{strategy.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 rounded-xl">
                <TrendingDown className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Projected Impact</h3>
                <p className="text-muted-foreground">Expected reduction in annualized cyber loss</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">$17M</p>
                <p className="text-sm text-muted-foreground">Annual Loss Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">546x</p>
                <p className="text-sm text-muted-foreground">ROI Multiple</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary mb-1">$1M</p>
                <p className="text-sm text-muted-foreground">Total Investment</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Board <span className="text-gradient">Recommendations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic action items for executive leadership and board consideration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <Card key={index} className="p-4 bg-card/60 backdrop-blur-sm border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{rec}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Interested in Risk Analysis & Cybersecurity?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how I can apply quantitative risk modeling to your organization's security challenges
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

export default CyberRiskAssessment;
