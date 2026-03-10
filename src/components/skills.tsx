
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
  Smartphone,
  Wrench,
  Monitor,
  Fingerprint,
  Box,
  Infinity,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Lightbulb = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);

const skills = [
  // Professional Skills
  { title: 'Problem Solving', category: 'professional', icon: <Lightbulb className="h-6 w-6 text-amber-500" />, isFeatured: true },
  { title: 'API Integration', category: 'professional', icon: <Activity className="h-6 w-6 text-emerald-500" />, isFeatured: true },
  { title: 'System Development', category: 'professional', icon: <Terminal className="h-6 w-6 text-sky-500" /> },
  { title: 'Data Analysis', category: 'professional', icon: <Search className="h-6 w-6 text-indigo-500" /> },
  { title: 'Full Stack', category: 'professional', icon: <Layers className="h-6 w-6 text-purple-500" />, isFeatured: true },
  { title: 'Research-based', category: 'professional', icon: <Search className="h-6 w-6 text-rose-500" /> },
  { title: 'Communication', category: 'professional', icon: <MessageSquare className="h-6 w-6 text-cyan-500" /> },
  { title: 'Productivity', category: 'professional', icon: <ShieldCheck className="h-6 w-6 text-blue-500" /> },
  
  // Frontend
  { title: 'Next.js', category: 'frontend', icon: <Globe className="h-6 w-6 text-foreground" />, isFeatured: true },
  { title: 'React', category: 'frontend', icon: <Layout className="h-6 w-6 text-sky-400" />, isFeatured: true },
  { title: 'Tailwind CSS', category: 'frontend', icon: <Monitor className="h-6 w-6 text-cyan-400" />, isFeatured: true },
  { title: 'TypeScript', category: 'frontend', icon: <Code2 className="h-6 w-6 text-blue-500" />, isFeatured: true },
  { title: 'HTML5/CSS3', category: 'frontend', icon: <Layout className="h-6 w-6 text-orange-500" /> },
  { title: 'JavaScript', category: 'frontend', icon: <Code2 className="h-6 w-6 text-yellow-400" />, isFeatured: true },
  
  // Backend
  { title: 'Laravel', category: 'backend', icon: <Server className="h-6 w-6 text-red-500" />, isFeatured: true },
  { title: 'Node.js', category: 'backend', icon: <Cpu className="h-6 w-6 text-emerald-600" /> },
  { title: 'PHP', category: 'backend', icon: <Code2 className="h-6 w-6 text-indigo-400" /> },
  { title: 'Express', category: 'backend', icon: <Terminal className="h-6 w-6 text-gray-400" /> },
  
  // Mobile
  { title: 'React Native', category: 'mobile', icon: <Smartphone className="h-6 w-6 text-sky-400" /> },
  { title: 'Responsive UI', category: 'mobile', icon: <Monitor className="h-6 w-6 text-primary" />, isFeatured: true },
  { title: 'PWA', category: 'mobile', icon: <Globe className="h-6 w-6 text-emerald-400" /> },
  
  // Database
  { title: 'Supabase', category: 'database', icon: <Database className="h-6 w-6 text-emerald-500" />, isFeatured: true },
  { title: 'Firebase', category: 'database', icon: <Cloud className="h-6 w-6 text-orange-500" />, isFeatured: true },
  { title: 'MySQL', category: 'database', icon: <Database className="h-6 w-6 text-blue-600" /> },
  { title: 'PostgreSQL', category: 'database', icon: <Database className="h-6 w-6 text-sky-600" />, isFeatured: true },
  { title: 'Cloudinary', category: 'database', icon: <Cloud className="h-6 w-6 text-blue-400" /> },
  
  // Tools
  { title: 'Git & GitHub', category: 'tools', icon: <Fingerprint className="h-6 w-6 text-foreground" />, isFeatured: true },
  { title: 'Figma', category: 'tools', icon: <Monitor className="h-6 w-6 text-purple-400" /> },
  { title: 'Vercel', category: 'tools', icon: <Cloud className="h-6 w-6 text-foreground" /> },
  { title: 'Heroku', category: 'tools', icon: <Server className="h-6 w-6 text-purple-600" /> },
  { title: 'Render', category: 'tools', icon: <Box className="h-6 w-6 text-emerald-500" /> },
  { title: 'CapCut', category: 'tools', icon: <Smartphone className="h-6 w-6 text-sky-500" /> },
];

const categories = [
  { id: 'featured', label: 'Featured', icon: <Sparkles className="h-4 w-4" /> },
  { id: 'all', label: 'All Skills', icon: <Infinity className="h-4 w-4" /> },
  { id: 'frontend', label: 'Frontend Development', icon: <Layout className="h-4 w-4" /> },
  { id: 'backend', label: 'Backend Development', icon: <Server className="h-4 w-4" /> },
  { id: 'mobile', label: 'Mobile Development', icon: <Smartphone className="h-4 w-4" /> },
  { id: 'database', label: 'Database & Storage', icon: <Database className="h-4 w-4" /> },
  { id: 'tools', label: 'Tools & Technologies', icon: <Wrench className="h-4 w-4" /> },
  { id: 'professional', label: 'Professional Skills', icon: <Briefcase className="h-4 w-4" /> },
];

const stats = [
  { label: 'Technologies', value: '30+' },
  { label: 'Categories', value: '8' },
  { label: 'Featured Skills', value: '15' },
];

const values = [
  { title: "Continuous Learning", description: "Always exploring new technologies and modern methodologies.", icon: <Cpu className="h-6 w-6" /> },
  { title: "Results-Driven", description: "Focused on delivering high-quality solutions that meet real goals.", icon: <Target className="h-6 w-6" /> },
  { title: "Passion for Code", description: "Genuinely passionate about creating elegant and efficient software.", icon: <Heart className="h-6 w-6" /> }
];

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => (
  <div className="flex-shrink-0 group relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex items-center gap-4 min-w-[240px] mx-3 cursor-default">
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
    <div className="relative z-10 p-3 rounded-xl bg-background/50 shadow-inner group-hover:scale-110 transition-transform">
      {skill.icon}
    </div>
    <div className="relative z-10">
      <h4 className="text-base font-bold font-headline text-foreground">{skill.title}</h4>
      <div className="flex gap-1.5 mt-1">
        <Badge variant="secondary" className="text-[8px] uppercase font-black rounded-md bg-primary/5 text-primary border-primary/10">
          {skill.category}
        </Badge>
        {skill.isFeatured && (
          <Badge variant="outline" className="text-[8px] uppercase font-black rounded-md border-emerald-500/30 text-emerald-500 bg-emerald-500/5">
            Featured
          </Badge>
        )}
      </div>
    </div>
  </div>
);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('featured');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return skills;
    if (activeCategory === 'featured') return skills.filter(s => s.isFeatured);
    return skills.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  // Create repeated rows for seamless scrolling
  const row1Items = useMemo(() => {
    const half = Math.ceil(filteredSkills.length / 2);
    const set = filteredSkills.slice(0, half);
    if (set.length === 0) return [];
    const repeats = Math.max(4, Math.ceil(20 / set.length));
    return Array(repeats).fill(set).flat();
  }, [filteredSkills]);

  const row2Items = useMemo(() => {
    const half = Math.ceil(filteredSkills.length / 2);
    const set = filteredSkills.slice(half);
    if (set.length === 0) {
      const allRepeats = Math.max(4, Math.ceil(20 / filteredSkills.length));
      return Array(allRepeats).fill(filteredSkills).flat();
    }
    const repeats = Math.max(4, Math.ceil(20 / set.length));
    return Array(repeats).fill(set).flat();
  }, [filteredSkills]);

  return (
    <div className="space-y-20 py-10 overflow-hidden">
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
            Comprehensive expertise in modern web technologies and professional development, organized for dynamic exploration.
          </p>
          
          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-sm">
                <p className="text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 p-3 bg-white/20 dark:bg-neutral-900/20 backdrop-blur-xl rounded-[2.5rem] border border-white/10 max-w-5xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                  activeCategory === cat.id 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.3)] scale-105" 
                    : "text-muted-foreground hover:bg-white/10 dark:hover:bg-neutral-800/40"
                )}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquees */}
      <div className="relative space-y-6 w-full">
        {/* Row 1: Moving Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            key={`${activeCategory}-row1`}
            className="flex whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
          >
            {row1Items.map((skill, idx) => (
              <SkillCard key={`row1-${skill.title}-${idx}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            key={`${activeCategory}-row2`}
            className="flex whitespace-nowrap"
            initial={{ x: -2000 }}
            animate={{ x: [0, -2000] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" } }}
            style={{ flexDirection: 'row-reverse' }}
          >
            {row2Items.map((skill, idx) => (
              <SkillCard key={`row2-${skill.title}-${idx}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        {/* Professional Values Row */}
        <div className="bg-primary/5 border border-primary/10 backdrop-blur-xl rounded-[3rem] p-10 mb-20 shadow-inner">
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

        {/* Call-to-Action */}
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
              I work across frontend, backend, and professional integrations to deliver complete, production-ready solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button asChild className="btn-aqua btn-aqua-primary h-14 px-12 rounded-2xl shadow-lg group w-full sm:w-auto">
                <a href="#contact" className="flex items-center gap-2">
                  <span>Discuss Your Stack</span> <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-14 px-8 rounded-2xl border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-white transition-all w-full sm:w-auto font-bold">
                <a href="#portfolio" className="flex items-center gap-2">
                  <span>See My Projects</span> <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
