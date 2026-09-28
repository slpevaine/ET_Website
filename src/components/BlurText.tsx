'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  wordDelay?: number;   // ms stagger between words
  startDelay?: number;  // ms before the first word begins
  duration?: number;    // seconds per word transition
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  align?: 'left' | 'center' | 'right';
}

export default function BlurText({
  text,
  className = '',
  wordDelay = 90,
  startDelay = 0,
  duration = 0.75,
  tag = 'p',
  align = 'left',
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '0px 0px -40px 0px' });

  const words = text.split(' ');

  const Tag = tag;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      style={{ textAlign: align }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(12px)', y: 10 }}
          animate={
            isInView
              ? { opacity: 1, filter: 'blur(0px)', y: 0 }
              : { opacity: 0, filter: 'blur(12px)', y: 10 }
          }
          transition={{
            duration,
            delay: startDelay / 1000 + (i * wordDelay) / 1000,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
