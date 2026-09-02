import Experience from '@/components/experience';
import PageHeading from '@/components/page-heading';
import SectionWrapper from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Professional experience, systems analysis background and full-stack development work by Josephus Kim Sarsonas in Cebu, Philippines.';

export const metadata = createPageMetadata({
  title: 'Experience & Background',
  description,
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SectionWrapper id="experience" className="pt-20">
        <PageHeading title="Experience & Background" description={description} />
        <Experience />
      </SectionWrapper>
    </div>
  );
}

