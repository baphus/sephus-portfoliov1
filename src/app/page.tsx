import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Education from '@/components/education';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Hero />
      <main id="main-content" className="flex-1 content-wrapper">
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
