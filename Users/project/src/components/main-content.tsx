import About from '@/components/about';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SectionWrapper from '@/components/section-wrapper';

export default function MainContent() {
  return (
    <div id="main-content" className="content-wrapper">
      <main className="flex-1">
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
      </main>
      <Footer />
    </div>
  );
}
