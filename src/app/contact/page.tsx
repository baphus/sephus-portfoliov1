import type { Metadata } from 'next';
import Contact from '@/components/contact';
import SectionWrapper from '@/components/section-wrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about full-stack development work.',
};

export default function ContactPage() {
  return (
    <SectionWrapper id="contact" className="pt-20">
      <Contact />
    </SectionWrapper>
  );
}
