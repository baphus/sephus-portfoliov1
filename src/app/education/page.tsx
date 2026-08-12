import type { Metadata } from 'next';
import Education from '@/components/education';
import Certifications from '@/components/certifications';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Education',
  description:
    'BS Information Systems at Cebu Technological University, plus certifications from AWS, Cisco, IPOPHL and Coursera.',
};

export default function EducationPage() {
  return (
    <>
      <SectionWrapper id="education" className="pt-20 pb-6 md:pb-8">
        <Education />
      </SectionWrapper>
      <SectionWrapper id="certifications" className="py-0 pb-16 md:pb-24">
        <Certifications />
      </SectionWrapper>
    </>
  );
}
