import React from "react";

// Simple substitute for the SplitText component (keeps styling consistent with other sections)
const SplitText = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

const Resume = () => {
  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <SplitText
            text="My Resume"
            className="font-display text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100"
          />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-2">
            View my resume as a PDF.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/1kUBRY7GGMH5t6qAm5UqapZyjdB4h6vRe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold
                       bg-gradient-to-r from-cyan-400 to-purple-600 text-white
                       hover:from-cyan-300 hover:to-purple-500 transition-all duration-300
                       shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/30"
            aria-label="View my resume (PDF)"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

