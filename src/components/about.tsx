"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AquaWindow from '@/components/ui/aqua-window';
import { AquaList, AquaRow } from '@/components/ui/aqua-list';

/**
 * Concrete practices tied to real projects. The previous version listed
 * "Systems Thinking", "Optimization" and "Autonomous", which say nothing a
 * reader can check.
 */
const practices = [
  {
    title: 'I map the process before I design the schema',
    detail:
      "On OWBAP I traced how the agencies already passed referrals between them, then built the data model around that instead of around what was convenient to store.",
  },
  {
    title: 'Requirements come from the people using it',
    detail:
      'The BNHS system was specified by sitting down with the school administration. Nobody handed me a document.',
  },
  {
    title: 'Anything holding personal data gets locked down',
    detail:
      'OWBAP carries OFW case files, so it has email OTP, TOTP multi-factor, role-based access control, audit logging and rate limiting.',
  },
  {
    title: 'I write the documentation',
    detail:
      'Architecture, API contracts, deployment and CI/CD, because the next person to touch it needs to know how it fits together.',
  },
  {
    title: 'Things get deployed',
    detail:
      'Most of what is listed on this site is live and reachable rather than sitting unfinished in a branch.',
  },
];

const focus = [
  { label: 'Frontend', value: 'React, Next.js, Inertia, Livewire' },
  { label: 'Backend', value: 'Laravel, Express, Node.js' },
  { label: 'Databases', value: 'PostgreSQL, Prisma, Supabase' },
  { label: 'Analysis', value: 'Process mapping, system design' },
];

const details = [
  { label: 'Based in', value: 'Cebu, Philippines' },
  { label: 'Born', value: '20 August 2004' },
  { label: 'Studying', value: 'BS Information Systems, CTU' },
  { label: 'Working', value: 'Edufied Pte, remote' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <AquaWindow title="About">
            <div className="space-y-4 p-6 text-[15px] leading-relaxed text-muted-foreground md:p-8">
              <p>
                I&apos;m <strong className="font-bold text-foreground">Josephus Kim L. Sarsonas</strong>,
                a full-stack developer from Cebu and an Information Systems student at Cebu
                Technological University, carrying a 1.45 GWA toward a 2027 graduation.
              </p>
              <p>
                Most of my work has been building systems for people who had a process on paper
                and needed it to work online. In practice that means Laravel and PostgreSQL more
                often than not, React or Livewire on the front, and a fair amount of time spent
                understanding the process before touching the database.
              </p>
              <p>
                Since May 2026 I&apos;ve been a Full Stack Developer Trainee at Edufied Pte,
                working remotely across the SDLC on their web applications.
              </p>
            </div>
          </AquaWindow>

          <AquaWindow title="Details">
            <div className="p-4">
              <AquaList>
                {details.map((row) => (
                  <AquaRow key={row.label} label={row.label} value={row.value} />
                ))}
              </AquaList>
            </div>
          </AquaWindow>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <AquaWindow title="How I work">
            <div className="space-y-5 p-6 md:p-8">
              {practices.map((practice) => (
                <div key={practice.title} className="space-y-1.5">
                  <h4 className="text-[15px] font-bold leading-snug text-foreground">
                    {practice.title}
                  </h4>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {practice.detail}
                  </p>
                </div>
              ))}
            </div>
          </AquaWindow>

          <AquaWindow title="Focus">
            <div className="p-4">
              <AquaList>
                {focus.map((row) => (
                  <AquaRow key={row.label} label={row.label} value={row.value} />
                ))}
              </AquaList>
            </div>
          </AquaWindow>
        </motion.div>
      </div>
    </div>
  );
}
