import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card h-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden rounded-lg mb-4">
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
        ></div>
        <div
          className="w-full h-full bg-purple-800/30"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s ease-in-out",
          }}
        ></div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-white/70 line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/70 hover:text-purple-400 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/70 hover:text-purple-400 transition-colors"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "PlaceNext",
      description:
        "Placement management system to simplify the college placement process. Includes features like job creation with 5+ eligibility criteria, job applications, and student data management. Offers advanced filters and dashboards for admin and students.",
      image: "/placeholder.svg",
      tags: ["React", "Express", "MongoDB", "WebSockets"],
      liveUrl: "https://placenext-web.vercel.app/",
      githubUrl: "https://github.com/latish705/PlaceNext",
    },
    {
      title: "MedicX",
      description:
        "Health management app for tracking 5+ medications and supporting consultations. Processes prescription images via LLAMA to extract medication details. Features a chatbot providing advice for common health issues and alerts for critical conditions.",
      image: "/placeholder.svg",
      tags: ["React", "AI", "LLAMA", "Health-Tech"],
      liveUrl: "https://medic-x-web-qb4j.vercel.app/",
      githubUrl: "https://github.com/Latish705/MedicX",
    },
    {
      title: "Research Pilot",
      description:
        "Research-oriented app offering personalized recommendations and tools. Provides relevant research papers based on user data and research domain. Chatbot offers guidance, research papers, Kaggle datasets, and expert contacts.",
      image: "/placeholder.svg",
      tags: ["React", "AI", "Research", "Recommendation"],
      githubUrl: "https://github.com/Latish705/research-pilot",
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/latish705?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            See More Projects on GitHub <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
