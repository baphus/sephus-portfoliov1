"use client";

import React, { useState } from 'react';
import type { Skill } from '@/lib/skills-data';
import { cn } from '@/lib/utils';

const GROUP_LABEL: Record<Skill['category'], string> = {
  practice: 'Practice',
  language: 'Language',
  frontend: 'Frontend',
  backend: 'Backend',
  data: 'Data',
  tools: 'Tools',
};

/**
 * A brand mark from simpleicons, falling back to a monogram when the slug has
 * no icon. Without the fallback a missing slug renders as a broken image.
 */
function SkillIcon({ skill }: { skill: Skill }) {
  const [failed, setFailed] = useState(false);
  const showBrand = Boolean(skill.slug) && !failed;

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control border border-aqua-hairline/30 bg-white/70 shadow-inner dark:bg-black/30">
      {showBrand ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}`}
          alt=""
          width={22}
          height={22}
          loading="lazy"
          className="h-[22px] w-[22px] object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="font-headline text-lg font-bold text-aqua-graphite">
          {skill.title.charAt(0)}
        </span>
      )}
    </span>
  );
}

export default function SkillTile({
  skill,
  className,
}: {
  skill: Skill;
  className?: string;
}) {
  return (
    <div className={cn('aqua-window aqua-hoverable aqua-pinstripe h-full p-4', className)}>
      <div className="relative flex h-full flex-col gap-3">
        <div className="flex items-center gap-3">
          <SkillIcon skill={skill} />
          <div className="min-w-0">
            <h4 className="truncate font-headline text-[15px] font-bold text-foreground">
              {skill.title}
            </h4>
            <p className="text-[11px] text-muted-foreground">{GROUP_LABEL[skill.category]}</p>
          </div>
        </div>
        <p className="text-[13px] leading-relaxed text-muted-foreground">{skill.description}</p>
      </div>
    </div>
  );
}
