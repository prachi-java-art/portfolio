import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import TiltCard from '../components/TiltCard';
import FloatingBlobs from '../components/FloatingBlobs';
import Magnet from '../components/Magnet';

const links = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/prachi-sharma1536',
    href: 'https://www.linkedin.com/in/prachi-sharma1536/',
    accent: '#2dd4bf',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@prachi-java-art',
    href: 'https://github.com/prachi-java-art/',
    accent: '#6c63ff',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative px-5 sm:px-8 md:px-10 pt-8 pb-16">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="cta-panel px-6 sm:px-14 py-16 sm:py-20 flex flex-col items-center gap-8 text-center">
            <FloatingBlobs />
            <div className="relative z-10 flex flex-col items-center gap-5">
              <span className="mono text-xs uppercase tracking-[0.3em] text-[#8592ad]">// contact</span>
              <h2
                className="hero-heading font-display font-bold uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)' }}
              >
                Connect with me
              </h2>
              <p className="text-[#e7eef5]/80 max-w-xl leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}>
                Always open to discussing new projects, open-source collaborations, or just talking
                tech. Reach out through any of the links below.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-3">
                {links.map((l) => {
                  const Icon = l.icon;
                  return (
                    <Magnet key={l.label} padding={50} strength={4}>
                      <TiltCard intensity={6} glare={false} className="rounded-full">
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-3 rounded-full px-6 py-3.5 border"
                          style={{ borderColor: `${l.accent}55`, background: `${l.accent}12` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: l.accent }} strokeWidth={1.8} />
                          <span className="text-[#e7eef5] text-sm font-medium">{l.value}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#8592ad] group-hover:text-[#e7eef5] transition-colors" strokeWidth={1.8} />
                        </a>
                      </TiltCard>
                    </Magnet>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="border-t border-[#e7eef5]/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#8592ad] text-xs uppercase tracking-widest mono">
          <span>&copy; {new Date().getFullYear()} Prachi Sharma</span>
          <span>Built with React · TypeScript · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
