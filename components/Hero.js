'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Software Developer | Full Stack(MERN) Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="particle-bg"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-center md:text-left">
            <h2 className="text-lg md:text-xl text-indigo-400 mb-4 font-medium tracking-wide">
              Hi, I&apos;m
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up">
              Nishanth Nuthi
            </h1>
            <div className="h-12 md:h-16 mb-8">
              <p className="text-2xl md:text-4xl text-gray-300 font-light stagger-2 animate-slide-up">
                {text}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 stagger-3 animate-slide-up leading-relaxed">
              Aspiring developer with hands-on experience in Full Stack Development, Machine Learning, and Data Engineering.
              Passionate about building scalable solutions and learning new technologies.
            </p>
            
            <div className="flex gap-6 justify-center md:justify-start stagger-4 animate-slide-up">
              <a
                href="#projects"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-indigo-600 hover:bg-indigo-600/10 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center items-center animate-fade-in stagger-2">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-indigo-600/30 rounded-full blur-3xl animate-glow"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Replace '/profile.jpg' with your actual image path */}
                <div className="w-full rounded-b-full overflow-hidden border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/50 card-hover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Nishanth.jpg"
                    alt="Nishanth Nuthi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
