"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Image from 'next/image';

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

  return (
    <div className="sticky top-0 z-50 w-full p-4">
      <header className="container mx-auto flex h-16 max-w-screen-lg items-center justify-between rounded-full border border-border/40 bg-background/80 px-4 shadow-lg backdrop-blur-md md:px-6">
        <a href="#home" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.svg" alt="Josephus Sarsonas Logo" width={40} height={40} className="h-8 w-auto" />
          <span className="hidden font-bold sm:inline-block">Josephus Sarsonas</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="transition-colors hover:text-primary">
              {label}
            </a>
          ))}
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
                    <Image src="/logo.svg" alt="Josephus Sarsonas Logo" width={40} height={40} className="h-8 w-auto" />
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
