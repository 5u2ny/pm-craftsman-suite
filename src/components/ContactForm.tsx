import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <Card className="card-gradient p-8 text-center animate-fade-in">
        <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. I typically respond within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="card-gradient p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              className="bg-background/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company (optional)"
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            required
            placeholder="What would you like to discuss?"
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project, role, or collaboration opportunity..."
            className="bg-background/50 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full button-glow"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

          <p className="text-sm text-muted-foreground text-center">
            I typically respond within 24 hours. For urgent matters, 
            feel free to reach out directly at sunny.mba@proton.me or LinkedIn.
          </p>
      </form>
    </Card>
  );
};

export default ContactForm;