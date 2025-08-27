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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

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
