
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InteractiveCardWrapper from '@/components/ui/interactive-card-wrapper';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Code2, 
  Star,
  Github,
  ChevronDown,
  ChevronUp,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';
import imageData from '@/app/lib/placeholder-images.json';

const portfolioItems = [
  {
    id: 'bayanihan',
    title: 'Bayanihan One Window',
    category: 'Web Apps',
    featured: true,
    isCapstone: true,
    description: "An Inter-Agency Referral and Tracking System for Distressed OFWs in Region VII. Designed to streamline assistance through a single-entry intake system managed by the Department of Migrant Workers (DMW). It features a Unified Master Case File that coordinates multiple government agencies, enabling real-time collaboration, digital referrals, and faster service delivery for OFWs.",
    image: imageData.projects.find(p => p.id === 'bayanihan')?.url || 'https://picsum.photos/seed/bayanihan/800/600',
    hint: 'government system',
    tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Composer', 'Node.js', 'Tailwind CSS'],
    link: '#',
    type: 'internal'
  },
  {
    id: 'normalite',
    title: 'Normalite EDGE — CNU Student Hub',
    category: 'Web Apps',
    featured: true,
    description: 'A comprehensive web-based reviewer system for Cebu Normal University (BLEPT Department). Built features including mock exams, flashcards, and score analytics. Implemented a calendar system for managing deadlines and virtual meeting scheduling. Translated client requirements into system workflows and features.',
    image: imageData.projects.find(p => p.id === 'normalite')?.url || 'https://picsum.photos/seed/normalite/800/600',
    hint: 'academic excellence',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL'],
    link: 'https://normalite-edge.vercel.app/',
    type: 'demo'
  },
  {
    id: 'letreview',
    title: 'LETReview - Licensure Reviewer (PWA)',
    category: 'Web Apps',
    featured: true,
    description: "Full-stack Progressive Web App for licensure exam preparation. Features quiz mode, flashcards, and gamification elements (daily streaks, achievements, virtual pets). Achieved 120+ users and 4,000+ visits within 14 days of launch. Integrated secure authentication and real-time NoSQL database using Firebase.",
    image: imageData.projects.find(p => p.id === 'letreview')?.url || 'https://picsum.photos/seed/let/800/600',
    hint: 'educational app',
    tech: ['Next.js', 'Typescript', 'Firebase', 'Tailwind CSS', 'PWA'],
    link: 'https://studio--letreview.us-central1.hosted.app/',
    type: 'demo'
  },
  {
    id: 'bnhs',
    title: 'BNHS eDocument System',
    category: 'Academic Deliverables',
    featured: true,
    description: 'An official production system for Bato National High School. Developed the backend using Laravel MVC, applying core system logic and PostgreSQL design. Built authentication and email notifications with queue workers. Gathered requirements directly from school administration stakeholders.',
    image: imageData.projects.find(p => p.id === 'bnhs')?.url || 'https://picsum.photos/seed/bnhs/800/600',
    hint: 'school documents',
    tech: ['Laravel', 'PHP', 'PostgreSQL', 'Node.js', 'Cloudinary', 'MVC'],
    link: 'https://bnhsedocumentrequest.onrender.com/',
    type: 'demo'
  },
  {
    id: 'medicare',
    title: 'MediCare Clinic Booking System',
    category: 'Academic Deliverables',
    featured: true,
    description: 'It is a comprehensive web-based clinic management and appointment booking system developed as part of an academic project. The system supports multiple user roles including administrators, staff, doctors, and patients. It includes features such as appointment scheduling, medical records management, payment tracking, and role-based dashboards, designed to streamline clinic operations and improve patient experience.',
    image: imageData.projects.find(p => p.id === 'medicare')?.url || 'https://picsum.photos/seed/medicare/800/600',
    hint: 'medical booking system',
    tech: ['PHP', 'Tailwind CSS', 'Supabase PostgreSQL', 'Cloudinary', 'Heroku'],
    link: 'https://github.com/baphus/Medi-Care-AP3-Project',
    type: 'github'
  },
  {
    id: 'cinema',
    title: 'Absolute Cinema Ticketing',
    category: 'Academic Deliverables',
    featured: true,
    description: 'A web-based movie ticket booking system developed for CTU to solve issues like double bookings and scheduling conflicts. Taught myself PHP and MySQL from scratch to build this complete system, going beyond course requirements to include a full admin dashboard for managing movies, screens, showtimes, and user data.',
    image: imageData.projects.find(p => p.id === 'cinema')?.url || 'https://github.com/baphus/AbsoluteCinema/blob/main/images/banner.jpg?raw=true',
    hint: 'movie theater',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/baphus/AbsoluteCinema',
    type: 'github'
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('featured');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'featured', label: 'Featured', count: portfolioItems.filter(i => i.featured).length },
    { id: 'all', label: 'All Projects', count: portfolioItems.length },
    { id: 'web', label: 'Web Apps', count: portfolioItems.filter(i => i.category === 'Web Apps').length },
    { id: 'academic', label: 'Academic Deliverables', count: portfolioItems.filter(i => i.category === 'Academic Deliverables').length },
  ];

  const toggleExpand = (id: string) => {
    const newSet = new Set(expandedItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedItems(newSet);
  };

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'featured') return item.featured;
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return item.category === 'Web Apps';
    if (activeFilter === 'academic') return item.category === 'Academic Deliverables';
    return false;
  });

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <Code2 className="h-4 w-4" />
          <span>Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground">
          Recent <span className="text-primary">Deliverables</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          I've shipped scalable solutions across academic, viral, and production environments with a focus on ownership and performance.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={cn(
              "group flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 border shadow-sm",
              activeFilter === cat.id 
                ? "bg-primary text-white border-primary shadow-primary/20" 
                : "bg-background/50 backdrop-blur-sm hover:bg-muted border-border text-muted-foreground"
            )}
          >
            <span className="font-bold text-sm">{cat.label}</span>
            <span className={cn(
              "text-[10px] flex items-center justify-center w-5 h-5 rounded-full font-bold",
              activeFilter === cat.id ? "bg-white text-primary" : "bg-muted text-muted-foreground"
            )}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const isExpanded = expandedItems.has(item.id);
            const isCapstone = 'isCapstone' in item && item.isCapstone;
            
            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <InteractiveCardWrapper className="rounded-[2rem] h-full">
                  <Card className="group h-full overflow-hidden border-border bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        data-ai-hint={item.hint}
                      />
                      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                        {isCapstone && (
                          <Badge className="bg-indigo-600/90 hover:bg-indigo-600 text-white border-none backdrop-blur-md px-3 py-1 flex items-center gap-1 shadow-lg">
                            <Award className="h-3 w-3 fill-white text-amber-400" />
                            Capstone Project
                          </Badge>
                        )}
                        {item.featured && (
                          <Badge className="bg-emerald-500/90 hover:bg-emerald-500 text-white border-none backdrop-blur-md px-3 py-1 flex items-center gap-1 shadow-lg">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Button variant="secondary" className="rounded-full gap-2 shadow-xl" asChild>
                          <a href={item.link} target={item.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer">
                            {item.type === 'github' ? 'View Repo' : (item.link !== '#' ? 'View Project' : 'Under Development')} 
                            {item.type === 'github' ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                          </a>
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-8 flex flex-col flex-1">
                      <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors text-foreground">
                        {item.title}
                      </h3>
                      
                      <div className="mb-6">
                        <p className={cn(
                          "text-muted-foreground text-sm leading-relaxed transition-all duration-300",
                          isExpanded ? "" : "line-clamp-3"
                        )}>
                          {item.description}
                        </p>
                        {item.description.length > 150 && (
                          <button 
                            onClick={() => toggleExpand(item.id)}
                            className="mt-2 text-primary text-xs font-bold flex items-center gap-1 hover:underline transition-all"
                          >
                            {isExpanded ? (
                              <>Show Less <ChevronUp className="h-3 w-3" /></>
                            ) : (
                              <>Read More <ChevronDown className="h-3 w-3" /></>
                            )}
                          </button>
                        )}
                      </div>
                      
                      <div className="mt-auto space-y-6">
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((t) => (
                              <Badge key={t} variant="secondary" className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground border-border">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button asChild className="w-full btn-aqua btn-aqua-primary mt-4 py-6 shadow-none rounded-2xl" disabled={item.link === '#'}>
                          <a href={item.link} target={item.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-2">
                            <span>{item.type === 'github' ? 'View on GitHub' : (item.link !== '#' ? 'Visit Demo' : 'Coming Soon')}</span>
                            {item.type === 'github' ? <Github className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </InteractiveCardWrapper>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
