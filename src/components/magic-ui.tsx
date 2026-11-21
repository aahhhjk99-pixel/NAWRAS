import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type BlurFadeProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function BlurFade({ children, delay = 0, className = '' }: BlurFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 18 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ShimmerButton({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button className={`shimmer-button ${className}`} {...props}>
      <span className="shimmer-button-shine" />
      <span className="shimmer-button-content">{children}</span>
    </button>
  );
}

export function NumberTicker({ value, className = '' }: { value: string; className?: string }) {
  return (
    <motion.strong
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {value}
    </motion.strong>
  );
}
