"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  GitBranch,
  Music,
  Play,
  ExternalLink
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
  { label: 'Cups of Coffee', value: 'Unlimited', icon: <Coffee className="h-5 w-5 text-amber-700" /> },
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function About() {
  const [nowPlaying, setNowPlaying] = useState({
    title: "Not Listening",
    artist: "Spotify",
    albumArt: "https://picsum.photos/seed/spotify-chill/200/200",
    isPlaying: false,
    songUrl: "https://open.spotify.com"
  });

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/now-playing');
        if (res.ok) {
          const data = await res.json();
          if (data.title) {
            setNowPlaying(data);
          } else {
            setNowPlaying(prev => ({ ...prev, isPlaying: false, title: "Not Listening" }));
          }
        }
      } catch (error) {
        console.error('Failed to fetch Spotify data');
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000); // Poll every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col items-center text-center space-y-4 mb-12"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-500/20">
          <GraduationCap className="h-4 w-4" />
          <span>About Me</span>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Get to Know <span className="text-primary">Me</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Autonomous and self-driven Information Systems student with a passion for full-stack excellence.
        </motion.p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
      >
        {drivingValues.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <InteractiveCardWrapper className="rounded-3xl h-full">
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
          </motion.div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
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

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div variants={itemVariants}>
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
              </motion.div>
              <motion.div variants={itemVariants}>
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
              </motion.div>
              <motion.div variants={itemVariants}>
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
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <InteractiveCardWrapper className="rounded-3xl">
                <a 
                  href={nowPlaying.songUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="rounded-3xl border-white/20 bg-[#1DB954]/5 dark:bg-[#1DB954]/10 backdrop-blur-md p-6 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative group transition-all duration-500 hover:bg-[#1DB954]/15">
                    <div className="absolute -right-10 -top-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                      <Music className="h-40 w-40 text-[#1DB954]" />
                    </div>
                    
                    <div className="flex items-center gap-5 z-10">
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden shadow-lg border-2 border-[#1DB954]/30">
                        <img 
                          src={nowPlaying.albumArt} 
                          alt="Album Art" 
                          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-[2px] items-end h-3">
                            {nowPlaying.isPlaying ? (
                              [0, 1, 2, 3].map((i) => (
                                <motion.div
                                  key={i}
                                  animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
                                  transition={{ 
                                    duration: 1 + i * 0.2, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                  }}
                                  className="w-[3px] bg-[#1DB954] rounded-full"
                                />
                              ))
                            ) : (
                              <div className="w-[3px] h-full bg-muted-foreground rounded-full" />
                            )}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#1DB954]">
                            {nowPlaying.isPlaying ? "Listening Now" : "Last Played"}
                          </span>
                        </div>
                        <h4 className="text-base font-bold font-headline truncate max-w-[200px] text-foreground group-hover:text-[#1DB954] transition-colors">
                          {nowPlaying.title}
                        </h4>
                        <p className="text-xs text-muted-foreground font-medium">
                          {nowPlaying.artist} • Spotify
                        </p>
                      </div>
                    </div>

                    <div className="z-10 bg-white/20 dark:bg-black/20 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur-sm group-hover:scale-105 transition-all flex items-center gap-2 shadow-sm">
                      <Music className="h-4 w-4 text-[#1DB954]" />
                      <span className="text-[10px] font-bold text-foreground">View on Spotify</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </Card>
                </a>
              </InteractiveCardWrapper>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
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
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="absolute h-full bg-primary rounded-full" 
                      />
                      <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/20 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </InteractiveCardWrapper>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <InteractiveCardWrapper className="rounded-3xl h-full">
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
