import React from "react";

// Corrected the import path to use the project's alias
import SplitText from "@/components/SplitText";
import SectionOverlay from "@/components/SectionOverlay";

// Declare the lottie-player web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': any;
    }
  }
}

const About = () => {
  return (
    <section id="about" className="relative pt-24 pb-32">
      <SectionOverlay />

      <div className="container relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div className="animate-enter space-y-6">
            {/* Replaced the h2 tag with the SplitText component */}
            <SplitText
              text="About Me"
              className="font-display text-4xl md:text-5xl font-bold text-foreground"
              splitType="chars"
              delay={50}
            />
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Enthusiastic and detail-oriented fresher with strong foundations in backend development, QA testing, and API testing. 
              Skilled in Java, Spring Boot, REST APIs, Postman, JUnit, Docker, and CI/CD basics.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Quick learner with a strong willingness to adopt new technologies and explore automation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Experienced in building robust backend systems with Spring Boot and REST APIs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Committed to contributing effectively in fast-paced Agile environments
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Education</h3>
              <div className="space-y-2">
                <p className="text-foreground font-medium">REVA University, Bengaluru</p>
                <p className="text-muted-foreground">B.Tech in Computer Science and Engineering (AI & ML)</p>
                <p className="text-muted-foreground text-sm">CGPA: 7.71 • 2025</p>
              </div>
            </div>
          </div>
          
          {/* Lottie Animation */}
          <div className="flex justify-center animate-enter">
            <div className="w-80 h-80 flex items-center justify-center">
              <lottie-player
                src="/animations/animation.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "100%" }}
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;