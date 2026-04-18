
"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Facebook, Download, ExternalLink } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';

// Global flag to track if the hero section has already completed its intro sequence
let hasHeroAnimated = false;

export default function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [headlineFinished, setHeadlineFinished] = useState(hasHeroAnimated);
  const [isFirstReveal, setIsFirstReveal] = useState(!hasHeroAnimated);
  const fadeInControls = useAnimation();

  useEffect(() => {
    if (hasHeroAnimated) {
      fadeInControls.start("visible");
    }
  }, [fadeInControls]);

  useEffect(() => {
    if (headlineFinished && !hasHeroAnimated) {
      fadeInControls.start("visible");
      hasHeroAnimated = true;
      setIsFirstReveal(false);
    }
  }, [headlineFinished, fadeInControls]);

  const roles = [
    'Full-Stack Web Developer',
    'Systems Analyst & Designer',
    'Self-Driven & Highly Autonomous',
    'Problem Solver',
    'Communicator'
  ];

  const techStack = [
    'Next.js, React & Prisma ORM',
    'PHP Laravel & PostgreSQL',
    'Tailwind CSS, ShadCN/UI',
    'PHP, JavaScript & Typescript',
    'Vercel & Render',
  ];

  const stats = [
    { label: 'Projects', value: '10+' },
    { label: 'Years Exp', value: '2+' },
    { label: 'Satisfaction', value: '100%' },
    { label: 'Support', value: '24/7' },
  ];

  const resumeLink = "https://drive.google.com/file/d/1DuSx0NbhRIhrQStPamOgR52aI2DZD75D/view?usp=sharing";

  // Unified transition settings to match SectionWrapper
  const fluidTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };
  const cinematicTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
  
  const activeTransition = isFirstReveal ? cinematicTransition : fluidTransition;
  const yOffset = isFirstReveal ? 40 : 10;

  return (
    <section ref={targetRef} id="home" className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <div className="relative flex-1 container mx-auto px-4 md:px-6 flex items-center pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          <div className="flex flex-col space-y-8 z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={isFirstReveal ? { delay: 0.2, ...cinematicTransition } : fluidTransition}
            >
              <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 flex items-center gap-2 w-fit rounded-full shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work
              </Badge>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground font-headline"
                initial={{ opacity: 0, y: yOffset }}
                animate={{ opacity: 1, y: 0 }}
                transition={activeTransition}
              >
                {hasHeroAnimated ? (
                  <span className="whitespace-nowrap">Hi, I'm <span className="text-primary">Josephus 👋</span></span>
                ) : (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('<span class="whitespace-nowrap">Hi, I\'m <span class="text-primary">Josephus 👋</span></span>')
                        .callFunction(() => {
                          setHeadlineFinished(true);
                        })
                        .start();
                    }}
                    options={{
                      cursor: '|',
                      delay: 80,
                    }}
                  />
                )}
              </motion.h1>
              
              <motion.div 
                className="h-10 text-xl md:text-3xl font-semibold text-muted-foreground flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isFirstReveal ? 1 : 0.2, ...activeTransition }}
              >
                {headlineFinished && (
                  <Typewriter
                    options={{
                      strings: roles,
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                      cursor: '|',
                    }}
                  />
                )}
              </motion.div>

              <motion.p 
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: yOffset },
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: activeTransition
                  }
                }}
                initial="hidden"
                animate={fadeInControls}
              >
                Passionate developer crafting scalable, user-friendly applications with modern web technologies. I turn complex problems into elegant solutions.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: activeTransition
                }
              }}
              initial="hidden"
              animate={fadeInControls}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Specializing in</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors px-3 py-1 rounded-full text-[10px] md:text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
              variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: activeTransition
                }
              }}
              initial="hidden"
              animate={fadeInControls}
            >
              <Button asChild className="btn-aqua btn-aqua-primary min-w-[220px] h-14 px-8 rounded-full shadow-lg hover:scale-105 transition-transform group">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span className="flex items-center gap-2 text-white">Download Resume <Download className="h-4 w-4" /></span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-accent transition-all font-bold">
                <Link href="/portfolio">
                  View My Projects
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 pt-4"
              variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: activeTransition
                }
              }}
              initial="hidden"
              animate={fadeInControls}
            >
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/baphus" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/" },
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Mail className="h-5 w-5" />, href: "mailto:sarsonasjosephuskim@gmail.com" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/50 border border-border hover:border-primary/50 hover:text-primary transition-all backdrop-blur-sm"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="relative flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, scale: 0.95, y: yOffset }}
            animate={hasHeroAnimated ? { opacity: 1, scale: 1, y: 0 } : (headlineFinished ? { opacity: 1, scale: 1, y: 0 } : {})}
            transition={activeTransition}
          >
            <div className="w-full max-w-md bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-3xl border border-white/20 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 space-y-8">
              <div className="relative mx-auto w-40 h-40">
                <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse" />
                <div className="absolute inset-2 rounded-full border-2 border-primary/40" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl">
                  <Image 
                    src="/about/600x750.png" 
                    alt="Josephus Sarsonas" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 h-5 w-5 bg-emerald-500 rounded-full border-4 border-white dark:border-neutral-900" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-background/40 border border-border p-4 rounded-2xl text-center space-y-1">
                    <p className="text-2xl font-bold text-foreground font-headline">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border space-y-3">
                <p className="text-xs text-center text-muted-foreground font-medium uppercase tracking-wider">Currently working on</p>
                <div className="flex items-center justify-center gap-2 p-3 bg-primary/5 border border-primary/10 rounded-xl group cursor-default transition-all hover:bg-primary/10">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold">Bayanihan One Window (Region VII)</span>
                  <ExternalLink className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full" 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">Scroll</span>
      </motion.div>
    </section>
  );
}
