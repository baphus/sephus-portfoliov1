
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
  Layers, 
  Star 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import imageData from '@/app/lib/placeholder-images.json';

const portfolioItems = [
  {
    id: 'normalite',
    title: 'Normalite EDGE — CNU Student Hub',
    category: 'Web Apps',
    featured: true,
    description: 'A React-based web platform designed for Cebu Normal University students, guiding them toward academic excellence through user-tested features. Powered by Node.js and PostgreSQL.',
    image: imageData.projects.find(p => p.id === 'normalite')?.url || 'https://picsum.photos/seed/normalite/800/600',
    hint: 'academic excellence',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Render'],
    link: 'https://normalite-edge.vercel.app/',
  },
  {
    id: 'letreview',
    title: 'LET Reviewer — Gamified Study App',
    category: 'Web Apps',
    featured: true,
    description: 'Designed and developed a responsive LET reviewer app and landing page to help aspiring teachers practice for licensure exams.',
    image: imageData.projects.find(p => p.id === 'letreview')?.url || '',
    hint: imageData.projects.find(p => p.id === 'letreview')?.hint || '',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    link: 'https://sephus-let-review.vercel.app/',
  },
  {
    id: 'bnhs',
    title: 'BNHS E-Document Request System',
    category: 'Web Apps',
    featured: true,
    description: 'Official production system deployed at Bato National High School in Dec 2025. Utilized by administration for secure OTP-verified document requests and tracking.',
    image: imageData.projects.find(p => p.id === 'bnhs')?.url || '',
    hint: imageData.projects.find(p => p.id === 'bnhs')?.hint || '',
    tech: ['Laravel', 'PostgreSQL', 'Tailwind', 'PHP'],
    link: 'https://onhsedocumentrequest.onrender.com/',
  },
  {
    id: 'medicare',
    title: 'Medicare Clinic System',
    category: 'Web Apps',
    featured: false,
    description: 'Comprehensive clinic management system designed to handle patient records, appointments, and billing with Supabase integration.',
    image: imageData.projects.find(p => p.id === 'medicare')?.url || '',
    hint: imageData.projects.find(p => p.id === 'medicare')?.hint || '',
    tech: ['PHP', 'PDO', 'Supabase', 'Cloudinary'],
    link: 'https://medicare-clinic-18889ef8f83d.herokuapp.com/',
  },
  {
    id: 'jkbros',
    title: 'JK Bros Combos Social Media',
    category: 'Digital Media',
    featured: false,
    description: 'Managed a full social media campaign for a family food business, handling content creation, branding, and performance analysis.',
    image: imageData.projects.find(p => p.id === 'jkbros')?.url || '',
    hint: imageData.projects.find(p => p.id === 'jkbros')?.hint || '',
    tech: ['Branding', 'Photography', 'Meta Ads', 'Design'],
    link: '#',
  },
  {
    id: 'scihigh',
    title: 'Sci High Pi Video Ad',
    category: 'Digital Media',
    featured: false,
    description: 'Produced a compelling video advertisement for a local snack bar using professional editing techniques to boost online engagement.',
    image: imageData.projects.find(p => p.id === 'scihigh')?.url || '',
    hint: imageData.projects.find(p => p.id === 'scihigh')?.hint || '',
    tech: ['Video Production', 'Editing', 'Storytelling'],
    link: '#',
  },
  {
    id: 'cinema',
    title: 'Absolute Cinema Ticketing',
    category: 'Web Apps',
    featured: false,
    description: 'Full-stack cinema ticket booking system with user authentication, movie browsing, and seat selection.',
    image: imageData.projects.find(p => p.id === 'cinema')?.url || '',
    hint: imageData.projects.find(p => p.id === 'cinema')?.hint || '',
    tech: ['MySQL', 'PHP', 'HTML', 'CSS'],
    link: '#',
  }
];

const categories = [
  { id: 'featured', label: 'Featured', count: portfolioItems.filter(i => i.featured).length },
  { id: 'all', label: 'All Projects', count: portfolioItems.length },
  { id: 'web', label: 'Web Apps', count: portfolioItems.filter(i => i.category === 'Web Apps').length },
  { id: 'media', label: 'Digital Media', count: portfolioItems.filter(i => i.category === 'Digital Media').length },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('featured');

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'featured') return item.featured;
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return item.category === 'Web Apps';
    if (activeFilter === 'media') return item.category === 'Digital Media';
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
          Featured <span className="text-primary">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          A showcase of my production-ready work and academic projects. Each project represents a commitment to high-quality code and user experience.
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
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group h-full overflow-hidden border-border bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 rounded-[2rem] flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={item.hint}
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
                      <a href={item.link} target={item.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer">
                        {item.link !== '#' ? 'View Project' : 'Coming Soon'} <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-headline mb-3 group-hover:text-primary transition-colors text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto space-y-6">
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
                    
                    <Button asChild className="w-full btn-aqua btn-aqua-primary mt-4 py-6 shadow-none rounded-2xl" disabled={item.link === '#'}>
                      <a href={item.link} target={item.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>{item.link !== '#' ? 'Visit Demo' : 'Under Review'}</span>
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
        <div className="text-center py-20 bg-muted/10 rounded-3xl border border-dashed border-border mt-8">
          <Layers className="h-12 w-12 mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground font-medium">No projects found in this category yet.</p>
        </div>
      )}
    </div>
  );
}
