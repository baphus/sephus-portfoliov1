
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Briefcase, Mic, Users, Rocket, Lightbulb, Wrench, ShieldCheck } from 'lucide-react';

const professionalAttributes = [
    { label: 'Technical Troubleshooting', icon: <Wrench className="mr-2 h-4 w-4" /> },
    { label: 'Reliable & Adaptable', icon: <Briefcase className="mr-2 h-4 w-4" /> },
    { label: 'Strong Communicator', icon: <Mic className="mr-2 h-4 w-4" /> },
    { label: 'Customer-Focused', icon: <Users className="mr-2 h-4 w-4" /> },
    { label: 'Research-Driven', icon: <Lightbulb className="mr-2 h-4 w-4" /> },
    { label: 'Detail-Oriented', icon: <ShieldCheck className="mr-2 h-4 w-4" /> },
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
            <h3 className="text-2xl font-semibold font-headline">Technical Support Intern Candidate</h3>
            <p className="text-lg text-muted-foreground">
              I am an Information Systems student with hands-on experience developing, deploying, and supporting production web applications used by real clients and users. 
            </p>
            <p className="text-muted-foreground">
              I specialize in diagnosing technical issues, troubleshooting web platforms, and assisting users in understanding complex system functionality. My background combines front-end expertise (React, Next.js) with robust backend logic (PHP Laravel, Node.js) and cloud-hosted environments.
            </p>
            <p className="text-muted-foreground">
              I am known for my fast learning ability and a customer-focused approach to solving technical problems. Whether it's debugging a database query or explaining DNS concepts to a non-technical user, I strive for clarity and excellence.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 font-headline">Core Strengths</h3>
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
