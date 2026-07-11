const skills = ['Python', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Java', 'Git', 'Tkinter']

const projects = [
  {
    title: 'POS System',
    description:
      'A Python & Tkinter based point-of-sale application built with a team of four. Features product billing, coupon discounts, automatic total calculation, multiple payment modes (cash, card, UPI), and automated email bill generation.',
    tags: ['Python', 'Tkinter', 'Team Project'],
    link: '#',
  },
  {
    title: 'Valentine Site',
    description:
      'A themed HTML/CSS website with a small Java/Maven component, built collaboratively as a fun front-end project.',
    tags: ['HTML', 'CSS', 'Java'],
    link: 'https://github.com/prachi-java-art/valentinesite',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <span className="font-bold text-lg">Prachi Sharma</span>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <header className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Prachi Sharma 👋</h1>
        <p className="text-slate-300 max-w-xl mx-auto">
          Computer Science Engineering Undergraduate @ Bennett University · Open Source
          Contributor @ GSSoC 2026 · Exploring AI &amp; Web Development
        </p>
      </header>

      <section id="about" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-slate-300 leading-relaxed">
          I'm a CSE undergraduate who enjoys solving problems methodically and building
          things that actually work. I'm currently contributing to open-source projects
          through GirlScript Summer of Code (GSSoC) 2026, collaborating with developers
          across India on real-world software, and continuously growing through hands-on
          projects.
        </p>
      </section>

      <section id="skills" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 rounded-full bg-slate-800 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition"
            >
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-800 text-center">
        <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/prachi-sharma-49bba42a6/"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/prachi-java-art"
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="text-center py-8 text-slate-500 text-sm">
        © 2026 Prachi Sharma. Built with React, TypeScript &amp; Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
