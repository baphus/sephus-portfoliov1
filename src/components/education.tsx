
"use client";

import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  Trophy 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InteractiveCardWrapper from '@/components/ui/interactive-card-wrapper';

const educationData = [
  {
    institution: 'Cebu Technological University',
    degree: 'Bachelor of Science in Information Systems',
    period: 'Aug 2023 - Present',
    location: 'Cebu City, Philippines',
    status: 'In Progress',
    description: 'Specializing in systems analysis and design. Gathering and analyzing business requirements through direct collaboration with stakeholders and client representatives. OWWA scholar.',
    highlights: [
      'OWWA Scholar',
      'Focus on SDLC & Web Solutions',
      'Stakeholder Collaboration'
    ],
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    institution: 'Toledo City Science Highschool',
    degree: 'High School Diploma, With Honors',
    period: '2017 - 2023',
    location: 'Toledo City, Philippines',
    status: 'Completed',
    description: 'Graduated With Honors (Rank 12). Member of the TCSHS Robotics Team, specializing in autonomous systems.',
    highlights: [
      'Graduated With Honors (Rank 12)',
      '1st Place - Division Science Fair 2019',
      'Multiple Regional Sumo Bot Placements'
    ],
    icon: <Trophy className="h-6 w-6" />,
  },
];

export default function Education() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <GraduationCap className="h-4 w-4" />
          <span>Education</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Academic <span className="text-primary">Background</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Committed to academic excellence and technical mastery through scientific education.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full opacity-20" />

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-20">
              <div className="absolute left-[-5px] md:left-[27px] top-10 flex h-4 w-4 items-center justify-center">
                <div className="h-full w-full rounded-full bg-primary animate-ping opacity-20" />
                <div className="absolute h-3 w-3 rounded-full bg-primary border-4 border-background" />
              </div>

              <InteractiveCardWrapper className="rounded-[2rem]">
                <Card className="h-full rounded-[2rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-6 md:p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">
                          {item.degree}
                        </h3>
                        <Badge variant={item.status === 'Completed' ? 'secondary' : 'default'} className="rounded-full px-3">
                          <span className="flex items-center gap-1 text-[10px]">
                            <span className={`h-1 w-1 rounded-full ${item.status === 'Completed' ? 'bg-emerald-500' : 'bg-white'} animate-pulse`} />
                            {item.status}
                          </span>
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-medium text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-primary" />
                          {item.institution}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {item.period}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-base">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-[11px] font-bold text-primary uppercase tracking-wider">
                            <Award className="h-3 w-3" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:flex p-4 rounded-3xl bg-primary/10 text-primary shadow-inner">
                      {item.icon}
                    </div>
                  </div>
                </Card>
              </InteractiveCardWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
