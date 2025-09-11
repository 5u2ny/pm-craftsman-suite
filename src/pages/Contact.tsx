import { Mail, Linkedin, Github, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@example.com",
      action: "mailto:alex.chen@example.com",
      description: "Best for detailed project discussions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/alexchen-pm",
      action: "https://linkedin.com/in/alexchen-pm",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@alexchen",
      action: "https://github.com/alexchen",
      description: "Check out my technical projects"
    }
  ];

  const availability = [
    "Product Management roles (Senior PM / Lead PM level)",
    "Consulting on AI/ML product strategy",
    "Speaking at product management events",
    "Mentoring aspiring PMs"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 relative">
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
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* Contact Methods */}
            <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Other Ways to Reach Me
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{method.label}</p>
                      <Button
                        variant="link"
                        asChild
                        className="p-0 h-auto text-sm text-primary hover:text-primary/80"
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
            <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Currently Open To
              </h3>
              <div className="space-y-3">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location & Response Time */}
            <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">San Francisco Bay Area</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pacific Time Zone (PST/PDT)
              </p>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-success mr-2" />
                <span className="text-sm text-success font-medium">
                  Typically responds within 24 hours
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                What type of roles are you looking for?
              </h3>
              <p className="text-sm text-muted-foreground">
                I'm interested in Senior PM or Lead PM roles at growth-stage companies, 
                particularly those working on AI/ML products or consumer-facing platforms.
              </p>
            </Card>
            <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Do you offer consulting services?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes, I provide product strategy consulting for AI/ML products, 
                MVP scoping, and product-market fit validation on a project basis.
              </p>
            </Card>
            <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Can you speak at events?
              </h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! I love sharing insights about AI product management, 
                user research methodologies, and building data-driven product culture.
              </p>
            </Card>
            <Card className="bg-white/[0.02] backdrop-blur-[40px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative backdrop-saturate-150 p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Do you mentor other PMs?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes, I mentor aspiring and junior PMs. I'm particularly passionate 
                about helping people transition into product management from other fields.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;