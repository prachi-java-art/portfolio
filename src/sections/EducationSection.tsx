import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, GitMerge, Award } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import TiltCard from '../components/TiltCard';

const milestones = [
  {
    icon: GraduationCap,
    accent: '#2dd4bf',
    tag: 'Education',
    title: 'B.Tech, Computer Science Engineering',
    place: 'Bennett University',
    desc: 'Undergraduate coursework spanning programming fundamentals, data structures, and web technologies.',
    offset: 'lg:-translate-y-6',
  },
  {
    icon: GitMerge,
    accent: '#6c63ff',
    tag: 'Open Source · 2026',
    title: 'GSSoC 2026 — Contributor',
    place: 'GirlScript Summer of Code',
    desc: 'Collaborating with developers across India on real-world community projects.',
    offset: 'lg:translate-y-6',
  },
  {
    icon: Award,
    accent: '#f5a623',
    tag: 'Certification',
    title: 'AWS Educate — ML Foundations',
    place: 'Credly Verified',
    desc: 'Exploring AI & machine learning fundamentals alongside coursework.',
    offset: 'lg:-translate-y-6',
  },
];

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const titleX = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="education" ref={ref} className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-16 sm:mb-24">
          <span className="mono text-xs uppercase tracking-[0.3em] text-[#8592ad]">// education</span>
          <motion.h2
            style={{ x: titleX, fontSize: 'clamp(2.2rem, 8vw, 5.5rem)' }}
            className="hero-heading font-display font-bold text-center leading-none tracking-tight"
          >
            Journey so far
          </motion.h2>
        </div>

        <div className="relative">
          <div className="milestone-line hidden lg:block" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <FadeIn key={m.title} delay={i * 0.12}>
                  <div className={`flex flex-col items-center lg:items-stretch gap-4 ${m.offset}`}>
                    <div className="hidden lg:flex justify-center">
                      <span className="milestone-dot" />
                    </div>
                    <TiltCard intensity={6} className="rounded-3xl">
                      <div className="glass-panel p-6 sm:p-7 h-full">
                        <div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                          style={{ background: `${m.accent}22`, border: `1px solid ${m.accent}55` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: m.accent }} strokeWidth={1.8} />
                        </div>
                        <div className="mono text-xs uppercase tracking-widest mb-2" style={{ color: m.accent }}>
                          {m.tag}
                        </div>
                        <h3 className="font-display font-semibold text-[#e7eef5] mb-1" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)' }}>
                          {m.title}
                        </h3>
                        <div className="text-[#e7eef5]/70 text-sm mb-3">{m.place}</div>
                        <p className="text-[#8592ad] leading-relaxed text-sm">{m.desc}</p>
                      </div>
                    </TiltCard>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
