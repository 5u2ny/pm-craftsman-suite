import { ArrowRight, TrendingUp } from "lucide-react";
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
  featured?: boolean;
}

const ProjectCard = ({
  title,
  tagline,
  description,
  image,
  metrics,
  tags,
  slug,
  featured = false,
}: ProjectCardProps) => {
  return (
    <Card
      className={`group hover-lift overflow-hidden card-gradient border ${
        featured ? "border-primary/20" : "border-border"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">
              <TrendingUp className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
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
                <p key={index} className="text-sm text-success font-medium">
                  • {metric}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <Button asChild variant="outline" size="sm" className="w-full group/btn">
          <Link to={`/projects/${slug}`}>
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;