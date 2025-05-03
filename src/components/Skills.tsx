
import React, { useEffect, useState } from 'react';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

const SkillBar: React.FC<{ name: string; proficiency: number; delay: number }> = ({ name, proficiency, delay }) => {
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
  const [activeCategory, setActiveCategory] = useState<string>("Programming Languages");
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Python", proficiency: 75 },
        { name: "C++", proficiency: 85 },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", proficiency: 90 },
        { name: "HTML/CSS", proficiency: 85 },
        { name: "Next.js", proficiency: 75 },
        { name: "Tailwind CSS", proficiency: 80 },
        { name: "Redux", proficiency: 70 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express", proficiency: 80 },
        { name: "Spring Boot", proficiency: 75 },
        { name: "GraphQL", proficiency: 65 },
        { name: "REST API", proficiency: 90 },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "MySQL", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 70 },
        { name: "Firebase", proficiency: 75 },
      ],
    },
    {
      name: "Cloud Services",
      skills: [
        { name: "AWS", proficiency: 75 },
        { name: "Docker", proficiency: 70 },
        { name: "Netlify/Vercel", proficiency: 85 },
        { name: "CI/CD", proficiency: 65 },
      ],
    },
  ];
  
  const activeSkills = skillCategories.find(category => category.name === activeCategory)?.skills || [];
  
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
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-4 py-3 text-left rounded-lg transition-all ${
                      activeCategory === category.name
                        ? "bg-purple-500/20 text-purple-400 font-medium"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {category.name}
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
                    key={skill.name}
                    name={skill.name}
                    proficiency={skill.proficiency}
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
