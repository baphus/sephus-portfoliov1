"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, CalendarDays, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AquaWindow from '@/components/ui/aqua-window';
import Link from 'next/link';

const RESUME_LINK =
  'https://drive.google.com/file/d/1DuSx0NbhRIhrQStPamOgR52aI2DZD75D/view?usp=sharing';

/**
 * One entry, because there is one job. The projects that used to sit here with
 * job-shaped titles live on the Projects page, which is where they belong.
 */
const role = {
  title: 'Full-Stack Software Engineer Trainee',
  company: 'Edufied Pte',
  location: 'Remote',
  period: 'May 2026 – Present',
  work: [
    'Build and maintain full-stack web applications across the SDLC, from requirements gathering through to deployment.',
    'Join daily scrum, working with the team to troubleshoot issues and improve how the system behaves.',
    'Evaluate and integrate software tools, keep application security current, and write the technical documentation.',
  ],
};

export default function Experience() {
  return (
    <div className="container mx-auto max-w-3xl px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <AquaWindow title="Experience">
          <div className="space-y-6 p-6 md:p-8">
            <p className="text-[13px] text-muted-foreground">
              My professional experience to date. Project work is on the{' '}
              <Link href="/portfolio" className="font-bold text-aqua-blue hover:underline">
                Projects
              </Link>{' '}
              page.
            </p>

            <div className="space-y-5 border-t border-aqua-hairline/25 pt-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-headline text-2xl font-bold text-foreground">{role.title}</h3>
                <span className="rounded-control border border-emerald-600/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                  Current
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-aqua-graphite" />
                  {role.company}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-aqua-graphite" />
                  {role.location}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-aqua-graphite" />
                  {role.period}
                </span>
              </div>

              <ul className="space-y-3">
                {role.work.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-blue"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AquaWindow>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8"
      >
        <AquaWindow title="Résumé">
          <div className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <p className="text-[13px] text-muted-foreground">
              The full résumé lists every project, skill and certification.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="btn-aqua btn-aqua-primary h-11 px-6">
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    Download résumé <Download className="h-4 w-4" />
                  </span>
                </a>
              </Button>
              <Button asChild className="btn-aqua btn-aqua-secondary h-11 px-6">
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Get in touch <Mail className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </AquaWindow>
      </motion.div>
    </div>
  );
}
