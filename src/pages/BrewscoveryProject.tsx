import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, TrendingUp, Users, DollarSign, Target, Rocket, BarChart } from "lucide-react";
import brewscoveryImage from "@/assets/brewscovery-project.jpg";

const BrewscoveryProject = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.08] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/[0.06] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-wrap gap-2">
              <Badge>Marketing Strategy</Badge>
              <Badge>Financial Modeling</Badge>
              <Badge>GTM Strategy</Badge>
              <Badge>Subscription Business</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Brewscovery – <span className="text-gradient">Craft Beer Subscription Model</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl">
              MBA Sprint Week, Fall 2024 | William & Mary – Raymond A. Mason School of Business
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <a href="/projects/BeerProject.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  View Full Pitch Deck
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in">
            <img 
              src={brewscoveryImage} 
              alt="Brewscovery Craft Beer Subscription Project" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            <Card className="border-primary/20 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-primary" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Role:</strong> Market Strategy Designer and Presentation/Media Developer
                </p>
                <p>
                  <strong>Duration:</strong> October 2024 (1 Week Sprint)
                </p>
                <p>
                  Co-developed a comprehensive, investor-ready subscription strategy for Brewscovery, a craft beer D2C platform targeting niche beer enthusiast markets. Led market strategy design, financial modeling, and presentation development as part of a top-performing team selected for final pitch presentation to Domino's Global Strategy Chief.
                </p>
                <p>
                  Built the complete financial forecast model, GTM roadmap using influencer traction and regional growth playbooks, and developed the final pitch deck design along with editing the demo video for presentation. The project focused on creating a scalable subscription business model that balances personalization, local brewery support, and financial sustainability.
                </p>
              </CardContent>
            </Card>

            {/* Market Overview */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BarChart className="h-6 w-6 text-primary" />
                  Market Overview & Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Target Market</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Beer Aficionados:</strong> 15% of market, premium consumers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Craft Beer Drinkers:</strong> 40% of market segment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Off-Premises Volume:</strong> 85% of consumption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Health-Conscious:</strong> 54% men, 51% women seek low-alcohol options</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Market Trends</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Market Growth:</strong> 10% annual growth projected over next 5 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Curated Experiences:</strong> 60% prefer personalized selections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span><strong>Sustainability:</strong> 70% prioritize local sourcing and eco-friendly practices</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">User Persona: The Craft Beer Enthusiast</h4>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Demographics</p>
                      <p className="text-muted-foreground">Age: 30, Williamsburg</p>
                      <p className="text-muted-foreground">Adventurous, Independent</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Goals</p>
                      <p className="text-muted-foreground">Access unique artisanal beers</p>
                      <p className="text-muted-foreground">Support local breweries</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Values</p>
                      <p className="text-muted-foreground">Authenticity over mass-production</p>
                      <p className="text-muted-foreground">Quality and community-focused</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Offering */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Rocket className="h-6 w-6 text-primary" />
                  Product Offering: Discovery Mix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Core Features</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span><strong>Curated Selection:</strong> Handpicked assortment of craft beers with unique flavors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span><strong>Personalization:</strong> Customizable preferences with personalized recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span><strong>Home Delivery:</strong> Hassle-free delivery of quality beers straight to your door</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span><strong>Smaller Quantities:</strong> Explore flavors without over-committing, promotes responsible drinking</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 border border-accent/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Value Proposition</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Premium craft beer discovery experience at home</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Support local breweries and artisanal producers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Access to limited-edition and regional selections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Flexible subscription with no long-term commitment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Marketing Strategy */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="h-6 w-6 text-primary" />
                  Go-To-Market Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-4">Influencer-Led Growth Strategy</h4>
                    <p className="text-muted-foreground mb-4">
                      Outlined comprehensive GTM roadmap using influencer traction and regional growth playbooks to build brand awareness and drive subscriber acquisition.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-3 bg-background rounded border border-primary/20">
                        <p className="font-medium text-foreground text-sm">Regional Food Influencers</p>
                        <p className="text-muted-foreground text-xs mt-1">Target DMV area food & beverage content creators</p>
                      </div>
                      <div className="p-3 bg-background rounded border border-primary/20">
                        <p className="font-medium text-foreground text-sm">Craft Beer Community</p>
                        <p className="text-muted-foreground text-xs mt-1">Partner with beer enthusiast accounts and local brewery advocates</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Strategic Advantages</h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 border border-primary/20 rounded-lg text-center">
                        <p className="font-semibold text-foreground">Competitive Pricing</p>
                        <p className="text-muted-foreground text-xs mt-2">$40/month subscription</p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg text-center">
                        <p className="font-semibold text-foreground">Market Adaptability</p>
                        <p className="text-muted-foreground text-xs mt-2">Flexible regional expansion</p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg text-center">
                        <p className="font-semibold text-foreground">Quality & Selection</p>
                        <p className="text-muted-foreground text-xs mt-2">Curated premium offerings</p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg text-center">
                        <p className="font-semibold text-foreground">Market Positioning</p>
                        <p className="text-muted-foreground text-xs mt-2">Niche D2C focus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Analysis */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Financial Model & Projections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-4 text-center">Year 1 Base Case Forecast</h4>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                        <p className="text-3xl font-bold text-primary">$4.8M</p>
                        <p className="text-xs text-muted-foreground mt-1">10K subscribers × $40/mo × 12mo</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Costs</p>
                        <p className="text-3xl font-bold text-foreground">$3.3M</p>
                        <p className="text-xs text-muted-foreground mt-1">Variable ($1.8M) + Fixed ($1.5M)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Projected Profit</p>
                        <p className="text-3xl font-bold text-accent">$1.5M</p>
                        <p className="text-xs text-muted-foreground mt-1">31% profit margin</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Sensitivity Analysis</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-primary/20">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Scenario</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground">Subscribers</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground">Monthly Fee</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground">Annual Revenue</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground">Expected Margin</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-primary/10">
                            <td className="py-3 px-4">Pessimistic</td>
                            <td className="text-center py-3 px-4">5,000</td>
                            <td className="text-center py-3 px-4">$40</td>
                            <td className="text-center py-3 px-4">$2.4M</td>
                            <td className="text-center py-3 px-4 text-muted-foreground">$0</td>
                          </tr>
                          <tr className="border-b border-primary/10 bg-primary/5">
                            <td className="py-3 px-4 font-semibold">Expected (Base)</td>
                            <td className="text-center py-3 px-4 font-semibold">10,000</td>
                            <td className="text-center py-3 px-4 font-semibold">$40</td>
                            <td className="text-center py-3 px-4 font-semibold">$4.8M</td>
                            <td className="text-center py-3 px-4 font-semibold text-accent">$1.5M</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Optimistic</td>
                            <td className="text-center py-3 px-4">20,000</td>
                            <td className="text-center py-3 px-4">$40</td>
                            <td className="text-center py-3 px-4">$9.6M</td>
                            <td className="text-center py-3 px-4 text-primary font-semibold">$4.5M</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Cost Structure</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-foreground mb-2">Variable Costs: $1.8M</p>
                        <p className="text-muted-foreground">• Cost per subscription: $15</p>
                        <p className="text-muted-foreground">• Includes product, packaging, shipping</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-2">Fixed Costs: $1.5M</p>
                        <p className="text-muted-foreground">• Operations, marketing, technology</p>
                        <p className="text-muted-foreground">• Team salaries and overhead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Plan */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Implementation Plan & Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Q1: Pilot Launch</h4>
                      <p className="text-sm text-muted-foreground">Launch pilot program with select markets and initial beer selection validation</p>
                    </div>
                    <div className="p-4 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Q2: Official Launch</h4>
                      <p className="text-sm text-muted-foreground">Full-scale launch of "Discovery Mix" with influencer partnerships activated</p>
                    </div>
                    <div className="p-4 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Q3: Performance Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Monitor performance using established KPIs and optimize operations</p>
                    </div>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-4">Key Success Metrics</h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Subscriber Growth</p>
                          <p className="text-2xl font-bold text-primary mt-1">10,000</p>
                          <p className="text-sm text-muted-foreground">subscribers within first year</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <TrendingUp className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Retention Rate</p>
                          <p className="text-2xl font-bold text-accent mt-1">75%</p>
                          <p className="text-sm text-muted-foreground">customer retention target</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Outcome */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Project Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Rocket className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg mb-2">Top 4 Team Selection</h4>
                      <p className="text-muted-foreground">
                        Our team was selected as one of the top 4 finalists to present the final pitch to Domino's Global Strategy Chief. The comprehensive business model, financial validation, and GTM strategy resonated with evaluators, demonstrating the viability of the Brewscovery subscription model in the competitive craft beer market.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            Explore More Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out my other work showcasing business strategy, financial modeling, and market analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrewscoveryProject;
