import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import OrbitRing from '../components/OrbitRing';
import FloatingBlobs from '../components/FloatingBlobs';
import Magnet from '../components/Magnet';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

const roles = ['CSE Undergrad', 'Open Source Contributor', 'AI & Web Explorer'];

// Hoisted so the object identity never changes across re-renders — otherwise
// the role rotator's interval-driven re-render would make framer-motion treat
// this as a brand-new animation target every 2.6s and snap/restart it.
const HEADING_BOB = { y: [0, -10, 0] };
const HEADING_BOB_TRANSITION = { duration: 5, repeat: Infinity, ease: 'easeInOut' as const };

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  const { scrollY } = useScroll();
  const orbitY = useTransform(scrollY, [0, 600], [0, 140]);
  const headingY = useTransform(scrollY, [0, 600], [0, -70]);
  const headingOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  // cursor-driven physics: the orbit ring gently tilts/drifts toward the mouse, spring-smoothed
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 16, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 16, mass: 0.6 });
  const orbitRotate = useTransform(springX, [-1, 1], [-10, 10]);
  const orbitTiltShift = useTransform(springY, [-1, 1], [10, -10]);
  const orbitDriftX = useTransform(springX, [-1, 1], [-14, 14]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  return (
    <section className="min-h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      <div className="aurora-bg" />
      <div className="dot-grid" />
      <div className="noise-overlay" />
      <FloatingBlobs />

      <FadeIn delay={0} y={-10} className="px-4 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 relative z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4 rounded-full pill-nav px-4 sm:px-6 py-2.5 sm:py-3">
          <a href="#hero" className="mono text-sm sm:text-base text-[#e7eef5] flex items-center gap-2 font-medium">
            <span className="text-[#2dd4bf]">*</span>
            prachi.dev
          </a>
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="pill-link text-[#e7eef5]/85 font-medium text-xs sm:text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Magnet padding={60} strength={5}>
              <a href="#contact">
                <ContactButton />
              </a>
            </Magnet>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 rounded-full border border-[#e7eef5]/25 flex items-center justify-center text-[#e7eef5]"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden max-w-6xl mx-auto"
        >
          <div className="mt-3 glass-panel p-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mono uppercase tracking-widest text-sm text-[#e7eef5] py-2 border-b border-[#e7eef5]/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </FadeIn>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center px-5 sm:px-8 md:px-10 pt-10 sm:pt-14 md:pt-16 pb-8 md:pb-14 relative z-20">
        <motion.div style={{ y: headingY, opacity: headingOpacity }} className="flex flex-col gap-7 sm:gap-9">
          <div className="max-w-3xl">
            <FadeIn delay={0.05} y={12}>
              <div
                className="role-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 sm:mb-7 justify-center"
                style={{ width: 'min(88vw, 232px)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_#2dd4bf] flex-shrink-0" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 340, damping: 20 }}
                    className="mono text-[11px] sm:text-xs uppercase tracking-widest text-[#e7eef5]/90 whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </FadeIn>

            <div className="overflow-hidden">
              <FadeIn delay={0.1} y={22}>
                <motion.h1
                  animate={HEADING_BOB}
                  transition={HEADING_BOB_TRANSITION}
                  className="hero-heading font-display font-bold tracking-tight leading-[0.95]"
                  style={{ fontSize: 'clamp(2.6rem, 12vw, 7.5rem)' }}
                >
                  Hey, I&apos;m
                  <br />
                  Prachi Sharma
                </motion.h1>
              </FadeIn>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 sm:gap-6">
            <FadeIn delay={0.16} y={12}>
              <p
                className="text-[#e7eef5]/90 leading-snug max-w-[440px]"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.2rem)' }}
              >
                Computer Science Engineering undergrad @{' '}
                <span className="text-[#2dd4bf] font-medium">Bennett University</span>, contributing
                to open source through GSSoC 2026 and exploring AI &amp; web development.
              </p>
            </FadeIn>
            <FadeIn delay={0.22} y={12}>
              <div className="flex items-center gap-3 flex-wrap">
                <Magnet padding={70} strength={4.5}>
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    className="inline-flex items-center gap-2 rounded-full text-[#0a0e16] font-medium uppercase tracking-widest text-xs md:text-sm px-5 py-2.5 md:px-7 md:py-3.5"
                    style={{
                      background: 'linear-gradient(135deg, #2dd4bf, #6c63ff)',
                      boxShadow: '0 14px 32px -12px rgba(45,212,191,0.5)',
                    }}
                  >
                    View Projects
                  </motion.a>
                </Magnet>
                <Magnet padding={70} strength={5}>
                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    className="hidden sm:inline-flex rounded-full border border-[#e7eef5]/30 text-[#e7eef5] font-medium uppercase tracking-widest text-xs md:text-sm px-5 py-2.5 md:px-7 md:py-3.5 hover:bg-[#e7eef5]/10"
                  >
                    About Me
                  </motion.a>
                </Magnet>
                <a href="#contact" className="sm:hidden">
                  <ContactButton />
                </a>
              </div>
            </FadeIn>
          </div>
        </motion.div>

        <motion.div
          style={{ y: orbitY, x: orbitDriftX, rotate: orbitRotate, rotateX: orbitTiltShift }}
          className="hidden lg:flex items-center justify-center"
        >
          <FadeIn delay={0.12} y={14}>
            <OrbitRing />
          </FadeIn>
        </motion.div>
      </div>

      <div className="lg:hidden pointer-events-none absolute top-24 right-2 z-10 opacity-80 scale-[0.5] origin-top-right">
        <OrbitRing />
      </div>

      <FadeIn delay={0.4} y={10} className="hidden sm:flex absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 mono text-[10px] uppercase tracking-[0.3em] text-[#8592ad]">
          <span>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#8592ad] to-transparent" />
        </div>
      </FadeIn>
    </section>
  );
}
