import * as React from 'react';
import { cn } from '@/lib/utils';

interface AquaWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title-bar text. Omit for a chrome-less Aqua panel. */
  title?: string;
  /** The authentic 10.0–10.2 pinstripe texture. */
  pinstripe?: boolean;
  /** Defaults to on whenever there is a title. */
  trafficLights?: boolean;
  /** Right-aligned title-bar content, as a real window puts its widgets. */
  titleAccessory?: React.ReactNode;
  /** Optional strip below the title bar. */
  toolbar?: React.ReactNode;
  /** Optional strip along the bottom. */
  statusBar?: React.ReactNode;
  /** Brighten the hairline and lift on hover. Off by default. */
  hoverable?: boolean;
  bodyClassName?: string;
}

/**
 * A Mac OS X window.
 *
 * The traffic lights are decoration: they are aria-hidden, unfocusable, and
 * carry no hover state, so they never imply a control that does nothing.
 */
export default function AquaWindow({
  title,
  pinstripe = true,
  trafficLights,
  titleAccessory,
  toolbar,
  statusBar,
  hoverable = false,
  bodyClassName,
  className,
  children,
  ...props
}: AquaWindowProps) {
  const showLights = trafficLights ?? Boolean(title);
  const hasChrome = Boolean(title) || showLights;

  return (
    <div
      className={cn(
        'aqua-window flex flex-col overflow-hidden',
        hoverable && 'aqua-hoverable',
        className
      )}
      {...props}
    >
      {hasChrome && (
        <div className="aqua-titlebar shrink-0">
          {showLights && (
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="aqua-light aqua-light-close" />
              <span className="aqua-light aqua-light-min" />
              <span className="aqua-light aqua-light-zoom" />
            </div>
          )}

          {title && (
            <span className="aqua-titlebar-title pointer-events-none absolute inset-x-0 truncate px-20 text-center">
              {title}
            </span>
          )}

          {titleAccessory && (
            <div className="relative ml-auto flex items-center gap-2">{titleAccessory}</div>
          )}
        </div>
      )}

      {toolbar && (
        <div className="shrink-0 border-b border-aqua-hairline/40 bg-black/[0.02] px-4 py-2 dark:bg-white/[0.02]">
          {toolbar}
        </div>
      )}

      <div className={cn('relative flex-1', pinstripe && 'aqua-pinstripe', bodyClassName)}>
        <div className="relative">{children}</div>
      </div>

      {statusBar && <div className="aqua-statusbar shrink-0">{statusBar}</div>}
    </div>
  );
}
