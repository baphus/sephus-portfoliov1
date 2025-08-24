import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const professionalAttributes = [
  'Detail-Oriented',
  'Reliable',
  'Communication Skills',
  'Adaptability',
  'Research-Driven',
  'Self-Motivated',
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
               Dynamic and versatile digital professional with expertise spanning video editing, social media management, web development, and data analytics. Currently pursuing a Bachelor of Science in Information Systems (BSIS) with demonstrated success in driving organic social media growth, creating compelling visual content, and managing multi-platform digital campaigns.
              </p>
              <p className="text-muted-foreground">
              Proven track record of achieving measurable results including 5,156 total post views and 2,260 unique reach across social media campaigns. Strong foundation in database management, data visualization, and modern web technologies with a commitment to continuous learning and professional development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-headline">Professional Attributes</h3>
              <div className="flex flex-wrap gap-2">
                {professionalAttributes.map((quality) => (
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
