import { Brain, Target, Users2, TrendingUp, Award, BookOpen, CheckCircle2, GraduationCap, ChefHat, Plane, Music, Dumbbell, Camera, Cpu, Tv, Film, Radio, Heart, Trophy, Building2, HandHeart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    {
      category: "Product Management",
      items: ["Product Strategy & Roadmap", "User Growth", "E-commerce Funnel Optimization", "A/B Testing", "Data-Driven Decision Making", "CRO", "UI/UX Optimization", "Agile & Scrum"]
    },
    {
      category: "Technical & AI",
      items: ["LLMs", "Generative AI", "RAG", "LangChain", "Prompt Engineering", "AI Product Strategy", "APIs", "JIRA", "Figma"]
    },
    {
      category: "Data & Analytics", 
      items: ["SQL", "Python (Pandas, NumPy)", "Tableau", "Power BI", "Excel", "Amplitude", "Google Analytics", "JASP"]
    },
    {
      category: "Leadership & Communication",
      items: ["Product Lifecycle Management", "User Research", "RICE & OKR Frameworks", "GTM Strategy", "Stakeholder Communication", "Cross-functional Teams"]
    }
  ];

  const hobbies = [
    { name: "Cooking", icon: "ChefHat" },
    { name: "Traveling", icon: "Plane" },
    { name: "Listening to Music", icon: "Music" },
    { name: "Working Out", icon: "Dumbbell" },
    { name: "Photography", icon: "Camera" },
    { name: "Tech Enthusiast", icon: "Cpu" },
    { name: "Watching TV Shows", icon: "Tv" },
    { name: "Movies", icon: "Film" },
    { name: "Streams", icon: "Radio" }
  ];

  const education = [
    {
      degree: "Master of Business Administration - MBA",
      field: "Business Analytics & Marketing",
      institution: "William & Mary – Raymond A. Mason School of Business",
      period: "Aug 2024 - May 2026",
      status: "In Progress",
      logo: "/logos/wm-logo.png",
      activities: ["MBAA"],
      highlights: [
        "Applying product skills in a real-world AI PM internship at IpserLab, owning UX, prompts, and user feedback loops",
        "Actively developing skills in GTM strategy, prompt engineering, and rapid prototyping",
        "VP of AI & IT Club"
      ],
      skills: ["Product Management", "Data-driven Decision Making"]
    },
    {
      degree: "Bachelor of Technology - BTech",
      field: "Computer Science and Engineering",
      institution: "Karunya Institute of Technology and Sciences",
      period: "Jul 2017 - May 2021",
      status: "Completed",
      logo: "/logos/karunya-logo.png",
      activities: [
        "Event Head – WARTECH 2019 (Tech Fest)",
        "IT & Finance Head – Computer Society of India, Karunya Chapter",
        "Volunteer – NSS (National Service Scheme) – Social impact & campus engagement",
        "Team Coordinator – KEMT, South India's largest high school sports event",
        "Member – Photography Club"
      ],
      highlights: [
        "Focused on computer systems, software engineering, and applied problem-solving",
        "Innovation Day Winner (2020) – Recognized for technical innovation and user-first system design",
        "Gained early exposure to user-facing solutions and backend logic, foundation for later product thinking",
        "Developed strong technical grounding in Python, SQL, and system architecture"
      ],
      skills: ["Problem Solving", "Leadership", "Python", "SQL", "System Architecture"]
    }
  ];

  const certifications = [
    {
      name: "AI Fluency for Students",
      issuer: "Anthropic",
      date: "Aug 2025",
      category: "AI & Machine Learning"
    },
    {
      name: "AI Fluency Framework & Foundations",
      issuer: "Anthropic", 
      date: "Aug 2025",
      category: "AI & Machine Learning"
    },
    {
      name: "Certified Scrum Product Owner (CSPO)",
      issuer: "Scrum Alliance",
      date: "Nov 2024",
      category: "Product Management"
    },
    {
      name: "MBA Math Quantitative Skills Course",
      issuer: "MBA Math",
      date: "Aug 2024",
      category: "Analytics"
    },
    {
      name: "Business Analytics",
      issuer: "upGrad",
      date: "Dec 2023",
      category: "Analytics"
    },
    {
      name: "Verified International Academic Qualifications",
      issuer: "World Education Services",
      date: "Aug 2023",
      category: "Education"
    },
    {
      name: "Marketing Analytics",
      issuer: "Coursera",
      date: "May 2021",
      category: "Marketing"
    },
    {
      name: "Excel Skills for Business: Essentials",
      issuer: "Coursera",
      date: "May 2020",
      category: "Analytics"
    },
    {
      name: "Successful Negotiations: Essential Strategies and Skills",
      issuer: "Coursera",
      date: "Feb 2020",
      category: "Business Skills"
    },
    {
      name: "Automation Anywhere University Essential Level Prep. Courses",
      issuer: "Automation Anywhere",
      date: "Jan 2020",
      category: "Technology"
    },
    {
      name: "IT Academy: Cloud and Virtualization Concepts",
      issuer: "VMware",
      date: "Jan 2020",
      category: "Technology"
    },
    {
      name: "IT Academy: Network Virtualization Concepts",
      issuer: "VMware",
      date: "Jan 2020",
      category: "Technology"
    },
    {
      name: "IT Academy: Software Defined Storage Concepts",
      issuer: "VMware",
      date: "Jan 2020",
      category: "Technology"
    },
    {
      name: "Wharton Online: Introduction to Marketing",
      issuer: "Coursera",
      date: "Jan 2020",
      category: "Marketing"
    }
  ];

  const achievements = [
    "Drove 35% improvement in conversion efficiency across multiple platforms",
    "Engineered automated systems reducing onboarding time by 3.5 days",
    "Generated over $700K in revenue through data-driven activation strategies",
    "Led AI-powered travel planning platform development from 0-to-1",
    "Spearheaded CRM automation driving 18% revenue efficiency increase",
    "Optimized user activation paths boosting SQL volume by 20%"
  ];

  const awards = [
    {
      title: "Innovation Day",
      issuer: "Karunya Institute of Technology and Sciences",
      date: "Apr 2019",
      logo: "/logos/karunya-logo.png",
      description: "Developed Seismix, an IoT-based earthquake detection system using Arduino, ADXL335 sensors, and a real-time Java/C++ backend. The system identified seismic activity by monitoring axis-based vibration thresholds and visualizing movement patterns through Processing IDE. Recognized for combining hardware logic with user-focused alert presentation, earning 1st place among 50+ technical projects."
    }
  ];

  const organizations = [
    {
      name: "MBAA",
      role: "VP of IT & AI Club",
      period: "Aug 2024 - Present",
      institution: "William & Mary – Raymond A. Mason School of Business",
      logo: "/logos/wm-logo.png",
      description: "Lead initiatives that make GenAI, automation, and data tools more accessible for MBA students. Plan and execute speaker sessions, workshops, and hands-on learning formats focused on AI's real-world product and business applications."
    },
    {
      name: "National Black MBA Association",
      role: "Student Member",
      period: "Aug 2024 - Present",
      logo: "/logos/nbmbaa-logo.png",
      description: "Engage with a national network of future business leaders. Leverage access to speaker series, strategy case events, and peer learning forums to expand leadership, decision-making, and market awareness."
    }
  ];

  const volunteerExperience = [
    {
      role: "Student Volunteer",
      organization: "National Service Scheme",
      period: "Jul 2017 - May 2020",
      category: "Social Services",
      logo: "/logos/nss-logo.png",
      description: [
        "Participated in community development initiatives including rural outreach, hygiene awareness, and digital literacy campaigns",
        "Contributed to organizing events focused on education access, environmental responsibility, and public health",
        "Developed early leadership, coordination, and stakeholder communication skills in resource-limited environments"
      ]
    }
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
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              I'm an AI Product Manager and MBA candidate specializing in Business Analytics & Marketing. 
              With experience spanning stealth AI startups to established SaaS platforms, I excel at 
              building data-driven products that drive measurable growth and user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Philosophy */}
        <Card className="card-gradient p-8 mb-12 animate-fade-in hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="group/phil hover:scale-105 hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
              <Brain className="h-8 w-8 text-primary mx-auto mb-3 group-hover/phil:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover/phil:text-primary transition-colors">Data-Driven</h3>
              <p className="text-sm text-muted-foreground group-hover/phil:text-foreground transition-colors">
                Every decision backed by user research and quantitative analysis
              </p>
            </div>
            <div className="group/phil hover:scale-105 hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
              <Users2 className="h-8 w-8 text-primary mx-auto mb-3 group-hover/phil:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover/phil:text-primary transition-colors">User-Centric</h3>
              <p className="text-sm text-muted-foreground group-hover/phil:text-foreground transition-colors">
                Building with empathy and deep understanding of user needs
              </p>
            </div>
            <div className="group/phil hover:scale-105 hover:bg-primary/5 p-4 rounded-xl transition-all duration-300">
              <Target className="h-8 w-8 text-primary mx-auto mb-3 group-hover/phil:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2 group-hover/phil:text-primary transition-colors">Impact-Focused</h3>
              <p className="text-sm text-muted-foreground group-hover/phil:text-foreground transition-colors">
                Measuring success through meaningful business and user outcomes
              </p>
            </div>
          </div>
        </Card>

        {/* Education */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 text-primary mr-2" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    {edu.logo && (
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col md:items-end gap-2">
                    <Badge variant="outline" className="hover:scale-105 transition-all duration-300">
                      {edu.period}
                    </Badge>
                    <Badge 
                      variant={edu.status === "Completed" ? "default" : "secondary"} 
                      className="hover:scale-105 transition-all duration-300"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </div>
                
                {edu.activities && edu.activities.length > 0 && (
                  <div className="mb-4 pl-16">
                    <p className="text-sm font-medium text-foreground mb-2">Activities and societies:</p>
                    <ul className="space-y-1.5">
                      {edu.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mb-4 pl-16 space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {edu.skills && edu.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pl-16">
                    {edu.skills.map((skill, skillIdx) => (
                      <Badge 
                        key={skillIdx} 
                        variant="secondary"
                        className="hover:scale-105 transition-all duration-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Heart className="h-6 w-6 text-primary mr-2" />
            Hobbies & Interests
          </h2>
          <Card className="card-gradient p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hobbies.map((hobby) => {
                const IconComponent = { ChefHat, Plane, Music, Dumbbell, Camera, Cpu, Tv, Film, Radio }[hobby.icon];
                return (
                  <div key={hobby.name} className="flex items-center gap-3 group/hobby hover:scale-105 hover:bg-primary/5 p-2 rounded-lg transition-all duration-300">
                    {IconComponent && <IconComponent className="h-5 w-5 text-primary flex-shrink-0 group-hover/hobby:scale-110 transition-transform duration-300" />}
                    <span className="text-sm text-muted-foreground group-hover/hobby:text-foreground transition-colors">{hobby.name}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillSet, index) => (
              <Card key={skillSet.category} className="card-gradient p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
                <h3 className="font-semibold text-foreground mb-4">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Award className="h-6 w-6 text-primary mr-2" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient p-4 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">{cert.name}</h4>
                    <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                  </div>
                  <Badge variant="outline" className="text-xs hover:scale-105 transition-all duration-300 ml-2">
                    {cert.date}
                  </Badge>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {cert.category}
                </Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <BookOpen className="h-6 w-6 text-primary mr-2" />
            Key Achievements
          </h2>
          <Card className="card-gradient p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-success mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Awards */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Trophy className="h-6 w-6 text-primary mr-2" />
            Honors & Awards
          </h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <Card key={index} className="card-gradient p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    {award.logo && (
                      <img 
                        src={award.logo} 
                        alt={`${award.issuer} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                      <p className="text-muted-foreground text-sm">Issued by {award.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="hover:scale-105 transition-all duration-300 mt-2 md:mt-0">
                    {award.date}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Building2 className="h-6 w-6 text-primary mr-2" />
            Organizations
          </h2>
          <div className="space-y-4">
            {organizations.map((org, index) => (
              <Card key={index} className="card-gradient p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    {org.logo && (
                      <img 
                        src={org.logo} 
                        alt={`${org.name} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{org.name}</h3>
                      <p className="text-primary font-medium text-sm">{org.role}</p>
                      {org.institution && (
                        <p className="text-muted-foreground text-sm mt-1">{org.institution}</p>
                      )}
                    </div>
                  </div>
                  <Badge variant="outline" className="hover:scale-105 transition-all duration-300 mt-2 md:mt-0">
                    {org.period}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{org.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <HandHeart className="h-6 w-6 text-primary mr-2" />
            Volunteer Experience
          </h2>
          <div className="space-y-4">
            {volunteerExperience.map((volunteer, index) => (
              <Card key={index} className="card-gradient p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:border-primary/20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    {volunteer.logo && (
                      <img 
                        src={volunteer.logo} 
                        alt={`${volunteer.organization} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{volunteer.role}</h3>
                      <p className="text-primary font-medium text-sm">{volunteer.organization}</p>
                      <p className="text-muted-foreground text-xs mt-1">{volunteer.category}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="hover:scale-105 transition-all duration-300 mt-2 md:mt-0">
                    {volunteer.period}
                  </Badge>
                </div>
                <ul className="space-y-2 pl-16">
                  {volunteer.description.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6 text-lg">
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="https://www.linkedin.com/in/sunnysonimba/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
          >
            {/* Animated background shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/50 to-accent/50 blur-xl transition-opacity duration-300"></div>
            
            <span className="relative z-10">Let's Connect on LinkedIn</span>
            <svg className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;