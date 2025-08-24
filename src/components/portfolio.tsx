"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Video Editing – The English Home',
    description: 'Freelance video editor for an English tutoring company.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'video editing',
    details: {
      role: 'Video Editor',
      tasks: ['Edited tutoring sessions for promotional materials.', 'Created engaging social media video clips.', 'Ensured consistent branding across all video content.'],
      embed: <div className="aspect-video bg-muted rounded-lg flex items-center justify-center"><p>Video Placeholder</p></div>
    }
  },
  {
    title: 'Social Media Campaign – JK Bros Combos',
    description: 'Managed social media and designed creative assets.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'social media',
    details: {
      role: 'Social Media Manager & Creative Designer',
      duration: 'July 26 – Aug 22, 2025',
      stats: [
        { label: 'Followers', value: '+4' },
        { label: 'Visits', value: '113' },
        { label: 'Interactions', value: '29' },
        { label: 'Reach', value: '322' },
        { label: 'Views', value: '1,026' },
      ],
      highlights: ['Created the official business logo.', 'Designed all graphic materials for the campaign.', 'Managed organic content strategy and growth.']
    }
  },
  {
    title: 'Creative Ads & Family Business',
    description: 'Designed promotional graphics for a family-owned business.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'graphic design',
    details: {
      role: 'Creative Designer',
      tasks: ['Designed posters, flyers, and digital ads.', 'Developed a cohesive visual identity for the business.'],
      gallery: [
        { src: 'https://placehold.co/400x300.png', alt: 'Ad 1', aiHint: 'business ad' },
        { src: 'https://placehold.co/400x300.png', alt: 'Ad 2', aiHint: 'product flyer' }
      ]
    }
  },
  {
    title: 'Web Project: Cinema Ticketing Website',
    description: 'An academic project featuring a cinema ticket booking system.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'web development',
    details: {
      role: 'Developer (Academic Project)',
      tech: 'MySQL, PHP, HTML, CSS',
      features: ['User registration and login.', 'Movie browsing and seat selection.', 'Ticket booking and confirmation.'],
      gallery: [
        { src: 'https://placehold.co/600x400.png', alt: 'Website Screenshot 1', aiHint: 'website screenshot' },
        { src: 'https://placehold.co/600x400.png', alt: 'Website Screenshot 2', aiHint: 'database schema' }
      ]
    }
  },
  {
    title: 'Web Project: Landing Page App',
    description: 'A responsive landing page built with modern web technologies.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'landing page',
    details: {
      role: 'Developer (Personal Project)',
      link: 'https://let-review-two.vercel.app/',
      features: ['Fully responsive design.', 'Built with Next.js and Tailwind CSS.'],
      gallery: [{ src: 'https://placehold.co/600x400.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' }]
    }
  },
  {
    title: 'Academic Work & Presentations',
    description: 'Various presentations and academic projects.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'presentation slides',
    details: {
      role: 'Student & Project Manager',
      tools: ['Canva', 'MS PowerPoint', 'Prezi', 'Google Slides'],
      tasks: ['Led team for a Project Manager Interview project.', 'Designed numerous academic presentations.'],
      gallery: [{ src: 'https://placehold.co/600x400.png', alt: 'Presentation Slide', aiHint: 'infographic slide' }]
    }
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">My Portfolio</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Here's a selection of my work. Click on any project to see more details.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="cursor-pointer"
                >
                  <Card className="h-full overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl">
                    <CardContent className="p-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={item.aiHint}
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-headline">{item.title}</DialogTitle>
                  <DialogDescription>
                    {item.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  {item.details.role && <p><strong>Role:</strong> {item.details.role}</p>}
                  {item.details.duration && <p><strong>Duration:</strong> {item.details.duration}</p>}
                  {item.details.tech && <p><strong>Technology:</strong> {item.details.tech}</p>}
                  {item.details.tools && <p><strong>Tools:</strong> {item.details.tools.join(', ')}</p>}
                  
                  {item.details.stats && (
                    <div>
                      <h3 className="font-semibold mb-2">Campaign Stats:</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
                        {item.details.stats.map(stat => (
                          <div key={stat.label} className="bg-secondary p-3 rounded-lg">
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.details.tasks && (
                    <div>
                      <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {item.details.tasks.map(task => <li key={task}>{task}</li>)}
                      </ul>
                    </div>
                  )}

                  {item.details.features && (
                    <div>
                      <h3 className="font-semibold mb-2">Features:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {item.details.features.map(feature => <li key={feature}>{feature}</li>)}
                      </ul>
                    </div>
                  )}

                  {item.details.highlights && (
                    <div>
                      <h3 className="font-semibold mb-2">Highlights:</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {item.details.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    </div>
                  )}

                  {item.details.embed && <div className="mt-4">{item.details.embed}</div>}
                  
                  {item.details.gallery && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.details.gallery.map((img, imgIndex) => (
                        <Image key={`${img.src}-${imgIndex}`} src={img.src} alt={img.alt} width={400} height={300} className="rounded-lg object-cover" data-ai-hint={img.aiHint} />
                      ))}
                    </div>
                  )}

                  {item.details.link && (
                    <Button asChild>
                      <a href={item.details.link} target="_blank" rel="noopener noreferrer">
                        Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
