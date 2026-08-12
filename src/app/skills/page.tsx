import type { Metadata } from 'next';
import Skills from '@/components/skills';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Languages, frameworks, data and tooling, grouped by where each one sits in a project.',
};

export default function SkillsPage() {
  return (
    <SectionWrapper id="skills" className="pt-20">
      <Skills />
    </SectionWrapper>
  );
}
