import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Briefcase, Mic, Users, Rocket, Lightbulb } from 'lucide-react';

const professionalAttributes = [
    { label: 'Detail-Oriented', icon: <Cpu className="mr-2 h-4 w-4" /> },
    { label: 'Reliable', icon: <Briefcase className="mr-2 h-4 w-4" /> },
    { label: 'Strong Communicator', icon: <Mic className="mr-2 h-4 w-4" /> },
    { label: 'Adaptable', icon: <Users className="mr-2 h-4 w-4" /> },
    { label: 'Self-Motivated', icon: <Rocket className="mr-2 h-4 w-4" /> },
    { label: 'Research-Driven', icon: <Lightbulb className="mr-2 h-4 w-4" /> },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">About Me</h2>
      <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-16 items-start">
        <div className="md:col-span-2 mx-auto md:mx-0">
          <Card className="overflow-hidden rounded-2xl shadow-md max-w-sm">
            <CardContent className="p-0">
              <Image
                src="/about/600x750.png"
                alt="Portrait of Josephus Kim L. Sarsonas"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
                data-ai-hint="professional portrait"
              />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-3 space-y-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-semibold font-headline">Hey, I'm Josephus!</h3>
            <p className="text-lg text-muted-foreground">
              I'm a web developer from Cebu, Philippines, with a passion for building intuitive and performant web applications. My goal is to translate user needs into functional and engaging digital experiences.
            </p>
            <p className="text-muted-foreground">
              I specialize in front-end technologies like React and Next.js, and I enjoy tackling challenges, whether it's designing a responsive UI or architecting a scalable web app. I am driven by a desire to solve problems and deliver high-quality, impactful work.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies or playing my guitar. I am always open to new opportunities and collaborations.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 font-headline">Professional Attributes</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {professionalAttributes.map((attr) => (
                <Badge key={attr.label} variant="secondary" className="px-3 py-1.5 text-sm flex items-center">
                  {attr.icon}
                  {attr.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
