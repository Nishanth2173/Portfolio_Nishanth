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
  }, [fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="particle-bg"></div>
      
      <div className="container mx-auto px-6 z-10">
        {/* Mobile-first centered layout */}
        <div className="flex flex-col items-center text-center">
          {/* Text content */}
          <div className="animate-fade-in mb-12 max-w-4xl w-full">
            <h2 className="text-base md:text-lg lg:text-xl text-indigo-400 mb-3 font-medium tracking-wide">
              Hi, I&apos;m
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 gradient-text animate-slide-up">
              Nishanth
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 gradient-text animate-slide-up">
              Nishanth Nuthi
            </h1>
            <div className="min-h-[60px] md:min-h-[80px] mb-6">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light stagger-2 animate-slide-up px-4">
                {text}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto mb-10 stagger-3 animate-slide-up leading-relaxed px-4">
              Aspiring developer with hands-on experience in Full Stack Development, Machine Learning, and Data Engineering.
              Passionate about building scalable solutions and learning new technologies.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center stagger-4 animate-slide-up mb-12 px-4">
              
                href="#projects"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50 text-white"
              >
                View My Work
              </a>
              
                href="#contact"
                className="px-8 py-4 border-2 border-indigo-600 hover:bg-indigo-600/10 rounded-full font-medium transition-all duration-300 hover:scale-105 text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image - Below buttons on mobile */}
          <div className="flex justify-center items-center animate-fade-in stagger-2 w-full">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-indigo-600/30 rounded-full blur-3xl animate-glow"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/50 card-hover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Nishanth.jpg"
                    alt="Nishanth Nuthi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-indigo-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
