import React from 'react';

// Import the SplitText component
import SplitText from "@/components/SplitText";

// --- 1. Data array updated to use image paths ---
const techItemsData = [
    {
        icon: "/images/java.svg",
        name: "Backend Development & Automation",
        description: "Building robust backend systems with Java, Spring Boot, and REST APIs. I focus on clean architecture, proper testing with JUnit, and API validation using Postman. Containerization with Docker and CI/CD pipelines ensure reliable deployments."
    },
    {
        icon: "/images/mysql.svg",
        name: "Security & Threat Detection",
        description: "SOC-level expertise in SIEM monitoring using Splunk for log analysis, threat detection, and incident investigation. Analyzing SSH logs, detecting brute-force attacks, and creating security dashboards to protect infrastructure."
    },
    {
        icon: "/images/pbii.svg",
        name: "AI/ML & Data Intelligence",
        description: "Developing intelligent systems with Python, OpenCV, and TensorFlow for facial recognition and automation. Leveraging SQL for data extraction and Power BI for visualization, transforming raw data into actionable insights."
    }
];


const TechItem = ({ icon, name, description }) => (
  <div 
    className="group h-full flex flex-col rounded-2xl p-6 text-gray-800 dark:text-white overflow-hidden
               bg-white/10 dark:bg-black/30 backdrop-blur-xl 
               border border-white/20 
               shadow-lg hover:shadow-xl 
               transition-all duration-300 hover:scale-[1.03]"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-black/10 dark:ring-white/20">
        {/* --- 2. The icon is now rendered as an img tag --- */}
        <img src={icon} alt={`${name} logo`} className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-foreground text-lg">{name}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const TechPhilosophy = () => {
  return (
    <section id="philosophy" className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            {/* Replaced the h2 tag with the SplitText component */}
            <SplitText
              text="My Tech Story Philosophy"
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2"
              splitType="words"
              delay={80}
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology is built on three core pillars: <strong>building robust backend systems</strong>, <strong>ensuring security through proactive monitoring</strong>, and <strong>leveraging AI/ML to solve real-world problems</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, testable code, automating repetitive tasks, and continuously learning new technologies. Whether it's developing REST APIs, analyzing security logs, or building intelligent systems—I approach each challenge with curiosity and a commitment to quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              From containerization to CI/CD pipelines, from threat detection to data visualization—I strive to create solutions that are not just functional, but secure, scalable, and maintainable.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {techItemsData.map((item) => (
                <TechItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPhilosophy;
