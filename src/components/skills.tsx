"use client";

import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const NextJsLogo = ({ className }: { className?: string }) => (
  <svg className={className} width="100%" height="100%" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="currentColor"/>
    <path d="M109.5 118C109.5 123.523 105.023 128 99.5 128H28.5C22.9772 128 18.5 123.523 18.5 118C18.5 112.477 22.9772 108 28.5 108H99.5C105.023 108 109.5 112.477 109.5 118Z" fill="var(--color-background)"/>
    <path d="M43 40.5L85 40.5L85 87.5L71.5 87.5L71.5 54L52 79L43 79L43 40.5Z" fill="var(--color-background)"/>
    <style jsx>{`
      svg {
        color: hsl(var(--foreground));
      }
      .dark svg {
        color: hsl(var(--background));
      }
      path {
        fill: hsl(var(--background));
      }
      .dark path {
        fill: hsl(var(--foreground));
      }
    `}</style>
  </svg>
);

const skills = [
  {
    title: 'HTML5',
    description: 'Structuring web content semantically and accessibly.',
    icon: <span className="text-4xl">🌐</span>,
  },
  {
    title: 'CSS3',
    description: 'Styling websites with responsive layouts and modern features.',
    icon: <span className="text-4xl">🎨</span>,
  },
  {
    title: 'JavaScript',
    description: 'Creating dynamic and interactive user experiences.',
    icon: <span className="text-4xl font-bold">JS</span>,
  },
  {
    title: 'TypeScript',
    description: 'Improving code quality with static typing.',
    icon: <span className="text-4xl font-bold">TS</span>,
  },
  {
    title: 'PHP',
    description: 'Building server-side logic and handling database interactions.',
    icon: <span className="text-4xl">🐘</span>,
  },
  {
    title: 'SQL',
    description: 'Designing and managing relational databases with MySQL.',
    icon: <span className="text-4xl">💾</span>,
  },
  {
    title: 'React',
    description: 'Building complex UIs with reusable components.',
    icon: <span className="text-4xl">⚛️</span>,
  },
  {
    title: 'Next.js',
    description: 'Building performant, server-rendered React applications.',
    icon: <NextJsLogo className="h-10 w-10" />,
  },
  {
    title: 'Tailwind CSS',
    description: 'Rapidly building custom designs with a utility-first workflow.',
    icon: <span className="text-4xl">💨</span>,
  },
  {
    title: 'Framer Motion',
    description: 'Adding fluid animations and micro-interactions.',
    icon: <span className="text-4xl">✨</span>,
  },
  {
    title: 'Git & GitHub',
    description: 'Managing code versions and collaborating on projects.',
    icon: <span className="text-4xl">🐙</span>,
  },
  {
    title: 'Figma',
    description: 'Designing and prototyping user interfaces.',
    icon: <span className="text-4xl">🖋️</span>,
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">
        Skills
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        A look at the technologies, languages, and tools I use to bring ideas to life.
      </p>
      <div className="max-w-5xl mx-auto py-10">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
