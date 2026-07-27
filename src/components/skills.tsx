"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import AquaWindow from '@/components/ui/aqua-window';
import AquaSegmentedControl from '@/components/ui/aqua-segmented-control';
import SkillTile from '@/components/ui/skill-tile';
import { IconCloud } from '@/components/ui/interactive-icon-cloud';
import { filterSkills, skillGroups, featuredSlugs } from '@/lib/skills-data';

export default function Skills() {
  const [group, setGroup] = useState('featured');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visible = useMemo(() => filterSkills(group), [group]);

  const activeGroup = useMemo(
    () => skillGroups.find((entry) => entry.id === group) ?? skillGroups[0],
    [group]
  );

  const segments = useMemo(
    () =>
      skillGroups.map((entry) => ({
        id: entry.id,
        label: entry.label,
        count: filterSkills(entry.id).length,
      })),
    []
  );

  // The marquee needs enough tiles to fill a row before it can loop cleanly.
  const marqueeItems = useMemo(() => {
    if (visible.length === 0) return [];
    const repeats = Math.ceil(15 / visible.length);
    return Array(repeats).fill(visible).flat() as typeof visible;
  }, [visible]);

  const duration = useMemo(() => Math.max(40, visible.length * 6), [visible.length]);

  const cloudSlugs = useMemo(() => {
    const slugs = visible.filter((skill) => skill.slug).map((skill) => skill.slug as string);
    return slugs.length >= 5 ? slugs : featuredSlugs;
  }, [visible]);

  return (
    <div className="space-y-10 overflow-hidden py-4">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <AquaWindow title="Skills">
            <div className="p-6 md:p-8">
              <div className="grid items-start gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    Grouped by where each one sits in a project rather than by how well I claim
                    to know it.
                  </p>

                  <AquaSegmentedControl
                    segments={segments}
                    value={group}
                    onValueChange={setGroup}
                    label="Filter skills"
                  />

                  {/* Get Info inspector: a description of the group, not a quote. */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={group}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-control border border-aqua-hairline/35 bg-black/[0.02] p-4 dark:bg-white/[0.03]"
                    >
                      <p className="text-[11px] font-bold text-muted-foreground">
                        {activeGroup.label} — {visible.length}{' '}
                        {visible.length === 1 ? 'item' : 'items'}
                      </p>
                      <p className="mt-2 text-[14px] leading-relaxed text-foreground">
                        {activeGroup.note}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex min-h-[320px] items-center justify-center">
                  <div className="w-full max-w-sm">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={group}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        {mounted && <IconCloud iconSlugs={cloudSlugs} />}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </AquaWindow>
        </motion.div>
      </div>

      {marqueeItems.length > 0 && (
        <div className="group/marquees relative w-full">
          <div className="flex flex-col gap-5">
            <div className="-my-4 flex select-none overflow-hidden py-4">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 animate-marquee group-hover/marquees:[animation-play-state:paused]"
                  style={{ animationDuration: `${duration}s` }}
                  aria-hidden={copy === 1}
                >
                  {marqueeItems.map((skill, index) => (
                    <div key={`a-${copy}-${skill.title}-${index}`} className="mx-3 w-[300px]">
                      <SkillTile skill={skill} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="-my-4 flex select-none overflow-hidden py-4">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 animate-marquee-reverse group-hover/marquees:[animation-play-state:paused]"
                  style={{ animationDuration: `${duration * 1.2}s` }}
                  aria-hidden={copy === 1}
                >
                  {marqueeItems.map((skill, index) => (
                    <div key={`b-${copy}-${skill.title}-${index}`} className="mx-3 w-[300px]">
                      <SkillTile skill={skill} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 text-center md:px-6">
        <Button asChild className="btn-aqua btn-aqua-primary h-12 px-8">
          <Link href="/contact">
            <span className="flex items-center gap-2">
              Get in touch <Mail className="h-4 w-4" />
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
