"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Award, FileText, Github, Lock, PlayCircle } from 'lucide-react';
import AquaDialog from '@/components/ui/aqua-dialog';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import {
  shotCount,
  type Project,
  type ProjectFact,
  type ProjectResource,
  type ProjectShot,
} from '@/lib/projects-data';

/** An Aqua "group box" heading: hairline rule, bold Lucida-ish label. */
function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('space-y-3', className)}>
      <h3 className="font-headline text-[13px] font-bold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="border-t border-aqua-hairline/25 pt-4">{children}</div>
    </section>
  );
}

function shotLabel(shot: ProjectShot, index: number, total: number) {
  return shot.caption ?? `Screen ${index + 1} of ${total}`;
}

/**
 * Desktop screenshots as a carousel with a thumbnail strip. A grid would be a
 * wall — Absolute Cinema has twelve.
 */
function DesktopGallery({ shots, title }: { shots: ProjectShot[]; title: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setSelected(api.selectedScrollSnap());
    handleSelect();
    api.on('select', handleSelect);
    api.on('reInit', handleSelect);
    return () => {
      api.off('select', handleSelect);
      api.off('reInit', handleSelect);
    };
  }, [api]);

  if (shots.length === 0) return null;

  return (
    <div className="space-y-3">
      <Carousel setApi={setApi} opts={{ loop: shots.length > 1 }} className="relative">
        <CarouselContent>
          {shots.map((shot, index) => (
            <CarouselItem key={shot.src}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-control border border-aqua-hairline/30 bg-black/[0.04] dark:bg-black/40">
                <Image
                  src={shot.src}
                  alt={`${title} — ${shotLabel(shot, index, shots.length)}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {shots.length > 1 && (
          <>
            {/* Pulled inside the frame — the default -left-12/-right-12 would
                sit outside the modal's padding and get clipped. */}
            <CarouselPrevious className="left-2 h-8 w-8 border-aqua-hairline/40" />
            <CarouselNext className="right-2 h-8 w-8 border-aqua-hairline/40" />
          </>
        )}
      </Carousel>

      <p className="text-center text-[12px] text-muted-foreground">
        {shotLabel(shots[selected] ?? shots[0], selected, shots.length)}
      </p>

      {shots.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          {shots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Show ${shotLabel(shot, index, shots.length)}`}
              aria-current={selected === index}
              className={cn(
                'relative h-12 w-20 shrink-0 overflow-hidden rounded-control border transition-colors',
                selected === index
                  ? 'border-aqua-blue ring-2 ring-aqua-blue/40'
                  : 'border-aqua-hairline/30 opacity-65 hover:opacity-100'
              )}
            >
              <Image
                src={shot.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Tall whole-page scroll captures. Cropped to the top with a link out to the
 * full file — these are 2262x5626 in places, so there is no honest way to show
 * one in full inside a modal.
 */
function FullPageStrip({ shots, title }: { shots: ProjectShot[]; title: string }) {
  if (shots.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-[12px] font-bold text-muted-foreground">Full page</p>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {shots.map((shot, index) => (
          <a
            key={shot.src}
            href={shot.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group/shot relative block h-56 w-36 shrink-0 overflow-hidden rounded-control border border-aqua-hairline/30 bg-black/[0.04] dark:bg-black/40"
          >
            <Image
              src={shot.src}
              alt={`${title} — full page capture ${index + 1} of ${shots.length}`}
              fill
              sizes="144px"
              className="object-cover object-top"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-black/55 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover/shot:opacity-100">
              Open full image
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

/** Genuine phone-viewport captures. Plain narrow tiles, no fake device bezel. */
function MobileStrip({ shots, title }: { shots: ProjectShot[]; title: string }) {
  if (shots.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-[12px] font-bold text-muted-foreground">
        Mobile{shots.length > 1 && ` — ${shots.length} screens`}
      </p>
      {/* Wraps rather than scrolls: LETReview has nine, and a nine-tile
          horizontal scroller hides most of them behind a gesture. */}
      <div className="flex flex-wrap gap-3">
        {shots.map((shot, index) => (
          <figure key={shot.src} className="w-32 shrink-0 space-y-1.5">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-control border border-aqua-hairline/30 bg-black/[0.04] dark:bg-black/40">
              <Image
                src={shot.src}
                alt={`${title} — ${shotLabel(shot, index, shots.length)}, mobile`}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <figcaption className="text-center text-[11px] text-muted-foreground">
              {shot.caption ?? `Screen ${index + 1}`}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectFacts({ facts }: { facts: ProjectFact[] }) {
  return (
    <dl className="grid overflow-hidden rounded-control border border-aqua-hairline/30 bg-aqua-hairline/20 sm:grid-cols-2">
      {facts.map((fact) => (
        <div key={fact.label} className="bg-background/90 p-3.5">
          <dt className="text-[11px] font-bold text-muted-foreground">{fact.label}</dt>
          <dd className="mt-1 text-[13px] leading-relaxed text-foreground">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectResources({ resources }: { resources: ProjectResource[] }) {
  const video = resources.find((resource) => resource.kind === 'video');
  const documents = resources.filter((resource) => resource.kind !== 'video');

  return (
    <div className="space-y-6">
      {video && (
        <article className="space-y-3">
          <div className="flex items-start gap-3">
            <PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-aqua-blue" aria-hidden="true" />
            <div>
              <h4 className="text-[14px] font-bold text-foreground">{video.title}</h4>
              {video.meta && (
                <p className="mt-0.5 text-[11px] font-bold text-muted-foreground">{video.meta}</p>
              )}
              <p className="mt-1.5 max-w-[70ch] text-[13px] leading-relaxed text-muted-foreground">
                {video.description}
              </p>
            </div>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster={video.preview}
            className="aspect-video w-full rounded-control border border-aqua-hairline/30 bg-black shadow-sm"
          >
            <source src={video.href} type="video/mp4" />
            Your browser cannot play this video.{' '}
            <a href={video.href} target="_blank" rel="noopener noreferrer">
              Open the demo video instead.
            </a>
          </video>
        </article>
      )}

      {documents.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((resource) => {
            const ResourceIcon = resource.kind === 'certificate' ? Award : FileText;
            const action = resource.kind === 'certificate' ? 'Open certificate' : 'Open pitch deck';

            return (
              <article
                key={resource.href}
                className="overflow-hidden rounded-control border border-aqua-hairline/30 bg-black/[0.02] dark:bg-white/[0.03]"
              >
                {resource.preview && (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-video border-b border-aqua-hairline/25 bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-blue focus-visible:ring-inset dark:bg-black/40"
                    aria-label={`${action}: ${resource.title}`}
                  >
                    <Image
                      src={resource.preview}
                      alt={`${resource.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain"
                    />
                  </a>
                )}
                <div className="space-y-3 p-4">
                  <div className="flex items-start gap-2.5">
                    <ResourceIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-aqua-blue"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-[13px] font-bold text-foreground">{resource.title}</h4>
                      {resource.meta && (
                        <p className="mt-0.5 text-[11px] font-bold text-muted-foreground">
                          {resource.meta}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-[12px] leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <Button asChild className="btn-aqua btn-aqua-secondary h-9 w-full">
                    <a href={resource.href} target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        {action}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const detail = project?.detail;
  if (!project || !detail) return null;

  const shots = shotCount(detail);
  const hasShots = shots > 0;
  const resourceCount = detail.resources?.length ?? 0;

  return (
    <AquaDialog
      open={open}
      onOpenChange={onOpenChange}
      title={project.title}
      description={`Project case study for ${project.title}, including the overview, role, media, lessons and technology.`}
      statusBar={
        <span>
          {project.categoryLabel}
          {hasShots && ` — ${shots} screenshot${shots === 1 ? '' : 's'}`}
          {resourceCount > 0 &&
            `${hasShots ? ' · ' : ' — '}${resourceCount} attachment${resourceCount === 1 ? '' : 's'}`}
        </span>
      }
    >
      <div className="space-y-8 p-5 md:p-8">
        <Section title="Overview">
          <p className="text-[14px] leading-relaxed text-muted-foreground">{detail.overview}</p>
        </Section>

        <Section title="My role">
          <p className="text-[14px] leading-relaxed text-muted-foreground">{detail.role}</p>
        </Section>

        {detail.facts && detail.facts.length > 0 && (
          <Section title="Project details">
            <ProjectFacts facts={detail.facts} />
          </Section>
        )}

        {hasShots && (
          <Section title="Screenshots">
            <div className="space-y-6">
              <DesktopGallery shots={detail.shots.desktop} title={project.title} />
              <FullPageStrip shots={detail.shots.fullPage} title={project.title} />
              <MobileStrip shots={detail.shots.mobile} title={project.title} />
            </div>
          </Section>
        )}

        {detail.resources && detail.resources.length > 0 && (
          <Section title="Project media">
            <ProjectResources resources={detail.resources} />
          </Section>
        )}

        {detail.lessons.length > 0 && (
          <Section title="Lessons learned">
            <ul className="space-y-4">
              {detail.lessons.map((lesson) => (
                <li key={lesson.skill} className="flex flex-col gap-1">
                  <span className="w-fit rounded-control border border-aqua-hairline/30 bg-black/[0.03] px-2 py-0.5 text-[11px] font-bold text-foreground dark:bg-white/[0.05]">
                    {lesson.skill}
                  </span>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">{lesson.note}</p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Technology & approach">
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
        </Section>

        <Section title="Links">
          {project.link ? (
            <Button asChild className="btn-aqua btn-aqua-primary h-10 w-full sm:w-auto">
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
            <p className="flex w-fit items-center gap-2 rounded-control border border-aqua-hairline/30 bg-black/[0.02] px-3 py-2 text-[12px] font-bold text-muted-foreground dark:bg-white/[0.03]">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              No public demo
            </p>
          )}
        </Section>
      </div>
    </AquaDialog>
  );
}
