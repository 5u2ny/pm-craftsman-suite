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
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Floating gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.08] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/[0.06] rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/[0.04] rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 right-20 w-24 h-24 border border-primary/10 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 border border-accent/15 rounded-full animate-spin-reverse"></div>
          
          {/* Floating particles */}
          <div className="absolute top-40 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
          <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-accent/30 rounded-full animate-float-delay"></div>
          <div className="absolute top-60 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              I'm always interested in discussing product opportunities, AI/ML innovations, 
              or sharing insights about building user-centric products. Let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">

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
                  <div key={index} className="flex items-start space-x-3 animate-slide-up group/contact" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-scale hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                        <method.icon className="h-5 w-5 text-primary group-hover/contact:scale-110 transition-transform" />
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
                  <div key={index} className="flex items-start animate-slide-up group/avail hover:translate-x-1 transition-all duration-300" style={{ animationDelay: `${0.5 + (index * 0.05)}s` }}>
                    <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0 group-hover/avail:animate-pulse" />
                    <p className="text-sm text-muted-foreground group-hover/avail:text-foreground transition-colors">{item}</p>
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
            <Card className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: "0.5s" }}>
              <h3 className="font-semibold text-foreground mb-2">
                Are you open to relocation?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes, I am open to relocating anywhere in the United States for the right opportunity.
              </p>
            </Card>
            <Card className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: "0.6s" }}>
              <h3 className="font-semibold text-foreground mb-2">
                What type of employment are you seeking?
              </h3>
              <p className="text-sm text-muted-foreground">
                I am looking for full-time roles only at this time.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;