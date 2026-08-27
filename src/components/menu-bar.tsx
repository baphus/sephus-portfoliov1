"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Logo from '@/components/logo';
import { useSitePreferences } from '@/components/site-preferences';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Projects' },
  { href: '/about', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'mailto:sarsonasjosephuskim@gmail.com', label: 'Email Josephus' },
  { href: 'https://github.com/baphus', label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/',
    label: 'LinkedIn',
  },
];

const contentClassName = 'mac-menu-content';
const itemClassName = 'mac-menu-item';
const checkboxClassName = 'mac-menu-item mac-menu-checkbox';

function activePageTitle(pathname: string) {
  if (pathname === '/') return 'Josephus';
  return routes.find((route) => route.href !== '/' && pathname.startsWith(route.href))?.label ?? 'Josephus';
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <MenubarItem asChild className={itemClassName}>
      <Link href={href}>{children}</Link>
    </MenubarItem>
  );
}

function ExternalMenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <MenubarItem asChild className={itemClassName}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </MenubarItem>
  );
}

export default function MenuBar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const {
    animationsEnabled,
    setAnimationsEnabled,
    dockMagnificationEnabled,
    setDockMagnificationEnabled,
  } = useSitePreferences();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateClock = () => setNow(new Date());
    updateClock();
    const timer = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const timeLabel = useMemo(
    () =>
      now?.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }) ?? '--:--',
    [now]
  );

  const desktopTimeLabel = useMemo(
    () =>
      now?.toLocaleString('en-US', {
        weekday: 'short',
        hour: 'numeric',
        minute: '2-digit',
      }) ?? '--:--',
    [now]
  );

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: animationsEnabled ? 'smooth' : 'auto' });

  const viewControls = (
    <>
      <MenubarCheckboxItem
        checked={resolvedTheme === 'dark'}
        onCheckedChange={toggleTheme}
        className={checkboxClassName}
      >
        Dark appearance
      </MenubarCheckboxItem>
      <MenubarCheckboxItem
        checked={animationsEnabled}
        onCheckedChange={(checked) => setAnimationsEnabled(checked === true)}
        className={checkboxClassName}
      >
        Animations
      </MenubarCheckboxItem>
      <MenubarCheckboxItem
        checked={dockMagnificationEnabled}
        onCheckedChange={(checked) => setDockMagnificationEnabled(checked === true)}
        className={checkboxClassName}
      >
        Dock magnification
      </MenubarCheckboxItem>
      <MenubarSeparator className="mac-menu-separator" />
      <MenubarItem onSelect={scrollToTop} className={itemClassName}>
        Back to top
      </MenubarItem>
    </>
  );

  return (
    <header className="mac-menu-bar" aria-label="Portfolio menu bar">
      <Menubar className="mac-menu-root">
        <MenubarMenu>
          <MenubarTrigger className="mac-menu-logo-trigger" aria-label="Josephus menu">
            <Logo className="h-3.5 w-3.5" />
          </MenubarTrigger>
          <MenubarContent sideOffset={1} alignOffset={-2} className={contentClassName}>
            <MenubarLabel className="mac-menu-label">Josephus Kim L. Sarsonas</MenubarLabel>
            <MenuLink href="/#about">About Josephus</MenuLink>
            <ExternalMenuLink href="/resume.pdf">View résumé</ExternalMenuLink>
            <MenuLink href="/contact">Contact me</MenuLink>
            <MenubarSeparator className="mac-menu-separator" />
            <MenuLink href="/">Home</MenuLink>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="mac-menu-trigger mac-menu-current">
            {activePageTitle(pathname)}
          </MenubarTrigger>
          <MenubarContent sideOffset={1} className={contentClassName}>
            <MenubarItem onSelect={scrollToTop} className={itemClassName}>
              Go to page top
            </MenubarItem>
            {pathname === '/' ? (
              <>
                <MenuLink href="/#featured-projects">Featured projects</MenuLink>
                <MenuLink href="/#about">About section</MenuLink>
              </>
            ) : (
              <MenuLink href="/">Return home</MenuLink>
            )}
          </MenubarContent>
        </MenubarMenu>

        <div className="hidden items-center sm:flex">
          <MenubarMenu>
            <MenubarTrigger className="mac-menu-trigger">Explore</MenubarTrigger>
            <MenubarContent sideOffset={1} className={contentClassName}>
              {routes.map((route) => (
                <MenuLink key={route.href} href={route.href}>
                  {route.label}
                </MenuLink>
              ))}
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="mac-menu-trigger">Work</MenubarTrigger>
            <MenubarContent sideOffset={1} className={contentClassName}>
              <MenuLink href="/#featured-projects">Featured projects</MenuLink>
              <MenuLink href="/portfolio">Project gallery</MenuLink>
              <ExternalMenuLink href="/resume.pdf">View résumé</ExternalMenuLink>
              <MenubarSeparator className="mac-menu-separator" />
              <MenuLink href="/contact">Contact for work</MenuLink>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="mac-menu-trigger">View</MenubarTrigger>
            <MenubarContent sideOffset={1} className={contentClassName}>
              {viewControls}
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="mac-menu-trigger">Connect</MenubarTrigger>
            <MenubarContent sideOffset={1} className={contentClassName}>
              {socialLinks.map((link) => (
                <ExternalMenuLink key={link.href} href={link.href}>
                  {link.label}
                </ExternalMenuLink>
              ))}
              <MenubarSeparator className="mac-menu-separator" />
              <MenuLink href="/contact">Contact page</MenuLink>
            </MenubarContent>
          </MenubarMenu>
        </div>

        <div className="flex items-center sm:hidden">
          <MenubarMenu>
            <MenubarTrigger className="mac-menu-trigger">Menu</MenubarTrigger>
            <MenubarContent align="end" sideOffset={1} className={contentClassName}>
              <MenubarLabel className="mac-menu-label">Explore</MenubarLabel>
              {routes.map((route) => (
                <MenuLink key={route.href} href={route.href}>
                  {route.label}
                </MenuLink>
              ))}
              <MenubarSeparator className="mac-menu-separator" />
              <MenubarLabel className="mac-menu-label">Work</MenubarLabel>
              <MenuLink href="/#featured-projects">Featured projects</MenuLink>
              <ExternalMenuLink href="/resume.pdf">View résumé</ExternalMenuLink>
              <MenubarSeparator className="mac-menu-separator" />
              <MenubarLabel className="mac-menu-label">View</MenubarLabel>
              {viewControls}
              <MenubarSeparator className="mac-menu-separator" />
              <MenuLink href="/contact">Contact Josephus</MenuLink>
            </MenubarContent>
          </MenubarMenu>
        </div>
      </Menubar>

      <div className="mac-menu-status">
        <button
          type="button"
          onClick={toggleTheme}
          className="mac-menu-status-button"
          aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {resolvedTheme === 'dark' ? (
            <Moon className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <Sun className="h-3.5 w-3.5" aria-hidden="true" />
          )}
        </button>
        <time dateTime={now?.toISOString()} className="mac-menu-time">
          <span className="hidden sm:inline">{desktopTimeLabel}</span>
          <span className="sm:hidden">{timeLabel}</span>
        </time>
      </div>
    </header>
  );
}
