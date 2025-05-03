
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-3' : ''
      )}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-white font-bold text-xl">
          <span className="text-purple-500">L</span>atish <span className="text-purple-500">A</span>dwani
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="ml-4 flex items-center space-x-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 md:hidden text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
          <nav className="container mx-auto px-6 py-8 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-6 pt-6 border-t border-white/10 flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
