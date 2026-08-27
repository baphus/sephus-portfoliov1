"use client";

import { useEffect, useRef, useState, type PointerEvent } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import AquaWindow from '@/components/ui/aqua-window';

const RESTING_ROTATION_X = 1.5;
const RESTING_ROTATION_Y = -5;

export default function FloatingPortfolioArtifact() {
  const stageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stageRef, { amount: 0.2, margin: '100px' });
  const reduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [pageVisible, setPageVisible] = useState(true);
  const [themeReady, setThemeReady] = useState(false);
  const [reading, setReading] = useState(false);

  const targetRotateX = useMotionValue(RESTING_ROTATION_X);
  const targetRotateY = useMotionValue(RESTING_ROTATION_Y);
  const rotateX = useSpring(targetRotateX, { stiffness: 130, damping: 18, mass: 0.45 });
  const rotateY = useSpring(targetRotateY, { stiffness: 130, damping: 18, mass: 0.45 });

  useEffect(() => {
    setThemeReady(true);
    const syncVisibility = () => setPageVisible(document.visibilityState === 'visible');
    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility);
    return () => document.removeEventListener('visibilitychange', syncVisibility);
  }, []);

  useEffect(() => {
    if (reading || reduceMotion) {
      targetRotateX.set(0);
      targetRotateY.set(0);
      return;
    }

    targetRotateX.set(RESTING_ROTATION_X);
    targetRotateY.set(RESTING_ROTATION_Y);
  }, [reading, reduceMotion, targetRotateX, targetRotateY]);

  const resetTilt = () => {
    if (reading || reduceMotion) return;
    targetRotateX.set(RESTING_ROTATION_X);
    targetRotateY.set(RESTING_ROTATION_Y);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reading || reduceMotion || event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    targetRotateX.set(RESTING_ROTATION_X - y * 5);
    targetRotateY.set(RESTING_ROTATION_Y + x * 7);
  };

  const shouldFloat = !reduceMotion && isInView && pageVisible;
  const showSunglasses = themeReady && resolvedTheme === 'light';

  return (
    <div
      ref={stageRef}
      className="portfolio-stage relative mx-auto h-[535px] w-full max-w-[440px] sm:h-[500px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onFocusCapture={() => setReading(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setReading(false);
      }}
      role="group"
      aria-label="Floating preview of Josephus Sarsonas's portfolio PDF"
    >
      <motion.div
        className="portfolio-float absolute inset-0 flex items-start justify-center pt-4 sm:items-center sm:pt-0"
        animate={
          shouldFloat
            ? { y: [0, -8, 0], rotateZ: [-0.25, 0.2, -0.25] }
            : { y: 0, rotateZ: 0 }
        }
        transition={
          shouldFloat
            ? { duration: 5.8, ease: 'easeInOut', repeat: Infinity }
            : { duration: 0.25 }
        }
      >
        <motion.div
          className="portfolio-object relative w-[min(86vw,390px)] sm:w-[390px]"
          style={{ rotateX, rotateY }}
        >
          <div className="portfolio-object-shadow" aria-hidden="true" />

          <div className="portfolio-rear-window portfolio-rear-window--far" aria-hidden="true">
            <div className="portfolio-rear-titlebar">
              <span className="aqua-light aqua-light-close" />
              <span className="aqua-light aqua-light-min" />
              <span className="aqua-light aqua-light-zoom" />
              <span className="portfolio-rear-title">OEC Verify</span>
            </div>
            <Image
              src="/portfolio/oec-verify/landing.png"
              alt=""
              fill
              sizes="390px"
              className="object-cover object-top opacity-80"
            />
          </div>

          <div className="portfolio-rear-window portfolio-rear-window--near" aria-hidden="true">
            <div className="portfolio-rear-titlebar">
              <span className="aqua-light aqua-light-close" />
              <span className="aqua-light aqua-light-min" />
              <span className="aqua-light aqua-light-zoom" />
              <span className="portfolio-rear-title">OWBAP</span>
            </div>
            <Image
              src="/portfolio/owbap/bayanihan.png"
              alt=""
              fill
              priority
              sizes="390px"
              className="object-cover object-top opacity-[0.85]"
            />
          </div>

          <AquaWindow
            title="Josephus_Sarsonas.resume"
            pinstripe={false}
            className="portfolio-window-front"
            bodyClassName="bg-[#f4f2ec] dark:bg-[#d9d7d0]"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/pdf relative block h-[318px] overflow-hidden bg-[#f4f2ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:h-[350px]"
              aria-label="Open the full portfolio PDF in a new tab"
            >
              <Image
                src="/resume-preview.png"
                alt="Preview of Josephus Kim L. Sarsonas's résumé and project portfolio"
                fill
                priority
                sizes="(max-width: 640px) 86vw, 390px"
                quality={95}
                className="object-cover object-top transition-transform duration-300 group-hover/pdf:scale-[1.01]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f4f2ec] to-transparent" />
              <span className="portfolio-resume-action">
                View resume
                <ExternalLink className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            </a>
          </AquaWindow>
        </motion.div>
      </motion.div>

      <div className="portfolio-profile-anchor">
        <motion.div
          animate={
            shouldFloat
              ? { y: [0, -6, 0], rotateZ: [-0.7, 0.35, -0.7] }
              : { y: 0, rotateZ: 0 }
          }
          transition={
            shouldFloat
              ? { duration: 6.4, delay: 0.45, ease: 'easeInOut', repeat: Infinity }
              : { duration: 0.25 }
          }
        >
          <div className="portfolio-profile-window">
            <div className="portfolio-profile-titlebar">
              <span className="aqua-light aqua-light-close" aria-hidden="true" />
              <span className="aqua-light aqua-light-min" aria-hidden="true" />
              <span className="aqua-light aqua-light-zoom" aria-hidden="true" />
              <span className="portfolio-profile-title">Josephus.jpg</span>
            </div>
            <div className="relative h-[144px] overflow-hidden bg-white">
              <Image
                src="/about/600x750.png"
                alt="Josephus Kim L. Sarsonas"
                fill
                priority
                sizes="124px"
                className="object-cover object-top"
              />
              <div className="portfolio-sunglasses-anchor" aria-hidden="true">
                <AnimatePresence>
                  {showSunglasses && (
                    <motion.div
                      key="light-mode-sunglasses"
                      initial={
                        reduceMotion
                          ? false
                          : { x: 72, y: -46, rotate: 26, scale: 0.42, opacity: 0 }
                      }
                      animate={
                        reduceMotion
                          ? { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }
                          : {
                              x: [72, -4, 0],
                              y: [-46, 3, 0],
                              rotate: [26, -3, 0],
                              scale: [0.42, 1.04, 1],
                              opacity: [0, 1, 1],
                            }
                      }
                      exit={
                        reduceMotion
                          ? { opacity: 0, transition: { duration: 0 } }
                          : {
                              x: 34,
                              y: -22,
                              rotate: 12,
                              scale: 0.74,
                              opacity: 0,
                              transition: { duration: 0.22, ease: 'easeIn' },
                            }
                      }
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : {
                              duration: 0.78,
                              times: [0, 0.82, 1],
                              ease: [0.16, 1, 0.3, 1],
                            }
                      }
                    >
                      <Image
                        src="/deal-with-it-sunglasses.svg"
                        alt=""
                        width={832}
                        height={160}
                        unoptimized
                        className="h-auto w-full drop-shadow-[0_3px_2px_rgba(0,0,0,0.35)]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
