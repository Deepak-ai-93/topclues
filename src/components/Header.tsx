import Link from 'next/link';
import { RocketIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background text-foreground border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <RocketIcon className="h-6 w-6 text-primary" />
        <span className="sr-only">TopClues Digital</span>
        <span className="ml-2 text-lg font-bold">Topclues Solutions</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
