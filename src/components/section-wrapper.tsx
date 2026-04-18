
"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

// A module-level Set to track which sections have already completed their intro animation.
// This survives client-side navigation (internal links) but is reset on a full browser refresh.
const revealedSections = new Set<string>();

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  const [isFirstReveal, setIsFirstReveal] = useState(true);

  useEffect(() => {
    // Check if this specific section ID has already been seen in this session
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
      // If already revealed in this session, skip the initial offsets
      initial={isFirstReveal ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={handleReveal}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        // If already revealed, the transition is instant (duration 0)
        duration: isFirstReveal ? 0.8 : 0, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={cn("w-full py-16 md:py-24 bg-transparent", className)}
    >
      {children}
    </motion.section>
  );
}
