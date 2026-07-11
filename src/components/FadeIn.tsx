import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { ReactNode, ElementType } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.45,
  x = 0,
  y = 16,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  // memoized so the component type stays stable across re-renders — otherwise
  // any parent that re-renders on an interval (e.g. a rotating role badge)
  // would remount every FadeIn beneath it and reset it back to opacity: 0
  const Component = useMemo(() => motion.create(as), [as]);
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}
