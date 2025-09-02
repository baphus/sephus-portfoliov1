"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';

const NextJsLogo = () => (
  <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  [
    { name: 'HTML5', logo: '🌐', overview: 'HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages. I use it to structure the content of all my web projects, ensuring they are semantic and accessible.' },
    { name: 'CSS3', logo: '🎨', overview: 'CSS3 is the latest evolution of the Cascading Style Sheets language. I use it to style my websites, creating responsive layouts and engaging user interfaces. I am proficient in modern CSS features like Flexbox, Grid, and custom properties.' },
    { name: 'JavaScript', logo: 'JS', overview: 'JavaScript is a programming language that enables interactive web pages. I use it to create dynamic and responsive user experiences, from simple animations to complex single-page applications.' },
    { name: 'TypeScript', logo: 'TS', overview: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. I use it in my projects to improve code quality, readability, and maintainability by catching errors during development.' },
    { name: 'PHP', logo: '🐘', overview: 'PHP is a server-side scripting language designed for web development. I have experience using it to build the backend of web applications, such as the Absolute Cinema ticketing website, handling form data and database interactions.' },
    { name: 'SQL', logo: '💾', overview: 'SQL (Structured Query Language) is a standard language for managing relational databases. I have used it extensively in projects like the Cinema Ticketing System to design schemas and manage data with MySQL.' },
  ],
  [
    { name: 'React', logo: '⚛️', overview: 'React is a JavaScript library for building user interfaces. I use it to create reusable UI components and build complex, stateful applications like this portfolio itself.' },
    { name: 'Next.js', logo: <NextJsLogo />, overview: 'Next.js is a React framework for production. I use it to build server-rendered applications, static websites, and more. This portfolio is built with Next.js to leverage its performance and SEO benefits.' },
    { name: 'Tailwind CSS', logo: '💨', overview: 'Tailwind CSS is a utility-first CSS framework. I use it to rapidly build custom user interfaces without leaving my HTML. The styling for this portfolio was done primarily with Tailwind CSS.' },
    { name: 'Framer Motion', logo: '✨', overview: 'Framer Motion is a React animation library. I use it to add fluid animations and micro-interactions to my projects, like the page transitions and component animations you see throughout this site.' },
    { name: 'CapCut', logo: '🎬', overview: 'CapCut is a versatile video editing application. I use it for producing and editing video content for social media campaigns, such as the advertisement for Sci High Pi, focusing on creating engaging and dynamic visuals.' },
  ],
  [
    { name: 'Git', logo: '🔀', overview: 'Git is a distributed version control system. I use it for tracking changes in my codebase, collaborating with others, and managing project versions. All my projects are managed with Git.' },
    { name: 'GitHub', logo: '🐙', overview: 'GitHub is a platform for hosting and collaborating on Git repositories. I use it to host my project repositories, manage issues, and showcase my work to the public.' },
    { name: 'Figma', logo: '🖋️', overview: 'Figma is a collaborative interface design tool. I use it to design wireframes, mockups, and prototypes for my web projects, ensuring a solid design foundation before development begins.' },
    { name: 'Canva', logo: '🖼️', overview: 'Canva is a graphic design platform. I use it to quickly create visual assets for social media, presentations, and websites, like some of the graphics for the JK Bros Combos campaign.' },
    { name: 'Photoshop', logo: 'PS', overview: 'Adobe Photoshop is a powerful raster graphics editor. I use it for more advanced photo editing, manipulation, and graphic design tasks that require more control than other tools offer.' },
  ]
];

const SkillKey = ({ skill }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="key">
          <div className="flex flex-col items-center justify-center h-full">
            {typeof skill.logo === 'string' ? (
              <span className="text-2xl">{skill.logo}</span>
            ) : (
              skill.logo
            )}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            {typeof skill.logo === 'string' ? (
                <span className="text-3xl">{skill.logo}</span>
            ) : (
                React.cloneElement(skill.logo, { width: 32, height: 32})
            )}
            {skill.name}
          </DialogTitle>
          <DialogDescription className="pt-4 text-base">
            {skill.overview}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default function Skills() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">
        Skills
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Here are some of the technologies I work with. Go on, click on a key!
      </p>
      <div className="mt-12 flex justify-center">
        <div className="skills-keyboard">
          {skills.map((row, rowIndex) => (
            <motion.div 
              key={rowIndex} 
              className="row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
            >
              {row.map((skill) => (
                <SkillKey
                  key={skill.name}
                  skill={skill}
                />
              ))}
            </motion.div>
          ))}
          <motion.div 
            className="row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: skills.length * 0.1 }}
          >
            <div className="key space">
              Creative & Technical Skills
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
