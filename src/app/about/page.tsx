import type { Metadata } from 'next';
import Experience from '@/components/experience';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full-stack developer and systems analyst in Cebu, Philippines. Full Stack Developer Trainee at Edufied Pte.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SectionWrapper id="experience" className="pt-20">
        <Experience />
      </SectionWrapper>
    </div>
  );
}
