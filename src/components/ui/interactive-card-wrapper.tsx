"use client";

import React, { useRef, useState, useEffect } from "react";
import { useMousePositionRef } from "@/components/hooks/use-mouse-position-ref";
import { cn } from "@/lib/utils";

interface InteractiveCardWrapperProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function InteractiveCardWrapper({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.15)",
}: InteractiveCardWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useMousePositionRef(containerRef);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      setPosition({ ...positionRef.current });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    if (isHovered) {
      animationFrameId = requestAnimationFrame(updatePosition);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered, positionRef]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("relative overflow-hidden group", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
