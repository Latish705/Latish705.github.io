import React, { useEffect, useState } from "react";

interface SkillCategory {
  category: string;
  skills: string[];
}

const SkillBar: React.FC<{
  name: string;
  proficiency: number;
  delay: number;
}> = ({ name, proficiency, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(proficiency);
    }, delay);

    return () => clearTimeout(timer);
  }, [proficiency, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/90">{name}</span>
        <span className="text-sm text-purple-400">{proficiency}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-purple-400 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    "Programming Languages"
  );

  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C", "C++", "Dart"],
    },
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Flutter"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Django", "Flask", "Firebase", "Appwrite"],
    },
    {
      category: "Database Management",
      skills: ["MongoDB", "SQL"],
    },
    {
      category: "Version Control and CI/CD",
      skills: ["Git", "GitHub"],
    },
    {
      category: "Cloud and Hosting",
      skills: ["AWS", "Firebase Hosting"],
    },
  ];

  const activeSkills =
    skillCategories.find((category) => category.category === activeCategory)
      ?.skills || [];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">Skills & Expertise</h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="card h-full">
              <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
              <div className="flex flex-col space-y-1">
                {skillCategories.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    className={`px-4 py-3 text-left rounded-lg transition-all ${
                      activeCategory === category.category
                        ? "bg-purple-500/20 text-purple-400 font-medium"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card h-full">
              <h3 className="text-xl font-bold text-white mb-6">
                {activeCategory}
              </h3>
              <div className="mt-6 space-y-6">
                {activeSkills.map((skill, index) => (
                  <SkillBar
                    key={skill}
                    name={skill}
                    proficiency={80} // Default proficiency value
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
