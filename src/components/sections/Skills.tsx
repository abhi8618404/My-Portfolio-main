import React from 'react';
import { Laptop, BarChart3, Code2, Boxes, Brain, Wrench, Globe, TestTube, Database } from "lucide-react";

// Import the SplitText component
import SplitText from "@/components/SplitText";

const categories = [
  {
    title: "Programming Languages",
    Icon: Code2,
    items: ["Java", "Python", "SQL"],
  },
  {
    title: "Backend & APIs",
    Icon: Laptop,
    items: ["Spring Boot", "REST APIs", "Hibernate (ORM)"],
  },
  {
    title: "Testing & QA Tools",
    Icon: TestTube,
    items: ["Manual Testing", "JUnit", "Postman", "Automation Testing (Playwright)"],
  },
  {
    title: "Databases",
    Icon: Database,
    items: ["MySQL"],
  },
  {
    title: "DevOps & Tools",
    Icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Jenkins (CI/CD)", "Linux basics"],
  },
  {
    title: "Software Development",
    Icon: Globe,
    items: [
      "SDLC",
      "STLC",
      "Agile/Scrum fundamentals",
    ],
  },
];

const brandClassMap: Record<string, string> = {
  // Programming Languages
  Java: "bg-[hsl(var(--brand-python))]",
  Python: "bg-[hsl(var(--brand-python))]",
  SQL: "bg-[hsl(var(--brand-sql))]",

  // Backend & APIs
  "Spring Boot": "bg-[hsl(var(--brand-python))]",
  "REST APIs": "bg-[hsl(var(--brand-python))]",
  "Hibernate (ORM)": "bg-[hsl(var(--brand-python))]",

  // Testing & QA Tools
  "Manual Testing": "bg-[hsl(var(--brand-python))]",
  JUnit: "bg-[hsl(var(--brand-python))]",
  Postman: "bg-[hsl(var(--brand-python))]",
  "Automation Testing (Playwright)": "bg-[hsl(var(--brand-python))]",

  // Databases
  MySQL: "bg-[hsl(var(--brand-mysql))]",

  // DevOps & Tools
  Git: "bg-[hsl(var(--brand-git))]",
  GitHub: "bg-[hsl(var(--brand-github))]",
  Docker: "bg-[hsl(var(--brand-python))]",
  "Jenkins (CI/CD)": "bg-[hsl(var(--brand-python))]",
  "Linux basics": "bg-[hsl(var(--brand-linux))]",

  // Software Development
  SDLC: "bg-[hsl(var(--brand-python))]",
  STLC: "bg-[hsl(var(--brand-python))]",
  "Agile/Scrum fundamentals": "bg-[hsl(var(--brand-python))]",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative pt-24 pb-32 bg-transparent text-[hsl(var(--sidebar-foreground))]"
    >
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
            {/* Replaced the h2 tag with the SplitText component */}
            <SplitText
              text="Tech Stack"
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
              splitType="chars"
              delay={50}
            />
            <p className="text-lg text-muted-foreground mt-2">The tools and technologies I use to build robust backend systems and ensure quality.</p>
        </div>

        <div className="grid gap-10 md:gap-12">
          {categories.map(({ title, Icon, items }) => (
            <article key={title} aria-labelledby={`heading-${title.replace(/\s+/g, "-").toLowerCase()}`}>
              <h3
                id={`heading-${title.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-xl md:text-2xl font-semibold flex items-center justify-center gap-3 mb-5"
              >
                <Icon className="h-6 w-6" aria-hidden />
                <span>{title}</span>
              </h3>

              <div className="flex flex-wrap justify-center gap-3" role="list">
                {items.map((name) => (
                  <span
                    key={name}
                    role="listitem"
                    className={`inline-flex items-center justify-center rounded-full font-bold text-base py-2 px-4 text-[hsl(var(--badge-foreground))] shadow-sm transition-transform hover:-translate-y-0.5 ${brandClassMap[name]}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
