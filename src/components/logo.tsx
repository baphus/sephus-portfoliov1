import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('h-8 w-auto text-primary', className)}
      fill="currentColor"
    >
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 12.33L19.92 7.8L12 3.28L4.08 7.8L12 12.33ZM13 13.59V19.94L20 16.22V9.58L13 13.59ZM11 13.59L4 9.58V16.22L11 19.94V13.59Z" />
    </svg>
  );
}
