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
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an AI Product Manager and MBA candidate specializing in Business Analytics & Marketing. 
            With experience spanning stealth AI startups to established SaaS platforms, I excel at 
            building data-driven products that drive measurable growth and user engagement.
          </p>
        </div>

        {/* Philosophy */}
        <Card className="card-gradient p-8 mb-12 animate-slide-up">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Data-Driven</h3>
              <p className="text-sm text-muted-foreground">
                Every decision backed by user research and quantitative analysis
              </p>
            </div>
            <div>
              <Users2 className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">User-Centric</h3>
              <p className="text-sm text-muted-foreground">
                Building with empathy and deep understanding of user needs
              </p>
            </div>
            <div>
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Impact-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Measuring success through meaningful business and user outcomes
              </p>
            </div>
          </div>
        </Card>

        {/* Education */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.05s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 text-primary mr-2" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: `${0.05 + (index * 0.1)}s` }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    {edu.logo && (
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col md:items-end gap-2">
                    <Badge variant="outline" className="hover-scale transition-all duration-300">
                      {edu.period}
                    </Badge>
                    <Badge 
                      variant={edu.status === "Completed" ? "default" : "secondary"} 
                      className="hover-scale transition-all duration-300"
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
                        className="hover-scale transition-all duration-300 text-xs"
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
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Heart className="h-6 w-6 text-primary mr-2" />
            Hobbies & Interests
          </h2>
          <Card className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hobbies.map((hobby, index) => {
                const IconComponent = { ChefHat, Plane, Music, Dumbbell, Camera, Cpu, Tv, Film, Radio }[hobby.icon];
                return (
                  <div key={hobby.name} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${0.05 + (index * 0.03)}s` }}>
                    {IconComponent && <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />}
                    <span className="text-sm text-muted-foreground">{hobby.name}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillSet, index) => (
              <Card key={skillSet.category} className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}>
                <h3 className="font-semibold text-foreground mb-4">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="hover-scale transition-all duration-300"
                      style={{ animationDelay: `${0.2 + (index * 0.1) + (skillIndex * 0.02)}s` }}
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
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Award className="h-6 w-6 text-primary mr-2" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient p-4 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: `${0.3 + (index * 0.05)}s` }}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">{cert.name}</h4>
                    <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                  </div>
                  <Badge variant="outline" className="text-xs hover-scale transition-all duration-300 ml-2">
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
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <BookOpen className="h-6 w-6 text-primary mr-2" />
            Key Achievements
          </h2>
          <Card className="card-gradient p-6 animate-scale-in hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: "0.4s" }}>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${0.4 + (index * 0.05)}s` }}>
                  <CheckCircle2 className="w-4 h-4 text-success mt-1 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Awards */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.45s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Trophy className="h-6 w-6 text-primary mr-2" />
            Honors & Awards
          </h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <Card key={index} className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: `${0.45 + (index * 0.1)}s` }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    {award.logo && (
                      <img 
                        src={award.logo} 
                        alt={`${award.issuer} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                      <p className="text-muted-foreground text-sm">Issued by {award.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="hover-scale transition-all duration-300 mt-2 md:mt-0">
                    {award.date}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Building2 className="h-6 w-6 text-primary mr-2" />
            Organizations
          </h2>
          <div className="space-y-4">
            {organizations.map((org, index) => (
              <Card key={index} className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    {org.logo && (
                      <img 
                        src={org.logo} 
                        alt={`${org.name} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0"
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
                  <Badge variant="outline" className="hover-scale transition-all duration-300 mt-2 md:mt-0">
                    {org.period}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{org.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.55s" }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <HandHeart className="h-6 w-6 text-primary mr-2" />
            Volunteer Experience
          </h2>
          <div className="space-y-4">
            {volunteerExperience.map((volunteer, index) => (
              <Card key={index} className="card-gradient p-6 animate-slide-up hover-lift transition-all duration-500 hover:shadow-xl hover:border-primary/20" style={{ animationDelay: `${0.55 + (index * 0.1)}s` }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    {volunteer.logo && (
                      <img 
                        src={volunteer.logo} 
                        alt={`${volunteer.organization} logo`}
                        className="w-12 h-12 object-contain flex-shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{volunteer.role}</h3>
                      <p className="text-primary font-medium text-sm">{volunteer.organization}</p>
                      <p className="text-muted-foreground text-xs mt-1">{volunteer.category}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="hover-scale transition-all duration-300 mt-2 md:mt-0">
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
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground mb-4">
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-all duration-300 story-link hover-scale"
          >
            Let's connect
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;