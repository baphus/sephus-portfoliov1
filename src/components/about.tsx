
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Briefcase, Mic, Users, Rocket, Lightbulb, Wrench, ShieldCheck, Code2 } from 'lucide-react';

const professionalAttributes = [
    { label: 'Detail-Oriented', icon: <ShieldCheck className="mr-2 h-4 w-4" /> },
    { label: 'Reliable & Adaptable', icon: <Briefcase className="mr-2 h-4 w-4" /> },
    { label: 'Strong Communicator', icon: <Mic className="mr-2 h-4 w-4" /> },
    { label: 'Problem Solver', icon: <Wrench className="mr-2 h-4 w-4" /> },
    { label: 'Research-Driven', icon: <Lightbulb className="mr-2 h-4 w-4" /> },
    { label: 'Fast Learner', icon: <Rocket className="mr-2 h-4 w-4" /> },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">About Me</h2>
      <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-16 items-start">
        <div className="md:col-span-2 mx-auto md:mx-0">
          <Card className="overflow-hidden rounded-2xl shadow-md max-w-sm border-border">
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
            <h3 className="text-2xl font-semibold font-headline">Web Developer & Systems Designer</h3>
            <p className="text-lg text-muted-foreground">
              I am an Information Systems student with a passion for building intuitive, performant, and reliable web applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              With experience in both frontend (React, Next.js) and backend (Laravel, PHP, Node.js) development, I enjoy the entire lifecycle of a project—from gathering requirements and designing architectures to deployment and ongoing technical support.
            </p>
            <p className="text-muted-foreground">
              My technical journey is driven by curiosity and a commitment to high-quality code. I am particularly interested in systems maintenance, cloud-hosted environments, and delivering impactful digital experiences.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 font-headline">Professional Attributes</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {professionalAttributes.map((attr) => (
                <Badge key={attr.label} variant="secondary" className="px-3 py-1.5 text-sm flex items-center bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
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
