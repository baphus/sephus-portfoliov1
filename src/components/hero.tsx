"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import HolographicCard from './holographic-card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline"
              variants={itemVariants}
            >
              Hi, I’m Josephus
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              A dynamic and versatile digital professional with expertise in video editing, social media management, and web development.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center md:justify-start gap-x-6"
              variants={itemVariants}
            >
              <Button asChild size="lg">
                <a href="/Josephus_Sarsonas_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-background/50 hover:bg-background/80">
                <a href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <HolographicCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
