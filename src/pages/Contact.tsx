import { Mail, Linkedin, Github, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sunnysoni.mba@proton.me",
      action: "mailto:sunnysoni.mba@proton.me",
      description: "Best for detailed project discussions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/sunnysonimba",
      action: "https://linkedin.com/in/sunnysonimba",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@sunnysoni",
      action: "https://github.com/sunnysoni",
      description: "Check out my technical projects"
    }
  ];

  const availability = [
    "Product Manager",
    "Associate Product Manager",
    "Product Management Analyst",
    "Technical Product Manager",
    "Project Manager",
    "Program Manager",
    "Associate Technology Consultant",
    "IT Consultant",
    "AI Consultant"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing product opportunities, AI/ML innovations, 
            or sharing insights about building user-centric products. Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
              <p className="text-muted-foreground">
                Tell me about your project, role opportunity, or collaboration idea.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {/* Contact Methods */}
            <Card className="card-gradient p-6 hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Other Ways to Reach Me
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-slide-up" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-scale transition-all duration-300">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{method.label}</p>
                      <Button
                        variant="link"
                        asChild
                        className="p-0 h-auto text-sm text-primary hover:text-primary/80 story-link"
                      >
                        <a href={method.action} target="_blank" rel="noopener noreferrer">
                          {method.value}
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="card-gradient p-6 hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Currently Open To
              </h3>
              <div className="space-y-3">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${0.5 + (index * 0.05)}s` }}>
                    <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold text-foreground mb-2">
                What type of roles are you looking for?
              </h3>
              <p className="text-sm text-muted-foreground">
                I'm open to Product Manager, Associate Product Manager, Product Management Analyst, 
                Technical Product Manager, Project Manager, Program Manager, Associate Technology Consultant, 
                IT Consultant, and AI Consultant positions.
              </p>
            </Card>
            <Card className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: "0.4s" }}>
              <h3 className="font-semibold text-foreground mb-2">
                Do you offer consulting services?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes, I provide product strategy consulting for AI/ML products, 
                MVP scoping, and product-market fit validation on a project basis.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;