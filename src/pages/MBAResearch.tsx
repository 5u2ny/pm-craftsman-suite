import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, FileDown, Calendar, Users, Target, TrendingUp, Search, BarChart } from "lucide-react";
import colonialWilliamsburgImage from "@/assets/colonial-williamsburg.jpg";

const MBAResearch = () => {
  const initiatives = [
    {
      phase: "Exploratory Research",
      icon: Search,
      color: "text-blue-500",
      projects: [
        {
          title: "Initiative 1: Ethnographic Observation",
          description: "Understand how intergenerational tourism plays out in real time through observation of families at Colonial Williamsburg.",
          methods: ["On-site observation", "Informal interviews", "Audio recordings", "Family engagement patterns"],
          outcome: "Qualitative insights into how nostalgia and memory influence consumer behavior in tourism."
        },
        {
          title: "Initiative 2: Customer Discovery Interviews",
          description: "Connect and learn from adults in families through casual conversations in relaxed environments around Merchant Square.",
          methods: ["Casual interactions", "Authentic feedback", "Post-visit conversations", "Natural dialogue"],
          outcome: "Valuable, authentic insights from families who don't typically leave formal reviews."
        },
        {
          title: "Initiative 3: Online Sentiment Analysis",
          description: "Discover unsolicited consumer narratives about returning to childhood destinations.",
          methods: ["Social media scraping", "Keyword analysis", "Theme mapping", "Sentiment categorization"],
          outcome: "Thematic map of when and why people return to childhood destinations and emotional drivers."
        }
      ]
    },
    {
      phase: "Descriptive Research",
      icon: BarChart,
      color: "text-green-500",
      projects: [
        {
          title: "Initiative 4: Visitor Demographics",
          description: "Identify who Colonial Williamsburg's current and prospective visitors are through comprehensive surveys.",
          methods: ["Online surveys", "10-15 questions", "Mailchimp distribution", "Demographic profiling"],
          outcome: "Clear understanding of 'who' and 'what' is visiting Colonial Williamsburg."
        },
        {
          title: "Initiative 5: Visitor Behavior Analysis",
          description: "Analyze first-time and return visitors' behavior and movement patterns throughout Colonial Williamsburg.",
          methods: ["Technology-mediated observation", "Cell tower data", "Heatmap creation", "Follow-up surveys"],
          outcome: "Data-driven insights into visitor traffic patterns and experience preferences."
        },
        {
          title: "Initiative 6: Adult Reconnection Study",
          description: "How returning to Colonial Williamsburg as an adult helps reconnect visitors to their past while creating new memories.",
          methods: ["In-depth interviews", "Memory mapping", "Experience documentation", "Emotional response analysis"],
          outcome: "Understanding of nostalgia's role in repeat visitation and memory formation."
        }
      ]
    },
    {
      phase: "Predictive Research",
      icon: TrendingUp,
      color: "text-purple-500",
      projects: [
        {
          title: "Initiative 7: Future Visitation Forecasting",
          description: "Predict future visitation patterns among young adults based on childhood exposure to Colonial Williamsburg.",
          methods: ["Regression modeling (n=43)", "Primary survey data", "Behavioral insights", "Likelihood prediction"],
          outcome: "Identify high-likelihood returners and define visitor segments (e.g., Legacy Loopers, First-Time Family Explorers)."
        }
      ]
    }
  ];

  const keyFindings = [
    "Developed 3-stage research framework: exploratory, descriptive, and predictive methodologies",
    "Led Initiative 7 using regression modeling with 43 survey respondents",
    "Defined visitor segments and behavioral personas to guide marketing strategy",
    "Integrated qualitative focus group feedback with digital engagement trends",
    "Contributed to survey instrument design and statistical analysis (t-tests, cross-tabs, regression)"
  ];

  const skills = [
    "Marketing Research Design",
    "User Interviews",
    "Qualitative & Quantitative Methodologies",
    "Survey Design",
    "Regression Modeling",
    "Statistical Analysis",
    "Behavioral Segmentation",
    "Predictive Analytics"
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={colonialWilliamsburgImage} 
            alt="Colonial Williamsburg"
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
                MBA Marketing Research
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                Mar 2025 - May 2025
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Colonial Williamsburg
              <br />
              <span className="text-gradient">Multi-Stage Marketing Research</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Served as Research Design Lead and Predictive Modeling Contributor, collaborating on a full-cycle marketing research plan to support visitor engagement strategy for Colonial Williamsburg.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="/projects/Marketing_Research_Project.pdf" target="_blank" rel="noopener noreferrer" download>
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

      {/* Project Context */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Project Context</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Colonial Williamsburg, the world's largest living museum, sought to understand how to position itself at the center of conversations about America's founding and foster a more engaged citizenry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our research centered on the hypothesis that <strong className="text-foreground">adults return to tourist destinations they visited as children</strong>, making it crucial to identify experiences that appeal most to returning visitors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Working with William & Mary's Raymond A. Mason School of Business, our team developed a comprehensive research framework spanning exploratory, descriptive, and predictive methodologies.
              </p>
            </div>

            <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
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
          </div>
        </div>
      </section>

      {/* Research Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Research <span className="text-gradient">Framework</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive 7-initiative approach spanning qualitative exploration, quantitative description, and predictive modeling
            </p>
          </div>

          <div className="space-y-16">
            {initiatives.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="animate-fade-in" style={{ animationDelay: `${phaseIndex * 0.2}s` }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-card border border-border ${phase.color}`}>
                    <phase.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{phase.phase}</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {phase.projects.map((initiative, initIndex) => (
                    <Card 
                      key={initIndex} 
                      className="p-6 hover-lift transition-all duration-300 bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/30"
                    >
                      <h4 className="text-lg font-bold mb-3 text-foreground">{initiative.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {initiative.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Methods</p>
                        <div className="flex flex-wrap gap-2">
                          {initiative.methods.map((method, methodIndex) => (
                            <Badge key={methodIndex} variant="secondary" className="text-xs">
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs font-semibold text-foreground mb-2">Outcome</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{initiative.outcome}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Methodologies */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Skills & <span className="text-gradient">Methodologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Research techniques and analytical approaches applied throughout this project
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover-scale transition-all duration-300 bg-card/60 backdrop-blur-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Project Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-card/60 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <Users className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Research Team</h3>
                <p className="text-muted-foreground mb-4">
                  Team 2 - William & Mary, Raymond A. Mason School of Business
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Sunny Soni", "Caitlyn Hetrick", "Josh Johnstone", "Dave Knapp", "Stacia Heard"].map((member, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {member}
                    </Badge>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Interested in My Research Approach?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how I can apply these methodologies to your organization's challenges
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

export default MBAResearch;
