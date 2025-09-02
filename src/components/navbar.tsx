"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Lightbulb, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '#about', label: 'About', icon: <User className="h-5 w-5" /> },
  { href: '#skills', label: 'Skills', icon: <Lightbulb className="h-5 w-5" /> },
  { href: '#portfolio', label: 'Portfolio', icon: <Briefcase className="h-5 w-5" /> },
  { href: '#education', label: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
  { href: '#contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.substring(1));
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    let lastActiveSection = 'home';

    const observer = new IntersectionObserver((entries) => {
      let intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        const mostVisibleEntry = intersectingEntries.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio ? prev : current;
        });
        
        const newActiveSection = mostVisibleEntry.target.id;
        if (newActiveSection !== lastActiveSection) {
          setActiveSection(newActiveSection);
          lastActiveSection = newActiveSection;
        }
      } else {
        const closestEntry = entries.reduce((prev, current) => {
          const prevDistance = Math.abs(prev.boundingClientRect.top);
          const currentDistance = Math.abs(current.boundingClientRect.top);
          return prevDistance < currentDistance ? prev : current;
        });
        
        if (closestEntry && closestEntry.target.id !== lastActiveSection) {
           const scrollPosition = window.scrollY + window.innerHeight;
           const pageHeight = document.documentElement.scrollHeight;
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
    <div className="w-full p-4">
      <div className="relative container mx-auto max-w-screen-lg">
        <header className="frutiger-aero-navbar relative flex h-16 items-center justify-between rounded-2xl px-4 md:px-6">
          <a href="#home" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-auto text-primary" />
            <span className="hidden font-bold sm:inline-block">Josephus Sarsonas</span>
          </a>
          <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
            {navLinks.map(({ href, label, icon }) => {
              const isActive = activeSection === href.substring(1);
              return (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  className={cn(
                    "p-3 rounded-full transition-colors hover:text-primary",
                    isActive ? "frutiger-aero-navbar-active-link" : "text-foreground/70"
                  )}
                >
                  {icon}
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
                  <SheetHeader>
                    <SheetTitle>
                      <a href="#home" className="mb-8 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                        <Logo className="h-8 w-auto text-primary" />
                        <span className="font-bold">Josephus Sarsonas</span>
                      </a>
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                      Mobile navigation menu
                    </SheetDescription>
                  </SheetHeader>
                  <div className="p-4">
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
    </div>
  );
}