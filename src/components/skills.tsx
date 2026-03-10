
"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Terminal, 
  Cloud, 
  Wrench, 
  Zap, 
  Lightbulb, 
  Target, 
  Heart,
  ExternalLink,
  Github,
  Server,
  Layers,
  Cpu,
  Globe,
  Send,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'featured', label: 'Featured', icon: <Zap className="h-4 w-4" /> },
  { id: 'all', label: 'All Skills', icon: <Layers className="h-4 w-4" /> },
  { id: 'frontend', label: 'Frontend', icon: <Layout className="h-4 w-4" /> },
  { id: 'backend', label: 'Backend', icon: <Server className="h-4 w-4" /> },
  { id: 'database', label: 'Database & Storage', icon: <Database className="h-4 w-4" /> },
  { id: 'tools', label: 'Tools & Others', icon: <Wrench className="h-4 w-4" /> },
];

const skills = [
  // Frontend
  { title: 'React', category: 'frontend', featured: true, description: 'Library for web and native user interfaces' },
  { title: 'Next.js', category: 'frontend', featured: true, description: 'The React Framework for the Web' },
  { title: 'Tailwind CSS', category: 'frontend', featured: true, description: 'Utility-first CSS framework' },
  { title: 'TypeScript', category: 'frontend', featured: true, description: 'Static typing for JavaScript' },
  { title: 'JavaScript', category: 'frontend', featured: false, description: 'The language of the web' },
  { title: 'HTML5', category: 'frontend', featured: false, description: 'Semantic web structuring' },
  { title: 'CSS3', category: 'frontend', featured: false, description: 'Modern web styling' },
  { title: 'Framer Motion', category: 'frontend', featured: false, description: 'Motion library for React' },
  
  // Backend
  { title: 'Laravel', category: 'backend', featured: true, description: 'PHP framework for web artisans' },
  { title: 'PHP', category: 'backend', featured: true, description: 'Server-side scripting language' },
  { title: 'Node.js', category: 'backend', featured: false, description: 'JavaScript runtime environment' },
  { title: 'REST API', category: 'backend', featured: false, description: 'Architectural style for network APIs' },
  
  // Database & Storage
  { title: 'Supabase', category: 'database', featured: true, description: 'Open source Firebase alternative' },
  { title: 'Firebase', category: 'database', featured: true, description: 'App development platform' },
  { title: 'PostgreSQL', category: 'database', featured: false, description: 'Advanced relational database' },
  { title: 'MySQL', category: 'database', featured: false, description: 'Popular open-source RDBMS' },
  { title: 'Prisma', category: 'database', featured: false, description: 'Next-generation Node.js and TypeScript ORM' },
  { title: 'Cloudinary', category: 'database', featured: false, description: 'Cloud-based image and video management' },
  
  // Tools & Others
  { title: 'Git', category: 'tools', featured: false, description: 'Distributed version control system' },
  { title: 'GitHub', category: 'tools', featured: false, description: 'Platform for code hosting and collaboration' },
  { title: 'Docker', category: 'tools', featured: false, description: 'OS-level virtualization platform' },
  { title: 'WSL', category: 'tools', featured: false, description: 'Windows Subsystem for Linux' },
  { title: 'NPM', category: 'tools', featured: false, description: 'Package manager for JavaScript' },
  { title: 'Figma', category: 'tools', featured: false, description: 'Interface design tool' },
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

  // Duplicate skills for the marquee effect
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <div className="space-y-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <Cpu className="h-4 w-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
            Comprehensive expertise in modern web technologies, beautifully displayed in infinite scrolling marquees.
          </p>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mt-8">
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm">
              <p className="text-2xl font-black text-primary">20+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Technologies</p>
            </div>
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm">
              <p className="text-2xl font-black text-primary">6</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Categories</p>
            </div>
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm">
              <p className="text-2xl font-black text-primary">8</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Featured Skills</p>
            </div>
          </div>
        </div>

        {/* Categories Tabs */}
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

        {/* Featured Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.title + idx}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold font-headline">{skill.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                <div className="flex gap-2 pt-2">
                  <Badge variant="secondary" className="text-[10px] uppercase rounded-md bg-primary/5 text-primary border-primary/10">
                    {skill.category}
                  </Badge>
                  {skill.featured && (
                    <Badge className="text-[10px] uppercase rounded-md bg-emerald-500/10 text-emerald-500 border-emerald-500/10">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden bg-primary/5 py-10 border-y border-primary/10">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {marqueeSkills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm group hover:border-primary/50 transition-colors">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-lg font-bold font-headline">{skill.title}</span>
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
        {/* Core Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((item, idx) => (
            <div key={idx} className="bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col items-center text-center space-y-4 group hover:bg-emerald-500/10 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold font-headline">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack CTA */}
        <div className="relative py-20 rounded-[3rem] overflow-hidden bg-primary/5 border border-primary/20 text-center space-y-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              <Code2 className="h-3 w-3" />
              Stock-Ready Developer
            </div>
            <h3 className="text-4xl md:text-5xl font-black font-headline">
              Need This Tech Stack in <span className="text-primary">One Developer?</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              I work across frontend, backend, CMS, and integrations to deliver complete, production-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button asChild className="btn-aqua btn-aqua-primary h-14 px-8 rounded-full shadow-lg group">
                <a href="#contact" className="flex items-center gap-2">
                  Discuss Your Stack <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-white transition-all">
                <a href="#portfolio" className="flex items-center gap-2">
                  See Experience <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
