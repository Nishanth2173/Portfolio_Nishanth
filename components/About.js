'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m an aspiring Software Developer with a strong foundation in web technologies and a passion for continuous learning. 
                Currently pursuing Computer Science and Engineering with specialization in AI & ML at Gitam University.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in full-stack web development using modern frameworks like React, Next.js, and Node.js. 
                I also have hands-on experience with Machine Learning, Computer Vision, and Data Engineering pipelines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">2</div>
              <p className="text-gray-400">Internships</p>
            </div>
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <p className="text-gray-400">Technologies</p>
            </div>
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="text-4xl font-bold gradient-text mb-2">6+</div>
              <p className="text-gray-400">Certifications</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:nishanthnuthi123@gmail.com"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            nishanthnuthi123@gmail.com
          </a>
          <span className="mx-4 text-gray-600">|</span>
          <a
            href="tel:+917013814085"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 7013814085
          </a>
        </div>
      </div>
    </section>
  );
}
