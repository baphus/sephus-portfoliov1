import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Education from '@/components/education';
import Contact from '@/components/contact';
import SectionWrapper from '@/components/section-wrapper';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="portfolio">
        <Portfolio />
      </SectionWrapper>
      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </div>
  );
}
