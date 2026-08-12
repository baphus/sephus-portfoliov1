"use client";

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import AquaWindow from '@/components/ui/aqua-window';
import { cn } from '@/lib/utils';

interface AquaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Shown in the title bar and used as the dialog's accessible name. */
  title: string;
  /** Optional strip along the bottom of the window. */
  statusBar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * A modal that is an actual Mac OS X window rather than a generic card.
 *
 * The stock shadcn dialog dims to flat black and puts an X in the corner;
 * neither belongs here. This one reuses AquaWindow for its chrome, so the red
 * traffic light is the close button — the only place on the site where the
 * lights do something, and the only place they are focusable.
 *
 * z-index sits above the dock (z-[100]), which would otherwise float over the
 * modal on every viewport.
 */
export default function AquaDialog({
  open,
  onOpenChange,
  title,
  statusBar,
  children,
  className,
}: AquaDialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            'aqua-overlay fixed inset-0 z-[200]',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0'
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            'fixed z-[200] outline-none',
            // Full-screen below md: a tall gallery in a centred box on a phone
            // leaves nothing but gutters.
            'inset-0 h-full w-full',
            'md:inset-auto md:left-1/2 md:top-1/2 md:h-auto md:w-[92vw] md:max-w-4xl',
            'md:-translate-x-1/2 md:-translate-y-1/2',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            className
          )}
        >
          <AquaWindow
            title={<DialogPrimitive.Title>{title}</DialogPrimitive.Title>}
            statusBar={statusBar}
            onClose={() => onOpenChange(false)}
            closeLabel={`Close ${title}`}
            className="h-full rounded-none md:h-auto md:rounded-[10px]"
            /**
             * The scroll bound lives here, as an explicit height, rather than
             * on a flex chain. `h-full` on the window resolved against an
             * auto-height dialog and collapsed, so the body outgrew the window
             * and `.aqua-window`'s overflow-hidden simply clipped it.
             *
             * 4rem covers the 32px title bar plus the 26px status bar with a
             * little slack. dvh so mobile browser chrome doesn't eat the last
             * screenful.
             */
            contentClassName="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain md:max-h-[calc(85vh-4rem)]"
          >
            {children}
          </AquaWindow>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export { DialogPrimitive as AquaDialogPrimitive };
