"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

// A module-level Set to track which sections have already completed their intro animation.
const revealedSections = new Set<string>();

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  const [isFirstReveal, setIsFirstReveal] = useState(true);

  useEffect(() => {
    if (revealedSections.has(id)) {
      setIsFirstReveal(false);
    }
  }, [id]);

  const handleReveal = () => {
    if (isFirstReveal) {
      revealedSections.add(id);
      setIsFirstReveal(false);
    }
  };

  return (
    <motion.section
      id={id}
      // If already revealed, use a subtle offset for a fluid return entrance
      initial={isFirstReveal ? { opacity: 0, y: 40 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={handleReveal}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        // Quick fluid transition for revisit, cinematic for first time
        duration: isFirstReveal ? 0.8 : 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={cn("w-full py-16 md:py-24 bg-transparent", className)}
    >
      {children}
    </motion.section>
  );
}
