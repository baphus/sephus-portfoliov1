
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
  { title: 'Problem Solving', category: 'professional', description: 'Diagnosing complex technical issues and architecting efficient, scalable solutions.', icon: <Lightbulb className="h-6 w-6 text-amber-500" />, isFeatured: true },
  { title: 'API Integration', category: 'professional', description: 'Connecting diverse services via RESTful APIs and secure data synchronization.', icon: <Activity className="h-6 w-6 text-emerald-500" />, isFeatured: true },
  { title: 'System Development', category: 'professional', description: 'Building full-scale academic and production-ready applications from scratch.', icon: <Terminal className="h-6 w-6 text-sky-500" /> },
  { title: 'Data Analysis', category: 'professional', description: 'Utilizing relational data structures to derive insights and optimize performance.', icon: <Search className="h-6 w-6 text-indigo-500" /> },
  { title: 'Full Stack', category: 'professional', description: 'Managing the complete project lifecycle from frontend UI to backend server logic.', icon: <Layers className="h-6 w-6 text-purple-500" />, isFeatured: true },
  { title: 'Research-based', category: 'professional', description: 'Driving development through modern methodologies and continuous technical research.', icon: <Search className="h-6 w-6 text-rose-500" /> },
  { title: 'Communication', category: 'professional', description: 'Translating complex technical concepts for non-technical clients and stakeholders.', icon: <MessageSquare className="h-6 w-6 text-cyan-500" /> },
  { title: 'Productivity', category: 'professional', description: 'Optimizing workflows with modern tools and efficient project management.', icon: <ShieldCheck className="h-6 w-6 text-blue-500" /> },
  
  // Frontend
  { title: 'Next.js', category: 'frontend', description: 'Building high-performance, SEO-friendly React applications with App Router.', icon: <Globe className="h-6 w-6 text-foreground" />, isFeatured: true },
  { title: 'React', category: 'frontend', description: 'Creating interactive, reusable UI components using hooks and modern patterns.', icon: <Layout className="h-6 w-6 text-sky-400" />, isFeatured: true },
  { title: 'Tailwind CSS', category: 'frontend', description: 'Rapidly styling responsive, accessible interfaces with utility-first CSS.', icon: <Monitor className="h-6 w-6 text-cyan-400" />, isFeatured: true },
  { title: 'TypeScript', category: 'frontend', description: 'Ensuring code quality and scalability with static typing and advanced interfaces.', icon: <Code2 className="h-6 w-6 text-blue-500" />, isFeatured: true },
  { title: 'HTML5/CSS3', category: 'frontend', description: 'Structuring semantic, accessible web content with modern layouts.', icon: <Layout className="h-6 w-6 text-orange-500" /> },
  { title: 'JavaScript', category: 'frontend', description: 'Powering dynamic logic and frontend interactivity with modern ES6+ features.', icon: <Code2 className="h-6 w-6 text-yellow-400" />, isFeatured: true },
  
  // Backend
  { title: 'Laravel', category: 'backend', description: 'Building secure, robust PHP applications with MVC architecture and Eloquent.', icon: <Server className="h-6 w-6 text-red-500" />, isFeatured: true },
  { title: 'Node.js', category: 'backend', description: 'Developing scalable, event-driven backend services and real-time features.', icon: <Cpu className="h-6 w-6 text-emerald-600" /> },
  { title: 'PHP', category: 'backend', description: 'Implementing server-side logic and database interactions for diverse systems.', icon: <Code2 className="h-6 w-6 text-indigo-400" /> },
  { title: 'Express', category: 'backend', description: 'Lightweight and flexible web application framework for Node.js backends.', icon: <Terminal className="h-6 w-6 text-gray-400" /> },
  
  // Mobile
  { title: 'React Native', category: 'mobile', description: 'Cross-platform mobile app development with a focus on native performance.', icon: <Smartphone className="h-6 w-6 text-sky-400" /> },
  { title: 'Responsive UI', category: 'mobile', description: 'Designing interfaces that adapt perfectly across all device sizes and orientations.', icon: <Monitor className="h-6 w-6 text-primary" />, isFeatured: true },
  { title: 'PWA', category: 'mobile', description: 'Converting web applications into installable, offline-capable mobile experiences.', icon: <Globe className="h-6 w-6 text-emerald-400" /> },
  
  // Database
  { title: 'Supabase', category: 'database', description: 'Leveraging open-source Firebase alternatives for real-time databases and Auth.', icon: <Database className="h-6 w-6 text-emerald-500" />, isFeatured: true },
  { title: 'Firebase', category: 'database', description: 'Implementing cloud-hosted databases, authentication, and serverless logic.', icon: <Cloud className="h-6 w-6 text-orange-500" />, isFeatured: true },
  { title: 'MySQL', category: 'database', description: 'Designing and managing relational databases with complex query optimization.', icon: <Database className="h-6 w-6 text-blue-600" /> },
  { title: 'PostgreSQL', category: 'database', description: 'Advanced relational database management with focus on data integrity.', icon: <Database className="h-6 w-6 text-sky-600" />, isFeatured: true },
  { title: 'Cloudinary', category: 'database', description: 'Optimizing and delivering media assets at scale through cloud-based storage.', icon: <Cloud className="h-6 w-6 text-blue-400" /> },
  
  // Tools
  { title: 'Git & GitHub', category: 'tools', description: 'Managing code versions and collaborating efficiently within development teams.', icon: <Fingerprint className="h-6 w-6 text-foreground" />, isFeatured: true },
  { title: 'Figma', category: 'tools', description: 'Prototyping and designing high-fidelity user interfaces and visual assets.', icon: <Monitor className="h-6 w-6 text-purple-400" /> },
  { title: 'Vercel', category: 'tools', description: 'Deploying and scaling modern web applications with seamless CI/CD.', icon: <Cloud className="h-6 w-6 text-foreground" /> },
  { title: 'Heroku', category: 'tools', description: 'Cloud platform for deploying and managing diverse full-stack applications.', icon: <Server className="h-6 w-6 text-purple-600" /> },
  { title: 'Render', category: 'tools', description: 'Modern cloud hosting for static sites, web services, and background workers.', icon: <Box className="h-6 w-6 text-emerald-500" /> },
  { title: 'CapCut', category: 'tools', description: 'Professional mobile video editing for engaging social media content.', icon: <Smartphone className="h-6 w-6 text-sky-500" /> },
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

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => (
  <div className="flex-shrink-0 group relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col gap-4 w-[320px] mx-4 cursor-default group">
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-2xl bg-background/50 shadow-inner group-hover:scale-110 transition-transform text-primary border border-white/10">
        {skill.icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <h4 className="text-lg font-bold font-headline text-foreground truncate">{skill.title}</h4>
        <div className="flex gap-1.5 mt-1">
          <Badge variant="secondary" className="text-[8px] uppercase font-black rounded-md bg-primary/5 text-primary border-primary/10">
            {skill.category}
          </Badge>
          {skill.isFeatured && (
            <Badge variant="outline" className="text-[8px] uppercase font-black rounded-md border-emerald-500/30 text-emerald-500 bg-emerald-500/5">
              Top
            </Badge>
          )}
        </div>
      </div>
    </div>
    
    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-medium">
      {skill.description}
    </p>
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
    if (set.length === 0) return Array(10).fill(skills[0]); // Fallback
    const repeats = Math.max(4, Math.ceil(15 / set.length));
    return Array(repeats).fill(set).flat();
  }, [filteredSkills]);

  const row2Items = useMemo(() => {
    const half = Math.ceil(filteredSkills.length / 2);
    const set = filteredSkills.slice(half);
    if (set.length === 0) {
      const allRepeats = Math.max(4, Math.ceil(15 / filteredSkills.length));
      return Array(allRepeats).fill(filteredSkills).flat();
    }
    const repeats = Math.max(4, Math.ceil(15 / set.length));
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
            Comprehensive expertise in modern web development and digital creation, organized for exploring my full technical stack.
          </p>
          
          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-8 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-sm flex flex-col items-center">
                <p className="text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 p-3 bg-white/20 dark:bg-neutral-900/20 backdrop-blur-xl rounded-[2.5rem] border border-white/10 max-w-6xl">
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
        </div>
      </div>

      {/* Infinite Scrolling Marquees */}
      <div className="relative space-y-8 w-full">
        {/* Row 1: Moving Right to Left */}
        <div className="flex overflow-hidden group">
          <motion.div 
            key={`${activeCategory}-row1`}
            className="flex whitespace-nowrap py-4"
            animate={{ x: [0, -2500] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {row1Items.map((skill, idx) => (
              <SkillCard key={`row1-${skill.title}-${idx}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Left to Right */}
        <div className="flex overflow-hidden group">
          <motion.div 
            key={`${activeCategory}-row2`}
            className="flex whitespace-nowrap py-4"
            initial={{ x: -2500 }}
            animate={{ x: [0, -2500] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 55, ease: "linear" } }}
            style={{ flexDirection: 'row-reverse' }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {row2Items.map((skill, idx) => (
              <SkillCard key={`row2-${skill.title}-${idx}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        {/* Call-to-Action */}
        <div className="relative py-24 rounded-[4rem] overflow-hidden bg-white/40 dark:bg-neutral-900/40 border border-white/20 text-center space-y-8 shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0%,transparent_70%)] opacity-5" />
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              <Sparkles className="h-4 w-4" />
              Available for New Challenges
            </div>
            <h3 className="text-4xl md:text-6xl font-black font-headline text-foreground leading-tight tracking-tight">
              Need This Tech Stack in One <span className="text-primary">Developer?</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              I specialize in bridging the gap between design and development, delivering high-performance full-stack solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button asChild className="btn-aqua btn-aqua-primary h-16 px-16 rounded-[2rem] shadow-xl group w-full sm:w-auto text-lg">
                <a href="/contact" className="flex items-center gap-2">
                  <span>Discuss Your Project</span> <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-16 px-12 rounded-[2rem] border-white/20 bg-white/10 backdrop-blur-md hover:bg-primary/10 transition-all w-full sm:w-auto font-black uppercase tracking-widest text-xs">
                <a href="/portfolio" className="flex items-center gap-2">
                  <span>Explore Portfolio</span> <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
