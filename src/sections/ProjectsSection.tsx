import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Check, Github, Receipt, Heart } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import TiltCard from '../components/TiltCard';

interface Project {
  id: string;
  n: string;
  name: string;
  tagline: string;
  category: string;
  problem: string;
  bullets: string[];
  stack: string[];
  icon: typeof Receipt;
  accent: string;
  thumb: string;
  live?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    id: 'pos-system',
    n: '01',
    name: 'POS System',
    tagline: 'Python & Tkinter point-of-sale application',
    category: 'Team Project · Python · Tkinter',
    problem:
      'A point-of-sale application built with a team of four, handling product billing, discounts, and multiple payment modes for a retail checkout flow.',
    bullets: [
      'Product billing with automatic total calculation and coupon-based discount handling.',
      'Support for multiple payment modes — cash, card, and UPI — in a single checkout flow.',
      'Automated email bill generation so customers receive a receipt after every sale.',
    ],
    stack: ['Python', 'Tkinter', 'Team Project'],
    icon: Receipt,
    accent: '#f5a623',
    thumb: '/projects/pos-system.svg',
    repo: 'https://github.com/prachi-java-art',
  },
  {
    id: 'valentine-site',
    n: '02',
    name: 'Valentine Site',
    tagline: 'Themed front-end site with a Java/Maven component',
    category: 'Collaborative · HTML · CSS · Java',
    problem:
      'A themed HTML/CSS website built collaboratively as a fun front-end project, paired with a small Java/Maven component.',
    bullets: [
      'Designed a fully themed, responsive front-end layout using HTML5 and CSS3.',
      'Collaborated with teammates on a shared codebase as a hands-on group project.',
      'Integrated a small Java/Maven component alongside the front-end.',
    ],
    stack: ['HTML', 'CSS', 'Java'],
    icon: Heart,
    accent: '#6c63ff',
    thumb: '/projects/valentine-site.svg',
    repo: 'https://github.com/prachi-java-art/valentinesite',
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const titleX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="projects" ref={ref} className="relative z-10 px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-16 sm:mb-24">
          <span className="mono text-xs uppercase tracking-[0.3em] text-[#8592ad]">// work</span>
          <motion.h2
            style={{ x: titleX, fontSize: 'clamp(2.2rem, 8vw, 5.5rem)' }}
            className="hero-heading font-display font-bold text-center leading-none tracking-tight"
          >
            Projects
          </motion.h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {projects.map((p, i) => (
            <BentoProject key={p.id} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoProject({ project, reverse }: { project: Project; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const Icon = project.icon;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      <FadeIn delay={0} className={reverse ? 'lg:order-2' : ''}>
        <TiltCard intensity={4} glare={false} className="rounded-3xl">
          <div className="bento-media aspect-[16/10]">
            <motion.img style={{ y: imgY }} src={project.thumb} alt={`${project.name} preview`} loading="lazy" />
          </div>
        </TiltCard>
      </FadeIn>

      <FadeIn delay={0.1} className={reverse ? 'lg:order-1' : ''}>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="hero-heading font-display font-bold leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              {project.n}
            </span>
            <span
              className="inline-flex items-center gap-2 uppercase tracking-widest text-xs rounded-full border px-3 py-1 mono"
              style={{ borderColor: `${project.accent}55`, color: '#e7eef5' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}` }} />
              {project.category}
            </span>
          </div>

          <h3 className="text-[#e7eef5] font-display font-bold leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}>
            {project.name}
          </h3>
          <div className="mono text-sm text-[#8592ad]">{project.tagline}</div>

          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}55` }}
            >
              <Icon className="w-4 h-4" style={{ color: project.accent }} strokeWidth={1.8} />
            </div>
            <p className="text-[#e7eef5]/80 leading-relaxed text-sm sm:text-[15px]">{project.problem}</p>
          </div>

          <div className="flex flex-col gap-2.5">
            {project.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#2dd4bf] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[#e7eef5]/75 text-sm leading-relaxed">{b}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-1">
            {project.stack.map((s) => (
              <span key={s} className="mono text-xs rounded-full px-3 py-1.5 border border-[#e7eef5]/15 text-[#e7eef5]/70">
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-2">
            <a
              href={project.repo ?? 'https://github.com/prachi-java-art'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#e7eef5]/30 text-[#e7eef5] uppercase tracking-widest text-xs px-4 py-2.5 hover:bg-[#e7eef5]/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" strokeWidth={2} />
              Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#2dd4bf] text-[#2dd4bf] uppercase tracking-widest text-xs sm:text-sm px-4 py-2.5 sm:px-6 sm:py-3 hover:bg-[#2dd4bf]/10 transition-colors"
              >
                Live
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
              </a>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
