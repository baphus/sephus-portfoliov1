"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { MotionConfig } from 'framer-motion';

interface SitePreferences {
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
  dockMagnificationEnabled: boolean;
  setDockMagnificationEnabled: (enabled: boolean) => void;
}

const SitePreferencesContext = createContext<SitePreferences | null>(null);

const ANIMATIONS_KEY = 'sephus-animations-enabled';
const DOCK_MAGNIFICATION_KEY = 'sephus-dock-magnification-enabled';

function storedBoolean(key: string, fallback: boolean) {
  const value = window.localStorage.getItem(key);
  return value === null ? fallback : value === 'true';
}

export function SitePreferencesProvider({ children }: { children: React.ReactNode }) {
  const [animationsEnabled, setAnimationsEnabledState] = useState(true);
  const [dockMagnificationEnabled, setDockMagnificationEnabledState] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setAnimationsEnabledState(storedBoolean(ANIMATIONS_KEY, !prefersReducedMotion));
    setDockMagnificationEnabledState(storedBoolean(DOCK_MAGNIFICATION_KEY, true));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.animations = animationsEnabled ? 'on' : 'off';
  }, [animationsEnabled]);

  const value = useMemo<SitePreferences>(
    () => ({
      animationsEnabled,
      setAnimationsEnabled: (enabled) => {
        setAnimationsEnabledState(enabled);
        window.localStorage.setItem(ANIMATIONS_KEY, String(enabled));
      },
      dockMagnificationEnabled,
      setDockMagnificationEnabled: (enabled) => {
        setDockMagnificationEnabledState(enabled);
        window.localStorage.setItem(DOCK_MAGNIFICATION_KEY, String(enabled));
      },
    }),
    [animationsEnabled, dockMagnificationEnabled]
  );

  return (
    <SitePreferencesContext.Provider value={value}>
      <MotionConfig reducedMotion={animationsEnabled ? 'never' : 'always'}>{children}</MotionConfig>
    </SitePreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error('useSitePreferences must be used inside SitePreferencesProvider');
  }

  return context;
}
