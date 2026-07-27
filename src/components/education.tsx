"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, CalendarDays } from 'lucide-react';
import AquaWindow from '@/components/ui/aqua-window';
import { AquaList, AquaRow } from '@/components/ui/aqua-list';
import eduLogos from '@/app/lib/placeholder-images.json';

const logo = (id: string) => eduLogos.education.find((entry) => entry.id === id);

const education = [
  {
    institution: 'Cebu Technological University',
    degree: 'BS Information Systems',
    period: '2023 – 2027 (expected)',
    location: 'Main Campus, Cebu City',
    status: 'In progress',
    description:
      'Systems analysis and design, with the coursework built around gathering requirements from real stakeholders and turning them into working systems. My capstone, OWBAP, came out of this.',
    facts: [
      { label: 'GWA', value: '1.45' },
      { label: 'Expected graduation', value: '2027' },
      { label: 'Scholarship', value: 'OWWA scholar' },
    ],
    logo: logo('ctu'),
  },
  {
    institution: 'Toledo City Science High School',
    degree: 'High School Diploma, With Honors',
    period: '2017 – 2023',
    location: 'Toledo City, Cebu',
    status: 'Completed',
    description:
      'Graduated with honors at rank 12. I was on the robotics team, which is where I first built something that had to work without me driving it.',
    facts: [
      { label: 'Standing', value: 'With Honors, rank 12' },
      { label: 'Division Science Fair 2019', value: '1st place' },
      { label: 'Regional Sumo Bot', value: 'Multiple placements' },
    ],
    logo: logo('tcshs'),
  },
];

export default function Education() {
  return (
    <div className="container mx-auto max-w-4xl space-y-6 px-4 md:px-6">
      {education.map((entry, index) => (
        <motion.div
          key={entry.institution}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <AquaWindow
            title={entry.institution}
            statusBar={<span>{entry.status}</span>}
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row">
                {entry.logo && (
                  <div className="relative h-20 w-20 shrink-0 self-start overflow-hidden rounded-control border border-aqua-hairline/30 bg-white/80 p-1.5">
                    <Image
                      src={entry.logo.url}
                      alt={`${entry.institution} crest`}
                      fill
                      sizes="80px"
                      className="object-contain p-1.5"
                      data-ai-hint={entry.logo.hint}
                    />
                  </div>
                )}

                <div className="min-w-0 flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl font-bold text-foreground">
                      {entry.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-aqua-graphite" />
                        {entry.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-aqua-graphite" />
                        {entry.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>

                  <AquaList>
                    {entry.facts.map((fact) => (
                      <AquaRow key={fact.label} label={fact.label} value={fact.value} />
                    ))}
                  </AquaList>
                </div>
              </div>
            </div>
          </AquaWindow>
        </motion.div>
      ))}
    </div>
  );
}
