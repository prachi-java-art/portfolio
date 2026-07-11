import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TARGET = 'PRACHI SHARMA';
const RADIUS = 74;
const CIRC = 2 * Math.PI * RADIUS;

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const total = 1900;
    let raf = 0;
    let value = 0;
    const tick = (t: number) => {
      const elapsed = t - start;
      const target = Math.min(100, (elapsed / total) * 100);
      value += (target - value) * 0.15;
      setProgress(value);
      if (value < 99.5) raf = requestAnimationFrame(tick);
      else {
        setProgress(100);
        setTimeout(() => setDone(true), 420);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(TARGET.slice(0, i));
      if (i >= TARGET.length) clearInterval(id);
    }, 85);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [done]);

  const dashOffset = CIRC * (1 - progress / 100);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center pointer-events-auto"
          style={{ background: '#0a0e16' }}
        >
          <div className="aurora-bg opacity-70" />
          <div className="dot-grid" />
          <div className="noise-overlay" />

          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8592ad] flex items-center gap-2 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_#2dd4bf] animate-pulse" />
            prachi.dev
          </div>
          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8592ad] z-10">
            loading
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
            <div className="relative" style={{ width: 176, height: 176 }}>
              <svg width={176} height={176} viewBox="0 0 176 176" className="-rotate-90">
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" />
                    <stop offset="55%" stopColor="#6c63ff" />
                    <stop offset="100%" stopColor="#f5a623" />
                  </linearGradient>
                </defs>
                <circle cx="88" cy="88" r={RADIUS} fill="none" stroke="rgba(231,238,245,0.1)" strokeWidth="4" />
                <circle
                  cx="88"
                  cy="88"
                  r={RADIUS}
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  strokeDashoffset={dashOffset}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="hero-heading font-display font-bold" style={{ fontSize: '1.9rem' }}>
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <h1
                className="font-display font-bold uppercase tracking-tight text-[#e7eef5] whitespace-nowrap"
                style={{ fontSize: 'clamp(1.6rem, 6vw, 3rem)' }}
              >
                {typed}
                <span className="inline-block w-[3px] sm:w-1 h-[1em] bg-[#2dd4bf] ml-1 align-middle animate-pulse" />
              </h1>
              <div className="mono text-[10px] sm:text-xs text-[#8592ad] uppercase tracking-[0.25em]">
                cse undergrad · bennett university · gssoc 2026
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
