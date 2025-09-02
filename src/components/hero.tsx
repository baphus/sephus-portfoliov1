
"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import HolographicCard from './holographic-card';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Navbar from './navbar';

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
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1,
    y: 0,
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

  const [headlineFinished, setHeadlineFinished] = useState(false);
  const cardControls = useAnimation();
  const fadeInControls = useAnimation();

  useEffect(() => {
    if (headlineFinished) {
      cardControls.start("visible");
      fadeInControls.start("visible");
    }
  }, [headlineFinished, cardControls, fadeInControls]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.8]);
  const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const roles = [
    'Web Developer',
    'Digital Creator',
    'Video Editor',
    'Systems Designer',
    'Problem Solver',
    'Team Player',
    'Creative Thinker',
    'Tech Enthusiast',
  ];

  return (
    <section ref={targetRef} id="home" className="parallax-hero">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{y: cloudY}}
      >
        <Image 
          src="/clouds.jpg" 
          alt="Clouds background" 
          fill 
          className="object-cover" 
          data-ai-hint="clouds sky"
        />
      </motion.div>
       <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={headlineFinished ? "visible" : "hidden"}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <Navbar />
      </motion.div>
      <div className="sticky top-0 flex h-full w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: textY, opacity, scale }}
          className="container mx-auto px-4 md:px-6 text-center space-y-8 z-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl lg:text-9xl font-headline" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi, I'm ")
                      .typeString('<strong>Josephus</strong>')
                      .callFunction(() => {
                        setHeadlineFinished(true);
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
                className="mt-6 text-lg leading-8 text-white/90 sm:text-xl max-w-lg mx-auto md:mx-0 h-8"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
              >
                {headlineFinished && (
                   <Typewriter
                    onInit={(typewriter) => {
                      let typeInstance = typewriter.typeString("I'm a ");
                      
                      roles.forEach((role, index) => {
                        typeInstance = typeInstance
                          .typeString(role)
                          .pauseFor(1000)
                          .deleteChars(role.length)
                      });

                      typeInstance.start();
                    }}
                    options={{
                      loop: true,
                      autoStart: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                )}
              </div>
               <motion.div
                className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-y-4 sm:gap-y-0 sm:gap-x-6"
                variants={fadeIn}
                initial="hidden"
                animate={fadeInControls}
              >
                <a href="/Josephus_Sarsonas_Resume.pdf" download className="btn-aqua btn-aqua-primary text-base w-full sm:w-auto">
                  <span>Download Resume</span>
                </a>
                <a href="#about" className="btn-aqua btn-aqua-secondary text-base w-full sm:w-auto">
                  <span>Learn More</span>
                </a>
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
      </div>
    </section>
  );
}
