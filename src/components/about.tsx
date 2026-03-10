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
  Shield,
  Search,
  UserCheck
} from 'lucide-react';

const skillLevels = [
  { label: 'Frontend Development', value: 90, icon: <Layout className="h-4 w-4" /> },
  { label: 'Backend Development', value: 85, icon: <Code2 className="h-4 w-4" /> },
  { label: 'Database Design', value: 80, icon: <Database className="h-4 w-4" /> },
  { label: 'Problem Solving', value: 95, icon: <Lightbulb className="h-4 w-4" /> },
];

const stats = [
  { label: 'Years Experience', value: '2+', icon: <Rocket className="h-5 w-5" /> },
  { label: 'Projects Built', value: '15+', icon: <Layout className="h-5 w-5" /> },
  { label: 'Cups of Coffee', value: '∞', icon: <Coffee className="h-5 w-5" /> },
  { label: 'Learning Mode', value: '24/7', icon: <BookOpen className="h-5 w-5" /> },
];

const drivingValues = [
  { 
    title: "Detail-Oriented", 
    description: "I believe that the smallest details make the biggest difference in user experience and code quality.",
    icon: <Target className="h-6 w-6" /> 
  },
  { 
    title: "Self-Motivated", 
    description: "Highly autonomous and productive; capable of maintaining momentum and delivering results without constant supervision.",
    icon: <UserCheck className="h-6 w-6" /> 
  },
  { 
    title: "Reliability", 
    description: "Committed to delivering high-quality, stable, and production-ready solutions that users can trust.",
    icon: <Shield className="h-6 w-6" /> 
  },
  { 
    title: "Research-Driven", 
    description: "Always exploring new technologies and modern methodologies to solve complex technical problems.",
    icon: <Search className="h-6 w-6" /> 
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <GraduationCap className="h-4 w-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Get to Know <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Behind every great application is a passionate developer who believes in creating meaningful solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {drivingValues.map((item, idx) => (
          <InteractiveCardWrapper key={idx} className="rounded-3xl">
            <Card className="h-full rounded-3xl border-white/20 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-8 flex flex-col items-center text-center space-y-4 group transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-primary/5">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold font-headline">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          </InteractiveCardWrapper>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <InteractiveCardWrapper className="rounded-[2.5rem]">
            <Card className="h-full rounded-[2.5rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-8 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Heart className="h-6 w-6 fill-primary/20" />
                </div>
                <h3 className="text-2xl font-bold font-headline">My Story</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-foreground">Josephus Kim L. Sarsonas</strong>, a passionate full-stack web developer and systems designer based in the <strong className="text-foreground">Philippines</strong>.
                </p>
                <p>
                  With hands-on experience in building, deploying, and supporting production web applications, I specialize in creating scalable and user-friendly digital experiences. I enjoy the entire lifecycle of a project—from gathering requirements to ongoing technical support.
                </p>
                <p>
                  I am <strong className="text-foreground">highly autonomous</strong> and capable of delivering high-quality, production-ready work independently and efficiently without constant monitoring.
                </p>
                <p>
                  Currently, I am an <strong className="text-foreground">Information Systems student</strong> at Cebu Technological University, where I focus on diagnosing technical issues and optimizing system performance across various cloud platforms.
                </p>
              </div>
            </Card>
          </InteractiveCardWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InteractiveCardWrapper className="rounded-2xl">
              <Card className="h-full rounded-2xl border-white/20 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Based in</p>
                  <p className="text-sm font-semibold">Cebu, Philippines</p>
                </div>
              </Card>
            </InteractiveCardWrapper>
            <InteractiveCardWrapper className="rounded-2xl">
              <Card className="h-full rounded-2xl border-white/20 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Current Role</p>
                  <p className="text-sm font-semibold">Full-Stack Dev</p>
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
                <h3 className="text-2xl font-bold font-headline">Technical Skills</h3>
              </div>

              <div className="space-y-8">
                {skillLevels.map((skill) => (
                  <div key={skill.label} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <span className="text-primary">{skill.icon}</span>
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
                <Card className="h-full rounded-3xl border-white/20 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg p-6 flex flex-col items-center text-center gap-3 group hover:bg-primary/5 transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
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
