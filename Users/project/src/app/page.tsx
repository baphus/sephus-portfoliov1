import Hero from '@/components/hero';
import MainContent from '@/components/main-content';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <MainContent />
    </div>
  );
}
