import type { Metadata } from 'next';
import Portfolio from '@/components/portfolio';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Nine projects, including Tul.AI from my first hackathon, a government case management system, client systems, a licensure exam reviewer, and coursework.',
};

export default function PortfolioPage() {
  return (
    <SectionWrapper id="portfolio" className="pt-20">
      <Portfolio />
    </SectionWrapper>
  );
}
