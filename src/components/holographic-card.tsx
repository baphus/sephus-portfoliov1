"use client";

import { useState } from 'react';
import { Mail, User, MapPin, Linkedin, Github } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';

export default function HolographicCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="business-card" className="w-full py-16 md:py-24 bg-transparent flex items-center justify-center">
      <div 
        className="flip-container"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`flipper ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="card-face front rounded-2xl bg-card border border-border flex items-center justify-center">
            <Logo className="h-48 w-48 text-primary" />
          </div>
          <div className="card-face back rounded-2xl bg-card border border-border p-8 flex flex-col justify-center">
            <div className="text-left">
              <h1 className="text-2xl font-bold font-headline">Josephus Kim L. Sarsonas</h1>
              <p className="text-lg text-primary pb-2 mb-4 border-b border-border">Digital Professional</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:sarsonasjosephuskim@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    sarsonasjosephuskim@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">Cebu City, Philippines</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/baphus" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
