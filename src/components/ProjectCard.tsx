import { ArrowRight, FileDown, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden card-gradient border border-border/50 transition-all duration-700 h-full flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border effect */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10
        animate-shimmer
      `} />
      
      {/* Glowing corner effect */}
      <div className={`
        absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl 
        opacity-0 group-hover:opacity-100 transition-all duration-700
        ${isHovered ? 'scale-150' : 'scale-100'}
      `} />

      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className={`
            w-full h-full object-cover transition-all duration-1000
            ${isHovered ? 'scale-110 brightness-75' : 'scale-100 brightness-100'}
          `}
        />
        
        {/* Gradient overlay */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent
          transition-opacity duration-500
          ${isHovered ? 'opacity-90' : 'opacity-60'}
        `} />
        
        {/* Floating eye icon on hover */}
        <div className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-500
          ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        `}>
          <div className="bg-primary/90 backdrop-blur-sm p-4 rounded-full animate-pulse">
            <Eye className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className={`
            text-xl font-bold text-foreground font-space-grotesk
            transition-all duration-500
            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'}
          `}>
            {title}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col relative">
        {/* Animated background particles */}
        <div className={`
          absolute top-0 left-0 w-2 h-2 bg-primary/40 rounded-full
          transition-all duration-700
          ${isHovered ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-10 -translate-y-10 opacity-0'}
        `} />
        <div className={`
          absolute bottom-0 right-0 w-3 h-3 bg-accent/40 rounded-full
          transition-all duration-700 delay-100
          ${isHovered ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-10 translate-y-10 opacity-0'}
        `} />

        {/* Tagline */}
        <p className={`
          text-sm font-medium text-primary mb-3 font-poppins uppercase tracking-wide
          transition-all duration-500
          ${isHovered ? 'text-accent' : 'text-primary'}
        `}>
          {tagline}
        </p>

        {/* Project Overview */}
        <div className="mb-4 flex-1">
          <h4 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider font-space-grotesk">
            Overview
          </h4>
          <p className={`
            text-muted-foreground text-sm leading-relaxed
            transition-all duration-500
            ${isHovered ? 'text-foreground/90' : 'text-muted-foreground'}
          `}>
            {description}
          </p>
        </div>

        {/* Tags with stagger animation */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className={`
                text-xs transition-all duration-500 font-medium
                ${isHovered ? 'scale-105 shadow-md bg-primary/10 text-primary border-primary/30' : 'scale-100'}
              `}
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge 
              variant="outline" 
              className="text-xs"
            >
              +{tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5 mt-auto">
          {pdfLinks ? (
            <>
              {pdfLinks.map((pdf, index) => (
                <Button 
                  key={index}
                  asChild 
                  variant="default" 
                  size="sm" 
                  className={`
                    w-full group/btn font-semibold
                    transition-all duration-500
                    ${isHovered ? 'shadow-lg shadow-primary/30 translate-x-0' : '-translate-x-1'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
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
                className={`
                  w-full group/btn border-2 font-semibold
                  transition-all duration-500
                  ${isHovered ? 'bg-primary/5 border-primary/50 translate-x-0' : 'translate-x-1'}
                `}
              >
                <Link to={`/projects/${slug}`}>
                  View Full Details
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
                className={`
                  w-full group/btn font-semibold
                  transition-all duration-500
                  ${isHovered ? 'shadow-lg shadow-primary/30 translate-y-0' : 'translate-y-1'}
                `}
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
                className={`
                  w-full group/btn border-2 font-semibold
                  transition-all duration-500
                  ${isHovered ? 'bg-primary/5 border-primary/50 translate-y-0' : '-translate-y-1'}
                `}
              >
                <Link to={`/projects/${slug}`}>
                  View Full Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </>
          ) : (
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className={`
                w-full group/btn border-2 font-semibold
                transition-all duration-700
                ${isHovered ? 'bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/40 scale-105' : 'scale-100'}
              `}
            >
              <Link to={`/projects/${slug}`}>
                View Full Details
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Animated shine effect on hover */}
      <div className={`
        absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
        -translate-x-full transition-transform duration-1000
        ${isHovered ? 'translate-x-full' : '-translate-x-full'}
        pointer-events-none
      `} />
    </Card>
  );
};

export default ProjectCard;