import * as React from 'react';
import { cn } from '@/lib/utils';

interface AquaWindowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Title-bar text. Omit for a chrome-less Aqua panel. Accepts a node so a
   * dialog can supply its own accessible heading element.
   */
  title?: React.ReactNode;
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
  /**
   * Applied to the wrapper directly around `children`. A scrolling body sets
   * the overflow here rather than on the pinstripe layer, so the texture stays
   * put instead of scrolling away with the content.
   */
  contentClassName?: string;
  /**
   * Turns the red light into a real close button. Opt in only where closing is
   * a genuine action — currently just the project modal.
   */
  onClose?: () => void;
  /** Accessible name for the close button. */
  closeLabel?: string;
}

/**
 * A Mac OS X window.
 *
 * The traffic lights are decoration: they are aria-hidden, unfocusable, and
 * carry no hover state, so they never imply a control that does nothing. The
 * one exception is `onClose`, where the red light closes the window and so
 * becomes a real focusable button — the affordance is honest there.
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
  contentClassName,
  onClose,
  closeLabel = 'Close',
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
            <div className="relative flex items-center gap-2">
              {onClose ? (
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={closeLabel}
                  className="aqua-light aqua-light-close aqua-light-button"
                />
              ) : (
                <span className="aqua-light aqua-light-close" aria-hidden="true" />
              )}
              <span className="aqua-light aqua-light-min" aria-hidden="true" />
              <span className="aqua-light aqua-light-zoom" aria-hidden="true" />
            </div>
          )}

          {title && (
            <div className="aqua-titlebar-title pointer-events-none absolute inset-x-0 truncate px-20 text-center">
              {title}
            </div>
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
        <div className={cn('relative', contentClassName)}>{children}</div>
      </div>

      {statusBar && <div className="aqua-statusbar shrink-0">{statusBar}</div>}
    </div>
  );
}
