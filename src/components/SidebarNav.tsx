"use client";

import Link from 'next/link';
import { Home, Info, Briefcase, Mail, Building2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/about', icon: Info, label: 'About' },
  { href: '/#', icon: Building2, label: 'Topclues solutions' },
  { href: '/services', icon: Briefcase, label: 'Services' },
  { href: '/contact', icon: Mail, label: 'Contact' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-end justify-center h-16 space-x-2 rounded-2xl bg-background/80 backdrop-blur-sm p-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isCompanyIcon = item.label === 'Topclues solutions';

            if (isCompanyIcon) {
                return (
                 <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className={cn(
                                "flex items-center justify-center h-16 w-16 rounded-lg transition-all duration-300 ease-in-out hover:scale-110 text-primary -mb-1"
                            )}
                            prefetch={false}
                        >
                            <div className="h-14 w-14 bg-primary rounded-lg flex items-center justify-center">
                                <item.icon className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <span className="sr-only">{item.label}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={15}>
                    <p>{item.label}</p>
                    </TooltipContent>
              </Tooltip>
                )
            }
            
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-lg transition-all duration-300 ease-in-out hover:scale-125 hover:mb-2 hover:text-primary",
                      isActive ? "text-primary scale-125 mb-2" : "text-muted-foreground"
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
