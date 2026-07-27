"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AquaSegment {
  id: string;
  label: string;
  /** Optional trailing count, as Finder shows in a sidebar. */
  count?: number;
}

interface AquaSegmentedControlProps {
  segments: AquaSegment[];
  value: string;
  onValueChange: (id: string) => void;
  /** Announced to assistive technology as the group's purpose. */
  label: string;
  className?: string;
}

/**
 * Aqua segmented control: one recessed capsule, divided into glossy segments.
 *
 * Arrow keys move between segments and the selected segment is the only tab
 * stop, which is the expected behaviour for a tablist.
 */
export default function AquaSegmentedControl({
  segments,
  value,
  onValueChange,
  label,
  className,
}: AquaSegmentedControlProps) {
  const refs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const move = (from: number, delta: number) => {
    const next = (from + delta + segments.length) % segments.length;
    onValueChange(segments[next].id);
    refs.current[next]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        move(index, 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        move(index, -1);
        break;
      case 'Home':
        event.preventDefault();
        move(index, -index);
        break;
      case 'End':
        event.preventDefault();
        move(index, segments.length - 1 - index);
        break;
      default:
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn('aqua-segment-group flex-wrap', className)}
    >
      {segments.map((segment, index) => {
        const selected = segment.id === value;
        return (
          <button
            key={segment.id}
            ref={(node) => {
              refs.current[index] = node;
            }}
            role="tab"
            type="button"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onValueChange(segment.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className="aqua-segment"
          >
            {segment.label}
            {typeof segment.count === 'number' && (
              <span className={cn('ml-1.5 tabular-nums', selected ? 'opacity-80' : 'opacity-60')}>
                {segment.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
