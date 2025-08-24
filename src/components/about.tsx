import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const personalQualities = [
  'Detail-Oriented',
  'Reliable',
  'Good Communication',
  'Researcher & Fast Learner',
  'Editing (spelling, grammar, text)',
];

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">About Me</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-16 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden rounded-2xl shadow-md">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x750.png"
                  alt="Portrait of Josephus Kim L. Sarsonas"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  data-ai-hint="professional portrait"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                I am a detail-oriented, reliable, and versatile individual with experience in video editing, social media management, creative design, website creation, and academic research. I am also an avid learner and researcher who gives 100% effort into mastering new skills and tools.
              </p>
              <ul className="space-y-2 text-foreground">
                <li><strong>Name:</strong> Josephus Kim L. Sarsonas</li>
                <li><strong>From:</strong> Toledo City, Cebu</li>
                <li><strong>Education:</strong> Bachelor of Science in Information Systems, Cebu Technological University</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-headline">Personal Qualities</h3>
              <div className="flex flex-wrap gap-2">
                {personalQualities.map((quality) => (
                  <Badge key={quality} variant="secondary" className="px-3 py-1 text-sm">
                    {quality}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
