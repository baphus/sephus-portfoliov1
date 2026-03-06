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
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'BNHS E-Document Request System',
    description: 'A production-ready web application for managing school document requests online, featuring OTP verification, request tracking, and an admin dashboard.',
    image: '/portfolio/bnhs/bnhs (1).png',
    aiHint: 'school system dashboard',
    details: {
      link: 'https://bnhsedocumentrequest.onrender.com',
      role: 'Full-Stack Developer (Academic Project)',
      tech: 'Laravel 12, PHP 8.2+, Blade, Tailwind CSS, Alpine.js, PostgreSQL (Supabase), Heroku',
      features: [
        'Secure email OTP verification for document requests.',
        'Multi-step request form with digital signature capture.',
        'Real-time request tracking for students/alumni.',
        'Comprehensive admin dashboard with statistics and request management.',
        'Role-based access for Admin and Registrar staff.',
        'Automated email notifications for status changes.',
        'Full audit logging for all actions taken on a request.',
      ],
      learnings: [
        'Built a complete, production-ready application from scratch using the Laravel framework.',
        'Implemented a secure authentication flow with rate-limited email OTPs to prevent abuse.',
        'Designed a normalized relational database schema using PostgreSQL to manage complex data relationships.',
        'Developed a feature-rich admin panel with CRUD operations, bulk actions, and data visualization.',
        'Mastered Blade templating with Tailwind CSS and Alpine.js for a responsive and interactive frontend.',
        'Gained hands-on experience deploying a full-stack PHP/Laravel application to a live cloud environment (Heroku).',
        'Implemented an automated audit trail system to log all significant user actions for security and accountability.'
      ],
      gallery: [
        { src: '/portfolio/bnhs/bnhs (1).png', alt: 'Admin Dashboard', aiHint: 'analytics dashboard' },
        { src: '/portfolio/bnhs/bnhs (2).png', alt: 'Document Request Form', aiHint: 'online form' },
        { src: '/portfolio/bnhs/bnhs (3).png', alt: 'Request Tracking Page', aiHint: 'status tracking interface' },
        { src: '/portfolio/bnhs/bnhs (4).png', alt: 'OTP Verification', aiHint: 'security code' },
        { src: '/portfolio/bnhs/bnhs (5).png', alt: 'Request Details View', aiHint: 'data management' },
      ],
    },
  },
  {
    title: 'Medicare Clinic System',
    description: 'A comprehensive clinic management system designed to handle patient records, appointments, and billing for a seamless healthcare experience.',
    image: '/portfolio/medicare-clinic/landing.jpg',
    aiHint: 'clinic management system',
    details: {
      role: 'Full-Stack Developer (Academic Project)',
      link: 'https://medicare-clinic-18889ef8f83d.herokuapp.com/',
      tech: 'PHP, PDO, Supabase (Postgres), REST API, Cloudinary, HTML, CSS, JavaScript, Bootstrap',
      features: [
        'Secure user authentication and role-based access control (Admin, Doctor, Patient).',
        'Dynamic appointment scheduling and management.',
        'Patient information and medical history management.',
        'Admin dashboard for system-wide oversight.',
      ],
      learnings: [
        'Applied Object-Oriented Programming (OOP) principles and class-based structures to create a modular and maintainable codebase.',
        'Implemented a custom routing system to understand the fundamentals of the MVC (Model-View-Controller) pattern.',
        'Utilized PHP Data Objects (PDO) for secure and prepared statement-based database interactions, preventing SQL injection.',
        'Gained experience in deploying a full-stack PHP application to a live server environment (Heroku).',
        'Designed and managed a relational database schema in a Supabase Postgres environment to handle complex data relationships.',
        'Gained hands-on experience designing and consuming RESTful APIs for client-server communication.',
        'Integrated Cloudinary for efficient cloud-based image and media management, including storage and delivery.',
      ],
      gallery: [
        { src: '/portfolio/medicare-clinic/landing.jpg', alt: 'Medicare Clinic Landing Page', aiHint: 'web application landing page' },
        { src: '/portfolio/medicare-clinic/dashboard.png', alt: 'Admin Dashboard', aiHint: 'dashboard analytics' },
        { src: '/portfolio/medicare-clinic/dashboard2.png', alt: 'Admin Dashboard', aiHint: 'dashboard analytics' },
        { src: '/portfolio/medicare-clinic/appointments.png', alt: 'Appointments Page', aiHint: 'calendar application' },
        { src: '/portfolio/medicare-clinic/patients.png', alt: 'Patient Records', aiHint: 'data table' },
        { src: '/portfolio/medicare-clinic/register.png', alt: 'Patient Records', aiHint: 'data table' },
        { src: '/portfolio/medicare-clinic/patient-dashboard.png', alt: 'Patient Records', aiHint: 'data table' },

      ],
    },
  },
  {
    title: 'Social Media Campaign – JK Bros Combos',
    description: 'Managed a comprehensive social media campaign, handling all content creation, media production, and day-to-day management for a family food business.',
    image: '/portfolio/social-media-campaign/banner.png',
    aiHint: 'social media marketing',
    details: {
      role: 'Social Media Manager & Creative Designer',
      duration: 'April 21, 2025 - August 24, 2025',
      stats: [
        { label: 'Total Views', value: '5,156' },
        { label: 'Unique Reach', value: '2,260' },
        { label: 'Interactions', value: '121' },
        { label: 'Peak Single Post', value: '971' },
        { label: 'Engagement Rate', value: '2.3%' },
      ],
      learnings: [
        'Brand Development: Created a complete brand identity from scratch, establishing a consistent and recognizable visual presence.',
        'Content Strategy: Developed and executed a content calendar, learning how to tailor posts to drive organic growth and audience engagement.',
        'Community Management: Actively managed the social media presence, responding to comments and messages to build a loyal community.',
        'Visual Production: Handled all food photography, styling, and graphic design, learning to produce high-quality visuals for marketing.',
        'Performance Analysis: Tracked key metrics to measure campaign success and inform future content decisions.',
      ],
      gallery: [
        { src: '/portfolio/social-media-campaign/jkbroscombos.png', alt: 'JK Bros Logo', aiHint: 'business logo' },
        { src: '/portfolio/social-media-campaign/banner.png', alt: 'Viral Promo Post', aiHint: 'social media post' },
        { src: '/portfolio/social-media-campaign/posts.jpg', alt: 'Content Example', aiHint: 'social media content' },
        { src: '/portfolio/social-media-campaign/posts(1).png', alt: 'Content Example', aiHint: 'social media content' },
        { src: '/portfolio/social-media-campaign/posts(2).png', alt: 'Content Example', aiHint: 'social media content' },
      ],
    },
  },
  {
    title: 'Video Advertisement - Sci High Pi',
    description: 'Produced a compelling video advertisement for a local snack bar, "Sci High Pi", using CapCut to boost their online presence and attract more customers.',
    image: '/portfolio/video-ad/thumbnail.png',
    aiHint: 'video production',
    details: {
      role: 'Video Producer & Editor (CapCut)',
      learnings: [
        'End-to-End Video Production: Managed the entire creation process, from concept and storyboarding to filming and final editing.',
        'Editing for Engagement: Utilized dynamic cuts, pacing, and engaging music in CapCut to capture and retain audience attention on social media.',
        'Promotional Storytelling: Learned to craft a short, compelling narrative that effectively promoted the product and brand.',
      ],
      embed: (
        <div className="aspect-video w-full">
          <video
            className="w-full h-full rounded-lg"
            src="/portfolio/video-ad/videoo.mp4"
            title="Sci High Pi Advertisement"
            controls
            autoPlay
            loop
          />
        </div>
      ),
      gallery: [],
    },
  },
  {
    title: 'Absolute Cinema: Cinema Ticketing Website',
    description: 'An academic project featuring a full-stack cinema ticket booking system with user authentication and seat selection.',
    image: '/portfolio/absolute-cinema/absolute.png',
    aiHint: 'web development',
    details: {
      role: 'Full-Stack Developer (Academic Project)',
      tech: 'MySQL, PHP, HTML, CSS',
      features: ['User registration and login.', 'Movie browsing and seat selection.', 'Ticket booking and confirmation.', 'Admin panel for movie management.'],
      learnings: [
        'Full-Stack Integration: Gained experience in connecting a front-end interface with a server-side backend and a database.',
        'Database Design & Management: Designed a relational database schema using MySQL to manage movies, showtimes, and bookings.',
        'Server-Side Logic: Implemented core application logic using PHP to handle user requests and data processing.',
        'User Authentication: Built a secure user registration and login system from scratch.',
      ],
      gallery: [
        { src: '/portfolio/absolute-cinema/absolute1.png', alt: 'Website Screenshot 1', aiHint: 'website screenshot' },
        { src: '/portfolio/absolute-cinema/absolute2.png', alt: 'Website Screenshot 2', aiHint: 'website screenshot' },
        { src: '/portfolio/absolute-cinema/absolute3.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute8.png', alt: 'Seat Selection UI', aiHint: 'user interface booking' },
        { src: '/portfolio/absolute-cinema/absolute10.png', alt: 'Booking Confirmation', aiHint: 'confirmation ticket' },
      ],
    },
  },
  {
    title: 'Web App: LET Reviewer',
    description: 'Designed and developed a responsive LET reviewer app and its landing page as a personal project to help aspiring teachers.',
    image: '/portfolio/let-review/app-preview.png',
    aiHint: 'landing page app',
    details: {
      role: 'Developer & UI/UX Designer (Personal Project)',
      link: 'https://sephus-let-review.vercel.app/',
      tech: 'Next.js, Tailwind CSS',
      features: ['Clean, modern landing page to attract users.', 'Fully responsive web app for practice tests.', 'Intuitive UI for a seamless user experience.'],
      learnings: [
        'Modern Front-End Frameworks: Gained proficiency in Next.js for building performant, server-rendered React applications.',
        'Utility-First CSS: Mastered Tailwind CSS for rapidly building custom, responsive, and maintainable user interfaces.',
        'UI/UX Design Principles: Applied modern design principles to create an aesthetically pleasing and user-friendly experience from scratch.',
        'Deployment & Vercel: Learned to deploy a Next.js application to a global CDN via Vercel, ensuring fast load times.',
      ],
      gallery: [
        { src: '/portfolio/let-review/landing.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' },
        { src: '/portfolio/let-review/app-preview.png', alt: 'App Preview', aiHint: 'mobile application' },
        { src: '/portfolio/let-review/feature-challenges.png', alt: 'Challenges Feature', aiHint: 'app feature' },
        { src: '/portfolio/let-review/feature-progress.png', alt: 'Progress Tracking Feature', aiHint: 'analytics dashboard' },
        { src: '/portfolio/let-review/feature-reviewer.png', alt: 'Reviewer Mode', aiHint: 'reading interface' },
      ],
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
                <Card>
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
      <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">My Portfolio</h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Here's a selection of my work. Click on any project to see more details.
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
                <div className="portfolio-card w-full h-64">
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
            <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline">{item.title}</DialogTitle>
                <DialogDescription>
                  {item.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 grid gap-6">
                {(item.details.gallery && item.details.gallery.length > 0) ? (
                  <ProjectCarousel item={item} />
                ) : item.details.embed ? (
                  <div className="mt-4">{item.details.embed}</div>
                ) : null}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {item.details.role && <p><strong>Role:</strong> {item.details.role}</p>}
                    {item.details.duration && <p><strong>Duration:</strong> {item.details.duration}</p>}
                    {item.details.tech && <p><strong>Technology:</strong> {item.details.tech}</p>}
                    {item.details.link && (
                      <Button asChild>
                        <a href={item.details.link} target="_blank" rel="noopener noreferrer">
                          Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  {item.details.stats && (
                    <div className="text-center">
                      <h3 className="font-semibold mb-2">Campaign Stats:</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {item.details.stats.map(stat => (
                          <div key={stat.label} className="bg-secondary/50 p-3 rounded-lg">
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {item.details.features && (
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {item.details.features.map((feature, i) => <li key={i}>{feature}</li>)}
                    </ul>
                  </div>
                )}
                
                {item.details.learnings && (
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Key Learnings & Principles</h3>
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
