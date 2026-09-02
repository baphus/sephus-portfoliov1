import Certifications from '@/components/certifications';
import Education from '@/components/education';
import PageHeading from '@/components/page-heading';
import SectionWrapper from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/seo';

const description =
  'BS Information Systems education at Cebu Technological University and AWS, Cisco, IPOPHL and Coursera certifications earned by Josephus Kim Sarsonas.';

export const metadata = createPageMetadata({
  title: 'Education & Certifications',
  description,
  path: '/education',
});

export default function EducationPage() {
  return (
    <>
      <SectionWrapper id="education" className="pt-20 pb-6 md:pb-8">
        <PageHeading title="Education & Certifications" description={description} />
        <Education />
      </SectionWrapper>
      <SectionWrapper id="certifications" className="py-0 pb-16 md:pb-24">
        <Certifications />
      </SectionWrapper>
    </>
  );
}

