
import React, { useEffect, useRef } from 'react';
import TypingEffect from './ui/TypingEffect';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Smooth movement for the image
      imageRef.current.style.transform = `translateX(${x * 20 - 10}px) translateY(${y * 20 - 10}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex items-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-background z-0"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 space-y-8 text-center md:text-left animate-fade-in">
            <div>
              <h1 className="font-bold">
                <span className="text-white mb-2 block">Hi, I'm</span>
                <span className="text-purple-500">Latish Adwani</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mt-4 text-white/80">
                <TypingEffect 
                  texts={[
                    'Full-Stack Developer',
                    'Competitive Programmer',
                    'Cloud Specialist',
                    'Problem Solver'
                  ]}
                />
              </h2>
            </div>
            
            <p className="text-white/70 text-lg max-w-2xl">
              I build exceptional digital experiences that combine elegant design with powerful functionality. 
              Specializing in full-stack development with expertise in React, Java, Cloud services, and more.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Contact Me <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-secondary flex items-center gap-2">
                View Projects <ExternalLink size={18} />
              </a>
              <a 
                href="/resume.pdf" 
                className="btn-outline flex items-center gap-2"
                download
              >
                Download Resume <Download size={18} />
              </a>
            </div>
            
            <div className="flex items-center gap-6 justify-center md:justify-start text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available for hire</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div>Java | React | AWS | MongoDB</div>
            </div>
          </div>
          
          <div 
            className="w-full md:w-2/5 flex justify-center md:justify-end"
            ref={imageRef}
          >
            <div className="relative">
              {/* Profile image placeholder - replace with actual image */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 animate-scale-in">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center text-4xl font-bold text-white">LA</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 cursor-pointer">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
