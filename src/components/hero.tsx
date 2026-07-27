
"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import AquaWindow from '@/components/ui/aqua-window';
import { AquaList, AquaRow } from '@/components/ui/aqua-list';

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

  const workingWith = [
    'Laravel & PostgreSQL',
    'Next.js & React',
    'TypeScript',
    'Inertia.js',
    'Prisma ORM',
    'Docker',
  ];

  // Read straight off the résumé. About This Mac lists what the machine is;
  // this lists what the developer is.
  const specs = [
    { label: 'Role', value: 'Full Stack Developer Trainee' },
    { label: 'Company', value: 'Edufied Pte (Remote)' },
    { label: 'Degree', value: 'BS Information Systems, 2027' },
    { label: 'GWA', value: '1.45' },
    { label: 'Location', value: 'Cebu, Philippines' },
  ];

  const resumeLink = "/resume.pdf";

  // Unified transition settings to match SectionWrapper
  const fluidTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };
  const cinematicTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  const activeTransition = isFirstReveal ? cinematicTransition : fluidTransition;
  const yOffset = isFirstReveal ? 40 : 10;

  const fadeUp = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0, transition: activeTransition },
  };

  return (
    <section ref={targetRef} id="home" className="relative min-h-screen flex flex-col bg-transparent overflow-hidden">
      <div className="relative flex-1 container mx-auto px-4 md:px-6 flex items-center pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          <div className="flex flex-col space-y-7 z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: yOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={isFirstReveal ? { delay: 0.2, ...cinematicTransition } : fluidTransition}
            >
              <p className="inline-flex w-fit items-center gap-2 rounded-control border border-aqua-hairline/40 bg-white/70 px-3 py-1.5 text-[12px] font-bold text-foreground shadow-sm dark:bg-black/30">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]" />
                Full Stack Developer Trainee at Edufied Pte
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground font-headline"
                initial={{ opacity: 0, y: yOffset }}
                animate={{ opacity: 1, y: 0 }}
                transition={activeTransition}
              >
                {hasHeroAnimated ? (
                  <span className="whitespace-nowrap">Hi, I&apos;m Josephus</span>
                ) : (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('<span class="whitespace-nowrap">Hi, I\'m Josephus</span>')
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

              <motion.p
                className="text-xl md:text-2xl font-bold text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isFirstReveal ? 1 : 0.2, ...activeTransition }}
              >
                Full-stack developer and systems analyst.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                animate={fadeInControls}
              >
                I work across the whole stack: gathering requirements, designing the database,
                building the backend and the interface, then deploying it. I led a team of four
                on OWBAP, an inter-agency case management system for the Department of Migrant
                Workers, and I&apos;m finishing a BS in Information Systems at Cebu Technological
                University.
              </motion.p>
            </div>

            <motion.div
              className="space-y-3"
              variants={fadeUp}
              initial="hidden"
              animate={fadeInControls}
            >
              <p className="text-[11px] font-bold text-muted-foreground">Working with</p>
              <div className="flex flex-wrap gap-2">
                {workingWith.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-control border border-aqua-hairline/35 bg-white/60 px-2.5 py-1 text-[12px] font-bold text-foreground dark:bg-black/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
              variants={fadeUp}
              initial="hidden"
              animate={fadeInControls}
            >
              <Button asChild className="btn-aqua btn-aqua-primary h-12 px-7">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    Download résumé <Download className="h-4 w-4" />
                  </span>
                </a>
              </Button>
              <Button asChild className="btn-aqua btn-aqua-secondary h-12 px-7">
                <Link href="/portfolio">
                  <span>View projects</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 pt-1"
              variants={fadeUp}
              initial="hidden"
              animate={fadeInControls}
            >
              {[
                { icon: <Github className="h-4 w-4" />, href: "https://github.com/baphus", label: "GitHub" },
                { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/", label: "LinkedIn" },
                { icon: <Mail className="h-4 w-4" />, href: "mailto:sarsonasjosephuskim@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-control border border-aqua-hairline/35 bg-white/60 p-2.5 text-aqua-graphite transition-colors hover:border-aqua-blue/60 hover:text-aqua-blue dark:bg-black/25"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, scale: 0.97, y: yOffset }}
            animate={hasHeroAnimated ? { opacity: 1, scale: 1, y: 0 } : (headlineFinished ? { opacity: 1, scale: 1, y: 0 } : {})}
            transition={activeTransition}
          >
            <AquaWindow
              title="About This Developer"
              className="w-full max-w-md"
              statusBar={<span>Open to new opportunities</span>}
            >
              <div className="space-y-5 p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-control border border-aqua-hairline/40 shadow-inner">
                    <Image
                      src="/about/600x750.png"
                      alt="Josephus Kim L. Sarsonas"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-headline text-xl font-bold leading-tight text-foreground">
                      Josephus Kim L. Sarsonas
                    </p>
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      Cebu Technological University
                    </p>
                  </div>
                </div>

                <AquaList>
                  {specs.map((spec) => (
                    <AquaRow key={spec.label} label={spec.label} value={spec.value} />
                  ))}
                </AquaList>

                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-muted-foreground">Currently building</p>
                  <div className="rounded-control border border-aqua-hairline/35 bg-white/60 px-3 py-2.5 dark:bg-black/25">
                    <p className="text-[13px] font-bold text-foreground">
                      OWBAP, One Window Bayanihan Assistance Program
                    </p>
                    <p className="mt-0.5 text-[12px] text-muted-foreground">
                      Capstone, for the Department of Migrant Workers
                    </p>
                  </div>
                </div>
              </div>
            </AquaWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
