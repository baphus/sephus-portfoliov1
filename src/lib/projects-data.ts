/**
 * Single source for the projects list.
 *
 * This array used to live inside portfolio.tsx, which meant the grid was the
 * only thing that could read it. The detail modal needs the same data, so it
 * moved here.
 *
 * Everything in `detail` is sourced from the résumé in public/resume.pdf or
 * from the card blurbs already on the site. Where neither says anything, the
 * gap is recorded in `todos` — never filled with plausible-sounding invention.
 * `todos` is deliberately not rendered anywhere.
 */

import imageData from '@/app/lib/placeholder-images.json';

export type Category = 'capstone' | 'client' | 'personal' | 'coursework';

export interface ProjectShot {
  src: string;
  /** Omitted when the filename doesn't tell us what the screen actually is. */
  caption?: string;
}

export interface ProjectLesson {
  skill: string;
  note: string;
}

export interface ProjectDetail {
  /** Longer prose. The card shows a clamped version of `description`. */
  overview: string;
  role: string;
  shots: {
    desktop: ProjectShot[];
    /** Tall scroll captures of the whole page. Not mobile viewports. */
    fullPage: ProjectShot[];
    /** Genuine phone-viewport captures only. */
    mobile: ProjectShot[];
  };
  lessons: ProjectLesson[];
  /** Content gaps for the owner to fill. Never rendered. */
  todos?: string[];
}

export interface Project {
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
  detail?: ProjectDetail;
}

const image = (id: string) => imageData.projects.find((p) => p.id === id);

/**
 * Descriptions are deliberately uneven in length and opening. Eight blurbs of
 * matching shape reads as generated even when every fact is true.
 */
export const projects: Project[] = [
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
    detail: {
      overview:
        "The Department of Migrant Workers needed a single entry point for distressed OFW cases that several agencies could work from together. Case tracking and referral workflows are centralised across multiple government agencies, so a case raised in one office is visible and actionable in another instead of being re-filed. Laravel 13 and React are wired together through Inertia.js, with PostgreSQL behind it, Redis for caching and queues, and S3-compatible object storage for case file attachments.",
      role: 'Capstone lead developer, team leader and systems analyst, for a team of four. I designed the system architecture and analysed the core business processes, then authored the technical documentation covering architecture, API contracts, deployment and CI/CD.',
      shots: {
        desktop: [{ src: '/portfolio/owbap/bayanihan.png' }],
        fullPage: [],
        mobile: [
          { src: '/portfolio/owbap/owbap-mobile-1.png' },
          { src: '/portfolio/owbap/owbap-mobile-2.png' },
          { src: '/portfolio/owbap/owbap-mobile-3.png' },
          { src: '/portfolio/owbap/owbap-mobile-4.png' },
        ],
      },
      lessons: [
        {
          skill: 'System analysis & design',
          note: 'Analysing the core business processes across several agencies came before any code — that analysis is what the case tracking and referral workflows were built from.',
        },
        {
          skill: 'Authentication & access control',
          note: 'Email OTP, TOTP multi-factor, role-based access control, audit logging and rate limiting on one system. Security here was a set of layers, not a single gate.',
        },
        {
          skill: 'Leading a team',
          note: 'Leading four people meant the architecture had to be legible to someone other than me before it was worth anything.',
        },
        {
          skill: 'Technical documentation',
          note: 'Writing the architecture, API contract, deployment and CI/CD docs forced decisions I had been leaving implicit.',
        },
      ],
      todos: [
        'Add 3-4 more desktop screenshots: case intake, referral view, audit log, admin dashboard.',
        'Caption owbap-mobile-1 through -4 once you confirm which screen each one is.',
      ],
    },
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
    detail: {
      overview:
        'A full-stack verification platform covering two sides of the same process: secure application intake, and the evaluator workflow that reviews what comes in. Access is enforced with role-based permissions and Postgres row-level security through Supabase. Receipts carry encrypted tokens, so a receipt can be checked by QR scan.',
      role: 'Independent project — sole developer.',
      shots: {
        desktop: [{ src: '/portfolio/oec-verify/landing.png' }],
        fullPage: [],
        mobile: [],
      },
      lessons: [
        {
          skill: 'Row-level security',
          note: 'Pushing access rules down into Postgres RLS means the database enforces them, not just the application layer sitting in front of it.',
        },
        {
          skill: 'Encrypted tokens & QR verification',
          note: 'Receipt tokens are encrypted and verify by QR scan, so a receipt can be confirmed as genuine without the scanner needing access to the record behind it.',
        },
        {
          skill: 'Role-based access control',
          note: 'Applicant intake and evaluator review are two different workflows running on one permission model.',
        },
      ],
      todos: [
        'landing.png was named placeholder.png until now — confirm it is the current UI.',
        'Add screenshots of the evaluator review workflow and the QR verification result screen.',
        'Add mobile screenshots — QR scanning is likely to happen on a phone.',
      ],
    },
  },
  {
    id: 'normalite',
    title: 'Normalite EDGE — Everyday Guide to Excellence',
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
    detail: {
      overview:
        "A web-based reviewer system for Cebu Normal University's BLEPT department. Students get mock exams, flashcards, score analytics and scheduling. Staff get exam import and export, which automates content management that was previously keyed in by hand. React and TypeScript on the front, an Express API behind it, Prisma ORM over PostgreSQL.",
      role: "Developer, and the person who translated the department's requirements into the workflows the system actually runs on.",
      shots: {
        desktop: [{ src: '/portfolio/normalite/normalite.png' }],
        fullPage: [],
        mobile: [{ src: '/portfolio/normalite/normalite-mobile-home.png', caption: 'Home' }],
      },
      lessons: [
        {
          skill: 'Requirements gathering',
          note: "The BLEPT department described what they needed in their own terms. Turning that into workflows was the actual work, not the screens.",
        },
        {
          skill: 'Automating the real bottleneck',
          note: 'Exam import and export mattered more than the exam-taking UI, because hand-keying content was the thing standing in the way.',
        },
        {
          skill: 'Prisma ORM & PostgreSQL',
          note: 'A typed schema with migrations, shared between an Express API and a React client.',
        },
      ],
      todos: [
        'Add screenshots: mock exam in progress, flashcards, score analytics, staff import/export screen.',
        'Only one mobile capture so far — worth adding the mock exam and flashcards on mobile.',
      ],
    },
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
    link: 'https://letreview.vercel.app/',
    linkKind: 'demo',
    detail: {
      overview:
        'A licensure exam reviewer built as a progressive web app: quiz mode, flashcards, and gamification in the form of daily streaks, achievements and virtual pets. It reached over 120 users and 4,000 visits within 14 days of launch. Firebase handles authentication and the realtime database.',
      role: 'Independent project — sole developer.',
      shots: {
        desktop: [
          { src: '/portfolio/let-review/landing.png', caption: 'Landing page' },
          { src: '/portfolio/let-review/app-preview.png', caption: 'App preview' },
        ],
        fullPage: [],
        mobile: [
          { src: '/portfolio/let-review/feature-reviewer.png', caption: 'Reviewer' },
          { src: '/portfolio/let-review/feature-challenges.png', caption: 'Challenges' },
          { src: '/portfolio/let-review/feature-progress.png', caption: 'Progress' },
          { src: '/portfolio/let-review/feature-timer.png', caption: 'Timer' },
          { src: '/portfolio/let-review/letreviewmobile1.png' },
          { src: '/portfolio/let-review/letreviewmobile2.png' },
          { src: '/portfolio/let-review/letreviewmobile3.png' },
          { src: '/portfolio/let-review/letreviewmobile4.png' },
          { src: '/portfolio/let-review/letreviewmobile5.png' },
        ],
      },
      lessons: [
        {
          skill: 'Progressive web apps',
          note: 'Shipping as a PWA is what put it on a phone home screen without going near an app store.',
        },
        {
          skill: 'Designing for retention',
          note: 'Streaks, achievements and virtual pets were the reason people came back: 120+ users and 4,000+ visits in the first 14 days.',
        },
        {
          skill: 'Firebase',
          note: 'Authentication and a realtime database from one provider, integrated end to end.',
        },
      ],
      todos: [
        'Add a desktop screenshot of quiz mode and of the achievements screen.',
        'Caption letreviewmobile1 through 5 — the first four mobile shots are captioned, these are not.',
      ],
    },
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
    detail: {
      overview:
        'Bato National High School was running document requests on paper. This replaces that with a request and tracking system: the backend is Laravel on an MVC structure over a PostgreSQL schema I designed, Livewire handles the interactive parts without leaving PHP, and Cloudinary stores the uploaded files.',
      role: 'Backend developer and database designer. Requirements came from sitting down with the school administration directly.',
      shots: {
        desktop: [{ src: '/portfolio/bnhs/bnhs-2.png' }],
        fullPage: [
          { src: '/portfolio/bnhs/bnhs-1.png' },
          { src: '/portfolio/bnhs/bnhs-3.png' },
          { src: '/portfolio/bnhs/bnhs-4.png' },
          { src: '/portfolio/bnhs/bnhs-5.png' },
        ],
        mobile: [],
      },
      lessons: [
        {
          skill: 'Database design',
          note: 'The PostgreSQL schema was designed around the document request and tracking workflow before any screen existed.',
        },
        {
          skill: 'MVC architecture',
          note: 'Laravel MVC kept routing, data and presentation separate as the request workflow grew.',
        },
        {
          skill: 'Requirements gathering',
          note: 'The requirements came out of conversations with the school administration rather than a written spec.',
        },
        {
          skill: 'Livewire',
          note: 'Interactive views without a separate JavaScript front end, which kept the whole thing in one language.',
        },
      ],
      todos: [
        'The four tall captures are full-page scrolls, not mobile viewports — label confirmed. Add real mobile screenshots if students request documents on phones.',
        'Add captions to bnhs-1 through bnhs-5 once you confirm which screen each one is.',
      ],
    },
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
    detail: {
      overview:
        'A clinic management system covering patient records, appointments and billing, with four roles on one data model: administrator, staff, doctor and patient. Built on custom PHP routing rather than a framework, with Supabase behind it and Cloudinary for file storage.',
      role: 'Coursework build (AP3).',
      shots: {
        desktop: [
          { src: '/portfolio/medicare-clinic/landing.jpg', caption: 'Landing page' },
          { src: '/portfolio/medicare-clinic/register.png', caption: 'Registration' },
          { src: '/portfolio/medicare-clinic/dashboard.png', caption: 'Admin dashboard' },
          { src: '/portfolio/medicare-clinic/dashboard2.png', caption: 'Dashboard, second view' },
          { src: '/portfolio/medicare-clinic/patients.png', caption: 'Patient records' },
          { src: '/portfolio/medicare-clinic/patient-dashboard.png', caption: 'Patient dashboard' },
          { src: '/portfolio/medicare-clinic/appointments.png', caption: 'Appointments' },
        ],
        fullPage: [],
        mobile: [],
      },
      lessons: [
        {
          skill: 'Role-based data modelling',
          note: 'Administrator, staff, doctor and patient all read the same records through different permissions.',
        },
        {
          skill: 'Routing without a framework',
          note: 'Custom PHP routing meant building by hand what Laravel would otherwise have handed me.',
        },
      ],
      todos: [
        'NOT ON YOUR RÉSUMÉ — nothing to source from. Confirm your role and whether this was solo or a group build.',
        'What did custom PHP routing actually teach you? The lesson above is inferred from the stack, not from anything you have written down.',
        'Was billing implemented, or scoped and dropped? The card blurb claims it.',
      ],
    },
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
    detail: {
      overview:
        'A cinema ticket booking system with a full admin side for managing movies, screens and schedules. The interesting problem was never the booking form — it was stopping double bookings and showtime conflicts. I taught myself PHP and MySQL to build it.',
      role: 'Sole developer. Self-taught PHP and MySQL for this build.',
      shots: {
        desktop: [
          { src: '/portfolio/absolute-cinema/absolute.png' },
          { src: '/portfolio/absolute-cinema/absolute2.png' },
          { src: '/portfolio/absolute-cinema/absolute3.png' },
          { src: '/portfolio/absolute-cinema/absolute4.png' },
          { src: '/portfolio/absolute-cinema/absolute6.png' },
          { src: '/portfolio/absolute-cinema/absolute7.png' },
          { src: '/portfolio/absolute-cinema/absolute8.png' },
          { src: '/portfolio/absolute-cinema/absolute9.png' },
          { src: '/portfolio/absolute-cinema/absolute10.png' },
          { src: '/portfolio/absolute-cinema/absolute11.png' },
          { src: '/portfolio/absolute-cinema/absolute12.png' },
          { src: '/portfolio/absolute-cinema/absolute13.png' },
        ],
        fullPage: [{ src: '/portfolio/absolute-cinema/absolute1.png' }],
        mobile: [],
      },
      lessons: [
        {
          skill: 'Teaching myself a stack',
          note: 'PHP and MySQL were both new to me when this started. It is where the backend work began.',
        },
        {
          skill: 'Booking conflicts',
          note: 'The hard part was preventing double bookings and showtime clashes — two people reaching for the same seat is a data problem, not a UI one.',
        },
      ],
      todos: [
        'NOT ON YOUR RÉSUMÉ — nothing to source from beyond the card blurb.',
        'How did you actually prevent double bookings? Unique constraints, transactions, row locks, application checks? This is the most interesting thing in the project and there is no record of the answer.',
        'Twelve uncaptioned screenshots. Worth captioning the 4-5 best and cutting the rest — 12 near-identical 624x384 shots dilute the good ones.',
      ],
    },
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
    detail: {
      overview:
        'The site you are reading: a responsive personal portfolio built and deployed to show the projects and the stack. Next.js App Router, React and TypeScript, Tailwind for styling, themed after Mac OS X Aqua — windows, pinstripes, traffic lights and a dock.',
      role: 'Independent project — sole developer.',
      shots: { desktop: [], fullPage: [], mobile: [] },
      lessons: [
        {
          skill: 'Building a design system from a reference',
          note: 'Aqua is a real, documented visual language. Rebuilding it in CSS tokens meant reading how it worked rather than approximating the vibe.',
        },
      ],
      todos: [
        'No screenshots — a portfolio screenshotting itself is redundant, so the gallery is intentionally empty here.',
        'Add a second lesson once this redesign settles.',
      ],
    },
  },
];

/** A project only offers "Learn more" when there is more to show. */
export function hasDetail(project: Project): boolean {
  if (!project.detail) return false;
  const { overview, lessons, shots } = project.detail;
  return Boolean(overview) && (lessons.length > 0 || shots.desktop.length > 0);
}

export function projectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function shotCount(detail: ProjectDetail): number {
  return detail.shots.desktop.length + detail.shots.fullPage.length + detail.shots.mobile.length;
}
