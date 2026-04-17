import Hero from '@/components/hero';
import About from '@/components/about';
import TechMarquee from '@/components/tech-marquee';
import SectionWrapper from '@/components/section-wrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <div className="pb-16 md:pb-24">
        <TechMarquee />
      </div>
    </div>
  );
}
