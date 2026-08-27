"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import AquaWindow from '@/components/ui/aqua-window';
import ProjectDetailDialog from '@/components/project-detail-dialog';
import { projects, type Project } from '@/lib/projects-data';

const featuredProjectIds = ['tulai', 'owbap', 'letreview'] as const;

const cardCopy: Record<(typeof featuredProjectIds)[number], string> = {
  tulai:
    'A multilingual scholarship discovery prototype built at my first hackathon for Filipino students.',
  owbap:
    'An inter-agency case management system for distressed OFW cases, led and architected with a four-person team.',
  letreview:
    'A gamified licensure reviewer that reached 120+ users and 4,000+ visits in its first fourteen days.',
};

const featuredProjects = featuredProjectIds.flatMap((id) => {
  const project = projects.find((candidate) => candidate.id === id);
  return project ? [{ ...project, cardDescription: cardCopy[id] }] : [];
});

const restingRotations = [-1.7, 1.2, -1] as const;
const restingOffsets = [7, -7, 5] as const;

export default function FeaturedProjects() {
  const reduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="featured-projects"
        aria-labelledby="featured-projects-title"
        className="relative z-10 -mt-16 pb-16 md:-mt-20 md:pb-24"
      >
        <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-2">
            <h2
              id="featured-projects-title"
              className="text-3xl font-bold tracking-[-0.025em] text-foreground md:text-4xl"
            >
              A few things I&apos;ve built
            </h2>
            <p className="max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
              Selected work across public service, education, and rapid product prototyping.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex w-fit items-center gap-2 text-[13px] font-bold text-aqua-blue transition-colors hover:text-aqua-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-blue focus-visible:ring-offset-4"
          >
            View all projects
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-8 pt-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-4">
          {featuredProjects.map((project, index) => {
            const restingRotation = restingRotations[index] ?? 0;
            const restingOffset = restingOffsets[index] ?? 0;

            return (
              <motion.article
                key={project.id}
                className="group w-[84vw] max-w-[360px] shrink-0 snap-center md:w-auto md:max-w-none"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 62, scale: 0.9, rotate: restingRotation * 2 }
                }
                whileInView={
                  reduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        y: restingOffset,
                        scale: 1,
                        rotate: restingRotation,
                      }
                }
                viewport={{ once: true, amount: 0.3 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        type: 'spring',
                        stiffness: 115,
                        damping: 13,
                        mass: 0.82,
                        delay: index * 0.09,
                      }
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -12,
                        rotate: 0,
                        scale: 1.025,
                        transition: { type: 'spring', stiffness: 340, damping: 18 },
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                        scale: 0.985,
                        transition: { type: 'spring', stiffness: 420, damping: 20 },
                      }
                }
              >
                <AquaWindow
                  title={project.title.split(' — ')[0]}
                  className="h-full"
                  bodyClassName="h-full"
                  contentClassName="flex h-full flex-col"
                  statusBar={
                    <span className="flex w-full items-center justify-between gap-3">
                      <span>{project.categoryLabel}</span>
                      <span>{project.tech[0]}</span>
                    </span>
                  }
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-aqua-hairline/30 bg-muted">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} interface preview`}
                        fill
                        sizes="(min-width: 768px) 33vw, 84vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-3xl font-bold text-muted-foreground">
                        {project.monogram}
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold leading-tight tracking-[-0.02em] text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-muted-foreground">
                        {project.cardDescription}
                      </p>
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-4">
                      <div className="flex min-w-0 flex-wrap gap-1.5" aria-label="Technologies">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-control border border-aqua-hairline/30 bg-white/55 px-2 py-1 text-[10px] font-bold text-foreground dark:bg-black/25"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.detail && (
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          aria-label={`View ${project.title} project details`}
                          className="btn-aqua btn-aqua-primary inline-flex h-9 shrink-0 items-center gap-1.5 px-3 text-[11px] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-blue focus-visible:ring-offset-2"
                        >
                          View
                          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </div>
                </AquaWindow>
              </motion.article>
            );
          })}
          </div>
        </div>
      </section>

      <ProjectDetailDialog
        project={activeProject}
        open={activeProject !== null}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      />
    </>
  );
}
