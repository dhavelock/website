import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me 👋
          </h1>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300">
            Software engineer passionate about AI and modern web development
          </p> */}
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Who I Am
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Hey, I’m Dylan. I started out as a software engineer and now work as a Solutions Engineer at Snyk, where I help engineering teams move fast without breaking things (or security).
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Most days, you’ll find me teaming up with customers -- digging into their challenges, sketching out what a solution could look like, and seeing it through from idea to implementation.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I also work side-by-side with our sales team, turning technical wins into business wins, all while building relationships that last longer than the contract.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Outside of work, I’m usually writing about tech, poking around in the world of AI and machine learning, or training for my next triathlon here in Vancounver.
                </p>
              </div>
            </section>

            {/* Skills */}
            {/* <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Backend & AI
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'Machine Learning', 'API Development', 'PostgreSQL', 'Prisma'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Figma'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Team Collaboration', 'Code Review', 'Technical Writing', 'Agile Development'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section> */}

            {/* Experience */}
            {/* <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Experience & Focus Areas
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    AI-Powered Applications
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building intelligent applications that leverage machine learning to enhance user experiences 
                    and solve complex problems. From recommendation systems to natural language processing.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Modern Web Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating fast, scalable, and maintainable web applications using modern frameworks and 
                    best practices. Focus on performance, accessibility, and user experience.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Technical Leadership
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leading development teams, conducting code reviews, and mentoring junior developers. 
                    Passionate about sharing knowledge and improving development practices.
                  </p>
                </div>
              </div>
            </section> */}

            {/* Writing & Sharing */}
            {/* <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Writing & Knowledge Sharing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I believe in the power of sharing knowledge and experiences. Through my blog posts, I write about:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                <li>Lessons learned from building AI applications</li>
                <li>Best practices in modern web development</li>
                <li>Technical insights and problem-solving approaches</li>
                <li>Industry trends and emerging technologies</li>
                <li>Team collaboration and development practices</li>
              </ul>
              <Link 
                href="/posts"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Read my latest posts
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </section> */}

            {/* Get in Touch */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm always interested in discussing new opportunities, collaborations, or just chatting about 
                technology. Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/dhavelock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/dylan-havelock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
