import PageHeading from '@/components/page-heading';
import SectionWrapper from '@/components/section-wrapper';
import Skills from '@/components/skills';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Laravel, Next.js, React, TypeScript, PostgreSQL and the development tools Josephus Kim Sarsonas uses to build full-stack web applications.';

export const metadata = createPageMetadata({
  title: 'Technical Skills',
  description,
  path: '/skills',
});

export default function SkillsPage() {
  return (
    <SectionWrapper id="skills" className="pt-20">
      <PageHeading title="Technical Skills" description={description} />
      <Skills />
    </SectionWrapper>
  );
}

