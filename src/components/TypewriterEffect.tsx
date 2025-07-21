"use client";

import { useState, useEffect } from 'react';

type TypewriterEffectProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function TypewriterEffect({ text, speed = 50, className }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText(''); // Reset on text change
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
    <p className={className}>
      {displayedText}
      <span className="animate-pulse opacity-50">|</span>
    </p>
  );
}
