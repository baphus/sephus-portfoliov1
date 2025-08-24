import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Guitar, Gamepad2, Lightbulb, Rocket } from 'lucide-react';

const personalDetails = [
  { label: 'Tech-Savvy', icon: <Rocket className="mr-2 h-4 w-4" /> },
  { label: 'Curious', icon: <Lightbulb className="mr-2 h-4 w-4" /> },
  { label: 'Plays Guitar', icon: <Guitar className="mr-2 h-4 w-4" /> },
  { label: 'Gamer', icon: <Gamepad2 className="mr-2 h-4 w-4" /> },
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
              <h3 className="text-2xl font-semibold font-headline">Hey, I'm Josephus!</h3>
              <p className="text-lg text-muted-foreground">
                I'm a creative professional from Toledo City, Cebu, with a passion for blending technology and storytelling. As a tech-savvy and naturally curious person, I love diving into new challenges, whether it's producing a viral video for a social media campaign or designing and building a web application from scratch.
              </p>
              <p className="text-muted-foreground">
                My approach is all about working smart—finding efficient and creative solutions to help businesses grow. Nothing excites me more than seeing an idea come to life and deliver real results, like when I helped my family's business, JK Bros Combos, reach over 2,200 people organically. It's this drive to solve problems and connect with people that fuels my work.
              </p>
              <p className="text-muted-foreground">
                When I'm not focused on a project, you can usually find me playing my guitar or diving into a good video game. I'm always open to new opportunities and love engaging with like-minded people. If you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-headline">A Little More About Me</h3>
              <div className="flex flex-wrap gap-2">
                {personalDetails.map((detail) => (
                  <Badge key={detail.label} variant="secondary" className="px-3 py-1.5 text-sm flex items-center">
                    {detail.icon}
                    {detail.label}
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
