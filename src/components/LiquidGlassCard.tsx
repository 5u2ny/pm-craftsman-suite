import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonConfig {
  text: string;
  link?: string;
  onClick?: () => void;
}

interface LiquidGlassCardProps {
  title: string;
  description: string;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  width?: string;
  height?: string;
  position?: string;
  className?: string;
}

const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  width = "w-96",
  height = "h-auto",
  position = "relative",
  className = "",
}) => {
  return (
    <div className={cn("liquid-glass-container", position, className)}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="liquid-blobs-container">
          {/* Blue Blob */}
          <div className="liquid-blob liquid-blob-blue animate-float-1"></div>
          
          {/* Green Blob */}
          <div className="liquid-blob liquid-blob-green animate-float-2"></div>
          
          {/* Orange Blob */}
          <div className="liquid-blob liquid-blob-orange animate-float-3"></div>
          
          {/* Purple Blob */}
          <div className="liquid-blob liquid-blob-purple animate-float-4"></div>
        </div>
      </div>

      {/* Glass Card */}
      <div
        className={cn(
          "liquid-glass-card",
          width,
          height,
          // Glass morphism styles
          "relative z-10 p-8",
          "bg-white/[0.08] backdrop-blur-[40px] backdrop-saturate-[180%]",
          "border border-white/[0.18] rounded-[20px]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.2)]",
          // Gradient overlay for depth
          "before:absolute before:inset-0 before:rounded-[20px]",
          "before:bg-gradient-to-br before:from-white/[0.15] before:via-white/[0.05] before:to-transparent",
          "before:opacity-60 before:pointer-events-none",
          // Top glare effect
          "after:absolute after:top-0 after:left-0 after:right-0 after:h-px",
          "after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent",
          "after:rounded-t-[20px]",
          // Hover effects
          "transition-all duration-500 ease-out",
          "hover:shadow-[0_16px_64px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.25)]",
          "hover:border-white/[0.25]",
          "hover:bg-white/[0.12]",
          "hover:scale-[1.02]"
        )}
      >
        {/* Content */}
        <div className="relative z-20">
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
            {title}
          </h3>
          
          <p className="text-white/80 text-base leading-relaxed mb-8">
            {description}
          </p>

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-3">
              {primaryButton && (
                <Button
                  variant="default"
                  size="lg"
                  className={cn(
                    "bg-white/20 hover:bg-white/30 text-white border-white/30",
                    "backdrop-blur-sm transition-all duration-300",
                    "hover:scale-105 hover:shadow-lg"
                  )}
                  onClick={primaryButton.onClick}
                  asChild={!!primaryButton.link}
                >
                  {primaryButton.link ? (
                    <a href={primaryButton.link} className="w-full">
                      {primaryButton.text}
                    </a>
                  ) : (
                    primaryButton.text
                  )}
                </Button>
              )}

              {secondaryButton && (
                <Button
                  variant="outline"
                  size="lg"
                  className={cn(
                    "border-white/30 text-white hover:bg-white/10",
                    "backdrop-blur-sm transition-all duration-300",
                    "hover:scale-105 hover:border-white/50"
                  )}
                  onClick={secondaryButton.onClick}
                  asChild={!!secondaryButton.link}
                >
                  {secondaryButton.link ? (
                    <a href={secondaryButton.link} className="w-full">
                      {secondaryButton.text}
                    </a>
                  ) : (
                    secondaryButton.text
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiquidGlassCard;