import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Mac OS X list view. Alternating pale-blue rows, hairline separators — the
 * Finder and Mail treatment.
 *
 * Striping comes from `.aqua-row:nth-child(odd)`, so rows must be direct
 * children of AquaList for the pattern to land on the right rows.
 */
export function AquaList({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-control border border-aqua-hairline/40 bg-white/70 dark:bg-black/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface AquaRowProps {
  /** Left-hand label column. */
  label: React.ReactNode;
  /** Right-hand value column. */
  value?: React.ReactNode;
  icon?: React.ReactNode;
  /** Renders the row as a link. Links get a selection-blue hover. */
  href?: string;
  external?: boolean;
  className?: string;
}

export function AquaRow({ label, value, icon, href, external, className }: AquaRowProps) {
  const content = (
    <>
      {icon && <span className="shrink-0 text-aqua-graphite">{icon}</span>}
      <span className="min-w-0 flex-1 truncate text-[13px] font-bold text-foreground">
        {label}
      </span>
      {value && (
        <span className="min-w-0 shrink-0 truncate text-[13px] text-muted-foreground">
          {value}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn('aqua-row', className)}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return <div className={cn('aqua-row', className)}>{content}</div>;
}
