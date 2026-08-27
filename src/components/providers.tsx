"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { SitePreferencesProvider } from '@/components/site-preferences';

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SitePreferencesProvider>{children}</SitePreferencesProvider>
    </NextThemesProvider>
  );
}
