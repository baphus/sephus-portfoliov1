
"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import InteractiveCardWrapper from '@/components/ui/interactive-card-wrapper';
import { 
  Heart, 
  MapPin, 
  Briefcase, 
  Code2, 
  Database, 
  Lightbulb, 
  Layout, 
  Rocket, 
  Coffee, 
  BookOpen, 
  GraduationCap,
  Target,
  UserCheck,
  Calendar,
  MessageSquare,
  Zap,
  GitBranch
} from 'lucide-react';

const skillLevels = [
  { label: 'Frontend Development', value: 90, icon: <Layout className="h-4 w-4 text-indigo-500" /> },
  { label: 'Backend (Laravel/Node)', value: 85, icon: <Code2 className="h-4 w-4 text-emerald-500" /> },
  { label: 'Database & ORM', value: 80, icon: <Database className="h-4 w-4 text-cyan-500" /> },
  { label: 'System Analysis', value: 95, icon: <Lightbulb className="h-4 w-4 text-amber-500" /> },
];

const stats = [
  { label: 'Experience', value: '2+ yrs', icon: <Rocket className="h-5 w-5 text-orange-500" /> },
  { label: 'Projects Built', value: '15+', icon: <Layout className="h-5 w-5 text-indigo-500" /> },
  { label: 'LETReview Hits', value: '4K+', icon: <Coffee className="h-5 w-5 text-amber-700" /> },
  { label: 'Learning Mode', value: '24/7', icon: <BookOpen className="h-5 w-5 text-blue-500" /> },
];

const drivingValues = [
  { 
    title: "Autonomous", 
    description: "Self-driven and capable of independently designing, building, and deploying full-stack applications.",
    icon: <UserCheck className="h-5 w-5 text-emerald-500" /> 
  },
  { 
    title: "Communication", 
    description: "Effectively communicates with stakeholders to translate business requirements into system solutions.",
    icon: <MessageSquare className="h-5 w-5 text-blue-500" /> 
  },
  { 
    title: "Systems Thinking", 
    description: "Designs scalable system architectures and database structures based on real-world requirements.",
    icon: <Target className="h-5 w-5 text-rose-500" /> 
  },
  { 
    title: "Optimization", 
    description: "Builds systems that streamline processes, improve efficiency, and reduce manual work.",
    icon: <Zap className="h-5 w-5 text-yellow-500" /> 
  },
  { 
    title: "SDLC Execution", 
    description: "Experienced across the full development lifecycle—from requirements gathering to deployment.",
    icon: <GitBranch className="h-5 w-5 text-indigo-500" /> 
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-500/20">
          <GraduationCap className="h-4 w-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Get to Know <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Autonomous and self-driven Information Systems student with a passion for full-stack excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
        {drivingValues.map((item, idx) => (
          <InteractiveCardWrapper key={idx} className="rounded-3xl">
            <Card className="h-full rounded-3xl border-white/20 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-6 flex flex-col items-center text-center space-y-4 group transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/60 dark:hover:bg-neutral-800/60">
              <div className="p-3.5 rounded-2xl bg-muted/50 group-hover:scale-110 transition-transform shadow-inner">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold font-headline leading-tight">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">{item.description}</p>
              </div>
            </Card>
          </InteractiveCardWrapper>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <InteractiveCardWrapper className="rounded-[2.5rem]">
            <Card className="h-full rounded-[2.5rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-8 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-500">
                  <Heart className="h-6 w-6 fill-red-500/20" />
                </div>
                <h3 className="text-2xl font-bold font-headline">My Story</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm <strong className="text-foreground">Josephus Kim L. Sarsonas</strong>, a full-stack developer and Information Systems student at Cebu Technological University. I specialize in turning business requirements into functional, scalable web solutions.
                </p>
                <p>
                  I have a strong foundation in <strong className="text-foreground">MVC architecture</strong> and modern stacks including Laravel, React, and Next.js. My experience spans the entire <strong className="text-foreground">SDLC</strong>, from gathering requirements to deploying production systems like the BNHS eDocument system.
                </p>
                <p>
                  Currently, I am <strong className="text-foreground">seeking a remote internship opportunity</strong> starting in May. I am highly autonomous and thrive in environments where I can take ownership of technical challenges.
                </p>
              </div>
            </Card>
          </InteractiveCardWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InteractiveCardWrapper className="rounded-2xl">
              <Card className="h-full rounded-2xl border-white/20 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] shadow-sm">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="text-xs font-semibold">Toledo, Cebu</p>
                </div>
              </Card>
            </InteractiveCardWrapper>
            <InteractiveCardWrapper className="rounded-2xl">
              <Card className="h-full rounded-2xl border-white/20 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] shadow-sm">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Birthday</p>
                  <p className="text-xs font-semibold">Aug 20, 2004</p>
                </div>
              </Card>
            </InteractiveCardWrapper>
            <InteractiveCardWrapper className="rounded-2xl">
              <Card className="h-full rounded-2xl border-white/20 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] shadow-sm">
                <div className="p-3 rounded-xl bg-amber-600/10 text-amber-600">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Seeking</p>
                  <p className="text-xs font-semibold">Internship</p>
                </div>
              </Card>
            </InteractiveCardWrapper>
          </div>
        </div>

        <div className="space-y-6">
          <InteractiveCardWrapper className="rounded-[2.5rem]">
            <Card className="h-full rounded-[2.5rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-8 relative overflow-hidden">
               <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold font-headline">Core Proficiencies</h3>
              </div>

              <div className="space-y-8">
                {skillLevels.map((skill) => (
                  <div key={skill.label} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span>{skill.icon}</span>
                        {skill.label}
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">{skill.value}%</span>
                    </div>
                    <div className="relative h-2.5 w-full bg-secondary rounded-full overflow-hidden border border-white/10 shadow-inner">
                      <div 
                        className="absolute h-full bg-primary transition-all duration-1000 ease-out rounded-full" 
                        style={{ width: `${skill.value}%` }}
                      />
                      <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/20 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </InteractiveCardWrapper>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <InteractiveCardWrapper key={stat.label} className="rounded-3xl">
                <Card className="h-full rounded-3xl border-white/20 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg p-6 flex flex-col items-center text-center gap-3 group hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="p-3 rounded-2xl bg-muted/50 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-black font-headline text-foreground">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  </div>
                </Card>
              </InteractiveCardWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
