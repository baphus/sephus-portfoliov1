"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Facebook, Send, ExternalLink } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

export default function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [headlineFinished, setHeadlineFinished] = useState(false);
  const fadeInControls = useAnimation();

  useEffect(() => {
    if (headlineFinished) {
      fadeInControls.start("visible");
    }
  }, [headlineFinished, fadeInControls]);

  const roles = [
    'Web Developer',
    'Full-Stack Developer',
    'Systems Designer',
    'Digital Creator',
    'Problem Solver',
  ];

  const techStack = [
    'Next.js & React',
    'Node.js & Postgres',
    'Laravel & PHP',
    'Tailwind CSS',
    'JavaScript',
    'Vercel & Render',
  ];

  const stats = [
    { label: 'Projects', value: '15+' },
    { label: 'Years Exp', value: '2+' },
    { label: 'Satisfaction', value: '100%' },
    { label: 'Support', value: '24/7' },
  ];

  return (
    <section ref={targetRef} id="home" className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <div className="relative flex-1 container mx-auto px-4 md:px-6 flex items-center pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          <div className="flex flex-col space-y-8 z-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
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
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground font-headline">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi, I'm ")
                      .typeString('<span class="text-primary">Josephus</span>')
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
              </h1>
              
              <div className="h-10 text-2xl md:text-3xl font-semibold text-muted-foreground flex items-center">
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
              </div>

              <motion.p 
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                variants={fadeIn}
                initial="hidden"
                animate={fadeInControls}
              >
                Passionate developer crafting scalable, user-friendly applications with modern web technologies. I turn complex problems into elegant solutions.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-4"
              variants={fadeIn}
              initial="hidden"
              animate={fadeInControls}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Specializing in</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors px-3 py-1 rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
              variants={fadeIn}
              initial="hidden"
              animate={fadeInControls}
            >
              <Button asChild className="btn-aqua btn-aqua-primary min-w-[220px] h-14 px-8 rounded-full shadow-lg hover:scale-105 transition-transform group">
                <a href="#contact" className="flex items-center justify-center gap-2">
                  <span className="flex items-center gap-2">Get In Touch <Send className="h-4 w-4" /></span>
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-accent transition-all">
                <a href="/Josephus_Sarsonas_Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 pt-4"
              variants={fadeIn}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headlineFinished ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
                  <span className="text-sm font-semibold">Normalite EDGE (CNU)</span>
                  <ExternalLink className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}