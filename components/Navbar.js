'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-text">
          Nishanth
        </a>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-indigo-400 ${
                activeSection === item.href.slice(1) ? 'text-indigo-400' : 'text-gray-300'
              }`}
            >
              {item.name}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 animate-fade-in"></span>
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
