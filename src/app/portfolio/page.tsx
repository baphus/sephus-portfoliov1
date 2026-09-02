import PageHeading from '@/components/page-heading';
import Portfolio from '@/components/portfolio';
import SectionWrapper from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Full-stack development projects by Josephus Kim Sarsonas, including Laravel, Next.js, React and PostgreSQL systems for public service and education.';

export const metadata = createPageMetadata({
  title: 'Full-Stack Development Projects',
  description,
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <SectionWrapper id="portfolio" className="pt-20">
      <PageHeading title="Full-Stack Development Projects" description={description} />
      <Portfolio />
    </SectionWrapper>
  );
}

