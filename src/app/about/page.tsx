import Experience from '@/components/experience';
import SectionWrapper from '@/components/section-wrapper';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SectionWrapper id="experience" className="pt-20">
        <Experience />
      </SectionWrapper>
    </div>
  );
}
