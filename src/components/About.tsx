
import React, { useEffect, useRef } from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface FactCard {
  title: string;
  value: string;
  icon: string;
}

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Timeline animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  const educationTimeline: TimelineItem[] = [
    {
      year: '2021-Present',
      title: 'Bachelor of Technology in Computer Science',
      description: 'University Institute of Technology, RGPV, Bhopal',
    },
    {
      year: '2019-2021',
      title: 'Higher Secondary Education',
      description: 'St. Joseph\'s Co-Ed School, Bhopal',
    },
  ];
  
  const factCards: FactCard[] = [
    {
      title: 'LeetCode',
      value: '180+',
      icon: '🏆',
    },
    {
      title: 'Projects',
      value: '10+',
      icon: '💻',
    },
    {
      title: 'Programming Languages',
      value: '5+',
      icon: '🔧',
    },
    {
      title: 'Dev Experience',
      value: '3+ years',
      icon: '⚡',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-white/80">
              I'm Latish Adwani, a passionate Full-Stack Developer and Competitive Programmer with a keen interest in building innovative web applications and solving complex problems.
            </p>
            
            <p className="text-lg text-white/80">
              Currently pursuing my Bachelor's degree in Computer Science, I've developed a strong foundation in algorithms, data structures, and software development. My journey in tech started with competitive programming, which honed my problem-solving abilities and coding efficiency.
            </p>
            
            <p className="text-lg text-white/80">
              I'm particularly enthusiastic about creating seamless user experiences through modern frontend frameworks, building robust backend systems, and deploying applications using cloud services. When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects, or exploring new technologies.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {factCards.map((card, index) => (
                <div 
                  key={index}
                  className="card flex flex-col items-center justify-center p-4 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <span className="text-3xl mb-2">{card.icon}</span>
                  <span className="text-xl font-bold text-purple-500">{card.value}</span>
                  <span className="text-sm text-white/60">{card.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Timeline */}
          <div ref={timelineRef} className="relative pl-8 space-y-12">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            {/* Timeline line */}
            <div className="timeline-line"></div>
            
            {educationTimeline.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item opacity-0 relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="timeline-dot"></div>
                <div className="ml-8">
                  <div className="text-sm font-semibold text-purple-400">{item.year}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['Competitive Programming', 'Web Development', 'Cloud Computing', 'Open Source', 'Hackathons', 'Problem Solving', 'UI/UX Design'].map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-secondary/80 text-white/80 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
