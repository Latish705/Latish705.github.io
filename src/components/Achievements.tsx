
import React, { useEffect } from 'react';
import { Award, Trophy } from 'lucide-react';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: 'trophy' | 'award';
}

const Achievements: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      achievementItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  const achievements: Achievement[] = [
    {
      title: 'LeetCode Problem Solver',
      subtitle: '180+ Problems Solved',
      description: 'Solved over 180 coding problems on LeetCode, demonstrating strong algorithm and data structure skills.',
      icon: 'trophy',
    },
    {
      title: 'Hackathon Winner',
      subtitle: 'Innovation Challenge 2023',
      description: 'First place in a 24-hour hackathon with a solution for accessible healthcare management.',
      icon: 'award',
    },
    {
      title: 'Full-Stack Development',
      subtitle: '10+ Projects Completed',
      description: 'Successfully delivered multiple end-to-end web applications with modern tech stacks.',
      icon: 'trophy',
    },
    {
      title: 'Mentorship Program',
      subtitle: 'CodeHelp Community',
      description: 'Contributed to the developer community by mentoring junior developers in web technologies.',
      icon: 'award',
    },
    {
      title: 'Freelance Success',
      subtitle: '5+ Satisfied Clients',
      description: 'Delivered high-quality freelance projects with excellent client feedback and reviews.',
      icon: 'trophy',
    },
    {
      title: 'Competitive Programming',
      subtitle: 'Regional Finalist',
      description: 'Qualified for the regional finals in a national-level coding competition.',
      icon: 'award',
    },
  ];

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading">Achievements</h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="achievement-item opacity-0 card hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-purple-500/20 rounded-lg">
                  {achievement.icon === 'trophy' ? (
                    <Trophy size={24} className="text-purple-400" />
                  ) : (
                    <Award size={24} className="text-purple-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                  <div className="text-purple-400 font-medium text-sm mb-2">{achievement.subtitle}</div>
                  <p className="text-white/70 text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
