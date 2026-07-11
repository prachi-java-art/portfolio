import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import TiltCard from '../components/TiltCard';
import CountUp from '../components/CountUp';
import { Sparkles, GitPullRequest, GraduationCap } from 'lucide-react';

const aboutText =
  "I'm a CSE undergraduate who enjoys solving problems methodically and building things that actually work. I'm currently contributing to open-source projects through GirlScript Summer of Code (GSSoC) 2026, collaborating with developers across India on real-world software, and continuously growing through hands-on projects.";

const stats = [
  { value: '4+', label: 'GitHub repos' },
  { value: '2+', label: 'Featured projects' },
  { value: '2026', label: 'GSSoC batch' },
];

const badges = [
  { icon: GraduationCap, label: 'Bennett University', sub: 'B.Tech · CSE', rotate: -6, accent: '#2dd4bf' },
  { icon: GitPullRequest, label: 'GSSoC 2026', sub: 'Open Source Contributor', rotate: 4, accent: '#6c63ff' },
  { icon: Sparkles, label: 'AWS Educate', sub: 'ML Foundations', rotate: -3, accent: '#f5a623' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-32">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 sm:gap-20 items-center relative z-10">
        <FadeIn delay={0.05}>
          <div className="relative flex flex-col gap-5 max-w-sm mx-auto lg:mx-0">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  drag
                  dragElastic={0.4}
                  dragConstraints={{ top: -26, bottom: 26, left: -26, right: 26 }}
                  dragTransition={{ bounceStiffness: 500, bounceDamping: 14 }}
                  whileDrag={{ scale: 1.06 }}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <TiltCard intensity={7} className="rounded-3xl" glare={false}>
                    <div
                      className="glass-panel p-5 sm:p-6 flex items-center gap-4"
                      style={{ transform: `rotate(${b.rotate}deg)`, marginLeft: i % 2 === 1 ? '1.5rem' : 0 }}
                    >
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${b.accent}22`, border: `1px solid ${b.accent}55` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: b.accent }} strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="text-[#e7eef5] font-medium leading-tight">{b.label}</div>
                        <div className="mono text-xs text-[#8592ad] mt-0.5">{b.sub}</div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>

        <div className="flex flex-col gap-10 sm:gap-12">
          <div>
            <FadeIn delay={0} y={20}>
              <span className="mono text-xs uppercase tracking-[0.3em] text-[#8592ad]">// about</span>
            </FadeIn>
            <FadeIn delay={0.05} y={30}>
              <h2
                className="hero-heading font-display font-bold tracking-tight leading-none mt-3 mb-6"
                style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}
              >
                About me
              </h2>
            </FadeIn>
            <AnimatedText
              text={aboutText}
              className="text-[#e7eef5]/90 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
            />
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={0.1 + i * 0.08}>
                <div className="glass-panel px-6 py-4 flex items-center gap-3">
                  <div className="hero-heading font-display font-bold" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1 }}>
                    <CountUp value={s.value} />
                  </div>
                  <div className="mono text-[#8592ad] text-[11px] uppercase tracking-widest max-w-[80px] leading-tight">
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="glass-panel p-6 sm:p-7 border-l-4" style={{ borderLeftColor: '#2dd4bf' }}>
              <div className="mono text-xs uppercase tracking-widest text-[#2dd4bf] mb-2">Currently</div>
              <p className="text-[#e7eef5]/85 leading-relaxed text-sm sm:text-base">
                Contributing to open-source projects through{' '}
                <span className="text-[#6c63ff] font-medium">GirlScript Summer of Code (GSSoC) 2026</span>,
                collaborating with developers across India. Building with Python, React &amp; Java, and
                exploring AI &amp; web development along the way.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
