'use client';

export default function Education() {
  const education = [
    {
      degree: 'Computer Science and Engineering (AI & ML)',
      institution: 'Gitam University',
      location: 'Hyderabad, Telangana',
      period: '2021 - 2025',
      grade: 'CGPA: 7.4 | Percentage: 70.3%',
      icon: '🎓'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Bhashyam Junior College',
      location: '',
      period: '2019 - 2021',
      grade: 'Percentage: 90.1%',
      icon: '📚'
    },
    {
      degree: '10th Class',
      institution: 'Bhashyam Public School',
      location: '',
      period: '2018 - 2019',
      grade: 'Percentage: 88.35% | GPA: 9.3',
      icon: '🏫'
    }
  ];

  const certifications = [
    'Artificial Intelligence by Google (Edu Skills Foundation)',
    'Data Analytics Job Simulation by Deloitte',
    'Python Programming by Microsoft (Skill India)',
    'Data Science and Analytics by HP',
    'AI for Beginners by HP',
    'Front End Web Development by IBM'
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Education & Certifications
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Academic background and continuous learning journey
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-indigo-400">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="glass rounded-2xl p-6 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <p className="text-indigo-400 font-medium mb-1">{edu.institution}</p>
                      {edu.location && (
                        <p className="text-sm text-gray-500 mb-2">{edu.location}</p>
                      )}
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300">
                          {edu.period}
                        </span>
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-indigo-400">Certifications</h3>
            <div className="glass rounded-2xl p-8">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={cert}
                    className="flex items-start gap-3 group cursor-default"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="mt-1">
                      <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
