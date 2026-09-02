import Contact from '@/components/contact';
import PageHeading from '@/components/page-heading';
import SectionWrapper from '@/components/section-wrapper';
import { createPageMetadata } from '@/lib/seo';

const description =
  'Contact Josephus Kim Sarsonas about full-stack development, Laravel, Next.js or systems analysis work in Cebu and remotely.';

export const metadata = createPageMetadata({
  title: 'Contact',
  description,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <SectionWrapper id="contact" className="pt-20">
      <PageHeading title="Contact Josephus" description={description} />
      <Contact />
    </SectionWrapper>
  );
}
