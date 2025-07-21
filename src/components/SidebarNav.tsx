"use client";

import Link from 'next/link';
import { Home, Info, Briefcase, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/about', icon: Info, label: 'About' },
  { href: '/services', icon: Briefcase, label: 'Services' },
  { href: '/contact', icon: Mail, label: 'Contact' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed bottom-0 left-0 z-50 w-full bg-background/80 backdrop-blur-sm border-t md:border-t-0 md:border-r md:w-20 md:h-screen md:bottom-auto">
        <div className="flex justify-around items-center h-full md:flex-col md:justify-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center h-16 w-full md:h-20 md:w-20 transition-colors duration-200",
                      isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                    prefetch={false}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </nav>
    </TooltipProvider>
  );
}
