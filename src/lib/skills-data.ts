/**
 * Single source for the skills list.
 *
 * This array was previously duplicated verbatim in skills.tsx and
 * tech-marquee.tsx, so the two could drift apart. Everything here is on the
 * résumé; nothing is here that isn't.
 */

export type SkillCategory = 'practice' | 'language' | 'frontend' | 'backend' | 'data' | 'tools';

export interface Skill {
  title: string;
  category: SkillCategory;
  /** simpleicons.org slug. Omit when there is no brand mark. */
  slug?: string;
  description: string;
  featured?: boolean;
}

export const skills: Skill[] = [
  // Practice
  {
    title: 'System Analysis & Design',
    category: 'practice',
    description:
      'Turning business processes into a system design. I did this as systems analyst on OWBAP.',
    featured: true,
  },
  {
    title: 'MVC Architecture',
    category: 'practice',
    slug: 'laravel',
    description: 'Structuring Laravel applications so routing, data and presentation stay separate.',
    featured: true,
  },
  {
    title: 'SDLC',
    category: 'practice',
    description:
      'Requirements gathering through to deployment and maintenance, which is the shape of my work at Edufied.',
    featured: true,
  },
  {
    title: 'RESTful APIs',
    category: 'practice',
    description: 'Designing and consuming REST endpoints across Laravel and Express backends.',
    featured: true,
  },
  {
    title: 'Authentication & Access Control',
    category: 'practice',
    description:
      'Email OTP, TOTP multi-factor, role-based access control, row-level security, audit logging and rate limiting.',
    featured: true,
  },

  // Languages
  {
    title: 'PHP',
    category: 'language',
    slug: 'php',
    description: 'My first backend language, and what Laravel and the older coursework run on.',
    featured: true,
  },
  {
    title: 'TypeScript',
    category: 'language',
    slug: 'typescript',
    description: 'The default for anything I build on Next.js or Express.',
    featured: true,
  },
  {
    title: 'JavaScript',
    category: 'language',
    slug: 'javascript',
    description: 'Browser scripting, and the runtime underneath the Node work.',
  },
  {
    title: 'Python',
    category: 'language',
    slug: 'python',
    description: 'Scripting and small data tasks.',
  },

  // Frontend
  {
    title: 'React',
    category: 'frontend',
    slug: 'react',
    description: 'Components and hooks. The front end of OWBAP, Normalite EDGE and LETReview.',
    featured: true,
  },
  {
    title: 'Next.js',
    category: 'frontend',
    slug: 'nextdotjs',
    description: 'App Router, server components and server actions.',
    featured: true,
  },
  {
    title: 'Inertia.js',
    category: 'frontend',
    slug: 'inertia',
    description: 'Wiring a React front end straight onto Laravel routes without a separate API.',
    featured: true,
  },
  {
    title: 'Livewire',
    category: 'frontend',
    slug: 'livewire',
    description: 'Interactive Laravel views without leaving PHP. Used on the BNHS system.',
  },
  {
    title: 'Tailwind CSS',
    category: 'frontend',
    slug: 'tailwindcss',
    description: 'Utility-first styling on every project since 2024.',
    featured: true,
  },
  {
    title: 'ShadCN/UI & Radix',
    category: 'frontend',
    slug: 'radixui',
    description: 'Accessible primitives I build interface components on top of.',
  },

  // Backend
  {
    title: 'Laravel',
    category: 'backend',
    slug: 'laravel',
    description: 'Eloquent, queues, middleware and policies. Version 13 on OWBAP.',
    featured: true,
  },
  {
    title: 'Node.js',
    category: 'backend',
    slug: 'nodedotjs',
    description: 'Server-side JavaScript for the Express and Next.js work.',
    featured: true,
  },
  {
    title: 'Express',
    category: 'backend',
    slug: 'express',
    description: 'The API layer behind Normalite EDGE.',
    featured: true,
  },
  {
    title: 'JWTs',
    category: 'backend',
    slug: 'jsonwebtokens',
    description: 'Stateless session tokens for API authentication.',
  },
  {
    title: 'Redis',
    category: 'backend',
    slug: 'redis',
    description: 'Caching and queue backing on OWBAP.',
  },

  // Data
  {
    title: 'PostgreSQL',
    category: 'data',
    slug: 'postgresql',
    description: 'My default database. Schema design, constraints and row-level security.',
    featured: true,
  },
  {
    title: 'MySQL',
    category: 'data',
    slug: 'mysql',
    description: 'Where I started with relational databases.',
  },
  {
    title: 'Prisma ORM',
    category: 'data',
    slug: 'prisma',
    description: 'Typed schema and migrations for the Node projects.',
    featured: true,
  },
  {
    title: 'Supabase',
    category: 'data',
    slug: 'supabase',
    description: 'Managed Postgres with row-level security. Behind OEC Verify.',
    featured: true,
  },
  {
    title: 'Firebase',
    category: 'data',
    slug: 'firebase',
    description: 'Authentication and realtime NoSQL. What LETReview runs on.',
  },
  {
    title: 'AWS Aurora',
    category: 'data',
    slug: 'amazonwebservices',
    description: 'Managed relational database on AWS.',
  },

  // Tools
  {
    title: 'Git',
    category: 'tools',
    slug: 'git',
    description: 'Branching and history on every project here.',
    featured: true,
  },
  {
    title: 'Docker',
    category: 'tools',
    slug: 'docker',
    description: 'Containers so an environment behaves the same everywhere.',
    featured: true,
  },
  {
    title: 'S3 Storage',
    category: 'tools',
    slug: 'amazons3',
    description: 'S3-compatible object storage for case file attachments on OWBAP.',
  },
  {
    title: 'Cloudinary',
    category: 'tools',
    slug: 'cloudinary',
    description: 'Image and file hosting for the Laravel projects.',
  },
  {
    title: 'Vercel & Render',
    category: 'tools',
    slug: 'vercel',
    description: 'Where most of these projects are deployed.',
  },
  {
    title: 'Heroku',
    category: 'tools',
    slug: 'heroku',
    description: 'Hosting for the MediCare coursework build.',
  },
  {
    title: 'NPM',
    category: 'tools',
    slug: 'npm',
    description: 'Dependency management for the JavaScript side.',
  },
  {
    title: 'XAMPP & Laragon',
    category: 'tools',
    slug: 'xampp',
    description: 'Local PHP and MySQL environments.',
  },
];

/**
 * The Emphasis bars.
 *
 * These are deliberately NOT proficiency scores. A self-assigned "UI/UX: 74%
 * skilled" is unfalsifiable and a reader discounts it; how much of your
 * attention an area gets is a claim you can actually make. The section copy
 * says so explicitly, so the numbers can't be misread as a self-assessment —
 * and it keeps curiosity at 100% honest rather than a punchline undercutting
 * the five bars above it.
 *
 * They are not shares of a whole and do not sum to 100.
 */
export interface EmphasisArea {
  label: string;
  /** 0–100. Intensity of attention, not proficiency and not share-of-time. */
  value: number;
}

export const emphasisAreas: EmphasisArea[] = [
  { label: 'Backend development & integration', value: 95 },
  { label: 'Database design', value: 92 },
  { label: 'UI/UX design', value: 88 },
  { label: 'Project management', value: 84 },
  { label: 'User research', value: 78 },
  { label: 'Curiosity', value: 100 },
];

export interface SkillGroup {
  id: string;
  label: string;
  /** What this group actually covers. Plain description, not a testimonial. */
  note: string;
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'featured',
    label: 'Featured',
    note: 'What I reach for first, and what the projects on this site are actually built with.',
  },
  {
    id: 'all',
    label: 'All',
    note: 'Everything on my résumé, grouped by where it sits in a project.',
  },
  {
    id: 'practice',
    label: 'Practice',
    note: 'How I work rather than what I type: analysis, architecture, and the security controls I put on systems that hold personal data.',
  },
  {
    id: 'language',
    label: 'Languages',
    note: 'PHP and TypeScript carry most of the work. Python is for scripting.',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    note: 'React on its own, React through Inertia onto Laravel, or Livewire when staying in PHP is simpler.',
  },
  {
    id: 'backend',
    label: 'Backend',
    note: 'Laravel for the larger systems, Express when a thin API is enough.',
  },
  {
    id: 'data',
    label: 'Data',
    note: 'Postgres by preference, with Prisma or Eloquent on top. Firebase where realtime mattered more than relations.',
  },
  {
    id: 'tools',
    label: 'Tools',
    note: 'Version control, containers, storage and the platforms these projects are deployed on.',
  },
];

export function filterSkills(groupId: string): Skill[] {
  if (groupId === 'all') return skills;
  if (groupId === 'featured') return skills.filter((skill) => skill.featured);
  return skills.filter((skill) => skill.category === groupId);
}

/** Featured slugs, used to seed the icon cloud. */
export const featuredSlugs = skills
  .filter((skill) => skill.featured && skill.slug)
  .map((skill) => skill.slug as string);
