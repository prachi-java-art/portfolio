import { useEffect, useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'

const skillGroups = [
  { label: 'Languages', items: ['Python', 'Java', 'JavaScript'] },
  { label: 'Web', items: ['React', 'HTML5', 'CSS3'] },
  { label: 'Tools', items: ['Git', 'Tkinter'] },
]

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

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-bold text-lg tracking-tight">
            Prachi<span className="text-indigo-400">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-1 px-6 pb-4 text-slate-300 border-t border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <header id="top" className="text-center py-28 px-6">
        <p className="text-indigo-400 font-medium mb-3 tracking-wide">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
          Prachi Sharma
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto text-lg">
          Computer Science Engineering Undergraduate @ Bennett University &middot; Open Source
          Contributor @ GSSoC 2026 &middot; Exploring AI &amp; Web Development
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 transition font-medium"
          >
            Get In Touch
          </a>
        </div>
      </header>

      <section id="about" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-indigo-400">01.</span> About Me
          </h2>
          <p className="text-slate-300 leading-relaxed">
            I'm a CSE undergraduate who enjoys solving problems methodically and building
            things that actually work. I'm currently contributing to open-source projects
            through GirlScript Summer of Code (GSSoC) 2026, collaborating with developers
            across India on real-world software, and continuously growing through hands-on
            projects.
          </p>
        </Reveal>
      </section>

      <section id="skills" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-8">
            <span className="text-indigo-400">02.</span> Tech Stack
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <h3 className="text-sm font-semibold text-indigo-300 mb-3 uppercase tracking-wide">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="projects" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-8">
            <span className="text-indigo-400">03.</span> Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group block p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/60 hover:-translate-y-1 transition-all"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="education" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-8">
            <span className="text-indigo-400">04.</span> Education
          </h2>
          <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="font-semibold text-lg">Bennett University</h3>
            <p className="text-slate-400 text-sm mt-1">
              B.Tech in Computer Science Engineering &middot; Undergraduate
            </p>
            <p className="text-slate-400 text-sm mt-3">
              Open Source Contributor, GirlScript Summer of Code (GSSoC) 2026
            </p>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800 text-center">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-indigo-400">05.</span> Connect With Me
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            I'm always open to discussing new projects, opportunities, or just talking
            tech. Reach out through any of the links below.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/prachi-sharma-49bba42a6/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/prachi-java-art"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition font-medium"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
        &copy; 2026 Prachi Sharma. Built with React, TypeScript &amp; Tailwind CSS.
      </footer>
    </div>
  )
}

export default App
