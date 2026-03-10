
"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Server, 
  Layers, 
  Cpu, 
  Globe, 
  Smartphone, 
  Wrench, 
  Monitor, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Search, 
  MessageSquare, 
  Cloud, 
  Fingerprint, 
  Box, 
  Infinity as InfinityIcon, 
  Sparkles,
  Lightbulb,
  Briefcase,
  Target,
  Zap,
  Palette,
  Link as LinkIcon
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';

const skills = [
  // Professional Skills
  { title: 'System Analysis & Design', category: 'professional', slug: 'enterprise', description: 'Analyzing complex business requirements and designing robust system architectures.', icon: <Monitor className="h-6 w-6" />, isFeatured: true },
  { title: 'Project Management', category: 'professional', slug: 'jira', description: 'Leading development teams and managing project timelines for quality delivery.', icon: <Briefcase className="h-6 w-6" />, isFeatured: true },
  { title: 'Agile Methodology', category: 'professional', slug: 'scrumalliance', description: 'Implementing iterative development processes like Scrum for team collaboration.', icon: <InfinityIcon className="h-6 w-6" />, isFeatured: true },
  { title: 'SDLC', category: 'professional', slug: 'git', description: 'Managing the complete software development life cycle from planning to maintenance.', icon: <Box className="h-6 w-6" />, isFeatured: true },
  { title: 'Problem Solving', category: 'professional', slug: 'adventofcode', description: 'Diagnosing complex technical issues and architecting efficient solutions.', icon: <Lightbulb className="h-6 w-6" />, isFeatured: true },
  { title: 'API Integration', category: 'professional', slug: 'postman', description: 'Connecting diverse services via RESTful APIs and secure data synchronization.', icon: <LinkIcon className="h-6 w-6" />, isFeatured: true },
  
  // Frontend
  { title: 'Next.js', category: 'frontend', slug: 'nextdotjs', description: 'Building high-performance, SEO-friendly React applications with App Router.', icon: <Zap className="h-4 w-4" />, isFeatured: true },
  { title: 'React', category: 'frontend', slug: 'react', description: 'Creating interactive, reusable UI components using hooks and modern patterns.', icon: <Layout className="h-6 w-6" />, isFeatured: true },
  { title: 'JavaScript', category: 'frontend', slug: 'javascript', description: 'Developing complex client-side logic and interactive components with modern ES6+.', icon: <Code2 className="h-6 w-6" />, isFeatured: true },
  { title: 'Vue.js', category: 'frontend', slug: 'vuedotjs', description: 'Building interactive web interfaces with a progressive JavaScript framework.', icon: <Layout className="h-6 w-6" />, isFeatured: true },
  { title: 'TypeScript', category: 'frontend', slug: 'typescript', description: 'Ensuring code quality and scalability with static typing and advanced interfaces.', icon: <ShieldCheck className="h-6 w-6" />, isFeatured: true },
  { title: 'Tailwind CSS', category: 'frontend', slug: 'tailwindcss', description: 'Rapidly styling responsive, accessible interfaces with utility-first CSS.', icon: <Palette className="h-6 w-6" />, isFeatured: true },
  { title: 'Framer Motion', category: 'frontend', slug: 'framer', description: 'Adding fluid animations and micro-interactions for an engaging user experience.', icon: <Sparkles className="h-6 w-6" /> },
  
  // Backend
  { title: 'Laravel', category: 'backend', slug: 'laravel', description: 'Building secure, robust PHP applications with MVC architecture and Eloquent.', icon: <Server className="h-6 w-6" />, isFeatured: true },
  { title: 'Livewire', category: 'backend', slug: 'livewire', description: 'Full-stack development for Laravel that makes building dynamic interfaces simple.', icon: <Activity className="h-6 w-6" />, isFeatured: true },
  { title: 'PHP', category: 'backend', slug: 'php', description: 'Implementing server-side logic and database interactions for diverse systems.', icon: <Terminal className="h-6 w-6" /> },
  { title: 'Node.js', category: 'backend', slug: 'nodedotjs', description: 'Developing scalable, event-driven backend services and real-time features.', icon: <Cpu className="h-6 w-6" /> },
  
  // Database
  { title: 'Firestore', category: 'database', slug: 'firebase', description: 'Building real-time, scalable NoSQL databases with Firebase cloud infrastructure.', icon: <Database className="h-6 w-6" />, isFeatured: true },
  { title: 'Supabase', category: 'database', slug: 'supabase', description: 'Leveraging open-source Firebase alternatives for real-time databases and Auth.', icon: <Database className="h-6 w-6" />, isFeatured: true },
  { title: 'PostgreSQL', category: 'database', slug: 'postgresql', description: 'Advanced relational database management with focus on data integrity.', icon: <Database className="h-6 w-6" />, isFeatured: true },
  { title: 'MongoDB', category: 'database', slug: 'mongodb', description: 'Architecting flexible, document-based data models for high-performance applications.', icon: <Database className="h-6 w-6" /> },
  { title: 'Neon', category: 'database', slug: 'neon', description: 'Deploying serverless Postgres with instant branching and bottomless storage.', icon: <Database className="h-6 w-6" /> },
  { title: 'MySQL', category: 'database', slug: 'mysql', description: 'Designing and managing relational databases for high-traffic applications.', icon: <Database className="h-6 w-6" /> },

  // Tools
  { title: 'Vercel', category: 'tools', slug: 'vercel', description: 'Deploying and scaling modern web applications with seamless CI/CD.', icon: <Cloud className="h-6 w-6" />, isFeatured: true },
  { title: 'Railway', category: 'tools', slug: 'railway', description: 'Provisioning and scaling cloud infrastructure for full-stack deployments.', icon: <Cloud className="h-6 w-6" />, isFeatured: true },
  { title: 'Git & GitHub', category: 'tools', slug: 'github', description: 'Managing code versions and collaborating efficiently within development teams.', icon: <Fingerprint className="h-6 w-6" />, isFeatured: true },
  { title: 'Figma', category: 'tools', slug: 'figma', description: 'Prototyping and designing high-fidelity user interfaces and visual assets.', icon: <Monitor className="h-6 w-6" /> },
  { title: 'Heroku', category: 'tools', slug: 'heroku', description: 'Managing application deployment and cloud infrastructure for production.', icon: <Server className="h-6 w-6" /> },
];

const categories = [
  { id: 'featured', label: 'Featured', icon: <Sparkles className="h-4 w-4" /> },
  { id: 'all', label: 'All Skills', icon: <InfinityIcon className="h-4 w-4" /> },
  { id: 'professional', label: 'Professional Skills', icon: <Box className="h-4 w-4" /> },
  { id: 'frontend', label: 'Frontend', icon: <Layout className="h-4 w-4" /> },
  { id: 'backend', label: 'Backend', icon: <Server className="h-4 w-4" /> },
  { id: 'database', label: 'Database', icon: <Database className="h-4 w-4" /> },
  { id: 'tools', label: 'Tools', icon: <Wrench className="h-4 w-4" /> },
];

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  const brandIconUrl = skill.slug 
    ? `https://cdn.simpleicons.org/${skill.slug}/${skill.category === 'professional' ? '3b82f6' : '0ea5e9'}`
    : null;

  return (
    <div className="flex-shrink-0 relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-lg transition-all duration-300 overflow-hidden flex flex-col gap-4 w-[340px] mx-4 cursor-default group hover:bg-white/80 dark:hover:bg-neutral-800/80">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl bg-background/50 shadow-inner group-hover:scale-110 transition-transform border border-white/10 flex items-center justify-center h-12 w-12">
          {brandIconUrl ? (
            <img src={brandIconUrl} alt={skill.title} className="h-7 w-7 object-contain" />
          ) : (
            <div className="text-primary">{skill.icon}</div>
          )}
        </div>
        <div className="flex-1 overflow-hidden">
          <h4 className="text-lg font-bold font-headline text-foreground truncate">{skill.title}</h4>
          <div className="flex gap-1.5 mt-1">
            <Badge variant="secondary" className="text-[8px] uppercase font-black rounded-md bg-primary/5 text-primary border-primary/10">
              {skill.category}
            </Badge>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-medium group-hover:text-foreground transition-colors">
        {skill.description}
      </p>
    </div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('featured');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return skills;
    if (activeCategory === 'featured') return skills.filter(s => s.isFeatured);
    return skills.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const marqueeItems = useMemo(() => {
    if (filteredSkills.length === 0) return [];
    const minItems = 15;
    const repeats = Math.ceil(minItems / filteredSkills.length);
    return Array(repeats).fill(filteredSkills).flat();
  }, [filteredSkills]);

  const duration = useMemo(() => {
    return Math.max(40, filteredSkills.length * 6);
  }, [filteredSkills.length]);

  const activeSlugs = useMemo(() => {
    return filteredSkills.filter(s => s.slug).map(s => s.slug as string);
  }, [filteredSkills]);

  return (
    <div className="space-y-20 py-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
            <Cpu className="h-3 w-3" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-headline text-foreground">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-base font-medium">
            A comprehensive overview of my technical stack and professional methodologies.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center w-full mt-12">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 p-3 bg-white/20 dark:bg-neutral-900/20 backdrop-blur-xl rounded-[2.5rem] border border-white/10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                      activeCategory === cat.id 
                        ? "bg-primary text-white shadow-lg scale-105" 
                        : "text-muted-foreground hover:bg-white/10 dark:hover:bg-neutral-800/40"
                    )}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>
              
              <div className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-white/20 shadow-xl hidden lg:block text-left">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="text-xs font-black uppercase tracking-widest text-foreground">Core Competency</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed italic">
                    "I specialize in architecting performant systems using the latest web technologies, ensuring every solution is scalable, maintainable, and built with industry best practices."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center p-4 min-h-[400px]">
              <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="w-full max-w-sm lg:max-w-md">
                {mounted && (
                  <IconCloud 
                    key={activeCategory}
                    iconSlugs={activeSlugs.length > 0 ? activeSlugs : ['javascript', 'typescript', 'react', 'nextdotjs']} 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full space-y-10 group/marquees">
        {marqueeItems.length > 0 ? (
          <div className="flex flex-col gap-10">
            <div className="flex overflow-hidden select-none">
              <div 
                className="flex animate-marquee shrink-0 group-hover/marquees:[animation-play-state:paused]"
                style={{ animationDuration: `${duration}s` }}
              >
                {marqueeItems.map((skill, idx) => (
                  <SkillCard key={`row1-${skill.title}-${idx}`} skill={skill} />
                ))}
              </div>
              <div 
                className="flex animate-marquee shrink-0 group-hover/marquees:[animation-play-state:paused]"
                style={{ animationDuration: `${duration}s` }}
                aria-hidden="true"
              >
                {marqueeItems.map((skill, idx) => (
                  <SkillCard key={`row1-dup-${skill.title}-${idx}`} skill={skill} />
                ))}
              </div>
            </div>

            <div className="flex overflow-hidden select-none">
              <div 
                className="flex animate-marquee-reverse shrink-0 group-hover/marquees:[animation-play-state:paused]"
                style={{ animationDuration: `${duration * 1.2}s` }}
              >
                {marqueeItems.map((skill, idx) => (
                  <SkillCard key={`row2-${skill.title}-${idx}`} skill={skill} />
                ))}
              </div>
              <div 
                className="flex animate-marquee-reverse shrink-0 group-hover/marquees:[animation-play-state:paused]"
                style={{ animationDuration: `${duration * 1.2}s` }}
                aria-hidden="true"
              >
                {marqueeItems.map((skill, idx) => (
                  <SkillCard key={`row2-dup-${skill.title}-${idx}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground font-bold tracking-widest uppercase text-xs">
            No items in this category.
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 text-center">
        <Button asChild className="btn-aqua btn-aqua-primary h-16 px-16 rounded-[2rem] shadow-xl text-lg group">
          <a href="/contact">
            <span className="flex items-center gap-3">
              Discuss Your Project <MessageSquare className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </Button>
      </div>
    </div>
  );
}
