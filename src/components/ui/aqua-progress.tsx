"use client";

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/** How long each bar takes to reach its target. */
const FILL_DURATION = 1.1;
/** Gap between consecutive bars starting, in seconds. */
export const STAGGER_STEP = 0.09;

interface AquaProgressProps {
  label: string;
  /** 0–100. */
  value: number;
  /** Position in the group, used for the stagger delay. */
  index?: number;
  className?: string;
}

/**
 * The Mac OS X determinate progress bar: a recessed trough with a glossy blue
 * lozenge carrying diagonal candy-stripes. The stripes scroll for as long as
 * the bar is on screen (CSS, in globals.css); the fill width is animated here
 * so it can stagger and so it can honour reduced-motion.
 *
 * The fill re-runs every time the bar re-enters the viewport, which is what
 * `viewport={{ once: false }}` buys — framer reverts to `initial` on exit.
 */
export default function AquaProgress({ label, value, index = 0, className }: AquaProgressProps) {
  const reduceMotion = useReducedMotion();
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={cn('space-y-1.5', className)}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-headline text-[13px] font-bold text-foreground">{label}</span>
        <span className="text-[12px] font-bold tabular-nums text-muted-foreground">
          {clamped}%
        </span>
      </div>

      <div
        className="aqua-progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {reduceMotion ? (
          // No fill animation, no stripe scroll (the stripes are stopped by the
          // reduced-motion block in globals.css). The bar still reads correctly.
          <div className="aqua-progress-fill" style={{ width: `${clamped}%` }} />
        ) : (
          <motion.div
            className="aqua-progress-fill"
            initial={{ width: '0%' }}
            whileInView={{ width: `${clamped}%` }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{
              duration: FILL_DURATION,
              delay: index * STAGGER_STEP,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        )}
      </div>
    </div>
  );
}
