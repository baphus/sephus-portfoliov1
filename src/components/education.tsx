"use client";

import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  Trophy 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InteractiveCardWrapper from '@/components/ui/interactive-card-wrapper';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
import eduLogos from '@/app/lib/placeholder-images.json';

const educationData = [
  {
    institution: 'Cebu Technological University',
    degree: 'Bachelor of Science in Information Systems',
    period: 'Aug 2023 - Present',
    location: 'Cebu City, Philippines',
    status: 'In Progress',
    description: 'Specializing in systems analysis and design. Gathering and analyzing business requirements through direct collaboration with stakeholders and client representatives. OWWA scholar.',
    highlights: [
      'OWWA Scholar',
      'Focus on SDLC & Web Solutions',
      'Stakeholder Collaboration'
    ],
    logo: eduLogos.education.find(e => e.id === 'ctu'),
    icon: <GraduationCap className="h-6 w-6 text-indigo-600" />,
  },
  {
    institution: 'Toledo City Science Highschool',
    degree: 'High School Diploma, With Honors',
    period: '2017 - 2023',
    location: 'Toledo City, Philippines',
    status: 'Completed',
    description: 'Graduated With Honors (Rank 12). Member of the TCSHS Robotics Team, specializing in autonomous systems.',
    highlights: [
      'Graduated With Honors (Rank 12)',
      '1st Place - Division Science Fair 2019',
      'Multiple Regional Sumo Bot Placements'
    ],
    logo: eduLogos.education.find(e => e.id === 'tcshs'),
    icon: <Trophy className="h-6 w-6 text-amber-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Education() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-4 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-500/20">
          <GraduationCap className="h-4 w-4" />
          <span>Education</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Academic <span className="text-primary">Background</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Committed to academic excellence and technical mastery through scientific education.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 md:left-8 top-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full opacity-20" 
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {educationData.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-20">
              <div className="absolute left-[-5px] md:left-[27px] top-10 flex h-4 w-4 items-center justify-center">
                <div className="h-full w-full rounded-full bg-primary animate-ping opacity-20" />
                <div className="absolute h-3 w-3 rounded-full bg-primary border-4 border-background" />
              </div>

              <InteractiveCardWrapper className="rounded-[2rem]">
                <Card className="h-full rounded-[2rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-6 md:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {item.logo && (
                      <div className="flex-shrink-0 flex flex-col items-center gap-4">
                        <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                          <Image 
                            src={item.logo.url} 
                            alt={`${item.institution} logo`} 
                            fill 
                            className="object-contain"
                            data-ai-hint={item.logo.hint}
                          />
                        </div>
                        <div className="hidden md:flex p-3 rounded-2xl bg-muted/30 shadow-inner group-hover:bg-primary/5 transition-colors">
                          {item.icon}
                        </div>
                      </div>
                    )}

                    <div className="space-y-4 flex-1 text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <h3 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">
                          {item.degree}
                        </h3>
                        <Badge variant={item.status === 'Completed' ? 'secondary' : 'default'} className={cn(
                          "rounded-full px-3",
                          item.status === 'Completed' ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-primary text-white"
                        )}>
                          <span className="flex items-center gap-1 text-[10px]">
                            <span className={`h-1 w-1 rounded-full ${item.status === 'Completed' ? 'bg-emerald-500' : 'bg-white'} animate-pulse`} />
                            {item.status}
                          </span>
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-6 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          {item.institution}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-red-500" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          {item.period}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-base">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                        {item.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-lg bg-muted/50 border border-border text-[11px] font-bold text-muted-foreground uppercase tracking-wider group-hover:border-primary/20 group-hover:text-primary transition-colors">
                            <Award className="h-3 w-3 text-amber-500" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </InteractiveCardWrapper>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
