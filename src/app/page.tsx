import About from '@/components/about';
import FeaturedProjects from '@/components/featured-projects';
import Hero from '@/components/hero';
import JsonLd from '@/components/json-ld';
import SectionWrapper from '@/components/section-wrapper';
import TechMarquee from '@/components/tech-marquee';
import { DEFAULT_DESCRIPTION, SITE_URL } from '@/lib/seo';

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profile-page`,
  url: SITE_URL,
  name: 'Josephus Kim Sarsonas — Full-Stack Software Engineer Portfolio',
  description: DEFAULT_DESCRIPTION,
  mainEntity: { '@id': `${SITE_URL}/#person` },
  isPartOf: { '@id': `${SITE_URL}/#website` },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={profileSchema} />
      <Hero />
      <FeaturedProjects />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="technologies" className="pb-16 md:pb-24 py-0">
        <TechMarquee />
      </SectionWrapper>
    </div>
  );
}
