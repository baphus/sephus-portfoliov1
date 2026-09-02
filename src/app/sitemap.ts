import type { MetadataRoute } from 'next';
import { projectPath, projects } from '@/lib/projects-data';
import { SITE_URL } from '@/lib/seo';

const pages = ['', '/portfolio', '/about', '/skills', '/education', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries: MetadataRoute.Sitemap = pages.map((path, index) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => project.detail)
    .map((project) => ({
      url: `${SITE_URL}${projectPath(project)}`,
      changeFrequency: 'monthly',
      priority: project.featured ? 0.8 : 0.7,
      images: project.image ? [`${SITE_URL}${project.image}`] : undefined,
    }));

  return [...pageEntries, ...projectEntries];
}
