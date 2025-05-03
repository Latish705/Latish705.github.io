
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-white font-bold text-xl mb-2">
              <span className="text-purple-500">L</span>atish <span className="text-purple-500">A</span>dwani
            </div>
            <p className="text-white/60 text-sm">
              Full-Stack Developer & Competitive Programmer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-2 bg-purple-500/20 text-purple-400 rounded-full mb-4 hover:bg-purple-500/30 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-white/60 text-sm">
              © {currentYear} Latish Adwani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
