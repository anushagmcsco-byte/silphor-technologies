'use client';

import React from 'react';
import { motion } from 'motion/react';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  hoverScale?: boolean;
}

export default function AnimatedWrapper({ children, className = '', delay = 0, direction = 'up', hoverScale = false }: AnimatedWrapperProps) {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 30 };
      case 'down': return { opacity: 0, y: -30 };
      case 'left': return { opacity: 0, x: -30 };
      case 'right': return { opacity: 0, x: 30 };
      case 'none': return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      animate={{ opacity: 1, x: 0, y: 0 }}
      whileHover={hoverScale ? { scale: 1.02, transition: { duration: 0.2 } } : undefined}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

