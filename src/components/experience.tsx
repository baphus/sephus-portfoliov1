
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Code2, 
  CheckCircle2,
  Rocket,
  MessageSquare,
  Layout,
  Globe,
  Database,
  Cpu,
  ShieldAlert,
  Film
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InteractiveCardWrapper from '@/components/ui/interactive-card-wrapper';
import Link from 'next/link';

const experiences = [
  {
    role: 'Full-Stack Developer (Normalite EDGE)',
    company: 'Cebu Normal University (BLEPT Department)',
    location: 'Cebu City, Philippines',
    period: 'Feb 2026 - Present',
    status: 'In Development',
    type: 'Academic Project',
    description: 'Developed a web-based reviewer system for Cebu Normal University. Built features including mock exams, flashcards, score analytics, and virtual meeting scheduling. Implemented a calendar system for managing study schedules and translated client requirements into system workflows following the SDLC.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'REST', 'JWT'],
    icon: <Globe className="h-5 w-5" />
  },
  {
    role: 'Lead Developer / Systems Architect',
    company: 'Bayanihan One Window (Region VII)',
    location: 'Cebu City, Philippines',
    period: 'Jan 2026 - Present',
    status: 'In Development',
    type: 'Capstone Project',
    description: 'Spearheading the architecture and development of an inter-agency referral system for distressed OFWs. Implementing a single-entry intake system managed by the DMW, featuring a Unified Master Case File to coordinate multiple government agencies and ensure accountable service delivery.',
    tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Composer', 'Node.js', 'Tailwind CSS'],
    icon: <ShieldAlert className="h-5 w-5" />
  },
  {
    role: 'Full-Stack Developer (Personal Project)',
    company: 'LETReview (PWA)',
    location: 'Cebu, Philippines',
    period: 'Jan 2026 - Present',
    status: 'Live',
    type: 'Personal Project',
    description: 'Developed a gamified PWA for licensure exam preparation. Features quiz mode, flashcards, daily streaks, achievements, and virtual pets. Integrated secure Auth and Firestore. Achieved 120+ users and 4,000+ visits within 14 days of launch.',
    tech: ['Typescript', 'Next.js App Router', 'React', 'Firebase', 'Tailwind CSS', 'ShadCN/UI'],
    icon: <Layout className="h-5 w-5" />
  },
  {
    role: 'Full-Stack Developer (School Project)',
    company: 'Bato National High School (BNHS)',
    location: 'Toledo City, Philippines',
    period: '2024 - Dec 2025',
    status: 'Deployed',
    type: 'eDocument System',
    description: 'Developed the backend using Laravel MVC and designed the PostgreSQL database. Built authentication and email notifications with queue workers. Analyzed requirements from school administration and maintained the application on Render.',
    tech: ['Vite', 'Laravel', 'Tailwind CSS', 'PostCSS', 'Axios', 'Node.js', 'Cloudinary', 'PostgreSQL'],
    icon: <Database className="h-5 w-5" />
  },
  {
    role: 'Full-Stack Developer (Academic)',
    company: 'Medicare Clinic System',
    location: 'Remote (Cebu City)',
    period: '2023 - 2024',
    status: 'Completed',
    type: 'Academic Project',
    description: 'Designed a comprehensive clinic management system handling patient records, appointments, and billing. Utilized custom MVC routing and Supabase for real-time data handling.',
    tech: ['PHP', 'PDO', 'Supabase', 'Cloudinary', 'Bootstrap', 'REST API'],
    icon: <Cpu className="h-5 w-5" />
  },
  {
    role: 'Full-Stack Developer (Academic)',
    company: 'AbsoluteCinema (CTU Final Project)',
    location: 'Cebu City, Philippines',
    period: '2023',
    status: 'Completed',
    type: 'Academic Project',
    description: 'Taught myself PHP and MySQL from scratch to build a movie ticket booking system. Developed full admin dashboard features for managing movies, screens, and bookings, solving issues like scheduling conflicts and double bookings.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    icon: <Film className="h-5 w-5" />
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
          <Briefcase className="h-3 w-3" />
          <span>Professional Experience</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-headline text-foreground">
          My <span className="text-primary">Journey</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-base font-medium">
          Explore the roles and achievements that have shaped my journey as a full-stack developer and digital professional.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative mb-32">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full opacity-30" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-24"
            >
              <div className="absolute left-[-6px] md:left-[26px] top-10 flex h-4 w-4 items-center justify-center z-10">
                <div className="h-full w-full rounded-full bg-primary animate-ping opacity-20" />
                <div className="absolute h-3 w-3 rounded-full bg-primary border-4 border-background" />
              </div>

              <InteractiveCardWrapper className="rounded-[2.5rem]">
                <Card className="h-full rounded-[2.5rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-2xl font-black font-headline text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] font-bold rounded-full px-3 py-0.5">
                            <span className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              {exp.status}
                            </span>
                          </Badge>
                          <Badge variant="outline" className="border-primary/20 text-primary text-[10px] font-bold rounded-full px-3">
                            {exp.type}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-3.5 w-3.5 text-primary" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base font-medium">
                      {exp.description}
                    </p>

                    <div className="space-y-4 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                        <Code2 className="h-4 w-4" />
                        <span>Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/50 dark:bg-white/[0.02] border border-border text-[9px] font-bold px-3 py-1 rounded-md text-foreground group-hover:border-primary/30 transition-colors">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </InteractiveCardWrapper>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-8 py-20 bg-primary/5 rounded-[4rem] border border-primary/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 dark:bg-neutral-900/40 text-muted-foreground text-[10px] font-bold uppercase tracking-widest border border-border/50">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          <span>Production-Tested Experience</span>
        </div>
        <h2 className="text-3xl md:text-6xl font-black font-headline text-foreground leading-tight max-w-4xl px-4">
          Looking for Proven Delivery <span className="text-primary">Experience?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl text-base font-medium leading-relaxed px-4">
          I&apos;ve shipped features across academic, viral, and client environments with a focus on reliability and speed.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild className="btn-aqua btn-aqua-primary h-14 px-10 rounded-2xl shadow-xl group">
            <Link href="/contact" className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5" />
              <span>Talk About Your Needs</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-14 px-10 rounded-2xl border-border bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md font-bold text-sm">
            <Link href="/portfolio" className="flex items-center gap-3">
              <Rocket className="h-5 w-5" />
              <span>Review My Work</span>
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
