import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Users, Target, TrendingUp, CheckCircle2 } from "lucide-react";
import energyoneObImage from "@/assets/energyone-ob.jpg";

const EnergyOneOB = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.08] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/[0.06] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Organizational Behavior</Badge>
                <Badge>Employee Engagement</Badge>
                <Badge>Qualitative Research</Badge>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                EnergyOne America Employee Performance & Commitment
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                MBA Organizational Behavior Project, Fall 2024
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Served as Behavioral Research Contributor, involved in field interviews, OB analysis, and strategic rollout design. Analyzed organizational behavior and employee engagement for a leading industrial company.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="/projects/OB.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Report
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Discuss This Project</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={energyoneObImage} 
                alt="EnergyOne America Organizational Behavior" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Project Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">
                Behavioral Research Contributor - Field interviews, OB analysis, and strategic rollout design
              </p>
            </Card>

            <Card className="p-6">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Objective</h3>
              <p className="text-muted-foreground">
                Analyze organizational behavior and employee engagement to surface insights and recommend improvement strategies
              </p>
            </Card>

            <Card className="p-6">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-muted-foreground">
                Developed phased rollout roadmap for productivity and satisfaction gains
              </p>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold mb-4">About EnergyOne America</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              EnergyOne America is a leading provider of spray foam insulation, air barriers, and waterproofing 
              solutions along the U.S. East Coast. The company has completed high-profile projects including 
              the Smithsonian Hirshhorn Museum, Marine Corps Base Housing, and National Museum of Women in the Arts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Recognized by the Air Barrier Association of America's Quality Assurance Excellence Award and 
              named Best Place to Work in 2015, EnergyOne America is committed to delivering innovative, 
              energy-efficient solutions for sustainable construction.
            </p>
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Key Contributions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Employee Interviews</h3>
              <p className="text-muted-foreground">
                Interviewed employees across roles to surface motivation and stress drivers, gathering 
                qualitative data to understand behavioral patterns at individual and group levels.
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Behavioral Pattern Analysis</h3>
              <p className="text-muted-foreground">
                Analyzed behavioral patterns using OB frameworks at group and organizational level, 
                identifying key drivers of performance and commitment.
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Friction Identification</h3>
              <p className="text-muted-foreground">
                Flagged friction in workload distribution and role transition resistance, uncovering 
                critical organizational challenges affecting employee satisfaction.
              </p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Strategic Recommendations</h3>
              <p className="text-muted-foreground">
                Proposed new metrics, mentorship pathways, and flexible policy shifts to address 
                identified issues and improve organizational effectiveness.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Research Methodology</h2>
          
          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Organizational Behavior Framework</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Applied comprehensive OB analysis across three key levels: individual behavior, group behavior, 
                and organizational structure. This multi-level approach enabled deep understanding of how 
                personal characteristics, group dynamics, and organizational design influence employee performance 
                and commitment.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Individual Level</h4>
                  <p className="text-sm text-muted-foreground">
                    Personal characteristics, attitudes, traits, and values influencing work and interactions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Group Level</h4>
                  <p className="text-sm text-muted-foreground">
                    Team dynamics, collaboration patterns, and collective behavior in work groups
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Organizational Level</h4>
                  <p className="text-sm text-muted-foreground">
                    Structure, culture, policies, and systems affecting overall performance
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Data Collection Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conducted two face-to-face interviews with EnergyOne America employees working on the William & Mary 
                campus. Combined qualitative interviews with organizational frameworks to surface insights about 
                motivation drivers, stress factors, and organizational challenges affecting employee engagement 
                and performance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Implementation Roadmap</h2>
          
          <Card className="p-8">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Developed a phased rollout roadmap designed to drive productivity and satisfaction gains 
              while addressing identified organizational challenges:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">New Performance Metrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement balanced metrics that measure both individual and team contributions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Mentorship Pathways</h4>
                  <p className="text-sm text-muted-foreground">
                    Establish structured mentorship programs to support role transitions and career development
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexible Policy Shifts</h4>
                  <p className="text-sm text-muted-foreground">
                    Introduce adaptive policies addressing workload distribution and role transition challenges
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Interested in My Research Approach?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm passionate about applying organizational behavior frameworks to real-world business challenges. 
            Let's discuss how behavioral insights can drive organizational effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnergyOneOB;