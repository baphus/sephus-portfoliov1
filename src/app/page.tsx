import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
