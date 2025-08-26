"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
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
      highlights: ['Developed the complete brand identity, including the logo and all visual assets.', 'Created and executed the content strategy, including posts, media, and promotional materials.', 'Managed all aspects of the social media presence to drive organic growth and engagement.', 'Handled all food photography, styling, and graphic design for the campaign.'],
      gallery: [
        { src: '/portfolio/social-media-campaign/jkbroscombos.png', alt: 'JK Bros Logo', aiHint: 'business logo' },
        { src: '/portfolio/social-media-campaign/banner.png', alt: 'Viral Promo Post', aiHint: 'social media post' },
        { src: '/portfolio/social-media-campaign/posts.jpg', alt: 'Viral Promo Post', aiHint: 'social media post' },
        { src: '/portfolio/social-media-campaign/posts(1).png', alt: 'Viral Promo Post', aiHint: 'social media post' },
        { src: '/portfolio/social-media-campaign/posts(2).png', alt: 'Viral Promo Post', aiHint: 'social media post' },
        { src: '/portfolio/social-media-campaign/posts(3).png', alt: 'Viral Promo Post', aiHint: 'social media post' },
        { src: '/portfolio/social-media-campaign/posts(4).png', alt: 'Viral Promo Post', aiHint: 'social media post' }
      ]
    }
  },
  {
    title: 'Video Advertisement - Snack Bar',
    description: 'Produced a compelling video advertisement for a local snack bar to boost their online presence and attract more customers.',
    image: 'https://picsum.photos/600/400',
    aiHint: 'video production',
    details: {
      role: 'Video Producer & Editor',
      highlights: ['Conceptualized, filmed, and edited a promotional video.', 'Utilized dynamic shots and engaging music to capture audience attention.', 'The video was used across social media platforms to drive engagement.'],
      embed: (
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      gallery: []
    }
  },
  {
    title: 'Absolute Cinema: Cinema Ticketing Website',
    description: 'An academic project featuring a full-stack cinema ticket booking system.',
    image: '/portfolio/absolute-cinema/absolute.png',
    aiHint: 'web development',
    details: {
      role: 'Developer (Academic Project)',
      tech: 'MySQL, PHP, HTML, CSS',
      features: ['User registration and login.', 'Movie browsing and seat selection.', 'Ticket booking and confirmation.', 'Database design and implementation.'],
      gallery: [
        { src: '/portfolio/absolute-cinema/absolute1.png', alt: 'Website Screenshot 1', aiHint: 'website screenshot' },
        { src: '/portfolio/absolute-cinema/absolute2.png', alt: 'Website Screenshot 1', aiHint: 'website screenshot' },
        { src: '/portfolio/absolute-cinema/absolute3.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute4.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute6.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute7.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute8.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute9.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute10.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute11.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute12.png', alt: 'Database Schema', aiHint: 'database schema' },
        { src: '/portfolio/absolute-cinema/absolute13.png', alt: 'Database Schema', aiHint: 'database schema' }
      ]
    }
  },
  {
    title: 'Web App: LET Reviewer',
    description: 'Designed and developed a LET reviewer app and its landing page as a side project for upcoming examinees.',
    image: '/portfolio/let-review/app-preview.png',
    aiHint: 'landing page app',
    details: {
      role: 'Developer (Personal Project)',
      link: 'https://let-review-two.vercel.app/',
      tech: 'Next.js, Tailwind CSS',
      features: ['Designed and developed the app and landing page.', 'Fully responsive design for all devices.', 'Modern UI/UX principles applied.'],
      gallery: [
        { src: '/portfolio/let-review/landing.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' },
        { src: '/portfolio/let-review/app-preview.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' },
        { src: '/portfolio/let-review/feature-challenges.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' },
        { src: '/portfolio/let-review/feature-progress.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' },
        { src: '/portfolio/let-review/feature-reviewer.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' },
        { src: '/portfolio/let-review/feature-timer.png', alt: 'Landing Page Screenshot', aiHint: 'webpage design' }
      ]
    }
  }
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
                      className="rounded-lg object-contain w-full h-auto" 
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
                  {item.details.gallery && item.details.gallery.length > 0 && (
                    <ProjectCarousel item={item} />
                  )}

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
