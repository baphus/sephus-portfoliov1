import type { Metadata } from 'next';
import Portfolio from '@/components/portfolio';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Eight projects: a government case management system, two client systems, a licensure exam reviewer, and the coursework behind them.',
};

export default function PortfolioPage() {
  return (
    <SectionWrapper id="portfolio" className="pt-20">
      <Portfolio />
    </SectionWrapper>
  );
}
