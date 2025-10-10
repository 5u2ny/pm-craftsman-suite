import { ExternalLink, Calendar, MapPin, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([0]); // First card expanded by default
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(prev => prev === company ? null : company);
  };

  const experiences = [{
    role: "Lead AI Product Manager Intern",
    company: "IPSERLAB",
    logo: "/logos/ipserlab-logo.png",
    location: "Dallas, TX",
    period: "May 2025 - Ongoing",
    website: "https://www.ipserlab.com/",
    description: "Promoted to Lead AI Product Manager within 4 weeks. Leading 0-to-1 development of AI-powered travel planning platform at stealth-stage startup.",
    achievements: ["Championed the 0-to-1 development by architecting multi-disciplinary teams and ownership models, earning promotion in 4 weeks", "Orchestrated complete product discovery process from user research and problem framing to persona mapping", "Directed product strategy under the CTO, delivering 10+ core artifacts (roadmap, PRD, technical specs) that accelerated initial build phase by 25%", "Steered end-to-end execution of 5 agile sprint cycles, crafting 50+ user stories that cut developer clarification cycles by 40%", "Drove product velocity by implementing RICE prioritization framework, enabling high-impact feature delivery within 3 weeks and cutting backlog churn by 35%", "Engineered asynchronous onboarding system for 20+ contributors, slashing onboarding time by 3.5 days and reducing support queries by 63%"],
    techStack: ["Product Strategy", "AI/ML", "RICE Framework", "Agile/Scrum", "Team Leadership", "0-to-1 Development"]
  }, {
    role: "Graduate Teaching Assistant",
    company: "William & Mary - Mason School of Business",
    logo: "/logos/wm-logo.png",
    location: "Williamsburg, VA",
    period: "Aug 2025 - Present",
    website: "https://mason.wm.edu/",
    description: "Supporting undergraduate students in Business Statistics, Excel, Visualization, and Python through comprehensive academic assistance.",
    achievements: ["Assist undergraduate students in Business Statistics, Excel, Visualization, and Python by helping them understand concepts, complete assignments, and apply analytical techniques effectively", "Provide academic support outside class through one-on-one guidance, troubleshooting code and formulas, and clarifying analytical methods to strengthen student understanding"],
    techStack: ["Python", "Excel", "Business Statistics", "Data Visualization", "Teaching", "Academic Support"]
  }, {
    role: "Graduate Research Assistant",
    company: "William & Mary - Mason School of Business",
    logo: "/logos/wm-logo.png",
    location: "Williamsburg, VA",
    period: "May 2025 - Aug 2025",
    website: "https://mason.wm.edu/",
    description: "Developed automated cybersecurity assessment pipeline and benchmarking dashboards for NIST control compliance analysis across multiple companies.",
    achievements: ["Developed an automated cybersecurity assessment pipeline in Python to clean, reshape, and analyze NIST control compliance data across 12+ companies, improving accuracy and analysis speed by 40%", "Designed multi-level benchmarking dashboards to compare maritime vs non-maritime firms, revealing sector-wide gaps in personnel security and information integrity controls through penalty-weighted scoring", "Integrated demographic and performance datasets to visualize compliance trends by company size, location, and industry enabling actionable insights and targeted recommendations for underperforming firms"],
    techStack: ["Python", "Cybersecurity", "NIST Compliance", "Data Analysis", "Dashboard Design", "Research"]
  }, {
    role: "Cybersecurity Research Coordinator",
    company: "RESPONDR",
    logo: "/logos/respondr-logo.png",
    location: "United States (Remote)",
    period: "Jun 2025 - Aug 2025",
    website: "#",
    description: "Part-time cybersecurity research position focusing on SOC Type II compliance and regulatory infrastructure assessments.",
    achievements: ["Conducting cybersecurity risk assessments for SoC Type II Compliance", "Evaluating startup-level infrastructure readiness against regulatory benchmarks and compliance requirements", "Supporting the development of mitigation recommendations and control strategies to reduce risk exposure across data, access, and process layers"],
    techStack: ["SOC Type II", "Risk Assessment", "Compliance", "Cybersecurity", "Infrastructure Evaluation"]
  }, {
    role: "Product Analyst (Growth Marketing Specialist)",
    company: "ASANIFY",
    logo: "/logos/asanify-logo.png",
    location: "Kolkata, India",
    period: "Sep 2022 - Aug 2023",
    website: "https://asanify.com/",
    description: "Drove growth and revenue optimization for HR and Payroll automation software serving small to medium-sized businesses.",
    achievements: ["Spearheaded CRM automation and audience segmentation strategy driving 18% increase in revenue efficiency and 27% boost in lead conversion", "Engineered real-time onboarding dashboards in Tableau to pinpoint user drop-off patterns, accelerating product analytics reporting by 31%", "Pioneered Product-Led Growth (PLG) inbound funnel leveraging LinkedIn data, resulting in 14% ARR increase and 19% improvement in onboarding retention"],
    techStack: ["CRM Automation", "Tableau", "Product-Led Growth", "Revenue Optimization", "Lead Conversion", "User Analytics"]
  }, {
    role: "Business Development Associate",
    company: "YOCKET",
    logo: "/logos/yocket-logo.png",
    location: "Mumbai, India",
    period: "Mar 2022 - Sep 2022",
    website: "https://yocket.com/",
    description: "Optimized conversion funnels and activation strategies for India's largest community-based platform for study-abroad aspirants.",
    achievements: ["Collaborated directly with product team to redesign user qualification journeys, improving conversion efficiency by 35%", "Executed data-driven activation strategies based on user profiles and CRM signals, generating over $700K in revenue across two quarters"],
    techStack: ["User Journey Design", "CRM Strategy", "Conversion Optimization", "Data-Driven Strategy", "Funnel Optimization"]
  }, {
    role: "Product-led Growth Analyst (Growth Partner)",
    company: "LEADLE",
    logo: "/logos/leadle-logo.png",
    location: "Chennai, India",
    period: "Oct 2021 - Mar 2022",
    website: "https://www.leadlehq.com/",
    description: "Optimized user activation and lead generation for B2B SaaS platform providing product-led growth tools and analytics.",
    achievements: ["Optimized user activation paths by analyzing churn signals and MVP-stage feedback, boosting SQL volume by 20% and cutting churn by 17%", "Engineered automated lead capture system integrated with GA dashboards, which quadrupled booked meetings and identified top-performing acquisition channels"],
    techStack: ["B2B SaaS", "Churn Analysis", "Lead Capture", "Google Analytics", "User Activation", "Growth Analytics"]
  }];
  return <section className="py-12 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-l from-accent/8 to-primary/8 rounded-xl rotate-45 animate-bounce"></div>
        
        {/* Orbital rings */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-primary/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 border border-accent/10 rounded-full animate-spin-reverse"></div>
        
        {/* Gradient lines */}
        <div className="absolute top-40 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-fade-in-out"></div>
        <div className="absolute bottom-40 right-1/3 w-px h-24 bg-gradient-to-t from-transparent via-accent/25 to-transparent animate-fade-in-out-delay"></div>
        
        {/* Floating dots */}
        <div className="absolute top-60 left-20 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 right-32 w-3 h-3 bg-accent/30 rounded-full animate-float-delay"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gradient font-display">Work Experience</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into reality through strategic product management and data-driven growth
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/20 via-accent/40 to-primary/20 animate-draw-line"></div>
          
          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);
              const isSelected = selectedCompany === exp.company;
              
              return <div key={index} className="relative group animate-slide-up" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background shadow-lg transition-all duration-300 z-10 cursor-pointer ${
                  isSelected 
                    ? 'bg-primary scale-150 shadow-primary/50' 
                    : 'bg-gradient-to-r from-primary to-accent group-hover:scale-125'
                }`}
                onClick={() => handleCompanyClick(exp.company)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-ping opacity-20"></div>
                </div>
                
                {/* Experience Card */}
                <div className={`ml-20 bg-card/60 backdrop-blur-md rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                  isSelected
                    ? 'border-primary shadow-2xl ring-2 ring-primary/30 scale-[1.02]'
                    : 'border-border/50 hover:border-primary/30 hover:bg-card/80 hover:-translate-y-2'
                }`}
                onClick={() => toggleCard(index)}
                >
                  
                  {/* Card Header */}
                  <div className="flex flex-col gap-4 mb-6">
                    {/* Top Row: Role and Date */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      {/* Role Title */}
                      <h3 className={`text-2xl font-bold leading-tight transition-colors ${
                        isExpanded ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}>
                        {exp.role}
                      </h3>
                      
                      {/* Date Badge - Always visible and right-aligned */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 shrink-0 self-start sm:self-auto">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-accent whitespace-nowrap">{exp.period}</span>
                      </div>
                    </div>
                    
                    {/* Company Info Row */}
                    <div className="flex items-center gap-3">
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors hover:scale-110 duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img src={exp.logo} alt={`${exp.company} logo`} className="h-10 w-10 object-contain" />
                      </a>
                      <div className="flex-1">
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.company}
                        </a>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {isExpanded ? (
                          <>
                            <span className="hidden sm:inline">Collapse</span>
                            <ChevronUp className="h-5 w-5 transition-transform" />
                          </>
                        ) : (
                          <>
                            <span className="hidden sm:inline">Expand</span>
                            <ChevronDown className="h-5 w-5 transition-transform" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base mb-4">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    {exp.achievements && <ul className="space-y-2.5 mb-6">
                        {exp.achievements.map((achievement, i) => {
                    // Extract and highlight numbers
                    const parts = achievement.split(/(\d+[\d,.\$KM%+]*[\w]*)/g);
                    return <li key={i} className="flex items-start gap-3 text-foreground/90 text-sm leading-relaxed group/item">
                              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                              <span className="flex-1">
                                {parts.map((part, idx) => {
                          // Check if this part is a number
                          if (/^\d+[\d,.\$KM%+]*[\w]*$/.test(part)) {
                            return <span key={idx} className="font-bold text-primary hover:text-accent transition-colors cursor-default inline-block hover:scale-110 duration-200">
                                        {part}
                                      </span>;
                          }
                          return <span key={idx}>{part}</span>;
                        })}
                              </span>
                            </li>;
                  })}
                      </ul>}
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {exp.techStack.map((tech, i) => <Badge key={i} variant="secondary" className="px-3 py-1 text-sm bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all duration-300 font-medium" style={{
                    animationDelay: `${index * 0.15 + i * 0.05}s`
                  }}>
                          {tech}
                        </Badge>)}
                    </div>
                    
                    {/* Footer */}
                    {exp.company !== "William & Mary - Mason School of Business" && exp.company !== "RESPONDR" && <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span>Impact driven results</span>
                        </div>
                        
                        <a 
                          href={exp.website} 
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent hover:text-accent/80 bg-accent/10 hover:bg-accent/20 rounded-lg transition-all duration-300 hover:scale-105 group/link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Learn more</span>
                          <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>}
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;