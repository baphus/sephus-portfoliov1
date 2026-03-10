import Experience from '@/components/experience';
import SectionWrapper from '@/components/section-wrapper';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>
    </div>
  );
}
