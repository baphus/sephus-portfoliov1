
"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
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
  Cloud,
  MousePointer2,
  Smartphone,
  Wrench,
  Monitor
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Define custom icons first to avoid TDZ errors
const Lightbulb = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);

const categories = [
  { id: 'featured', label: 'Featured', icon: <Zap className="h-3 w-3" /> },
  { id: 'all', label: 'All Skills', icon: <Layers className="h-3 w-3" /> },
  { id: 'frontend', label: 'Frontend Development', icon: <Layout className="h-3 w-3" /> },
  { id: 'backend', label: 'Backend Development', icon: <Server className="h-3 w-3" /> },
  { id: 'mobile', label: 'Mobile Development', icon: <Smartphone className="h-3 w-3" /> },
  { id: 'database', label: 'Database & Storage', icon: <Database className="h-3 w-3" /> },
  { id: 'tools', label: 'Tools & Technologies', icon: <Wrench className="h-3 w-3" /> },
  { id: 'professional', label: 'Professional Skills', icon: <Briefcase className="h-3 w-3" /> },
];

const skills = [
  // Professional Skills
  { title: 'Problem Solving', category: 'professional', featured: true, description: 'Diagnosing complex technical issues and performance optimization', icon: <Lightbulb className="h-8 w-8 text-amber-500" /> },
  { title: 'API Integration', category: 'professional', featured: true, description: 'Designing and consuming RESTful APIs for client-server communication', icon: <Activity className="h-8 w-8 text-emerald-500" /> },
  { title: 'System Development', category: 'professional', featured: true, description: 'End-to-end management of production web applications', icon: <Terminal className="h-8 w-8 text-sky-500" /> },
  { title: 'Data Analysis & Reporting', category: 'professional', featured: false, description: 'Tracking performance metrics and analyzing system data', icon: <Search className="h-8 w-8 text-indigo-500" /> },
  { title: 'Full Stack Development', category: 'professional', featured: true, description: 'Seamlessly connecting frontend interfaces with backend logic', icon: <Layers className="h-8 w-8 text-purple-500" /> },
  { title: 'Research-based', category: 'professional', featured: false, description: 'Driven by modern methodologies and technological exploration', icon: <Search className="h-8 w-8 text-rose-500" /> },
  { title: 'Communication Skills', category: 'professional', featured: false, description: 'Explaining technical concepts to non-technical clients', icon: <MessageSquare className="h-8 w-8 text-cyan-500" /> },
  { title: 'Productivity Tools', category: 'professional', featured: false, description: 'Proficiency in collaborative and development workflows', icon: <ShieldCheck className="h-8 w-8 text-blue-500" /> },

  // Frontend
  { title: 'Next.js', category: 'frontend', featured: true, description: 'Performance-optimized React framework for modern web', icon: <Globe className="h-8 w-8 text-foreground" /> },
  { title: 'React', category: 'frontend', featured: true, description: 'Library for building complex reusable UIs', icon: <Layout className="h-8 w-8 text-sky-400" /> },
  { title: 'Tailwind CSS', category: 'frontend', featured: true, description: 'Utility-first styling workflow', icon: <Monitor className="h-8 w-8 text-cyan-400" /> },
  { title: 'TypeScript', category: 'frontend', featured: true, description: 'Static typing for improved code quality', icon: <Code2 className="h-8 w-8 text-blue-500" /> },
  
  // Backend
  { title: 'Laravel', category: 'backend', featured: true, description: 'Building secure authentication and complex logic', icon: <Server className="h-8 w-8 text-red-500" /> },
  { title: 'Node.js', category: 'backend', featured: true, description: 'JavaScript runtime for server-side development', icon: <Cpu className="h-8 w-8 text-emerald-600" /> },
  { title: 'PHP', category: 'backend', featured: true, description: 'Server-side logic and database interactions', icon: <Code2 className="h-8 w-8 text-indigo-400" /> },
  
  // Database & Storage
  { title: 'Supabase', category: 'database', featured: true, description: 'Postgres management and cloud services', icon: <Database className="h-8 w-8 text-emerald-500" /> },
  { title: 'Firebase', category: 'database', featured: true, description: 'Real-time database and app deployment', icon: <Cloud className="h-8 w-8 text-orange-500" /> },
  { title: 'MySQL', category: 'database', featured: true, description: 'Popular relational database for scalable apps', icon: <Database className="h-8 w-8 text-blue-600" /> },
];

const values = [
  {
    title: "Continuous Learning",
    description: "Always exploring new technologies and improving existing skills",
    icon: <Cpu className="h-6 w-6" />
  },
  {
    title: "Results-Driven",
    description: "Focused on delivering high-quality solutions that meet business goals",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Passion for Code",
    description: "Genuinely passionate about creating elegant and efficient solutions",
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

  const marqueeSkills = [...skills, ...skills];

  return (
    <div className="space-y-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
            <Cpu className="h-3 w-3" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-headline text-foreground">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-base">
            Comprehensive expertise in modern web technologies, beautifully displayed in infinite scrolling marquees. Hover to pause and explore each skill in detail.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-8">
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-sm">
              <p className="text-3xl font-black text-foreground">37+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Technologies</p>
            </div>
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-sm">
              <p className="text-3xl font-black text-foreground">6</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Categories</p>
            </div>
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-sm">
              <p className="text-3xl font-black text-foreground">14</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Featured Skills</p>
            </div>
          </div>
        </div>

        {/* Two-Row Filter Navigation */}
        <div className="space-y-4 mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "group flex items-center gap-2 px-6 py-2.5 rounded-2xl transition-all duration-300 border shadow-sm",
                  activeFilter === cat.id 
                    ? "bg-primary text-white border-primary shadow-primary/20" 
                    : "bg-background/50 backdrop-blur-sm hover:bg-muted border-border text-muted-foreground"
                )}
              >
                {cat.icon}
                <span className="font-bold text-xs">{cat.label}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "group flex items-center gap-2 px-6 py-2.5 rounded-2xl transition-all duration-300 border shadow-sm",
                  activeFilter === cat.id 
                    ? "bg-primary text-white border-primary shadow-primary/20" 
                    : "bg-background/50 backdrop-blur-sm hover:bg-muted border-border text-muted-foreground"
                )}
              >
                {cat.icon}
                <span className="font-bold text-xs">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.title + idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex items-center gap-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <div className="relative z-10 flex-shrink-0 p-4 rounded-2xl bg-background/50 shadow-inner group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="relative z-10 space-y-1">
                  <h4 className="text-xl font-bold font-headline text-foreground">{skill.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{skill.description}</p>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary" className="text-[8px] uppercase font-black rounded-md bg-primary/5 text-primary border-primary/10">
                      {skill.category}
                    </Badge>
                    {skill.featured && (
                      <Badge className="text-[8px] uppercase font-black rounded-md bg-emerald-500/10 text-emerald-500 border-emerald-500/10">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Professional Values Row */}
        <div className="bg-primary/5 border border-primary/10 backdrop-blur-xl rounded-[3rem] p-10 mb-20">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {values.map((item, idx) => (
              <div key={idx} className="space-y-4 group">
                <div className="mx-auto p-4 w-fit rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform shadow-inner">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold font-headline text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* One Developer CTA */}
        <div className="relative py-20 rounded-[3rem] overflow-hidden bg-background/50 border border-border/50 text-center space-y-8 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              <Globe className="h-3 w-3" />
              Stack-Ready Developer
            </div>
            <h3 className="text-4xl md:text-5xl font-black font-headline text-foreground leading-tight">
              Need This Tech Stack in One <span className="text-primary">Developer?</span>
            </h3>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              I work across frontend, backend, CMS, and integrations to deliver complete, production-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button asChild className="btn-aqua btn-aqua-primary h-14 px-8 rounded-2xl shadow-lg group w-full sm:w-auto">
                <a href="#contact" className="flex items-center gap-2">
                  <span>Discuss Your Stack</span> <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 rounded-2xl border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-white transition-all w-full sm:w-auto font-bold">
                <a href="#portfolio" className="flex items-center gap-2">
                  <span>See Experience</span> <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

