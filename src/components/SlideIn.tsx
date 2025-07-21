"use client";

import { useState, useRef, useEffect, ReactNode } from 'react';

type SlideInProps = {
  children: ReactNode;
  className?: string;
  from?: 'left' | 'right';
  delay?: number;
};

export function SlideIn({ children, className, from = 'left', delay = 0 }: SlideInProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [delay]);

  const transformClasses =
    from === 'left'
      ? 'transform -translate-x-16'
      : 'transform translate-x-16';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${transformClasses}`
      } ${className || ''}`}
    >
      {children}
    </div>
  );
}
