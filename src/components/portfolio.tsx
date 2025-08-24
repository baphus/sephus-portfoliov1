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
    title: 'Social Media Campaign – JK Bros Combos',
    description: 'Managed a 4-week social media campaign and designed all creative assets for a family food business.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'social media marketing',
    details: {
      role: 'Social Media Manager & Creative Designer',
      duration: 'April 21, 2025 - Present',
      stats: [
        { label: 'Total Views', value: '5,156' },
        { label: 'Unique Reach', value: '2,260' },
        { label: 'Interactions', value: '121' },
        { label: 'Peak Single Post', value: '971' },
        { label: 'Engagement Rate', value: '2.3%' },
      ],
      highlights: ['Developed complete brand identity including logo.', 'Created and executed the full content calendar.', 'Managed organic growth strategy with zero ad spend.', 'Produced all food photography and promotional graphics.'],
      gallery: [
        { src: 'https://placehold.co/400x300.png', alt: 'JK Bros Logo', aiHint: 'business logo' },
        { src: 'https://placehold.co/400x300.png', alt: 'Viral Promo Post', aiHint: 'social media post' }
      ]
    }
  },
  {
    title: 'Web Project: Cinema Ticketing Website',
    description: 'An academic project featuring a full-stack cinema ticket booking system.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'web development',
    details: {
      role: 'Developer (Academic Project)',
      tech: 'MySQL, PHP, HTML, CSS',
      features: ['User registration and login.', 'Movie browsing and seat selection.', 'Ticket booking and confirmation.', 'Database design and implementation.'],
      gallery: [
        { src: 'https://placehold.co/600x400.png', alt: 'Website Screenshot 1', aiHint: 'website screenshot' },
        { src: 'https://placehold.co/600x400.png', alt: 'Database Schema', aiHint: 'database schema' }
      ]
    }
  },
  {
    title: 'Web App: LET Reviewer',
    description: 'Designed and developed a LET reviewer app and its landing page as a side project for upcoming examinees.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'landing page app',
    details: {
      role: 'Developer (Personal Project)',
      link: 'https://let-review-two.vercel.app/',
      tech: 'Next.js, Tailwind CSS',
      features: ['Designed and developed the app and landing page.', 'Fully responsive design for all devices.', 'Modern UI/UX principles applied.'],
      gallery: [{ src: 'https://placehold.co/600x400.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' }]
    }
  },
  {
    title: 'Professional Interviews',
    description: 'Interviewed a Project Manager and a Lead Executive, gaining valuable industry insights.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'professional interview',
    details: {
      role: 'Interviewer & Researcher',
      tasks: [
        'Interviewed a Project Manager from Chowis Co. Ltd.',
        'Interviewed a Lead Executive from Ishmael Enterprises & Dormitory Incorporated.',
        'Gained valuable insights into project management and business leadership.',
        'Enhanced communication and public speaking skills.'
      ]
    }
  },
  {
    title: 'High School Business Project - Marketing Video',
    description: 'Created a marketing video edit for a high school business project selling food and snacks.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'marketing video',
    details: {
      role: 'Video Editor',
      tasks: [
        'Developed concept and storyboard for the marketing video.',
        'Edited and produced the final video to promote the business project.',
      ],
      embed: <div className="aspect-video bg-muted rounded-lg flex items-center justify-center"><p>Marketing Video Placeholder</p></div>
    }
  }
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
