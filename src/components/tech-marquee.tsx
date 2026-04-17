
"use client";

import React, { useMemo } from 'react';
import { 
  Code2, 
  Layout, 
  Database, 
  Server, 
  Layers, 
  Cpu, 
  Monitor, 
  Terminal, 
  ShieldCheck, 
  Cloud, 
  Box, 
  Zap,
  Palette,
  Link as LinkIcon,
  FileType,
  Wrench as ToolIcon,
  Rocket
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import InteractiveCardWrapper from '@/components/ui/interactive-card-wrapper';

const skills = [
  { title: 'System Analysis & Design', category: 'professional', slug: 'enterprise', description: 'Analyzing complex business requirements and designing robust system architectures.', icon: <Monitor className="h-6 w-6" />, isFeatured: true },
  { title: 'MVC Architecture', category: 'professional', slug: 'laravel', description: 'Implementing clean, modular code following the Model-View-Controller pattern.', icon: <Layers className="h-6 w-6" />, isFeatured: true },
  { title: 'SDLC Specialist', category: 'professional', slug: 'git', description: 'Managing the complete software development life cycle from planning to maintenance.', icon: <Box className="h-6 w-6" />, isFeatured: true },
  { title: 'RESTful APIs', category: 'professional', slug: 'postman', description: 'Designing and integrating secure, performant APIs with Node.js and Laravel.', icon: <LinkIcon className="h-6 w-6" />, isFeatured: true },
  { title: 'Next.js', category: 'frontend', slug: 'nextdotjs', description: 'Building high-performance, SEO-friendly React applications with App Router.', icon: <Zap className="h-4 w-4" />, isFeatured: true },
  { title: 'React', category: 'frontend', slug: 'react', description: 'Creating interactive, reusable UI components using hooks and modern patterns.', icon: <Layout className="h-6 w-6" />, isFeatured: true },
  { title: 'TypeScript', category: 'frontend', slug: 'typescript', description: 'Ensuring code quality and scalability with static typing and advanced interfaces.', icon: <ShieldCheck className="h-6 w-6" />, isFeatured: true },
  { title: 'Tailwind CSS', category: 'frontend', slug: 'tailwindcss', description: 'Rapidly styling responsive, accessible interfaces with utility-first CSS.', icon: <Palette className="h-6 w-6" />, isFeatured: true },
  { title: 'Laravel', category: 'backend', slug: 'laravel', description: 'Building secure, robust PHP applications with MVC architecture and Eloquent.', icon: <Server className="h-6 w-6" />, isFeatured: true },
  { title: 'Express.js', category: 'backend', slug: 'express', description: 'Developing fast, minimalist web applications and APIs with Node.js.', icon: <Terminal className="h-6 w-6" />, isFeatured: true },
  { title: 'Node.js', category: 'backend', slug: 'nodedotjs', description: 'Developing scalable, event-driven backend services and real-time features.', icon: <Cpu className="h-6 w-6" />, isFeatured: true },
  { title: 'PHP', category: 'backend', slug: 'php', description: 'Server-side scripting for building dynamic web applications and systems.', icon: <Code2 className="h-6 w-6" />, isFeatured: true },
  { title: 'PostgreSQL', category: 'database', slug: 'postgresql', description: 'Advanced relational database management with focus on data integrity.', icon: <Database className="h-6 w-6" />, isFeatured: true },
  { title: 'MySQL', category: 'database', slug: 'mysql', description: 'Popular open-source relational database for web applications.', icon: <Database className="h-6 w-6" />, isFeatured: true },
  { title: 'Prisma ORM', category: 'database', slug: 'prisma', description: 'Type-safe database access for modern JavaScript and TypeScript backends.', icon: <FileType className="h-6 w-6" />, isFeatured: true },
  { title: 'Docker', category: 'tools', slug: 'docker', description: 'Containerizing applications for consistent development and deployment.', icon: <Box className="h-6 w-6" />, isFeatured: true },
];

const SkillCard = ({ skill }: { skill: typeof skills[0] }) => {
  const brandIconUrl = skill.slug 
    ? `https://cdn.simpleicons.org/${skill.slug}/${skill.category === 'professional' ? '3b82f6' : '0ea5e9'}`
    : null;

  return (
    <div className="flex-shrink-0 mx-4 w-[340px] group/card h-full py-4">
      <InteractiveCardWrapper className="rounded-[2.5rem] h-full shadow-lg">
        <div className="relative bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/20 h-full flex flex-col gap-4 transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-neutral-800/80">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity" />
          
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-background/50 shadow-inner group-hover/card:scale-110 transition-transform border border-white/10 flex items-center justify-center h-12 w-12">
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
          
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-medium group-hover/card:text-foreground transition-colors">
            {skill.description}
          </p>
        </div>
      </InteractiveCardWrapper>
    </div>
  );
};

export default function TechMarquee() {
  const marqueeItems = useMemo(() => {
    const minItems = 15;
    const repeats = Math.ceil(minItems / skills.length);
    return Array(repeats).fill(skills).flat();
  }, []);

  const duration = useMemo(() => skills.length * 8, []);

  return (
    <div className="relative w-full group/marquees overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="flex overflow-hidden select-none py-6 -my-6">
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

        <div className="flex overflow-hidden select-none py-6 -my-6">
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
    </div>
  );
}
