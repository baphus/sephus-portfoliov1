
"use client";

import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Atom, Database, Figma, Github, Palette, Code, Wind, Zap, Wrench, Network, Terminal, Box, Cloud, Server } from 'lucide-react';

const Html5Logo = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <title>HTML5</title>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-15.292-.002.402 4.628L17.23 9.03l-.233 2.622H5.43l.33 3.725 6.219.002.329 3.718-2.14.575-.232-2.622H5.151l.402 4.628 6.444 1.812.003-2.222-3.96-.992.23-2.622h8.232l-.734 8.194-6.44 1.814-6.444-1.813-.934-10.532h16.22l.468-5.248H3.328l-.402-4.628h21.056l-1.912 21.563-8.567 2.438-8.565-2.438L1.5 0h21l-.931 10.5-10.04.002.233-2.623z" />
  </svg>
);

const Css3Logo = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
    <title>CSS3</title>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.438 4.313H5.062l.33 3.725h13.219l-.33 3.719H5.722l.33 3.725h12.56L17.23 9.03l-5.249 1.414-5.25-1.414-.232-2.622h15.432l.468-5.25h-1.48l-.468 5.25h-15.43l-.403-4.625h16.22l.403 4.625z" />
  </svg>
);

const PhpLogo = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}><title>PHP</title><path d="M12 1.472c-2.078 0-3.93.99-5.112 2.658C4.945 6.43.003 12.82.003 12.82c5.442.23 7.842-3.13 9.42-5.405 1.577-2.275 2.22-2.827 2.574-2.827.355 0 .997.552 2.574 2.827 1.577 2.275 3.977 5.635 9.42 5.405 0 0-4.942-6.39-6.905-8.69C15.93.99 14.078 1.472 12 1.472zm-1.83 10.82c-3.175.132-5.462 2.61-5.462 5.82 0 3.208 2.287 5.82 5.462 5.82 2.66 0 4.14-1.25 4.14-1.25s-1.83 1.29-3.48 1.25c-1.65-.04-2.205-1.04-2.205-1.93s.555-1.84 2.205-1.93c1.65-.09 3.48 1.25 3.48 1.25s-1.48-1.25-4.14-1.25zm7.32 0c-3.175.132-5.462 2.61-5.462 5.82 0 3.208 2.287 5.82 5.462 5.82 2.66 0 4.14-1.25 4.14-1.25s-1.83 1.29-3.48 1.25c-1.65-.04-2.205-1.04-2.205-1.93s.555-1.84 2.205-1.93c1.65-.09 3.48 1.25 3.48 1.25s-1.48-1.25-4.14-1.25z"/></svg>
);

const NextJsLogo = ({ className }: { className?: string }) => (
  <svg className={className} width="100%" height="100%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="currentColor"/>
    <path d="M109.5 118C109.5 123.523 105.023 128 99.5 128H28.5C22.9772 128 18.5 123.523 18.5 118C18.5 112.477 22.9772 108 28.5 108H99.5C105.023 108 109.5 112.477 109.5 118Z" fill="white"/>
    <path d="M43 40.5L85 40.5L85 87.5L71.5 87.5L71.5 54L52 79L43 79L43 40.5Z" fill="white"/>
  </svg>
);

const skills = [
  {
    title: 'Technical Support',
    description: 'Issue diagnosis, reproduction, documentation, and user assistance via various channels.',
    icon: <Wrench className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Networking',
    description: 'Basic concepts including IP addressing, DNS, DHCP, LAN connectivity, and FTP.',
    icon: <Network className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Dev Tools & OS',
    description: 'Windows Subsystem for Linux (WSL), NPM, Docker, and Browser environments.',
    icon: <Terminal className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Cloud Platforms',
    description: 'Deploying and maintaining systems on Firebase, Render, Vercel, and Supabase.',
    icon: <Cloud className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Laravel (PHP)',
    description: 'Building production-ready applications with PHP 8.2+ and Laravel Breeze.',
    icon: <PhpLogo className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Next.js & React',
    description: 'Building performant, server-rendered applications with modern React patterns.',
    icon: <NextJsLogo className="h-10 w-10" />,
  },
  {
    title: 'Databases',
    description: 'Relational database management with PostgreSQL, MySQL, AWS RDS, and Prisma.',
    icon: <Database className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Tailwind CSS',
    description: 'Rapidly building custom, responsive designs with a utility-first workflow.',
    icon: <Wind className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Git & GitHub',
    description: 'Code versioning, collaboration, and repository management.',
    icon: <Github className="h-10 w-10 text-primary" />,
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">
        Technical Proficiencies
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        A look at the technologies, languages, and support tools I use to build and maintain digital systems.
      </p>
      <div className="max-w-5xl mx-auto py-10">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
