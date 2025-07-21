import Link from 'next/link';
import { RocketIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center bg-background/80 backdrop-blur-sm text-foreground fixed top-0 left-0 right-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <RocketIcon className="h-6 w-6 text-primary" />
        <span className="sr-only">TopClues Digital</span>
        <span className="ml-3 text-lg font-semibold tracking-wide">Topclues</span>
      </Link>
      <nav className="ml-auto flex gap-6 sm:gap-8">
        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Services
        </Link>
        <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
