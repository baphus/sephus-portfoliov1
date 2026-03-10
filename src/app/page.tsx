import Hero from '@/components/hero';
import About from '@/components/about';
import SectionWrapper from '@/components/section-wrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
    </div>
  );
}
