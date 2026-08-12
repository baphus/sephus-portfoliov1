"use client";

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AquaWindow from '@/components/ui/aqua-window';
import AquaSegmentedControl from '@/components/ui/aqua-segmented-control';
import ProjectDetailDialog from '@/components/project-detail-dialog';
import { ArrowUpRight, Github, Lock, Maximize2 } from 'lucide-react';
import { hasDetail, projects, type Project } from '@/lib/projects-data';

function ProjectWindow({
  project,
  onLearnMore,
}: {
  project: Project;
  onLearnMore: (project: Project) => void;
}) {
  const canExpand = hasDetail(project);

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
          {/* Permanently clamped. The full text is the modal's Overview, so an
              inline expander here would be a worse version of the same action
              sitting directly above the button that does it properly. */}
          <p className="line-clamp-4 text-[14px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>

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

            <div className="space-y-2">
              {canExpand && (
                <Button
                  type="button"
                  onClick={() => onLearnMore(project)}
                  className="btn-aqua btn-aqua-primary h-10 w-full"
                >
                  <span className="flex items-center gap-2">
                    Learn more
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Button>
              )}

              {project.link ? (
                <Button
                  asChild
                  className={
                    canExpand
                      ? 'btn-aqua btn-aqua-secondary h-10 w-full'
                      : 'btn-aqua btn-aqua-primary h-10 w-full'
                  }
                >
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
      </div>
    </AquaWindow>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('featured');
  /**
   * One dialog for the whole grid rather than one per card — eight mounted
   * dialogs would mean eight portals and eight focus traps.
   */
  const [active, setActive] = useState<Project | null>(null);

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
              the coursework I learned on. Open any one for screenshots and what it taught me.
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
              <ProjectWindow project={project} onLearnMore={setActive} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectDetailDialog
        project={active}
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      />
    </div>
  );
}
