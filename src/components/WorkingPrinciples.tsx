import { Target, Compass, Rocket, Scale } from "lucide-react";

const WorkingPrinciples = () => {
  const principles = [
    {
      icon: Target,
      title: "Start with the user, end with measurable value",
      description: "Every roadmap begins from real human pain points and ends in outcomes that move the needle."
    },
    {
      icon: Compass,
      title: "Data frames direction, not destination",
      description: "Metrics validate hypotheses, but judgment and context define what truly matters."
    },
    {
      icon: Rocket,
      title: "Ship, learn, iterate—relentlessly",
      description: "Progress means getting live fast, collecting feedback, and evolving with purpose."
    },
    {
      icon: Scale,
      title: "Balance user love, tech feasibility, and business logic",
      description: "Great products live where desirability, viability, and feasibility intersect—and tradeoffs are intentional."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            How I Think & Work
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
            "I build products that turn complexity into clarity and insight into user impact."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 h-full">
                  <div className="flex-shrink-0 mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciples;
