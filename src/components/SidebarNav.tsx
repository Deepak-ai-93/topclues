"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Home, Info, Briefcase, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/about', icon: Info, label: 'About' },
  { href: '/#', icon: 'logo', label: 'Topclues solutions' },
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
            const IconComponent = item.icon as React.ElementType;


            if (isCompanyIcon) {
                return (
                 <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className={cn(
                                "flex items-center justify-center h-16 w-16 rounded-full transition-all duration-300 ease-in-out hover:scale-110 text-primary -mb-1 animate-pulse-glow"
                            )}
                            prefetch={false}
                        >
                            <div className="h-14 w-14 flex items-center justify-center p-1">
                                <Image 
                                  src="http://topcluessolutions.in/wp-content/uploads/2025/03/cropped-TCS@Logo-02.png"
                                  alt="Topclues solutions Logo"
                                  width={56}
                                  height={56}
                                  className="object-contain"
                                />
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
                    <IconComponent className="h-7 w-7" />
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
