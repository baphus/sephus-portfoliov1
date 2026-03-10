"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Code2, 
  Layout, 
  Globe, 
  Layers, 
  Star 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const portfolioItems = [
  {
    id: 'letreview',
    title: 'LETReview — Gamified Licensure Exam Reviewer',
    category: 'Web Apps',
    featured: true,
    description: 'A Next.js-based gamified platform for aspiring teachers, featuring real-time analytics and practice tests.',
    image: 'https://picsum.photos/seed/let1/800/600',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    link: 'https://studio--letreview.us-central1.hosted.app/',
  },
  {
    id: 'bnhs',
    title: 'BNHS E-Document Request System',
    category: 'Web Apps',
    featured: true,
    description: 'A production-ready system for school document management with OTP verification and real-time tracking.',
    image: 'https://picsum.photos/seed/bnhs1/800/600',
    tech: ['Laravel', 'PostgreSQL', 'Tailwind', 'PHPMailer'],
    link: 'https://onhsedocumentrequest.onrender.com/',
  },
  {
    id: 'normalite',
    title: 'Normalite EDGE — Guide to Excellence',
    category: 'Web Apps',
    featured: true,
    description: 'A React-based web platform designed to guide students toward academic excellence through user-tested features.',
    image: 'https://picsum.photos/seed/norm1/800/600',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    link: 'https://normalite-edge.vercel.app/',
  },
  {
    id: 'medicare',
    title: 'Medicare Clinic System',
    category: 'Web Apps',
    featured: false,
    description: 'A comprehensive clinic management system for patient records, appointments, and billing with Supabase integration.',
    image: 'https://picsum.photos/seed/med1/800/600',
    tech: ['PHP', 'Supabase', 'Cloudinary', 'Bootstrap'],
    link: 'https://medicare-clinic-18889ef8f83d.herokuapp.com/',
  },
];

const categories = [
  { id: 'featured', label: 'Featured', count: 3 },
  { id: 'all', label: 'All Projects', count: 4 },
  { id: 'web', label: 'Web Apps', count: 4 },
  { id: 'mobile', label: 'Mobile', count: 0 },
  { id: 'apis', label: 'APIs', count: 0 },
  { id: 'others', label: 'Others', count: 0 },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('featured');

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'featured') return item.featured;
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return item.category === 'Web Apps';
    return false;
  });

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <Code2 className="h-4 w-4" />
          <span>Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Personal <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          A showcase of my personal and portfolio-owned work. Client contributions and academic projects are featured here with full details on my technical role.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={cn(
              "group flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 border shadow-sm",
              activeFilter === cat.id 
                ? "bg-primary text-white border-primary shadow-primary/20" 
                : "bg-background hover:bg-muted border-border text-muted-foreground"
            )}
          >
            <span className="font-semibold text-sm">{cat.label}</span>
            <span className={cn(
              "text-[10px] flex items-center justify-center w-5 h-5 rounded-full font-bold",
              activeFilter === cat.id ? "bg-white text-primary" : "bg-muted text-muted-foreground"
            )}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group h-full overflow-hidden border-border bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-2xl flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-emerald-500/90 hover:bg-emerald-500 text-white border-none backdrop-blur-md px-3 py-1 flex items-center gap-1 shadow-lg">
                        <Star className="h-3 w-3 fill-white" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button variant="secondary" className="rounded-full gap-2 shadow-xl" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto space-y-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="text-[10px] px-2 py-0.5 rounded-md bg-primary/5 text-primary border-primary/10">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full btn-aqua btn-aqua-primary mt-4 py-6 shadow-none">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Visit Demo</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border mt-8">
          <Layers className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground font-medium">No projects found in this category yet.</p>
        </div>
      )}
    </div>
  );
}