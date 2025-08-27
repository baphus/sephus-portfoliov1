"use client";

import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  const animateCursor = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${position.x - 10}px, ${position.y - 10}px)`;
    }
    requestRef.current = requestAnimationFrame(animateCursor);
  };
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('[role="button"]') ||
            target.closest('.cursor-pointer')
        ) {
            setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorClasses = [
    'custom-cursor',
    isClicked ? 'clicked' : '',
    isHovering ? 'hovering' : '',
  ].join(' ');

  return (
    <div
      ref={cursorRef}
      className={cursorClasses}
    />
  );
};

export default CustomCursor;
