"use client";

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AquaWindow from '@/components/ui/aqua-window';
import AquaSegmentedControl from '@/components/ui/aqua-segmented-control';
import { ArrowUpRight, Github, Triangle, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import imageData from '@/app/lib/placeholder-images.json';

type Category = 'capstone' | 'client' | 'personal' | 'coursework';

interface Project {
  id: string;
  title: string;
  monogram: string;
  category: Category;
  categoryLabel: string;
  featured: boolean;
  description: string;
  image?: string;
  hint?: string;
  tech: string[];
  link?: string;
  linkKind?: 'demo' | 'github';
}

const image = (id: string) => imageData.projects.find((p) => p.id === id);

/**
 * Descriptions are deliberately uneven in length and opening. Eight blurbs of
 * matching shape reads as generated even when every fact is true.
 */
const projects: Project[] = [
  {
    id: 'owbap',
    title: 'OWBAP — One Window Bayanihan Assistance Program',
    monogram: 'OW',
    category: 'capstone',
    categoryLabel: 'Capstone',
    featured: true,
    description:
      "The Department of Migrant Workers needed a single entry point for distressed OFW cases that several agencies could work from together. I led a team of four as lead developer, team leader and systems analyst: I designed the architecture, analysed the core business processes, and built the case tracking and referral workflows. Authentication was the hard part, so it got email OTP, TOTP multi-factor, role-based access control, audit logging and rate limiting. I also wrote the technical documentation covering architecture, API contracts, deployment and CI/CD.",
    image: image('bayanihan')?.url,
    hint: image('bayanihan')?.hint,
    tech: ['Laravel 13', 'React', 'Inertia.js', 'PostgreSQL', 'Redis', 'S3'],
    link: 'https://dmw7.owbap.app/',
    linkKind: 'demo',
  },
  {
    id: 'oec-verify',
    title: 'OEC Verify',
    monogram: 'OV',
    category: 'personal',
    categoryLabel: 'Independent',
    featured: true,
    description:
      'A verification platform for application intake and evaluator review. Access is enforced with role-based permissions and Postgres row-level security, and receipts carry encrypted tokens that verify by QR scan.',
    image: image('oec-verify')?.url,
    hint: image('oec-verify')?.hint,
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://oec-verifier.vercel.app/',
    linkKind: 'demo',
  },
  {
    id: 'normalite',
    title: 'Normalite EDGE',
    monogram: 'NE',
    category: 'client',
    categoryLabel: 'Client work',
    featured: true,
    description:
      "A reviewer system for Cebu Normal University's BLEPT department. Students get mock exams, flashcards, score analytics and scheduling; staff get exam import and export, so content no longer has to be keyed in by hand. I translated the department's requirements into the workflows the system runs on.",
    image: image('normalite')?.url,
    hint: image('normalite')?.hint,
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL'],
    link: 'https://normalite-edge.vercel.app/',
    linkKind: 'demo',
  },
  {
    id: 'letreview',
    title: 'LETReview',
    monogram: 'LR',
    category: 'personal',
    categoryLabel: 'Independent',
    featured: true,
    description:
      'Over 120 users and 4,000 visits in its first fourteen days. It is a licensure exam reviewer built as a progressive web app, with quiz mode, flashcards, and gamification (daily streaks, achievements, virtual pets) to keep people coming back. Firebase handles authentication and the realtime database.',
    image: image('letreview')?.url,
    hint: image('letreview')?.hint,
    tech: ['Next.js', 'TypeScript', 'React', 'Firebase', 'Tailwind CSS', 'PWA'],
    link: 'https://studio--letreview.us-central1.hosted.app/',
    linkKind: 'demo',
  },
  {
    id: 'bnhs',
    title: 'BNHS eDocument Request and Tracking',
    monogram: 'BN',
    category: 'client',
    categoryLabel: 'Client work',
    featured: true,
    description:
      'Bato National High School was running document requests on paper. I built the backend in Laravel on an MVC structure and designed the PostgreSQL schema, then used Livewire for the interactive parts and Cloudinary for file storage. The requirements came from sitting down with the school administration.',
    image: image('bnhs')?.url,
    hint: image('bnhs')?.hint,
    tech: ['Laravel', 'Livewire', 'PostgreSQL', 'Tailwind CSS', 'Cloudinary'],
    link: 'https://bnhsedocumentrequest.onrender.com/',
    linkKind: 'demo',
  },
  {
    id: 'medicare',
    title: 'MediCare Clinic System',
    monogram: 'MC',
    category: 'coursework',
    categoryLabel: 'Coursework',
    featured: false,
    description:
      'A clinic management system covering patient records, appointments and billing across administrator, staff, doctor and patient roles. Built on custom PHP routing with Supabase behind it.',
    image: image('medicare')?.url,
    hint: image('medicare')?.hint,
    tech: ['PHP', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Cloudinary'],
    link: 'https://github.com/baphus/Medi-Care-AP3-Project',
    linkKind: 'github',
  },
  {
    id: 'cinema',
    title: 'Absolute Cinema Ticketing',
    monogram: 'AC',
    category: 'coursework',
    categoryLabel: 'Coursework',
    featured: false,
    description:
      'I taught myself PHP and MySQL to build this one. It books cinema tickets, and the interesting problem was stopping double bookings and showtime conflicts, so it has a full admin side for managing movies, screens and schedules.',
    image: image('cinema')?.url,
    hint: image('cinema')?.hint,
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/baphus/AbsoluteCinema',
    linkKind: 'github',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    monogram: 'JS',
    category: 'personal',
    categoryLabel: 'Independent',
    featured: false,
    description: 'The site you are reading. Next.js and Tailwind, themed after Mac OS X.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/baphus',
    linkKind: 'github',
  },
];

const COLLAPSE_AT = 190;

function ProjectWindow({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > COLLAPSE_AT;

  return (
    <AquaWindow
      title={project.title}
      hoverable
      className="h-full"
      statusBar={<span>{project.categoryLabel}</span>}
    >
      <div className="flex h-full flex-col">
        {project.image ? (
          <div className="relative aspect-[4/3] border-b border-aqua-hairline/25">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={project.hint}
            />
          </div>
        ) : (
          <div className="relative flex aspect-[4/3] items-center justify-center border-b border-aqua-hairline/25 bg-black/[0.03] dark:bg-white/[0.03]">
            <span className="font-headline text-6xl font-bold text-aqua-graphite/45">
              {project.monogram}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col gap-5 p-5">
          <div>
            <p
              className={cn(
                'text-[14px] leading-relaxed text-muted-foreground',
                isLong && !expanded && 'line-clamp-4'
              )}
            >
              {project.description}
            </p>
            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                className="aqua-disclosure mt-2 hover:underline"
              >
                <Triangle className="h-2.5 w-2.5 rotate-90 fill-current" aria-hidden="true" />
                {expanded ? 'Less' : 'More'}
              </button>
            )}
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-control border border-aqua-hairline/30 bg-black/[0.03] px-2 py-0.5 text-[11px] font-bold text-muted-foreground dark:bg-white/[0.04]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link ? (
              <Button asChild className="btn-aqua btn-aqua-primary h-10 w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    {project.linkKind === 'github' ? 'View on GitHub' : 'View demo'}
                    {project.linkKind === 'github' ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4" />
                    )}
                  </span>
                </a>
              </Button>
            ) : (
              <p className="flex items-center justify-center gap-2 rounded-control border border-aqua-hairline/30 bg-black/[0.02] py-2.5 text-[12px] font-bold text-muted-foreground dark:bg-white/[0.03]">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                No public demo
              </p>
            )}
          </div>
        </div>
      </div>
    </AquaWindow>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('featured');

  const segments = useMemo(
    () => [
      { id: 'featured', label: 'Featured', count: projects.filter((p) => p.featured).length },
      { id: 'all', label: 'All', count: projects.length },
      {
        id: 'built-for',
        label: 'Built for others',
        count: projects.filter((p) => p.category === 'capstone' || p.category === 'client').length,
      },
      {
        id: 'personal',
        label: 'Independent',
        count: projects.filter((p) => p.category === 'personal').length,
      },
      {
        id: 'coursework',
        label: 'Coursework',
        count: projects.filter((p) => p.category === 'coursework').length,
      },
    ],
    []
  );

  const visible = useMemo(() => {
    switch (filter) {
      case 'all':
        return projects;
      case 'built-for':
        return projects.filter((p) => p.category === 'capstone' || p.category === 'client');
      case 'personal':
        return projects.filter((p) => p.category === 'personal');
      case 'coursework':
        return projects.filter((p) => p.category === 'coursework');
      default:
        return projects.filter((p) => p.featured);
    }
  }, [filter]);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <AquaWindow title="Projects">
          <div className="space-y-5 p-6 md:p-8">
            <p className="max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
              Eight projects: a case management system for a government agency, two client
              systems, a licensure reviewer that reached 120 users in its first two weeks, and
              the coursework I learned on.
            </p>
            <AquaSegmentedControl
              segments={segments}
              value={filter}
              onValueChange={setFilter}
              label="Filter projects"
            />
          </div>
        </AquaWindow>
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <ProjectWindow project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
