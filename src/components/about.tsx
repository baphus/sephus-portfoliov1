import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const personalQualities = [
  'Communication',
  'Time Management',
  'Organization',
  'Problem-Solving',
  'Adaptability',
  'Reliability',
  'Self-Motivation',
  'Attention to Detail',
];

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">About Me</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-16 items-start">
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
                Hi, I’m Josephus Kim L. Sarsonas, a creative and detail-oriented professional based in Toledo City, Cebu. I hold a Bachelor of Science in Information Systems from Cebu Technological University, and I’m passionate about combining technology, creativity, and storytelling to bring ideas to life.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-headline">What I Do</h3>
                <p className="text-muted-foreground">
                  I specialize in video editing, digital media creation, social media management, and creative design. My work blends technical precision with creativity—whether I’m editing a video, building a brand’s online presence, or designing visual campaigns.
                </p>
              </div>
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
