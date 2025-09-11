import React from "react";
import LiquidGlassCard from "./LiquidGlassCard";

const LiquidGlassDemo = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* SVG Filter for Gooey Effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Liquid Glass Components
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Apple-inspired glass morphism with animated liquid backgrounds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* First Card */}
          <div className="animate-slide-up">
            <LiquidGlassCard
              title="AI Product Innovation"
              description="Leading next-generation AI products from concept to market. Specialized in user-centric design and data-driven growth strategies that deliver measurable business impact."
              primaryButton={{
                text: "View Projects",
                link: "/projects"
              }}
              secondaryButton={{
                text: "Learn More",
                link: "/about"
              }}
              width="w-full max-w-lg"
              className="mx-auto"
            />
          </div>

          {/* Second Card */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <LiquidGlassCard
              title="Design & Strategy"
              description="Crafting beautiful, functional experiences that users love. From wireframes to full product launches, every decision is backed by research and validated with real user data."
              primaryButton={{
                text: "Contact Me",
                link: "/contact"
              }}
              secondaryButton={{
                text: "Case Studies",
                link: "/case-studies"
              }}
              width="w-full max-w-lg"
              className="mx-auto"
            />
          </div>
        </div>

        {/* Large Featured Card */}
        <div className="mt-16 flex justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <LiquidGlassCard
            title="Ready to Build Something Amazing?"
            description="I'm currently open to new opportunities in AI product management, consulting projects, and speaking engagements. Let's discuss how we can create exceptional products together."
            primaryButton={{
              text: "Start a Conversation",
              link: "/contact"
            }}
            secondaryButton={{
              text: "Download Resume",
              onClick: () => console.log("Resume download")
            }}
            width="w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default LiquidGlassDemo;