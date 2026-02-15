'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Snowflake']
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['Computer Vision', 'YOLO', 'TensorFlow', 'Scikit-learn', 'PyTorch', 'ML5.js', 'p5.js']
    },
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript', 'Python', 'Java']
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Apache NiFi', 'Postman', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-indigo-950/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-8 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-indigo-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 rounded-full text-sm text-gray-300 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill progression */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-indigo-400">Core Competencies</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: 'Full Stack Development', level: 85 },
              { name: 'Machine Learning & AI', level: 75 },
              { name: 'Data Engineering', level: 70 },
              { name: 'UI/UX Design', level: 65 },
            ].map((skill) => (
              <div key={skill.name} className="glass rounded-xl p-6">
                <div className="flex justify-between mb-3">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-indigo-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-1000 ease-out animate-glow"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
