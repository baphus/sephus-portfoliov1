import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SectionWrapper from '@/components/section-wrapper';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Hero />
      <main id="main-content" className="flex-1">
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
      {/* macOS style Dock at the bottom */}
      <Navbar />
    </div>
  );
}