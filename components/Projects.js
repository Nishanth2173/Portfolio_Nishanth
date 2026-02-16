'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Mini Course App (Full Stack)',
      description: 'A comprehensive course subscription platform with authentication, enrollment, and user dashboards.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Vercel', 'Render'],
      highlights: [
        'RESTful APIs with JWT authentication',
        'Role-protected routes and secure password handling',
        'Optimized database schema with foreign keys',
        'Production deployment with CORS configuration'
      ],
      icon: '📚',
      github: 'https://github.com/Nishanth2173/Mini_Course_App', 
      live: 'https://mini-course-app-gamma.vercel.app'
    },
    {
      title: 'Cardiovascular Disease Prediction',
      description: 'Machine learning model to predict cardiovascular diseases using medical data.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Feature Engineering'],
      highlights: [
        'Achieved 98% accuracy',
        'Feature selection techniques',
        'Model training and optimization'
      ],
      icon: '❤️',
      github: 'https://github.com/Nishanth2173/Cardio-Vascular-Disease-Prediction', 
      live: null, 
    },
    {
      title: 'Student LMS Portal',
      description: 'Interactive Learning Management System with modern UI and component-based architecture.',
      technologies: ['React.js', 'Bootstrap', 'Tailwind CSS', 'JSON'],
      highlights: [
        'Responsive and user-friendly interfaces',
        'Component-based architecture for reusability',
        'Frontend data management with JSON'
      ],
      icon: '🎓',
      github: 'https://github.com/Nishanth2173/Student-LMS', 
      live: null
    },
    {
      title: 'Dynamic Weather Dashboard',
      description: 'Real-time weather application with forecasting capabilities.',
      technologies: ['HTML', 'Bootstrap', 'JavaScript', 'Weather API'],
      highlights: [
        'Real-time weather data integration',
        'Multi-day weather forecasting',
        'Responsive design'
      ],
      icon: '🌤️',
      github: 'https://github.com/Nishanth2173/Dynamic-Weather-Dashboard-IBM', 
      live: 'https://nishanth2173.github.io/Dynamic-Weather-Dashboard-IBM/'
    },
    {
      title: 'Smart Bookmark App',
      description: 'Modern, responsive portfolio showcasing projects and skills with smooth animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Vercel', 'Supabase', 'Google OAuth'],
      highlights: [
        'Modular Next.js components',
        'Smooth animations and interactions',
        'Continuous integration deployment',
        'Optimized performance'
      ],
      icon: '💼',
      github: 'https://github.com/Nishanth2173/Smart-Bookmark-App', 
      live: 'https://smart-bookmark-app-six-rust.vercel.app/', 
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A showcase of my technical skills and problem-solving abilities
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-8 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl">{project.icon}</div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 transition-colors group/btn"
                      title="View on GitHub"
                    >
                      <svg className="w-5 h-5 text-indigo-400 group-hover/btn:text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 transition-colors group/btn"
                      title="View Live Demo"
                    >
                      <svg className="w-5 h-5 text-indigo-400 group-hover/btn:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-indigo-400 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-600/10 border border-indigo-500/30 rounded-full text-xs text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
