"use client";

import { useState, useEffect } from 'react';

type TypewriterEffectProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function TypewriterEffect({ text, speed = 100, className }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
