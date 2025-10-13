import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, BarChart3, TrendingUp, Users, Target } from "lucide-react";
import airlinesImage from "@/assets/airlines-data-analysis.jpg";

const AirlinesDataAnalysis = () => {
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
              <Badge>Data Analysis</Badge>
              <Badge>Statistical Modeling</Badge>
              <Badge>JASP</Badge>
              <Badge>Hypothesis Testing</Badge>
              <Badge>Predictive Analytics</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Airlines Customer <span className="text-gradient">Satisfaction Analysis</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl">
              MBA Data Analysis Project, Fall 2024 | William & Mary – Raymond A. Mason School of Business
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <a href="/projects/DataAnalysis.pdf" download="Airlines_Data_Analysis.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
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
              src={airlinesImage} 
              alt="Airlines Data Analysis Project" 
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
                  <strong>Role:</strong> Data Analyst and Visual Storytelling Owner
                </p>
                <p>
                  <strong>Duration:</strong> August 2024 - October 2024
                </p>
                <p>
                  Executed a comprehensive data-driven study on airline service ratings using a Kaggle dataset with 5,000 samples from a population of 129,880 customer records. Applied statistical modeling to identify key predictors of customer satisfaction and developed actionable recommendations for quality improvements in the post-pandemic travel landscape.
                </p>
                <p>
                  Performed all statistical modeling and built the complete insight presentation from scratch, focusing on prescriptive and predictive analytics to answer critical questions about factors impacting customer satisfaction.
                </p>
              </CardContent>
            </Card>

            {/* Research Questions */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Research Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="space-y-3">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Prescriptive Analysis</h4>
                    <p>What factors are impacting customer satisfaction?</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Predictive Analysis</h4>
                    <p>What factors predict customer satisfaction?</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hypotheses Tested */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Hypotheses Tested
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">Prescriptive Hypotheses</h4>
                    <div className="space-y-3">
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="font-medium text-foreground">H1: Gender Affects Baggage Handling Rating</p>
                        <p className="text-sm text-muted-foreground mt-2">Result: Not significant (t = 1.701, p = 0.089)</p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="font-medium text-foreground">H2: Service Class Affects Check-in Rating</p>
                        <p className="text-sm text-muted-foreground mt-2">Result: Significant (F = 61.015, p &lt; .001)</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">Predictive Hypotheses</h4>
                    <div className="space-y-3">
                      <div className="p-4 border border-accent/20 rounded-lg">
                        <p className="font-medium text-foreground">H3: Gender Predicts Cleanliness Rating</p>
                        <p className="text-sm text-muted-foreground mt-2">Result: Not significant (F = 0.043, p = 0.836)</p>
                      </div>
                      <div className="p-4 border border-accent/20 rounded-lg">
                        <p className="font-medium text-foreground">H4: Service Class Predicts Onboard Service Rating</p>
                        <p className="text-sm text-muted-foreground mt-2">Result: Significant (F = 20.301, p &lt; .001)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Findings */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Users className="h-6 w-6 text-primary" />
                  Key Findings & Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Service Class Impact</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Service class identified as the strongest predictor of check-in satisfaction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Significant differences in check-in service ratings across airline classes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Class significantly predicts onboard service ratings</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Gender Analysis</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>No significant correlation between gender and baggage handling satisfaction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Gender does not predict cleanliness ratings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Contradicts previous studies (Siu 2019, Eriksson 2022)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-lg space-y-3">
                    <h4 className="font-semibold text-foreground">Statistical Methods Applied</h4>
                    <div className="grid sm:grid-cols-3 gap-4 text-sm">
                      <div className="p-3 bg-background rounded border border-primary/20">
                        <p className="font-medium text-foreground">Independent Sample T-Tests</p>
                        <p className="text-muted-foreground text-xs mt-1">For gender comparisons</p>
                      </div>
                      <div className="p-3 bg-background rounded border border-primary/20">
                        <p className="font-medium text-foreground">ANOVA</p>
                        <p className="text-muted-foreground text-xs mt-1">For service class analysis</p>
                      </div>
                      <div className="p-3 bg-background rounded border border-primary/20">
                        <p className="font-medium text-foreground">Linear Regression</p>
                        <p className="text-muted-foreground text-xs mt-1">For predictive modeling</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Dataset Characteristics</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="font-medium text-foreground">Sample Size</p>
                        <p className="text-2xl font-bold text-primary mt-1">5,000</p>
                        <p className="text-muted-foreground text-xs">from 129,880 total records</p>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <p className="font-medium text-foreground">Data Source</p>
                        <p className="text-lg font-semibold text-foreground mt-1">Kaggle Dataset</p>
                        <p className="text-muted-foreground text-xs">Post-flight survey feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Strategic Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">1. Maintain Gender-Neutral Standards</h4>
                    <p className="text-muted-foreground">Keep cleanliness and baggage handling standards equal for all passengers regardless of gender, as these factors show no significant variation.</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">2. Focus on Economy Class Improvements</h4>
                    <p className="text-muted-foreground">Increase check-in and onboard services for Economy class passengers, as service class significantly impacts satisfaction ratings.</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">3. Sustain Quality Across All Classes</h4>
                    <p className="text-muted-foreground">Maintain current quality standards while implementing targeted improvements based on predictive models for each customer segment.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitations */}
            <Card className="border-primary/20 shadow-lg animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Limitations & Concerns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Study Limitations</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Lack of generalizability to all airlines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Low representation of Economy Plus class</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Limited available literature for comparison</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Methodological Concerns</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Ethical considerations around gender-focused analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Potential accuracy challenges due to human error in data collection</span>
                      </li>
                    </ul>
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
            Check out my other research and product work showcasing data analysis, strategic thinking, and problem-solving.
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

export default AirlinesDataAnalysis;
