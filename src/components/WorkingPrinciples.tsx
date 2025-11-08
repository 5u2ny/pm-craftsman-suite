import { Target, Compass, Rocket, Scale, ArrowRight } from "lucide-react";

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
      title: "Ship, learn, iterate relentlessly",
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
        <div className="text-center mb-20 animate-fade-in relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">My Product Philosophy</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in relative group cursor-default" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent bg-[length:200%_auto] transition-all duration-500 group-hover:bg-[position:100%_0]">
              How I Think & Work
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </h2>
          
          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed relative group cursor-default">
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                <span className="text-primary/80 text-5xl md:text-6xl leading-none">"</span>
              </span>
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-primary/70">
                I build products that turn complexity into clarity and insight into user impact.
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                <span className="text-primary/80 text-5xl md:text-6xl leading-none">"</span>
              </span>
            </p>
          </div>
          
          <div className="mt-8 flex justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in z-10"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-lg shadow-lg z-20 border-4 border-background animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>
                    {index + 1}
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 h-full hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:bg-gradient-to-br hover:from-card hover:to-primary/5">
                    <div className="flex-shrink-0 mb-4 p-4 rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="w-8 h-8 text-primary relative z-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground transition-all duration-500 group-hover:text-primary group-hover:scale-105">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed transition-all duration-500 group-hover:text-foreground">
                      {principle.description}
                    </p>
                  </div>
                  {index < principles.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20 animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.3}s` }}>
                      <div className="flex items-center gap-1 animate-pulse">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-primary/40 to-primary"></div>
                        <ArrowRight className="w-5 h-5 text-primary" strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciples;
