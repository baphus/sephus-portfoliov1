
"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Wrench, 
  Zap, 
  Target, 
  Heart,
  Server,
  Layers,
  Cpu,
  Globe,
  Send,
  ArrowRight,
  Briefcase,
  Terminal,
  Activity,
  ShieldCheck,
  Search,
  MessageSquare,
  Cloud
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Define custom icons first to avoid TDZ errors
const Lightbulb = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);

const categories = [
  { id: 'featured', label: 'Featured', icon: <Zap className="h-4 w-4" /> },
  { id: 'all', label: 'All Skills', icon: <Layers className="h-4 w-4" /> },
  { id: 'professional', label: 'Professional Skills', icon: <Briefcase className="h-4 w-4" /> },
  { id: 'frontend', label: 'Frontend', icon: <Layout className="h-4 w-4" /> },
  { id: 'backend', label: 'Backend', icon: <Server className="h-4 w-4" /> },
  { id: 'database', label: 'Database & Storage', icon: <Database className="h-4 w-4" /> },
];

const skills = [
  // Professional Skills
  { title: 'Problem Solving', category: 'professional', featured: true, description: 'Diagnosing complex technical issues and performance optimization', icon: <Lightbulb className="h-6 w-6" /> },
  { title: 'API Integration', category: 'professional', featured: true, description: 'Designing and consuming RESTful APIs for client-server communication', icon: <Activity className="h-6 w-6" /> },
  { title: 'System Development', category: 'professional', featured: true, description: 'End-to-end management of production web applications', icon: <Terminal className="h-6 w-6" /> },
  { title: 'Data Analysis & Reporting', category: 'professional', featured: false, description: 'Tracking performance metrics and analyzing system data', icon: <Search className="h-6 w-6" /> },
  { title: 'Full Stack Development', category: 'professional', featured: true, description: 'Seamlessly connecting frontend interfaces with backend logic', icon: <Layers className="h-6 w-6" /> },
  { title: 'Research-based', category: 'professional', featured: false, description: 'Driven by modern methodologies and technological exploration', icon: <Search className="h-6 w-6" /> },
  { title: 'Communication Skills', category: 'professional', featured: false, description: 'Explaining technical concepts to non-technical clients', icon: <MessageSquare className="h-6 w-6" /> },
  { title: 'Productivity Tools', category: 'professional', featured: false, description: 'Proficiency in collaborative and development workflows', icon: <ShieldCheck className="h-6 w-6" /> },

  // Frontend
  { title: 'React', category: 'frontend', featured: true, description: 'Library for building complex reusable UIs', icon: <Layout className="h-6 w-6" /> },
  { title: 'Next.js', category: 'frontend', featured: true, description: 'Performance-optimized React framework', icon: <Globe className="h-6 w-6" /> },
  { title: 'Tailwind CSS', category: 'frontend', featured: true, description: 'Utility-first styling workflow', icon: <Layout className="h-6 w-6" /> },
  { title: 'TypeScript', category: 'frontend', featured: true, description: 'Static typing for improved code quality', icon: <Code2 className="h-6 w-6" /> },
  { title: 'Framer Motion', category: 'frontend', featured: false, description: 'Adding fluid animations and micro-interactions', icon: <Activity className="h-6 w-6" /> },
  
  // Backend
  { title: 'Laravel', category: 'backend', featured: true, description: 'Building secure authentication and complex logic', icon: <Server className="h-6 w-6" /> },
  { title: 'PHP', category: 'backend', featured: true, description: 'Server-side logic and database interactions', icon: <Code2 className="h-6 w-6" /> },
  
  // Database & Storage
  { title: 'Supabase', category: 'database', featured: true, description: 'Postgres management and cloud services', icon: <Database className="h-6 w-6" /> },
  { title: 'Firebase', category: 'database', featured: true, description: 'Real-time database and app deployment', icon: <Cloud className="h-6 w-6" /> },
  { title: 'PostgreSQL', category: 'database', featured: false, description: 'Managing complex relational data', icon: <Database className="h-6 w-6" /> },
  { title: 'MySQL', category: 'database', featured: false, description: 'Designing relational database schemas', icon: <Database className="h-6 w-6" /> },
];

const values = [
  {
    title: "Continuous Learning",
    description: "Always exploring new technologies and improving existing skills to stay ahead in the fast-paced tech world.",
    icon: <Cpu className="h-6 w-6" />
  },
  {
    title: "Results-Driven",
    description: "Focused on delivering high-quality solutions that meet business goals and provide tangible user value.",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Passion for Code",
    description: "Genuinely passionate about creating elegant, efficient, and maintainable code for every project.",
    icon: <Heart className="h-6 w-6" />
  }
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('featured');

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') return skills;
    if (activeFilter === 'featured') return skills.filter(s => s.featured);
    return skills.filter(s => s.category === activeFilter);
  }, [activeFilter]);

  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <div className="space-y-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Cpu className="h-4 w-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-foreground">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
            Comprehensive expertise spanning web development, data analytics, systems design, and creative media production.
          </p>
          
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mt-8">
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm">
              <p className="text-2xl font-black text-primary">{skills.length}+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Competencies</p>
            </div>
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm">
              <p className="text-2xl font-black text-primary">{categories.length}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Categories</p>
            </div>
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm">
              <p className="text-2xl font-black text-primary">12</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Expert Skills</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 border shadow-sm",
                activeFilter === cat.id 
                  ? "bg-primary text-white border-primary shadow-primary/20" 
                  : "bg-background/50 backdrop-blur-sm hover:bg-muted border-border text-muted-foreground"
              )}
            >
              {cat.icon}
              <span className="font-bold text-sm">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.title + idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {skill.icon || <Globe className="h-6 w-6" />}
                  </div>
                  <h4 className="text-lg font-bold font-headline text-foreground">{skill.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary" className="text-[10px] uppercase rounded-md bg-primary/5 text-primary border-primary/10">
                      {skill.category}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-primary/5 py-10 border-y border-primary/10">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {marqueeSkills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm group hover:border-primary/50 transition-colors">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-lg font-bold font-headline text-foreground">{skill.title}</span>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((item, idx) => (
            <div key={idx} className="bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col items-center text-center space-y-4 group hover:bg-emerald-500/10 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold font-headline text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative py-20 rounded-[3rem] overflow-hidden bg-primary/5 border border-primary/20 text-center space-y-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              <Code2 className="h-3 w-3" />
              Versatile Developer
            </div>
            <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground">
              Ready to Deliver <span className="text-primary">High-Impact Solutions?</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              I combine technical depth with creative strategy to build systems that solve real problems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button asChild className="btn-aqua btn-aqua-primary h-14 px-8 rounded-full shadow-lg group">
                <a href="#contact" className="flex items-center gap-2">
                  <span>Start a Project</span> <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-white transition-all">
                <a href="#portfolio" className="flex items-center gap-2">
                  <span>View All Work</span> <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
