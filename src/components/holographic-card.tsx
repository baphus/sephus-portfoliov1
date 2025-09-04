"use client";

import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

export default function HolographicCard() {
  return (
    <div className="h-[250px] w-[400px] scale-[0.8] sm:scale-100 mx-auto rounded-2xl bg-card border border-border flex overflow-hidden">
      <div className="bg-primary/90 w-1/3 h-full flex flex-col items-center justify-center p-4">
        <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-primary-foreground/80 shadow-lg">
          <Image
            src="/about/600x750.png"
            alt="Portrait of Josephus Kim L. Sarsonas"
            fill
            className="object-cover"
            data-ai-hint="professional portrait"
          />
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col justify-center p-6 pl-8">
        <div className="text-left">
          <h3 className="text-lg font-bold font-headline">Josephus Kim L. Sarsonas</h3>
          <p className="text-sm text-primary pb-2 mb-2 border-b border-border">Web Developer</p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a href="mailto:sarsonasjosephuskim@gmail.com" className="text-xs text-foreground hover:text-primary transition-colors truncate">
                sarsonasjosephuskim@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-foreground">Cebu City, Philippines</span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex gap-2 mt-4">
          <Button variant="outline" size="icon" className="h-8 w-8" asChild>
            <a href="https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8" asChild>
            <a href="https://github.com/baphus" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
