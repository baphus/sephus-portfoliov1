
"use client";

import React, { useMemo } from 'react';
import SkillTile from '@/components/ui/skill-tile';
import { filterSkills } from '@/lib/skills-data';

/**
 * The home-page technology strip. Shares its data with the Skills page through
 * skills-data.ts; the two used to hold separate copies of the same array.
 */
export default function TechMarquee() {
  const featured = useMemo(() => filterSkills('featured'), []);

  const marqueeItems = useMemo(() => {
    const repeats = Math.ceil(15 / featured.length);
    return Array(repeats).fill(featured).flat() as typeof featured;
  }, [featured]);

  const duration = useMemo(() => featured.length * 8, [featured.length]);

  return (
    <div className="group/marquees relative w-full overflow-hidden">
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
  );
}
