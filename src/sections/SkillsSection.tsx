import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AppWindow } from 'lucide-react';
import FadeIn from '../components/FadeIn';

type Tech = { name: string; slug?: string; color: string; icon?: LucideIcon };

const items: Tech[] = [
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'HTML5', slug: 'html5', color: 'E34F26' },
  { name: 'CSS3', slug: 'css3', color: '1572B6' },
  { name: 'Java', slug: 'openjdk', color: 'ED8B00' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'Tkinter', color: '2dd4bf', icon: AppWindow },
];

function SkillCard({ tech, angle, radius }: { tech: Tech; angle: number; radius: number }) {
  const Icon = tech.icon;
  return (
    <div
      className="carousel-card"
      style={
        {
          '--radius': `${radius}px`,
          transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(var(--radius))`,
        } as React.CSSProperties
      }
    >
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: `#${tech.color}22` }}
      >
        {Icon ? (
          <Icon size={16} color={`#${tech.color}`} strokeWidth={1.8} />
        ) : (
          <img src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} alt={tech.name} width={18} height={18} loading="lazy" />
        )}
      </span>
      <span className="mono text-sm text-[#e7eef5]">{tech.name}</span>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const headingX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const step = 360 / items.length;

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20">
      <div className="aurora-bg opacity-70" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end mb-16 sm:mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4 mono text-xs uppercase tracking-[0.3em] text-[#8592ad]">
              <span className="h-px w-10 bg-[#8592ad]/40" />
              <span>// tech stack</span>
            </div>
            <motion.h2
              style={{ x: headingX, fontSize: 'clamp(2rem, 6.5vw, 4.5rem)' }}
              className="hero-heading font-display font-bold tracking-tight leading-none"
            >
              Tools I work with
            </motion.h2>
            <p className="mt-4 text-[#8592ad] max-w-xl leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)' }}>
              A CSE undergrad's toolkit, orbiting in 3D — hover to pause and take a closer look.
            </p>
          </FadeIn>
        </div>

        <div className="carousel-stage">
          <div className="carousel-track" style={{ height: '80px', width: '100%' }}>
            {items.map((t, i) => (
              <SkillCard key={t.name} tech={t} angle={i * step} radius={220} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-16 sm:mt-20">
          <FadeIn delay={0.1}>
            <div className="glass-panel p-6 sm:p-7 flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between">
                <div className="mono text-xs uppercase tracking-widest text-[#8592ad]">// core</div>
                <Sparkles className="w-4 h-4 text-[#2dd4bf]" strokeWidth={1.6} />
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#3776AB22' }}>
                  <img src="https://cdn.simpleicons.org/python/3776AB" width={22} height={22} alt="Python" />
                </span>
                <div>
                  <div className="text-[#e7eef5] font-medium">Python &amp; Tkinter</div>
                  <div className="mono text-xs text-[#8592ad]">desktop apps &amp; automation</div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between mono text-[10px] uppercase tracking-widest text-[#8592ad] mb-1.5">
                  <span>proficiency</span>
                  <span>solid</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden bg-white/5">
                  <div className="h-full rounded-full" style={{ width: '80%', background: 'linear-gradient(90deg, #2dd4bf, #6c63ff)' }} />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="glass-panel p-6 sm:p-7 flex flex-col gap-4 h-full">
              <div className="flex items-center justify-between">
                <div className="mono text-xs uppercase tracking-widest text-[#8592ad]">// building</div>
                <TrendingUp className="w-4 h-4 text-[#f5a623]" strokeWidth={1.6} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'React', slug: 'react', color: '61DAFB' },
                  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
                  { name: 'HTML5', slug: 'html5', color: 'E34F26' },
                  { name: 'CSS3', slug: 'css3', color: '1572B6' },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-2 rounded-xl px-3 py-2 border border-white/5 bg-white/[0.02]">
                    <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} width={16} height={16} alt={t.name} />
                    <span className="mono text-xs text-[#e7eef5]/80">{t.name}</span>
                  </div>
                ))}
              </div>
              <div className="mono text-xs text-[#8592ad] mt-auto">
                Front-end projects &amp; <span className="text-[#e7eef5]/80">GSSoC 2026</span> contributions.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.26}>
            <div className="glass-panel p-6 sm:p-7 flex flex-col gap-4 h-full">
              <div className="mono text-xs uppercase tracking-widest text-[#8592ad]">// exploring</div>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { name: 'Java', slug: 'openjdk', color: 'ED8B00' },
                  { name: 'Git', slug: 'git', color: 'F05032' },
                  { name: 'AI/ML', slug: 'tensorflow', color: 'FF6F00' },
                ].map((t) => (
                  <span key={t.name} className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/10">
                    <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} width={14} height={14} alt={t.name} />
                    <span className="mono text-xs text-[#e7eef5]/80">{t.name}</span>
                  </span>
                ))}
              </div>
              <div className="mono text-xs text-[#8592ad] mt-auto">Currently diving into AI &amp; web development.</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
