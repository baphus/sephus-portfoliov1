
import Hero from '@/components/hero';
import About from '@/components/about';
import TechMarquee from '@/components/tech-marquee';
import SectionWrapper from '@/components/section-wrapper';
import FeaturedProjects from '@/components/featured-projects';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
