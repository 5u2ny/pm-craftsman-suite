const WorkingPrinciples = () => {
  const principles = [
    {
      number: "01",
      title: "Start with the user, end with measurable value",
      description: "Every roadmap begins from real human pain points and ends in outcomes that move the needle."
    },
    {
      number: "02",
      title: "Data frames direction, not destination",
      description: "Metrics validate hypotheses, but judgment and context define what truly matters."
    },
    {
      number: "03",
      title: "Ship, learn, iterate—relentlessly",
      description: "Progress means getting live fast, collecting feedback, and evolving with purpose."
    },
    {
      number: "04",
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

        <div className="grid gap-8 md:gap-10">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-6 items-start p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <div className="flex-shrink-0">
                  <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                    {principle.number}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciples;
