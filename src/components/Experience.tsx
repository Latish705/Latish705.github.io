import React, { useEffect } from "react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const experienceItems = document.querySelectorAll(".experience-item");
    experienceItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      experienceItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const experiences: ExperienceItem[] = [
    {
      period: "Dec 2024 – Jan 2025",
      role: "SDE Intern",
      company: "SR Counselling",
      description: [
        "Developed efficient APIs, reducing their access time from 900ms to 50-100ms.",
        "Integrated the admin panel with a Flutter app, ensuring seamless functionality.",
        "Designed and developed an admin panel with various analytical features.",
        "Deployed a secure story listening app, utilizing advanced cloud services for efficient HLS streaming.",
        "Implemented encryption mechanisms ensuring data security during streaming.",
        "Optimized streaming services to achieve high efficiency and scalability.",
      ],
      technologies: [
        "Node.js",
        "Flutter",
        "Express",
        "MongoDB",
        "HLS",
        "JWT",
        "React",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-purple-500/30 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item opacity-0 mb-12 relative"
            >
              <div className="hidden md:block absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 z-10"></div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="text-purple-400 font-semibold">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-white/80">{exp.company}</div>
                </div>

                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="card">
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
