"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.substring(1));
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // A section is considered active if 30% of it is visible
    };

    let lastActiveSection = 'home';

    const observer = new IntersectionObserver((entries) => {
      let intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        // Find the entry with the highest intersection ratio
        const mostVisibleEntry = intersectingEntries.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio ? prev : current;
        });
        
        const newActiveSection = mostVisibleEntry.target.id;
        if (newActiveSection !== lastActiveSection) {
          setActiveSection(newActiveSection);
          lastActiveSection = newActiveSection;
        }
      } else {
        // If no sections are intersecting (e.g., when at the very bottom of the page)
        // we can choose to keep the last active section highlighted.
        // We find the entry closest to the viewport.
        const closestEntry = entries.reduce((prev, current) => {
          const prevDistance = Math.abs(prev.boundingClientRect.top);
          const currentDistance = Math.abs(current.boundingClientRect.top);
          return prevDistance < currentDistance ? prev : current;
        });
        
        if (closestEntry && closestEntry.target.id !== lastActiveSection) {
           const scrollPosition = window.scrollY + window.innerHeight;
           const pageHeight = document.documentElement.scrollHeight;
           // If scrolled to the bottom, activate the last section
           if (scrollPosition >= pageHeight - 2) {
             const lastSectionId = sectionIds[sectionIds.length-1];
             if(lastActiveSection !== lastSectionId) {
                setActiveSection(lastSectionId);
                lastActiveSection = lastSectionId;
             }
           }
        }
      }
    }, observerOptions);

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full p-4">
      <header className="container mx-auto flex h-16 max-w-screen-lg items-center justify-between rounded-full border border-border/40 bg-background/80 px-4 shadow-lg backdrop-blur-md md:px-6">
        <a href="#home" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} className="h-8 w-auto" />
          <span className="hidden font-bold sm:inline-block">Josephus Sarsonas</span>
        </a>
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.substring(1);
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "px-4 py-2 rounded-full transition-colors hover:text-primary",
                  isActive ? "bg-primary/10 text-primary" : "text-foreground/70"
                )}
              >
                {label}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-4">
                  <a href="#home" className="mb-8 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image src="/logo.svg" alt="Logo" width={32} height={32} className="h-8 w-auto" />
                    <span className="font-bold">Josephus Sarsonas</span>
                  </a>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map(({ href, label }) => (
                      <a
                        key={href}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg transition-colors hover:text-primary"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
