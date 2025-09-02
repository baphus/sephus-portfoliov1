"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const NextJsLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="black"/>
    <path d="M109.5 118C109.5 123.523 105.023 128 99.5 128H28.5C22.9772 128 18.5 123.523 18.5 118C18.5 112.477 22.9772 108 28.5 108H99.5C105.023 108 109.5 112.477 109.5 118Z" fill="white"/>
    <path d="M43 40.5L85 40.5L85 87.5L71.5 87.5L71.5 54L52 79L43 79L43 40.5Z" fill="white"/>
  </svg>
);


const skills = [
  [
    { name: 'HTML5', logo: 'HTML5' },
    { name: 'CSS3', logo: 'CSS3' },
    { name: 'JavaScript', logo: 'JS' },
    { name: 'TypeScript', logo: 'TS' },
    { name: 'PHP', logo: 'PHP' },
    { name: 'SQL', logo: 'SQL' },
  ],
  [
    { name: 'React', logo: 'React' },
    { name: 'Next.js', logo: <NextJsLogo /> },
    { name: 'Tailwind CSS', logo: 'Tailwind' },
    { name: 'Framer Motion', logo: 'Framer' },
    { name: 'CapCut', logo: 'CapCut' },
  ],
  [
    { name: 'Git', logo: 'Git' },
    { name: 'GitHub', logo: 'GitHub' },
    { name: 'Figma', logo: 'Figma' },
    { name: 'Canva', logo: 'Canva' },
    { name: 'Photoshop', logo: 'PS' },
  ]
];

const SkillKey = ({ skill, isPressed, onMouseDown, onMouseUp, onMouseLeave }: any) => {
  return (
    <div
      className={cn("key", isPressed && "pressed")}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {typeof skill.logo === 'string' ? (
            <span className="text-sm font-bold">{skill.logo}</span>
        ) : (
            skill.logo
        )}
        <span className="text-xs mt-1">{skill.name}</span>
      </div>
    </div>
  );
};

export default function Skills() {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handleMouseDown = (skillName: string) => {
    setPressedKey(skillName);
  };

  const handleMouseUp = () => {
    setPressedKey(null);
  };

  const handleMouseLeave = () => {
    setPressedKey(null);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">
        Skills
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Here are some of the technologies I work with. Go on, give the keys a press!
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
                  isPressed={pressedKey === skill.name}
                  onMouseDown={() => handleMouseDown(skill.name)}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
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
