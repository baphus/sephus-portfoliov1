
"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * A single Aqua status strip.
 *
 * This was a four-column marketing footer, which ended every page in exactly
 * the boilerplate the redesign is trying to remove. Nothing became unreachable:
 * navigation lives in the dock, and every contact link is on the Contact page.
 * The bottom padding keeps the strip clear of the dock.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full px-4 pb-28 pt-16 sm:pb-32 md:px-6">
      <div className="container mx-auto">
        <div className="aqua-window aqua-pinstripe">
          <div className="relative flex flex-col items-center justify-between gap-3 px-5 py-3 text-[12px] sm:flex-row">
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">Josephus Kim L. Sarsonas</span>
              <span className="mx-2 text-muted-foreground/50">·</span>
              Cebu, Philippines
            </p>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span>&copy; {currentYear}</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-1.5 font-bold text-aqua-blue hover:underline"
              >
                Back to top
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
