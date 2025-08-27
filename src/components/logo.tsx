import * as React from 'react';
import { useTheme } from 'next-themes';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme();
  const fillColor = theme === 'dark' ? 'hsl(var(--foreground))' : 'hsl(var(--foreground))';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fillColor}
      {...props}
    >
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM4 8.5L12 13L20 8.5V15.5L12 20L4 15.5V8.5Z" />
      <path d="M12 15.5L16.5 13.5L12 11.5L7.5 13.5L12 15.5Z" />
      <path d="M12 4.5L19 8L12 11.5L5 8L12 4.5Z" />
    </svg>
  );
};
