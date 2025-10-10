import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Recommendations = () => {
  const recommendations = [
    {
      name: "Edward A. Ipser, Jr.",
      title: "Managing Partner at Coactify",
      relationship: "managed Sunny directly",
      date: "August 7, 2025",
      text: "At IpserLab, Sunny led the startup team from conceptualization through early implementation to apply artificial intelligence to the domain of travel. This included: execution, assembling and managing cross-functional teams across frontend, backend, prompt engineering, analytics, and product management. In this role, I oversaw product discovery, defined user personas, facilitated feasibility assessments, and validated the core product hypothesis.\n\nHe oversaw product discovery, defined user personas, facilitated feasibility assessments, and validated the core product hypothesis. He worked directly with other team leads and authored key strategy and execution documents, including the roadmap, PRD, and technical specifications. He guided multiple agile sprints, driving clarity through structured documentation and streamlining cross-team workflows. He introduced a prioritization framework to focus execution on high-impact features and created onboarding systems that improved internal knowledge transfer and contributor ramp-up. Through daily check-ins and weekly syncs, He ensured alignment across all execution teams while leading pre-build research and coordination to maintain roadmap momentum,\n\nI was fortunate that I was able to rely on Sunny to manage so much so well."
    },
    {
      name: "Syd Peng",
      title: "M.Eng CS@Cornell | Ex SDE@American Express",
      relationship: "worked with Sunny on the same team",
      date: "August 2, 2025",
      text: "I had the pleasure of working with Sunny this summer. As the product manager of our team, Sunny is impressive for his sense of responsibility and capability to make the team well-organized and on track. Additionally, his solid technical background enabled him to understand the tech we used and provide constructive feedback through the development process.\n\nDuring our collaboration, Sunny consistently demonstrated product vision, foresight, and excellent leadership skills. One thing I appreciated most was his commitment to thorough documentation — thanks to his efforts, both new team members and stakeholders could quickly catch up and understand every aspect of the product. He also played a key role in project management by making thoughtful adjustments based on current progress and leading daily stand-up and sprint meetings with clarity and efficiency.\n\nWishing Sunny all the best in his future journey — I'm confident he'll make a meaningful impact wherever he goes!"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Recommendations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What colleagues and managers say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <Card 
              key={index} 
              className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{rec.name}</h3>
                <p className="text-sm text-primary font-medium">{rec.title}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {rec.date} • {rec.relationship}
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {rec.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
