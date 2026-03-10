
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from './ui/button';
import { ArrowUpRight, ShieldCheck, Gamepad2, LayoutDashboard } from 'lucide-react';

const portfolioItems = [
  {
    title: 'LETReview — Gamified Licensure Exam Reviewer',
    description: 'A Next.js-based gamified platform for aspiring teachers, featuring real-time analytics and practice tests.',
    image: 'https://picsum.photos/seed/let1/800/600',
    aiHint: 'gamified learning app',
    details: {
      role: 'Full-Stack Developer',
      link: 'https://studio--letreview.us-central1.hosted.app/',
      tech: 'Next.js, React, Tailwind CSS, Firebase (Auth, OAuth, Analytics, Firestore)',
      features: [
        'Secure user authentication with Google OAuth.',
        'Gamified practice tests with instant feedback.',
        'Real-time user progress tracking and analytics.',
        'Mobile-first responsive design.',
      ],
      learnings: [
        'Mastered Firebase integration for real-time data and authentication.',
        'Implemented gamification principles to increase user engagement.',
        'Deployed to Firebase Hosting with automated analytics tracking.',
      ],
      gallery: [
        { src: 'https://picsum.photos/seed/let2/600/400', alt: 'App Preview', aiHint: 'mobile application' },
        { src: 'https://picsum.photos/seed/let3/600/400', alt: 'Progress Tracking', aiHint: 'analytics dashboard' },
      ],
    },
  },
  {
    title: 'BNHS E-Document Request System',
    description: 'A production-ready system for school document management with OTP verification and real-time tracking.',
    image: 'https://picsum.photos/seed/bnhs1/800/600',
    aiHint: 'school management system',
    details: {
      role: 'Full-Stack Developer',
      link: 'https://onhsedocumentrequest.onrender.com/',
      tech: 'PHP Laravel, PostgreSQL (Neon), PHPMailer queue workers, Cloudinary, Render',
      features: [
        'Secure email OTP verification for document requests.',
        'Real-time request tracking using custom tracking IDs.',
        'Automated email notifications via PHPMailer queue workers.',
        'Comprehensive admin panel for status management and audit logs.',
      ],
      learnings: [
        'Developed production-ready Laravel applications with database queues.',
        'Managed cloud hosting on Render with PostgreSQL integration.',
        'Implemented audit trails to log significant user and admin actions.',
      ],
      gallery: [
        { src: 'https://picsum.photos/seed/bnhs2/600/400', alt: 'Admin Dashboard', aiHint: 'analytics dashboard' },
        { src: 'https://picsum.photos/seed/bnhs3/600/400', alt: 'Request Tracking', aiHint: 'status tracking' },
      ],
    },
  },
  {
    title: 'Normalite - Everyday Guide to Excellence',
    description: 'A React-based web platform currently in user testing, designed to guide students toward academic excellence.',
    image: 'https://picsum.photos/seed/norm1/800/600',
    aiHint: 'educational guide portal',
    details: {
      role: 'Full-Stack Developer',
      link: 'https://normalite-edge.vercel.app/',
      tech: 'React, Tailwind CSS, Vercel',
      features: [
        'Interactive resource guide for university students.',
        'Currently in user testing and active debugging stage.',
        'Optimized for fast performance on Vercel deployment.',
      ],
      learnings: [
        'Gained experience in identifying and resolving frontend bugs during user testing.',
        'Practiced collaborative system development and client feedback loops.',
      ],
      gallery: [],
    },
  },
  {
    title: 'Medicare Clinic System',
    description: 'A comprehensive clinic management system for patient records, appointments, and billing.',
    image: 'https://picsum.photos/seed/med1/800/600',
    aiHint: 'clinic management system',
    details: {
      role: 'Full-Stack Developer',
      link: 'https://medicare-clinic-18889ef8f83d.herokuapp.com/',
      tech: 'PHP, PDO, Supabase (Postgres), REST API, Cloudinary, Bootstrap',
      features: [
        'Secure role-based access control (Admin, Doctor, Patient).',
        'Dynamic appointment scheduling and medical history tracking.',
        'Cloud-based image management with Cloudinary.',
      ],
      learnings: [
        'Applied OOP principles to create a modular and maintainable codebase.',
        'Utilized PDO for secure, prepared statement-based database interactions.',
        'Integrated Supabase Postgres for relational data management.',
      ],
      gallery: [],
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCarousel({ item }: { item: (typeof portfolioItems)[0] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-2xl mx-auto">
       <Carousel 
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {item.details.gallery && item.details.gallery.map((img, imgIndex) => (
            <CarouselItem key={`${item.title}-img-${imgIndex}`}>
              <div className="p-1">
                <Card className="border-border">
                  <CardContent className="flex items-center justify-center p-0">
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      width={600} 
                      height={400}
                      className="rounded-lg object-contain w-full h-auto max-h-[60vh]" 
                      data-ai-hint={img.aiHint} 
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center items-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === current - 1 ? "w-4 bg-primary" : "bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">Technical Projects & Systems</h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        A selection of deployed web applications where I diagnosed issues, assisted users, and maintained system stability.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {portfolioItems.map((item, index) => (
          <Dialog key={item.title}>
            <DialogTrigger asChild>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer"
              >
                <div className="portfolio-card w-full h-64 border-border">
                  <div className="portfolio-card__image-container w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      data-ai-hint={item.aiHint}
                    />
                  </div>
                  <div className="portfolio-card__content">
                    <p className="portfolio-card__title">{item.title}</p>
                    <p className="portfolio-card__description">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border-border">
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline">{item.title}</DialogTitle>
                <DialogDescription>
                  {item.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 grid gap-6">
                {(item.details.gallery && item.details.gallery.length > 0) ? (
                  <ProjectCarousel item={item} />
                ) : null}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {item.details.role && <p><strong>Role:</strong> {item.details.role}</p>}
                    {item.details.tech && <p><strong>Technology:</strong> {item.details.tech}</p>}
                    {item.details.link && (
                      <Button asChild className="btn-aqua btn-aqua-primary border-none shadow-none">
                        <a href={item.details.link} target="_blank" rel="noopener noreferrer">
                          <span>Visit System <ArrowUpRight className="ml-2 h-4 w-4" /></span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {item.details.features && (
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">System Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {item.details.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                  </div>
                )}
                
                {item.details.learnings && (
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Technical Support & Development Learnings</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {item.details.learnings.map((learning, i) => <li key={i}>{learning}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
