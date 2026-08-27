
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import Image from 'next/image';
import { useSitePreferences } from '@/components/site-preferences';

const navLinks = [
  { href: '/', label: 'Home', iconSrc: '/nav-icons/home.png' },
  { href: '/portfolio', label: 'Portfolio', iconSrc: '/nav-icons/portfolio.png' },
  { href: '/about', label: 'Experience', iconSrc: '/nav-icons/about.png' },
  { href: '/skills', label: 'Skills', iconSrc: '/nav-icons/skills.png' },
  { href: '/education', label: 'Education', iconSrc: '/nav-icons/education.png' },
  { href: '/contact', label: 'Contact', iconSrc: '/nav-icons/contact.png' },
];

/**
 * Magnification falloff. One icon pitch is roughly 52px, so the stops land on
 * the hovered icon, then its immediate neighbour, then the one after that.
 */
const PITCH = 52;
const FALLOFF_DISTANCE = [-3 * PITCH, -2 * PITCH, -PITCH, 0, PITCH, 2 * PITCH, 3 * PITCH];
const FALLOFF_SCALE = [1, 1.08, 1.25, 1.55, 1.25, 1.08, 1];

interface DockIconProps {
  href: string;
  label: string;
  iconSrc: string;
  isActive: boolean;
  pointerX: MotionValue<number>;
}

function DockIcon({ href, label, iconSrc, isActive, pointerX }: DockIconProps) {
  const iconRef = useRef<HTMLDivElement>(null);

  const distance = useTransform(pointerX, (x) => {
    const bounds = iconRef.current?.getBoundingClientRect();
    if (!bounds) return Number.POSITIVE_INFINITY;
    return x - (bounds.left + bounds.width / 2);
  });

  const targetScale = useTransform(distance, FALLOFF_DISTANCE, FALLOFF_SCALE, {
    clamp: true,
  });

  const scale = useSpring(targetScale, { mass: 0.12, stiffness: 190, damping: 14 });

  // The help tag rides above the icon, so it has to clear however far the icon
  // has grown. The dock does the same thing.
  const tagLift = useTransform(scale, (value) => -(value - 1) * 40 - 10);

  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      className="group relative flex items-end p-1.5 sm:p-2"
    >
      <motion.div
        ref={iconRef}
        style={{ scale, transformOrigin: 'bottom center' }}
        className="relative h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
      >
        <Image src={iconSrc} alt="" fill sizes="40px" className="object-contain" />
      </motion.div>

      {isActive && <span className="dock-indicator" aria-hidden="true" />}

      <motion.span
        style={{ x: '-50%', y: tagLift }}
        className="aqua-help-tag pointer-events-none absolute bottom-full left-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
      >
        {label}
      </motion.span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [pointerCanMagnify, setPointerCanMagnify] = useState(false);
  const { animationsEnabled, dockMagnificationEnabled } = useSitePreferences();

  const pointerX = useMotionValue(Number.POSITIVE_INFINITY);

  // Prevent hydration mismatch by only rendering active states after mount.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Magnification needs a real pointer. Motion and magnification preferences
  // are controlled globally from the menu bar.
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    const sync = () => setPointerCanMagnify(finePointer.matches);
    sync();

    finePointer.addEventListener('change', sync);
    return () => {
      finePointer.removeEventListener('change', sync);
    };
  }, []);

  const magnify = pointerCanMagnify && animationsEnabled && dockMagnificationEnabled;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] w-auto max-w-[95vw]">
      <header className="frutiger-aero-navbar flex h-14 sm:h-16 items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2">
        <div className="hidden md:flex items-center self-stretch px-1">
          <ThemeToggle />
          <span className="dock-separator" aria-hidden="true" />
        </div>

        <nav
          className="flex items-end gap-1 sm:gap-2 md:gap-3"
          onMouseMove={magnify ? (event) => pointerX.set(event.clientX) : undefined}
          onMouseLeave={magnify ? () => pointerX.set(Number.POSITIVE_INFINITY) : undefined}
        >
          {navLinks.map(({ href, label, iconSrc }) => (
            <DockIcon
              key={href}
              href={href}
              label={label}
              iconSrc={iconSrc}
              isActive={mounted && pathname === href}
              pointerX={pointerX}
            />
          ))}
        </nav>

        <div className="md:hidden flex items-center self-stretch">
          <span className="dock-separator" aria-hidden="true" />
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
