import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Portfolio
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">À propos</a>
            <a href="#projects" className="nav-link">Projets</a>
            <a href="#skills" className="nav-link">Compétences</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>


          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#about" className="mobile-nav-link">À propos</a>
          <a href="#projects" className="mobile-nav-link">Projets</a>
          <a href="#skills" className="mobile-nav-link">Compétences</a>
          <a href="#contact" className="mobile-nav-link">Contact</a>
        </div>
      </div>
    </header>
  );
}