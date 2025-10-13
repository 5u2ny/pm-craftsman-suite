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
  tags,
  slug,
  pdfLink,
  pdfLinks,
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/50">
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
        
        {/* Tags on image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
          {tags.slice(0, 2).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-[10px] px-2 py-0.5 bg-background/80 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 2 && (
            <Badge 
              variant="secondary" 
              className="text-[10px] px-2 py-0.5 bg-background/80 backdrop-blur-sm"
            >
              +{tags.length - 2}
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground mb-1.5 line-clamp-2 group-hover:text-primary transition-colors font-space-grotesk">
          {title}
        </h3>
        
        <p className="text-xs text-primary/80 mb-3 font-medium uppercase tracking-wide">
          {tagline}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-2">
          {pdfLinks ? (
            <>
              {pdfLinks.slice(0, 1).map((pdf, index) => (
                <Button 
                  key={index}
                  asChild 
                  variant="default" 
                  size="sm" 
                  className="w-full group/btn"
                >
                  <a href={pdf.url} download={pdf.url.split('/').pop()}>
                    <FileDown className="mr-2 h-3.5 w-3.5" />
                    Download
                  </a>
                </Button>
              ))}
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="w-full group/btn"
              >
                <Link to={`/projects/${slug}`}>
                  View Details
                  <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </>
          ) : pdfLink ? (
            <>
              <Button 
                asChild 
                variant="default" 
                size="sm" 
                className="w-full group/btn"
              >
                <a href={pdfLink} download={pdfLink.split('/').pop()}>
                  <FileDown className="mr-2 h-3.5 w-3.5" />
                  Download PDF
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="w-full group/btn"
              >
                <Link to={`/projects/${slug}`}>
                  View Details
                  <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </>
          ) : (
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="w-full group/btn"
            >
              <Link to={`/projects/${slug}`}>
                View Details
                <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;