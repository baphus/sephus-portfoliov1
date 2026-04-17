
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home', iconSrc: '/nav-icons/home.png' },
  { href: '/portfolio', label: 'Portfolio', iconSrc: '/nav-icons/portfolio.png' },
  { href: '/about', label: 'Experience', iconSrc: '/nav-icons/about.png' },
  { href: '/skills', label: 'Skills', iconSrc: '/nav-icons/skills.png' },
  { href: '/education', label: 'Education', iconSrc: '/nav-icons/education.png' },
  { href: '/contact', label: 'Contact', iconSrc: '/nav-icons/contact.png' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering active states after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] w-auto max-w-[95vw]">
      <header className="frutiger-aero-navbar flex h-14 sm:h-16 items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2">
        <div className="hidden md:flex items-center space-x-1 px-2 border-r border-white/20 mr-1 sm:mr-2">
          <ThemeToggle />
        </div>
        
        <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
          {navLinks.map(({ href, label, iconSrc }) => {
            const isActive = mounted && pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={cn(
                  "relative p-1.5 sm:p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 group",
                  isActive ? "frutiger-aero-navbar-active-link" : ""
                )}
              >
                <div className="relative h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 overflow-hidden">
                  <Image src={iconSrc} alt={label} fill className="object-contain" />
                </div>
                {/* Tooltip - Adjusted for mobile */}
                <span className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[9px] sm:text-[10px] px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest font-bold">
                  {label}
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="md:hidden flex items-center ml-1 border-l border-white/20 pl-1">
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
