"use client";

import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full py-6 bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Josephus Kim L. Sarsonas. All Rights Reserved.
        </p>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={scrollToTop}
          aria-label="Go to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
}
