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
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-end justify-center h-16 space-x-2 rounded-2xl bg-background/80 backdrop-blur-sm border p-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-lg transition-all duration-300 ease-in-out hover:scale-125 hover:mb-2 hover:bg-primary/10",
                      isActive ? "text-primary bg-primary/10 scale-125 mb-2" : "text-muted-foreground hover:text-primary"
                    )}
                    prefetch={false}
                  >
                    <item.icon className="h-7 w-7" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={15}>
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
