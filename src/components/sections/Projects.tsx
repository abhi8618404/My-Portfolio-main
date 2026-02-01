import React, { useState, useRef, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  BarChart3,
  LineChart,
  PieChart,
  Hand,
  ShieldCheck,
  Camera,
} from "lucide-react";
import SectionOverlay from "@/components/SectionOverlay";
import useEmblaCarousel from "embla-carousel-react";
import SplitText from "@/components/SplitText";

// --- Project Data (No changes here) ---
const projects = [
  {
    title: "Blog Application",
    description:
      "Developed backend features using Java, Spring Boot, REST APIs with proper request/response handling. Wrote JUnit test cases and performed Postman API testing to ensure functional accuracy and reliability. Containerized the application with Docker, set up a simple Jenkins CI/CD job for automated builds, and deployed on Render.",
    tech: ["Java", "Spring Boot", "REST APIs", "JUnit", "Postman", "Docker", "Jenkins"],
    live: "https://blog-application-01.onrender.com/",
    repo: "https://github.com/abhi8618404", // TODO: replace with the Blog Application repo link (if different)
    icon: "bar",
    image: "/images/blog-app.svg", // Blog application illustration
  },
  {
    title: "Employee Management System",
    description:
      "Developed an employee management system with CRUD operations and role-based access using Java, Spring Boot, and MySQL. Performed backend testing (Postman) and optimized API workflows for stable performance. Containerized the project using Docker, enabling consistent builds and simplifying deployment.",
    tech: ["Java", "Spring Boot", "MySQL", "Postman", "Docker"],
    live: "",
    repo: "https://github.com/abhi8618404/Employee_Management",
    icon: "line",
    image: "/images/employee-management.svg", // Employee management system illustration
  },
  {
    title: "Smart Attendance System (AI/ML)",
    description:
      "Developed a real-time facial recognition attendance system using Python, OpenCV, and TensorFlow. Automated attendance logging and reporting, reducing manual effort and human error by 95%. Tested and optimized system performance to ensure accurate recognition under different conditions.",
    tech: ["Python", "OpenCV", "TensorFlow", "AI/ML"],
    live: "",
    repo: "https://github.com/abhi8618404", // Update with actual repo link
    icon: "camera",
    image: "/images/attendance-system.svg", // Smart attendance system illustration
  },
  {
    title: "SOC Project: SSH Log Analysis & Threat Detection",
    description:
      "SOC-level Splunk project analyzing Linux SSH logs to detect brute-force attacks, failed logins, and suspicious IP behavior using SPL queries, dashboards, and alerts. Demonstrated hands-on SIEM monitoring, threat detection, and incident investigation skills.",
    tech: ["Splunk", "SIEM", "Linux", "SSH", "Security", "Threat Detection"],
    live: "",
    repo: "https://github.com/abhi8618404/SSH-Log_Analysis",
    icon: "shield",
    image: "/images/soc-security.svg", // SOC security dashboard illustration
  },
  {
    title: "Library Management System",
    description:
      "A Java desktop application to manage library operations such as book issues, returns, and fines. Uses JDBC to connect with a MySQL database for persistent storage. Features include book/member management, issue/return tracking, fine calculation for overdue books, and user authentication for admin access.",
    tech: ["Java", "JDBC", "MySQL", "Swing/AWT"],
    live: "",
    repo: "https://github.com/abhi8618404/LibraryManagement-System",
    icon: "bar",
    image: "/images/library-system.svg", // Library management system illustration
  },
];

// This is now only used for the desktop carousel
const projectPairs = projects.reduce((result, _value, index, array) => {
  if (index % 2 === 0) {
    result.push(array.slice(index, index + 2));
  }
  return result;
}, [] as (typeof projects)[]);


const iconMap: Record<string, JSX.Element> = {
  bar: <BarChart3 className="w-8 h-8" />,
  line: <LineChart className="w-8 h-8" />,
  pie: <PieChart className="w-8 h-8" />,
  hand: <Hand className="w-8 h-8" />,
  shield: <ShieldCheck className="w-8 h-8" />,
  camera: <Camera className="w-8 h-8" />,
};

const brandVarMap: Record<string, string> = {
  Java: "--brand-python",
  "Spring Boot": "--brand-python",
  "REST APIs": "--brand-python",
  JUnit: "--brand-python",
  Postman: "--brand-python",
  Docker: "--brand-python",
  Jenkins: "--brand-python",
  MySQL: "--brand-mysql",
  Python: "--brand-python",
  OpenCV: "--brand-opencv",
  TensorFlow: "--brand-tensorflow",
  "AI/ML": "--brand-python",
  Splunk: "--brand-python",
  SIEM: "--brand-python",
  Linux: "--brand-python",
  SSH: "--brand-python",
  Security: "--brand-python",
  "Threat Detection": "--brand-python",
  JDBC: "--brand-python",
  "Swing/AWT": "--brand-python",
};

const FlipCardStyles = () => (
  <style>{`
    .flip-card {
      perspective: 1500px;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    .flip-card.flipped .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
    /* Simple scrollbar styling for mobile */
    .mobile-scroll-container::-webkit-scrollbar {
      height: 4px;
    }
    .mobile-scroll-container::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }
    /* Custom scrollbar for project description */
    .flip-card-back .overflow-y-auto {
      scrollbar-width: thin;
      scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
    }
    .flip-card-back .overflow-y-auto::-webkit-scrollbar {
      width: 6px;
    }
    .flip-card-back .overflow-y-auto::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 3px;
    }
    .flip-card-back .overflow-y-auto::-webkit-scrollbar-thumb {
      background-color: rgba(156, 163, 175, 0.5);
      border-radius: 3px;
    }
    .flip-card-back .overflow-y-auto::-webkit-scrollbar-thumb:hover {
      background-color: rgba(156, 163, 175, 0.7);
    }
    /* Ensure the scrollable container has proper height */
    .flip-card-back .flex-1 {
      flex: 1 1 0%;
      min-height: 0;
    }
  `}</style>
);

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedIn) {
          setTimeout(() => setIsFlipped(true), 300);
          setTimeout(() => {
            setIsFlipped(false);
            setHasAnimatedIn(true);
          }, 2000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasAnimatedIn]);

  const handleMouseEnter = () => {
    if (hasAnimatedIn && window.innerWidth >= 768) setIsFlipped(true);
  };
  const handleMouseLeave = () => {
    if (hasAnimatedIn && window.innerWidth >= 768) setIsFlipped(false);
  };
  const handleClick = () => {
    // Primary action: open repo link (recruiter-friendly / expected behavior)
    if (project?.repo) {
      window.open(project.repo, "_blank", "noopener,noreferrer");
      return;
    }
    // Fallback: keep flip behavior if no repo link is provided
    if (window.innerWidth < 768 || hasAnimatedIn) setIsFlipped((prev) => !prev);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;
    if (project?.repo) {
      window.open(project.repo, "_blank", "noopener,noreferrer");
      return;
    }
    if (window.innerWidth < 768 || hasAnimatedIn) setIsFlipped((prev) => !prev);
  };

  return (
    <div
      ref={cardRef}
      className={`flip-card w-full h-96 rounded-2xl ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      onKeyPress={handleKeyPress}
      role="button"
      aria-pressed={isFlipped}
    >
      <div className="flip-card-inner rounded-2xl">
        <div className="flip-card-front absolute w-full h-full">
            <div className="relative z-10 flex flex-col h-full p-6 rounded-2xl text-gray-800 dark:text-white overflow-hidden bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="w-14 h-14 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-black/10 dark:ring-white/20 mb-4">
                    {iconMap[project.icon]}
                </div>
                {project.image && (
                    <div className="my-2 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
                    </div>
                )}
                <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold leading-tight mt-2">{project.title}</h3>
                </div>
                <div className="mt-auto flex-shrink-0">
                    <div className="flex items-center gap-4">
                        {project.repo && (
                            <a href={project.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                <Github className="w-4 h-4" />
                                <span className="text-sm">Code</span>
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                                <ExternalLink className="w-4 h-4" />
                                <span className="text-sm">Live</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className="flip-card-back absolute w-full h-full">
            <div className="relative z-10 flex flex-col h-full p-6 rounded-2xl text-gray-800 dark:text-white bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 shadow-lg">
                <h4 className="text-lg font-bold mb-3 text-center flex-shrink-0">{project.title}</h4>
                <div className="flex-1 min-h-0 overflow-y-auto mb-4 pr-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                        {project.description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center flex-shrink-0">
                    {project.tech.map((t) => (
                        <span key={t} className="tag-chip text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: `hsl(var(${brandVarMap[t] ?? "--brand-generic"}))` }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: true });

  return (
    <>
      <FlipCardStyles />
      <section id="projects" className="relative pb-16 scroll-mt-24">
        <SectionOverlay />
        <div className="container relative z-20 pt-8 pb-16">
          <div className="text-center mb-12">
            <SplitText
              text="Projects"
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
              splitType="chars"
              delay={50}
            />
            <p className="text-lg text-muted-foreground mt-2">A selection of my recent work.</p>
          </div>

          {/* --- NEW: Mobile Horizontal Scroll (Visible on screens smaller than md) --- */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto gap-4 pb-4 -ml-4 pl-4 mobile-scroll-container">
              {projects.map((p) => (
                <div key={p.title} className="flex-shrink-0 w-[85%] sm:w-[60%]">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>

          {/* --- Desktop Grid Layout (3 rows) --- */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
  ))}
</div>

        </div>
      </section>
    </>
  );
};

export default Projects;
