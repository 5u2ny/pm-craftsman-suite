import { ArrowRight, FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  metrics: string[];
  tags: string[];
  slug: string;
  pdfLink?: string;
  pdfLinks?: Array<{ name: string; url: string }>;
}

const ProjectCard = ({
  title,
  tagline,
  description,
  image,
  metrics,
  tags,
  slug,
  pdfLink,
  pdfLinks,
}: ProjectCardProps) => {
  return (
    <Card
      className="group hover-lift overflow-hidden card-gradient border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/30 animate-fade-in h-full flex flex-col hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Button
            size="sm"
            className="bg-white/90 text-black hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
            asChild
          >
            <Link to={`/projects/${slug}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4 flex-1">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm font-medium text-primary mb-2">{tagline}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Metrics */}
        {metrics.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
              Key Impact
            </h4>
            <div className="space-y-1">
              {metrics.slice(0, 2).map((metric, index) => (
                <p key={index} className="text-sm text-success font-medium animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  • {metric}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs hover-scale transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2">
          {pdfLinks ? (
            <>
              {pdfLinks.map((pdf, index) => (
                <Button 
                  key={index}
                  asChild 
                  variant="default" 
                  size="sm" 
                  className="w-full group/btn hover-scale hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  <a href={pdf.url} download={pdf.url.split('/').pop()}>
                    {pdf.name}
                    <FileDown className="ml-2 h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              ))}
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="w-full group/btn hover-scale border-2"
              >
                <Link to={`/projects/${slug}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </>
          ) : pdfLink ? (
            <>
              <Button 
                asChild 
                variant="default" 
                size="sm" 
                className="w-full group/btn hover-scale hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <a href={pdfLink} download={pdfLink.split('/').pop()}>
                  Download PDF
                  <FileDown className="ml-2 h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="w-full group/btn hover-scale border-2"
              >
                <Link to={`/projects/${slug}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </>
          ) : (
            <Button asChild variant="outline" size="sm" className="w-full group/btn hover-scale border-2">
              <Link to={`/projects/${slug}`}>
                View Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;