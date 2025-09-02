
"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import HolographicCard from './holographic-card';
import Typewriter from 'typewriter-effect';

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" 
    }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  },
};


export default function Hero() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const [animationsStarted, setAnimationsStarted] = useState(false);
  const [headlineFinished, setHeadlineFinished] = useState(false);
  const cardControls = useAnimation();
  const fadeInControls = useAnimation();

  const handleTypingComplete = () => {
    setAnimationsStarted(true);
    cardControls.start("visible");
    fadeInControls.start("visible");
  };

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.8]);

  return (
    <section ref={targetRef} id="home" className="relative h-screen w-full">
      <div className="sticky top-0 flex h-full w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: textY, opacity, scale }}
          className="container mx-auto px-4 md:px-6 text-center space-y-8 z-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-8xl lg:text-9xl font-headline">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi, I'm ")
                      .typeString('<strong>Josephus</strong>')
                      .callFunction(() => {
                        setHeadlineFinished(true);
                        handleTypingComplete();
                      })
                      .start();
                  }}
                  options={{
                    cursor: '_',
                    delay: 100,
                  }}
                />
              </h1>
              <div 
                className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl max-w-lg mx-auto md:mx-0"
              >
                <Typewriter
                  options={{
                    strings: [
                      'Web Developer',
                      'Digital Creator',
                      'Video Editor',
                      'Systems Designer',
                      'Problem Solver',
                      'Team Player',
                      'Creative Thinker',
                      'Tech Enthusiast',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
               <motion.div
                className="mt-10 flex items-center justify-center md:justify-start gap-x-6"
                variants={fadeIn}
                initial="hidden"
                animate={fadeInControls}
              >
                <Button asChild size="lg">
                  <a href="/Josephus_Sarsonas_Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-background/50 hover:bg-background/80">
                  <a href="#about">
                    Learn More
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              style={{ y: cardY }} 
              variants={cardVariants} 
              initial="hidden" 
              animate={cardControls}
              className="relative md:-mt-8"
            >
              <HolographicCard />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-secondary/50 to-background" />
      </div>
    </section>
  );
}
