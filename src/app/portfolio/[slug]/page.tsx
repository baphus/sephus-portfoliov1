import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import JsonLd from '@/components/json-ld';
import { ProjectDetailContent } from '@/components/project-detail-dialog';
import SectionWrapper from '@/components/section-wrapper';
import AquaWindow from '@/components/ui/aqua-window';
import { projectById, projectPath, projectSlug, projects, shotCount } from '@/lib/projects-data';
import { createPageMetadata, SITE_URL } from '@/lib/seo';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.filter((project) => project.detail).map((project) => ({ slug: projectSlug(project) }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectById(slug);

  if (!project?.detail) {
    return { title: 'Project Not Found', robots: { index: false, follow: false } };
  }

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: projectPath(project),
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectById(slug);

  if (!project?.detail) notFound();

  const projectUrl = `${SITE_URL}${projectPath(project)}`;
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${projectUrl}#project`,
    url: projectUrl,
    name: project.title,
    description: project.description,
    image: project.image ? `${SITE_URL}${project.image}` : undefined,
    genre: project.categoryLabel,
    keywords: project.tech.join(', '),
    creator: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    sameAs: project.link?.startsWith('http') ? project.link : undefined,
  };

  const screenshots = shotCount(project.detail);
  const attachments = project.detail.resources?.length ?? 0;

  return (
    <SectionWrapper id={`project-${project.id}`} className="pt-20 pb-16 md:pb-24">
      <JsonLd data={projectSchema} />
      <article className="container mx-auto max-w-5xl px-4 md:px-6">
        <header className="mb-10 space-y-5">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-aqua-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>

          <div className="space-y-4">
            <h1 className="max-w-[22ch] font-headline text-4xl font-bold tracking-[-0.025em] text-foreground md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-[72ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Technologies used">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-control border border-aqua-hairline/35 bg-white/60 px-2.5 py-1 text-[12px] font-bold text-foreground dark:bg-black/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </header>

        <AquaWindow
          title={`${project.title} — Case Study`}
          statusBar={
            <span>
              {project.categoryLabel}
              {screenshots > 0 && ` — ${screenshots} screenshot${screenshots === 1 ? '' : 's'}`}
              {attachments > 0 && ` · ${attachments} attachment${attachments === 1 ? '' : 's'}`}
            </span>
          }
        >
          <ProjectDetailContent project={project} />
        </AquaWindow>
      </article>
    </SectionWrapper>
  );
}
