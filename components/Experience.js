'use client';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'AICTE IBM',
      location: 'Online',
      period: 'Aug 2025 - Sep 2025',
      description: [
        'Built a responsive and user-friendly interface for the course platform',
        'Implemented modern UI/UX design principles using React.js and Tailwind CSS',
        'Optimized component-based architecture for better performance and reusability',
        'Integrated frontend with backend APIs to display course data and user information'
      ],
      icon: '💻',
      color: 'indigo'
    },
    {
      role: 'Data Engineering Intern',
      company: 'Startup Company (Unregistered)',
      location: 'Gachibowli, Hyderabad',
      period: 'May 2025 - Aug 2025',
      description: [
        'Built ETL pipelines in Apache NiFi to load data into Snowflake',
        'Integrated PostgreSQL with Snowflake using NiFi processors',
        'Automated JSON and CSV data ingestion workflows',
        'Applied monitoring and error handling for reliable pipelines'
      ],
      icon: '📊',
      color: 'indigo'
    },
    {
      role: 'Machine Learning Intern',
      company: 'navAjna Technologies Pvt Ltd',
      location: 'Hi-tech City, Hyderabad',
      period: 'May 2024 - July 2024',
      description: [
        'Developed and deployed YOLOv5 object detection models using Python, PyTorch, and OpenCV',
        'Achieved >90% mAP on real-time custom datasets',
        'Engineered end-to-end computer vision pipelines including data annotation and augmentation',
        'Applied transfer learning techniques to reduce detection latency by 20%'
      ],
      icon: '🤖',
      color: 'purple'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-indigo-950/10 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Work Experience
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Real-world applications of my technical skills
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2 animate-glow"></div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-8 card-hover">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{exp.icon}</div>
                      <span className="text-sm text-indigo-400 font-medium">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-white">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-6">{exp.location}</p>

                    <ul className="space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
